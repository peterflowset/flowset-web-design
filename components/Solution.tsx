
import React from 'react';
import { ArrowRight, Zap, Euro, Sparkles } from 'lucide-react';

const SOLUTIONS = [
  {
    title: "Blitzschnelle Umsetzung",
    icon: <Zap className="text-[#316bff]" />,
    description: "Wir nutzen moderne Technologie, um Ihre Website von Monaten auf nur 7 Tage zu verkürzen – ohne Abstriche bei der Qualität."
  },
  {
    title: "Klare Preise",
    icon: <Euro className="text-[#316bff]" />,
    description: "Ein Festpreis, alles inklusive. Mit 60% Landesförderung zahlen Sie nur 800€ statt 2.000€. Keine versteckten Kosten."
  }
];

export const Solution: React.FC = () => {
  return (
    <section className="flex items-center py-20 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-1 lg:order-1 relative">
            {/* Purely Visual Solution Graphic - Order & Efficiency - Mobile optimiert */}
            <div className="relative aspect-square max-w-[540px] mx-auto bg-white rounded-[40px] sm:rounded-[60px] border border-gray-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)] sm:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,107,255,0.04)_0%,transparent_60%)]"></div>

              <div className="relative h-full w-full p-6 sm:p-12 flex items-center justify-center">

                {/* Organized Grid System - representing order */}
                <div className="relative w-full h-full flex items-center justify-center">

                  {/* Clean Central Path - Mobile optimiert */}
                  <div className="absolute left-4 right-4 sm:left-8 sm:right-8 h-2 sm:h-3 bg-gradient-to-r from-blue-100 via-blue-200 to-green-100 rounded-full top-1/2 -translate-y-1/2">
                    {/* Flow Animation */}
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                      <div className="absolute h-full w-12 sm:w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2.5s_ease-in-out_infinite]" style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}></div>
                    </div>
                  </div>

                  {/* Organized Building Blocks - Mobile optimiert */}
                  <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-xl sm:rounded-2xl border border-blue-100/50 shadow-sm flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg sm:rounded-xl"></div>
                  </div>
                  <div className="absolute left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 bg-blue-50 rounded-xl sm:rounded-2xl border border-blue-100/50 shadow-md flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 bg-blue-200 rounded-lg sm:rounded-xl"></div>
                  </div>
                  <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-green-50 rounded-xl sm:rounded-2xl border border-green-100/50 shadow-sm flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg sm:rounded-xl"></div>
                  </div>

                  {/* Aligned Support Elements - Mobile optimiert */}
                  <div className="absolute top-[22%] left-[32%] w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl border border-blue-50 shadow-sm">
                    <div className="absolute inset-1 sm:inset-2 bg-blue-50 rounded-lg"></div>
                  </div>
                  <div className="absolute bottom-[22%] right-[32%] w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl border border-blue-50 shadow-sm">
                    <div className="absolute inset-1 sm:inset-2 bg-blue-50 rounded-lg"></div>
                  </div>
                  <div className="absolute top-[32%] right-[18%] w-7 h-7 sm:w-10 sm:h-10 bg-blue-50/60 rounded-lg sm:rounded-xl border border-blue-100/30"></div>
                  <div className="absolute bottom-[32%] left-[18%] w-7 h-7 sm:w-10 sm:h-10 bg-blue-50/60 rounded-lg sm:rounded-xl border border-blue-100/30"></div>

                  {/* Success Indicators - Mobile optimiert */}
                  <div className="absolute top-4 right-4 sm:top-8 sm:right-12 flex items-center gap-1 sm:gap-2 bg-green-50/60 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-green-100/40">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                    <div className="h-1 w-6 sm:w-12 bg-green-100 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-12 flex items-center gap-1 sm:gap-2 bg-blue-50/60 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-blue-100/40">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                    <div className="h-1 w-6 sm:w-12 bg-blue-100 rounded-full"></div>
                  </div>

                </div>

              </div>

              {/* Subtle Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(49,107,255,0.03)_0%,transparent_70%)] -z-10"></div>
            </div>
          </div>

          <div className="space-y-8 order-2 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 text-[#316bff] italic font-bold uppercase tracking-[0.25em] text-[10px] mb-4">
                <Sparkles size={14} />
                <span>Die Flowset-Lösung</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Schnell. Günstig. <br /><span className="text-gray-300 italic">Professionell.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                Mit modernster Technologie schaffen wir, was klassische Agenturen nicht können: Höchste Qualität in Rekordzeit zu fairen Preisen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {SOLUTIONS.map((s, i) => (
                <div
                  key={i}
                  className="group p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white border border-gray-100 hover:border-blue-100 hover:shadow-[0_20px_40px_rgba(49,107,255,0.08)] transition-all duration-500"
                  style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div className="mb-4 sm:mb-6 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('ablauf')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-4 sm:gap-6 text-[#316bff] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs group"
            >
              Prozess verstehen
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-blue-100 flex items-center justify-center group-hover:bg-[#316bff] group-hover:text-white group-hover:border-[#316bff] transition-all">
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </section>
  );
};
