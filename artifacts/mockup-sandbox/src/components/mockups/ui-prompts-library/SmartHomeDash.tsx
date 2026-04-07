import React, { useState } from 'react';
import {
  Home,
  Pin,
  Music,
  Thermometer,
  Bell,
  User,
  Search,
  ChevronDown,
  ChevronRight,
  Plus,
  Play,
  Copy,
  Check,
  Power,
  Droplets,
  Wind
} from 'lucide-react';

export function SmartHomeDash() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F7F5F2] text-slate-800 font-sans">
      {/* Left Sidebar */}
      <div className="w-16 md:w-20 bg-[#0F1923] flex flex-col items-center py-6 justify-between flex-shrink-0 z-10 shadow-[4px_0_24px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-8 items-center">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
            <span className="font-bold text-lg leading-none">AI</span>
          </div>
          <button className="text-white/40 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
            <Home className="w-6 h-6" />
          </button>
          <button className="text-white/40 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
            <Pin className="w-6 h-6" />
          </button>
          <button className="text-white p-3 rounded-xl bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Music className="w-6 h-6" />
          </button>
          <button className="text-white/40 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
            <Thermometer className="w-6 h-6" />
          </button>
          <button className="text-white/40 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
            <Bell className="w-6 h-6" />
          </button>
        </div>
        <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-300 to-amber-200 border-2 border-[#0F1923] overflow-hidden flex items-center justify-center">
          <User className="w-5 h-5 text-amber-800" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden h-full">
        {/* Header */}
        <header className="h-24 flex items-center justify-between px-8 lg:px-12 flex-shrink-0">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#0F1923]">Prompts Library</h1>
            <p className="text-sm text-slate-500 font-medium mt-1">Good morning, System is online.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-slate-400 group-focus-within:text-slate-600" />
              </div>
              <input 
                type="text" 
                placeholder="Search prompts..." 
                className="pl-11 pr-4 py-2.5 bg-white/60 hover:bg-white border-none rounded-2xl w-64 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0F1923]/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all"
              />
            </div>
            <button className="h-10 px-4 bg-white/60 hover:bg-white rounded-2xl text-sm font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all flex items-center gap-2">
              <span>All Types</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-8 lg:px-12 pb-12 scrollbar-hide">
          
          {/* Main "Live Preview" Featured Card */}
          <div className="w-full rounded-3xl overflow-hidden mb-8 relative group shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E2D9D0]/40 to-[#D4CFC9]/20 z-0 pointer-events-none"></div>
            
            <div className="relative z-10 p-8 lg:p-10 flex flex-col md:flex-row gap-8 justify-between">
              <div className="max-w-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-white/60 backdrop-blur-md text-xs font-bold tracking-wider text-[#0F1923] rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      LIVE
                    </span>
                    <span className="px-3 py-1 bg-white/40 backdrop-blur-md text-xs font-semibold text-slate-600 rounded-full shadow-sm">
                      24°C / 50% / 350W / 80%
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#0F1923] mb-4">
                    Product Requirements Document (PRD) Generator
                  </h2>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 max-w-xl">
                    Act as an expert product manager. I will provide a brief concept for a new feature. You will generate a comprehensive PRD including problem statement, target audience, user stories, out of scope items, and technical considerations.
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => handleCopy('main')}
                    className="h-12 px-6 bg-[#0F1923] text-white rounded-2xl font-medium shadow-[0_4px_14px_rgba(15,25,35,0.25)] hover:bg-[#1A2634] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  >
                    {copiedId === 'main' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    <span>{copiedId === 'main' ? 'Copied' : 'Copy Prompt'}</span>
                  </button>
                  <button className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-[#0F1923] shadow-sm hover:shadow-md transition-all">
                    <Play className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="hidden md:flex flex-col gap-3 min-w-[200px] justify-end">
                <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">System Load</span>
                  <span className="font-semibold text-[#0F1923]">24%</span>
                </div>
                <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">Tokens/sec</span>
                  <span className="font-semibold text-[#0F1923]">128</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
            {/* Card 1: Geometric Device (Robot Vacuum style) */}
            <div className="bg-white rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-[280px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy('c1')}
                  className="p-2 text-slate-400 hover:text-[#0F1923] bg-slate-50 rounded-xl transition-colors"
                >
                  {copiedId === 'c1' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0F1923] mb-2">Code Refactoring</h3>
                <p className="text-sm text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                  Analyze the provided code snippet. Identify anti-patterns, performance bottlenecks, and readability issues. Rewrite the code focusing on clean code principles.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-lg">Coding</span>
                <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-lg">~400 tokens</span>
              </div>
            </div>

            {/* Card 2: Smart Lamp Toggle style */}
            <div className="bg-[#0F1923] text-white rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(15,25,35,0.15)] flex flex-col h-[280px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(252,211,77,0.6)]"></div>
                </div>
                <div className="w-12 h-7 rounded-full bg-amber-400 flex items-center px-1 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-white shadow-sm translate-x-5"></div>
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2">Creative Brainstorming</h3>
                <p className="text-sm text-white/60 line-clamp-3 mb-4 leading-relaxed">
                  Generate 10 unconventional, highly creative ideas for a marketing campaign. Disregard current trends and focus on lateral thinking and unexpected combinations.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2 relative z-10">
                <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-lg">Creative</span>
                <span className="px-3 py-1 bg-white/5 text-white/60 text-xs font-semibold rounded-lg">~250 tokens</span>
              </div>
            </div>

            {/* Card 3: Speaker / Media style */}
            <div className="bg-white rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-[280px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <div className="w-6 h-6 rounded-full border-2 border-indigo-300"></div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-semibold text-[#0F1923] leading-tight mb-1">Tone Analysis</h3>
                    <button 
                      onClick={() => handleCopy('c3')}
                      className="p-1.5 text-slate-400 hover:text-[#0F1923] transition-colors -mt-1 -mr-1"
                    >
                      {copiedId === 'c3' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Analysis</span>
                </div>
              </div>
              
              <div className="w-full h-1 bg-slate-100 rounded-full mb-4 mt-2 overflow-hidden">
                <div className="h-full w-1/3 bg-[#0F1923] rounded-full"></div>
              </div>

              <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed mb-auto">
                Read the following text and analyze its tone, sentiment, and intended audience. Provide specific examples from the text that support your analysis.
              </p>
              
              <div className="flex items-center justify-center gap-6 mt-4 pt-2">
                <button className="text-slate-300 hover:text-slate-500 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-[#0F1923] text-white flex items-center justify-center shadow-md">
                  <Play className="w-4 h-4 ml-0.5" />
                </button>
                <button className="text-slate-300 hover:text-slate-500 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                </button>
              </div>
            </div>

            {/* Card 4: Thermostat style */}
            <div className="bg-white rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-[280px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow col-span-1 md:col-span-2 xl:col-span-1">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F1923]">Data Extraction</h3>
                    <span className="text-xs text-slate-400 font-medium">Research</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy('c4')}
                  className="p-2 text-slate-400 hover:text-[#0F1923] bg-slate-50 rounded-xl transition-colors"
                >
                  {copiedId === 'c4' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              
              <div className="flex items-center justify-center py-2 flex-1 relative">
                <div className="w-24 h-24 rounded-full border-[6px] border-slate-50 flex items-center justify-center relative">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#f43f5e" strokeWidth="6" strokeDasharray="276" strokeDashoffset="60" strokeLinecap="round" />
                  </svg>
                  <span className="text-2xl font-bold text-[#0F1923]">80<span className="text-sm text-slate-400 ml-0.5">%</span></span>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-2">
                  <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 font-medium hover:bg-slate-100">+</button>
                  <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 font-medium hover:bg-slate-100">-</button>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4 leading-relaxed text-center">
                Extract all numerical data and entities from the text into a JSON format.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-72 bg-white flex flex-col border-l border-slate-100 flex-shrink-0 z-10 shadow-[-4px_0_24px_rgba(0,0,0,0.02)] hidden lg:flex">
        <div className="h-24 flex items-center px-6 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-[#0F1923]">Categories</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {/* Category Rows */}
          <div className="p-4 rounded-2xl hover:bg-[#F7F5F2] transition-colors cursor-pointer group flex items-center justify-between border border-transparent hover:border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                <Power className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0F1923] text-sm">Coding</h4>
                <p className="text-xs text-slate-500 font-medium">12 prompts</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0F1923] transition-colors" />
          </div>

          <div className="p-4 rounded-2xl bg-[#0F1923] transition-colors cursor-pointer group flex items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center">
                <Wind className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Writing</h4>
                <p className="text-xs text-white/60 font-medium">24 prompts</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
          </div>

          <div className="p-4 rounded-2xl hover:bg-[#F7F5F2] transition-colors cursor-pointer group flex items-center justify-between border border-transparent hover:border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center">
                <Droplets className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0F1923] text-sm">Creative</h4>
                <p className="text-xs text-slate-500 font-medium">8 prompts</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0F1923] transition-colors" />
          </div>

          <div className="p-4 rounded-2xl hover:bg-[#F7F5F2] transition-colors cursor-pointer group flex items-center justify-between border border-transparent hover:border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <Search className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0F1923] text-sm">Analysis</h4>
                <p className="text-xs text-slate-500 font-medium">15 prompts</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0F1923] transition-colors" />
          </div>
        </div>

        <div className="p-6 mt-auto">
          <button className="w-full py-4 rounded-2xl border-2 border-[#0F1923] text-[#0F1923] font-semibold text-sm hover:bg-[#0F1923] hover:text-white transition-colors flex items-center justify-center gap-2 group">
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            <span>ADD CATEGORY</span>
          </button>
        </div>
      </div>
    </div>
  );
}
