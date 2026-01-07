
import React, { useEffect, useRef, useState } from 'react';
import { Clock, Zap, FileText, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    title: "Konzept & Strategie",
    time: "Tag 1",
    icon: <Zap size={24} />,
    description: "Definition Ihrer Ziele und Erstellung eines individuellen Design-Konzepts für Ihren Betrieb."
  },
  {
    title: "Gestaltung & Aufbau",
    time: "Tag 2-5",
    icon: <FileText size={24} />,
    description: "Ihre Website wird mit modernster Technik pixelgenau umgesetzt – professionell und individuell."
  },
  {
    title: "Förderberatung",
    time: "Parallel",
    icon: <Clock size={24} />,
    description: "Wir unterstützen Sie bei der Beantragung Ihrer 60% Landesförderung Südtirol."
  },
  {
    title: "Veröffentlichung",
    time: "Tag 7",
    icon: <CheckCircle size={24} />,
    description: "Ihre Website geht online. Wir kümmern uns um Hosting, Domain und alle technischen Details."
  }
];

export const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // We want the line to fill as it crosses the center of the screen
      const start = windowHeight / 2;

      // Calculate how much of the container has passed the "beam" (center of screen)
      const distFromTop = start - top;

      // Normalize to 0-1
      const p = distFromTop / height;

      setProgress(Math.max(0, Math.min(1, p)));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress(); // initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 sm:py-32 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-[#316bff] text-xs font-bold uppercase tracking-[0.25em] mb-4">PROJEKTPLAN</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">In Rekordzeit <br /><span className="text-gray-300 italic">zum Ergebnis.</span></h2>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gray-50 border border-gray-100 text-gray-500 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm mt-4">
            <Clock size={14} className="text-[#316bff] sm:w-4 sm:h-4" />
            Gesamtdauer: 7 Werktage
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-0">

          {/* The Vertical Line Track (Absolute Centered) - Safari optimiert */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gray-100 md:-translate-x-1/2 rounded-full overflow-hidden">
            {/* The "Beam" (Active Color) */}
            <div
              className="w-full bg-[#316bff] transition-all duration-100 ease-out shadow-[0_0_15px_rgba(49,107,255,0.5)]"
              style={{
                height: `${progress * 100}%`,
                transform: 'translateZ(0)',
                WebkitBackfaceVisibility: 'hidden'
              }}
            />
          </div>

          {/* Steps Wrapper */}
          <div className="space-y-20 md:space-y-32">
            {STEPS.map((step, index) => {
              const stepThreshold = index / (STEPS.length - 1);
              const isActive = progress >= (stepThreshold - 0.05);
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">

                  {/* Desktop Grid Layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-x-24 items-center">

                    {/* Left Column */}
                    <div className={`flex justify-end ${isEven ? 'text-right' : 'text-right'}`}>
                      {isEven ? (
                        /* Content (Text + Icon) */
                        <div className={`flex items-start justify-end gap-6 transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-8'}`}>
                          <div>
                            <div className="text-[10px] font-bold text-[#316bff] uppercase tracking-widest mb-2">{step.time}</div>
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm max-w-sm ml-auto">{step.description}</p>
                          </div>
                          {/* Icon */}
                          <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${isActive ? 'bg-[#316bff] text-white' : 'bg-white text-gray-300 border border-gray-100'}`}>
                            {step.icon}
                          </div>
                        </div>
                      ) : (
                        /* Number (02, 04...) */
                        <div className={`transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                          <div className="text-6xl font-black text-gray-100/50 select-none">0{index + 1}</div>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className={`flex justify-start ${!isEven ? 'text-left' : 'text-left'}`}>
                      {!isEven ? (
                        /* Content (Icon + Text) */
                        <div className={`flex items-start justify-start gap-6 transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-8'}`}>
                          {/* Icon */}
                          <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${isActive ? 'bg-[#316bff] text-white' : 'bg-white text-gray-300 border border-gray-100'}`}>
                            {step.icon}
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-[#316bff] uppercase tracking-widest mb-2">{step.time}</div>
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm max-w-sm mr-auto">{step.description}</p>
                          </div>
                        </div>
                      ) : (
                        /* Number (01, 03...) */
                        <div className={`transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                          <div className="text-6xl font-black text-gray-100/50 select-none">0{index + 1}</div>
                        </div>
                      )}
                    </div>

                  </div>


                  {/* Mobile Layout (Stacked) - Safari optimiert */}
                  <div className="md:hidden flex gap-3 sm:gap-4 pl-10 sm:pl-12 relative">
                    {/* Mobile connects to the line with a horizontal connector? No, keep it simple */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-md transition-all duration-500 ${isActive ? 'bg-[#316bff] text-white' : 'bg-white text-gray-300 border border-gray-100'}`}
                      style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
                    >
                      {React.cloneElement(step.icon as React.ReactElement, { size: 18 })}
                    </div>
                    <div
                      className={`transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'}`}
                      style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
                    >
                      <div className="text-[10px] font-bold text-[#316bff] uppercase tracking-widest mb-1">{step.time}</div>
                      <h3 className="text-base sm:text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Background Decor - Safari optimiert */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[1000px] sm:h-[1000px] bg-blue-50/20 blur-[80px] sm:blur-[130px] rounded-full -z-20 pointer-events-none"
        style={{ transform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }}
      ></div>

    </section>
  );
};
