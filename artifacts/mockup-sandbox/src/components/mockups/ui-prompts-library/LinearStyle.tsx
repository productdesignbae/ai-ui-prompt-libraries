import React, { useState } from "react";
import { Search, Copy, Check, Command, Terminal, Sparkles, Box, FileText, BarChart, Code, Library } from "lucide-react";

const PROMPTS = [
  {
    id: 1,
    title: "System Architect Persona",
    description: "Act as a principal systems architect to design scalable, fault-tolerant microservices.",
    category: "Coding",
    icon: Code,
    tags: ["architecture", "backend"],
    content: "Act as a principal systems architect. I need to design a scalable, fault-tolerant system for...",
  },
  {
    id: 2,
    title: "Socratic Teacher",
    description: "Guides the user to the answer through continuous questioning rather than giving direct solutions.",
    category: "Creative",
    icon: Sparkles,
    tags: ["education", "teaching"],
    content: "Act as a Socratic teacher. Do not give me direct answers. Instead, ask probing questions...",
  },
  {
    id: 3,
    title: "Data Trend Analyzer",
    description: "Analyze datasets to identify emerging trends, anomalies, and actionable business insights.",
    category: "Analysis",
    icon: BarChart,
    tags: ["data", "business"],
    content: "Analyze the following dataset. Identify the top 3 emerging trends and any notable anomalies...",
  },
  {
    id: 4,
    title: "Technical Documentation Writer",
    description: "Convert messy code files into clean, structured markdown documentation.",
    category: "Writing",
    icon: FileText,
    tags: ["docs", "markdown"],
    content: "Read the provided code and generate comprehensive technical documentation in markdown format...",
  },
  {
    id: 5,
    title: "Competitor Analysis Matrix",
    description: "Build a feature-by-feature comparison matrix against top industry competitors.",
    category: "Research",
    icon: Library,
    tags: ["strategy", "market"],
    content: "Create a competitor analysis matrix comparing my product against the top 3 competitors...",
  },
  {
    id: 6,
    title: "React Performance Auditor",
    description: "Review React component code for unnecessary re-renders and memory leaks.",
    category: "Coding",
    icon: Terminal,
    tags: ["react", "frontend"],
    content: "Review this React code. Identify causes of unnecessary re-renders, memory leaks, or poor performance...",
  }
];

const CATEGORIES = ["All", "Writing", "Coding", "Analysis", "Creative", "Research"];

export default function LinearStyle() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPrompts = PROMPTS.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || prompt.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f10] text-[#ededed] font-sans selection:bg-[#6366f1]/30 p-4 md:p-8 md:pt-16">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/70 mb-2">
              <Box className="w-3.5 h-3.5" />
              <span>UI Prompts Library</span>
              <span className="w-1 h-1 rounded-full bg-[#6366f1]"></span>
              <span>v2.0</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
              Prompt <span className="text-white/40">Repository</span>
            </h1>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              Curated instructions for AI models. Designed for predictability and performance.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex-1 max-w-sm relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-white/40 group-focus-within:text-[#6366f1] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-2 text-sm bg-white/5 border border-white/10 rounded-lg placeholder-white/30 focus:outline-none focus:border-[#6366f1]/50 focus:ring-1 focus:ring-[#6366f1]/50 transition-all text-white/90 shadow-sm"
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <div className="flex items-center gap-0.5 text-white/30 bg-white/5 border border-white/5 rounded px-1.5 py-0.5 text-[10px] font-mono">
                <Command className="w-3 h-3" />
                <span>K</span>
              </div>
            </div>
          </div>
        </header>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all border ${
                activeCategory === category 
                  ? "bg-white/10 border-white/20 text-white" 
                  : "bg-transparent border-transparent text-white/50 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrompts.map(prompt => {
            const Icon = prompt.icon;
            return (
              <div key={prompt.id} className="group relative bg-[#151516] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors flex flex-col min-h-[220px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-[#6366f1]/10 group-hover:border-[#6366f1]/20 group-hover:text-[#6366f1] transition-colors">
                      <Icon className="w-4 h-4 text-white/50 group-hover:text-[#8b5cf6]" />
                    </div>
                    <span className="text-xs font-medium text-white/40 group-hover:text-white/60 transition-colors">
                      {prompt.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-base font-medium text-white/90 mb-2 tracking-tight group-hover:text-white transition-colors">
                  {prompt.title}
                </h3>
                
                <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">
                  {prompt.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div className="flex gap-2">
                    {prompt.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium text-white/30 bg-white/5 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleCopy(prompt.id)}
                    className="p-2 rounded-md bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all text-white/60 hover:text-white group/btn relative overflow-hidden"
                    title="Copy Prompt"
                  >
                    {copiedId === prompt.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredPrompts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-white/5 border-dashed rounded-xl bg-white/[0.02]">
            <Search className="w-8 h-8 text-white/20 mb-4" />
            <h2 className="text-sm font-medium text-white/80 mb-1">No prompts found</h2>
            <p className="text-xs text-white/40">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  );
}
