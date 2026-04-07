import React, { useState } from "react";
import { Search, Plus, Settings, BookOpen, Code, PenTool, Lightbulb, Microscope, Copy, Check } from "lucide-react";

interface Prompt {
  id: string; num: string; title: string; elements: string[];
  category: string; style: string;
  attrs: { label: string; value: number; dotColor: string }[];
  tags: string[];
}

const PROMPTS: Prompt[] = [
  { id:"1", num:"001", title:"Component Audit", elements:["Accessibility check","Visual hierarchy","Responsiveness test","Contrast ratios","Focus indicators"], category:"Both", style:"STRUCTURAL", attrs:[{label:"Complexity",value:45,dotColor:"#c0392b"},{label:"Creativity",value:15,dotColor:"#8b6f47"},{label:"Length",value:40,dotColor:"#c0392b"},{label:"Specificity",value:70,dotColor:"#c0392b"}], tags:["a11y","review"] },
  { id:"2", num:"002", title:"Color System from Brand", elements:["Primary palette","Secondary palette","Neutral scale","Semantic tokens","Light & dark mode"], category:"Design", style:"SYSTEMATIC", attrs:[{label:"Complexity",value:60,dotColor:"#c0392b"},{label:"Creativity",value:40,dotColor:"#8b6f47"},{label:"Length",value:55,dotColor:"#c0392b"},{label:"Specificity",value:80,dotColor:"#c0392b"}], tags:["tokens","color"] },
  { id:"3", num:"003", title:"Responsive Layout Scaffold", elements:["CSS grid structure","Breakpoint logic","Container widths","Column gutters","Overflow handling"], category:"Dev", style:"TECHNICAL", attrs:[{label:"Complexity",value:55,dotColor:"#8b6f47"},{label:"Creativity",value:20,dotColor:"#c0392b"},{label:"Length",value:65,dotColor:"#c0392b"},{label:"Specificity",value:85,dotColor:"#c0392b"}], tags:["css","grid"] },
  { id:"4", num:"004", title:"Micro-interaction Spec", elements:["Trigger definition","Animation curve","Duration tokens","Accessible fallback","State transitions"], category:"Design", style:"CREATIVE", attrs:[{label:"Complexity",value:50,dotColor:"#8b6f47"},{label:"Creativity",value:70,dotColor:"#c0392b"},{label:"Length",value:45,dotColor:"#8b6f47"},{label:"Specificity",value:75,dotColor:"#c0392b"}], tags:["motion","ux"] },
  { id:"5", num:"005", title:"Figma to Tailwind", elements:["Token extraction","Color values","Spacing mapping","Font definitions","Shadow conversion"], category:"Dev", style:"CONVERSION", attrs:[{label:"Complexity",value:40,dotColor:"#8b6f47"},{label:"Creativity",value:10,dotColor:"#c0392b"},{label:"Length",value:50,dotColor:"#c0392b"},{label:"Specificity",value:90,dotColor:"#c0392b"}], tags:["figma","tailwind"] },
  { id:"6", num:"006", title:"Design Critique", elements:["Hierarchy analysis","Whitespace review","Clarity assessment","Top 3 issue flags","Specific fix proposals"], category:"Design", style:"EDITORIAL", attrs:[{label:"Complexity",value:35,dotColor:"#8b6f47"},{label:"Creativity",value:50,dotColor:"#c0392b"},{label:"Length",value:35,dotColor:"#8b6f47"},{label:"Specificity",value:65,dotColor:"#c0392b"}], tags:["critique","ux"] },
  { id:"7", num:"007", title:"Component Props API", elements:["TypeScript interface","Variant definition","Size options","Disabled state","Accessibility props"], category:"Dev", style:"TECHNICAL", attrs:[{label:"Complexity",value:65,dotColor:"#c0392b"},{label:"Creativity",value:15,dotColor:"#8b6f47"},{label:"Length",value:60,dotColor:"#c0392b"},{label:"Specificity",value:88,dotColor:"#c0392b"}], tags:["typescript","api"] },
  { id:"8", num:"008", title:"Error State Copy", elements:["Empty state","Load failure","No results","Permission denied","Server error"], category:"Both", style:"COPY", attrs:[{label:"Complexity",value:25,dotColor:"#8b6f47"},{label:"Creativity",value:45,dotColor:"#c0392b"},{label:"Length",value:20,dotColor:"#8b6f47"},{label:"Specificity",value:70,dotColor:"#c0392b"}], tags:["copy","ux"] },
  { id:"9", num:"009", title:"Dark Mode Token Map", elements:["Color inversion logic","Contrast verification","oklch() conversion","Surface hierarchy","Overlay tokens"], category:"Dev", style:"SYSTEMATIC", attrs:[{label:"Complexity",value:70,dotColor:"#c0392b"},{label:"Creativity",value:20,dotColor:"#8b6f47"},{label:"Length",value:65,dotColor:"#c0392b"},{label:"Specificity",value:85,dotColor:"#c0392b"}], tags:["tokens","dark"] },
  { id:"10", num:"010", title:"Onboarding Flow Outline", elements:["Step-by-step goals","User action mapping","Screen descriptions","Copy direction","Success criteria"], category:"Design", style:"UX FLOW", attrs:[{label:"Complexity",value:55,dotColor:"#8b6f47"},{label:"Creativity",value:60,dotColor:"#c0392b"},{label:"Length",value:70,dotColor:"#c0392b"},{label:"Specificity",value:65,dotColor:"#c0392b"}], tags:["ux","flow"] },
  { id:"11", num:"011", title:"Icon Set Brief", elements:["Style definition","Stroke weight","Grid size spec","Corner radius","Naming conventions"], category:"Design", style:"CREATIVE", attrs:[{label:"Complexity",value:40,dotColor:"#8b6f47"},{label:"Creativity",value:65,dotColor:"#c0392b"},{label:"Length",value:45,dotColor:"#8b6f47"},{label:"Specificity",value:70,dotColor:"#c0392b"}], tags:["icons","brand"] },
  { id:"12", num:"012", title:"Storybook Scaffold", elements:["Default story","Hover state","Loading variant","Error state","Disabled state"], category:"Dev", style:"TESTING", attrs:[{label:"Complexity",value:60,dotColor:"#c0392b"},{label:"Creativity",value:10,dotColor:"#8b6f47"},{label:"Length",value:75,dotColor:"#c0392b"},{label:"Specificity",value:90,dotColor:"#c0392b"}], tags:["storybook","docs"] },
  { id:"13", num:"013", title:"Animation Timing System", elements:["Duration tokens","Easing curves","Appear animation","Exit animation","Feedback motion"], category:"Both", style:"SYSTEMATIC", attrs:[{label:"Complexity",value:50,dotColor:"#8b6f47"},{label:"Creativity",value:55,dotColor:"#c0392b"},{label:"Length",value:55,dotColor:"#c0392b"},{label:"Specificity",value:75,dotColor:"#c0392b"}], tags:["motion","tokens"] },
  { id:"14", num:"014", title:"Skeleton Loader Markup", elements:["Layout mirroring","Shimmer keyframe","Width/height matching","No-JS constraint","CSS custom props"], category:"Dev", style:"TECHNICAL", attrs:[{label:"Complexity",value:35,dotColor:"#8b6f47"},{label:"Creativity",value:15,dotColor:"#c0392b"},{label:"Length",value:45,dotColor:"#8b6f47"},{label:"Specificity",value:85,dotColor:"#c0392b"}], tags:["css","loading"] },
  { id:"15", num:"015", title:"A/B Test Variant Ideas", elements:["Hypothesis formation","Change definition","Metric selection","Sample size note","Success threshold"], category:"Both", style:"ANALYTICAL", attrs:[{label:"Complexity",value:45,dotColor:"#8b6f47"},{label:"Creativity",value:60,dotColor:"#c0392b"},{label:"Length",value:50,dotColor:"#c0392b"},{label:"Specificity",value:65,dotColor:"#c0392b"}], tags:["growth","testing"] },
  { id:"16", num:"016", title:"Spacing Scale", elements:["Base unit (4px)","Token naming","xs → 2xl range","Component spacing","Layout spacing"], category:"Design", style:"SYSTEMATIC", attrs:[{label:"Complexity",value:30,dotColor:"#8b6f47"},{label:"Creativity",value:25,dotColor:"#c0392b"},{label:"Length",value:40,dotColor:"#8b6f47"},{label:"Specificity",value:80,dotColor:"#c0392b"}], tags:["tokens","spacing"] },
  { id:"17", num:"017", title:"Typography Ramp", elements:["Display size","Heading levels","Body styles","Caption style","Tailwind classes"], category:"Design", style:"SYSTEMATIC", attrs:[{label:"Complexity",value:35,dotColor:"#8b6f47"},{label:"Creativity",value:30,dotColor:"#c0392b"},{label:"Length",value:45,dotColor:"#8b6f47"},{label:"Specificity",value:80,dotColor:"#c0392b"}], tags:["type","tokens"] },
  { id:"18", num:"018", title:"Accessibility Audit", elements:["Color contrast check","Keyboard navigation","ARIA role audit","Focus management","Screen reader test"], category:"Both", style:"AUDIT", attrs:[{label:"Complexity",value:55,dotColor:"#8b6f47"},{label:"Creativity",value:10,dotColor:"#c0392b"},{label:"Length",value:60,dotColor:"#c0392b"},{label:"Specificity",value:85,dotColor:"#c0392b"}], tags:["a11y","wcag"] },
];

const NAV_ITEMS = [
  { label:"All Prompts",icon:BookOpen,cat:"All" },
  { label:"Development",icon:Code,cat:"Dev" },
  { label:"Design",icon:PenTool,cat:"Design" },
  { label:"Both",icon:Lightbulb,cat:"Both" },
  { label:"Research",icon:Microscope,cat:"Research" },
];

function AttrBar({ label, value, dotColor }: { label: string; value: number; dotColor: string }) {
  return (
    <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"5px" }}>
      <span style={{ width:"72px",fontSize:"10px",color:"#6b6055",flexShrink:0 }}>{label}</span>
      <div style={{ flex:1,position:"relative",height:"10px",display:"flex",alignItems:"center" }}>
        <div style={{ position:"absolute",left:0,right:0,borderBottom:"1px dotted rgba(80,60,40,0.35)",top:"50%" }} />
        <div style={{ position:"absolute",left:`${Math.max(4,Math.min(96,value))}%`,transform:"translateX(-50%)",width:"6px",height:"6px",borderRadius:"50%",background:dotColor,boxShadow:`0 0 0 1.5px rgba(255,255,255,0.9),0 0 0 2.5px ${dotColor}40`,zIndex:1 }} />
      </div>
    </div>
  );
}

export default function NotionOpenCode() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"gallery"|"list">("gallery");

  const filtered = PROMPTS.filter(p => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.elements.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleCopy = (id: string) => { setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };

  return (
    <div style={{ display:"flex",height:"100vh",width:"100%",background:"#ece8df",fontFamily:"'Arial',sans-serif",overflow:"hidden" }}>
      <style>{`.notion-card:hover{background:rgba(255,253,248,0.95)!important;border-color:rgba(40,30,20,0.28)!important;}`}</style>
      {/* Sidebar */}
      <aside style={{ width:"200px",flexShrink:0,borderRight:"1px solid rgba(40,30,20,0.18)",background:"#e5e0d5",display:"flex",flexDirection:"column" }}>
        <div style={{ padding:"16px 14px 12px",borderBottom:"1px solid rgba(40,30,20,0.12)" }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
            <div style={{ display:"flex",alignItems:"center",gap:"7px" }}>
              <div style={{ width:"20px",height:"20px",background:"#1a1208",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <span style={{ color:"#ece8df",fontSize:"10px",fontWeight:700,fontFamily:"Georgia,serif" }}>P</span>
              </div>
              <span style={{ fontSize:"12px",fontWeight:600,color:"#1a1208" }}>Prompts Lib</span>
            </div>
            <button style={{ background:"none",border:"none",cursor:"pointer",color:"#6b6055" }}><Plus size={13} /></button>
          </div>
        </div>
        <nav style={{ flex:1,padding:"8px 6px",display:"flex",flexDirection:"column",gap:"1px" }}>
          <div style={{ fontSize:"9px",letterSpacing:"0.12em",color:"#9a8f80",fontWeight:600,textTransform:"uppercase",padding:"6px 8px 3px" }}>Collections</div>
          {NAV_ITEMS.map(({ label, icon: Icon, cat }) => {
            const isActive = activeCategory === cat;
            return (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ display:"flex",alignItems:"center",gap:"7px",padding:"5px 8px",background:isActive?"rgba(26,18,8,0.1)":"transparent",border:"none",cursor:"pointer",color:isActive?"#1a1208":"#5a4e3e",fontSize:"12px",textAlign:"left",width:"100%",transition:"background 0.15s" }}>
                <Icon size={13} style={{ color:isActive?"#1a1208":"#8a7a68" }} />{label}
              </button>
            );
          })}
        </nav>
        <div style={{ padding:"10px 14px",borderTop:"1px solid rgba(40,30,20,0.12)" }}>
          <button style={{ display:"flex",alignItems:"center",gap:"6px",background:"none",border:"none",cursor:"pointer",color:"#8a7a68",fontSize:"11px" }}><Settings size={12} />Settings</button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex:1,display:"flex",flexDirection:"column",overflow:"hidden" }}>
        <div style={{ padding:"14px 24px 10px",borderBottom:"1px solid rgba(40,30,20,0.14)",background:"#ece8df" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"6px",fontSize:"10px",color:"#9a8f80",marginBottom:"8px" }}>
            <BookOpen size={11} /><span>/</span><span style={{ color:"#3d2e1e" }}>Shiuli's Doc Drop</span>
          </div>
          <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:"12px" }}>
            <h1 style={{ fontSize:"22px",fontWeight:700,color:"#1a1208",fontFamily:"Georgia,serif",letterSpacing:"-0.03em",margin:0 }}>Prompt Database</h1>
            <div style={{ position:"relative",flex:"0 0 220px" }}>
              <Search size={12} style={{ position:"absolute",left:"9px",top:"50%",transform:"translateY(-50%)",color:"#9a8f80" }} />
              <input type="text" placeholder="Filter by name or element..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={{ width:"100%",paddingLeft:"28px",paddingRight:"10px",paddingTop:"6px",paddingBottom:"6px",border:"1px solid rgba(40,30,20,0.22)",background:"rgba(255,253,248,0.6)",fontSize:"11px",color:"#1a1208",outline:"none",boxSizing:"border-box" }} />
            </div>
          </div>
          <div style={{ display:"flex",alignItems:"center",gap:"0",borderTop:"1px solid rgba(40,30,20,0.12)",paddingTop:"8px",marginTop:"10px" }}>
            {["All","Design","Dev","Both"].map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding:"3px 12px",border:"none",background:"none",cursor:"pointer",fontSize:"11px",color:activeCategory===cat?"#1a1208":"#8a7a68",fontWeight:activeCategory===cat?600:400,borderBottom:activeCategory===cat?"2px solid #1a1208":"2px solid transparent",marginBottom:"-1px",transition:"all 0.15s" }}>{cat}</button>
            ))}
            <div style={{ marginLeft:"auto",display:"flex",alignItems:"center",gap:"6px" }}>
              <span style={{ fontSize:"10px",color:"#9a8f80" }}>{filtered.length} prompts</span>
              <div style={{ display:"flex",border:"1px solid rgba(40,30,20,0.2)" }}>
                {["gallery","list"].map(m => (
                  <button key={m} onClick={() => setViewMode(m as "gallery"|"list")} style={{ padding:"3px 8px",border:"none",cursor:"pointer",fontSize:"9px",background:viewMode===m?"#1a1208":"transparent",color:viewMode===m?"#ece8df":"#8a7a68",textTransform:"capitalize",letterSpacing:"0.05em",fontWeight:600 }}>{m}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex:1,overflowY:"auto",padding:"18px 24px 28px" }}>
          {viewMode === "gallery" ? (
            <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"14px" }}>
              {filtered.map(prompt => (
                <div key={prompt.id} className="notion-card" style={{ border:"1px solid rgba(40,30,20,0.28)",background:"rgba(255,253,248,0.88)",padding:"16px 18px 13px",fontFamily:"'Georgia',serif",transition:"all 0.2s" }}>
                  <h3 style={{ fontSize:"13px",fontWeight:700,color:"#1a1208",marginBottom:"10px",lineHeight:1.2 }}>{prompt.title}</h3>
                  <div style={{ borderTop:"1px solid rgba(40,30,20,0.12)",marginBottom:"8px" }} />
                  <ul style={{ margin:"0 0 10px",padding:0,listStyle:"none" }}>
                    {prompt.elements.map(el => (
                      <li key={el} style={{ fontSize:"10px",color:"#3d2e1e",marginBottom:"2.5px",fontWeight:400 }}>{el}</li>
                    ))}
                  </ul>
                  <div style={{ borderTop:"1px solid rgba(40,30,20,0.12)",marginBottom:"8px" }} />
                  <div style={{ marginBottom:"10px" }}>{prompt.attrs.map(a => <AttrBar key={a.label} label={a.label} value={a.value} dotColor={a.dotColor} />)}</div>
                  <div style={{ borderTop:"1px solid rgba(40,30,20,0.12)",marginBottom:"8px" }} />
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                    <span style={{ fontSize:"8px",letterSpacing:"0.14em",color:"#6b6055",fontFamily:"Arial,sans-serif",fontWeight:600,textTransform:"uppercase" }}>{prompt.style}</span>
                    <div style={{ display:"flex",alignItems:"center",gap:"7px" }}>
                      <span style={{ fontSize:"11px",fontWeight:700,color:"#1a1208" }}>#{prompt.num}</span>
                      <button onClick={() => handleCopy(prompt.id)} style={{ width:"20px",height:"20px",border:"1px solid rgba(40,30,20,0.25)",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>
                        {copiedId===prompt.id?<Check size={10} style={{ color:"#2d7a4f" }} />:<Copy size={10} style={{ color:"#6b6055" }} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ border:"1px solid rgba(40,30,20,0.2)",background:"rgba(255,253,248,0.7)" }}>
              <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 70px",padding:"7px 14px",borderBottom:"1px solid rgba(40,30,20,0.15)",fontSize:"9px",letterSpacing:"0.1em",fontWeight:600,color:"#9a8f80",textTransform:"uppercase" }}>
                <div>Title</div><div>Category</div><div>Style</div><div style={{ textAlign:"right" }}>ID</div>
              </div>
              {filtered.map((p, i) => (
                <div key={p.id} style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 70px",padding:"9px 14px",borderBottom:i<filtered.length-1?"1px solid rgba(40,30,20,0.1)":"none",alignItems:"center",fontSize:"12px",color:"#1a1208",fontFamily:"Georgia,serif" }}>
                  <div>
                    <div style={{ fontWeight:700,marginBottom:"2px" }}>{p.title}</div>
                    <div style={{ fontSize:"10px",color:"#8a7a68",fontFamily:"Arial,sans-serif",fontWeight:400 }}>{p.elements.slice(0,2).join(", ")}</div>
                  </div>
                  <div><span style={{ fontSize:"8px",letterSpacing:"0.1em",fontWeight:600,color:"#6b6055",fontFamily:"Arial,sans-serif",textTransform:"uppercase" }}>{p.category}</span></div>
                  <div style={{ fontSize:"8px",letterSpacing:"0.1em",color:"#9a8f80",fontFamily:"Arial,sans-serif",textTransform:"uppercase" }}>{p.style}</div>
                  <div style={{ textAlign:"right",display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"6px" }}>
                    <button onClick={() => handleCopy(p.id)} style={{ background:"none",border:"1px solid rgba(40,30,20,0.2)",padding:"2px 5px",cursor:"pointer",display:"flex",alignItems:"center" }}>
                      {copiedId===p.id?<Check size={10} style={{ color:"#2d7a4f" }} />:<Copy size={10} style={{ color:"#6b6055" }} />}
                    </button>
                    <span style={{ fontSize:"10px",fontFamily:"Georgia,serif",fontWeight:700 }}>#{p.num}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {filtered.length === 0 && (
            <div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"50px 0",textAlign:"center" }}>
              <Search size={24} style={{ color:"rgba(40,30,20,0.2)",marginBottom:"10px" }} />
              <p style={{ fontSize:"13px",color:"#8a7a68",fontFamily:"Georgia,serif" }}>No prompts found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
