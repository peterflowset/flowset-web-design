
import React from 'react';
import { Smartphone, Zap, Search, PhoneCall, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    icon: <Smartphone className="text-[#316bff]" size={28} />,
    title: "Mobile First",
    description: "Optimiert für das wichtigste Gerät Ihrer Kunden. Perfekte Bedienung auf jedem Smartphone."
  },
  {
    icon: <Zap className="text-[#316bff]" size={28} />,
    title: "Blitzschnell",
    description: "Modernste Technologie für superschnelle Ladezeiten. Ihre Kunden müssen nicht warten – bessere Google-Rankings inklusive."
  },
  {
    icon: <Search className="text-[#316bff]" size={28} />,
    title: "Bei Google gefunden werden",
    description: "Optimiert für lokale Suchanfragen, damit Südtiroler Kunden Sie bei Google sofort finden."
  },
  {
    icon: <PhoneCall className="text-[#316bff]" size={28} />,
    title: "Support-Flat",
    description: "Persönlicher Ansprechpartner in Südtirol. Wir sind da, wenn Sie uns brauchen – ohne Ticketsystem."
  },
  {
    icon: <ShieldCheck className="text-[#316bff]" size={28} />,
    title: "Full Managed",
    description: "Hosting, Domain & SSL inklusive. Sie müssen sich um keine Technik kümmern. Wir machen das für Sie."
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-[#316bff] italic font-bold uppercase tracking-[0.2em] text-xs mb-4">Ihre Vorteile</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              Modernste <br /><span className="text-gray-300 italic font-medium">Technologie.</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-sm leading-relaxed pb-4">
            Professionelle Ergebnisse mit den besten Werkzeugen am Markt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-[48px] overflow-hidden border border-gray-100">
          {SERVICES.map((s, i) => (
            <div key={i} className="p-10 bg-white hover:bg-gray-50 transition-all duration-500 flex flex-col items-start text-left">
              <div className="mb-6 p-4 bg-blue-50 rounded-2xl">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-3 tracking-tighter">{s.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
          <div className="p-10 bg-[#316bff] flex flex-col justify-center items-center text-center group cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tighter leading-none">Bereit für <br /> den Erfolg?</h3>
            <div className="w-16 h-16 rounded-full bg-white text-[#316bff] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
              <Zap size={24} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
