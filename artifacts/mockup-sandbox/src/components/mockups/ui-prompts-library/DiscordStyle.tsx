import React, { useState } from "react";
import { Search, Hash, Plus, Settings, Bell, Inbox, Copy, Check, Star, Zap, Mic } from "lucide-react";

const CATEGORIES = ["Writing", "Coding", "Analysis", "Creative", "Research"];

const PROMPTS = [
  {
    id: 1,
    title: "React Component Generator",
    description: "Generate functional React components with Tailwind CSS and Lucide icons.",
    category: "Coding",
    tags: ["React", "Tailwind", "Frontend"],
    premium: true,
  },
  {
    id: 2,
    title: "Executive Summary Writer",
    description: "Condense long reports into punchy, actionable executive summaries.",
    category: "Writing",
    tags: ["Business", "Summary"],
    premium: false,
  },
  {
    id: 3,
    title: "SQL Query Optimizer",
    description: "Analyze and optimize complex SQL queries for better performance.",
    category: "Coding",
    tags: ["SQL", "Database"],
    premium: false,
  },
  {
    id: 4,
    title: "Creative Story Spark",
    description: "Generate 5 unique story premises based on a single genre and theme.",
    category: "Creative",
    tags: ["Fiction", "Ideas"],
    premium: true,
  },
  {
    id: 5,
    title: "Competitor Analysis Matrix",
    description: "Create a detailed comparison matrix of top competitors in a market.",
    category: "Research",
    tags: ["Market", "Strategy"],
    premium: false,
  },
  {
    id: 6,
    title: "Data Trend Spotter",
    description: "Identify subtle trends and anomalies in provided datasets.",
    category: "Analysis",
    tags: ["Data", "Trends"],
    premium: false,
  },
  {
    id: 7,
    title: "SEO Blog Post Outliner",
    description: "Structure a high-ranking blog post with H2/H3 tags and keyword placement.",
    category: "Writing",
    tags: ["SEO", "Content"],
    premium: true,
  },
  {
    id: 8,
    title: "API Endpoint Designer",
    description: "Design RESTful API endpoints with standard naming and status codes.",
    category: "Coding",
    tags: ["API", "Backend"],
    premium: false,
  },
];

const ORB_TAGS = ["glass", "retro lights", "dark sphere", "motion", "flare", "neural"];

export function DiscordStyle() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPrompts = PROMPTS.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="flex h-screen w-full font-sans overflow-hidden"
      style={{ backgroundColor: "#0d0e1a", color: "#c9cdd4" }}
    >
      {/* CSS for orb glow + grid + animations */}
      <style>{`
        @keyframes orbPulse {
          0%, 100% { box-shadow: 0 0 80px 30px rgba(88,101,242,0.35), 0 0 160px 60px rgba(88,101,242,0.15), inset 0 0 60px rgba(140,100,255,0.2); }
          50% { box-shadow: 0 0 100px 40px rgba(88,101,242,0.45), 0 0 200px 80px rgba(88,101,242,0.2), inset 0 0 80px rgba(140,100,255,0.3); }
        }
        @keyframes floatTag {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .orb {
          animation: orbPulse 4s ease-in-out infinite;
        }
        .float-tag-1 { animation: floatTag 3s ease-in-out infinite; }
        .float-tag-2 { animation: floatTag 3.4s ease-in-out infinite 0.4s; }
        .float-tag-3 { animation: floatTag 2.8s ease-in-out infinite 0.8s; }
        .float-tag-4 { animation: floatTag 3.6s ease-in-out infinite 1.2s; }
        .float-tag-5 { animation: floatTag 3.2s ease-in-out infinite 0.2s; }
        .float-tag-6 { animation: floatTag 3.8s ease-in-out infinite 0.6s; }
        .prompt-card { animation: fadeInUp 0.4s ease both; }
        .blurple-glow { box-shadow: 0 0 20px rgba(88,101,242,0.3); }
        .grid-bg {
          background-image:
            linear-gradient(rgba(88,101,242,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88,101,242,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .card-glass {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(88,101,242,0.2);
          backdrop-filter: blur(8px);
        }
        .card-glass:hover {
          background: rgba(88,101,242,0.08);
          border-color: rgba(88,101,242,0.4);
          box-shadow: 0 0 24px rgba(88,101,242,0.15);
        }
        .tag-pill {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(4px);
          transition: all 0.2s;
        }
        .tag-pill:hover {
          background: rgba(88,101,242,0.25);
          border-color: rgba(88,101,242,0.5);
        }
        .side-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(201,205,212,0.25);
          font-weight: 600;
        }
      `}</style>

      {/* Server Sidebar */}
      <div
        className="w-[72px] flex flex-col items-center py-3 gap-2 shrink-0 border-r"
        style={{ backgroundColor: "#080910", borderColor: "rgba(88,101,242,0.15)" }}
      >
        <div
          className="w-12 h-12 rounded-[16px] flex items-center justify-center text-white cursor-pointer transition-all duration-200 blurple-glow"
          style={{ background: "linear-gradient(135deg, #5865F2, #8b5cf6)" }}
        >
          <Zap size={24} />
        </div>
        <div className="w-8 h-[1px] rounded-full my-1" style={{ background: "rgba(88,101,242,0.3)" }} />
        {["A", "B", "C"].map((letter, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-[24px] hover:rounded-[16px] flex items-center justify-center text-white cursor-pointer transition-all duration-200 group relative"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(88,101,242,0.15)",
            }}
          >
            <span className="font-bold text-sm" style={{ color: "#c9cdd4" }}>{letter}</span>
            <div
              className="absolute left-0 w-1 bg-white rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-200"
              style={{ height: "20px" }}
            />
          </div>
        ))}
        <div
          className="w-12 h-12 rounded-[24px] hover:rounded-[16px] flex items-center justify-center cursor-pointer transition-all duration-200 mt-auto"
          style={{ color: "#5865F2", background: "rgba(88,101,242,0.1)", border: "1px solid rgba(88,101,242,0.2)" }}
        >
          <Plus size={20} />
        </div>
      </div>

      {/* Channels Sidebar */}
      <div
        className="w-[220px] flex flex-col shrink-0"
        style={{ backgroundColor: "#11121f", borderRight: "1px solid rgba(88,101,242,0.12)" }}
      >
        <div
          className="h-12 flex items-center px-4 font-bold text-sm cursor-pointer"
          style={{ color: "#e3e5e8", borderBottom: "1px solid rgba(88,101,242,0.12)" }}
        >
          Prompt Library
          <div className="ml-auto w-2 h-2 rounded-full" style={{ background: "#23a559", boxShadow: "0 0 6px #23a559" }} />
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="text-xs font-bold uppercase tracking-wider px-2 mb-2 mt-2" style={{ color: "rgba(201,205,212,0.4)" }}>
            Categories
          </div>
          <div
            className={`flex items-center gap-2 px-2 py-[6px] rounded cursor-pointer mb-[2px] text-sm font-medium ${activeCategory === "All" ? "" : "hover:bg-white/5"}`}
            style={
              activeCategory === "All"
                ? { background: "rgba(88,101,242,0.25)", color: "#fff", border: "1px solid rgba(88,101,242,0.3)" }
                : { color: "rgba(201,205,212,0.55)" }
            }
            onClick={() => setActiveCategory("All")}
          >
            <Hash size={16} style={{ color: activeCategory === "All" ? "#8b9cf8" : "rgba(201,205,212,0.3)" }} />
            all-prompts
          </div>
          {CATEGORIES.map((cat) => (
            <div
              key={cat}
              className={`flex items-center gap-2 px-2 py-[6px] rounded cursor-pointer mb-[2px] text-sm font-medium transition-all ${activeCategory === cat ? "" : "hover:bg-white/5"}`}
              style={
                activeCategory === cat
                  ? { background: "rgba(88,101,242,0.25)", color: "#fff", border: "1px solid rgba(88,101,242,0.3)" }
                  : { color: "rgba(201,205,212,0.55)" }
              }
              onClick={() => setActiveCategory(cat)}
            >
              <Hash size={16} style={{ color: activeCategory === cat ? "#8b9cf8" : "rgba(201,205,212,0.3)" }} />
              {cat.toLowerCase()}
            </div>
          ))}

          <div className="text-xs font-bold uppercase tracking-wider px-2 mb-2 mt-4" style={{ color: "rgba(201,205,212,0.4)" }}>
            Boost
          </div>
          <div className="flex items-center gap-2 px-2 py-[6px] rounded cursor-pointer text-sm font-medium" style={{ color: "rgba(241,196,15,0.8)" }}>
            <Star size={16} style={{ color: "#f1c40f" }} />
            <span style={{ background: "linear-gradient(90deg, #f1c40f, #e67e22)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              pro-prompts
            </span>
          </div>
        </div>

        <div
          className="h-[52px] flex items-center px-2 gap-2 shrink-0"
          style={{ background: "#0d0e1a", borderTop: "1px solid rgba(88,101,242,0.12)" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm relative cursor-pointer"
            style={{ background: "linear-gradient(135deg, #5865F2, #8b5cf6)" }}
          >
            D
            <div className="absolute bottom-0 right-0 w-[10px] h-[10px] rounded-full border-2" style={{ background: "#23a559", borderColor: "#0d0e1a" }} />
          </div>
          <div>
            <div className="text-xs font-bold" style={{ color: "#e3e5e8" }}>DevUser</div>
            <div className="text-[10px]" style={{ color: "rgba(201,205,212,0.4)" }}>Online</div>
          </div>
          <Settings size={16} className="ml-auto cursor-pointer" style={{ color: "rgba(201,205,212,0.4)" }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 relative overflow-hidden" style={{ background: "#0d0e1a" }}>
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        {/* Ambient purple glow blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "600px", height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(88,101,242,0.12) 0%, transparent 70%)",
            top: "-100px", left: "10%",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: "400px", height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            bottom: "0", right: "5%",
          }}
        />

        {/* Top Bar */}
        <div
          className="h-12 shrink-0 flex items-center px-4 justify-between z-10 relative"
          style={{ borderBottom: "1px solid rgba(88,101,242,0.15)", background: "rgba(13,14,26,0.8)", backdropFilter: "blur(10px)" }}
        >
          <div className="flex items-center gap-2 font-bold" style={{ color: "#e3e5e8" }}>
            <Hash size={20} style={{ color: "#5865F2" }} />
            {activeCategory === "All" ? "all-prompts" : activeCategory.toLowerCase()}
          </div>
          <div className="flex items-center gap-3">
            <Bell size={18} className="cursor-pointer" style={{ color: "rgba(201,205,212,0.5)" }} />
            <Inbox size={18} className="cursor-pointer" style={{ color: "rgba(201,205,212,0.5)" }} />
            <div className="relative">
              <input
                type="text"
                placeholder="Search prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-sm rounded-md px-3 py-1.5 pr-8 outline-none w-[200px] transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(88,101,242,0.25)",
                  color: "#c9cdd4",
                }}
              />
              <Search size={14} className="absolute right-2 top-2" style={{ color: "rgba(201,205,212,0.4)" }} />
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto relative z-10">
          {/* Hero Orb Section */}
          <div className="relative flex flex-col items-center justify-center pt-8 pb-6 overflow-hidden">
            {/* Side labels */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <span className="side-label">{ "{ VIDEO AI }" }</span>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <span className="side-label">UNIQUE APPROACH →</span>
            </div>

            {/* Orb */}
            <div className="relative flex items-center justify-center mb-4" style={{ width: "180px", height: "180px" }}>
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full orb"
                style={{
                  background: "radial-gradient(circle at 35% 35%, rgba(140,100,255,0.4) 0%, rgba(88,101,242,0.3) 35%, rgba(20,18,60,0.9) 65%, rgba(10,8,30,1) 100%)",
                }}
              />
              {/* Inner orb surface */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "8px",
                  background: "radial-gradient(circle at 32% 28%, rgba(200,180,255,0.6) 0%, rgba(100,80,200,0.4) 25%, rgba(40,30,100,0.95) 60%, rgba(10,8,30,1) 100%)",
                }}
              />
              {/* Specular highlight */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "36px", height: "22px",
                  top: "28px", left: "38px",
                  background: "radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 100%)",
                  filter: "blur(3px)",
                }}
              />
              {/* Bottom rim light */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "60px", height: "14px",
                  bottom: "24px",
                  background: "radial-gradient(ellipse, rgba(255,200,100,0.5) 0%, transparent 100%)",
                  filter: "blur(4px)",
                }}
              />
            </div>

            {/* Floating tags around orb */}
            <div className="absolute" style={{ top: "30px", left: "calc(50% - 220px)" }}>
              <div className="tag-pill float-tag-1 px-3 py-1 rounded-full text-xs font-medium cursor-pointer" style={{ color: "#c9cdd4" }}>
                glass ✏
              </div>
            </div>
            <div className="absolute" style={{ top: "55px", left: "calc(50% - 280px)" }}>
              <div className="tag-pill float-tag-2 px-3 py-1 rounded-full text-xs font-medium cursor-pointer" style={{ color: "#c9cdd4" }}>
                retro lights
              </div>
            </div>
            <div className="absolute" style={{ top: "90px", right: "calc(50% - 240px)" }}>
              <div className="tag-pill float-tag-3 px-3 py-1 rounded-full text-xs font-medium cursor-pointer flex items-center gap-1.5" style={{ color: "#c9cdd4", border: "1px solid rgba(88,101,242,0.4)" }}>
                dark sphere <span className="text-[10px] opacity-60">×</span>
              </div>
            </div>
            <div className="absolute" style={{ bottom: "60px", left: "calc(50% - 250px)" }}>
              <div className="tag-pill float-tag-4 px-3 py-1 rounded-full text-xs font-medium cursor-pointer" style={{ color: "#c9cdd4" }}>
                ✏ motion
              </div>
            </div>
            <div className="absolute" style={{ bottom: "40px", right: "calc(50% - 200px)" }}>
              <div className="tag-pill float-tag-5 px-3 py-1 rounded-full text-xs font-medium cursor-pointer" style={{ color: "#c9cdd4" }}>
                flare ✏
              </div>
            </div>
            <div className="absolute" style={{ top: "20px", right: "calc(50% - 180px)" }}>
              <div className="tag-pill float-tag-6 px-3 py-1 rounded-full text-xs font-medium cursor-pointer" style={{ color: "#c9cdd4" }}>
                neural
              </div>
            </div>

            {/* Heading */}
            <p className="text-xs mb-1" style={{ color: "rgba(201,205,212,0.45)", letterSpacing: "0.1em" }}>Hi, {activeCategory === "All" ? "Explorer" : activeCategory}</p>
            <h1 className="text-2xl font-bold text-center" style={{ color: "#fff" }}>
              Unleash Your Creativity
            </h1>
            <p className="text-sm mt-1" style={{ color: "rgba(201,205,212,0.45)" }}>
              {filteredPrompts.length} prompts in #{activeCategory === "All" ? "all-prompts" : activeCategory.toLowerCase()}
            </p>
          </div>

          {/* Prompt Cards Grid */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredPrompts.map((prompt, i) => (
                <div
                  key={prompt.id}
                  className="prompt-card card-glass rounded-xl p-4 flex flex-col cursor-pointer transition-all duration-200 relative"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {prompt.premium && (
                    <div
                      className="absolute -top-2 -right-2 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-10"
                      style={{ background: "linear-gradient(90deg, #f1c40f, #e67e22)", color: "#000" }}
                    >
                      <Star size={8} /> PRO
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#5865F2", boxShadow: "0 0 4px #5865F2" }}
                    />
                    <h3 className="font-semibold text-sm leading-tight" style={{ color: "#e3e5e8" }}>
                      {prompt.title}
                    </h3>
                  </div>

                  <p className="text-xs mb-3 flex-1 leading-relaxed" style={{ color: "rgba(201,205,212,0.55)" }}>
                    {prompt.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {prompt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded font-medium"
                        style={{ background: "rgba(88,101,242,0.15)", color: "#8b9cf8", border: "1px solid rgba(88,101,242,0.2)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCopy(prompt.id)}
                    className="w-full py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200"
                    style={
                      copiedId === prompt.id
                        ? { background: "#23a559", color: "#fff" }
                        : {
                            background: "linear-gradient(135deg, #5865F2, #8b5cf6)",
                            color: "#fff",
                            boxShadow: "0 2px 12px rgba(88,101,242,0.4)",
                          }
                    }
                  >
                    {copiedId === prompt.id ? (
                      <><Check size={12} /> Copied!</>
                    ) : (
                      <><Copy size={12} /> Copy Prompt</>
                    )}
                  </button>
                </div>
              ))}

              {filteredPrompts.length === 0 && (
                <div className="col-span-full py-12 flex flex-col items-center justify-center" style={{ color: "rgba(201,205,212,0.35)" }}>
                  <Search size={40} className="mb-3 opacity-40" />
                  <p className="text-sm">No prompts found.</p>
                </div>
              )}
            </div>
          </div>

          {/* Large ambient background text */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
            style={{ height: "80px" }}
          >
            <div
              className="text-[100px] font-black leading-none text-center"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(88,101,242,0.1)",
                letterSpacing: "-0.04em",
              }}
            >
              ambition
            </div>
          </div>
        </div>

        {/* Message Bar */}
        <div
          className="p-3 shrink-0 relative z-10"
          style={{ background: "rgba(13,14,26,0.9)", backdropFilter: "blur(10px)", borderTop: "1px solid rgba(88,101,242,0.15)" }}
        >
          <div
            className="rounded-xl px-4 py-2.5 flex items-center gap-3"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(88,101,242,0.2)" }}
          >
            <Mic size={16} style={{ color: "rgba(201,205,212,0.35)" }} />
            <span className="text-sm" style={{ color: "rgba(201,205,212,0.35)" }}>
              Message #{activeCategory === "All" ? "all-prompts" : activeCategory.toLowerCase()}
            </span>
            <div
              className="ml-auto w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: "linear-gradient(135deg, #f1c40f, #e67e22)", boxShadow: "0 0 12px rgba(241,196,15,0.4)" }}
            >
              <Mic size={14} style={{ color: "#000" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
