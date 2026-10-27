import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mic, MicOff, Loader2, Volume2, AlertCircle } from "lucide-react"
import { useVocalBridge } from "@vocalbridgeai/react"
import {
  ConnectionState,
  VocalBridgeError,
  VocalBridgeErrorCode,
} from "@vocalbridgeai/sdk"

type MicStatus = "idle" | "conectando" | "escuchando" | "hablando"

const statusLabel: Record<MicStatus, string> = {
  idle: "Pulsa para hablar",
  conectando: "Conectando...",
  escuchando: "Escuchando...",
  hablando: "El agente está hablando",
}

// The SDK wraps getUserMedia failures, so look at the original cause too
const isMicDenied = (err: unknown) => {
  if (!(err instanceof VocalBridgeError)) return false
  if (err.code === VocalBridgeErrorCode.MicrophoneError) return true
  const cause = err.cause as { name?: string } | undefined
  return cause?.name === "NotAllowedError" || cause?.name === "NotFoundError"
}

const MicButton: React.FC = () => {
  const { state, connect, disconnect, error, client } = useVocalBridge()
  const [agentSpeaking, setAgentSpeaking] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const isActive = state !== ConnectionState.Disconnected
  const isConnected = state === ConnectionState.Connected

  // Active speakers come from the underlying room; anyone but us is the agent
  useEffect(() => {
    const room = client.room
    if (!room || !isConnected) {
      setAgentSpeaking(false)
      return
    }
    const onSpeakers = (speakers: Array<{ identity: string }>) => {
      setAgentSpeaking(
        speakers.some((p) => p.identity !== room.localParticipant.identity),
      )
    }
    room.on("activeSpeakersChanged", onSpeakers)
    return () => {
      room.off("activeSpeakersChanged", onSpeakers)
    }
  }, [client, isConnected])

  useEffect(() => {
    if (!error) return
    setMessage(
      isMicDenied(error)
        ? "Necesitamos permiso para usar el micrófono. Actívalo en la barra de direcciones del navegador y vuelve a intentarlo."
        : "No se puede conectar con el agente de voz. El demo puede no estar disponible.",
    )
  }, [error])

  const status: MicStatus = !isActive
    ? "idle"
    : !isConnected
      ? "conectando"
      : agentSpeaking
        ? "hablando"
        : "escuchando"

  const handleClick = async () => {
    setMessage(null)
    if (isActive) {
      await disconnect()
      return
    }
    try {
      // Must run inside the click handler: browsers only grant the mic after a user gesture
      await connect()
    } catch {
      // error is surfaced through useVocalBridge().error
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        {isActive && (
          <motion.span
            className="absolute inset-0 rounded-full bg-electric-400/30"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: status === "hablando" ? 0.8 : 1.6, repeat: Infinity }}
          />
        )}
        <button
          onClick={handleClick}
          aria-label={isActive ? "Terminar conversación" : "Empezar a hablar"}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)] ${
            isActive
              ? "bg-electric-500 text-white hover:bg-electric-600"
              : "bg-navy-800 border border-electric-500 text-electric-400 hover:scale-105"
          }`}
        >
          {status === "conectando" ? (
            <Loader2 className="w-8 h-8 animate-spin" />
          ) : status === "hablando" ? (
            <Volume2 className="w-8 h-8" />
          ) : isActive ? (
            <MicOff className="w-8 h-8" />
          ) : (
            <Mic className="w-8 h-8" />
          )}
        </button>
      </div>

      <p className="text-sm font-medium text-slate-300">{statusLabel[status]}</p>

      {message && (
        <div className="max-w-sm p-3 bg-red-500/10 border border-red-400/30 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-300 text-xs leading-relaxed">{message}</p>
        </div>
      )}
    </div>
  )
}

export default MicButton
