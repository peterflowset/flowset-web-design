
import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const PricingTable: React.FC = () => {
  return (
    <section className="flex items-center py-16 sm:py-20 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-[#316bff] italic font-bold uppercase tracking-[0.25em] text-[10px] mb-4">Preisgestaltung</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Transparent. Fair. <br /><span className="text-gray-300 italic">Förderbar.</span></h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">Keine versteckten Gebühren. Volle Kostentransparenz mit der Landesförderung Südtirol.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 items-stretch max-w-6xl mx-auto">
          {/* Main Plan: Standard Flowset */}
          <div
            className="lg:col-span-8 flex flex-col md:flex-row bg-white rounded-[32px] sm:rounded-[40px] border border-gray-100 overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_80px_-10px_rgba(0,0,0,0.1)] transition-all duration-700"
            style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
          >
            <div className="flex-[1.2] p-6 sm:p-10 bg-white border-r border-gray-50">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 text-[#316bff] rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm">
                  <Sparkles size={18} className="sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Standard Paket</h3>
              </div>
              <ul className="space-y-3 sm:space-y-5">
                {[
                  "Individuelles Design & Gestaltung",
                  "Perfekt auf Handy & Tablet optimiert",
                  "Optimiert für Google-Suche in Südtirol",
                  "Google-Karte & Kontaktformular",
                  "Unterstützung bei Förderantrag"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4 text-gray-500 font-bold tracking-tight group">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px] group-hover:scale-125 transition-transform" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 p-6 sm:p-10 bg-[#316bff] text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div className="flex justify-between items-center opacity-60">
                  <span className="font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[9px]">Basispreis</span>
                  <span className="text-base sm:text-lg font-bold font-mono">2.000€</span>
                </div>
                <div className="flex justify-between items-center text-blue-200">
                  <span className="font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[9px]">Landesförderung (60%)</span>
                  <span className="text-base sm:text-lg font-bold font-mono">− 1.200€</span>
                </div>
                <div className="h-px bg-white/10 my-4 sm:my-6"></div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] opacity-50">Ihr Preis nach Förderung</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-bold text-white leading-none tracking-tighter drop-shadow-lg">800€</span>
                    <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest">exkl. MwSt.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 sm:mt-10 w-full bg-white text-[#316bff] py-3 sm:py-4 rounded-xl sm:rounded-2xl text-xs font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 sm:gap-3 relative z-10 active:scale-[0.98]"
                style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
              >
                Jetzt anfragen
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>

          {/* Individual Projects Card */}
          <div
            className="lg:col-span-4 p-6 sm:p-10 bg-gray-950 text-white rounded-[32px] sm:rounded-[40px] border border-white/5 shadow-2xl flex flex-col justify-between h-full group hover:border-[#316bff]/40 transition-all duration-700 relative overflow-hidden"
            style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
          >
            <div
              className="absolute -top-32 -right-32 w-48 h-48 sm:w-64 sm:h-64 bg-[#316bff]/10 blur-[60px] sm:blur-[80px] rounded-full"
              style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
            ></div>

            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 text-[#316bff] rounded-lg sm:rounded-xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                <MessageSquare size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight leading-none">Spezielle <br />Lösungen</h3>
              <p className="text-gray-400 font-medium leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Besondere Anforderungen wie Buchungssysteme, Online-Shops oder mehrere Sprachen?
              </p>
              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-300 font-bold uppercase tracking-[0.15em]">
                  <div className="w-2 h-2 bg-[#316bff] rounded-full animate-pulse"></div>
                  Maßgeschneidert
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-300 font-bold uppercase tracking-[0.15em]">
                  <div className="w-2 h-2 bg-[#316bff] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  Individuelles Angebot
                </div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-xs font-bold uppercase tracking-[0.2em] transition-all relative z-10 active:scale-[0.98]"
              style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
            >
              Projekt besprechen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
