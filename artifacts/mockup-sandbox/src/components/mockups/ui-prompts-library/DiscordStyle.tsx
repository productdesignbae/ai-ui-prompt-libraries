import React, { useState } from "react";
import { Search, Hash, Plus, Settings, Bell, Inbox, HelpCircle, Copy, Check, Star, Zap } from "lucide-react";

// Mock Data
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
      className="flex h-screen w-full font-sans text-[#dbdee1] overflow-hidden"
      style={{ backgroundColor: "#1e1f22" }}
    >
      {/* Servers Sidebar (Leftmost) */}
      <div className="w-[72px] flex flex-col items-center py-3 gap-2 shrink-0 bg-[#1e1f22]">
        <div className="w-12 h-12 bg-[#5865F2] rounded-[16px] flex items-center justify-center text-white cursor-pointer hover:rounded-[16px] transition-all duration-200">
          <Zap size={28} />
        </div>
        <div className="w-8 h-[2px] bg-[#313338] rounded-full my-1"></div>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] hover:bg-[#5865F2] flex items-center justify-center text-white cursor-pointer transition-all duration-200 relative group"
          >
            <span className="font-bold text-lg">{String.fromCharCode(64 + i)}</span>
            <div className="absolute left-[-16px] w-2 h-0 bg-white rounded-r-full group-hover:h-5 transition-all duration-200"></div>
          </div>
        ))}
        <div className="w-12 h-12 bg-[#313338] rounded-[24px] hover:rounded-[16px] hover:bg-[#23a559] flex items-center justify-center text-[#23a559] hover:text-white cursor-pointer transition-all duration-200 mt-2">
          <Plus size={24} />
        </div>
      </div>

      {/* Channels Sidebar (Inner Left) */}
      <div className="w-[240px] flex flex-col shrink-0 bg-[#2b2d31] rounded-tl-lg overflow-hidden flex-1 max-h-screen">
        <div className="h-12 flex items-center px-4 font-bold shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:bg-[#313338] cursor-pointer transition-colors">
          Prompt Library
          <div className="ml-auto w-2 h-2 rounded-full bg-[#23a559] shadow-[0_0_0_4px_#2b2d31]"></div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-[#1a1b1e] scrollbar-track-transparent">
          <div className="mb-4">
            <div className="text-xs font-bold text-[#949ba4] uppercase tracking-wider px-2 mb-1 hover:text-[#dbdee1] cursor-pointer flex items-center justify-between">
              Categories <Plus size={14} />
            </div>
            
            <div
              className={`flex items-center gap-2 px-2 py-[6px] rounded cursor-pointer group mb-[2px] ${
                activeCategory === "All" ? "bg-[#404249] text-white" : "text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1]"
              }`}
              onClick={() => setActiveCategory("All")}
            >
              <Hash size={20} className="text-[#80848e]" />
              <span className="font-medium text-[15px]">all-prompts</span>
            </div>
            
            {CATEGORIES.map((cat) => (
              <div
                key={cat}
                className={`flex items-center gap-2 px-2 py-[6px] rounded cursor-pointer group mb-[2px] ${
                  activeCategory === cat ? "bg-[#404249] text-white" : "text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1]"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                <Hash size={20} className="text-[#80848e]" />
                <span className="font-medium text-[15px]">{cat.toLowerCase()}</span>
                {cat === "Coding" && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100"></div>
                )}
              </div>
            ))}
          </div>

          <div>
            <div className="text-xs font-bold text-[#949ba4] uppercase tracking-wider px-2 mb-1 hover:text-[#dbdee1] cursor-pointer">
              Premium
            </div>
            <div className="flex items-center gap-2 px-2 py-[6px] rounded cursor-pointer text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1]">
              <Star size={20} className="text-[#f1c40f]" />
              <span className="font-medium text-[15px] bg-clip-text text-transparent bg-gradient-to-r from-[#f1c40f] to-[#e67e22]">pro-prompts</span>
            </div>
          </div>
        </div>

        {/* User Profile Area */}
        <div className="h-[52px] bg-[#232428] flex items-center px-2 shrink-0 gap-2">
          <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center font-bold text-white relative cursor-pointer hover:opacity-80">
            D
            <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-[#23a559] border-[2px] border-[#232428] rounded-full"></div>
          </div>
          <div className="flex flex-col cursor-pointer">
            <span className="font-bold text-sm text-white leading-tight">DevUser</span>
            <span className="text-xs text-[#949ba4] leading-tight hover:underline">Online</span>
          </div>
          <div className="ml-auto flex gap-1">
            <div className="w-8 h-8 rounded flex items-center justify-center text-[#b5bac1] hover:bg-[#313338] hover:text-[#dbdee1] cursor-pointer">
              <Settings size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#313338] max-h-screen">
        {/* Top Header */}
        <div className="h-12 shrink-0 flex items-center px-4 border-b border-[#1e1f22] shadow-[0_1px_2px_rgba(0,0,0,0.1)] justify-between z-10">
          <div className="flex items-center gap-2 font-bold text-white">
            <Hash size={24} className="text-[#80848e]" />
            {activeCategory === "All" ? "all-prompts" : activeCategory.toLowerCase()}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-[#b5bac1]">
              <Bell size={20} className="cursor-pointer hover:text-[#dbdee1]" />
              <Inbox size={20} className="cursor-pointer hover:text-[#dbdee1]" />
              <HelpCircle size={20} className="cursor-pointer hover:text-[#dbdee1]" />
            </div>
            
            {/* Search Bar */}
            <div className="relative w-[240px]">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1e1f22] text-[#dbdee1] text-sm rounded px-2 py-1 outline-none focus:w-[320px] transition-all duration-200 placeholder-[#949ba4]"
              />
              <Search size={16} className="absolute right-2 top-1.5 text-[#949ba4]" />
            </div>
          </div>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-[#1a1b1e] scrollbar-track-transparent">
          <div className="max-w-5xl mx-auto">
            
            {/* Header / Welcome */}
            <div className="mb-8 border-b border-[#3f4147] pb-6">
              <div className="w-[68px] h-[68px] rounded-full bg-[#404249] flex items-center justify-center mb-4 text-white">
                <Hash size={40} />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome to #{activeCategory === "All" ? "all-prompts" : activeCategory.toLowerCase()}!
              </h1>
              <p className="text-[#b5bac1]">
                This is the start of the #{activeCategory === "All" ? "all-prompts" : activeCategory.toLowerCase()} channel. Find and share the best AI prompts.
              </p>
            </div>

            {/* Prompts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
              {filteredPrompts.map((prompt) => (
                <div
                  key={prompt.id}
                  className="bg-[#2b2d31] rounded-lg p-4 flex flex-col hover:bg-[#35373c] transition-colors border border-transparent hover:border-[#1e1f22] group relative"
                >
                  {prompt.premium && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#f1c40f] to-[#e67e22] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1 z-10">
                      <Star size={10} /> PRO
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-[#dbdee1] group-hover:text-white leading-tight">
                      {prompt.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-[#b5bac1] mb-4 flex-1 line-clamp-3">
                    {prompt.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {prompt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#1e1f22] text-[#dbdee1] px-2 py-0.5 rounded font-medium cursor-pointer hover:bg-[#5865F2] hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleCopy(prompt.id)}
                    className={`w-full py-2 rounded text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                      copiedId === prompt.id
                        ? "bg-[#23a559] text-white"
                        : "bg-[#5865F2] text-white hover:bg-[#4752c4] active:bg-[#3c45a5] shadow-[0_2px_0_#3c45a5] active:shadow-[0_0_0_#3c45a5] active:translate-y-[2px]"
                    }`}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check size={16} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy Prompt
                      </>
                    )}
                  </button>
                </div>
              ))}

              {filteredPrompts.length === 0 && (
                <div className="col-span-full py-12 flex flex-col items-center justify-center text-[#949ba4]">
                  <Search size={48} className="mb-4 opacity-50" />
                  <p>No prompts found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Message Input Area (Decorative) */}
        <div className="p-4 shrink-0 bg-[#313338]">
          <div className="bg-[#383a40] rounded-lg p-3 flex items-center text-[#949ba4]">
            <Plus size={24} className="mr-3 p-1 bg-[#b5bac1] rounded-full text-[#383a40] cursor-pointer hover:bg-[#dbdee1]" />
            <span className="text-sm">Message #{activeCategory === "All" ? "all-prompts" : activeCategory.toLowerCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
