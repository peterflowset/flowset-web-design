
import React from 'react';
import { Smartphone, Zap, Search, PhoneCall, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    icon: <Smartphone className="text-[#316bff]" size={28} />,
    title: "Optimiert für Handy",
    description: "Perfekte Darstellung auf jedem Smartphone und Tablet. Ihre Kunden finden sich sofort zurecht."
  },
  {
    icon: <Zap className="text-[#316bff]" size={28} />,
    title: "Blitzschnell",
    description: "Kurze Ladezeiten dank modernster Technologie. Ihre Kunden müssen nicht warten – bessere Platzierung bei Google inklusive."
  },
  {
    icon: <Search className="text-[#316bff]" size={28} />,
    title: "Lokal auffindbar",
    description: "Ihre Kunden aus der Region finden Sie sofort bei Google. Speziell für Südtirol optimiert."
  },
  {
    icon: <PhoneCall className="text-[#316bff]" size={28} />,
    title: "Persönliche Betreuung",
    description: "Direkter Ansprechpartner in Südtirol. Wir sind für Sie da, wenn Sie uns brauchen – unkompliziert und direkt."
  },
  {
    icon: <ShieldCheck className="text-[#316bff]" size={28} />,
    title: "Rundum-Sorglos",
    description: "Webhosting, Domain und Sicherheit inklusive. Sie müssen sich um keine Technik kümmern. Wir erledigen das für Sie."
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="flex items-center py-16 sm:py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-[#316bff] italic font-bold uppercase tracking-[0.2em] text-xs mb-4">Ihre Vorteile</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Modernste <br /><span className="text-gray-300 italic">Technologie.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-[32px] sm:rounded-[48px] overflow-hidden border border-gray-100">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="p-6 sm:p-10 bg-white hover:bg-gray-50 transition-all duration-500 flex flex-col items-start text-left"
              style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-50 rounded-xl sm:rounded-2xl">{React.cloneElement(s.icon as React.ReactElement, { size: 24 })}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tighter">{s.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
          <div
            className="p-6 sm:p-10 bg-[#316bff] flex flex-col justify-center items-center text-center group cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-tighter leading-none">Bereit für <br /> den Erfolg?</h3>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-[#316bff] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
              <Zap size={22} fill="currentColor" className="sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
