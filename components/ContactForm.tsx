
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Handwerk',
    message: '',
    subsidyHelp: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-32 container mx-auto px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-50 p-20 rounded-[60px] text-center flex flex-col items-center border border-gray-100 shadow-sm">
          <div className="w-24 h-24 bg-[#316bff] rounded-[32px] flex items-center justify-center text-white mb-10 shadow-2xl animate-in zoom-in duration-500">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tighter">Anfrage gesendet!</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-md">
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
    <section className="min-h-screen flex items-center py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-[60px] overflow-hidden flex flex-col lg:flex-row border border-gray-100 shadow-sm">
          {/* Info Side */}
          <div className="lg:w-2/5 p-16 bg-[#316bff] text-white flex flex-col justify-between">
            <div>
              <div className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Kontakt</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter leading-none">Bereit für <br /> den Start?</h2>
              <p className="text-lg opacity-80 font-medium leading-relaxed mb-12">
                Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden für ein kostenloses Erstgespräch.
              </p>

              <div className="space-y-8">
                {[
                  "Kostenloses Erstgespräch",
                  "Fixpreis-Garantie",
                  "Beratung zur Förderung"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <span className="font-bold uppercase tracking-[0.2em] text-[10px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-2">Datenschutz</div>
              <p className="text-[10px] opacity-60 leading-relaxed italic">
                Ihre Daten werden vertraulich behandelt und ausschließlich zur Kontaktaufnahme genutzt.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-16 bg-white">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Name*</label>
                <input
                  required
                  type="text"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight"
                  placeholder="Max Mustermann"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Email*</label>
                <input
                  required
                  type="email"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight"
                  placeholder="max@beispiel.it"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Telefon*</label>
                <input
                  required
                  type="tel"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight"
                  placeholder="+39 ..."
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Branche</label>
                <select
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight appearance-none cursor-pointer"
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                >
                  <option>Handwerk</option>
                  <option>Gastronomie</option>
                  <option>Dienstleistung</option>
                  <option>Hotel / Tourismus</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Nachricht</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-950 focus:border-[#316bff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#316bff]/5 transition-all font-bold tracking-tight resize-none"
                  placeholder="Gibt es Besonderheiten?"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-6 h-6 rounded-lg border-gray-200 bg-white text-[#316bff] focus:ring-[#316bff] cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-xs font-bold text-gray-500 cursor-pointer uppercase tracking-widest">
                    Ich habe die Datenschutzerklärung gelesen und akzeptiert*
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="group w-full bg-black text-white py-4 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#316bff] transition-all duration-500 flex items-center justify-center gap-3 active:scale-95"
                >
                  Anfrage senden
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
