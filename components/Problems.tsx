
import React from 'react';
import { Clock, Wallet, Ban, MousePointer2, AlertCircle, Lock, Layers, ZapOff } from 'lucide-react';

const PROBLEMS = [
  {
    title: "Ewige Wartezeiten",
    icon: <Clock className="text-red-500" />,
    description: "Standard-Agenturen brauchen 3-6 Monate. Wir liefern in 7 Werktagen, damit Ihr Business sofort durchstartet."
  },
  {
    title: "Versteckte Kosten",
    icon: <Wallet className="text-red-500" />,
    description: "Erst das günstige Angebot, dann die 'Extra-Wünsche'. Bei uns gilt: Ein Festpreis, alles inklusive."
  }
];

export const Problems: React.FC = () => {
  return (
    <section className="flex items-center py-20 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-red-500 italic font-bold uppercase tracking-[0.25em] text-[10px] mb-4">
                <AlertCircle size={14} />
                <span>Status Quo der Branche</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
                Nachteile von <span className="italic font-medium text-gray-300">klassischen</span><br />Agenturen.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Klassische Prozesse sind zu langsam und intransparent für lokale Betriebe. Wir eliminieren die Reibungsverluste des alten Agenturmodells.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {PROBLEMS.map((p, i) => (
                <div key={i} className="group p-8 rounded-[32px] bg-white border border-gray-100 hover:border-red-100 hover:shadow-[0_20px_40px_rgba(239,68,68,0.05)] transition-all duration-500">
                  <div className="mb-6 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Purely Visual Problem Graphic - Chaos & Blockages */}
            <div className="relative aspect-square max-w-[540px] mx-auto bg-white rounded-[60px] border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.03)_0%,transparent_60%)]"></div>

              <div className="relative h-full w-full p-12 flex items-center justify-center">

                {/* Central Blocked Path - representing slowness */}
                <div className="relative w-full h-full flex items-center justify-center">

                  {/* Horizontal Path with Obstacles */}
                  <div className="absolute left-8 right-8 h-3 bg-gray-100 rounded-full top-1/2 -translate-y-1/2"></div>

                  {/* Obstacle Blocks */}
                  <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-16 h-16 bg-red-50 rounded-2xl border border-red-100/50 shadow-sm rotate-12 flex items-center justify-center">
                    <div className="w-8 h-8 bg-red-100/60 rounded-xl"></div>
                  </div>
                  <div className="absolute left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 h-20 bg-red-50 rounded-2xl border border-red-100/50 shadow-md -rotate-6 flex items-center justify-center">
                    <div className="w-10 h-10 bg-red-100/60 rounded-xl"></div>
                  </div>
                  <div className="absolute right-[25%] top-1/2 -translate-y-1/2 w-14 h-14 bg-red-50 rounded-2xl border border-red-100/50 shadow-sm rotate-6 flex items-center justify-center">
                    <div className="w-7 h-7 bg-red-100/60 rounded-xl"></div>
                  </div>

                  {/* Scattered Complexity Elements */}
                  <div className="absolute top-[20%] left-[30%] w-12 h-12 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm rotate-45">
                    <div className="absolute inset-2 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div className="absolute bottom-[20%] right-[30%] w-10 h-10 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm -rotate-12">
                    <div className="absolute inset-2 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div className="absolute top-[35%] right-[15%] w-8 h-8 bg-gray-50 rounded-xl border border-gray-100 rotate-[25deg]"></div>
                  <div className="absolute bottom-[35%] left-[15%] w-8 h-8 bg-gray-50 rounded-xl border border-gray-100 -rotate-[15deg]"></div>

                  {/* Warning Indicators */}
                  <div className="absolute top-8 right-12 flex items-center gap-2 bg-red-50/50 px-4 py-2 rounded-full border border-red-100/30">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="h-1 w-12 bg-red-100 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-8 left-12 flex items-center gap-2 bg-red-50/50 px-4 py-2 rounded-full border border-red-100/30">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="h-1 w-12 bg-red-100 rounded-full"></div>
                  </div>

                </div>

              </div>

              {/* Subtle Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.02)_0%,transparent_70%)] -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
