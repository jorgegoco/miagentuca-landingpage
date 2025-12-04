import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Audience */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-20 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-100 rounded-full text-navy-900 mb-6">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            ¿Para quién es esto?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ideal para gerentes que pasan más tiempo gestionando papeles que haciendo crecer su negocio: <br className="hidden md:block"/>
            <span className="font-semibold text-navy-800">Gestorías, Ingenierías y Comercio Local.</span>
          </p>
        </div>

        {/* Methodology */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Empieza pequeño, <br /><span className="text-electric-600">escala rápido.</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              No necesitas cambiar todo tu software ni formar a tu equipo durante meses. Mi metodología es quirúrgica y rápida.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Auditoría de Procesos", desc: "Identificamos dónde pierdes más tiempo." },
                { title: "Diseño del Agente (Piloto)", desc: "Creamos un prototipo funcional en días." },
                { title: "Despliegue y Supervisión", desc: "Lo integramos y verificamos que rinda." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-electric-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-lg">{step.title}</h4>
                    <p className="text-slate-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Visual representation of methodology steps */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-500 to-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl relative z-10">
               <div className="space-y-4">
                  <div className="h-2 bg-slate-100 rounded overflow-hidden">
                    <div className="h-full bg-electric-500 w-1/3"></div>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    <span>Análisis</span>
                    <span>Desarrollo</span>
                    <span>Entrega</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 mt-6">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                       <span className="font-mono text-sm text-slate-600">agent_log.txt</span>
                    </div>
                    <p className="font-mono text-xs text-slate-500">
                      > Iniciando análisis de facturas...<br/>
                      > 45 documentos procesados.<br/>
                      > 3 anomalías detectadas.<br/>
                      > Reporte enviado al gerente.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;