
import React from 'react';
import { ArrowRight, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden bg-transparent">
      {/* Minimalist Background Logic */}
      <div className="absolute top-[15%] left-[-5%] w-[500px] h-[500px] bg-blue-50/20 blur-[140px] rounded-full -z-10"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/10 blur-[160px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 text-left space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tighter">
                Ihre professionelle <br />
                Website <span className="italic font-medium text-gray-300">in 7 Tagen</span><br />
                <span className="text-[#316bff] italic font-semibold">für 800€</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Einmalpreis 2.000€ <span className="mx-3 text-gray-300">|</span>
                <span className="text-gray-600 font-semibold">60% Landesförderung</span> <br />
                Perfekt für Kleinstunternehmen in Südtirol.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-[#316bff] text-white px-10 py-6 rounded-[20px] text-lg font-bold uppercase tracking-widest shadow-[0_20px_50px_rgba(49,107,255,0.15)] hover:shadow-[0_30px_70px_rgba(49,107,255,0.25)] hover:-translate-y-1 transition-all active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Anfrage starten
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

            </div>
          </div>

          {/* Modern Browser Mockup with Animated Content */}
          <div className="lg:col-span-6 relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[600px]">

              {/* Browser Window */}
              <div className="relative bg-white rounded-[24px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">

                {/* Browser Header */}
                <div className="h-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 flex items-center px-5 gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-200"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
                    <div className="w-3 h-3 rounded-full bg-green-200"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-gray-100 rounded-lg"></div>
                  </div>
                </div>

                {/* Browser Content */}
                <div className="p-8 bg-gradient-to-br from-gray-50/50 to-white min-h-[400px]">

                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="h-8 w-32 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-full"></div>
                    <div className="h-10 w-10 bg-blue-100 rounded-xl shadow-sm"></div>
                  </div>

                  {/* Hero Text Simulation */}
                  <div className="space-y-3 mb-8">
                    <div className="h-10 w-3/4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-2xl"></div>
                    <div className="h-10 w-2/3 bg-gradient-to-r from-gray-150 via-gray-100 to-gray-150 rounded-2xl"></div>
                    <div className="h-4 w-1/2 bg-gray-100 rounded-full mt-4"></div>
                    <div className="h-4 w-2/3 bg-gray-50 rounded-full"></div>
                  </div>

                  {/* Feature Cards Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {/* Card 1 - Soft Blue */}
                    <div className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm">
                      <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center mb-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-lg"></div>
                      </div>
                      <div className="h-2 w-full bg-gray-50 rounded-full mb-2"></div>
                      <div className="h-2 w-3/4 bg-gray-50/50 rounded-full"></div>
                    </div>

                    {/* Card 2 - Soft Green */}
                    <div className="bg-white rounded-2xl p-5 border border-green-50 shadow-sm">
                      <div className="w-12 h-12 bg-green-50/50 rounded-xl flex items-center justify-center mb-3">
                        <div className="w-6 h-6 bg-green-100 rounded-lg"></div>
                      </div>
                      <div className="h-2 w-full bg-gray-50 rounded-full mb-2"></div>
                      <div className="h-2 w-2/3 bg-gray-50/50 rounded-full"></div>
                    </div>

                    {/* Card 3 - Soft Purple */}
                    <div className="bg-white rounded-2xl p-5 border border-purple-50 shadow-sm">
                      <div className="w-12 h-12 bg-purple-50/50 rounded-xl flex items-center justify-center mb-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-lg"></div>
                      </div>
                      <div className="h-2 w-full bg-gray-50 rounded-full mb-2"></div>
                      <div className="h-2 w-4/5 bg-gray-50/50 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content Lines */}
                  <div className="mt-8 space-y-2">
                    <div className="h-3 w-full bg-gray-50 rounded-full"></div>
                    <div className="h-3 w-full bg-gray-50/50 rounded-full"></div>
                    <div className="h-3 w-5/6 bg-gray-50 rounded-full"></div>
                    <div className="h-3 w-4/5 bg-gray-50/50 rounded-full"></div>
                  </div>

                  {/* Animated Mouse Cursor */}
                  <div className="absolute top-1/2 left-1/2 animate-mouse pointer-events-none z-50">
                    <MousePointer2 size={28} className="text-blue-400 drop-shadow-[0_8px_24px_rgba(96,165,250,0.4)]" />
                  </div>
                </div>
              </div>

              {/* Subtle Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(49,107,255,0.03)_0%,transparent_70%)] -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
