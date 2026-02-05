import React from 'react';
import { Linkedin, Mail, ArrowUp, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-slate-400 py-12 border-t border-navy-800">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Mi Agentuca</h3>
            <p className="text-sm text-slate-500 mb-4">
              Consultoría de IA Agéntica en Santander, Cantabria.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/jorgegoco/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-electric-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:jorgegoco70@gmail.com"
                className="hover:text-electric-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-electric-400" />
              Servicios
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/servicios/"
                  className="hover:text-electric-400 transition-colors"
                >
                  Todos los servicios
                </a>
              </li>
              <li>
                <a
                  href="/servicios/inteligencia-artificial-cantabria.html"
                  className="hover:text-electric-400 transition-colors"
                >
                  IA en Cantabria
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-white font-semibold mb-3">Recursos</h4>
            <ul className="space-y-2 text-sm text-left md:text-right">
              <li>
                <a
                  href="/blog/"
                  className="hover:text-electric-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#metodología"
                  className="hover:text-electric-400 transition-colors"
                >
                  Metodología
                </a>
              </li>
            </ul>
            <button
              onClick={scrollToTop}
              className="mt-4 p-3 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Mi Agentuca. Todos los derechos reservados. | Servicios en España.
        </div>
      </div>
    </footer>
  );
};

export default Footer;