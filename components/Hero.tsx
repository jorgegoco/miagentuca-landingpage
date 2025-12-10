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
          {/* High Visibility CTA at the top */}
          <a 
            href="mailto:jorgegoco70@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-electric-900/40 border border-electric-500 text-white text-sm font-bold tracking-wide mb-8 hover:bg-electric-600/20 hover:scale-105 transition-all cursor-pointer group shadow-[0_0_20px_rgba(56,189,248,0.2)]"
          >
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="group-hover:text-electric-300 transition-colors">SOLICITAR AUDITORÍA GRATUITA</span>
            <ArrowRight className="w-4 h-4 text-electric-400 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Deja de hacer de robot. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-blue-500">
              Contrata a uno.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-16 leading-relaxed">
            Implemento Agentes de IA que gestionan procesos completos en tu empresa: 
            desde reclamar facturas hasta comparar presupuestos. Funcionan 24/7, 
            no se cansan y no cometen errores.
          </p>

          <div className="relative inline-block">
             <div className="absolute -inset-1 bg-electric-500/20 blur-xl rounded-full"></div>
             <p className="relative text-xl md:text-2xl font-medium text-slate-300 italic tracking-wide">
              "No vendemos software, <span className="text-electric-400 font-bold drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">vendemos tiempo</span>."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;