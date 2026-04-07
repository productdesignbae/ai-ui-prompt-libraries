import React, { useState } from "react";
import { Search, Copy, Check, Command, ArrowUp, Sparkles, Box, FileText, BarChart, Code, Library, Terminal } from "lucide-react";

const PROMPTS = [
  {
    id: 1,
    title: "System Architect Persona",
    description: "Act as a principal systems architect to design scalable, fault-tolerant microservices.",
    category: "Coding",
    icon: Code,
    tags: ["architecture", "backend"],
  },
  {
    id: 2,
    title: "Socratic Teacher",
    description: "Guides the user to the answer through continuous questioning rather than giving direct solutions.",
    category: "Creative",
    icon: Sparkles,
    tags: ["education", "teaching"],
  },
  {
    id: 3,
    title: "Data Trend Analyzer",
    description: "Analyze datasets to identify emerging trends, anomalies, and actionable business insights.",
    category: "Analysis",
    icon: BarChart,
    tags: ["data", "business"],
  },
  {
    id: 4,
    title: "Technical Docs Writer",
    description: "Convert messy code files into clean, structured markdown documentation.",
    category: "Writing",
    icon: FileText,
    tags: ["docs", "markdown"],
  },
  {
    id: 5,
    title: "Competitor Analysis Matrix",
    description: "Build a feature-by-feature comparison matrix against top industry competitors.",
    category: "Research",
    icon: Library,
    tags: ["strategy", "market"],
  },
  {
    id: 6,
    title: "React Performance Auditor",
    description: "Review React component code for unnecessary re-renders and memory leaks.",
    category: "Coding",
    icon: Terminal,
    tags: ["react", "frontend"],
  },
];

// Category pill positions around the orb (angle in degrees, radius offset)
const CATEGORY_PILLS = [
  { label: "Writing",  angle: -90,  rx: 155, ry: 120 },
  { label: "Coding",   angle: -25,  rx: 165, ry: 120 },
  { label: "Research", angle:  35,  rx: 160, ry: 120 },
  { label: "Analysis", angle:  90,  rx: 155, ry: 120 },
  { label: "Creative", angle: 150,  rx: 162, ry: 120 },
  { label: "All",      angle: 210,  rx: 155, ry: 120 },
];

// Generate star dots positioned in a halo ring
const STARS = Array.from({ length: 28 }, (_, i) => {
  const angle = (i / 28) * 360 + (i % 3) * 7;
  const r = 130 + (i % 5) * 8;
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * r,
    y: Math.sin(rad) * r,
    size: i % 4 === 0 ? 2.5 : 1.5,
    opacity: 0.3 + (i % 3) * 0.2,
  };
});

export function LinearStyle() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [inputVal, setInputVal] = useState("");

  const filteredPrompts = PROMPTS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="min-h-screen font-sans overflow-hidden"
      style={{ background: "#080808", color: "#ededed" }}
    >
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }
        @keyframes nebulaGlow {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.75; }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.9; }
        }
        @keyframes pillFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .orb-container { animation: orbFloat 5s ease-in-out infinite; }
        .nebula { animation: nebulaGlow 4s ease-in-out infinite; }
        .star-dot { animation: starTwinkle 2s ease-in-out infinite; }
        .pill-float { animation: pillFloat 3.5s ease-in-out infinite; }
        .card-fade { animation: fadeUp 0.35s ease both; }
        .card-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .card-item:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(255,255,255,0.14);
          box-shadow: 0 0 0 1px rgba(99,102,241,0.15), 0 4px 24px rgba(0,0,0,0.4);
        }
        .glow-pill {
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(15,15,20,0.85);
          backdrop-filter: blur(8px);
          transition: all 0.2s;
          box-shadow: 0 0 10px rgba(255,255,255,0.04), inset 0 0 8px rgba(255,255,255,0.02);
        }
        .glow-pill:hover {
          border-color: rgba(255,255,255,0.45);
          box-shadow: 0 0 16px rgba(120,120,255,0.3), inset 0 0 8px rgba(120,120,255,0.08);
        }
        .glow-pill.active {
          border-color: rgba(200,200,255,0.7);
          background: rgba(30,30,60,0.9);
          box-shadow: 0 0 18px rgba(120,120,255,0.5), inset 0 0 12px rgba(100,100,255,0.15);
          color: #fff;
        }
        .wave-path {
          fill: none;
          stroke: rgba(255,255,255,0.55);
          stroke-width: 1;
        }
        .search-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.2s;
        }
        .search-input:focus {
          outline: none;
          border-color: rgba(99,102,241,0.4);
        }
        .chat-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          transition: border-color 0.2s;
        }
        .chat-input:focus { outline: none; border-color: rgba(255,255,255,0.2); }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between px-8 pt-7 pb-4">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }}
          >
            <Box size={12} />
            UI Prompts Library
            <span className="w-1 h-1 rounded-full" style={{ background: "#6366f1" }} />
            v2.0
          </div>
        </div>
        <div className="relative group">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "rgba(255,255,255,0.3)" }}
          />
          <input
            type="text"
            placeholder="Search prompts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input pl-9 pr-10 py-2 text-sm rounded-lg w-[220px]"
            style={{ color: "#ededed" }}
          />
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <Command size={10} />K
          </div>
        </div>
      </div>

      {/* NeuroAstro Orb Hero */}
      <div className="relative flex items-center justify-center" style={{ height: "340px" }}>
        {/* Nebula background glow */}
        <div
          className="nebula absolute rounded-full pointer-events-none"
          style={{
            width: "340px", height: "340px",
            background: "radial-gradient(circle, rgba(60,80,200,0.22) 0%, rgba(40,60,160,0.14) 35%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "200px", height: "200px",
            background: "radial-gradient(circle, rgba(100,120,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Orb + stars container */}
        <div className="orb-container relative flex items-center justify-center" style={{ width: "260px", height: "260px" }}>

          {/* Star halo dots */}
          {STARS.map((star, i) => (
            <div
              key={i}
              className="star-dot absolute rounded-full bg-white"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `calc(50% + ${star.x}px - ${star.size / 2}px)`,
                top: `calc(50% + ${star.y}px - ${star.size / 2}px)`,
                opacity: star.opacity,
                animationDelay: `${(i * 0.15) % 2}s`,
              }}
            />
          ))}

          {/* Outer dashed orbit ring */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "260px", height: "260px",
              border: "1px dashed rgba(255,255,255,0.08)",
            }}
          />

          {/* Main orb */}
          <div
            className="absolute rounded-full overflow-hidden"
            style={{
              width: "200px", height: "200px",
              background: "radial-gradient(circle at 50% 50%, #0a0a14 0%, #050508 100%)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.12), 0 0 40px rgba(60,80,220,0.3), inset 0 0 30px rgba(40,60,180,0.15)",
            }}
          >
            {/* SVG concentric topographic wave lines */}
            <svg viewBox="0 0 200 200" width="200" height="200" style={{ position: "absolute", inset: 0 }}>
              {/* Outer waves */}
              <ellipse cx="100" cy="108" rx="88" ry="72" className="wave-path" style={{ opacity: 0.25 }} />
              <ellipse cx="100" cy="108" rx="76" ry="62" className="wave-path" style={{ opacity: 0.3 }} />
              {/* Mid waves - organic flowing shapes using paths */}
              <path
                d="M 30 110 Q 50 70 100 75 Q 150 80 172 115 Q 155 155 100 158 Q 45 162 30 110 Z"
                className="wave-path"
                style={{ opacity: 0.4 }}
              />
              <path
                d="M 46 110 Q 62 82 100 86 Q 138 90 156 112 Q 143 142 100 145 Q 57 148 46 110 Z"
                className="wave-path"
                style={{ opacity: 0.5 }}
              />
              <path
                d="M 60 110 Q 72 92 100 95 Q 128 98 142 112 Q 132 134 100 136 Q 68 138 60 110 Z"
                className="wave-path"
                style={{ opacity: 0.6 }}
              />
              <path
                d="M 72 110 Q 80 100 100 102 Q 120 104 128 112 Q 121 126 100 128 Q 79 130 72 110 Z"
                className="wave-path"
                style={{ opacity: 0.75 }}
              />
              {/* Innermost shape */}
              <path
                d="M 84 110 Q 88 104 100 105 Q 112 106 116 112 Q 112 120 100 121 Q 88 122 84 110 Z"
                className="wave-path"
                style={{ opacity: 0.9 }}
              />
              {/* Blue glow fill in centre */}
              <ellipse cx="100" cy="112" rx="30" ry="24" fill="rgba(60,100,255,0.18)" />
              <ellipse cx="100" cy="112" rx="18" ry="14" fill="rgba(80,120,255,0.25)" />
            </svg>

            {/* Center label */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              style={{ paddingTop: "8px" }}
            >
              <p className="text-xs font-light leading-snug" style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em" }}>
                Select<br />Sphere
              </p>
            </div>
          </div>

          {/* Floating category pills positioned around the orb */}
          {CATEGORY_PILLS.map(({ label, angle, rx, ry }, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * rx;
            const y = Math.sin(rad) * ry;
            const isActive = activeCategory === label;
            return (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`pill-float glow-pill absolute text-xs font-medium px-3.5 py-1.5 rounded-full cursor-pointer select-none ${isActive ? "active" : ""}`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                  animationDelay: `${i * 0.25}s`,
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Section label */}
      <div className="px-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
            {activeCategory === "All" ? "All Prompts" : activeCategory}
          </h2>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
            style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            {filteredPrompts.length}
          </span>
        </div>
        <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
          sorted by relevance
        </span>
      </div>

      {/* Prompt Cards */}
      <div className="px-8 pb-4">
        <div className="grid grid-cols-3 gap-3">
          {filteredPrompts.map((prompt, i) => {
            const Icon = prompt.icon;
            return (
              <div
                key={prompt.id}
                className="card-item card-fade rounded-xl p-4 flex flex-col"
                style={{ minHeight: "170px", animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.15)" }}
                  >
                    <Icon size={14} style={{ color: "#818cf8" }} />
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {prompt.category}
                  </span>
                </div>

                <h3 className="text-sm font-medium mb-1.5 leading-tight" style={{ color: "rgba(255,255,255,0.88)" }}>
                  {prompt.title}
                </h3>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: "rgba(255,255,255,0.42)" }}>
                  {prompt.description}
                </p>

                <div
                  className="flex items-center justify-between pt-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="flex gap-1.5 flex-wrap">
                    {prompt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-medium px-1.5 py-0.5 rounded"
                        style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.28)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleCopy(prompt.id)}
                    className="w-7 h-7 rounded-md flex items-center justify-center transition-all"
                    style={{
                      background: copiedId === prompt.id ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.05)",
                      border: copiedId === prompt.id ? "1px solid rgba(52,211,153,0.3)" : "1px solid rgba(255,255,255,0.06)",
                      color: copiedId === prompt.id ? "#34d399" : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {copiedId === prompt.id ? <Check size={12} /> : <Copy size={12} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPrompts.length === 0 && (
          <div
            className="flex flex-col items-center justify-center py-16 text-center rounded-xl"
            style={{ border: "1px dashed rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)" }}
          >
            <Search size={28} style={{ color: "rgba(255,255,255,0.15)", marginBottom: "12px" }} />
            <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>No prompts found</p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>Try selecting a different sphere above</p>
          </div>
        )}
      </div>

      {/* NeuroAstro-style chat input at bottom */}
      <div className="px-8 pb-7 pt-2">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="What do you want to know?"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="chat-input w-full py-3 px-4 text-sm rounded-2xl"
              style={{ color: "#ededed" }}
            />
          </div>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all"
            style={{
              background: inputVal ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: inputVal ? "0 0 16px rgba(255,255,255,0.2)" : "none",
            }}
          >
            <ArrowUp size={16} style={{ color: inputVal ? "#000" : "rgba(255,255,255,0.4)" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
