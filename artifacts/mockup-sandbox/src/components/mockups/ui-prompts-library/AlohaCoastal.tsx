import React from "react";
import { Search, Plus, Info, Star } from "lucide-react";

export function AlohaCoastal() {
  const prompts = [
    { id: 1, title: "Narrative Voice Editor", tags: ["WRITING", "CREATIVE"], level: "ADVANCED" },
    { id: 2, title: "Code Refactor Expert", tags: ["CODING", "ANALYSIS"], level: "INTERMEDIATE" },
    { id: 3, title: "Market Insight Generator", tags: ["RESEARCH", "ANALYSIS"], level: "ADVANCED" },
    { id: 4, title: "Character Backstory Pro", tags: ["WRITING", "CREATIVE"], level: "BEGINNER" },
    { id: 5, title: "API Doc Builder", tags: ["CODING", "WRITING"], level: "ADVANCED" },
    { id: 6, title: "Data Trend Analyzer", tags: ["RESEARCH", "ANALYSIS"], level: "INTERMEDIATE" },
  ];

  return (
    <div className="flex h-[100dvh] w-full font-sans" style={{ backgroundColor: "#F2EDE6", color: "#333" }}>
      {/* LEFT COLUMN - Scrollable Cards */}
      <div className="w-[30%] min-w-[300px] h-full overflow-y-auto p-4 flex flex-col gap-4 no-scrollbar border-r border-[#E0D8CC]">
        {prompts.map((prompt) => (
          <div
            key={prompt.id}
            className="relative h-[240px] w-full rounded-2xl overflow-hidden flex flex-col justify-between p-4 group"
            style={{
              background: "linear-gradient(135deg, #C8965A 0%, #8A6033 100%)",
            }}
          >
            {/* Top Bar: Badge and + button */}
            <div className="flex justify-between items-start z-10">
              <span className="bg-white/90 text-[#8A6033] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase shadow-sm">
                {prompt.level}
              </span>
              <button className="w-8 h-8 rounded-full bg-[#333]/80 text-white flex items-center justify-center hover:bg-[#111] transition-colors">
                <Plus size={16} />
              </button>
            </div>

            {/* Bottom Bar: Title and More Info */}
            <div className="flex justify-between items-end z-10">
              <h3 className="text-white font-medium text-lg leading-tight w-2/3">
                {prompt.title}
              </h3>
              <button className="bg-[#333]/80 hover:bg-[#111] text-white text-xs px-3 py-1.5 rounded-full transition-colors flex items-center gap-1">
                <Info size={12} /> Info
              </button>
            </div>
            
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN - Editorial Page */}
      <div className="flex-1 h-full flex flex-col relative overflow-hidden">
        {/* Top Nav */}
        <header className="w-full p-8 flex justify-between items-center text-[11px] font-semibold tracking-[0.2em] text-[#666] uppercase">
          {["Spots", "Rooms", "Events", "Rentals", "Locally", "Spa"].map((item) => (
            <button key={item} className="hover:text-[#C8965A] transition-colors">
              {item}
            </button>
          ))}
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-12 text-center pb-20">
          <h1 
            className="text-[120px] leading-[0.9] tracking-tight mb-6 text-[#222]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Aloha
          </h1>
          <p className="text-xl text-[#555] font-light tracking-wide mb-12">
            Search for your Prompt
          </p>

          <div className="w-full max-w-2xl">
            {/* Divider and Tags */}
            <div className="w-full h-px bg-[#DCD4C8] mb-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-3 bg-[#F2EDE6] px-4">
                {["WRITING", "CODING", "RESEARCH"].map((tag) => (
                  <button key={tag} className="text-[10px] font-bold tracking-widest text-[#888] border border-[#DCD4C8] px-4 py-1.5 rounded-full hover:bg-[#C8965A] hover:text-white hover:border-[#C8965A] transition-colors bg-white">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="mt-12 flex items-center border-b-2 border-[#333] pb-3">
              <input 
                type="text" 
                placeholder="Find the perfect starting point..." 
                className="w-full bg-transparent border-none outline-none text-2xl font-light placeholder:text-[#999] text-[#222]"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              />
              <button className="text-[#333] hover:text-[#C8965A] transition-colors">
                <Search size={28} />
              </button>
            </div>
          </div>
        </main>

        {/* Bottom Left Element */}
        <div className="absolute bottom-8 right-8 flex items-center gap-3 text-[#777]">
          <Star size={16} fill="currentColor" className="text-[#C8965A]" />
          <span className="text-sm italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Curated daily for optimal creativity.
          </span>
        </div>
      </div>
    </div>
  );
}
