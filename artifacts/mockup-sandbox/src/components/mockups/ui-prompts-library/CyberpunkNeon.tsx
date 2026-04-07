import React, { useState } from "react";
import { Terminal, Search, Copy, Check, Cpu, Zap, Radio, Target, Shield, ChevronRight } from "lucide-react";

const CATEGORIES = ["WRITING", "CODING", "ANALYSIS", "CREATIVE", "RESEARCH"];
const PROMPTS = [
  {
    id: 1,
    title: "SYS.REACT_GEN",
    description: "INITIALIZE REACT COMPONENT GENERATION PROTOCOL WITH TAILWIND STYLING MATRICES.",
    category: "CODING",
    tags: ["REACT", "TAILWIND", "FRONTEND"],
    powerLevel: "HIGH",
  },
  {
    id: 2,
    title: "EXEC.SUMMARY_EXEC",
    description: "CONDENSE VOLUMINOUS DATA LOGS INTO HIGH-IMPACT TACTICAL OVERVIEWS.",
    category: "WRITING",
    tags: ["BUSINESS", "SUMMARY"],
    powerLevel: "MED",
  },
  {
    id: 3,
    title: "DB.SQL_OPTIMIZER",
    description: "ANALYZE AND RESTRUCTURE SQL QUERIES FOR MAXIMUM LATENCY REDUCTION.",
    category: "CODING",
    tags: ["SQL", "DATABASE"],
    powerLevel: "MAX",
  },
  {
    id: 4,
    title: "NEURAL.STORY_SPARK",
    description: "GENERATE 5 DIVERGENT NARRATIVE VECTORS FROM A SINGLE GENRE NODE.",
    category: "CREATIVE",
    tags: ["FICTION", "IDEAS"],
    powerLevel: "MED",
  },
  {
    id: 5,
    title: "CORP.COMP_MATRIX",
    description: "MAP COMPETITOR CAPABILITIES IN A COMPREHENSIVE STRATEGIC GRID.",
    category: "RESEARCH",
    tags: ["MARKET", "STRATEGY"],
    powerLevel: "HIGH",
  },
  {
    id: 6,
    title: "DATA.ANOMALY_SCAN",
    description: "ISOLATE SUBTLE TRENDS AND ANOMALIES WITHIN RAW DATA STREAMS.",
    category: "ANALYSIS",
    tags: ["DATA", "TRENDS"],
    powerLevel: "MAX",
  },
];

export function CyberpunkNeon() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredPrompts = PROMPTS.filter((p) => {
    const matchesCategory = activeCategory === "ALL" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="min-h-screen w-full font-mono text-[#00f5ff] overflow-hidden relative"
      style={{
        backgroundColor: "#0a0a0f",
        backgroundImage: `
          linear-gradient(rgba(0, 245, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Scanline Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-50 opacity-10"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #00f5ff 3px, #00f5ff 3px)",
          backgroundSize: "100% 4px",
        }}
      ></div>

      {/* Main Content container */}
      <div className="relative z-10 flex flex-col h-screen max-w-7xl mx-auto p-6">
        
        {/* Header HUD */}
        <header className="flex justify-between items-end border-b-2 border-[#00f5ff] pb-4 mb-8 relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#ff00aa] opacity-50 blur-[2px]"></div>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#00f5ff] bg-opacity-10 border-2 border-[#00f5ff] flex items-center justify-center relative overflow-hidden group">
              <Terminal size={32} className="text-[#00f5ff] group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-[#00f5ff] opacity-20 mix-blend-overlay group-hover:animate-pulse"></div>
            </div>
            <div>
              <h1 
                className="text-4xl font-bold tracking-widest uppercase m-0 leading-none"
                style={{ textShadow: "0 0 10px rgba(0,245,255,0.7), 0 0 20px rgba(0,245,255,0.5)" }}
              >
                NEURAL.PROMPTS
              </h1>
              <div className="text-[#ff00aa] text-sm tracking-[0.3em] mt-1 flex items-center gap-2">
                <span>SYS.ONLINE</span>
                <span className="w-2 h-2 rounded-full bg-[#ff00aa] animate-pulse" style={{ boxShadow: "0 0 8px #ff00aa" }}></span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00f5ff] blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative flex items-center bg-[#0a0a0f] border border-[#00f5ff] p-1">
                <Search size={20} className="mx-2 text-[#ff00aa]" />
                <input
                  type="text"
                  placeholder="QUERY DATABASE..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-[#00f5ff] placeholder-[#00f5ff]/50 outline-none w-64 uppercase tracking-wider text-sm p-1"
                />
                <div className="w-2 h-full bg-[#00f5ff] ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex gap-8 flex-1 overflow-hidden">
          {/* Navigation HUD */}
          <nav className="w-64 shrink-0 flex flex-col gap-2">
            <div className="text-xs text-[#ff00aa] mb-2 tracking-[0.2em] flex items-center gap-2">
              <ChevronRight size={14} /> CATEGORY_SELECT
            </div>
            
            <button
              onClick={() => setActiveCategory("ALL")}
              className={`relative text-left p-3 tracking-widest border transition-all duration-300 overflow-hidden ${
                activeCategory === "ALL" 
                  ? "border-[#00f5ff] text-[#000] bg-[#00f5ff] shadow-[0_0_15px_rgba(0,245,255,0.5)]" 
                  : "border-[#00f5ff]/30 text-[#00f5ff] hover:border-[#00f5ff] hover:bg-[#00f5ff]/10"
              }`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span>[ ALL_NODES ]</span>
                {activeCategory === "ALL" && <Radio size={16} />}
              </div>
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative text-left p-3 tracking-widest border transition-all duration-300 overflow-hidden group ${
                  activeCategory === cat 
                    ? "border-[#ff00aa] text-[#000] bg-[#ff00aa] shadow-[0_0_15px_rgba(255,0,170,0.5)]" 
                    : "border-[#00f5ff]/30 text-[#00f5ff] hover:border-[#ff00aa]/70 hover:text-[#ff00aa] hover:bg-[#ff00aa]/10"
                }`}
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-[#ff00aa] transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <span>{cat}</span>
                  {activeCategory === cat && <Target size={16} />}
                </div>
              </button>
            ))}

            <div className="mt-auto border border-[#00f5ff]/30 p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff00aa] opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff00aa] opacity-50"></div>
              <div className="text-[#00f5ff] text-xs tracking-widest mb-2 opacity-70">SYSTEM_STATUS</div>
              <div className="flex items-center gap-2 text-sm">
                <Shield size={16} className="text-[#00f5ff]" />
                <span>SECURE</span>
              </div>
              <div className="flex items-center gap-2 text-sm mt-1">
                <Cpu size={16} className="text-[#ff00aa]" />
                <span>LOAD: 12%</span>
              </div>
            </div>
          </nav>

          {/* Cards Grid */}
          <div className="flex-1 overflow-y-auto pr-4 pb-8 scrollbar-thin scrollbar-thumb-[#00f5ff] scrollbar-track-[#00f5ff]/10">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {filteredPrompts.map((prompt) => (
                <div
                  key={prompt.id}
                  onMouseEnter={() => setHoveredId(prompt.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative p-6 bg-[#0a0a0f] border transition-all duration-300 ${
                    hoveredId === prompt.id 
                      ? "border-[#ff00aa] shadow-[0_0_20px_rgba(255,0,170,0.2)] transform translate-x-1 -translate-y-1" 
                      : "border-[#00f5ff]/40"
                  }`}
                  style={hoveredId === prompt.id ? {
                    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)"
                  } : {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                  }}
                >
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-2 h-2 bg-[#00f5ff]"></div>
                  {hoveredId !== prompt.id && <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#00f5ff]"></div>}

                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold tracking-wider ${hoveredId === prompt.id ? "text-[#ff00aa]" : "text-[#00f5ff]"}`}>
                      {prompt.title}
                    </h3>
                    <div className="text-[10px] tracking-widest text-[#ff00aa] border border-[#ff00aa] px-2 py-1 flex items-center gap-1 bg-[#ff00aa]/10">
                      <Zap size={10} /> {prompt.powerLevel}
                    </div>
                  </div>

                  <p className="text-[#00f5ff]/70 text-sm leading-relaxed mb-6 min-h-[3rem]">
                    {prompt.description}
                  </p>

                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    {prompt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#0a0a0f] bg-[#00f5ff]/80 px-2 py-1 tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCopy(prompt.id)}
                    className={`w-full py-3 tracking-[0.2em] font-bold text-sm transition-all flex items-center justify-center gap-2 border-2 ${
                      copiedId === prompt.id
                        ? "bg-[#00f5ff] text-[#0a0a0f] border-[#00f5ff] shadow-[0_0_15px_rgba(0,245,255,0.6)]"
                        : "bg-transparent text-[#00f5ff] border-[#00f5ff] hover:bg-[#00f5ff]/10 hover:shadow-[inset_0_0_10px_rgba(0,245,255,0.3)]"
                    }`}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check size={18} /> COPIED_TO_CLIPBOARD
                      </>
                    ) : (
                      <>
                        <Copy size={18} /> EXTRACT_DATA
                      </>
                    )}
                  </button>
                  
                  {/* Glitch overlay on hover */}
                  {hoveredId === prompt.id && (
                    <div className="absolute inset-0 bg-[#ff00aa] mix-blend-overlay opacity-10 pointer-events-none animate-pulse"></div>
                  )}
                </div>
              ))}
              
              {filteredPrompts.length === 0 && (
                <div className="col-span-full py-20 flex flex-col items-center justify-center border border-[#ff00aa]/30 bg-[#ff00aa]/5">
                  <Target size={48} className="text-[#ff00aa] mb-4 opacity-50" />
                  <p className="text-[#ff00aa] tracking-widest">ERR: NO_RECORDS_FOUND</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
