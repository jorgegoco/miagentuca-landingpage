import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Using the privacy token provided by FormSubmit instead of the raw email
      const response = await fetch("https://formsubmit.co/ajax/0ddfd5742ca201d7691966409c3fe6d4", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "Nueva Solicitud de Auditoría (Web)",
            nombre: data.name,
            contacto: data.contact,
            mensaje: data.message,
            _captcha: "false" // Disable captcha for smoother UX
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-navy-800 border border-electric-500/30 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-navy-700 bg-navy-800/50">
              <h3 className="text-xl font-bold text-white">Solicitar Auditoría</h3>
              <button 
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-navy-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">¡Solicitud Recibida!</h4>
                  <p className="text-slate-300">
                    Gracias por tu interés. Me pondré en contacto contigo en breve para analizar tu caso.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                      Nombre o Empresa
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Ej. Gestoría Pérez"
                      className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-slate-300 mb-1">
                      Contacto (Email o Teléfono)
                    </label>
                    <input
                      required
                      type="text"
                      name="contact"
                      id="contact"
                      placeholder="ejemplo@correo.com o 600 000 000"
                      className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                      Contexto / ¿Qué quieres automatizar?
                    </label>
                    <textarea
                      required
                      name="message"
                      id="message"
                      rows={4}
                      placeholder="Cuéntame brevemente qué proceso te quita más tiempo..."
                      className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Hubo un error al enviar. Por favor, inténtalo de nuevo o escribe directamente a jorgegoco70@gmail.com
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-electric-600 hover:bg-electric-500 text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Solicitud
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-3">
                      No vendemos software, vendemos tiempo.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;