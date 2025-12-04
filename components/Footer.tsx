import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-slate-400 py-12 border-t border-navy-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-1">Jorge González</h3>
            <p className="text-sm">Santander, 2025</p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/jorgegoco/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-electric-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:jorgegoco70@gmail.com" 
              className="hover:text-electric-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-navy-800 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Jorge González. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;