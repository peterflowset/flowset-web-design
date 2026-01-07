
import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Rocket, ShieldCheck, Smartphone, Target, Euro, Sparkles } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-24 bg-white text-black rounded-[80px] mx-4 md:mx-10 my-20 overflow-hidden shadow-sm border border-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <div className="relative group order-2 lg:order-1">
            {/* Purely Visual Solution Graphic - Speed & Efficiency */}
            <div className="relative aspect-[4/3] w-full max-w-[600px] mx-auto bg-white rounded-[56px] border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,107,255,0.03)_0%,transparent_70%)]"></div>

              <div className="relative h-full w-full p-12 flex items-center justify-center">

                {/* Clear Fast Path - representing speed */}
                <div className="relative w-full h-full flex items-center justify-center">

                  {/* Smooth Flowing Path */}
                  <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 flex items-center justify-between">
                    {/* Gradient Path */}
                    <div className="absolute inset-0 h-2 bg-gradient-to-r from-blue-100 via-blue-200 to-green-100 rounded-full"></div>

                    {/* Flow Animation Indicator */}
                    <div className="absolute left-0 right-0 h-2 overflow-hidden rounded-full">
                      <div className="absolute h-full w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
                    </div>
                  </div>

                  {/* Start Point */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-blue-50 rounded-2xl border border-blue-100/50 shadow-sm flex items-center justify-center">
                    <div className="w-7 h-7 bg-blue-100 rounded-xl"></div>
                  </div>

                  {/* Speed Indicators Along Path */}
                  <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-300 rounded-full shadow-sm"></div>
                  <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-300 rounded-full shadow-sm"></div>
                  <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-300 rounded-full shadow-sm"></div>

                  {/* End Point - Success */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-green-50 rounded-2xl border border-green-100/50 shadow-md flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-100 rounded-xl"></div>
                  </div>

                  {/* Floating Efficiency Elements */}
                  <div className="absolute top-[20%] left-[35%] w-12 h-12 bg-white rounded-2xl border border-blue-50 shadow-sm flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-50 rounded-xl"></div>
                  </div>
                  <div className="absolute bottom-[25%] right-[30%] w-10 h-10 bg-white rounded-2xl border border-blue-50 shadow-sm flex items-center justify-center">
                    <div className="w-5 h-5 bg-blue-50 rounded-xl"></div>
                  </div>
                  <div className="absolute top-[35%] right-[20%] w-8 h-8 bg-blue-50/40 rounded-xl"></div>
                  <div className="absolute bottom-[40%] left-[20%] w-8 h-8 bg-blue-50/40 rounded-xl"></div>

                  {/* Success Indicators */}
                  <div className="absolute top-8 right-12 flex items-center gap-2 bg-green-50/50 px-4 py-2 rounded-full border border-green-100/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="h-1 w-12 bg-green-100 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-8 left-12 flex items-center gap-2 bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="h-1 w-12 bg-blue-100 rounded-full"></div>
                  </div>

                </div>

              </div>

              {/* Subtle Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(49,107,255,0.02)_0%,transparent_70%)] -z-10"></div>
            </div>

            <style>{`
              @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(400%); }
              }
            `}</style>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 text-[#316bff] italic font-bold uppercase tracking-[0.25em] text-[10px] mb-4">
                <Rocket size={14} />
                <span>Der Flowset-Beschleuniger</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-8">
                Maximum Speed. <br />
                <span className="text-gray-300 italic font-medium">Minimum Effort.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Wir haben den Prozess der Website-Erstellung radikal vereinfacht. Durch unsere KI-Workflows sparen wir Zeit, die wir direkt als Preisvorteil an Sie weitergeben.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "7", label: "Tage bis Live", icon: <Zap size={16} /> },
                { val: "60%", label: "Landesförderung", icon: <Euro size={16} /> }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="text-5xl font-bold text-[#316bff] mb-3 tracking-tighter group-hover:scale-110 transition-transform origin-left">{item.val}</div>
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-black opacity-40">
                    {item.icon}
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('ablauf')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-6 text-[#316bff] font-bold uppercase tracking-[0.3em] text-xs group"
            >
              System verstehen
              <div className="w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center group-hover:bg-[#316bff] group-hover:text-white group-hover:border-[#316bff] transition-all">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
