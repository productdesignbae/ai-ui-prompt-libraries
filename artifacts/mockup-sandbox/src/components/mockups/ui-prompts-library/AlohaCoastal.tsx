import React, { useState } from "react";
import { Search, Copy, Check, Plus, ArrowUpRight, Filter } from "lucide-react";

const CATEGORIES = ["All", "Design", "Dev", "Both"];

const PROMPTS = [
  { id: 1, title: "Component Audit", type: "Both", tags: ["a11y", "review"], desc: "Audit this UI component for accessibility, responsiveness, and visual hierarchy. List issues by severity with a specific fix for each." },
  { id: 2, title: "Color System from Brand", type: "Design", tags: ["tokens", "color"], desc: "Generate a full UI color system (primary, secondary, neutrals, semantic states) from this hex: [HEX]. Include light and dark mode tokens with usage rules." },
  { id: 3, title: "Responsive Layout Scaffold", type: "Dev", tags: ["css", "grid"], desc: "Write a responsive CSS grid layout for a [dashboard / landing / settings] page. Modern CSS only, no frameworks, fully annotated." },
  { id: 4, title: "Micro-interaction Spec", type: "Design", tags: ["motion", "ux"], desc: "Write a micro-interaction spec for [button / modal / toast]. Include trigger, animation curve, duration in ms, and accessible fallback." },
  { id: 5, title: "Figma to Tailwind", type: "Dev", tags: ["figma", "tailwind"], desc: "Convert these Figma design tokens and spacing notes into Tailwind CSS config values: [paste notes]. Include color, font, spacing, and shadow tokens." },
  { id: 6, title: "Design Critique", type: "Design", tags: ["critique", "ux"], desc: "Critique this UI screenshot like a senior product designer. Focus on hierarchy, whitespace, and clarity. Flag the top 3 issues with specific fixes." },
  { id: 7, title: "Component Props API", type: "Dev", tags: ["typescript", "api"], desc: "Design the TypeScript props interface for a [component name] React component. Include variants, sizes, disabled state, and full accessibility props." },
  { id: 8, title: "Error State Copy", type: "Both", tags: ["copy", "ux"], desc: "Write user-friendly error messages for: empty, failed to load, no results, permission denied, server error. Max 12 words each. No technical jargon." },
  { id: 9, title: "Dark Mode Token Map", type: "Dev", tags: ["tokens", "dark"], desc: "Given this light mode color token set, generate dark mode equivalents. Maintain contrast ratios above 4.5:1. Use oklch() for perceptual uniformity." },
  { id: 10, title: "Onboarding Flow Outline", type: "Design", tags: ["ux", "flow"], desc: "Outline a 5-step onboarding flow for [product type]. For each step: goal, user action, screen description, copy direction, and success state." },
  { id: 11, title: "Icon Set Brief", type: "Design", tags: ["icons", "brand"], desc: "Write a design brief for a custom icon set for [product type]. Cover style, stroke weight, grid size, corner radius, and naming conventions." },
  { id: 12, title: "Storybook Scaffold", type: "Dev", tags: ["storybook", "testing"], desc: "Write Storybook stories for [component] with Default, Hover, Loading, Error, Empty, and Disabled states. Include ally addon config." },
  { id: 13, title: "Animation Timing System", type: "Both", tags: ["motion", "tokens"], desc: "Create a motion timing system with 4 duration tokens and easing curves for appear, exit, transition, and feedback. Output as CSS custom properties." },
  { id: 14, title: "Skeleton Loader Markup", type: "Dev", tags: ["css", "loading"], desc: "Write HTML + CSS for a skeleton loader matching this layout: [describe or paste layout]. CSS animation keyframes only, no JavaScript." },
  { id: 15, title: "A/B Test Variant Ideas", type: "Both", tags: ["growth", "testing"], desc: "Suggest 3 A/B test variants for this [CTA / hero / form]. For each: hypothesis, the exact change, and the primary metric to track." },
  { id: 16, title: "Spacing Scale", type: "Design", tags: ["tokens", "spacing"], desc: "Generate a spacing scale for [mobile / app / marketing site] with a 4px base unit. Name tokens semantically and explain the rationale for each step." },
  { id: 17, title: "Typography Ramp", type: "Design", tags: ["type", "tokens"], desc: "Create a 6-level type ramp: display, h1, h2, h3, body, caption. Specify size, weight, line-height as Tailwind classes and CSS custom properties." },
  { id: 18, title: "Accessibility Audit", type: "Both", tags: ["a11y", "wcag"], desc: "Audit this component for WCAG 2.1 AA compliance. Check color contrast, keyboard navigation, ARIA roles, focus management, and screen reader output." },
];

const TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Design: { bg: "#6b8f71", text: "#fff", border: "#5a7a60" },
  Dev: { bg: "#4a8090", text: "#fff", border: "#3a7080" },
  Both: { bg: "#c47260", text: "#fff", border: "#b46250" },
};

export function AlohaCoastal() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filtered = PROMPTS.filter(
    (p) =>
      (activeCategory === "All" || p.type === activeCategory) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase()))
  );

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen w-full font-sans overflow-hidden" style={{ background: "#f5f0e8", color: "#1a2530" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');
        .coastal-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(106,143,113,0.15);
          box-shadow: 0 2px 12px rgba(26,37,48,0.06);
          transition: all 0.25s ease;
        }
        .coastal-card:hover {
          background: #fff;
          border-color: rgba(106,143,113,0.35);
          box-shadow: 0 6px 24px rgba(26,37,48,0.1);
          transform: translateY(-2px);
        }
        .coastal-search {
          background: rgba(255,255,255,0.75);
          border: 1.5px solid rgba(106,143,113,0.25);
          transition: all 0.2s;
        }
        .coastal-search:focus {
          outline: none;
          background: #fff;
          border-color: #6b8f71;
          box-shadow: 0 0 0 3px rgba(107,143,113,0.12);
        }
        .copy-btn { background: rgba(26,37,48,0.06); border: 1px solid rgba(26,37,48,0.12); transition: all 0.2s; }
        .copy-btn:hover { background: rgba(26,37,48,0.12); transform: scale(1.05); }
        .pill-active { background: #1a2530; color: #f5f0e8; border: 1.5px solid #1a2530; }
        .pill-inactive { background: rgba(255,255,255,0.6); border: 1.5px solid rgba(26,37,48,0.15); color: rgba(26,37,48,0.6); transition: all 0.2s; }
        .pill-inactive:hover { background: rgba(255,255,255,0.9); border-color: rgba(26,37,48,0.3); color: #1a2530; }
        @keyframes fadein { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .fade-in { animation: fadein 0.3s ease both; }
      `}</style>

      {/* Sage color blob accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position:"absolute", top:"-5%", right:"-5%", width:"45%", height:"45%", borderRadius:"50%", background:"rgba(107,143,113,0.12)", filter:"blur(80px)" }} />
        <div style={{ position:"absolute", bottom:"-8%", left:"-5%", width:"50%", height:"50%", borderRadius:"50%", background:"rgba(196,114,96,0.1)", filter:"blur(90px)" }} />
        <div style={{ position:"absolute", top:"40%", right:"10%", width:"30%", height:"30%", borderRadius:"50%", background:"rgba(74,128,144,0.1)", filter:"blur(70px)" }} />
      </div>

      {/* Left sidebar */}
      <aside className="relative z-10 w-64 shrink-0 h-full flex flex-col" style={{ borderRight: "1px solid rgba(26,37,48,0.1)", background: "rgba(245,240,232,0.8)", backdropFilter: "blur(8px)" }}>
        {/* Logo */}
        <div className="px-6 py-6" style={{ borderBottom: "1px solid rgba(26,37,48,0.08)" }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", color: "#1a2530", lineHeight: 1.1 }}>
            Prompt<br/><span style={{ color: "#6b8f71" }}>Library.</span>
          </div>
          <p style={{ fontSize: "11px", color: "rgba(26,37,48,0.45)", marginTop: "6px", letterSpacing: "0.04em" }}>Shiuli's Sage Edit · v2</p>
        </div>

        {/* Nav categories */}
        <nav className="px-4 py-4 flex flex-col gap-1">
          {[
            { cat: "All", count: PROMPTS.length },
            { cat: "Design", count: PROMPTS.filter(p => p.type === "Design").length },
            { cat: "Dev", count: PROMPTS.filter(p => p.type === "Dev").length },
            { cat: "Both", count: PROMPTS.filter(p => p.type === "Both").length },
          ].map(({ cat, count }) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left"
              style={{
                background: activeCategory === cat ? "#1a2530" : "transparent",
                color: activeCategory === cat ? "#f5f0e8" : "rgba(26,37,48,0.55)",
              }}>
              <span>{cat === "All" ? "All Prompts" : cat === "Dev" ? "Development" : cat}</span>
              <span style={{
                fontSize: "11px", fontWeight: 600, padding: "1px 7px", borderRadius: "100px",
                background: activeCategory === cat ? "rgba(255,255,255,0.15)" : "rgba(26,37,48,0.08)",
                color: activeCategory === cat ? "rgba(245,240,232,0.8)" : "rgba(26,37,48,0.45)",
              }}>{count}</span>
            </button>
          ))}
        </nav>

        {/* Stats */}
        <div className="mt-auto px-4 pb-6">
          <div className="rounded-2xl p-4" style={{ background: "rgba(107,143,113,0.12)", border: "1px solid rgba(107,143,113,0.2)" }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b8f71", fontWeight: 600 }}>Library Stats</p>
            <p style={{ fontSize: "22px", fontWeight: 300, color: "#1a2530", fontFamily: "'DM Serif Display', serif", marginTop: "4px" }}>{PROMPTS.length}<span style={{ fontSize: "12px", marginLeft: "4px", color: "rgba(26,37,48,0.5)" }}>prompts</span></p>
            <div className="flex gap-4 mt-2">
              {[{ label: "Design", val: 8 }, { label: "Dev", val: 6 }, { label: "Both", val: 4 }].map(({ label, val }) => (
                <div key={label}>
                  <p style={{ fontSize: "16px", fontWeight: 500, color: "#1a2530" }}>{val}</p>
                  <p style={{ fontSize: "10px", color: "rgba(26,37,48,0.4)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="px-8 py-5 flex items-center gap-4" style={{ borderBottom: "1px solid rgba(26,37,48,0.08)", background: "rgba(245,240,232,0.6)", backdropFilter: "blur(8px)" }}>
          <div className="flex-1 relative">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "rgba(26,37,48,0.4)" }} />
            <input type="text" placeholder="Search prompts..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="coastal-search w-full pl-10 pr-4 py-2.5 rounded-xl text-sm" style={{ color: "#1a2530" }} />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium" style={{ background: "#6b8f71", color: "#fff", border: "none", cursor: "pointer" }}>
            <Plus size={14} /> New Prompt
          </button>
        </div>

        {/* Page title */}
        <div className="px-8 pt-6 pb-4">
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "28px", color: "#1a2530", letterSpacing: "-0.02em", margin: 0 }}>
            {activeCategory === "All" ? "All Prompts" : activeCategory === "Dev" ? "Development" : activeCategory}
          </h1>
          <p style={{ fontSize: "12px", color: "rgba(26,37,48,0.45)", marginTop: "4px" }}>
            {filtered.length} of {PROMPTS.length} prompts · sorted by relevance
          </p>
        </div>

        {/* Cards grid */}
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {filtered.map((p, i) => {
              const tc = TYPE_COLORS[p.type];
              return (
                <div key={p.id} className="coastal-card fade-in rounded-2xl p-5 flex flex-col gap-3" style={{ animationDelay: `${i * 30}ms` }}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}>{p.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-1.5 rounded-lg transition-all"
                        style={{ background: "rgba(107,143,113,0.1)", color: "#6b8f71", border: "1px solid rgba(107,143,113,0.2)", cursor: "pointer" }}>
                        <ArrowUpRight size={10} /> Try it
                      </button>
                      <button onClick={() => handleCopy(p.id)} className="copy-btn w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer">
                        {copiedId === p.id ? <Check size={13} style={{ color: "#6b8f71" }} /> : <Copy size={13} style={{ color: "rgba(26,37,48,0.5)" }} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1.5" style={{ color: "#1a2530", lineHeight: 1.3 }}>{p.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(26,37,48,0.55)" }}>{p.desc}</p>
                  </div>
                  <div className="flex gap-1.5 mt-auto flex-wrap">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{ background: "rgba(26,37,48,0.06)", color: "rgba(26,37,48,0.45)", border: "1px solid rgba(26,37,48,0.08)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="coastal-card rounded-2xl flex flex-col items-center justify-center py-16 text-center mt-4">
              <Search size={24} style={{ color: "rgba(26,37,48,0.2)", marginBottom: "10px" }} />
              <p className="text-sm font-medium" style={{ color: "rgba(26,37,48,0.4)" }}>No prompts found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
