import React, { useState } from 'react';
import { 
  Search, Home, Layout, Zap, Settings, Command, ChevronRight, 
  Copy, CheckCircle2, User, Users, FileText, CheckSquare, MessageSquare,
  Plus
} from 'lucide-react';

const PROMPTS = [
  {
    id: 1,
    title: "Executive Summary",
    category: "Writing",
    desc: "Distill complex reports into 3-paragraph executive summaries with key takeaways.",
    tags: ["Report", "Business"],
    style: { top: '120px', left: '240px', width: '320px' }
  },
  {
    id: 2,
    title: "React Hook Generator",
    category: "Coding",
    desc: "Generate custom React hooks with TypeScript types and exhaustive deps.",
    tags: ["React", "TS"],
    style: { top: '280px', left: '380px', width: '300px' }
  },
  {
    id: 3,
    title: "Sentiment Analysis",
    category: "Analysis",
    desc: "Analyze customer feedback and categorize by sentiment and urgency.",
    tags: ["Data", "NLP"],
    style: { top: '160px', left: '600px', width: '280px' }
  },
  {
    id: 4,
    title: "Brand Voice Guide",
    category: "Creative",
    desc: "Define brand archetypes and tone of voice guidelines from sample text.",
    tags: ["Marketing", "Brand"],
    style: { top: '480px', left: '260px', width: '340px' }
  },
  {
    id: 5,
    title: "Competitor Matrix",
    category: "Research",
    desc: "Build a feature comparison matrix for top 3 competitors in a given niche.",
    tags: ["Strategy", "Market"],
    style: { top: '380px', left: '720px', width: '310px' }
  }
];

export function SamuraiCanvas() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full h-full min-h-screen relative overflow-hidden text-neutral-800 font-sans flex" 
      style={{ 
        backgroundColor: '#e8e8e8',
        backgroundImage: 'radial-gradient(#d4d4d4 2px, transparent 2px)',
        backgroundSize: '24px 24px'
      }}
    >
      {/* Sidebar */}
      <div className="w-16 h-full bg-[#dfdfdf] border-r border-[#d4d4d4] flex flex-col items-center py-6 gap-8 z-20 shrink-0">
        <div className="w-10 h-10 bg-neutral-800 text-white rounded-xl flex items-center justify-center shadow-md">
          <Zap size={20} className="text-[#C4522A]" />
        </div>
        <nav className="flex flex-col gap-6 text-neutral-500">
          <button className="p-2 rounded-lg hover:bg-[#d4d4d4] hover:text-neutral-800 transition-colors"><Home size={20} /></button>
          <button className="p-2 rounded-lg bg-white shadow-sm text-[#C4522A]"><Layout size={20} /></button>
          <button className="p-2 rounded-lg hover:bg-[#d4d4d4] hover:text-neutral-800 transition-colors"><Command size={20} /></button>
        </nav>
        <div className="mt-auto">
          <button className="p-2 rounded-lg hover:bg-[#d4d4d4] hover:text-neutral-800 transition-colors"><Settings size={20} /></button>
        </div>
      </div>

      <div className="flex-1 flex flex-col relative h-full">
        {/* Header */}
        <header className="h-16 border-b border-[#d4d4d4] bg-[#e8e8e8]/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-neutral-500">Workspace</span>
            <ChevronRight size={16} className="text-neutral-400" />
            <span className="text-neutral-800">Prompt Library</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-neutral-200">
              <Search size={14} className="text-neutral-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search prompts..." 
                className="bg-transparent border-none outline-none text-sm w-48 placeholder:text-neutral-400"
              />
            </div>
            
            <div className="flex items-center bg-white rounded-full p-1 pr-3 shadow-sm border border-neutral-200 gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-700">AK</div>
                <div className="w-7 h-7 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-700">MJ</div>
                <div className="w-7 h-7 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-purple-700">SJ</div>
              </div>
              <span className="text-xs font-semibold text-neutral-600 tracking-wide uppercase">Team</span>
            </div>
            
            <div className="w-9 h-9 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center overflow-hidden">
              <User size={16} className="text-neutral-500" />
            </div>
          </div>
        </header>

        {/* Canvas Area */}
        <div className="flex-1 relative overflow-auto p-8">
          
          {/* Featured Prompt */}
          <div className="absolute top-[80px] left-[60px] w-[420px] bg-white rounded-2xl shadow-xl border border-neutral-200/50 p-6 z-10" style={{ transform: 'rotate(-1deg)' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4522A] bg-[#C4522A]/10 px-2 py-1 rounded-md">Featured</span>
              <button className="text-neutral-400 hover:text-neutral-600"><Settings size={14} /></button>
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-neutral-900">System Architecture Design</h2>
            <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
              Generate a comprehensive system architecture document including tech stack recommendations, data models, and API boundaries based on a product brief.
            </p>
            <div className="flex gap-2 mb-6">
              <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 font-medium border border-neutral-200">System</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 font-medium border border-neutral-200">Engineering</span>
            </div>
            <button className="w-full py-3 bg-[#C4522A] hover:bg-[#a84422] text-white rounded-xl font-medium shadow-md shadow-[#C4522A]/20 transition-all flex items-center justify-center gap-2">
              <Copy size={16} />
              Copy Prompt
            </button>
          </div>

          {/* Floating Prompt Cards */}
          {PROMPTS.map((prompt) => (
            <div 
              key={prompt.id}
              className="absolute bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-neutral-200/60 p-5 cursor-grab active:cursor-grabbing hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              style={prompt.style}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">{prompt.category}</span>
                <button 
                  onClick={() => handleCopy(prompt.id)}
                  className={`p-1.5 rounded-md transition-colors ${copiedId === prompt.id ? 'bg-green-100 text-green-600' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200 opacity-0 group-hover:opacity-100'}`}
                >
                  {copiedId === prompt.id ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                </button>
              </div>
              <h3 className="text-base font-semibold text-neutral-800 mb-2">{prompt.title}</h3>
              <p className="text-sm text-neutral-500 line-clamp-2 mb-4 leading-relaxed">{prompt.desc}</p>
              <div className="flex gap-2">
                {prompt.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded border border-neutral-200 text-neutral-500 font-medium">{tag}</span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Stats Right Sidebar */}
      <div className="w-72 h-full bg-[#dfdfdf] border-l border-[#d4d4d4] p-6 flex flex-col gap-6 z-20 shrink-0 overflow-y-auto">
        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Metrics</h3>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#C4522A]/5 rounded-bl-[100px]" />
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileText size={16} /></div>
            <span className="text-sm font-semibold text-neutral-700">Knowledge</span>
          </div>
          <div className="text-3xl font-light text-neutral-900 tracking-tight">2,481<span className="text-sm text-neutral-400 ml-1 font-normal">nodes</span></div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-bl-[100px]" />
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><Zap size={16} /></div>
            <span className="text-sm font-semibold text-neutral-700">Efficiency</span>
          </div>
          <div className="text-3xl font-light text-neutral-900 tracking-tight">94<span className="text-sm text-neutral-400 ml-1 font-normal">%</span></div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-bl-[100px]" />
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><CheckSquare size={16} /></div>
            <span className="text-sm font-semibold text-neutral-700">Tasks</span>
          </div>
          <div className="text-3xl font-light text-neutral-900 tracking-tight">14<span className="text-sm text-neutral-400 ml-1 font-normal">active</span></div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-bl-[100px]" />
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-orange-50 text-[#C4522A] rounded-lg"><MessageSquare size={16} /></div>
            <span className="text-sm font-semibold text-neutral-700">Messages</span>
          </div>
          <div className="text-3xl font-light text-neutral-900 tracking-tight">842<span className="text-sm text-neutral-400 ml-1 font-normal">total</span></div>
        </div>

        <button className="mt-4 w-full py-3 bg-neutral-800 hover:bg-neutral-900 text-white rounded-xl text-sm font-medium shadow-md transition-colors flex items-center justify-center gap-2">
          <Plus size={16} />
          New Widget
        </button>
      </div>

    </div>
  );
}

export default SamuraiCanvas;
