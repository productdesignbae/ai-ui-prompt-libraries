import React, { useState } from 'react';
import { Search, Copy, Check, Terminal, Code, AlignLeft, Sparkles, BarChart, BookOpen } from 'lucide-react';

const CATEGORIES = ['All', 'Writing', 'Coding', 'Analysis', 'Creative', 'Research'];

const PROMPTS = [
  {
    id: 1,
    title: 'React Hook Refactor',
    description: 'Refactor a complex React component into custom hooks for better testability and separation of concerns.',
    category: 'Coding',
    tags: ['react', 'refactoring', 'clean-code'],
  },
  {
    id: 2,
    title: 'De-escalation Email',
    description: 'Draft a professional and empathetic response to an angry customer, addressing their concerns while maintaining company policy.',
    category: 'Writing',
    tags: ['support', 'communication', 'email'],
  },
  {
    id: 3,
    title: 'Dataset Synthesis',
    description: 'Generate a realistic JSON dataset of 100 user profiles including nested addresses and order histories.',
    category: 'Analysis',
    tags: ['data', 'json', 'mocking'],
  },
  {
    id: 4,
    title: 'Cyberpunk Worldbuilding',
    description: 'Create a detailed description of a neo-noir cyberpunk city district, including factions, economy, and weather patterns.',
    category: 'Creative',
    tags: ['worldbuilding', 'sci-fi', 'fiction'],
  },
  {
    id: 5,
    title: 'Academic Paper Summary',
    description: 'Summarize a complex academic paper into a 3-paragraph executive summary suitable for a non-technical audience.',
    category: 'Research',
    tags: ['summary', 'academic', 'simplification'],
  },
  {
    id: 6,
    title: 'PostgreSQL Optimization',
    description: 'Analyze and provide optimization strategies for a slow-running SQL query with multiple JOINs and subqueries.',
    category: 'Coding',
    tags: ['sql', 'database', 'performance'],
  }
];

export function VercelMinimal() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPrompts = PROMPTS.filter(prompt => {
    const matchesCategory = activeCategory === 'All' || prompt.category === activeCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-neutral-800">
      {/* Subtle Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at top, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black 40%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* Header */}
        <header className="mb-16 text-center space-y-4 pt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Vercel AI UI
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Prompt Library
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A curated collection of precision-engineered prompts for modern workflows.
          </p>
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-white transition-colors" />
            <input 
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-md py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-white/30 focus:bg-white/[0.05] transition-all placeholder:text-neutral-600 font-mono"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 text-sm rounded-md transition-all whitespace-nowrap ${
                  activeCategory === category 
                    ? 'bg-white text-black font-medium' 
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map(prompt => (
            <div 
              key={prompt.id}
              className="group flex flex-col p-6 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                  {prompt.category}
                </span>
                <button
                  onClick={() => handleCopy(prompt.id)}
                  className="p-1.5 text-neutral-500 hover:text-white hover:bg-white/10 rounded transition-colors"
                  aria-label="Copy prompt"
                >
                  {copiedId === prompt.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              
              <h3 className="text-lg font-medium text-white mb-2">{prompt.title}</h3>
              
              <p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed">
                {prompt.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {prompt.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-neutral-400 rounded-sm font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-20 text-neutral-500 font-mono text-sm">
            NO_RESULTS_FOUND
          </div>
        )}
      </div>
    </div>
  );
}
