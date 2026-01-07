
import React from 'react';

const LOGOS = [
  { name: 'Claude AI', logo: '/logos copy/claude.png' },
  { name: 'OpenAI', logo: '/logos copy/openai.svg' },
  { name: 'Gemini', logo: '/logos copy/gemini.png' },
  { name: 'Grok', logo: '/logos copy/grok.png' },
  { name: 'Cursor', logo: '/logos copy/cursor.png' },
  { name: 'Lovable', logo: '/logos copy/lovable.svg' },
  { name: 'Supabase', logo: '/logos copy/supabase.png' },
  { name: 'PostgreSQL', logo: '/logos copy/postgressql.png' },
  { name: 'Pinecone', logo: '/logos copy/pinecone.svg' },
  { name: 'n8n', logo: '/logos copy/n8n.png' },
  { name: 'Make', logo: '/logos copy/make.png' },
  { name: 'Airtable', logo: '/logos copy/airtable.png' },
  { name: 'HighLevel', logo: '/logos copy/highlevel.png' },
];

export const LogoCarousel: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden relative bg-transparent">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Unser Technologie-Stack</p>
      </div>

      <div className="relative">
        <div className="logo-track flex gap-24 py-4">
          {[...LOGOS, ...LOGOS].map((tech, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
