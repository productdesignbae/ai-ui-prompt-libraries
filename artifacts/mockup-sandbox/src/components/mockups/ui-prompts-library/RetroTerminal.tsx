import React, { useState, useEffect } from 'react';

const CATEGORIES = ['ALL', 'WRITING', 'CODING', 'ANALYSIS', 'CREATIVE', 'RESEARCH'];

const PROMPTS = [
  {
    id: 1,
    title: 'REACT_HOOK_REFACTOR',
    description: 'Refactor a complex React component into custom hooks for better testability and separation of concerns.',
    category: 'CODING',
    tags: ['react', 'refactor', 'hooks'],
  },
  {
    id: 2,
    title: 'DE-ESCALATION_EMAIL',
    description: 'Draft a professional and empathetic response to an angry customer, addressing their concerns while maintaining company policy.',
    category: 'WRITING',
    tags: ['support', 'comm'],
  },
  {
    id: 3,
    title: 'DATASET_SYNTHESIS',
    description: 'Generate a realistic JSON dataset of 100 user profiles including nested addresses and order histories.',
    category: 'ANALYSIS',
    tags: ['data', 'json', 'mock'],
  },
  {
    id: 4,
    title: 'CYBERPUNK_WORLD',
    description: 'Create a detailed description of a neo-noir cyberpunk city district, including factions, economy, and weather patterns.',
    category: 'CREATIVE',
    tags: ['world', 'scifi'],
  },
  {
    id: 5,
    title: 'ACADEMIC_SUMMARY',
    description: 'Summarize a complex academic paper into a 3-paragraph executive summary suitable for a non-technical audience.',
    category: 'RESEARCH',
    tags: ['summary', 'academic'],
  },
  {
    id: 6,
    title: 'PGSQL_OPTIMIZATION',
    description: 'Analyze and provide optimization strategies for a slow-running SQL query with multiple JOINs and subqueries.',
    category: 'CODING',
    tags: ['sql', 'db', 'perf'],
  }
];

export function RetroTerminal() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [bootText, setBootText] = useState('');
  
  const fullBootText = "INITIALIZING AI CORE...\nLOADING PROMPT DATABASE...\nACCESS GRANTED. WELCOME, USER.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setBootText(fullBootText.slice(0, i));
      i++;
      if (i > fullBootText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const filteredPrompts = PROMPTS.filter(prompt => {
    const matchesCategory = activeCategory === 'ALL' || prompt.category === activeCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#39ff14] font-mono p-4 md:p-8 relative overflow-hidden selection:bg-[#39ff14] selection:text-black">
      
      {/* Scanline Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1))',
          backgroundSize: '100% 4px',
        }}
      />
      
      {/* Phosphor Glow Style */}
      <style>{`
        .phosphor-glow {
          text-shadow: 0 0 5px rgba(57, 255, 20, 0.7), 0 0 10px rgba(57, 255, 20, 0.5);
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        input::placeholder {
          color: rgba(57, 255, 20, 0.4);
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10 phosphor-glow flex flex-col gap-8">
        
        {/* Header */}
        <header className="border-b-2 border-[#39ff14] pb-4 border-dashed">
          <div className="whitespace-pre-wrap text-sm mb-4 h-16 opacity-70">
            {bootText}
            <span className="blinking-cursor">_</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
            &gt; PROMPT_SYS_v2.4
          </h1>
        </header>

        {/* Controls */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <span className="mr-2">&gt; SEARCH:</span>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-b border-[#39ff14] text-[#39ff14] focus:outline-none w-full max-w-md phosphor-glow"
              spellCheck="false"
            />
            <span className="blinking-cursor ml-1">█</span>
          </div>

          <div className="flex flex-wrap gap-4 items-center mt-2">
            <span>&gt; FILTER:</span>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`transition-colors uppercase ${
                  activeCategory === category 
                    ? 'bg-[#39ff14] text-black font-bold' 
                    : 'text-[#39ff14] hover:bg-[#39ff14]/20'
                }`}
              >
                [{category}]
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
          {filteredPrompts.map((prompt, idx) => (
            <div 
              key={prompt.id}
              className="flex flex-col p-4 border border-[#39ff14] bg-black relative group hover:bg-[#39ff14]/5 transition-colors"
            >
              {/* ASCII Corners */}
              <div className="absolute top-0 left-0 -mt-1 -ml-1 bg-black text-[#39ff14] text-xs leading-none">┌</div>
              <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-black text-[#39ff14] text-xs leading-none">┐</div>
              <div className="absolute bottom-0 left-0 -mb-1 -ml-1 bg-black text-[#39ff14] text-xs leading-none">└</div>
              <div className="absolute bottom-0 right-0 -mb-1 -mr-1 bg-black text-[#39ff14] text-xs leading-none">┘</div>

              <div className="flex justify-between items-start mb-4 border-b border-[#39ff14]/30 pb-2 border-dashed">
                <span className="text-sm opacity-80">
                  ID: PROMPT_{String(prompt.id).padStart(3, '0')} | CAT: {prompt.category}
                </span>
                <button
                  onClick={() => handleCopy(prompt.id)}
                  className="text-sm hover:bg-[#39ff14] hover:text-black transition-colors"
                >
                  [{copiedId === prompt.id ? 'COPIED' : 'COPY'}]
                </button>
              </div>
              
              <h3 className="text-xl font-bold mb-3 uppercase">:: {prompt.title}</h3>
              
              <p className="text-sm opacity-90 mb-6 flex-grow leading-relaxed">
                {prompt.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-[#39ff14]/30 border-dashed">
                <span className="text-sm opacity-70">TAGS:</span>
                {prompt.tags.map(tag => (
                  <span key={tag} className="text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="py-10 text-center animate-pulse">
            ERR: NO_RECORDS_MATCH_QUERY
          </div>
        )}
      </div>
    </div>
  );
}
