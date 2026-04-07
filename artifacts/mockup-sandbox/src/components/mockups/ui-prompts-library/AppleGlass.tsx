import React, { useState } from "react";
import { Search, Copy, Check, Mic, Plus, Command, Sparkles, Code, FileText, BarChart, BookOpen, Lightbulb } from "lucide-react";

const CATEGORIES = ["All", "Writing", "Coding", "Analysis", "Creative", "Research"];

const PROMPTS = [
  {
    id: 1,
    title: "Tone Adapter",
    category: "Writing",
    description: "Rewrite the following text to match a specific tone, ranging from corporate professional to casual gen-z.",
    tags: ["Tone", "Copywriting"],
    icon: FileText,
    accent: "rgba(180,155,240,0.25)",
  },
  {
    id: 2,
    title: "React Component Refactor",
    category: "Coding",
    description: "Analyze this React component and refactor it for better performance, readability, and modern hooks.",
    tags: ["React", "Optimization"],
    icon: Code,
    accent: "rgba(140,200,185,0.25)",
  },
  {
    id: 3,
    title: "Data Insight Generator",
    category: "Analysis",
    description: "Extract key actionable insights from this raw dataset and present them in a concise bulleted list.",
    tags: ["Data", "Summary"],
    icon: BarChart,
    accent: "rgba(245,195,150,0.25)",
  },
  {
    id: 4,
    title: "World Building Context",
    category: "Creative",
    description: "Generate a detailed backstory for a sci-fi city, including its economy, factions, and hidden secrets.",
    tags: ["Fiction", "Brainstorm"],
    icon: Sparkles,
    accent: "rgba(200,170,240,0.25)",
  },
  {
    id: 5,
    title: "Literature Review",
    category: "Research",
    description: "Summarize the provided academic papers and highlight the conflicting arguments between them.",
    tags: ["Academic", "Summary"],
    icon: BookOpen,
    accent: "rgba(160,195,230,0.25)",
  },
  {
    id: 6,
    title: "Socratic Teacher",
    category: "Creative",
    description: "Do not give me direct answers. Instead, ask probing questions that guide me to the solution myself.",
    tags: ["Education", "Teaching"],
    icon: Lightbulb,
    accent: "rgba(240,205,160,0.25)",
  },
];

export function AppleGlass() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPrompts = PROMPTS.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      (p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="min-h-screen w-full font-sans overflow-hidden relative"
      style={{
        background: "linear-gradient(135deg, #dcd5f0 0%, #cde0d8 35%, #e8d5c8 65%, #d5e0f0 100%)",
        letterSpacing: "0.01em",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        .apple-glass-bg {
          background: linear-gradient(135deg, #dcd5f0 0%, #cde0d8 35%, #e8d5c8 65%, #d5e0f0 100%);
        }
        .glass-panel {
          background: rgba(255,255,255,0.38);
          backdrop-filter: blur(28px) saturate(1.8);
          -webkit-backdrop-filter: blur(28px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.65);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.7) inset;
        }
        .glass-panel-dark {
          background: rgba(20,18,28,0.85);
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 4px 24px rgba(0,0,0,0.25);
        }
        .glass-pill-active {
          background: rgba(255,255,255,0.95);
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          border: 1px solid rgba(255,255,255,1);
        }
        .glass-pill-inactive {
          background: rgba(255,255,255,0.22);
          border: 1px solid rgba(255,255,255,0.42);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .glass-pill-inactive:hover {
          background: rgba(255,255,255,0.38);
        }
        .glass-card {
          background: rgba(255,255,255,0.32);
          backdrop-filter: blur(24px) saturate(1.6);
          -webkit-backdrop-filter: blur(24px) saturate(1.6);
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.8) inset;
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          background: rgba(255,255,255,0.48);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.9) inset;
          transform: translateY(-2px);
        }
        .glass-search {
          background: rgba(255,255,255,0.3);
          backdrop-filter: blur(20px) saturate(1.6);
          -webkit-backdrop-filter: blur(20px) saturate(1.6);
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .glass-search:focus {
          outline: none;
          background: rgba(255,255,255,0.48);
          border-color: rgba(255,255,255,0.9);
        }
        .copy-btn {
          background: rgba(255,255,255,0.35);
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(12px);
          transition: all 0.2s;
        }
        .copy-btn:hover {
          background: rgba(255,255,255,0.65);
          transform: scale(1.05);
        }
        .tag-pill {
          background: rgba(255,255,255,0.3);
          border: 1px solid rgba(255,255,255,0.5);
        }
        .circle-window {
          border: 1.5px solid rgba(255,255,255,0.7);
          box-shadow: 0 2px 16px rgba(0,0,0,0.1) inset, 0 0 0 6px rgba(255,255,255,0.2);
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadein 0.3s ease both; }
      `}</style>

      {/* Pastel color blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position:"absolute", top:"-8%", left:"-5%", width:"55%", height:"55%", borderRadius:"50%", background:"rgba(185,160,235,0.35)", filter:"blur(80px)" }} />
        <div style={{ position:"absolute", top:"10%", right:"-8%", width:"50%", height:"50%", borderRadius:"50%", background:"rgba(130,200,180,0.3)", filter:"blur(90px)" }} />
        <div style={{ position:"absolute", bottom:"-10%", left:"10%", width:"55%", height:"50%", borderRadius:"50%", background:"rgba(245,195,155,0.3)", filter:"blur(80px)" }} />
        <div style={{ position:"absolute", bottom:"5%", right:"5%", width:"40%", height:"40%", borderRadius:"50%", background:"rgba(160,200,240,0.25)", filter:"blur(70px)" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 py-8 flex flex-col gap-6">

        {/* Header row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.8)", backdropFilter: "blur(12px)" }}
            >
              <Command size={16} style={{ color: "rgba(60,40,100,0.8)" }} strokeWidth={1.8} />
            </div>
            <span className="text-sm font-medium" style={{ color: "rgba(40,30,70,0.7)" }}>Prompt Library</span>
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.7)", backdropFilter: "blur(12px)" }}
          >
            <span className="text-xs font-semibold" style={{ color: "rgba(40,30,70,0.7)" }}>6</span>
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-4xl font-light tracking-tight" style={{ color: "rgba(30,20,55,0.85)" }}>
            Your prompts<span style={{ color: "rgba(120,100,180,0.7)", marginLeft: "2px" }}>|</span>
          </h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: "rgba(60,40,100,0.45)" }}
            strokeWidth={1.8}
          />
          <input
            type="text"
            placeholder="Search prompts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-search w-full py-3 pl-11 pr-4 rounded-2xl text-sm"
            style={{ color: "rgba(30,20,55,0.85)", fontFamily: "Inter, sans-serif" }}
          />
        </div>

        {/* Category pills — iOS Notes style */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive ? "glass-pill-active" : "glass-pill-inactive"
                }`}
                style={{
                  color: isActive ? "rgba(30,20,55,0.9)" : "rgba(40,30,70,0.65)",
                }}
              >
                {cat === "All" && (
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{
                      background: isActive ? "rgba(110,80,200,0.15)" : "rgba(255,255,255,0.4)",
                      color: isActive ? "rgba(90,60,180,0.9)" : "rgba(60,40,100,0.6)",
                    }}
                  >
                    {PROMPTS.length}
                  </span>
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured tall card — Place-card glass style */}
        {filteredPrompts.length > 0 && (
          <div
            className="glass-card rounded-3xl p-5 fade-in flex gap-4"
            style={{
              background: "rgba(255,255,255,0.36)",
              minHeight: "130px",
            }}
          >
            {/* Circular window */}
            <div
              className="circle-window rounded-full shrink-0 flex items-center justify-center overflow-hidden"
              style={{
                width: "88px",
                height: "88px",
                background: "linear-gradient(135deg, rgba(185,160,235,0.5) 0%, rgba(130,200,180,0.5) 100%)",
                alignSelf: "center",
              }}
            >
              {React.createElement(filteredPrompts[0].icon, {
                size: 28,
                style: { color: "rgba(60,40,120,0.6)" },
                strokeWidth: 1.4,
              })}
            </div>

            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest mb-1" style={{ color: "rgba(80,60,140,0.55)" }}>
                  {filteredPrompts[0].category}
                </p>
                <h2 className="text-xl font-medium leading-tight mb-1.5" style={{ color: "rgba(25,18,45,0.88)" }}>
                  {filteredPrompts[0].title}
                </h2>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(40,30,70,0.55)" }}>
                  {filteredPrompts[0].description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-1.5">
                  {filteredPrompts[0].tags.map((tag) => (
                    <span key={tag} className="tag-pill text-[10px] px-2.5 py-1 rounded-full font-medium" style={{ color: "rgba(60,40,100,0.65)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleCopy(filteredPrompts[0].id)}
                  className="copy-btn w-8 h-8 rounded-full flex items-center justify-center"
                >
                  {copiedId === filteredPrompts[0].id ? (
                    <Check size={13} style={{ color: "rgba(40,160,100,0.9)" }} />
                  ) : (
                    <Copy size={13} style={{ color: "rgba(60,40,100,0.6)" }} />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Card grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredPrompts.slice(1).map((prompt, i) => {
            const Icon = prompt.icon;
            const isDark = i === 0;
            return (
              <div
                key={prompt.id}
                className={`rounded-3xl p-4 flex flex-col gap-3 fade-in ${isDark ? "glass-panel-dark" : "glass-card"}`}
                style={{
                  minHeight: "155px",
                  animationDelay: `${i * 40}ms`,
                  ...(isDark
                    ? {}
                    : {
                        background: `linear-gradient(135deg, ${prompt.accent} 0%, rgba(255,255,255,0.32) 100%)`,
                      }),
                }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.45)",
                      border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.7)",
                    }}
                  >
                    <Icon size={14} style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(60,40,100,0.65)" }} strokeWidth={1.6} />
                  </div>
                  <button
                    onClick={() => handleCopy(prompt.id)}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.4)",
                      border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.65)",
                    }}
                  >
                    {copiedId === prompt.id ? (
                      <Check size={11} style={{ color: isDark ? "#5ef0a0" : "rgba(40,160,100,0.9)" }} />
                    ) : (
                      <Copy size={11} style={{ color: isDark ? "rgba(255,255,255,0.55)" : "rgba(60,40,100,0.55)" }} />
                    )}
                  </button>
                </div>

                <div>
                  <p
                    className="text-[10px] font-medium uppercase tracking-wider mb-1"
                    style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(80,60,140,0.5)" }}
                  >
                    {prompt.category}
                  </p>
                  <h3
                    className="text-base font-medium leading-tight mb-1.5"
                    style={{ color: isDark ? "rgba(255,255,255,0.9)" : "rgba(25,18,45,0.85)" }}
                  >
                    {prompt.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: isDark ? "rgba(255,255,255,0.45)" : "rgba(40,30,70,0.5)" }}
                  >
                    {prompt.description.length > 72 ? prompt.description.slice(0, 72) + "…" : prompt.description}
                  </p>
                </div>

                <div className="flex gap-1.5 mt-auto">
                  {prompt.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.35)",
                        border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.55)",
                        color: isDark ? "rgba(255,255,255,0.5)" : "rgba(60,40,100,0.6)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="glass-card rounded-3xl flex flex-col items-center justify-center py-16 text-center">
            <Search size={28} style={{ color: "rgba(80,60,140,0.3)", marginBottom: "12px" }} strokeWidth={1.4} />
            <p className="text-sm font-medium" style={{ color: "rgba(40,30,70,0.5)" }}>No prompts found</p>
            <p className="text-xs mt-1" style={{ color: "rgba(60,40,100,0.35)" }}>Try a different category</p>
          </div>
        )}

        {/* FAB — iOS Notes + mic button */}
        <div className="flex items-center justify-center gap-3 pb-2 pt-1">
          <button
            className="flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all"
            style={{
              background: "rgba(25,18,40,0.82)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(16px)",
              color: "rgba(255,255,255,0.85)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
          >
            <Plus size={16} strokeWidth={2} />
            New Prompt
          </button>
          <button
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{
              background: "rgba(25,18,40,0.82)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(16px)",
              color: "rgba(255,255,255,0.6)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
          >
            <Mic size={16} strokeWidth={1.8} />
          </button>
        </div>

      </div>
    </div>
  );
}
