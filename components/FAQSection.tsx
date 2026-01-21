import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question:
      "Cuál es la diferencia entre automatización clásica y agentes de IA?",
    answer:
      "La automatización clásica sigue reglas fijas: 'si pasa X, haz Y'. Los agentes de IA entienden contexto y toman decisiones. Por ejemplo, un bot clásico reenvía todos los emails con 'urgente' en el asunto. Un agente lee el email, evalúa si realmente es urgente, y decide la mejor respuesta según tu historial y preferencias.",
  },
  {
    question: "Necesito cambiar mi software actual para usar agentes?",
    answer:
      "No. Los agentes se integran con tus herramientas existentes: email, Google Sheets, tu CRM, sistemas de facturación... Trabajan como un empleado digital que usa las mismas aplicaciones que tu equipo. No hay migraciones ni cambios de plataforma.",
  },
  {
    question: "Cuánto tiempo tarda implementar un agente?",
    answer:
      "Un agente típico está funcionando en 2-3 semanas. La primera semana definimos juntos el proceso y las reglas. La segunda desarrollamos e integramos. La tercera ajustamos y entrenamos. Tras éso, tienes soporte continuo para mejoras.",
  },
  {
    question: "Qué pasa si el agente comete un error?",
    answer:
      "Gracias a la arquitectura de 3 capas, los errores son raros y controlados. La IA decide, pero el código ejecuta. Además, configuro puntos de supervision donde tu equipo valida decisiones críticas antes de que se ejecuten. Tienes el control final siempre.",
  },
  {
    question: "Mis datos están seguros? Quién tiene acceso?",
    answer:
      "Tu privacidad es prioritaria. Los agentes solo acceden a los datos necesarios para su tarea, con permisos mínimos. Todo el tráfico está encriptado y no comparto información con terceros. Puedes ver exactamente que datos procesa cada agente y revocar accesos en cualquier momento.",
  },
]

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-electric-100 text-electric-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            Preguntas Frecuentes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-navy-900 mb-6"
          >
            Resolvemos tus dudas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Lo que otros clientes preguntan antes de empezar
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-white border-electric-300 shadow-lg"
                    : "bg-white border-slate-200 hover:border-electric-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`font-semibold text-lg ${
                      openIndex === index
                        ? "text-electric-600"
                        : "text-navy-900"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${
                        openIndex === index
                          ? "text-electric-600"
                          : "text-slate-400"
                      }`}
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 mt-4 pt-4 border-t border-slate-100 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
