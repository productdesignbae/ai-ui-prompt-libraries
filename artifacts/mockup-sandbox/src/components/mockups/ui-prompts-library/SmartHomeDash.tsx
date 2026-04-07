import React, { useState } from 'react';
import { Home, Bell, User, Search, ChevronRight, Plus, Copy, Check, Zap, Layout, Palette, FileText } from 'lucide-react';

const CATEGORIES = [
  { id:"All", label:"All Prompts" },
  { id:"Design", label:"Design" },
  { id:"Dev", label:"Dev" },
  { id:"Both", label:"Both" },
];

const ROOMS = [
  { id:"All", icon:Home, label:"All Rooms" },
  { id:"Design", icon:Palette, label:"Design Suite" },
  { id:"Dev", icon:Zap, label:"Dev Room" },
  { id:"Both", icon:Layout, label:"Shared Space" },
];

const PROMPTS = [
  { id:"p1", room:"Both", title:"Component Audit", desc:"Audit this UI component for accessibility, responsiveness, and visual hierarchy. List issues by severity with a specific fix for each.", tags:["a11y","review"], status:"active" },
  { id:"p2", room:"Design", title:"Color System from Brand", desc:"Generate a full UI color system from this hex: [HEX]. Include primary, secondary, neutrals, semantic states, and light/dark mode tokens with usage rules.", tags:["tokens","color"], status:"ready" },
  { id:"p3", room:"Dev", title:"Responsive Layout Scaffold", desc:"Write a responsive CSS grid layout for a [dashboard / landing / settings] page. Modern CSS only, no frameworks, fully annotated.", tags:["css","grid"], status:"active" },
  { id:"p4", room:"Design", title:"Micro-interaction Spec", desc:"Write a micro-interaction spec for [button / modal / toast]. Include trigger, animation curve, duration in ms, and accessible fallback.", tags:["motion","ux"], status:"ready" },
  { id:"p5", room:"Dev", title:"Figma to Tailwind", desc:"Convert Figma design tokens and spacing notes into Tailwind CSS config values. Include color, font, spacing, and shadow tokens.", tags:["figma","tailwind"], status:"active" },
  { id:"p6", room:"Design", title:"Design Critique", desc:"Critique this UI screenshot like a senior product designer. Focus on hierarchy, whitespace, and clarity. Flag the top 3 issues with specific fixes.", tags:["critique","ux"], status:"ready" },
  { id:"p7", room:"Dev", title:"Component Props API", desc:"Design the TypeScript props interface for a React component. Include variants, sizes, disabled state, and full accessibility props.", tags:["typescript","api"], status:"active" },
  { id:"p8", room:"Both", title:"Error State Copy", desc:"Write user-friendly error messages for: empty, failed to load, no results, permission denied, server error. Max 12 words each.", tags:["copy","ux"], status:"ready" },
  { id:"p9", room:"Dev", title:"Dark Mode Token Map", desc:"Given this light mode color token set, generate dark mode equivalents. Maintain contrast ratios above 4.5:1. Use oklch().", tags:["tokens","dark"], status:"active" },
  { id:"p10", room:"Design", title:"Onboarding Flow Outline", desc:"Outline a 5-step onboarding flow for [product type]. For each: goal, user action, screen description, copy direction, success state.", tags:["ux","flow"], status:"ready" },
  { id:"p11", room:"Design", title:"Icon Set Brief", desc:"Write a design brief for a custom icon set. Cover style, stroke weight, grid size, corner radius, and naming conventions.", tags:["icons","brand"], status:"ready" },
  { id:"p12", room:"Dev", title:"Storybook Scaffold", desc:"Write Storybook stories for [component] with Default, Hover, Loading, Error, Empty, and Disabled states. Include ally addon config.", tags:["storybook","docs"], status:"active" },
  { id:"p13", room:"Both", title:"Animation Timing System", desc:"Create a motion timing system with 4 duration tokens and easing curves for appear, exit, transition, and feedback. Output as CSS vars.", tags:["motion","tokens"], status:"ready" },
  { id:"p14", room:"Dev", title:"Skeleton Loader Markup", desc:"Write HTML + CSS for a skeleton loader matching this layout. CSS animation keyframes only, no JavaScript.", tags:["css","loading"], status:"active" },
  { id:"p15", room:"Both", title:"A/B Test Variant Ideas", desc:"Suggest 3 A/B test variants for this [CTA / hero / form]. For each: hypothesis, the exact change, and the primary metric to track.", tags:["growth","testing"], status:"ready" },
  { id:"p16", room:"Design", title:"Spacing Scale", desc:"Generate a spacing scale with a 4px base unit. Name tokens semantically (xs → 2xl) and explain the rationale for each step.", tags:["tokens","spacing"], status:"ready" },
  { id:"p17", room:"Design", title:"Typography Ramp", desc:"Create a 6-level type ramp: display, h1, h2, h3, body, caption. Specify size, weight, line-height as Tailwind classes and CSS vars.", tags:["type","tokens"], status:"ready" },
  { id:"p18", room:"Both", title:"Accessibility Audit", desc:"Audit this component for WCAG 2.1 AA compliance. Check color contrast, keyboard navigation, ARIA roles, focus management, and screen reader.", tags:["a11y","wcag"], status:"active" },
];

const ROOM_COLORS: Record<string,{bg:string;text:string;dot:string}> = {
  Design: { bg:"#eef4ee",text:"#2d6a4f",dot:"#52b788" },
  Dev: { bg:"#eef2f7",text:"#2d4d7a",dot:"#4d7cc7" },
  Both: { bg:"#fef6ee",text:"#7d4e1a",dot:"#e07b39" },
};

export function SmartHomeDash() {
  const [activeRoom, setActiveRoom] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const handleCopy = (id: string) => { setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };

  const filtered = PROMPTS.filter(p =>
    (activeRoom === "All" || p.room === activeRoom) &&
    (!search || p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()))
  );

  const activeCount = filtered.filter(p => p.status === "active").length;

  return (
    <div className="flex h-screen w-full font-sans overflow-hidden" style={{ background:"#F7F5F2",color:"#1a2535" }}>
      {/* Sidebar */}
      <aside className="w-60 h-full flex flex-col" style={{ background:"#fff",borderRight:"1px solid rgba(0,0,0,0.08)" }}>
        <div className="px-5 py-5" style={{ borderBottom:"1px solid rgba(0,0,0,0.07)" }}>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background:"#1a2535" }}>
              <Home size={13} style={{ color:"#fff" }} />
            </div>
            <span className="font-bold text-sm" style={{ color:"#1a2535" }}>Shiuli's Smart Pad</span>
          </div>
          <p className="text-[10px]" style={{ color:"rgba(26,37,53,0.45)",paddingLeft:"35px" }}>AI Prompt Library</p>
        </div>

        <nav className="flex-1 p-3 overflow-y-auto">
          <p className="text-[9px] font-bold uppercase tracking-widest px-2 py-2" style={{ color:"rgba(26,37,53,0.35)" }}>Rooms</p>
          {ROOMS.map(({ id, icon: Icon, label }) => {
            const count = id === "All" ? PROMPTS.length : PROMPTS.filter(p => p.room === id).length;
            return (
              <button key={id} onClick={() => setActiveRoom(id)}
                className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-xl mb-0.5 text-left transition-all"
                style={{ background:activeRoom===id?"#f0f2f5":"transparent",color:activeRoom===id?"#1a2535":"rgba(26,37,53,0.5)",fontWeight:activeRoom===id?600:400 }}>
                <Icon size={14} style={{ color:activeRoom===id?"#1a2535":"rgba(26,37,53,0.4)" }} />
                <span className="text-sm flex-1">{label}</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background:"rgba(0,0,0,0.06)",color:"rgba(26,37,53,0.45)" }}>{count}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4" style={{ borderTop:"1px solid rgba(0,0,0,0.07)" }}>
          <div className="rounded-xl p-3" style={{ background:"#f0f2f5" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color:"rgba(26,37,53,0.4)" }}>Status</span>
              <div className="w-2 h-2 rounded-full" style={{ background:"#52b788" }} />
            </div>
            <div className="text-2xl font-light" style={{ color:"#1a2535" }}>{PROMPTS.length}<span className="text-xs ml-1" style={{ color:"rgba(26,37,53,0.4)" }}>total</span></div>
            <div className="flex gap-3 mt-1">
              <div><div className="text-sm font-semibold" style={{ color:"#52b788" }}>{PROMPTS.filter(p=>p.status==="active").length}</div><div className="text-[9px]" style={{ color:"rgba(26,37,53,0.4)" }}>active</div></div>
              <div><div className="text-sm font-semibold" style={{ color:"#4d7cc7" }}>{PROMPTS.filter(p=>p.status==="ready").length}</div><div className="text-[9px]" style={{ color:"rgba(26,37,53,0.4)" }}>ready</div></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="px-7 py-4 flex items-center gap-4" style={{ borderBottom:"1px solid rgba(0,0,0,0.07)",background:"rgba(247,245,242,0.95)",backdropFilter:"blur(8px)" }}>
          <div className="relative flex-1">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color:"rgba(26,37,53,0.35)" }} />
            <input type="text" placeholder="Search prompts..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full py-2 pl-9 pr-4 rounded-xl text-sm" style={{ background:"#fff",border:"1px solid rgba(0,0,0,0.1)",color:"#1a2535",outline:"none" }} />
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium" style={{ background:"#1a2535",color:"#fff" }}>
            <Plus size={14} /> Add
          </button>
          <div className="flex items-center gap-3" style={{ color:"rgba(26,37,53,0.5)" }}>
            <Bell size={18} className="cursor-pointer hover:text-[#1a2535] transition-colors" />
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background:"#e8edf5" }}>
              <User size={14} style={{ color:"#1a2535" }} />
            </div>
          </div>
        </div>

        {/* Page header */}
        <div className="px-7 py-4" style={{ borderBottom:"1px solid rgba(0,0,0,0.06)" }}>
          <div className="flex items-center gap-2 text-xs mb-1" style={{ color:"rgba(26,37,53,0.4)" }}>
            <Home size={11} /><ChevronRight size={10} />
            <span>{ROOMS.find(r=>r.id===activeRoom)?.label || "All Rooms"}</span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold" style={{ color:"#1a2535" }}>{ROOMS.find(r=>r.id===activeRoom)?.label || "All Rooms"}</h1>
            <div className="flex items-center gap-3">
              {[activeCount+" active","Both","Design","Dev"].slice(0,1).map(s => (
                <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background:"#edf7f0",color:"#2d6a4f",border:"1px solid #c8e6d4" }}>{s}</span>
              ))}
              <span className="text-xs" style={{ color:"rgba(26,37,53,0.4)" }}>{filtered.length} prompts</span>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="flex-1 overflow-y-auto px-7 py-5">
          <div className="grid grid-cols-2 gap-4">
            {filtered.map(p => {
              const rc = ROOM_COLORS[p.room] || ROOM_COLORS.Both;
              return (
                <div key={p.id} className="group" style={{ background:"#fff",border:"1px solid rgba(0,0,0,0.08)",borderRadius:"16px",padding:"16px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)",transition:"all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow="0 6px 24px rgba(0,0,0,0.09)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow="0 2px 8px rgba(0,0,0,0.04)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(0)"; }}>
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:"8px" }}>
                      <div style={{ width:"7px",height:"7px",borderRadius:"50%",background:rc.dot,flexShrink:0 }} />
                      <span style={{ fontSize:"10px",fontWeight:700,padding:"2px 8px",borderRadius:"100px",background:rc.bg,color:rc.text }}>{p.room}</span>
                    </div>
                    <div style={{ display:"flex",alignItems:"center",gap:"6px" }}>
                      <span style={{ fontSize:"9px",padding:"2px 7px",borderRadius:"100px",background:p.status==="active"?"#edf7f0":"#f0f2f5",color:p.status==="active"?"#2d6a4f":"rgba(26,37,53,0.5)",fontWeight:600 }}>{p.status}</span>
                      <button onClick={() => handleCopy(p.id)} style={{ width:"28px",height:"28px",borderRadius:"8px",border:"1px solid rgba(0,0,0,0.1)",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s" }}>
                        {copiedId===p.id?<Check size={12} style={{ color:"#52b788" }} />:<Copy size={12} style={{ color:"rgba(26,37,53,0.45)" }} />}
                      </button>
                    </div>
                  </div>
                  <h3 style={{ fontSize:"13px",fontWeight:600,color:"#1a2535",marginBottom:"6px",lineHeight:1.3 }}>{p.title}</h3>
                  <p style={{ fontSize:"11px",color:"rgba(26,37,53,0.55)",lineHeight:1.55,marginBottom:"10px" }}>{p.desc}</p>
                  <div style={{ display:"flex",gap:"5px",flexWrap:"wrap" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize:"9px",padding:"2px 7px",borderRadius:"100px",background:"#f0f2f5",color:"rgba(26,37,53,0.5)",border:"1px solid rgba(0,0,0,0.07)" }}>{t}</span>
                    ))}
                    <button style={{ marginLeft:"auto",fontSize:"10px",padding:"2px 9px",borderRadius:"100px",background:"transparent",border:"1px solid rgba(0,0,0,0.12)",color:"rgba(26,37,53,0.5)",cursor:"pointer",fontWeight:500 }}>Try it ↗</button>
                  </div>
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"60px 0",textAlign:"center" }}>
              <Search size={26} style={{ color:"rgba(26,37,53,0.15)",marginBottom:"12px" }} />
              <p style={{ fontSize:"14px",color:"rgba(26,37,53,0.4)" }}>No prompts in this room</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
