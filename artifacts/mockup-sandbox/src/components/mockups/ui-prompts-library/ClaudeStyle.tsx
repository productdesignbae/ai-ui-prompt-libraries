import React, { useState } from "react";
import { Search, Sparkles, Folder, Hash, Copy, Check, ChevronRight, Bookmark } from "lucide-react";

interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
}

const CATEGORIES = ["All", "Writing", "Coding", "Analysis", "Creative", "Research"];

const PROMPTS: Prompt[] = [
  {
    id: "1",
    title: "System Prompt: Expert Editor",
    description: "Configures the AI to act as a rigorous developmental editor for long-form essays.",
    content: "Act as an expert developmental editor. Review the following essay, focusing on structural coherence, argument progression, and clarity. Do not rewrite the text; instead, provide targeted feedback...",
    category: "Writing",
    tags: ["system", "editing", "long-form"]
  },
  {
    id: "2",
    title: "Code Refactoring Analysis",
    description: "Analyzes existing code for performance bottlenecks and architectural improvements.",
    content: "Review the provided code snippet. Identify any performance bottlenecks, potential security vulnerabilities, and structural issues. Suggest a refactored version...",
    category: "Coding",
    tags: ["refactoring", "analysis", "security"]
  },
  {
    id: "3",
    title: "Socratic Questioning Tutor",
    description: "Guides a user through a complex topic using the Socratic method.",
    content: "I want to learn about [Topic]. Do not explain it to me directly. Instead, ask me a series of guiding questions to help me arrive at the answers myself...",
    category: "Analysis",
    tags: ["learning", "socratic", "education"]
  },
  {
    id: "4",
    title: "Ideation Matrix Generator",
    description: "Generates novel concepts by combining orthogonal domains.",
    content: "Create an ideation matrix combining [Domain A] and [Domain B]. Generate 5 novel concepts that exist at the intersection of these fields...",
    category: "Creative",
    tags: ["brainstorming", "ideation", "novelty"]
  },
  {
    id: "5",
    title: "Literature Gap Identifier",
    description: "Analyzes multiple research summaries to find unexplored avenues.",
    content: "Based on the following summaries of recent literature, identify 3 potential research gaps or unanswered questions that warrant further investigation...",
    category: "Research",
    tags: ["academic", "analysis", "literature"]
  },
  {
    id: "6",
    title: "API Design Consultant",
    description: "Drafts RESTful API endpoints based on application requirements.",
    content: "Draft a RESTful API design for a [App Description]. Detail the endpoints, HTTP methods, required parameters, and JSON response structures...",
    category: "Coding",
    tags: ["architecture", "api", "design"]
  }
];

export default function ClaudeStyle() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts = PROMPTS.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen w-full bg-[#FAECE1] text-[#2C2B29] font-sans overflow-hidden antialiased selection:bg-[#E2765A] selection:text-white">
      {/* Sidebar */}
      <aside className="w-[280px] bg-[#F2E5D7] border-r border-[#E8D9C8] flex flex-col flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="text-[#D86444]" size={20} />
            <span className="font-serif text-xl tracking-tight text-[#3E3A35]">Prompt Library</span>
          </div>
          
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A4998E]" size={16} />
            <input
              type="text"
              placeholder="Search library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#EAE0D3] border border-[#DECFBE] rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-[#D86444] focus:ring-1 focus:ring-[#D86444] placeholder-[#948A80] transition-all"
            />
          </div>

          <nav className="space-y-1">
            <div className="text-[11px] font-bold tracking-widest text-[#948A80] uppercase mb-3 ml-2">Categories</div>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                  activeCategory === category 
                    ? "bg-[#E2765A] text-white font-medium" 
                    : "text-[#5B554D] hover:bg-[#EAE0D3]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Folder size={16} className={activeCategory === category ? "text-[#F8D4CC]" : "text-[#A4998E]"} />
                  {category}
                </div>
                {activeCategory === category && <ChevronRight size={14} />}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="font-serif text-4xl text-[#3E3A35] mb-3">{activeCategory === "All" ? "All Prompts" : activeCategory}</h1>
            <p className="text-[#6B655D] text-lg max-w-2xl leading-relaxed">
              Curated instructions for shaping model behavior and generating high-quality responses.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPrompts.map(prompt => (
              <div 
                key={prompt.id} 
                className="bg-[#FCF5EF] rounded-xl p-6 border border-[#EBE1D5] shadow-[0_2px_8px_rgba(138,124,107,0.06)] hover:shadow-[0_4px_12px_rgba(138,124,107,0.12)] transition-all flex flex-col group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2 items-center text-[11px] uppercase tracking-wider font-semibold text-[#8B8276] mb-1">
                    <Hash size={12} />
                    {prompt.category}
                  </div>
                  <button className="text-[#C4B7A6] hover:text-[#D86444] transition-colors">
                    <Bookmark size={16} />
                  </button>
                </div>
                
                <h3 className="font-serif text-xl font-medium text-[#3E3A35] mb-2 leading-tight">
                  {prompt.title}
                </h3>
                
                <p className="text-[#6B655D] text-sm mb-5 flex-1 line-clamp-2 leading-relaxed">
                  {prompt.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {prompt.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-[#EAE0D3] rounded text-[10px] uppercase tracking-wider font-bold text-[#736A5E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-[#EAE0D3] flex items-center justify-between mt-auto">
                  <div className="text-xs text-[#948A80] font-mono truncate mr-4">
                    {prompt.content.substring(0, 30)}...
                  </div>
                  <button 
                    onClick={() => handleCopy(prompt.id, prompt.content)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#D86444] hover:bg-[#C2563A] text-white text-sm font-medium transition-colors shadow-sm shrink-0"
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check size={14} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
