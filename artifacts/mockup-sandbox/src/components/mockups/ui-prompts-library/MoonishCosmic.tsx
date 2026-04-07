import React, { useState } from 'react';
import { Search, Copy, Check, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const PROMPTS = [
  { id:1, title:"Component Audit", brand:"BY STUDIO 01", desc:"Audit this UI component for accessibility, responsiveness, and visual hierarchy. List issues by severity with a specific fix for each.", type:"Both", image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" },
  { id:2, title:"Color System from Brand", brand:"BY STUDIO 02", desc:"Generate a full UI color system from this hex: [HEX]. Include primary, secondary, neutrals, semantic states, and light/dark mode tokens with usage rules.", type:"Design", image:"https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop" },
  { id:3, title:"Responsive Layout Scaffold", brand:"BY STUDIO 03", desc:"Write a responsive CSS grid layout for a [dashboard / landing / settings] page. Modern CSS only, no frameworks, fully annotated.", type:"Dev", image:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200&auto=format&fit=crop" },
  { id:4, title:"Micro-interaction Spec", brand:"BY STUDIO 04", desc:"Write a micro-interaction spec for [button / modal / toast]. Include trigger, animation curve, duration in ms, and accessible fallback.", type:"Design", image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" },
  { id:5, title:"Figma to Tailwind", brand:"BY STUDIO 05", desc:"Convert Figma design tokens and spacing notes into Tailwind CSS config values. Include color, font, spacing, and shadow tokens.", type:"Dev", image:"https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop" },
  { id:6, title:"Design Critique", brand:"BY STUDIO 06", desc:"Critique this UI screenshot like a senior product designer. Focus on hierarchy, whitespace, and clarity. Flag the top 3 issues with specific fixes.", type:"Design", image:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200&auto=format&fit=crop" },
  { id:7, title:"Component Props API", brand:"BY STUDIO 07", desc:"Design the TypeScript props interface for a React component. Include variants, sizes, disabled state, and full accessibility props.", type:"Dev", image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" },
  { id:8, title:"Error State Copy", brand:"BY STUDIO 08", desc:"Write user-friendly error messages for: empty, failed to load, no results, permission denied, server error. Max 12 words each.", type:"Both", image:"https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop" },
  { id:9, title:"Dark Mode Token Map", brand:"BY STUDIO 09", desc:"Given this light mode color token set, generate dark mode equivalents. Maintain contrast ratios above 4.5:1. Use oklch() for perceptual uniformity.", type:"Dev", image:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200&auto=format&fit=crop" },
  { id:10, title:"Onboarding Flow Outline", brand:"BY STUDIO 10", desc:"Outline a 5-step onboarding flow for [product type]. For each: goal, user action, screen description, copy direction, and success state.", type:"Design", image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" },
  { id:11, title:"Icon Set Brief", brand:"BY STUDIO 11", desc:"Write a design brief for a custom icon set. Cover style, stroke weight, grid size, corner radius, and naming conventions for [product type].", type:"Design", image:"https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop" },
  { id:12, title:"Storybook Scaffold", brand:"BY STUDIO 12", desc:"Write Storybook stories for [component] with Default, Hover, Loading, Error, Empty, and Disabled states. Include ally addon config.", type:"Dev", image:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200&auto=format&fit=crop" },
  { id:13, title:"Animation Timing System", brand:"BY STUDIO 13", desc:"Create a motion timing system with 4 duration tokens and easing curves for appear, exit, transition, and feedback. Output as CSS custom properties.", type:"Both", image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" },
  { id:14, title:"Skeleton Loader Markup", brand:"BY STUDIO 14", desc:"Write HTML + CSS for a skeleton loader matching this layout: [describe or paste layout]. CSS animation keyframes only, no JavaScript.", type:"Dev", image:"https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop" },
  { id:15, title:"A/B Test Variant Ideas", brand:"BY STUDIO 15", desc:"Suggest 3 A/B test variants for this [CTA / hero / form]. For each: hypothesis, the exact change, and the primary metric to track.", type:"Both", image:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200&auto=format&fit=crop" },
  { id:16, title:"Spacing Scale", brand:"BY STUDIO 16", desc:"Generate a spacing scale with a 4px base unit. Name tokens semantically (xs→2xl) and explain the rationale for each step.", type:"Design", image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" },
  { id:17, title:"Typography Ramp", brand:"BY STUDIO 17", desc:"Create a 6-level type ramp: display, h1, h2, h3, body, caption. Specify size, weight, line-height as Tailwind classes and CSS custom properties.", type:"Design", image:"https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop" },
  { id:18, title:"Accessibility Audit", brand:"BY STUDIO 18", desc:"Audit this component for WCAG 2.1 AA compliance. Check color contrast, keyboard navigation, ARIA roles, focus management, and screen reader output.", type:"Both", image:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=200&auto=format&fit=crop" },
];

export function MoonishCosmic() {
  const [copied, setCopied] = React.useState<number | null>(null);
  const [activeType, setActiveType] = useState<"All"|"Design"|"Dev"|"Both">("All");
  const [page, setPage] = useState(0);

  const handleCopy = (id: number) => { setCopied(id); setTimeout(() => setCopied(null), 2000); };

  const filtered = PROMPTS.filter(p => activeType === "All" || p.type === activeType);
  const pageSize = 3;
  const totalPages = Math.ceil(filtered.length / pageSize);
  const visible = filtered.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className="min-h-screen w-full font-sans text-[#1a1a1a] p-4 flex items-center justify-center relative overflow-hidden"
      style={{ background:'linear-gradient(135deg,#C4B5A0 0%,#8B9AAB 100%)' }}>
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B9AAB]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl h-[92vh] bg-white/20 backdrop-blur-2xl rounded-[2rem] border border-white/30 shadow-2xl flex flex-col overflow-hidden">
        {/* Nav */}
        <nav className="flex items-center justify-between p-6 border-b border-white/20 shrink-0">
          <div className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <Sparkles size={18} /> MØØNISH
          </div>
          <div className="flex items-center gap-2">
            {["All","Design","Dev","Both"].map(t => (
              <button key={t} onClick={() => { setActiveType(t as "All"|"Design"|"Dev"|"Both"); setPage(0); }}
                className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full transition-all"
                style={{ background:activeType===t?"#1a1a1a":undefined,color:activeType===t?"white":"rgba(26,26,26,0.55)",border:"1px solid rgba(26,26,26,0.2)" }}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-white/10 border border-white/20"><Search size={16} /></button>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col md:flex-row gap-8 overflow-hidden min-h-0">
          {/* Left info */}
          <div className="w-full md:w-1/3 flex flex-col justify-between shrink-0">
            <div>
              <div className="text-[80px] leading-none font-bold tracking-tighter text-[#1a1a1a]/90 mb-2 mix-blend-overlay">
                {String(page * pageSize + 1).padStart(2, '0')}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight uppercase mb-4 leading-none">Cosmic<br/>Prompts</h1>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-[9px] font-bold tracking-widest text-[#1a1a1a]/60 mb-1">SPECIFICATION</div>
                  <p className="font-medium text-[#1a1a1a]/80 uppercase tracking-wider text-xs">AI Toolkit · Shiuli's Moon Era</p>
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-widest text-[#1a1a1a]/60 mb-1">CURRENT FILTER</div>
                  <p className="font-medium text-[#1a1a1a]/80">{activeType} · {filtered.length} prompts</p>
                </div>
                <div>
                  <div className="text-[9px] font-bold tracking-widest text-[#1a1a1a]/60 mb-1">DESCRIPTION</div>
                  <p className="font-medium text-[#1a1a1a]/80 leading-relaxed text-xs max-w-xs">A curated library of AI prompts designed for aesthetic precision. Calibrated for high-fidelity outputs in creative and strategic workflows.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button disabled={page===0} onClick={() => setPage(p=>p-1)} className="w-11 h-11 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30"><ChevronLeft size={18} /></button>
              <span className="text-sm font-bold">{page+1}/{totalPages}</span>
              <button disabled={page>=totalPages-1} onClick={() => setPage(p=>p+1)} className="w-11 h-11 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-black transition-colors disabled:opacity-30"><ChevronRight size={18} /></button>
            </div>
          </div>

          {/* Right cards */}
          <div className="flex-1 flex gap-4 items-stretch overflow-hidden min-w-0">
            {visible.map((prompt, i) => (
              <div key={prompt.id} className="flex-1 bg-white/30 backdrop-blur-md rounded-3xl p-4 border border-white/40 shadow-xl flex flex-col hover:-translate-y-2 transition-transform duration-500 min-w-0">
                <div className="w-full h-32 rounded-2xl overflow-hidden mb-4 relative shrink-0">
                  <img src={prompt.image} alt={prompt.title} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                  <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-bold tracking-wider">{prompt.type}</div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-[9px] font-bold tracking-widest text-[#1a1a1a]/60 mb-1">{prompt.brand}</div>
                  <h3 className="font-bold text-sm mb-2 leading-tight">{prompt.title}</h3>
                  <p className="text-xs text-[#1a1a1a]/70 mb-4 line-clamp-4 leading-relaxed flex-1">{prompt.desc}</p>
                  <button onClick={() => handleCopy(prompt.id)} className="mt-auto w-full py-2 rounded-xl border border-[#1a1a1a]/20 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#1a1a1a] hover:text-white transition-colors">
                    {copied===prompt.id?<><Check size={12}/>COPIED</>:<><Copy size={12}/>COPY PROMPT</>}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1a1a1a] text-white p-3 rounded-b-[2rem] shrink-0">
          <div className="text-2xl font-bold tracking-tighter uppercase opacity-80 flex gap-6 items-center overflow-hidden">
            <span>SHIULI'S MOON ERA ↗</span>
            <span className="text-white/20">•</span>
            <span>18 PROMPTS LOADED</span>
            <span className="text-white/20">•</span>
            <span>{filtered.length} IN VIEW</span>
            <span className="text-white/20">•</span>
            <span>AI TOOLKIT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoonishCosmic;
