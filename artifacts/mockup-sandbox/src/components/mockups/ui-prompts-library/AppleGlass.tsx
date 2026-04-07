import React, { useState } from 'react';
import { Search, Copy, Check, Sparkles, Code, PenTool, Lightbulb, Beaker, Command } from 'lucide-react';

const CATEGORIES = ['All', 'Writing', 'Coding', 'Analysis', 'Creative', 'Research'];

const PROMPTS = [
  { id: 1, title: 'Tone Adapter', category: 'Writing', description: 'Rewrite the following text to match a specific tone, ranging from corporate professional to casual gen-z.', tags: ['Tone', 'Copywriting'] },
  { id: 2, title: 'React Component Refactor', category: 'Coding', description: 'Analyze this React component and refactor it for better performance, readability, and modern hooks.', tags: ['React', 'Optimization'] },
  { id: 3, title: 'Data Insight Generator', category: 'Analysis', description: 'Extract key actionable insights from this raw dataset and present them in a concise bulleted list.', tags: ['Data', 'Summary'] },
  { id: 4, title: 'World Building Context', category: 'Creative', description: 'Generate a detailed backstory for a sci-fi city, including its economy, factions, and hidden secrets.', tags: ['Fiction', 'Brainstorm'] },
  { id: 5, title: 'Literature Review', category: 'Research', description: 'Summarize the provided academic papers and highlight the conflicting arguments between them.', tags: ['Academic', 'Summary'] },
  { id: 6, title: 'Regex Explainer', category: 'Coding', description: 'Break down this complex regular expression step-by-step and explain what each part does.', tags: ['Regex', 'Learning'] },
];

export function AppleGlass() {
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
    <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-white/20 relative overflow-hidden" style={{ letterSpacing: '0.01em' }}>
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-indigo-600/30 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-violet-600/20 blur-[100px] mix-blend-screen" />
        <div className="absolute top-[30%] left-[40%] w-[50%] h-[50%] rounded-full bg-rose-500/10 blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col items-center text-center gap-6 pt-10">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] backdrop-blur-xl mb-2">
            <Command className="w-8 h-8 text-white/90" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Prompt Library
          </h1>
          <p className="text-lg text-white/50 font-light max-w-xl">
            A curated collection of spatial intelligence prompts. 
            Discover, adapt, and elevate your workflows.
          </p>
        </header>

        {/* Controls: Search & Tabs */}
        <div className="flex flex-col items-center gap-8 sticky top-6 z-20">
          <div className="relative w-full max-w-md group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-white/40 group-focus-within:text-white/80 transition-colors" strokeWidth={1.5} />
            </div>
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-6 rounded-3xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl text-lg font-light"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white/15 text-white shadow-[0_2px_10px_rgba(0,0,0,0.2)]'
                    : 'text-white/50 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredPrompts.map(prompt => (
            <div
              key={prompt.id}
              className="group flex flex-col gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-start justify-between gap-4 relative z-10">
                <h3 className="text-xl font-medium text-white/90 leading-tight">
                  {prompt.title}
                </h3>
                <button
                  onClick={() => handleCopy(prompt.id)}
                  className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/15 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
                  aria-label="Copy prompt"
                >
                  {copiedId === prompt.id ? (
                    <Check className="w-4 h-4 text-green-400" strokeWidth={2} />
                  ) : (
                    <Copy className="w-4 h-4" strokeWidth={1.5} />
                  )}
                </button>
              </div>
              
              <p className="text-white/60 font-light leading-relaxed text-sm flex-1 relative z-10">
                {prompt.description}
              </p>
              
              <div className="flex items-center gap-2 mt-4 relative z-10">
                {prompt.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/5 text-white/70 font-medium tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-white/40">
            <Search className="w-12 h-12 mb-4 opacity-50" strokeWidth={1} />
            <p className="text-lg font-light">No prompts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
