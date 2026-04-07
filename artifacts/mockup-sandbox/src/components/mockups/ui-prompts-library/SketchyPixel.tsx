import React, { useState } from 'react';
import { Search, Copy, Check, Terminal, Sparkles } from 'lucide-react';

const CATEGORIES = ['All', 'Writing', 'Coding', 'Analysis', 'Creative', 'Research'];

const PROMPTS = [
  { id: 1, title: 'Tone Adapter', category: 'Writing', description: 'Rewrite the following text to match a specific tone, ranging from corporate professional to casual gen-z.', tags: ['Tone', 'Copywriting'] },
  { id: 2, title: 'React Component Refactor', category: 'Coding', description: 'Analyze this React component and refactor it for better performance, readability, and modern hooks.', tags: ['React', 'Optimization'] },
  { id: 3, title: 'Data Insight Generator', category: 'Analysis', description: 'Extract key actionable insights from this raw dataset and present them in a concise bulleted list.', tags: ['Data', 'Summary'] },
  { id: 4, title: 'World Building Context', category: 'Creative', description: 'Generate a detailed backstory for a sci-fi city, including its economy, factions, and hidden secrets.', tags: ['Fiction', 'Brainstorm'] },
  { id: 5, title: 'Literature Review', category: 'Research', description: 'Summarize the provided academic papers and highlight the conflicting arguments between them.', tags: ['Academic', 'Summary'] },
  { id: 6, title: 'Regex Explainer', category: 'Coding', description: 'Break down this complex regular expression step-by-step and explain what each part does.', tags: ['Regex', 'Learning'] },
];

export function SketchyPixel() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPrompts = PROMPTS.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfaf6] text-slate-900 font-mono relative overflow-hidden" 
         style={{
           backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
           backgroundSize: '24px 24px'
         }}>
      
      {/* Decorative Doodles */}
      <div className="absolute top-20 left-10 text-pink-500 opacity-20 transform -rotate-12 pointer-events-none">
        <Sparkles size={64} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-20 right-10 text-blue-500 opacity-20 transform rotate-12 pointer-events-none">
        <Terminal size={80} strokeWidth={1.5} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">
        
        {/* Header */}
        <header className="flex flex-col items-center text-center gap-4 mt-8">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 drop-shadow-[4px_4px_0_#3b82f6]">
              Prompts
            </h1>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-pink-500 absolute top-0 left-0 -translate-x-1 -translate-y-1 mix-blend-multiply pointer-events-none">
              Prompts
            </h1>
          </div>
          <p className="text-lg font-medium border-b-2 border-slate-900 border-dashed pb-1 max-w-md mt-4">
            A messy collection of useful AI commands.
          </p>
        </header>

        {/* Controls */}
        <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto mt-6">
          
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-slate-400" strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder="grep 'prompts'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-14 pr-6 bg-white border-4 border-slate-900 text-lg font-bold placeholder-slate-400 focus:outline-none shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] focus:shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all"
              style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category, i) => {
              const colors = ['#3b82f6', '#ec4899', '#84cc16', '#f59e0b', '#8b5cf6'];
              const hoverColor = colors[i % colors.length];
              const isActive = activeCategory === category;
              
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm md:text-base font-bold uppercase border-2 border-slate-900 transition-all ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-[4px_4px_0_0_#ec4899] -translate-y-1' 
                      : 'bg-white text-slate-900 shadow-[2px_2px_0_0_rgba(15,23,42,1)] hover:shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:-translate-y-0.5'
                  }`}
                  style={{
                    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                    transform: isActive ? `rotate(${(i%3)-1}deg)` : 'none'
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {filteredPrompts.map((prompt, i) => (
            <div
              key={prompt.id}
              className="flex flex-col gap-4 p-6 bg-white border-4 border-slate-900 relative group transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[12px_12px_0_0_rgba(132,204,22,1)]"
              style={{ 
                borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
                boxShadow: '8px 8px 0px 0px rgba(15,23,42,1)',
                transform: `rotate(${(i%5)-2}deg)`
              }}
            >
              {/* Category Badge */}
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-lime-400 border-2 border-slate-900 font-bold text-xs uppercase shadow-[2px_2px_0_0_rgba(15,23,42,1)] transform rotate-12">
                {prompt.category}
              </div>
              
              <div className="flex items-start justify-between gap-4 mt-2">
                <h3 className="text-xl font-black uppercase leading-tight">
                  {prompt.title}
                </h3>
              </div>
              
              <p className="text-slate-600 font-medium text-sm flex-1 leading-relaxed">
                {prompt.description}
              </p>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t-2 border-slate-900 border-dashed">
                <div className="flex gap-2 flex-wrap">
                  {prompt.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-slate-500 before:content-['#']">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => handleCopy(prompt.id)}
                  className="shrink-0 w-10 h-10 flex items-center justify-center bg-blue-500 text-white border-2 border-slate-900 shadow-[2px_2px_0_0_rgba(15,23,42,1)] hover:shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:-translate-y-0.5 active:shadow-[0_0_0_0_rgba(15,23,42,1)] active:translate-y-0.5 active:translate-x-0.5 transition-all"
                  style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
                  aria-label="Copy prompt"
                >
                  {copiedId === prompt.id ? (
                    <Check className="w-5 h-5" strokeWidth={3} />
                  ) : (
                    <Copy className="w-4 h-4" strokeWidth={2.5} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400 font-bold border-4 border-dashed border-slate-300 rounded-3xl mt-8">
            <Terminal className="w-16 h-16 mb-4 opacity-50" strokeWidth={2} />
            <p className="text-xl uppercase">404: Prompts Not Found</p>
          </div>
        )}
      </div>
    </div>
  );
}
