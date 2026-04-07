import React from 'react';
import { Search, ShoppingBag, ArrowRight, Copy, Check, Sparkles, ChevronDown } from 'lucide-react';

const PROMPTS = [
  {
    id: 1,
    title: "Editorial Copy",
    brand: "BY STUDIO 01",
    desc: "Generate high-fashion editorial copy for new collection drops with minimalist tone.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Brand Strategy",
    brand: "BY STUDIO 02",
    desc: "Develop core brand pillars and archetype alignment for modern direct-to-consumer labels.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Visual Identity",
    brand: "BY STUDIO 03",
    desc: "Art direction prompts for generating moodboards and color palettes in midjourney.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200&auto=format&fit=crop"
  }
];

export function MoonishCosmic() {
  const [copied, setCopied] = React.useState<number | null>(null);

  const handleCopy = (id: number) => {
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen w-full font-sans text-[#1a1a1a] p-4 md:p-8 flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #C4B5A0 0%, #8B9AAB 100%)',
      }}
    >
      {/* Decorative cosmic elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B9AAB]/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Glass Container */}
      <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white/20 backdrop-blur-2xl rounded-[2rem] border border-white/30 shadow-2xl relative flex flex-col">
        
        {/* Navigation */}
        <nav className="flex items-center justify-between p-8 border-b border-white/20">
          <div className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <Sparkles size={20} />
            MØØNISH
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#" className="hover:text-black/60 transition-colors">COLLECTION</a>
            <a href="#" className="hover:text-black/60 transition-colors">ARCHIVE</a>
            <a href="#" className="hover:text-black/60 transition-colors">STUDIO</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20">
              <Search size={18} />
            </button>
            <button className="p-2 rounded-full bg-[#1a1a1a] text-white hover:bg-black transition-colors flex items-center justify-center gap-2 px-4">
              <ShoppingBag size={16} />
              <span className="text-xs font-semibold">CART (0)</span>
            </button>
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex-1 p-8 md:p-12 flex flex-col md:flex-row gap-12 relative">
          
          {/* Left Column: Typography & Info */}
          <div className="w-full md:w-1/3 flex flex-col justify-between z-10">
            <div>
              <div className="text-[120px] leading-none font-bold tracking-tighter text-[#1a1a1a]/90 mb-4 mix-blend-overlay">01</div>
              <h1 className="text-4xl font-extrabold tracking-tight uppercase mb-6 leading-none">
                Cosmic<br/>Prompts
              </h1>
              
              <div className="space-y-6 text-sm">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-[#1a1a1a]/60 mb-1">SPECIFICATION</div>
                  <p className="font-medium text-[#1a1a1a]/80">AI TOOLKIT / BY MØØNISH STUDIO</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-[#1a1a1a]/60 mb-1">DESCRIPTION</div>
                  <p className="font-medium text-[#1a1a1a]/80 leading-relaxed max-w-sm">
                    A curated collection of prompts designed for aesthetic precision. Calibrated for high-fidelity outputs in creative and strategic workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <button className="h-14 px-8 rounded-full bg-[#1a1a1a] text-white font-semibold tracking-wide text-sm flex items-center justify-between gap-4 hover:bg-black transition-colors min-w-[200px]">
                GET ACCESS
                <ArrowRight size={16} />
              </button>
              <button className="h-14 w-14 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                <ChevronDown size={20} />
              </button>
            </div>
          </div>

          {/* Right Column: Product Cards */}
          <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-6 items-center sm:items-stretch relative z-10">
            
            {/* Small Mobile-style Card */}
            <div className="w-full sm:w-1/3 bg-white/30 backdrop-blur-md rounded-3xl p-4 border border-white/40 shadow-xl flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 relative">
                <img src={PROMPTS[0].image} alt="Art" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-bold tracking-wider">NEW</div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-[10px] font-bold tracking-widest text-[#1a1a1a]/60 mb-1">{PROMPTS[0].brand}</div>
                <h3 className="font-bold text-lg mb-2 leading-tight">{PROMPTS[0].title}</h3>
                <p className="text-xs text-[#1a1a1a]/70 mb-4 line-clamp-3">{PROMPTS[0].desc}</p>
                <button 
                  onClick={() => handleCopy(PROMPTS[0].id)}
                  className="mt-auto w-full py-2.5 rounded-xl border border-[#1a1a1a]/20 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  {copied === PROMPTS[0].id ? <Check size={14} /> : <Copy size={14} />}
                  {copied === PROMPTS[0].id ? 'COPIED' : 'COPY PROMPT'}
                </button>
              </div>
            </div>

            {/* Large Card with Sphere Effect */}
            <div className="w-full sm:w-2/3 bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-lg relative overflow-hidden group">
              {/* Glass Sphere Bubble */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-white/10 backdrop-blur-[2px] rounded-full border border-white/20 group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-[#1a1a1a] text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest">FEATURED</div>
                  <div className="w-10 h-10 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center backdrop-blur-md">
                    <Sparkles size={16} className="text-[#1a1a1a]/60" />
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl relative">
                    <img src={PROMPTS[1].image} alt="Art" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                  </div>
                </div>

                <div className="mt-auto bg-white/40 backdrop-blur-md rounded-2xl p-5 border border-white/50 shadow-sm">
                  <div className="text-[10px] font-bold tracking-widest text-[#1a1a1a]/60 mb-1">{PROMPTS[1].brand}</div>
                  <h3 className="font-extrabold text-2xl mb-2 tracking-tight uppercase">{PROMPTS[1].title}</h3>
                  <p className="text-sm text-[#1a1a1a]/80 mb-4">{PROMPTS[1].desc}</p>
                  
                  <button 
                    onClick={() => handleCopy(PROMPTS[1].id)}
                    className="w-full py-3 rounded-xl bg-[#1a1a1a] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-black transition-colors"
                  >
                    {copied === PROMPTS[1].id ? <Check size={14} /> : <Copy size={14} />}
                    {copied === PROMPTS[1].id ? 'COPIED TO CLIPBOARD' : 'COPY STRATEGY PROMPT'}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Strip */}
        <div className="bg-[#1a1a1a] text-white p-4 overflow-hidden rounded-b-[2rem]">
          <div className="whitespace-nowrap animate-pulse flex gap-8 text-2xl font-bold tracking-tighter uppercase opacity-80 mix-blend-screen">
            <span>NEW COSMIC SET 23 ↗</span>
            <span className="text-white/30">•</span>
            <span>AVAILABLE NOW</span>
            <span className="text-white/30">•</span>
            <span>LIMITED ACCESS</span>
            <span className="text-white/30">•</span>
            <span>NEW COSMIC SET 23 ↗</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MoonishCosmic;
