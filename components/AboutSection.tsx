import React from "react"
import { Linkedin, Mail } from "lucide-react"

const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-electric-600 rounded-full blur-2xl opacity-20"></div>
            {/* Placeholder for Jorge's image - using a stylized abstract tech representation if no image provided, or standard placeholder */}
            <img
              src="https://picsum.photos/400/400?grayscale"
              alt="Jorge González"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10"
            />
            <div className="absolute bottom-4 right-4 z-20 bg-white p-2 rounded-full shadow-md">
              <Linkedin className="w-5 h-5 text-[#0077b5]" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-navy-900 mb-2">
              Jorge González
            </h2>
            <p className="text-electric-600 font-semibold mb-6">
              Consultor de Inteligencia Artificial y Desarrollador de Agentes en Santander
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              "La tecnología avanza rápido, pero mi enfoque sigue siendo el
              mismo:{" "}
              <span className="text-navy-900 font-medium">
                honestidad y resultados
              </span>
              . Ayudo a empresas en Cantabria y toda España a implementar arquitectura de microservicios
              con inteligencia artificial de forma práctica."
            </p>

            <p className="text-slate-500 text-sm mb-8">
              Como{" "}
              <a
                href="/servicios/inteligencia-artificial-cantabria.html"
                className="text-electric-600 hover:text-electric-700 underline"
              >
                consultor local de IA en Cantabria
              </a>
              , ofrezco reuniones presenciales en Santander y alrededores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/jorgegoco/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg font-medium hover:bg-[#006097] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                Conecta conmigo en LinkedIn
              </a>
              <a
                href="mailto:jorgegoco70@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                jorgegoco70@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
