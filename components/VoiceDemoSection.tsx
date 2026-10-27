import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Ear, Brain, MonitorSmartphone } from "lucide-react"
import VoiceProvider from "./voice/VoiceProvider"
import VoiceDemo from "./voice/VoiceDemo"

const steps = [
  {
    title: "Escucha",
    detail: "Agente en primer plano",
    icon: <Ear className="w-5 h-5 text-white" />,
  },
  {
    title: "Piensa",
    detail: "Agente en segundo plano",
    icon: <Brain className="w-5 h-5 text-white" />,
  },
  {
    title: "Actúa",
    detail: "Actualiza la pantalla",
    icon: <MonitorSmartphone className="w-5 h-5 text-white" />,
  },
]

interface VoiceDemoSectionProps {
  onOpenModal: () => void
}

const VoiceDemoSection: React.FC<VoiceDemoSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="voice-demo" className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Habla con tu <span className="text-electric-400">agente</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Cuéntale un problema de tu negocio. Te propone cómo automatizarlo
            mientras lo ves aparecer en pantalla.
          </motion.p>
        </div>

        {/* Cómo funciona */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-wider text-electric-400 uppercase text-center mb-4">
            Cómo funciona
          </p>
          <div className="grid grid-cols-3 gap-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center p-4 bg-navy-800 rounded-xl border border-navy-700 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-500 to-blue-600 flex items-center justify-center mb-3 shadow-sm">
                  {step.icon}
                </div>
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="text-[11px] text-slate-400 mt-1">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <VoiceProvider>
          <VoiceDemo />
        </VoiceProvider>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-electric-500 text-white text-sm font-bold tracking-wide hover:bg-electric-600 hover:scale-105 transition-all cursor-pointer group shadow-[0_0_20px_rgba(56,189,248,0.2)]"
          >
            SOLICITAR AUDITORÍA GRATUITA
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default VoiceDemoSection
