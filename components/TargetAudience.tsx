
import React from 'react';
import { Check } from 'lucide-react';

const INDUSTRIES = [
  "Handwerksbetriebe (Elektriker, Installateure, Tischler)",
  "Gastronomiebetriebe (Restaurants, Cafés, Pizzerien)",
  "Freiberufler (Architekten, Steuerberater, Anwälte)",
  "Lokale Dienstleister (Friseure, Kosmetik, Reinigung)",
  "Kleine Hotels & Pensionen"
];

const INCLUDED = [
  "Professionelle Website mit bis zu 5 Seiten",
  "Kontaktformular & Google-Karte",
  "Schnelle Ladezeiten & optimierte Bilder",
  "Perfekt auf Handy & Tablet optimiert",
  "Südtiroler Ansprechpartner vor Ort"
];

export const TargetAudience: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-16 sm:py-24 bg-gray-50 text-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="text-[#316bff] italic font-bold uppercase tracking-[0.2em] text-xs mb-4">Zielgruppe</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Für wen ist <br /><span className="text-gray-300 italic">das gedacht?</span></h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Flowset konzentriert sich auf Kleinstunternehmen in Südtirol, die eine professionelle Online-Präsenz brauchen – ohne Agentur-Overhead.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <div className="p-8 sm:p-12 bg-white rounded-[32px] sm:rounded-[48px] border border-gray-100 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-10 text-[#316bff] italic tracking-tight">Ideal für:</h3>
            <ul className="space-y-4 sm:space-y-6">
              {INDUSTRIES.map((industry, i) => (
                <li key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={4} className="sm:w-[14px] sm:h-[14px]" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 font-medium">{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 sm:p-12 bg-white rounded-[32px] sm:rounded-[48px] border border-gray-100 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-10 text-gray-950 tracking-tight">Standard Leistungen:</h3>
            <ul className="space-y-4 sm:space-y-6">
              {INCLUDED.map((item, i) => (
                <li key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 bg-blue-50 text-[#316bff] rounded-full flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={4} className="sm:w-[14px] sm:h-[14px]" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
