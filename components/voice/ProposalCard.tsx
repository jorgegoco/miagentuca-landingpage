import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Sparkles } from "lucide-react"

export interface Proposal {
  sector: string
  problem: string
  title: string
  steps: string[]
  hoursSavedPerWeek: number | null
  // The agent may send 0-1, 0-100 or a word ("alta"); the badge handles all three
  confidence: number | string | null
}

export const emptyProposal: Proposal = {
  sector: "",
  problem: "",
  title: "",
  steps: [],
  hoursSavedPerWeek: null,
  confidence: null,
}

const confidenceBadge = (confidence: Proposal["confidence"]) => {
  if (confidence === null || confidence === "") return null
  if (typeof confidence === "string") {
    const level = confidence.toLowerCase()
    const style = level.startsWith("alt") || level === "high"
      ? "bg-green-100 text-green-700"
      : level.startsWith("med")
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700"
    return { label: `Confianza ${confidence}`, style }
  }
  const pct = Math.round(confidence > 1 ? confidence : confidence * 100)
  const style = pct >= 75
    ? "bg-green-100 text-green-700"
    : pct >= 50
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700"
  return { label: `Confianza ${pct}%`, style }
}

interface ProposalCardProps {
  proposal: Proposal
  highlightedStep: number | null
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal, highlightedStep }) => {
  const hasContent = Boolean(proposal.title || proposal.problem || proposal.steps.length)
  const badge = confidenceBadge(proposal.confidence)

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden min-h-[280px]">
      <AnimatePresence mode="wait">
        {!hasContent ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full min-h-[280px] flex flex-col items-center justify-center gap-3 p-8 text-center"
          >
            <Sparkles className="w-8 h-8 text-slate-300" />
            <p className="text-slate-400 text-sm">
              Tu propuesta de automatización aparecerá aquí
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {proposal.sector && (
                <span className="text-xs font-semibold bg-navy-900 text-white px-3 py-1 rounded-full">
                  {proposal.sector}
                </span>
              )}
              {badge && (
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${badge.style}`}>
                  {badge.label}
                </span>
              )}
            </div>

            {proposal.problem && (
              <p className="text-sm text-slate-500 mb-1">
                <span className="font-medium text-slate-600">Problema:</span> {proposal.problem}
              </p>
            )}
            {proposal.title && (
              <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-5">
                {proposal.title}
              </h3>
            )}

            <div className="space-y-2">
              {proposal.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`flex items-start gap-3 p-3 rounded-lg border-l-4 transition-colors duration-300 ${
                    highlightedStep === i
                      ? "border-l-electric-500 bg-electric-400/10"
                      : "border-l-slate-200 bg-slate-50"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white transition-colors duration-300 ${
                      highlightedStep === i ? "bg-electric-500" : "bg-slate-400"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-700">{step}</p>
                </motion.div>
              ))}
            </div>

            {typeof proposal.hoursSavedPerWeek === "number" && (
              <p className="mt-5 pt-4 border-t border-slate-200 text-sm font-medium text-navy-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-electric-600" />
                Ahorro estimado:{" "}
                <span className="text-electric-600 font-bold">
                  {proposal.hoursSavedPerWeek} h/semana
                </span>
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProposalCard
