
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Handwerk',
    message: '',
    subsidyHelp: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://flowsetagentur.app.n8n.cloud/webhook/web', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-32 container mx-auto px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-50 p-10 sm:p-20 rounded-[40px] sm:rounded-[60px] text-center flex flex-col items-center border border-gray-100 shadow-sm">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#316bff] rounded-[24px] sm:rounded-[32px] flex items-center justify-center text-white mb-8 sm:mb-10 shadow-2xl animate-in zoom-in duration-500">
            <CheckCircle2 size={40} className="sm:w-12 sm:h-12" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tighter">Anfrage gesendet!</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-md">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen für das Erstgespräch.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-[#316bff] italic font-bold uppercase tracking-widest text-xs hover:underline"
          >
            Zurück zum Formular
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center py-16 sm:py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-[40px] sm:rounded-[60px] overflow-hidden flex flex-col lg:flex-row border border-gray-100 shadow-sm">
          {/* Info Side */}
          <div className="lg:w-2/5 p-8 sm:p-12 lg:p-16 bg-[#316bff] text-white flex flex-col justify-between">
            <div>
              <div className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Kontakt</div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-10 tracking-tighter leading-none">Bereit für <br /> den Start?</h2>
              <p className="text-base sm:text-lg opacity-80 font-medium leading-relaxed mb-8 sm:mb-12">
                Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden für ein kostenloses Erstgespräch.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {[
                  "Kostenloses Erstgespräch",
                  "Fixpreis-Garantie",
                  "Beratung zur Förderung"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-white sm:w-4 sm:h-4" />
                    </div>
                    <span className="font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[9px] sm:text-[10px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 sm:mt-20">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-2">Datenschutz</div>
              <p className="text-[10px] opacity-60 leading-relaxed italic">
                Ihre Daten werden vertraulich behandelt und ausschließlich zur Kontaktaufnahme genutzt.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-8 sm:p-12 lg:p-16 bg-white">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 mb-2 sm:mb-3">Name*</label>
                <input
                  required
                  type="text"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight"
                  placeholder="Max Mustermann"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 mb-2 sm:mb-3">Email*</label>
                <input
                  required
                  type="email"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight"
                  placeholder="max@beispiel.it"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 mb-2 sm:mb-3">Telefon*</label>
                <input
                  required
                  type="tel"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight"
                  placeholder="+39 ..."
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 mb-2 sm:mb-3">Branche</label>
                <select
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight appearance-none cursor-pointer"
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  disabled={isSubmitting}
                >
                  <option>Handwerk</option>
                  <option>Gastronomie</option>
                  <option>Dienstleistung</option>
                  <option>Hotel / Tourismus</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 mb-2 sm:mb-3">Nachricht</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight resize-none"
                  placeholder="Gibt es Besonderheiten?"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-start gap-3 sm:gap-4 bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg border-gray-200 bg-white text-[#316bff] focus:ring-[#316bff] cursor-pointer shrink-0 mt-0.5"
                    disabled={isSubmitting}
                  />
                  <label htmlFor="privacy" className="text-[10px] sm:text-xs font-bold text-gray-500 cursor-pointer uppercase tracking-[0.15em] sm:tracking-widest leading-relaxed">
                    Ich habe die Datenschutzerklärung gelesen und akzeptiert*
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-black text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-xl hover:bg-[#316bff] hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
                  {!isSubmitting && <Send size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
