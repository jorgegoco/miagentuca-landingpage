import React from "react"
import { motion } from "framer-motion"
import { FileCheck, ShoppingCart, Calendar, Cog } from "lucide-react"

const agents = [
  {
    title: "El Agente Administrativo",
    subtitle: "Para Gestorías",
    icon: <FileCheck className="w-8 h-8 text-white" />,
    description:
      "No solo clasifica documentos. Revisa si faltan datos, escribe al cliente para reclamarlos y valida la información fiscal antes de que tú abras el archivo.",
    gradient: "from-blue-500 to-indigo-600",
    methodology:
      "Directivas claras + decisiones inteligentes + ejecución confiable",
  },
  {
    title: "El Agente de Compras",
    subtitle: "Para cualquier negocio",
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    description:
      "Describe lo que necesitas comprar, busca proveedores reales, compara precios y recibe una recomendación con el mejor precio, la entrega más rápida y la mejor relación calidad-precio.",
    gradient: "from-cyan-500 to-blue-600",
    methodology:
      "Directivas claras + decisiones inteligentes + ejecución confiable",
  },
  {
    title: "El Agente de Agenda",
    subtitle: "Atención 24/7",
    icon: <Calendar className="w-8 h-8 text-white" />,
    description:
      "Atiende peticiones por email/WhatsApp, consulta tu disponibilidad real, agenda reuniones y persigue confirmaciones. Tu secretaria virtual que nunca duerme.",
    gradient: "from-indigo-500 to-purple-600",
    methodology:
      "Directivas claras + decisiones inteligentes + ejecución confiable",
  },
]

const AgentsSection: React.FC = () => {
  return (
    <section
      id="agentes"
      className="py-24 bg-navy-900 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Conoce a tu nuevo equipo de <span className="text-electric-400">microservicios inteligentes</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Agentes de IA especializados que trabajan de forma autónoma, integrándose
            en tus herramientas actuales como workflows agénticos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-navy-800 rounded-2xl p-8 border border-navy-700 hover:border-electric-500/50 transition-all duration-300 glow-hover"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center mb-6 shadow-lg`}
              >
                {agent.icon}
              </div>

              <div className="mb-4">
                <span className="text-xs font-bold tracking-wider text-electric-400 uppercase mb-2 block">
                  {agent.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-electric-300 transition-colors">
                  {agent.title}
                </h3>
              </div>

              <p className="text-slate-400 leading-relaxed">
                {agent.description}
              </p>

              {/* Methodology Line */}
              <div className="mt-4 pt-4 border-t border-navy-700">
                <div className="flex items-center gap-2 text-electric-400 text-sm">
                  <Cog className="w-4 h-4" />
                  <span className="font-medium">{agent.methodology}</span>
                </div>
              </div>

              {/* Active Indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-medium text-slate-500 uppercase">
                  Activo
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">
            Estos agentes ya están funcionando en empresas de Cantabria
          </p>
          <a
            href="/servicios/inteligencia-artificial-cantabria.html"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-medium transition-colors group"
          >
            Ver todos los servicios de IA en Cantabria
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default AgentsSection
