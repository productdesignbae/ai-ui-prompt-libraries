import React, { useState } from 'react';
import { Search, Copy, CheckCircle2 } from 'lucide-react';

const PROMPTS_DATA = [
  { id:1, title:"Component Audit", type:"Both", tags:["a11y","review"], desc:"Audit this UI component for accessibility, responsiveness, and visual hierarchy. List issues by severity with a specific fix for each." },
  { id:2, title:"Color System from Brand", type:"Design", tags:["tokens","color"], desc:"Generate a full UI color system from this hex: [HEX]. Include primary, secondary, neutrals, semantic states, and light/dark mode tokens." },
  { id:3, title:"Responsive Layout Scaffold", type:"Dev", tags:["css","grid"], desc:"Write a responsive CSS grid layout for a [dashboard / landing / settings] page. Modern CSS only, no frameworks, fully annotated." },
  { id:4, title:"Micro-interaction Spec", type:"Design", tags:["motion","ux"], desc:"Write a micro-interaction spec for [button / modal / toast]. Include trigger, animation curve, duration in ms, and accessible fallback." },
  { id:5, title:"Figma to Tailwind", type:"Dev", tags:["figma","tailwind"], desc:"Convert Figma design tokens and spacing notes into Tailwind CSS config values. Include color, font, spacing, and shadow tokens." },
  { id:6, title:"Design Critique", type:"Design", tags:["critique","ux"], desc:"Critique this UI screenshot like a senior product designer. Focus on hierarchy, whitespace, and clarity. Flag the top 3 issues with specific fixes." },
  { id:7, title:"Component Props API", type:"Dev", tags:["typescript","api"], desc:"Design the TypeScript props interface for a React component. Include variants, sizes, disabled state, and full accessibility props." },
  { id:8, title:"Error State Copy", type:"Both", tags:["copy","ux"], desc:"Write user-friendly error messages for: empty, failed to load, no results, permission denied, server error. Max 12 words each." },
  { id:9, title:"Dark Mode Token Map", type:"Dev", tags:["tokens","dark"], desc:"Given this light mode color token set, generate dark mode equivalents. Maintain contrast ratios above 4.5:1. Use oklch()." },
  { id:10, title:"Onboarding Flow Outline", type:"Design", tags:["ux","flow"], desc:"Outline a 5-step onboarding flow for [product type]. For each: goal, user action, screen description, copy direction, success state." },
  { id:11, title:"Icon Set Brief", type:"Design", tags:["icons","brand"], desc:"Write a design brief for a custom icon set. Cover style, stroke weight, grid size, corner radius, and naming conventions." },
  { id:12, title:"Storybook Scaffold", type:"Dev", tags:["storybook","docs"], desc:"Write Storybook stories for [component] with Default, Hover, Loading, Error, Empty, and Disabled states. Include ally addon config." },
  { id:13, title:"Animation Timing System", type:"Both", tags:["motion","tokens"], desc:"Create a motion timing system with 4 duration tokens and easing curves for appear, exit, transition, and feedback. Output as CSS vars." },
  { id:14, title:"Skeleton Loader Markup", type:"Dev", tags:["css","loading"], desc:"Write HTML + CSS for a skeleton loader matching this layout. CSS animation keyframes only, no JavaScript required." },
  { id:15, title:"A/B Test Variant Ideas", type:"Both", tags:["growth","testing"], desc:"Suggest 3 A/B test variants for this [CTA / hero / form]. For each: hypothesis, the exact change, and the primary metric to track." },
  { id:16, title:"Spacing Scale", type:"Design", tags:["tokens","spacing"], desc:"Generate a spacing scale with a 4px base unit. Name tokens semantically (xs → 2xl) and explain the rationale for each step." },
  { id:17, title:"Typography Ramp", type:"Design", tags:["type","tokens"], desc:"Create a 6-level type ramp: display, h1, h2, h3, body, caption. Specify size, weight, line-height as Tailwind classes and CSS vars." },
  { id:18, title:"Accessibility Audit", type:"Both", tags:["a11y","wcag"], desc:"Audit this component for WCAG 2.1 AA compliance. Check color contrast, keyboard navigation, ARIA roles, focus management, screen reader." },
];

const ORBIT_CATEGORIES = [
  { id:"all", label:"All", angle:0, r:155, color:"#a78bfa" },
  { id:"Design", label:"Design", angle:65, r:175, color:"#60a5fa" },
  { id:"Dev", label:"Dev", angle:115, r:160, color:"#34d399" },
  { id:"Both", label:"Both", angle:180, r:168, color:"#f472b6" },
];

const TYPE_COLORS: Record<string, string> = { Design:"#60a5fa", Dev:"#34d399", Both:"#f472b6" };

export function LinearStyle() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCopy = (id: number) => { setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };

  const filtered = PROMPTS_DATA.filter(p => {
    const catMatch = activeCategory === "all" || p.type === activeCategory;
    const searchMatch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div className="w-full h-screen overflow-hidden flex font-sans relative"
      style={{ background:"linear-gradient(135deg,#0a0014 0%,#03001a 50%,#00070d 100%)" }}>
      <style>{`
        @keyframes starField { 0%,100%{opacity:0.35} 50%{opacity:0.65} }
        .orbit-pill:hover { transform:translate(-50%,-50%) scale(1.12)!important; filter:brightness(1.3); }
        .prompt-row { transition:background 0.15s; border-bottom:1px solid rgba(255,255,255,0.04); }
        .prompt-row:hover { background:rgba(255,255,255,0.05)!important; }
        .glass-input { background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);outline:none;color:rgba(255,255,255,0.85); }
        .glass-input:focus { border-color:rgba(139,92,246,0.4);box-shadow:0 0 0 3px rgba(139,92,246,0.1); }
      `}</style>

      {/* Orb panel */}
      <div className="w-72 h-full shrink-0 flex items-center justify-center relative overflow-hidden border-r border-white/5">
        <svg width="280" height="400" viewBox="0 0 280 400" style={{ position:"absolute",inset:0,width:"100%",height:"100%" }}>
          <defs>
            <radialGradient id="nebulaG" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="55%" stopColor="#6366f1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0a0014" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="orbG" cx="38%" cy="32%">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.85" />
            </radialGradient>
          </defs>
          {[200,175,150,125,100,75,50].map((r,i) => (
            <ellipse key={r} cx="140" cy="200" rx={r} ry={r*0.55} fill="none" stroke={`rgba(124,92,255,${0.03+i*0.012})`} strokeWidth="1" />
          ))}
          <ellipse cx="140" cy="200" rx="200" ry="170" fill="url(#nebulaG)" />
          {[[35,55],[215,85],[65,135],[195,155],[45,255],[225,295],[105,45],[165,335],[255,195],[18,205]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={i%3===0?1.5:1} fill="white" opacity={0.3+i*0.04} style={{ animation:`starField ${2+i*0.4}s ease-in-out infinite`,animationDelay:`${i*0.25}s` }} />
          ))}
          <circle cx="140" cy="200" r="108" fill="url(#orbG)" opacity="0.82" />
          <circle cx="140" cy="200" r="108" fill="none" stroke="rgba(196,181,253,0.2)" strokeWidth="1.5" />
          <ellipse cx="140" cy="200" rx="128" ry="20" fill="none" stroke="rgba(167,139,250,0.18)" strokeWidth="1" />
        </svg>
        <div className="relative z-10 text-center" style={{ transform:"translate(0,10px)" }}>
          <div className="text-3xl font-black tracking-tighter" style={{ color:"#f5f3ff",textShadow:"0 0 28px rgba(167,139,250,0.8)" }}>BRAIN</div>
          <div className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color:"rgba(196,181,253,0.65)",marginTop:"2px" }}>ORBIT</div>
          <div className="text-[10px] mt-2" style={{ color:"rgba(196,181,253,0.38)" }}>{filtered.length} / {PROMPTS_DATA.length}</div>
        </div>
        {ORBIT_CATEGORIES.map(cat => {
          const rad = (cat.angle * Math.PI) / 180;
          const cx = 140 + cat.r * Math.cos(rad);
          const cy = 200 + cat.r * 0.55 * Math.sin(rad);
          return (
            <button key={cat.id} className="orbit-pill" onClick={() => setActiveCategory(cat.id)}
              style={{ position:"absolute",left:`${(cx/280)*100}%`,top:`${(cy/400)*100}%`,transform:"translate(-50%,-50%)",background:activeCategory===cat.id?cat.color:"rgba(255,255,255,0.06)",border:`1px solid ${activeCategory===cat.id?cat.color:"rgba(255,255,255,0.12)"}`,color:activeCategory===cat.id?"#06060a":"rgba(255,255,255,0.7)",fontSize:"10px",fontWeight:700,padding:"4px 10px",borderRadius:"100px",cursor:"pointer",letterSpacing:"0.04em",whiteSpace:"nowrap",transition:"all 0.2s",zIndex:20 }}>
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-6 pt-5 pb-4 shrink-0" style={{ borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">Shiuli's Brain Orbit</h1>
              <p className="text-xs" style={{ color:"rgba(255,255,255,0.35)" }}>NeuroAstro · {PROMPTS_DATA.length} prompts</p>
            </div>
          </div>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color:"rgba(255,255,255,0.3)" }} />
            <input type="text" placeholder="Search prompts..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="glass-input w-full pl-9 pr-3 py-2 text-xs rounded-lg" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-2">
          {filtered.map(p => (
            <div key={p.id} className="prompt-row group flex items-start gap-3 px-3 py-3 rounded-xl cursor-default">
              <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold" style={{ background:`${TYPE_COLORS[p.type]}18`,border:`1px solid ${TYPE_COLORS[p.type]}35`,color:TYPE_COLORS[p.type] }}>{p.type[0]}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-sm font-semibold text-white">{p.title}</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background:`${TYPE_COLORS[p.type]}18`,color:TYPE_COLORS[p.type] }}>{p.type}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color:"rgba(255,255,255,0.4)" }}>{p.desc}</p>
                <div className="flex gap-1.5 mt-1.5 flex-wrap">
                  {p.tags.map(t => <span key={t} className="text-[9px] px-1.5 py-0.5 rounded" style={{ background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.32)" }}>{t}</span>)}
                </div>
              </div>
              <button onClick={() => handleCopy(p.id)} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg" style={{ background:"rgba(255,255,255,0.06)" }}>
                {copiedId===p.id?<CheckCircle2 size={13} style={{ color:"#34d399" }} />:<Copy size={13} style={{ color:"rgba(255,255,255,0.4)" }} />}
              </button>
            </div>
          ))}
          {filtered.length===0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Search size={24} style={{ color:"rgba(255,255,255,0.15)",marginBottom:"10px" }} />
              <p className="text-sm" style={{ color:"rgba(255,255,255,0.3)" }}>No prompts match your search</p>
            </div>
          )}
        </div>

        <div className="px-4 py-3 shrink-0" style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)" }}>
            <input placeholder="Search or ask about prompts..." className="flex-1 bg-transparent border-none outline-none text-xs" style={{ color:"rgba(255,255,255,0.55)" }} readOnly />
            <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background:"rgba(139,92,246,0.6)" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H4M9 1V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
