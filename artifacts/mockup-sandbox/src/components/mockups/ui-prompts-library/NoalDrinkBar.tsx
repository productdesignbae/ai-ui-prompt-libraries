import React, { useState } from "react";
import { ArrowRight, Search, Zap, CheckCircle2, Copy, Check } from "lucide-react";

const PROMPTS = [
  { id:"n1", title:"Component Audit", tags:["Featured","Both"], desc:"Audit this UI component for accessibility, responsiveness, and visual hierarchy. List issues by severity with a specific fix for each.", color:"#B84C3A" },
  { id:"n2", title:"Color System from Brand", tags:["Design"], desc:"Generate a full UI color system from this hex: [HEX]. Include primary, secondary, neutrals, semantic states, and light/dark mode tokens with usage rules.", color:"#5A6B4C" },
  { id:"n3", title:"Responsive Layout Scaffold", tags:["Dev"], desc:"Write a responsive CSS grid layout for a [dashboard / landing / settings] page. Modern CSS only, no frameworks, fully annotated.", color:"#9C8F7F" },
  { id:"n4", title:"Micro-interaction Spec", tags:["Design"], desc:"Write a micro-interaction spec for [button / modal / toast]. Include trigger, animation curve, duration in ms, and accessible fallback.", color:"#B84C3A" },
  { id:"n5", title:"Figma to Tailwind", tags:["Dev"], desc:"Convert Figma design tokens and spacing notes into Tailwind CSS config values. Include color, font, spacing, and shadow tokens.", color:"#5A6B4C" },
  { id:"n6", title:"Design Critique", tags:["Design"], desc:"Critique this UI screenshot like a senior product designer. Focus on hierarchy, whitespace, and clarity. Flag the top 3 issues with fixes.", color:"#9C8F7F" },
  { id:"n7", title:"Component Props API", tags:["Dev"], desc:"Design the TypeScript props interface for a React component. Include variants, sizes, disabled state, and full accessibility props.", color:"#B84C3A" },
  { id:"n8", title:"Error State Copy", tags:["Both"], desc:"Write user-friendly error messages for: empty, failed to load, no results, permission denied, server error. Max 12 words each.", color:"#5A6B4C" },
  { id:"n9", title:"Dark Mode Token Map", tags:["Dev"], desc:"Given this light mode color token set, generate dark mode equivalents. Maintain contrast ratios above 4.5:1. Use oklch().", color:"#9C8F7F" },
  { id:"n10", title:"Onboarding Flow Outline", tags:["Design"], desc:"Outline a 5-step onboarding flow for [product type]. For each: goal, user action, screen description, copy direction, success state.", color:"#B84C3A" },
  { id:"n11", title:"Icon Set Brief", tags:["Design"], desc:"Write a design brief for a custom icon set. Cover style, stroke weight, grid size, corner radius, and naming conventions.", color:"#5A6B4C" },
  { id:"n12", title:"Storybook Scaffold", tags:["Dev"], desc:"Write Storybook stories for [component] with Default, Hover, Loading, Error, Empty, and Disabled states. Include ally addon config.", color:"#9C8F7F" },
  { id:"n13", title:"Animation Timing System", tags:["Both"], desc:"Create a motion timing system with 4 duration tokens and easing curves for appear, exit, transition, and feedback. Output as CSS vars.", color:"#B84C3A" },
  { id:"n14", title:"Skeleton Loader Markup", tags:["Dev"], desc:"Write HTML + CSS for a skeleton loader matching this layout. CSS animation keyframes only, no JavaScript.", color:"#5A6B4C" },
  { id:"n15", title:"A/B Test Variant Ideas", tags:["Both"], desc:"Suggest 3 A/B test variants for this [CTA / hero / form]. For each: hypothesis, the exact change, and the primary metric to track.", color:"#9C8F7F" },
  { id:"n16", title:"Spacing Scale", tags:["Design"], desc:"Generate a spacing scale with a 4px base unit. Name tokens semantically (xs → 2xl) and explain the rationale for each step.", color:"#B84C3A" },
  { id:"n17", title:"Typography Ramp", tags:["Design"], desc:"Create a 6-level type ramp: display, h1, h2, h3, body, caption. Specify size, weight, line-height as Tailwind classes.", color:"#5A6B4C" },
  { id:"n18", title:"Accessibility Audit", tags:["Both"], desc:"Audit this component for WCAG 2.1 AA compliance. Check color contrast, keyboard navigation, ARIA roles, focus management.", color:"#9C8F7F" },
];

export function NoalDrinkBar() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [copied, setCopied] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const handleCopy = (id: string) => { setCopied(id); setTimeout(() => setCopied(null), 2000); };

  const filtered = PROMPTS.filter(p =>
    (activeFilter === "All" || p.tags.includes(activeFilter)) &&
    (!search || p.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col h-[100dvh] w-full font-sans text-[#F4F1E9] overflow-hidden selection:bg-[#B84C3A] selection:text-white"
      style={{ background:"linear-gradient(145deg,#9C8F7F 0%,#5A6B4C 100%)" }}>

      {/* Header */}
      <header className="flex justify-between items-center px-5 py-3 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-sm bg-[#1B3A2D] flex items-center justify-center font-black text-lg leading-none">P</div>
          <span className="font-bold tracking-widest text-xs uppercase">Shiuli's Last Call</span>
        </div>
        <div className="flex items-center bg-[#1B3A2D]/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10 w-1/3 min-w-[200px]">
          <Search size={13} className="text-white/60 mr-2" />
          <input type="text" placeholder="Search library..." value={search} onChange={e => setSearch(e.target.value)} className="bg-transparent border-none outline-none text-xs w-full placeholder:text-white/40 text-[#F4F1E9]" />
        </div>
        <div className="flex items-center gap-1.5">
          {["All","Design","Dev","Both"].map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              style={{ background:activeFilter===f?"#B84C3A":undefined,color:activeFilter===f?"white":"rgba(244,241,233,0.6)",border:"1px solid rgba(255,255,255,0.15)" }}>
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* Main bento grid */}
      <main className="flex-1 flex gap-3 p-3 min-h-0">
        {/* Left sidebar — featured */}
        <div className="w-[26%] min-w-[200px] flex flex-col gap-3">
          <div className="bg-[#1B3A2D] rounded-[24px] p-4 flex flex-col relative overflow-hidden shrink-0 border border-white/5">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[#A4B3A8] text-[9px] font-bold tracking-widest uppercase">Today's Pick</span>
              <span className="text-[#A4B3A8] text-[9px] font-mono border border-white/20 px-2 py-0.5 rounded">{filtered.length}</span>
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#B84C3A] shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-[#B84C3A] to-[#D97D6B]" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight">System Prompt<br/>Architecture</h3>
                <p className="text-[#A4B3A8] text-[10px] mt-0.5">By @shiuli</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#2C5242] rounded-full blur-2xl opacity-50 pointer-events-none" />
          </div>

          <div className="flex-1 bg-[#8B7C6E] rounded-[24px] relative overflow-hidden group border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2D] via-[#1B3A2D]/80 to-transparent z-0" />
            <div className="absolute inset-0 p-4 flex flex-col justify-end z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#B84C3A] text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full uppercase">Featured</span>
                <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full uppercase">Dev</span>
              </div>
              <h2 className="text-xl font-black leading-[1.1] mb-1.5 tracking-tight">Full-Stack React<br/>Component Gen</h2>
              <p className="text-white/70 text-[11px] mb-4 line-clamp-2">Production-ready React components with Tailwind and Shadcn in one prompt.</p>
              <button className="flex items-center justify-between bg-white text-[#1B3A2D] px-4 py-2 rounded-full font-bold text-xs group-hover:bg-[#F4F1E9] transition-colors">
                <span>View Prompt</span><ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Main scrollable cards */}
        <div className="flex-1 rounded-[24px] border border-white/10 overflow-hidden" style={{ background:"rgba(27,58,45,0.4)",backdropFilter:"blur(10px)" }}>
          <div className="h-full overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-3">
              {filtered.map(p => (
                <div key={p.id} className="group rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all" style={{ background:"rgba(255,255,255,0.06)",backdropFilter:"blur(8px)" }}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex gap-1.5 flex-wrap">
                      {p.tags.map(t => (
                        <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                          style={{ background:t==="Featured"?"#B84C3A":t==="Design"?"rgba(255,255,255,0.12)":"rgba(255,255,255,0.08)",color:t==="Featured"?"white":"rgba(244,241,233,0.7)",border:"1px solid rgba(255,255,255,0.1)" }}>{t}</span>
                      ))}
                    </div>
                    <button onClick={() => handleCopy(p.id)} className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg" style={{ background:"rgba(255,255,255,0.1)" }}>
                      {copied===p.id?<Check size={11} style={{ color:"#52b788" }} />:<Copy size={11} style={{ color:"rgba(244,241,233,0.6)" }} />}
                    </button>
                  </div>
                  <h3 className="font-bold text-sm mb-1.5 text-[#F4F1E9] leading-tight">{p.title}</h3>
                  <p className="text-[10px] text-white/55 leading-relaxed line-clamp-3">{p.desc}</p>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Search size={22} className="text-white/20 mb-2" />
                <p className="text-sm text-white/40">No prompts found</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B3A2D] text-[#F4F1E9] px-4 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#B84C3A] rounded-[8px] flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-bold text-sm tracking-tight">{PROMPTS.length} Prompts Indexed</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-[#A4B3A8]">
            <CheckCircle2 size={13} className="text-[#B84C3A]" /><span>Updated Today</span>
          </div>
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1B3A2D] bg-[#8B7C6E] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
