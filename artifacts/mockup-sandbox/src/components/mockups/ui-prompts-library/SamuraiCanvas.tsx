import React, { useState } from 'react';
import { Search, Home, Layout, Zap, Settings, Command, ChevronRight, Copy, CheckCircle2, User, FileText, CheckSquare, MessageSquare, Plus, ArrowUpRight } from 'lucide-react';

const PROMPTS = [
  { id:1, title:"Component Audit", category:"Both", desc:"Audit this UI component for accessibility, responsiveness, and visual hierarchy. List issues by severity with a specific fix for each.", tags:["a11y","review"], style:{ top:'110px',left:'200px',width:'300px' } },
  { id:2, title:"Color System from Brand", category:"Design", desc:"Generate a full UI color system from this hex: [HEX]. Include primary, secondary, neutrals, semantic states, and light/dark mode tokens.", tags:["tokens","color"], style:{ top:'290px',left:'360px',width:'290px' } },
  { id:3, title:"Responsive Layout Scaffold", category:"Dev", desc:"Write a responsive CSS grid layout for a [dashboard / landing / settings] page. Modern CSS only, no frameworks. Fully annotated.", tags:["css","grid"], style:{ top:'150px',left:'570px',width:'270px' } },
  { id:4, title:"Micro-interaction Spec", category:"Design", desc:"Write a micro-interaction spec for [button / modal / toast]. Include trigger, animation curve, duration in ms, and accessible fallback.", tags:["motion","ux"], style:{ top:'470px',left:'230px',width:'310px' } },
  { id:5, title:"Figma to Tailwind", category:"Dev", desc:"Convert Figma design tokens and spacing notes into Tailwind CSS config values. Include color, font, spacing, and shadow tokens.", tags:["figma","tailwind"], style:{ top:'370px',left:'680px',width:'290px' } },
];

const ALL_PROMPTS = [
  ...PROMPTS,
  { id:6, title:"Design Critique", category:"Design", desc:"Critique this UI screenshot like a senior product designer. Focus on hierarchy, whitespace, and clarity. Flag the top 3 issues with fixes.", tags:["critique","ux"] },
  { id:7, title:"Component Props API", category:"Dev", desc:"Design the TypeScript props interface for a React component. Include variants, sizes, disabled state, and full accessibility props.", tags:["typescript","api"] },
  { id:8, title:"Error State Copy", category:"Both", desc:"Write user-friendly error messages for: empty, failed to load, no results, permission denied, server error. Max 12 words each.", tags:["copy","ux"] },
  { id:9, title:"Dark Mode Token Map", category:"Dev", desc:"Given this light mode color token set, generate dark mode equivalents. Maintain contrast ratios above 4.5:1. Use oklch().", tags:["tokens","dark"] },
  { id:10, title:"Onboarding Flow Outline", category:"Design", desc:"Outline a 5-step onboarding flow for [product type]. For each: goal, user action, screen description, copy direction, and success state.", tags:["ux","flow"] },
  { id:11, title:"Icon Set Brief", category:"Design", desc:"Write a design brief for a custom icon set. Cover: style, stroke weight, grid size, corner radius, and naming conventions.", tags:["icons","brand"] },
  { id:12, title:"Storybook Scaffold", category:"Dev", desc:"Write Storybook stories for [component] with Default, Hover, Loading, Error, Empty, and Disabled states. Include ally addon config.", tags:["storybook","docs"] },
  { id:13, title:"Animation Timing System", category:"Both", desc:"Create a motion timing system with 4 duration tokens and easing curves for appear, exit, transition, and feedback. Output as CSS vars.", tags:["motion","tokens"] },
  { id:14, title:"Skeleton Loader Markup", category:"Dev", desc:"Write HTML + CSS for a skeleton loader matching this layout. CSS animation keyframes only, no JavaScript.", tags:["css","loading"] },
  { id:15, title:"A/B Test Variant Ideas", category:"Both", desc:"Suggest 3 A/B test variants for this [CTA / hero / form]. For each: hypothesis, the exact change, and the primary metric to track.", tags:["growth","testing"] },
  { id:16, title:"Spacing Scale", category:"Design", desc:"Generate a spacing scale for [product type] with a 4px base unit. Name tokens semantically and explain the rationale for each step.", tags:["tokens","spacing"] },
  { id:17, title:"Typography Ramp", category:"Design", desc:"Create a 6-level type ramp: display, h1, h2, h3, body, caption. Specify size, weight, line-height as Tailwind classes and CSS vars.", tags:["type","tokens"] },
  { id:18, title:"Accessibility Audit", category:"Both", desc:"Audit this component for WCAG 2.1 AA compliance. Check color contrast, keyboard navigation, ARIA roles, and focus management.", tags:["a11y","wcag"] },
];

export function SamuraiCanvas() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCopy = (id: number) => { setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const filteredSidebar = ALL_PROMPTS.filter(p => !p.style && (activeCategory === "All" || p.category === activeCategory));

  return (
    <div className="w-full h-full min-h-screen relative overflow-hidden text-neutral-800 font-sans flex" style={{ backgroundColor:'#e8e8e8',backgroundImage:'radial-gradient(#d4d4d4 2px,transparent 2px)',backgroundSize:'24px 24px' }}>
      {/* Left sidebar */}
      <div className="w-14 h-full bg-[#dfdfdf] border-r border-[#d4d4d4] flex flex-col items-center py-5 gap-7 z-20 shrink-0">
        <div className="w-9 h-9 bg-neutral-800 text-white rounded-xl flex items-center justify-center shadow-md">
          <Zap size={18} className="text-[#C4522A]" />
        </div>
        <nav className="flex flex-col gap-5 text-neutral-500">
          <button className="p-2 rounded-lg hover:bg-[#d4d4d4] transition-colors"><Home size={18} /></button>
          <button className="p-2 rounded-lg bg-white shadow-sm text-[#C4522A]"><Layout size={18} /></button>
          <button className="p-2 rounded-lg hover:bg-[#d4d4d4] transition-colors"><Command size={18} /></button>
        </nav>
        <div className="mt-auto"><button className="p-2 rounded-lg hover:bg-[#d4d4d4] transition-colors"><Settings size={18} /></button></div>
      </div>

      <div className="flex-1 flex flex-col relative h-full min-w-0">
        {/* Header */}
        <header className="h-14 border-b border-[#d4d4d4] bg-[#e8e8e8]/80 backdrop-blur-sm flex items-center justify-between px-5 sticky top-0 z-10">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-neutral-500">Workspace</span>
            <ChevronRight size={14} className="text-neutral-400" />
            <span className="text-neutral-800">Shiuli's Ink Mode</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-neutral-200">
              <Search size={13} className="text-neutral-400 mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-36 placeholder:text-neutral-400" />
            </div>
            <div className="flex -space-x-2">
              {['AK','MJ','SC'].map((init,i) => (
                <div key={i} className={`w-7 h-7 rounded-full border-2 border-[#e8e8e8] flex items-center justify-center text-[9px] font-bold ${['bg-blue-100 text-blue-700','bg-green-100 text-green-700','bg-purple-100 text-purple-700'][i]}`}>{init}</div>
              ))}
            </div>
            <div className="w-8 h-8 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center">
              <User size={14} className="text-neutral-500" />
            </div>
          </div>
        </header>

        {/* Canvas */}
        <div className="flex-1 relative overflow-auto p-6">
          {/* Featured */}
          <div className="absolute top-[70px] left-[50px] w-[380px] bg-white rounded-2xl shadow-xl border border-neutral-200/50 p-5 z-10" style={{ transform:'rotate(-1deg)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#C4522A] bg-[#C4522A]/10 px-2 py-1 rounded-md">Featured</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight mb-2 text-neutral-900">System Architecture Design</h2>
            <p className="text-neutral-500 text-sm mb-4 leading-relaxed">Generate a comprehensive system architecture document: tech stack, data models, API boundaries, and scalability plan from a product brief.</p>
            <div className="flex gap-2 mb-4">
              <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">System</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">Engineering</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleCopy(0)} className="flex-1 py-2.5 bg-[#C4522A] text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2">
                {copiedId===0?<CheckCircle2 size={14} />:<Copy size={14} />} Copy Prompt
              </button>
              <button className="py-2.5 px-3 border border-neutral-200 rounded-xl text-sm text-neutral-600 flex items-center gap-1.5 hover:bg-neutral-50">
                <ArrowUpRight size={13} /> Try
              </button>
            </div>
          </div>

          {/* Floating cards */}
          {PROMPTS.map(prompt => (
            <div key={prompt.id} className="absolute bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-neutral-200/60 p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" style={prompt.style}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">{prompt.category}</span>
                <button onClick={() => handleCopy(prompt.id)} className={`p-1.5 rounded-md transition-colors ${copiedId===prompt.id?'bg-green-100 text-green-600':'bg-neutral-100 text-neutral-500 hover:bg-neutral-200 opacity-0 group-hover:opacity-100'}`}>
                  {copiedId===prompt.id?<CheckCircle2 size={12} />:<Copy size={12} />}
                </button>
              </div>
              <h3 className="text-sm font-semibold text-neutral-800 mb-1.5">{prompt.title}</h3>
              <p className="text-xs text-neutral-500 line-clamp-2 mb-3 leading-relaxed">{prompt.desc}</p>
              <div className="flex gap-1.5 flex-wrap">
                {prompt.tags.map(tag => <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded border border-neutral-200 text-neutral-500 font-medium">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right sidebar — scrollable prompt list */}
      <div className="w-60 h-full bg-[#dfdfdf] border-l border-[#d4d4d4] flex flex-col z-20 shrink-0 overflow-hidden">
        <div className="p-4 border-b border-[#d4d4d4]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">All Prompts</h3>
            <span className="text-[10px] bg-[#C4522A]/10 text-[#C4522A] font-bold px-2 py-0.5 rounded-full">{ALL_PROMPTS.length}</span>
          </div>
          <div className="flex gap-1 flex-wrap">
            {["All","Design","Dev","Both"].map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className="text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-wider transition-all" style={{ background:activeCategory===cat?"#1a1a1a":undefined,color:activeCategory===cat?"white":"#888",border:"1px solid rgba(0,0,0,0.15)" }}>{cat}</button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
          {filteredSidebar.map(p => (
            <div key={p.id} className="bg-white rounded-xl p-3 shadow-sm border border-neutral-200 group">
              <div className="flex items-start justify-between mb-1">
                <span className="text-[8px] font-bold uppercase tracking-wider text-neutral-400">{p.category}</span>
                <button onClick={() => handleCopy(p.id)} className={`p-1 rounded transition-colors opacity-0 group-hover:opacity-100 ${copiedId===p.id?'text-green-600':'text-neutral-400 hover:text-neutral-700'}`}>
                  {copiedId===p.id?<CheckCircle2 size={11} />:<Copy size={11} />}
                </button>
              </div>
              <h4 className="text-xs font-semibold text-neutral-800 mb-1 leading-tight">{p.title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed line-clamp-2">{p.desc}</p>
              <div className="flex gap-1 mt-1.5 flex-wrap">
                {p.tags?.map(t => <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 border border-neutral-200">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-[#d4d4d4]">
          <div className="grid grid-cols-2 gap-2 text-center">
            {[{icon:FileText,label:"2,481",sub:"nodes"},{icon:Zap,label:"94%",sub:"efficiency"},{icon:CheckSquare,label:"18",sub:"prompts"},{icon:MessageSquare,label:"842",sub:"total"}].map(({ icon: Icon, label, sub }) => (
              <div key={sub} className="bg-white rounded-lg p-2 shadow-sm border border-neutral-200">
                <Icon size={12} className="text-neutral-400 mx-auto mb-1" />
                <div className="text-sm font-semibold text-neutral-800 leading-none">{label}</div>
                <div className="text-[9px] text-neutral-400">{sub}</div>
              </div>
            ))}
          </div>
          <button className="mt-2 w-full py-2 bg-neutral-800 text-white rounded-xl text-xs font-medium flex items-center justify-center gap-1.5"><Plus size={13} /> New Prompt</button>
        </div>
      </div>
    </div>
  );
}

export default SamuraiCanvas;
