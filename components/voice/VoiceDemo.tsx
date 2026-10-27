import React, { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { RotateCcw } from "lucide-react"
import {
  useAgentActions,
  useTranscript,
  useVocalBridge,
} from "@vocalbridgeai/react"
import { ConnectionState } from "@vocalbridgeai/sdk"
import MicButton from "./MicButton"
import ProposalCard, { emptyProposal, Proposal } from "./ProposalCard"
import SectorChips from "./SectorChips"

const SESSION_LIMIT_SECONDS = 180

type CardStatus = "idle" | "listening" | "proposal" | "done"

interface CardState {
  proposal: Proposal
  highlightedStep: number | null
  status: CardStatus
}

const initialCard: CardState = {
  proposal: emptyProposal,
  highlightedStep: null,
  status: "idle",
}

const toText = (value: unknown): string => {
  if (typeof value === "string") return value
  if (value && typeof value === "object") {
    const v = value as Record<string, unknown>
    return String(v.title ?? v.text ?? v.name ?? v.description ?? "")
  }
  return value == null ? "" : String(value)
}

// Agent payloads are untrusted input: keep only known fields, coerce types
const parseProposal = (payload: Record<string, unknown>): Partial<Proposal> => {
  const patch: Partial<Proposal> = {}
  if ("sector" in payload) patch.sector = toText(payload.sector)
  if ("problem" in payload) patch.problem = toText(payload.problem)
  if ("title" in payload) patch.title = toText(payload.title)
  if (Array.isArray(payload.steps)) {
    patch.steps = payload.steps.slice(0, 3).map(toText)
  }
  if ("hoursSavedPerWeek" in payload) {
    const hours = Number(payload.hoursSavedPerWeek)
    patch.hoursSavedPerWeek = Number.isFinite(hours) ? hours : null
  }
  if ("confidence" in payload) {
    const c = payload.confidence
    patch.confidence = typeof c === "number" || typeof c === "string" ? c : null
  }
  return patch
}

const formatTime = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`

const VoiceDemo: React.FC = () => {
  const { state, connect, disconnect } = useVocalBridge()
  const { transcript, clear: clearTranscript } = useTranscript()
  const { onAction, sendAction } = useAgentActions()

  const [card, setCard] = useState<CardState>(initialCard)
  const [secondsLeft, setSecondsLeft] = useState(SESSION_LIMIT_SECONDS)
  const [timedOut, setTimedOut] = useState(false)

  const isActive = state !== ConnectionState.Disconnected
  const isConnected = state === ConnectionState.Connected

  // Action handlers are registered once, so they read the latest values from refs
  const cardRef = useRef(card)
  const connectedRef = useRef(isConnected)
  connectedRef.current = isConnected

  // Single place where the card changes: update the page, then tell the agent what is on screen
  const applyCard = useCallback(
    (patch: Partial<CardState>) => {
      const next = { ...cardRef.current, ...patch }
      cardRef.current = next
      setCard(next)
      if (connectedRef.current) {
        sendAction("ui_sync", {
          ...next.proposal,
          highlightedStep: next.highlightedStep,
          status: next.status,
        }).catch(() => {})
      }
    },
    [sendAction],
  )

  // Agent -> page
  useEffect(() => {
    const unsubscribers = [
      onAction("show_proposal", (payload) => {
        applyCard({
          proposal: { ...emptyProposal, ...parseProposal(payload) },
          highlightedStep: null,
          status: "proposal",
        })
      }),
      onAction("update_proposal", (payload) => {
        applyCard({
          proposal: { ...cardRef.current.proposal, ...parseProposal(payload) },
          status: "proposal",
        })
      }),
      onAction("highlight_step", (payload) => {
        const index = Number(payload.index)
        if (Number.isInteger(index) && index >= 0 && index <= 2) {
          applyCard({ highlightedStep: index })
        }
      }),
      onAction("clear_ui", () => {
        applyCard({
          proposal: emptyProposal,
          highlightedStep: null,
          status: connectedRef.current ? "listening" : "idle",
        })
      }),
    ]
    return () => unsubscribers.forEach((unsubscribe) => unsubscribe())
  }, [onAction, applyCard])

  // Page -> agent: the agent answers sector_selected out loud
  const handleSectorSelect = (sector: string) => {
    applyCard({ proposal: { ...cardRef.current.proposal, sector } })
    if (connectedRef.current) {
      sendAction("sector_selected", { sector }).catch(() => {})
    }
  }

  // Session lifecycle: fresh card when a session starts, "done" when it ends
  useEffect(() => {
    if (isActive) {
      setTimedOut(false)
      clearTranscript()
      applyCard({
        proposal: { ...emptyProposal, sector: cardRef.current.proposal.sector },
        highlightedStep: null,
        status: "idle",
      })
    } else if (cardRef.current.status !== "idle") {
      applyCard({
        highlightedStep: null,
        status: cardRef.current.proposal.title ? "done" : "idle",
      })
    }
  }, [isActive, applyCard, clearTranscript])

  useEffect(() => {
    if (isConnected && cardRef.current.status === "idle") {
      applyCard({ status: "listening" })
    }
  }, [isConnected, applyCard])

  // Hard cap so a forgotten tab does not keep a paid voice session open
  useEffect(() => {
    if (!isActive) return
    const startedAt = Date.now()
    setSecondsLeft(SESSION_LIMIT_SECONDS)
    const timer = setInterval(() => {
      const left = SESSION_LIMIT_SECONDS - Math.floor((Date.now() - startedAt) / 1000)
      setSecondsLeft(Math.max(left, 0))
      if (left <= 0) {
        clearInterval(timer)
        setTimedOut(true)
        disconnect()
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [isActive, disconnect])

  const recentTranscript = transcript.slice(-4)

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <MicButton />

      {isActive && (
        <p className="-mt-4 text-xs text-slate-500">
          Tiempo restante: {formatTime(secondsLeft)}
        </p>
      )}

      {timedOut && !isActive && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => connect().catch(() => {})}
          className="-mt-4 inline-flex items-center gap-2 text-sm font-medium text-electric-400 hover:text-white transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Demo terminada — ¿la repetimos?
        </motion.button>
      )}

      <SectorChips selected={card.proposal.sector} onSelect={handleSectorSelect} />

      <ProposalCard proposal={card.proposal} highlightedStep={card.highlightedStep} />

      {recentTranscript.length > 0 && (
        <div className="w-full space-y-1">
          {recentTranscript.map((entry) => (
            <p
              key={`${entry.timestamp}-${entry.role}`}
              className={`text-xs leading-relaxed ${
                entry.role === "agent" ? "text-electric-400" : "text-slate-400"
              }`}
            >
              <span className="font-semibold">
                {entry.role === "agent" ? "Agente" : "Tú"}:
              </span>{" "}
              {entry.text}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default VoiceDemo
