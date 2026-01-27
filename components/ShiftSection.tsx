import React from "react"
import { motion } from "framer-motion"
import { Play, Bot } from "lucide-react"

const ShiftSection: React.FC = () => {
  return (
    <section id="casos" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(15, 23, 42) 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            La diferencia entre{" "}
            <span className="text-slate-400 line-through">Automatizar</span> y{" "}
            <span className="text-electric-600">Delegar</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            La automatización clásica te ahorra clics. La IA Agéntica te ahorra
            decisiones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border border-slate-200 bg-slate-50 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-slate-300">
              <Play className="w-8 h-8 opacity-20" />
            </div>
            <h3 className="text-xl font-bold text-slate-500 mb-4">
              Antes (Automatización Clásica)
            </h3>
            <p className="text-slate-600 leading-relaxed">
              "La IA te escribe el borrador del email,{" "}
              <strong className="text-slate-800">tú lo revisas</strong>,{" "}
              <strong className="text-slate-800">tú lo editas</strong> y{" "}
              <strong className="text-slate-800">tú lo envías</strong>."
            </p>
            <div className="mt-6 py-2 px-4 bg-slate-200 inline-block rounded-md text-slate-500 text-sm font-medium">
              Sigues siendo el cuello de botella
            </div>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl border border-electric-200 bg-gradient-to-br from-white to-electric-50 shadow-xl shadow-electric-100 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-electric-500">
              <Bot className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              Ahora (IA Agéntica)
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </h3>
            <p className="text-navy-800 leading-relaxed font-medium">
              "El Agente lee el correo, busca el dato en tu sistema, decide la
              respuesta correcta, te pone en copia y lo archiva.{" "}
              <span className="text-electric-600 font-bold">
                Tú solo supervisas.
              </span>
              "
            </p>
            <div className="mt-6 py-2 px-4 bg-electric-100 text-electric-700 inline-block rounded-md text-sm font-bold border border-electric-200">
              Recuperas tu libertad mental
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ShiftSection
