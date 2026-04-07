import React, { useState } from "react";
import { Search, Copy, Check, Mic, Plus, Command, Sparkles, Code, FileText, BarChart, BookOpen, Lightbulb, Layout, Palette, Zap, Accessibility, Eye } from "lucide-react";

const CATEGORIES = ["All", "Design", "Dev", "Both"];

const PROMPTS = [
  { id: 1, title: "Component Audit", type: "Both", icon: Eye, tags: ["a11y", "review"], desc: "Audit this UI component for accessibility, responsiveness, and visual hierarchy. List issues by severity with a specific fix for each." },
  { id: 2, title: "Color System from Brand", type: "Design", icon: Palette, tags: ["tokens", "color"], desc: "Generate a full UI color system (primary, secondary, neutrals, semantic states) from this hex: [HEX]. Include light and dark mode tokens with usage rules." },
  { id: 3, title: "Responsive Layout Scaffold", type: "Dev", icon: Layout, tags: ["css", "grid"], desc: "Write a responsive CSS grid layout for a [dashboard / landing / settings] page. Modern CSS only, no frameworks, fully annotated." },
  { id: 4, title: "Micro-interaction Spec", type: "Design", icon: Zap, tags: ["motion", "ux"], desc: "Write a micro-interaction spec for [button / modal / toast]. Include trigger, animation curve, duration in ms, and accessible fallback." },
  { id: 5, title: "Figma to Tailwind", type: "Dev", icon: Code, tags: ["figma", "tailwind"], desc: "Convert these Figma design tokens and spacing notes into Tailwind CSS config values: [paste notes]. Include color, font, spacing, and shadow tokens." },
  { id: 6, title: "Design Critique", type: "Design", icon: Eye, tags: ["critique", "ux"], desc: "Critique this UI screenshot like a senior product designer. Focus on hierarchy, whitespace, and clarity. Flag the top 3 issues with specific fixes." },
  { id: 7, title: "Component Props API", type: "Dev", icon: Code, tags: ["typescript", "api"], desc: "Design the TypeScript props interface for a [component name] React component. Include variants, sizes, disabled state, and full accessibility props." },
  { id: 8, title: "Error State Copy", type: "Both", icon: FileText, tags: ["copy", "ux"], desc: "Write user-friendly error messages for: empty, failed to load, no results, permission denied, server error. Max 12 words each. No technical jargon." },
  { id: 9, title: "Dark Mode Token Map", type: "Dev", icon: Palette, tags: ["tokens", "dark"], desc: "Given this light mode color token set, generate dark mode equivalents. Maintain contrast ratios above 4.5:1. Use oklch() for perceptual uniformity." },
  { id: 10, title: "Onboarding Flow Outline", type: "Design", icon: Layout, tags: ["ux", "flow"], desc: "Outline a 5-step onboarding flow for [product type]. For each step: goal, user action, screen description, copy direction, and success state." },
  { id: 11, title: "Icon Set Brief", type: "Design", icon: Sparkles, tags: ["icons", "brand"], desc: "Write a design brief for a custom icon set for [product type]. Cover style, stroke weight, grid size, corner radius, and naming conventions." },
  { id: 12, title: "Storybook Scaffold", type: "Dev", icon: Code, tags: ["storybook", "testing"], desc: "Write Storybook stories for [component] with Default, Hover, Loading, Error, Empty, and Disabled states. Include ally addon config." },
  { id: 13, title: "Animation Timing System", type: "Both", icon: Zap, tags: ["motion", "tokens"], desc: "Create a motion timing system with 4 duration tokens and easing curves for appear, exit, transition, and feedback. Output as CSS custom properties." },
  { id: 14, title: "Skeleton Loader Markup", type: "Dev", icon: Layout, tags: ["css", "loading"], desc: "Write HTML + CSS for a skeleton loader matching this layout: [describe or paste layout]. CSS animation keyframes only, no JavaScript." },
  { id: 15, title: "A/B Test Variant Ideas", type: "Both", icon: BarChart, tags: ["growth", "testing"], desc: "Suggest 3 A/B test variants for this [CTA / hero / form]. For each: hypothesis, the exact change, and the primary metric to track." },
  { id: 16, title: "Spacing Scale", type: "Design", icon: Layout, tags: ["tokens", "spacing"], desc: "Generate a spacing scale for [mobile / app / marketing site] with a 4px base unit. Name tokens semantically and explain the rationale for each step." },
  { id: 17, title: "Typography Ramp", type: "Design", icon: FileText, tags: ["type", "tokens"], desc: "Create a 6-level type ramp: display, h1, h2, h3, body, caption. Specify size, weight, line-height as Tailwind classes and CSS custom properties." },
  { id: 18, title: "Accessibility Audit", type: "Both", icon: Accessibility, tags: ["a11y", "wcag"], desc: "Audit this component for WCAG 2.1 AA compliance. Check color contrast, keyboard navigation, ARIA roles, focus management, and screen reader output." },
];

export function AppleGlass() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filtered = PROMPTS.filter(
    (p) =>
      (activeCategory === "All" || p.type === activeCategory) &&
      (p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen w-full font-sans overflow-hidden relative" style={{ background: "#06060a" }}>
      <style>{`
        @keyframes auroraPulse1 { 0%,100%{opacity:0.55;transform:scale(1)} 50%{opacity:0.7;transform:scale(1.04)} }
        @keyframes auroraPulse2 { 0%,100%{opacity:0.45;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.06)} }
        @keyframes fadein { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .aurora1 { animation: auroraPulse1 8s ease-in-out infinite; }
        .aurora2 { animation: auroraPulse2 11s ease-in-out infinite; }
        .aurora3 { animation: auroraPulse1 9s ease-in-out infinite; animation-delay: 3s; }
        .glass-card {
          background: rgba(255,255,255,0.065);
          backdrop-filter: blur(28px) saturate(1.8);
          -webkit-backdrop-filter: blur(28px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.1) inset;
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.18);
          box-shadow: 0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.2), 0 1px 0 rgba(255,255,255,0.15) inset;
          transform: translateY(-2px);
        }
        .glass-panel { background: rgba(255,255,255,0.055); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
        .glass-search { background: rgba(255,255,255,0.06); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); transition: all 0.2s; }
        .glass-search:focus { outline: none; background: rgba(255,255,255,0.1); border-color: rgba(139,92,246,0.4); box-shadow: 0 0 0 3px rgba(139,92,246,0.1); }
        .pill-active { background: rgba(255,255,255,0.95); color: #06060a; box-shadow: 0 2px 16px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,1); }
        .pill-inactive { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); transition: all 0.2s; }
        .pill-inactive:hover { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.9); }
        .copy-btn { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); transition: all 0.2s; }
        .copy-btn:hover { background: rgba(255,255,255,0.18); transform: scale(1.05); }
        .tag-chip { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); }
        .fade-in { animation: fadein 0.35s ease both; }
        .type-badge-design { background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.25); color: #a78bfa; }
        .type-badge-dev { background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.22); color: #34d399; }
        .type-badge-both { background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.2); color: #fbbf24; }
      `}</style>

      {/* Midnight Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="aurora1" style={{ position:"absolute", top:"-20%", left:"-10%", width:"70%", height:"70%", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(124,92,255,0.35) 0%, rgba(99,55,255,0.12) 50%, transparent 70%)", filter:"blur(40px)" }} />
        <div className="aurora2" style={{ position:"absolute", bottom:"-20%", right:"-10%", width:"65%", height:"65%", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(16,185,129,0.28) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)", filter:"blur(50px)" }} />
        <div className="aurora3" style={{ position:"absolute", top:"40%", left:"35%", width:"45%", height:"45%", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(79,70,229,0.18) 0%, transparent 70%)", filter:"blur(60px)" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 py-8 flex flex-col gap-5">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center glass-panel">
              <Command size={15} style={{ color: "#a78bfa" }} strokeWidth={1.8} />
            </div>
            <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>Shiuli's Dark Vision</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full type-badge-design">{filtered.length} prompts</span>
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-4xl font-light tracking-tight" style={{ color: "rgba(255,255,255,0.92)", letterSpacing: "-0.02em" }}>
            AI Prompt Library<span style={{ color: "#8b5cf6", marginLeft: "2px" }}>_</span>
          </h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>18 curated prompts for design & development workflows</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.35)" }} strokeWidth={1.8} />
          <input type="text" placeholder="Search prompts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-search w-full py-3 pl-11 pr-4 rounded-2xl text-sm" style={{ color: "rgba(255,255,255,0.88)" }} />
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "pill-active" : "pill-inactive"}`}>
              {cat === "All" && <span className="mr-1.5 text-[10px] font-bold" style={{ color: activeCategory === "All" ? "#8b5cf6" : "rgba(255,255,255,0.5)" }}>{PROMPTS.length}</span>}
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((p, i) => {
            const Icon = p.icon;
            const badgeClass = p.type === "Design" ? "type-badge-design" : p.type === "Dev" ? "type-badge-dev" : "type-badge-both";
            return (
              <div key={p.id} className="glass-card rounded-2xl p-5 flex flex-col gap-3 fade-in" style={{ animationDelay: `${i * 35}ms` }}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center glass-panel shrink-0">
                      <Icon size={14} style={{ color: "rgba(255,255,255,0.6)" }} strokeWidth={1.5} />
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeClass}`}>{p.type}</span>
                  </div>
                  <button onClick={() => handleCopy(p.id)} className="copy-btn w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                    {copiedId === p.id ? <Check size={12} style={{ color: "#34d399" }} /> : <Copy size={12} style={{ color: "rgba(255,255,255,0.5)" }} />}
                  </button>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1.5 leading-tight" style={{ color: "rgba(255,255,255,0.9)" }}>{p.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>
                </div>
                <div className="flex gap-1.5 mt-auto flex-wrap">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag-chip text-[10px] px-2 py-0.5 rounded-full" style={{ color: "rgba(255,255,255,0.4)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="glass-card rounded-2xl flex flex-col items-center justify-center py-16 text-center">
            <Search size={26} style={{ color: "rgba(255,255,255,0.2)", marginBottom: "12px" }} />
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>No prompts match your filter</p>
          </div>
        )}

        {/* FAB */}
        <div className="flex items-center justify-center gap-3 pb-2">
          <button className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all"
            style={{ background: "rgba(139,92,246,0.9)", border: "1px solid rgba(139,92,246,0.5)", color: "#fff", boxShadow: "0 4px 24px rgba(139,92,246,0.3)" }}>
            <Plus size={15} strokeWidth={2} /> Add Prompt
          </button>
          <button className="copy-btn w-11 h-11 rounded-full flex items-center justify-center" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Mic size={15} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  );
}
