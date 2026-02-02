import React from "react"
import { motion } from "framer-motion"
import { FileCheck, ShoppingCart, MessageSquare, ScanLine, ArrowRight } from "lucide-react"

const useCases = [
  {
    title: "Clasificación automática de documentos",
    sector: "Gestoría / Asesoría",
    badge: "Gestorías",
    badgeColor: "bg-amber-100 text-amber-700",
    icon: <FileCheck className="w-7 h-7 text-amber-600" />,
    proceso:
      "500+ documentos/mes clasificados automáticamente (facturas, nóminas, contratos, modelos fiscales)",
    resultado: "80% menos tiempo en archivo y clasificación",
    description:
      "Un agente IA recibe los documentos por email, los lee, los clasifica por tipo y cliente, y los archiva en la carpeta correcta. El equipo solo revisa excepciones.",
  },
  {
    title: "Comparador de proveedores automático",
    sector: "Constructora / Compras",
    badge: "Compras",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: <ShoppingCart className="w-7 h-7 text-blue-600" />,
    proceso:
      "Búsqueda y comparación de proveedores en tiempo real para cada pedido",
    resultado: "15.000€/año ahorrados en compras",
    description:
      "Describes lo que necesitas, el agente busca proveedores, compara precios, plazos y condiciones, y te presenta una recomendación con la mejor opción.",
  },
  {
    title: "Chatbot de reservas 24/7",
    sector: "Restaurante / Hostelería",
    badge: "Hostelería",
    badgeColor: "bg-purple-100 text-purple-700",
    icon: <MessageSquare className="w-7 h-7 text-purple-600" />,
    proceso:
      "Atención automática de reservas por WhatsApp y web fuera de horario",
    resultado: "35% más reservas fuera de horario comercial",
    description:
      "Un agente atiende consultas de clientes 24/7, gestiona reservas, confirma disponibilidad y envía recordatorios automáticos. El personal se centra en la atención presencial.",
  },
  {
    title: "Extracción de datos de albaranes",
    sector: "Logística / Distribución",
    badge: "Logística",
    badgeColor: "bg-cyan-100 text-cyan-700",
    icon: <ScanLine className="w-7 h-7 text-cyan-600" />,
    proceso:
      "Lectura automática de albaranes en PDF y volcado al ERP",
    resultado: "3 horas/día recuperadas en introducción de datos",
    description:
      "El agente lee cada albarán, extrae proveedor, referencias, cantidades e importes, y los registra automáticamente en el sistema de gestión. Solo interviene un humano cuando hay discrepancias.",
  },
]

const UseCasesSection: React.FC = () => {
  return (
    <section id="casos-de-uso" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-navy-900 mb-6"
          >
            Casos de uso reales en Cantabria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Estos son ejemplos de procesos que automatizamos con agentes IA para
            pymes en la ciudad de Santander y Cantabria.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${useCase.badgeColor}`}
                >
                  {useCase.badge}
                </span>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    <span className="font-medium">Sector:</span>{" "}
                    {useCase.sector}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Proceso
                  </span>
                  <p className="text-sm text-slate-700 mt-1">
                    {useCase.proceso}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Resultado
                  </span>
                  <p className="text-sm font-bold text-green-600 mt-1">
                    {useCase.resultado}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-slate-500 italic text-center mt-12 max-w-2xl mx-auto"
        >
          Estos casos representan procesos que nuestros agentes IA pueden
          automatizar. Los resultados varían según el volumen y la complejidad de
          cada empresa.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="/servicios/automatizacion-pymes-santander.html"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-medium transition-colors group"
          >
            ¿Tienes un proceso que quieres automatizar?
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCasesSection
