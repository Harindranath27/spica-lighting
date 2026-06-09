import React from "react";
import { Award, ShieldCheck, Heart, User, Sparkles, Building2, HelpCircle } from "lucide-react";
import { CONTACT_DETAILS } from "../../data";

export default function About() {
  const brandValues = [
    {
      icon: <Award className="w-5 h-5 text-gold-primary" />,
      title: "Premium Quality",
      desc: "Every single component matches elite international standard tests. We refuse visual distortions, offering pure luminous yields."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold-primary" />,
      title: "Reliable Performance",
      desc: "Robust mechanical heat sinks, power driver chips with spike buffers, and watertight sealing nodes guarantee massive lifetime values."
    },
    {
      icon: <Layers className="w-5 h-5 text-gold-primary" />,
      title: "Energy Efficient",
      desc: "Engineered lumen outputs maximizing lumens-per-watt efficiency parameters, bringing massive cost cuts in industrial loads."
    },
    {
      icon: <Heart className="w-5 h-5 text-gold-primary" />,
      title: "Modern Design",
      desc: "Minimalist trim lines, recessed depth, deep visual buffers and contemporary shapes matching modern layout aesthetics."
    }
  ];

  const notableClients = [
  "NIT Trichy",
  "Silverline Hospital",
  "GVN Hospitals",
  "IIM Trichy",
  "Hotel Sri Akshayam",
  "Hotel Ariyas",
  "MAPL India"
  ];

  return (
    <div className="bg-deep-black min-h-screen text-gray-200 pt-32 pb-24 relative overflow-hidden">
      {/* Background soft lighting overlays */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-gold-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-gold-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL COMPANY STORY HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900 border border-gold-primary/20 rounded-full">
              <Sparkles className="w-3 text-gold-primary shrink-0" />
              <span className="font-display font-medium text-[9px] tracking-[0.25em] uppercase text-gold-primary">
                Est. {9}+ Years in Tamil Nadu
              </span>
            </div>
            
            <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-pure-white">
              9+ Years of Trusted Lighting & Electrical Solutions
            </h1>
            
            <div className="w-12 h-1 bg-gold-primary" />
            
            <p className="text-gray-400 leading-relaxed">
  Founded in Trichy in 2017, Spica Lighting has grown into a trusted lighting and electrical project supply partner serving clients across Tamil Nadu.
</p>

<p className="text-gray-400 leading-relaxed mt-4">
  With over 200+ completed projects and authorized partnerships with Wipro Lighting, North West, K-Lite and Nexus Lighting, we support residential, commercial, institutional and industrial requirements with reliable products and technical guidance.
</p>

<p className="text-gray-400 leading-relaxed mt-4">
  From product selection to project execution support, our focus remains on delivering quality solutions, energy efficiency and long-term value.
</p>

            {/* Authorised Dealer highlights badge */}
            <div className="p-4 glass-card border border-white/10 rounded-xl flex gap-4 mt-8 items-center bg-white/[0.02]">
              <Building2 className="w-10 h-10 text-gold-primary shrink-0" />
              <div>
                <h4 className="font-display font-bold text-xs text-pure-white uppercase tracking-wider">
                  Official Channel Partner
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-normal mt-1">
                  We maintain strategic trade ties directly with factories, being an authorized distributor of Wipro Lighting Cleanray ranges and Wipro North-West accessories.
                </p>
              </div>
            </div>
          </div>

          {/* SIDE ILLUSTRATIVE BLUEPRINT CARD (NO IMAGES, PURE ELEGANT CSS) */}
          <div className="lg:col-span-6 h-[420px] rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl bg-stone-950/80 p-8 flex flex-col justify-between backdrop-blur-md">
            {/* Background architectural draft grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            {/* Ambient luxury light cone spilling from the top-center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-gold-primary/20 rounded-full blur-2xl pointer-events-none" />

            {/* Header info */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-gold-primary uppercase tracking-widest font-bold">
                  ✦ SPICA TECHNICAL DESK
                </span>
                <h4 className="font-display font-bold text-sm text-pure-white uppercase tracking-wider">
                  Illuminant Engineering Setup
                </h4>
              </div>
              <div className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-md font-mono text-[9px] text-gray-400">
                REV: 2026.5
              </div>
            </div>

            {/* Middle telemetry simulation block */}
            <div className="relative z-10 my-auto py-4 space-y-4">
              {/* Technical parameter bars */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-gray-400 uppercase">Unified Glare Rating (UGR)</span>
                  <span className="text-gold-primary font-bold">&lt; 19 (Optimal Comfort)</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-gold-primary rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-gray-400 uppercase">Color Rendering Index (CRI)</span>
                  <span className="text-gold-primary font-bold">Ra &gt; 92 (True Fidelity)</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gold-primary to-gold-hover rounded-full" style={{ width: "94%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-gray-400 uppercase">Power Factor Efficiency</span>
                  <span className="text-gold-primary font-bold">PF &gt; 0.95 (Industrial Grade)</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-gold-primary rounded-full" style={{ width: "95%" }} />
                </div>
              </div>

              {/* Quick specs grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 text-center">
                  <span className="block text-[8px] font-mono text-gray-500 uppercase">CCT range</span>
                  <span className="block text-xs font-display font-bold text-gray-300 mt-1">2700K - 6500K</span>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 text-center">
                  <span className="block text-[8px] font-mono text-gray-500 uppercase">Driver surge</span>
                  <span className="block text-xs font-display font-bold text-gray-300 mt-1">Up to 4kV</span>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 text-center">
                  <span className="block text-[8px] font-mono text-gray-500 uppercase">Certifications</span>
                  <span className="block text-xs font-display font-bold text-emerald-500 mt-1">BIS Approved</span>
                </div>
              </div>
            </div>

            {/* Footer trust badge parameters */}
            <div className="relative z-10 grid grid-cols-2 gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-xl shadow-lg">
              <div className="text-center border-r border-white/5">
                <span className="font-display font-extrabold text-2xl text-gold-primary block">9+ Years</span>
                <span className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block mt-1">Sourcing Experience</span>
              </div>
              <div className="text-center">
                <span className="font-display font-extrabold text-2xl text-gold-primary block">200+</span>
                <span className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block mt-1">Completed Commits</span>
              </div>
            </div>
          </div>

        </div>

        {/* BRAND VALUES GRID */}
        <div className="mb-24 py-16 border-y border-gray-900/60">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-display text-xs text-gold-primary font-bold uppercase tracking-[0.2em] mb-2 block">
              ✦ Built On Principles
            </span>
            <h2 className="font-display font-medium text-3xl text-pure-white">
              Spica Core Brand Values
            </h2>
            <div className="w-10 h-0.5 bg-gold-primary mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandValues.map((value, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 border border-white/10 rounded-2xl shadow-lg transition-all duration-300 bg-white/[0.02]"
              >
                <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold-primary mb-5 shadow">
                  {value.icon}
                </div>
                <h4 className="font-display font-bold text-sm text-pure-white mb-2 uppercase tracking-wider">
                  {value.title}
                </h4>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <span className="text-gold-primary uppercase tracking-[0.25em] text-xs font-bold">
        Why Clients Choose Spica
      </span>

      <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-white">
        Built On Trust & Execution
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

  <div className="group glass-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-gold-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
    <h3 className="text-3xl font-bold text-gold-primary transition-all duration-300 group-hover:scale-110">
      9+
    </h3>
    <p className="text-gray-300 mt-2 transition-colors duration-300 group-hover:text-white">
      Years Experience
    </p>
  </div>

  <div className="group glass-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-gold-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
    <h3 className="text-3xl font-bold text-gold-primary transition-all duration-300 group-hover:scale-110">
      200+
    </h3>
    <p className="text-gray-300 mt-2 transition-colors duration-300 group-hover:text-white">
      Projects Completed
    </p>
  </div>

  <div className="group glass-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-gold-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
    <h3 className="text-3xl font-bold text-gold-primary transition-all duration-300 group-hover:scale-110">
      4
    </h3>
    <p className="text-gray-300 mt-2 transition-colors duration-300 group-hover:text-white">
      Authorized Brands
    </p>
  </div>

  <div className="group glass-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-gold-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
    <h3 className="text-3xl font-bold text-gold-primary transition-all duration-300 group-hover:scale-110">
      100%
    </h3>
    <p className="text-gray-300 mt-2 transition-colors duration-300 group-hover:text-white">
      Genuine Products
    </p>
  </div>

  <div className="group glass-card rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-gold-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
    <h3 className="text-3xl font-bold text-gold-primary transition-all duration-300 group-hover:scale-110">
      TN
    </h3>
    <p className="text-gray-300 mt-2 transition-colors duration-300 group-hover:text-white">
      Statewide Supply
    </p>
  </div>

</div>
  </div>
</section>

        {/* TEAM PROFILE STORY */}
        <div className="max-w-4xl mx-auto mb-24 glass-card p-8 sm:p-12 rounded-3xl border border-white/10 bg-white/[0.01] shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Accent lighting glow */}
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.04] border border-gold-primary/20 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-gold-primary animate-pulse w-3 shrink-0" />
              <span className="font-mono text-xs text-gold-primary uppercase tracking-widest font-bold">
                ✦ Leadership Presence &amp; Integrity
              </span>
            </div>
            

            <h3 className="font-display font-medium text-3xl sm:text-4xl text-pure-white uppercase tracking-wide">
              Behind the Precision — Founders Desk
            </h3>
            

            <div className="w-12 h-1 bg-gold-primary mx-auto" />

            <div className="space-y-5 text-gray-400 leading-relaxed max-w-3xl mx-auto">
  <p>
    Spica Lighting is led by founder <span className="text-white font-medium">Senthil Kumar K.S</span>,
    who has spent nearly a decade helping customers, contractors and institutions
    select reliable lighting and electrical solutions.
  </p>

  <p>
    Over the years, Spica has supplied products for residential, commercial,
    healthcare, hospitality and institutional projects across Tamil Nadu,
    building long-term relationships through quality products and dependable service.
  </p>

  <p>
    Our approach is simple: understand the requirement, recommend the right
    solution and provide consistent support throughout the project lifecycle.
    Every project is built on transparency, product quality and long-term trust.
  </p>
</div>
            
            <div className="pt-4 flex justify-center">
              <a
                href={CONTACT_DETAILS.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="button-shimmer inline-flex items-center gap-2.5 px-6 py-3.5 gold-gradient hover:opacity-95 text-gray-950 font-display font-bold text-xs tracking-widest uppercase rounded-lg transition-all border border-gold-primary/30 shadow-lg cursor-pointer"
              >
                <span>Connect with Senthil On WhatsApp</span>
                <svg className="w-4 h-4 fill-current text-gray-950" viewBox="0 0 24 24">
                  <path d="M12.003 21.003c-1.636 0-3.176-.404-4.544-1.114l-.326-.17-3.377.885.9-.3.284-3.073-.186-.297C3.963 15.542 3.51 13.827 3.51 12c0-4.68 3.81-8.49 8.49-8.49s8.49 3.81 8.49 8.49-3.81 8.49-8.49 8.49m0-18C6.477 3.003 2.003 7.477 2.003 13c0 1.932.548 3.827 1.584 5.485L2 24l5.698-1.493C9.284 23.36 10.632 23.997 12.003 23.997c5.523 0 9.997-4.474 9.997-9.997S17.526 3.003 12.003 3.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

       {/* NOTABLE TRUST BADGES PANEL */}
<div className="glass-card p-8 rounded-2xl border border-white/10 bg-[#0c0c0d]/60 shadow-xl">
  <h4 className="font-display font-bold text-xs text-gold-primary uppercase tracking-[0.25em] text-center mb-6">
    NOTABLE CLIENTS ACROSS TAMIL NADU
  </h4>

  <div className="flex flex-wrap items-center justify-center gap-4">
    {notableClients.map((client, sIdx) => (
      <span
        key={sIdx}
        className="group px-4 py-2 bg-white/[0.04] border border-white/5 rounded font-display font-bold text-xs text-gray-300 cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-gold-primary/40 hover:bg-gold-primary/10 hover:text-gold-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
      >
        {client}
      </span>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}

// Inline fallback for Layers icon if it isn't resolved from lucide-react directly
function Layers(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-10 5L12 13l10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}
