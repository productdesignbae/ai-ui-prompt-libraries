import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CocktailEditorial() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleCopy = (id: string) => { setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };

  const prompts = [
    { id:'p1', title:'The Hemingway Edit', ingredients:['Concise phrasing','Active voice','Removal of adverbs','Strong verbs','Short sentences'], attributes:[{name:'Creativity',value:30},{name:'Complexity',value:40},{name:'Tone',value:80},{name:'Length',value:20}], category:'WRITING · TERSE', tokens:'~450 TOKENS', type:"Both", style:{ top:'8%',left:'6%',width:'310px' } },
    { id:'p2', title:'Component Audit', ingredients:['Accessibility check','Visual hierarchy','Responsiveness','Contrast ratios','Focus indicators'], attributes:[{name:'Creativity',value:15},{name:'Complexity',value:60},{name:'Tone',value:50},{name:'Length',value:45}], category:'DESIGN · STRUCTURAL', tokens:'~600 TOKENS', type:"Both", style:{ top:'8%',left:'35%',width:'300px' } },
    { id:'p3', title:'Midnight Coder', ingredients:['TypeScript types','Error handling','Performance tuning','Inline comments','Test scaffold'], attributes:[{name:'Creativity',value:20},{name:'Complexity',value:85},{name:'Tone',value:10},{name:'Length',value:95}], category:'CODING · TECHNICAL', tokens:'~2000 TOKENS', type:"Dev", style:{ top:'8%',left:'63%',width:'300px' } },
    { id:'p4', title:'Color System from Brand', ingredients:['Primary palette','Secondary palette','Neutral scale','Semantic tokens','Dark mode vars'], attributes:[{name:'Creativity',value:45},{name:'Complexity',value:55},{name:'Tone',value:40},{name:'Length',value:60}], category:'DESIGN · SYSTEMATIC', tokens:'~800 TOKENS', type:"Design", style:{ top:'42%',left:'4%',width:'330px' } },
    { id:'p5', title:'Socratic Dialogue', ingredients:['Probing questions','Step-by-step logic','Philosophical framing','Devil\'s advocate'], attributes:[{name:'Creativity',value:70},{name:'Complexity',value:90},{name:'Tone',value:50},{name:'Length',value:85}], category:'ANALYSIS · DEEP', tokens:'~1200 TOKENS', type:"Both", style:{ top:'42%',left:'31%',width:'350px' } },
    { id:'p6', title:'Onboarding Flow Outline', ingredients:['Step goals','User actions','Screen descriptions','Copy direction','Success states'], attributes:[{name:'Creativity',value:55},{name:'Complexity',value:50},{name:'Tone',value:60},{name:'Length',value:70}], category:'DESIGN · UX FLOW', tokens:'~900 TOKENS', type:"Design", style:{ top:'42%',left:'62%',width:'310px' } },
    { id:'p7', title:'Executive Summary', ingredients:['Bottom-line up front','Bullet points','Financial metrics','Action items'], attributes:[{name:'Creativity',value:10},{name:'Complexity',value:60},{name:'Tone',value:20},{name:'Length',value:15}], category:'BUSINESS · SHARP', tokens:'~300 TOKENS', type:"Both", style:{ top:'75%',left:'6%',width:'300px' } },
    { id:'p8', title:'Dark Mode Token Map', ingredients:['Color inversion','Contrast check','oklch() conversion','Surface hierarchy','Overlay tokens'], attributes:[{name:'Creativity',value:15},{name:'Complexity',value:70},{name:'Tone',value:20},{name:'Length',value:65}], category:'DEV · SYSTEMATIC', tokens:'~700 TOKENS', type:"Dev", style:{ top:'75%',left:'34%',width:'310px' } },
    { id:'p9', title:'Worldbuilder\'s Draft', ingredients:['Sensory details','Lore generation','Character motivation','Atmospheric description'], attributes:[{name:'Creativity',value:100},{name:'Complexity',value:75},{name:'Tone',value:90},{name:'Length',value:100}], category:'CREATIVE · EXPANSIVE', tokens:'~1800 TOKENS', type:"Both", style:{ top:'75%',left:'62%',width:'310px' } },
  ];

  const filtered = prompts.filter(p => activeFilter === "All" || p.type === activeFilter);

  return (
    <div className="relative w-full h-screen bg-[#F0EDE8] overflow-hidden selection:bg-[#8B2020] selection:text-[#F0EDE8] font-sans">
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#E8DCC8] to-[#D4C4AE] blur-3xl opacity-60 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-[#D9CDB8] to-[#E3D8C5] blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-t from-[#E8D4C0] to-transparent blur-3xl opacity-40 mix-blend-multiply pointer-events-none" />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] tracking-tight leading-none mb-1">Shiuli's<br/>Olive Drop.</h1>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A]/50">Curated AI Inputs / Vol. 1</p>
        </div>
        <nav className="flex gap-4 items-center pointer-events-auto">
          {['All','Design','Dev','Both'].map((cat, i) => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className={`text-[10px] uppercase tracking-widest pb-0.5 transition-all ${activeFilter===cat ? 'text-[#8B2020] border-b border-[#8B2020]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]'}`}>
              {cat}
            </button>
          ))}
        </nav>
      </header>

      {/* Canvas */}
      <div className="absolute inset-0 w-full h-full overflow-auto pt-36 pb-16 px-8" style={{ scrollbarWidth:"none" }}>
        <style>{`.hide-sb::-webkit-scrollbar{display:none}`}</style>
        <div className="hide-sb relative min-w-[1100px] min-h-[900px] h-full w-full">
          {filtered.map(prompt => (
            <div key={prompt.id} className="absolute bg-white border border-[#D4CFC8] shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 group"
              style={{ ...prompt.style, padding:"28px 32px" }}>
              <div className="flex justify-between items-start mb-5">
                <h2 className="font-serif text-xl md:text-2xl text-[#1A1A1A] pr-6 leading-tight">{prompt.title}</h2>
                <button onClick={() => handleCopy(prompt.id)} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1A1A1A]/40 hover:text-[#8B2020]" aria-label="Copy">
                  {copiedId===prompt.id?<Check className="w-4 h-4"/>:<Copy className="w-4 h-4"/>}
                </button>
              </div>

              <div className="mb-6">
                <ul className="space-y-1.5">
                  {prompt.ingredients.map((ing,i) => (
                    <li key={i} className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/70 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-[#D4CFC8] mr-2.5" />{ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3.5 mb-8">
                {prompt.attributes.map((attr,i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[#1A1A1A]/50 w-20 flex-shrink-0">{attr.name}</span>
                    <div className="flex-1 h-[1px] bg-[#E8E4DE] relative">
                      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#8B2020]" style={{ left:`${attr.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-end border-t border-[#F0EDE8] pt-5">
                <span className="text-[9px] font-medium tracking-widest text-[#8B2020]">{prompt.category}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-mono tracking-wider text-[#1A1A1A]/40">{prompt.tokens}</span>
                  <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 border border-[#D4CFC8] text-[#1A1A1A]/50">{prompt.type}</span>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-serif text-2xl text-[#1A1A1A]/20">No prompts in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
