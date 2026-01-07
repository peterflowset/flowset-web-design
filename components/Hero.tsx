
import React from 'react';
import { ArrowRight, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 md:pt-32 md:pb-24 relative overflow-hidden bg-transparent">
      {/* Minimalist Background Logic - Enhanced for Mobile */}
      <div
        className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-blue-400/20 blur-[90px] md:blur-[140px] rounded-full -z-10 animate-pulse"
        style={{ animationDuration: '4s', transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
      ></div>
      <div
        className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-indigo-300/20 blur-[100px] md:blur-[160px] rounded-full -z-10"
        style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-6 text-left space-y-8 md:space-y-10">
            <div className="space-y-6 md:space-y-6">



              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tighter text-gray-900">
                Ihre professionelle <br />
                Website <span className="italic font-medium text-gray-400">in 7 Tagen</span><br />
                <span className="text-[#316bff] italic font-bold">für 800€</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Einmalpreis 2.000€ <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-900 font-semibold bg-green-50 px-2 py-0.5 rounded-md text-green-700 border border-green-100">60% Landesförderung</span> <br className="hidden sm:block" />
                <span className="block mt-2 sm:mt-0">Perfekt für Kleinstunternehmen in Südtirol.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-[#316bff] text-white px-8 py-5 rounded-[20px] text-lg font-bold uppercase tracking-widest shadow-[0_20px_50px_rgba(49,107,255,0.2)] hover:shadow-[0_30px_70px_rgba(49,107,255,0.3)] hover:-translate-y-1 transition-all active:scale-95"
                style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Anfrage starten
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>


            </div>
          </div>

          {/* Modern Browser Mockup with Animated Content */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[600px] group perspective-2000">

              {/* Floating Animation Wrapper */}
              <div className="relative transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">

                {/* Browser Window */}
                <div className="relative bg-white rounded-[24px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden transform transition-all hover:scale-[1.02]">

                  {/* Browser Header */}
                  <div className="h-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 flex items-center px-5 gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-200"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
                      <div className="w-3 h-3 rounded-full bg-green-200"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 bg-gray-100 rounded-lg w-full max-w-[300px] mx-auto opacity-50"></div>
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50/50 to-white min-h-[350px]">

                    {/* Header Section */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="h-8 w-32 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full animate-pulse"></div>
                      <div className="h-10 w-10 bg-blue-100/50 rounded-xl shadow-sm"></div>
                    </div>

                    {/* Hero Text Simulation */}
                    <div className="space-y-3 mb-8">
                      <div className="h-8 sm:h-10 w-3/4 bg-gray-100 rounded-2xl"></div>
                      <div className="h-8 sm:h-10 w-2/3 bg-gray-50 rounded-2xl"></div>
                      <div className="h-4 w-1/2 bg-gray-100/50 rounded-full mt-4"></div>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
                      {/* Card 1 */}
                      <div className="bg-white rounded-2xl p-3 sm:p-5 border border-blue-50 shadow-sm transition-transform hover:-translate-y-1">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-200/50 rounded-lg"></div>
                        </div>
                        <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded-full mb-2"></div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white rounded-2xl p-3 sm:p-5 border border-green-50 shadow-sm transition-transform hover:-translate-y-1 delay-75">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-50 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-green-200/50 rounded-lg"></div>
                        </div>
                        <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded-full mb-2"></div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white rounded-2xl p-3 sm:p-5 border border-purple-50 shadow-sm transition-transform hover:-translate-y-1 delay-150">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-purple-200/50 rounded-lg"></div>
                        </div>
                        <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded-full mb-2"></div>
                      </div>
                    </div>

                    {/* Animated Mouse Cursor */}
                    <div className="absolute top-1/2 left-1/2 animate-mouse pointer-events-none z-50">
                      <MousePointer2 size={28} className="text-blue-500 drop-shadow-lg fill-blue-500/20" />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements behind browser */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-20 -z-10 bg-blue-500/50 blur-xl"></div>

              </div>

              {/* Subtle Background Glow */}
              <div className="absolute inset-0 bg-blue-400/10 blur-[60px] -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
