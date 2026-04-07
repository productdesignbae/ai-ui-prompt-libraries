import React from "react";
import { ArrowRight, Search, Zap, CheckCircle2 } from "lucide-react";

export function NoalDrinkBar() {
  return (
    <div 
      className="flex flex-col h-[100dvh] w-full font-sans text-[#F4F1E9] overflow-hidden selection:bg-[#B84C3A] selection:text-white"
      style={{
        background: "linear-gradient(145deg, #9C8F7F 0%, #5A6B4C 100%)",
      }}
    >
      {/* Top Header/Nav */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#1B3A2D] flex items-center justify-center font-black text-xl leading-none pt-1">
            P
          </div>
          <span className="font-bold tracking-widest text-sm uppercase">Prmt.</span>
        </div>
        <div className="flex items-center bg-[#1B3A2D]/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 w-1/3 min-w-[250px]">
          <Search size={16} className="text-white/60 mr-2" />
          <input 
            type="text" 
            placeholder="Search library..." 
            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/40"
          />
        </div>
        <button className="bg-[#B84C3A] hover:bg-[#A33B2B] text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors">
          Suggest
        </button>
      </header>

      {/* Main Bento Grid */}
      <main className="flex-1 flex gap-4 p-4 min-h-0">
        {/* Left Column */}
        <div className="w-[30%] min-w-[320px] flex flex-col gap-4">
          
          {/* Top-Left: Date/Category */}
          <div className="bg-[#1B3A2D] rounded-[32px] p-6 flex flex-col relative overflow-hidden shrink-0 border border-white/5">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[#A4B3A8] text-xs font-bold tracking-widest uppercase">Picks of the Day</span>
              <span className="text-[#A4B3A8] text-xs font-mono border border-white/20 px-2 py-1 rounded">24.10</span>
            </div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#B84C3A]">
                <div className="w-full h-full bg-gradient-to-br from-[#B84C3A] to-[#D97D6B]" />
              </div>
              <div>
                <h3 className="font-bold text-xl leading-tight">System Prompt<br/>Architecture</h3>
                <p className="text-[#A4B3A8] text-sm mt-1">By @ai_wizard</p>
              </div>
            </div>
            
            {/* Decorative blob */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2C5242] rounded-full blur-2xl opacity-50 pointer-events-none" />
          </div>

          {/* Bottom-Left: Featured Product Card */}
          <div className="flex-1 bg-[#8B7C6E] rounded-[32px] relative overflow-hidden group border border-white/10">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2D] via-[#1B3A2D]/80 to-transparent z-0" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#B84C3A] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                  Featured
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                  Coding
                </span>
              </div>
              <h2 className="text-3xl font-black leading-[1.1] mb-2 tracking-tight">
                Full-Stack React<br/>Component Gen
              </h2>
              <p className="text-white/70 text-sm mb-6 line-clamp-2">
                A highly optimized prompt for generating production-ready React components with Tailwind and Shadcn.
              </p>
              
              <button className="flex items-center justify-between bg-white text-[#1B3A2D] px-5 py-3 rounded-full font-bold group-hover:bg-[#F4F1E9] transition-colors">
                <span>View Prompt</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
        </div>

        {/* Right Large: Hero Panel */}
        <div className="flex-1 rounded-[32px] p-10 flex flex-col justify-between relative overflow-hidden border border-white/10 shadow-2xl"
             style={{ background: "linear-gradient(135deg, #B84C3A 0%, #5A6B4C 100%)" }}>
          
          <div className="flex justify-between items-start z-10">
            <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-sm border border-white/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
              AI Prompt Library / Curated
            </span>
            <div className="flex gap-2">
              {['Creative', 'Analysis', 'Writing'].map(tag => (
                <span key={tag} className="text-white/90 bg-white/10 hover:bg-white/20 cursor-pointer backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="z-10 flex flex-col items-center justify-center flex-1 w-full text-center">
            {/* Giant Bubble Text */}
            <h1 
              className="text-[14vw] leading-[0.8] tracking-tighter"
              style={{ fontWeight: 900, textShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            >
              PRMT
            </h1>
            <p className="text-xl md:text-2xl mt-6 font-medium text-white/90 max-w-lg">
              The internet's boldest collection of high-impact AI instructions.
            </p>
          </div>
          
          {/* Decorative grain/noise overlay would go here in CSS */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
               style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}>
          </div>
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="bg-[#1B3A2D] text-[#F4F1E9] p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#B84C3A] rounded-[10px] flex items-center justify-center rotate-3">
            <Zap size={20} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">1,402 Prompts Indexed</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-[#A4B3A8]">
            <CheckCircle2 size={16} className="text-[#B84C3A]" />
            <span>Updated Today</span>
          </div>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1B3A2D] bg-[#8B7C6E] relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
