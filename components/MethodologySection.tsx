import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Brain, Cog, AlertTriangle, CheckCircle } from 'lucide-react';

const layers = [
  {
    number: 1,
    title: "Capa de Directivas",
    subtitle: "Procedimientos claros en lenguaje natural",
    icon: <FileText className="w-8 h-8 text-white" />,
    description: "Definimos exactamente que debe hacer el agente: paso a paso, sin ambiguedades. Como un manual de operaciones que la IA puede seguir.",
    gradient: "from-purple-500 to-violet-600"
  },
  {
    number: 2,
    title: "Capa de Orquestacion",
    subtitle: "La IA toma decisiones inteligentes",
    icon: <Brain className="w-8 h-8 text-white" />,
    description: "Aqui es donde la IA brilla: analiza el contexto, decide que hacer segun las directivas y planifica los pasos necesarios.",
    gradient: "from-electric-500 to-blue-600"
  },
  {
    number: 3,
    title: "Capa de Ejecucion",
    subtitle: "Codigo determinista, sin alucinaciones",
    icon: <Cog className="w-8 h-8 text-white" />,
    description: "Las acciones reales (enviar emails, actualizar sistemas) las ejecuta codigo tradicional. Predecible, testeable, sin sorpresas.",
    gradient: "from-cyan-500 to-teal-600"
  }
];

const MethodologySection: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-navy-900 mb-6"
          >
            Por que mis agentes <span className="text-electric-600">no fallan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            La arquitectura de 3 capas que separa las decisiones de las acciones
          </motion.p>
        </div>

        {/* Problem Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-red-100 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-3">El problema de los agentes "todo en uno"</h3>
              <p className="text-red-700 mb-4">
                Si cada paso de un proceso tiene un 90% de fiabilidad, un flujo de 5 pasos:
              </p>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 font-mono text-lg md:text-2xl text-red-800 font-bold mb-4">
                <span className="bg-white px-3 py-1 rounded-lg border border-red-200">90%</span>
                <span className="text-red-400">×</span>
                <span className="bg-white px-3 py-1 rounded-lg border border-red-200">90%</span>
                <span className="text-red-400">×</span>
                <span className="bg-white px-3 py-1 rounded-lg border border-red-200">90%</span>
                <span className="text-red-400">×</span>
                <span className="bg-white px-3 py-1 rounded-lg border border-red-200">90%</span>
                <span className="text-red-400">×</span>
                <span className="bg-white px-3 py-1 rounded-lg border border-red-200">90%</span>
                <span className="text-red-400">=</span>
                <span className="bg-red-600 text-white px-4 py-1 rounded-lg">59%</span>
              </div>
              <p className="text-red-700 font-medium">
                Casi la mitad de las veces, algo sale mal. Inaceptable para procesos criticos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Layer Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Layer Number Badge */}
              <div className="absolute -top-4 left-8 bg-navy-900 text-white text-sm font-bold px-3 py-1 rounded-full">
                Capa {layer.number}
              </div>

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center mb-6 mt-2 shadow-lg`}>
                {layer.icon}
              </div>

              <h3 className="text-xl font-bold text-navy-900 mb-2">{layer.title}</h3>
              <p className="text-sm font-medium text-electric-600 mb-4">{layer.subtitle}</p>
              <p className="text-slate-600 leading-relaxed">{layer.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Result Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-green-100 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-3">El resultado</h3>
              <p className="text-green-700 text-lg mb-3">
                <strong className="text-green-800">La IA decide que hacer.</strong> El codigo ejecuta <strong className="text-green-800">como hacerlo.</strong>
              </p>
              <p className="text-green-600">
                Combinas lo mejor de ambos mundos: la flexibilidad de la IA para entender contexto y tomar decisiones, con la fiabilidad del codigo tradicional para ejecutar acciones criticas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
