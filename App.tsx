
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { LogoCarousel } from './components/LogoCarousel';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { ServicesGrid } from './components/ServicesGrid';
import { ProcessTimeline } from './components/ProcessTimeline';
import { TargetAudience } from './components/TargetAudience';
import { PricingTable } from './components/PricingTable';
import { ContactForm } from './components/ContactForm';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-gray-950 selection:bg-blue-50 selection:text-blue-600">
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm' : 'py-8 bg-transparent'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <img
              src="/logos copy/flowset_logo.png"
              alt="Flowset"
              className="h-8 w-auto group-hover:scale-105 transition-transform"
            />
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {['Vorteile', 'Ablauf', 'Preise'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-sm font-bold text-gray-500 hover:text-black transition-all uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-wider hover:bg-[#316bff] transition-all active:scale-95"
            >
              Projekt anfragen
            </button>
          </div>

          <button className="lg:hidden p-2 text-black bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-100 p-8 flex flex-col gap-8 shadow-2xl animate-in fade-in slide-in-from-top-4">
            <button onClick={() => scrollToSection('vorteile')} className="text-xl font-bold text-left">Vorteile</button>
            <button onClick={() => scrollToSection('ablauf')} className="text-xl font-bold text-left">Ablauf</button>
            <button onClick={() => scrollToSection('preise')} className="text-xl font-bold text-left">Preise</button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#316bff] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg">Kostenlose Beratung</button>
          </div>
        )}
      </nav>

      <main className="relative">
        <div id="hero"><Hero /></div>
        <LogoCarousel />
        <Problems />
        <Solution />
        <div id="vorteile"><ServicesGrid /></div>
        <div id="ablauf"><ProcessTimeline /></div>
        <TargetAudience />
        <div id="preise"><PricingTable /></div>
        <div id="contact"><ContactForm /></div>
      </main>

      <footer className="bg-white/50 backdrop-blur-md border-t border-gray-100 py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6">
              <img
                src="/logos copy/flowset_logo.png"
                alt="Flowset"
                className="h-8 w-auto"
              />
              <p className="text-gray-500 max-w-xs font-medium">Ihre KI-getriebene Web-Agentur aus Südtirol. Professionelle Ergebnisse in Rekordzeit.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Navigation</h4>
                <ul className="space-y-3 text-gray-500 text-sm font-medium">
                  <li><button onClick={() => scrollToSection('hero')} className="hover:text-black transition-colors">Home</button></li>
                  <li><button onClick={() => scrollToSection('vorteile')} className="hover:text-black transition-colors">Vorteile</button></li>
                  <li><button onClick={() => scrollToSection('preise')} className="hover:text-black transition-colors">Preise</button></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400">Rechtliches</h4>
                <ul className="space-y-3 text-gray-500 text-sm font-medium">
                  <li><a href="#" className="hover:text-black transition-colors">Datenschutz</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Impressum</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">AGB</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <p>© {new Date().getFullYear()} FLOWSET AI. ALLE RECHTE VORBEHALTEN.</p>
            <p className="flex items-center gap-2">GEBAUT IN SÜDTIROL <span className="text-red-500">❤️</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
