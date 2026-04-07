import React, { useState } from "react";
import {
  Search,
  Book,
  Code,
  PenTool,
  Lightbulb,
  Microscope,
  FileText,
  Settings,
  Plus,
  MoreHorizontal,
  Copy,
  Check
} from "lucide-react";

interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: { label: string; color: string }[];
  accent: string;
}

const CATEGORIES = ["All", "Writing", "Coding", "Analysis", "Creative", "Research"];

const PROMPTS: Prompt[] = [
  {
    id: "1",
    title: "React Component Generator",
    description: "Generates a fully typed React component with Tailwind styling.",
    content: "Create a React functional component named [Name] that includes...",
    category: "Coding",
    tags: [
      { label: "react", color: "bg-blue-100 text-blue-800" },
      { label: "typescript", color: "bg-blue-100 text-blue-800" },
      { label: "ui", color: "bg-gray-100 text-gray-800" }
    ],
    accent: "border-blue-400"
  },
  {
    id: "2",
    title: "Executive Summary Extractor",
    description: "Distills long documents into key bullet points and action items.",
    content: "Read the following text and provide a 3-bullet executive summary...",
    category: "Analysis",
    tags: [
      { label: "summarization", color: "bg-orange-100 text-orange-800" },
      { label: "business", color: "bg-green-100 text-green-800" }
    ],
    accent: "border-orange-400"
  },
  {
    id: "3",
    title: "Brand Voice Harmonizer",
    description: "Rewrites text to match a specific brand tone and style guide.",
    content: "Rewrite the following copy to match our brand voice: [Voice Guidelines]...",
    category: "Writing",
    tags: [
      { label: "copywriting", color: "bg-purple-100 text-purple-800" },
      { label: "marketing", color: "bg-pink-100 text-pink-800" }
    ],
    accent: "border-purple-400"
  },
  {
    id: "4",
    title: "Database Schema Architect",
    description: "Designs optimized relational database schemas based on requirements.",
    content: "Design a PostgreSQL schema for a [App Type] application. Include...",
    category: "Coding",
    tags: [
      { label: "sql", color: "bg-blue-100 text-blue-800" },
      { label: "backend", color: "bg-gray-100 text-gray-800" }
    ],
    accent: "border-blue-400"
  },
  {
    id: "5",
    title: "Literature Review Synthesizer",
    description: "Compares and contrasts multiple academic abstracts.",
    content: "Synthesize the findings from the following abstracts, highlighting...",
    category: "Research",
    tags: [
      { label: "academic", color: "bg-yellow-100 text-yellow-800" },
      { label: "synthesis", color: "bg-orange-100 text-orange-800" }
    ],
    accent: "border-yellow-400"
  },
  {
    id: "6",
    title: "Worldbuilding Idea Generator",
    description: "Creates rich settings, lore, and magic systems for fiction.",
    content: "Generate a unique fantasy setting focusing on [Theme]. Detail the...",
    category: "Creative",
    tags: [
      { label: "fiction", color: "bg-pink-100 text-pink-800" },
      { label: "ideation", color: "bg-purple-100 text-purple-800" }
    ],
    accent: "border-pink-400"
  }
];

export default function NotionOpenCode() {
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
    <div className="flex h-screen w-full bg-white text-[#37352f] font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-[#fbfbfa] flex flex-col flex-shrink-0">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <div className="w-5 h-5 rounded bg-gray-200 flex items-center justify-center text-xs">
              P
            </div>
            <span>Prompts Library</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Plus size={16} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-2 py-2 space-y-6">
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">
              Collections
            </div>
            <nav className="space-y-0.5">
              <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-gray-200/50 text-sm font-medium">
                <Book size={16} className="text-gray-500" />
                <span>All Prompts</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-600 transition-colors">
                <Code size={16} className="text-blue-500" />
                <span>Coding</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-600 transition-colors">
                <PenTool size={16} className="text-orange-500" />
                <span>Writing</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-600 transition-colors">
                <Lightbulb size={16} className="text-yellow-500" />
                <span>Creative</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-600 transition-colors">
                <Microscope size={16} className="text-purple-500" />
                <span>Research</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
            <Settings size={16} />
            <span>Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        {/* Header */}
        <header className="px-10 pt-10 pb-4 max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <Book size={16} />
            <span>/</span>
            <span className="text-gray-600">All Prompts</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 tracking-tight">Prompts Database</h1>
          
          {/* Controls */}
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2 px-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search prompts or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-base placeholder-gray-400"
              />
            </div>
            
            <div className="flex items-center gap-4 px-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm pb-1 border-b-2 transition-colors ${
                    activeCategory === category 
                      ? "border-black font-medium text-black" 
                      : "border-transparent text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Database View */}
        <div className="flex-1 overflow-y-auto px-10 pb-10 max-w-5xl mx-auto w-full">
          <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-[minmax(250px,2fr)_minmax(150px,1fr)_minmax(150px,1fr)_80px] gap-4 p-3 bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div>Title & Description</div>
              <div>Category</div>
              <div>Tags</div>
              <div className="text-right">Actions</div>
            </div>
            
            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {filteredPrompts.map(prompt => (
                <div 
                  key={prompt.id} 
                  className="group grid grid-cols-[minmax(250px,2fr)_minmax(150px,1fr)_minmax(150px,1fr)_80px] gap-4 p-4 hover:bg-gray-50 transition-colors items-center relative"
                >
                  {/* Left accent line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${prompt.accent} bg-transparent border-l-2`} />
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FileText size={14} className="text-gray-400" />
                      <h3 className="font-medium text-[15px]">{prompt.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 truncate pr-4">{prompt.description}</p>
                    <div className="mt-2 font-mono text-[11px] text-gray-400 bg-gray-100/50 p-1.5 rounded truncate">
                      {prompt.content}
                    </div>
                  </div>
                  
                  <div>
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                      {prompt.category}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {prompt.tags.map(tag => (
                      <span 
                        key={tag.label} 
                        className={`inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleCopy(prompt.id, prompt.content)}
                      className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-200 rounded transition-colors"
                      title="Copy Prompt"
                    >
                      {copiedId === prompt.id ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-200 rounded transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
