import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-navy-900">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-electric-400 text-xs font-semibold tracking-wide mb-6">
            <Sparkles className="w-3 h-3" />
            <span>ESPECIALIZADO EN PYMES DE CANTABRIA</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Deja de hacer de robot. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-blue-500">
              Contrata a uno.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Implemento Agentes de IA que gestionan procesos completos en tu empresa: 
            desde reclamar facturas hasta comparar presupuestos. Funcionan 24/7, 
            no se cansan y no cometen errores.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#agentes"
              className="w-full sm:w-auto px-8 py-4 bg-electric-600 text-white text-base font-bold rounded-xl shadow-lg shadow-electric-500/25 hover:bg-electric-500 hover:shadow-electric-500/40 transition-all flex items-center justify-center gap-2"
            >
              Ver cómo funcionan
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#sobre-mi"
              className="w-full sm:w-auto px-8 py-4 bg-navy-800 text-slate-200 border border-navy-700 text-base font-semibold rounded-xl hover:bg-navy-700 transition-all"
            >
              Conocer al consultor
            </a>
          </div>

          <div className="mt-12 text-sm text-slate-500 font-medium">
            "No vendemos software, vendemos tiempo."
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;