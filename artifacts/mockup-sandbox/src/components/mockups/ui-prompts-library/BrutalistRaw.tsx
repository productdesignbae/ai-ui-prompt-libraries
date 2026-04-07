import React, { useState } from "react";
import { Search, Copy, Check } from "lucide-react";

const PROMPTS = [
  {
    id: 1,
    title: "System Architect Persona",
    description: "Act as a principal systems architect to design scalable, fault-tolerant microservices.",
    category: "Coding",
    tags: ["architecture", "backend", "scale"],
    content: "Act as a principal systems architect. I need to design a scalable, fault-tolerant system for...",
  },
  {
    id: 2,
    title: "Socratic Teacher",
    description: "Guides the user to the answer through continuous questioning rather than giving direct solutions.",
    category: "Creative",
    tags: ["education", "teaching", "interactive"],
    content: "Act as a Socratic teacher. Do not give me direct answers. Instead, ask probing questions...",
  },
  {
    id: 3,
    title: "Data Trend Analyzer",
    description: "Analyze datasets to identify emerging trends, anomalies, and actionable business insights.",
    category: "Analysis",
    tags: ["data", "business", "trends"],
    content: "Analyze the following dataset. Identify the top 3 emerging trends and any notable anomalies...",
  },
  {
    id: 4,
    title: "Technical Documentation Writer",
    description: "Convert messy code files into clean, structured markdown documentation.",
    category: "Writing",
    tags: ["docs", "markdown", "clean"],
    content: "Read the provided code and generate comprehensive technical documentation in markdown format...",
  },
  {
    id: 5,
    title: "Competitor Analysis Matrix",
    description: "Build a feature-by-feature comparison matrix against top industry competitors.",
    category: "Research",
    tags: ["strategy", "market", "competitors"],
    content: "Create a competitor analysis matrix comparing my product against the top 3 competitors...",
  },
  {
    id: 6,
    title: "React Performance Auditor",
    description: "Review React component code for unnecessary re-renders and memory leaks.",
    category: "Coding",
    tags: ["react", "performance", "frontend"],
    content: "Review this React code. Identify causes of unnecessary re-renders, memory leaks, or poor performance...",
  }
];

const CATEGORIES = ["All", "Writing", "Coding", "Analysis", "Creative", "Research"];

export default function BrutalistRaw() {
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
    <div className="min-h-screen bg-white text-black font-mono p-4 md:p-8 selection:bg-red-500 selection:text-white">
      <div className="max-w-6xl mx-auto border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#FFE500]">
        
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-4 border-black pb-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
              Prompt<br />Library
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-xl bg-white p-2 border-2 border-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Raw power. Zero fluff. Steal these prompts.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex-1 max-w-md relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-black" strokeWidth={3} />
            </div>
            <input
              type="text"
              placeholder="SEARCH PROMPTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-xl border-4 border-black bg-white placeholder-black/50 focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase transition-transform focus:translate-x-1 focus:translate-y-1 focus:shadow-none"
            />
          </div>
        </header>

        <div className="mb-10 flex flex-wrap gap-4">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-lg font-bold uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                activeCategory === category 
                  ? "bg-[#FF0000] text-white translate-x-1 translate-y-1 shadow-none" 
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrompts.map(prompt => (
            <div key={prompt.id} className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#FF0000] text-white px-3 py-1 font-bold text-sm uppercase border-2 border-black">
                  {prompt.category}
                </span>
                <div className="flex gap-2">
                  {prompt.tags.slice(0, 1).map(tag => (
                    <span key={tag} className="bg-gray-200 text-black px-2 py-1 font-bold text-xs uppercase border-2 border-black">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-2xl font-black uppercase leading-tight mb-3">
                {prompt.title}
              </h3>
              
              <p className="text-lg font-medium border-l-4 border-black pl-4 mb-6 flex-grow">
                {prompt.description}
              </p>
              
              <button
                onClick={() => handleCopy(prompt.id)}
                className={`w-full py-4 px-4 font-black uppercase text-xl border-4 border-black flex items-center justify-center gap-2 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none ${
                  copiedId === prompt.id 
                    ? "bg-black text-white" 
                    : "bg-[#FFE500] text-black hover:bg-[#FF0000] hover:text-white"
                }`}
              >
                {copiedId === prompt.id ? (
                  <>
                    <Check className="h-6 w-6" strokeWidth={4} /> COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="h-6 w-6" strokeWidth={3} /> STEAL THIS
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
        
        {filteredPrompts.length === 0 && (
          <div className="text-center py-20 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl font-black uppercase">Nothing found</h2>
            <p className="text-xl mt-4 font-bold">Try different keywords, coward.</p>
          </div>
        )}
      </div>
    </div>
  );
}
