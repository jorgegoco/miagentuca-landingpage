import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, ShoppingCart, Calendar, Cog } from 'lucide-react';

const agents = [
  {
    title: "El Agente Administrativo",
    subtitle: "Para Gestorías",
    icon: <FileCheck className="w-8 h-8 text-white" />,
    description: "No solo clasifica documentos. Revisa si faltan datos, escribe al cliente para reclamarlos y valida la información fiscal antes de que tú abras el archivo.",
    gradient: "from-blue-500 to-indigo-600",
    methodology: "Directivas claras + decisiones inteligentes + ejecucion confiable"
  },
  {
    title: "El Agente de Compras",
    subtitle: "Para Construcción/Reformas",
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    description: "Recibe listas de materiales, pide ofertas a tus proveedores habituales, compara precios y te presenta un Excel listo para aprobar la compra más rentable.",
    gradient: "from-cyan-500 to-blue-600",
    methodology: "Directivas claras + decisiones inteligentes + ejecucion confiable"
  },
  {
    title: "El Agente de Agenda",
    subtitle: "Atención 24/7",
    icon: <Calendar className="w-8 h-8 text-white" />,
    description: "Atiende peticiones por email/WhatsApp, consulta tu disponibilidad real, agenda reuniones y persigue confirmaciones. Tu secretaria virtual que nunca duerme.",
    gradient: "from-indigo-500 to-purple-600",
    methodology: "Directivas claras + decisiones inteligentes + ejecucion confiable"
  }
];

const AgentsSection: React.FC = () => {
  return (
    <section id="agentes" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Conoce a tu nuevo equipo
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Agentes especializados que trabajan de forma autónoma, integrándose en tus herramientas actuales.
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
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center mb-6 shadow-lg`}>
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
                <span className="text-[10px] font-medium text-slate-500 uppercase">Activo</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;