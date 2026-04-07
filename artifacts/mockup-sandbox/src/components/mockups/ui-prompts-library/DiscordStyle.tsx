import React, { useState } from "react";
import { Search, Hash, Plus, Settings, Bell, Inbox, Copy, Check, Star, Zap, Mic } from "lucide-react";

const CHANNELS = [
  { id: "all", name: "all-prompts", icon: Hash },
  { id: "Design", name: "design-prompts", icon: Hash },
  { id: "Dev", name: "dev-prompts", icon: Hash },
  { id: "Both", name: "both-categories", icon: Star },
];

const PROMPTS = [
  { id:1, title:"Component Audit", description:"Audit this UI component for accessibility, responsiveness, and visual hierarchy. List issues by severity with a specific fix for each.", category:"Both", tags:["a11y","review"], premium:true },
  { id:2, title:"Color System from Brand", description:"Generate a full UI color system from this hex: [HEX]. Include primary, secondary, neutrals, semantic states, and light/dark mode tokens with usage rules.", category:"Design", tags:["tokens","color"], premium:false },
  { id:3, title:"Responsive Layout Scaffold", description:"Write a responsive CSS grid layout for a [dashboard / landing / settings] page. Modern CSS only, no frameworks. Fully annotated.", category:"Dev", tags:["css","grid"], premium:false },
  { id:4, title:"Micro-interaction Spec", description:"Write a micro-interaction spec for [button / modal / toast]. Include trigger, animation curve (cubic-bezier), duration in ms, and accessible fallback.", category:"Design", tags:["motion","ux"], premium:false },
  { id:5, title:"Figma to Tailwind", description:"Convert Figma design tokens and spacing notes into Tailwind CSS config values. Include color, font, spacing, and shadow tokens.", category:"Dev", tags:["figma","tailwind"], premium:false },
  { id:6, title:"Design Critique", description:"Critique this UI screenshot like a senior product designer. Focus on hierarchy, whitespace, and clarity. Flag the top 3 issues with specific fixes.", category:"Design", tags:["critique","ux"], premium:false },
  { id:7, title:"Component Props API", description:"Design the TypeScript props interface for a React component. Include variants, sizes, disabled state, and full accessibility props.", category:"Dev", tags:["typescript","api"], premium:false },
  { id:8, title:"Error State Copy", description:"Write user-friendly error messages for: empty, failed to load, no results, permission denied, server error. Max 12 words each. No technical jargon.", category:"Both", tags:["copy","ux"], premium:false },
  { id:9, title:"Dark Mode Token Map", description:"Given this light mode color token set, generate dark mode equivalents. Maintain contrast ratios above 4.5:1. Use oklch() for perceptual uniformity.", category:"Dev", tags:["tokens","dark"], premium:false },
  { id:10, title:"Onboarding Flow Outline", description:"Outline a 5-step onboarding flow for [product type]. For each: goal, user action, screen description, copy direction, and success state.", category:"Design", tags:["ux","flow"], premium:false },
  { id:11, title:"Icon Set Brief", description:"Write a design brief for a custom icon set. Cover style, stroke weight, grid size, corner radius, and naming conventions for [product type].", category:"Design", tags:["icons","brand"], premium:false },
  { id:12, title:"Storybook Scaffold", description:"Write Storybook stories for [component] with Default, Hover, Loading, Error, Empty, and Disabled states. Include ally addon config.", category:"Dev", tags:["storybook","docs"], premium:false },
  { id:13, title:"Animation Timing System", description:"Create a motion timing system with 4 duration tokens and easing curves for appear, exit, transition, and feedback. Output as CSS custom properties.", category:"Both", tags:["motion","tokens"], premium:false },
  { id:14, title:"Skeleton Loader Markup", description:"Write HTML + CSS for a skeleton loader matching this layout. CSS animation keyframes only, no JavaScript.", category:"Dev", tags:["css","loading"], premium:false },
  { id:15, title:"A/B Test Variant Ideas", description:"Suggest 3 A/B test variants for this [CTA / hero / form]. For each: hypothesis, the exact change, and the primary metric to track.", category:"Both", tags:["growth","testing"], premium:false },
  { id:16, title:"Spacing Scale", description:"Generate a spacing scale with a 4px base unit. Name tokens semantically (xs→2xl) and explain the rationale for each step.", category:"Design", tags:["tokens","spacing"], premium:false },
  { id:17, title:"Typography Ramp", description:"Create a 6-level type ramp: display, h1, h2, h3, body, caption. Specify size, weight, line-height as Tailwind classes and CSS custom properties.", category:"Design", tags:["type","tokens"], premium:false },
  { id:18, title:"Accessibility Audit", description:"Audit this component for WCAG 2.1 AA compliance. Check color contrast, keyboard navigation, ARIA roles, focus management, and screen reader output.", category:"Both", tags:["a11y","wcag"], premium:true },
];

const CATEGORY_COLORS: Record<string, string> = { Writing:"#3ba55d", Coding:"#5865f2", Analysis:"#faa61a", Creative:"#eb459e", Research:"#ed4245", Design:"#5865f2", Dev:"#3ba55d", Both:"#faa61a" };

export default function DiscordStyle() {
  const [activeChannel, setActiveChannel] = useState("all");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<number | null>(null);

  const filtered = PROMPTS.filter(p => {
    const catMatch = activeChannel === "all" || p.category === activeChannel;
    const searchMatch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  const handleCopy = (id: number) => { setCopied(id); setTimeout(() => setCopied(null), 2000); };

  return (
    <div className="flex h-screen w-full bg-[#313338] text-white font-sans overflow-hidden">
      {/* Server bar */}
      <div className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-3 gap-2 shrink-0">
        <div className="w-12 h-12 bg-indigo-600 rounded-[16px] hover:rounded-xl transition-all flex items-center justify-center font-bold text-lg cursor-pointer">Ai</div>
        <div className="w-8 h-[2px] bg-white/10 rounded-full my-1" />
        {['B','C','D'].map(l => (
          <div key={l} className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-xl hover:bg-[#5865f2] transition-all flex items-center justify-center text-sm font-semibold text-white/60 cursor-pointer">{l}</div>
        ))}
        <div className="mt-auto mb-2"><div className="w-12 h-12 bg-[#23a559]/20 hover:bg-[#23a559] rounded-[24px] hover:rounded-xl transition-all flex items-center justify-center cursor-pointer"><Plus className="text-[#23a559] group-hover:text-white" size={22} /></div></div>
      </div>

      {/* Channel list */}
      <div className="w-60 bg-[#2b2d31] flex flex-col shrink-0">
        <div className="p-4 border-b border-black/30 shadow-sm flex items-center justify-between">
          <div>
            <h2 className="font-bold text-sm">Shiuli's Dark Arc</h2>
            <p className="text-xs text-white/40">AI Prompt Library</p>
          </div>
          <Inbox size={18} className="text-white/40 cursor-pointer hover:text-white transition-colors" />
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 px-2 py-2">Text Channels</div>
          {CHANNELS.map(ch => {
            const count = ch.id === "all" ? PROMPTS.length : PROMPTS.filter(p => p.category === ch.id).length;
            return (
              <div key={ch.id} onClick={() => setActiveChannel(ch.id)}
                className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer group transition-colors ${activeChannel===ch.id?"bg-white/10 text-white":"text-white/40 hover:bg-white/5 hover:text-white/80"}`}>
                <Hash size={16} className="shrink-0" />
                <span className="text-sm flex-1">{ch.name}</span>
                <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded-full font-bold">{count}</span>
              </div>
            );
          })}
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 px-2 py-2 mt-4">Voice</div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded text-white/30"><Mic size={16} /><span className="text-sm">General</span></div>
        </div>
        <div className="p-3 bg-[#232428] flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold">SC</div>
          <div className="flex-1 min-w-0"><div className="text-sm font-medium truncate">Shiuli C.</div><div className="text-[10px] text-green-400">Online</div></div>
          <Settings size={16} className="text-white/40 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Channel header */}
        <div className="h-12 border-b border-black/30 flex items-center px-4 gap-3 shrink-0">
          <Hash size={20} className="text-white/50" />
          <span className="font-bold text-sm">{CHANNELS.find(c=>c.id===activeChannel)?.name || "all-prompts"}</span>
          <div className="h-5 w-[1px] bg-white/20 mx-1" />
          <span className="text-xs text-white/40">UI & AI prompts for design and development workflows</span>
          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center bg-[#1e1f22] rounded px-2 py-1 border border-white/10 w-40">
              <Search size={13} className="text-white/40 mr-1.5" />
              <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} className="bg-transparent border-none outline-none text-xs text-white/80 placeholder:text-white/30 w-full" />
            </div>
            <Bell size={18} className="text-white/40 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        {/* Prompts */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-1">#{CHANNELS.find(c=>c.id===activeChannel)?.name || "all-prompts"}</h3>
            <p className="text-sm text-white/50">This is the beginning of the <span className="text-white/80 font-medium">#{CHANNELS.find(c=>c.id===activeChannel)?.name}</span> channel · {filtered.length} prompts</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {filtered.map(p => (
              <div key={p.id} className="group bg-[#2b2d31] hover:bg-[#32353b] rounded-lg p-4 border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background:`${CATEGORY_COLORS[p.category]}20`,color:CATEGORY_COLORS[p.category],border:`1px solid ${CATEGORY_COLORS[p.category]}40` }}>{p.category}</span>
                    {p.premium && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded text-yellow-400 bg-yellow-400/10 border border-yellow-400/30"><Zap size={8} className="inline mr-0.5" />PRO</span>}
                  </div>
                  <button onClick={() => handleCopy(p.id)} className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded hover:bg-white/10">
                    {copied===p.id?<Check size={13} className="text-green-400" />:<Copy size={13} className="text-white/40" />}
                  </button>
                </div>
                <h4 className="font-semibold text-sm text-white mb-1.5">{p.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed mb-3">{p.description}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {p.tags.map(tag => <span key={tag} className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/40">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
          {filtered.length===0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Search size={28} className="text-white/20 mb-3" />
              <p className="text-white/40 text-sm">No prompts in this channel</p>
            </div>
          )}
        </div>

        {/* Message bar */}
        <div className="px-4 pb-4 shrink-0">
          <div className="bg-[#383a40] rounded-lg px-4 py-2.5 flex items-center gap-3 border border-white/5">
            <Plus size={18} className="text-white/50 cursor-pointer hover:text-white transition-colors shrink-0" />
            <input type="text" placeholder="Message #all-prompts" className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-white/30" readOnly />
            <Mic size={18} className="text-white/50 cursor-pointer hover:text-white transition-colors shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
