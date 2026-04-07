import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CocktailEditorial() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const prompts = [
    {
      id: 'p1',
      title: 'The Hemingway Edit',
      ingredients: ['Concise phrasing', 'Active voice', 'Removal of adverbs', 'Strong verbs'],
      attributes: [
        { name: 'Creativity', value: 30 },
        { name: 'Complexity', value: 40 },
        { name: 'Tone', value: 80 },
        { name: 'Length', value: 20 },
      ],
      category: 'WRITING · TERSE',
      tokens: '~450 TOKENS',
      style: { top: '10%', left: '8%', width: '340px' }
    },
    {
      id: 'p2',
      title: 'Socratic Dialogue',
      ingredients: ['Probing questions', 'Step-by-step logic', 'Philosophical framing', 'Devil\'s advocate'],
      attributes: [
        { name: 'Creativity', value: 70 },
        { name: 'Complexity', value: 90 },
        { name: 'Tone', value: 50 },
        { name: 'Length', value: 85 },
      ],
      category: 'ANALYSIS · DEEP',
      tokens: '~1200 TOKENS',
      style: { top: '45%', left: '20%', width: '380px', zIndex: 10 }
    },
    {
      id: 'p3',
      title: 'Midnight Coder',
      ingredients: ['Python/TypeScript', 'Error handling', 'Performance optimization', 'Inline comments'],
      attributes: [
        { name: 'Creativity', value: 20 },
        { name: 'Complexity', value: 85 },
        { name: 'Tone', value: 10 },
        { name: 'Length', value: 95 },
      ],
      category: 'CODING · TECHNICAL',
      tokens: '~2000 TOKENS',
      style: { top: '15%', left: '45%', width: '320px' }
    },
    {
      id: 'p4',
      title: 'Worldbuilder\'s Draft',
      ingredients: ['Sensory details', 'Lore generation', 'Character motivation', 'Atmospheric description'],
      attributes: [
        { name: 'Creativity', value: 100 },
        { name: 'Complexity', value: 75 },
        { name: 'Tone', value: 90 },
        { name: 'Length', value: 100 },
      ],
      category: 'CREATIVE · EXPANSIVE',
      tokens: '~1800 TOKENS',
      style: { top: '55%', left: '55%', width: '360px', zIndex: 5 }
    },
    {
      id: 'p5',
      title: 'Executive Summary',
      ingredients: ['Bottom-line up front', 'Bullet points', 'Financial metrics', 'Action items'],
      attributes: [
        { name: 'Creativity', value: 10 },
        { name: 'Complexity', value: 60 },
        { name: 'Tone', value: 20 },
        { name: 'Length', value: 15 },
      ],
      category: 'BUSINESS · SHARP',
      tokens: '~300 TOKENS',
      style: { top: '25%', left: '75%', width: '300px' }
    }
  ];

  return (
    <div className="relative w-full h-screen bg-[#F0EDE8] overflow-hidden selection:bg-[#8B2020] selection:text-[#F0EDE8] font-sans">
      
      {/* Abstract Background Blobs (Cocktail Imagery equivalents) */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#E8DCC8] to-[#D4C4AE] blur-3xl opacity-60 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-[#D9CDB8] to-[#E3D8C5] blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-15%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-t from-[#E8D4C0] to-transparent blur-3xl opacity-40 mix-blend-multiply pointer-events-none"></div>

      {/* Header/Nav - Ultra Minimal */}
      <header className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] tracking-tight leading-none mb-2">Prompt<br/>Library.</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/50">Curated AI Inputs / Vol. 1</p>
        </div>
        
        <nav className="flex gap-8 pointer-events-auto">
          {['All', 'Writing', 'Coding', 'Analysis', 'Creative'].map((cat, i) => (
            <button 
              key={cat} 
              className={`text-xs uppercase tracking-widest ${i === 0 ? 'text-[#8B2020] border-b border-[#8B2020] pb-1' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors pb-1'}`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      {/* Scattered Cards Canvas */}
      <div className="absolute inset-0 w-full h-full overflow-auto pt-40 pb-20 px-12 hide-scrollbar">
        <div className="relative min-w-[1200px] min-h-[800px] h-full w-full">
          
          {prompts.map((prompt) => (
            <div 
              key={prompt.id}
              className="absolute bg-white border border-[#D4CFC8] p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 group"
              style={prompt.style}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] pr-8 leading-tight">{prompt.title}</h2>
                <button 
                  onClick={() => handleCopy(prompt.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1A1A1A]/40 hover:text-[#8B2020]"
                  aria-label="Copy prompt"
                >
                  {copiedId === prompt.id ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {/* Ingredients / Elements */}
              <div className="mb-8">
                <ul className="space-y-1.5">
                  {prompt.ingredients.map((ing, i) => (
                    <li key={i} className="text-[11px] uppercase tracking-wider text-[#1A1A1A]/70 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-[#D4CFC8] mr-3"></span>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sliders / Attributes */}
              <div className="space-y-4 mb-10">
                {prompt.attributes.map((attr, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[#1A1A1A]/50 w-24 flex-shrink-0">
                      {attr.name}
                    </span>
                    <div className="flex-1 h-[1px] bg-[#E8E4DE] relative">
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#8B2020]"
                        style={{ left: `${attr.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-end border-t border-[#F0EDE8] pt-6 mt-auto">
                <span className="text-[10px] font-medium tracking-widest text-[#8B2020]">
                  {prompt.category}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-[#1A1A1A]/40">
                  {prompt.tokens}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
      
      {/* Global CSS to hide scrollbar but allow scrolling */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
