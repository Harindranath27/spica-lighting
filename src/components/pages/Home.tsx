import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Shield, Cpu, RefreshCw, Layers, GraduationCap, Building2, HelpCircle } from "lucide-react";
import { PRODUCTS, PROJECTS, BUSINESS_STATS, TRUST_BADGES, CATEGORIES_NAV, BRAND_NAME, CONTACT_DETAILS } from "../../data";
import { PROJECT_IMAGES, CATEGORY_IMAGES } from "../../utils/assets";

interface HomeProps {
  onPageChange: (page: string) => void;
  onFilterChange: (category: string) => void;
}

export default function Home({ onPageChange, onFilterChange }: HomeProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [glowCard, setGlowCard] = useState<number | null>(null);

  // Parse 3 featured projects for Homepage projects strip
  const featuredProjects = [
  PROJECTS.find(p => p.name === "Silverline Cancer & Multispecialty Hospital"),
  PROJECTS.find(p => p.name === "IIM Trichy"),
  PROJECTS.find(p => p.name === "Hotel Sri Akshayam"),
].filter(Boolean);

const featuredCategories = [
  {
    title: "Residential Lighting",
    image: "/products/cob-downlight.png",
    filter: "residential",
  },
  {
    title: "Commercial Lighting",
    image: "/products/linea-pro.png",
    filter: "commercial",
  },
  {
    title: "Industrial Lighting",
    image: "/products/high-bay.png",
    filter: "industrial",
  },
  {
    title: "Outdoor Lighting",
    image: "/products/facade-light.png",
    filter: "outdoor",
  },
  {
    title: "Landscape Lighting",
    image: "/products/Reflecto Dixon Mega.png",
    filter: "landscape",
  },
  {
    title: "Facade Lighting",
    image: "/products/Wall Cylin.png",
    filter: "facade",
  },
  {
    title: "Street Lighting",
    image: "/products/Luna-7.png",
    filter: "street",
  },
  {
    title: "Architectural Lighting",
    image: "/products/Cyrilla Round.png",
    filter: "architectural",
  },
  {
    title: "Switches & Electrical",
    image: "/products/Artisa Flat.png",
    filter: "switches",
  },
]; // Silverline Hospital, ANC Church, Hotel Aaryas

  const triggerChatOpen = () => {
    const event = new CustomEvent("open-spica-advisor-chat");
    window.dispatchEvent(event);
  };

  const navigateToCategory = (id: string) => {
    onFilterChange(id);
    onPageChange("products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-deep-black text-gray-100 overflow-hidden">
      
      {/* 1. HERO SECTION WITH FLOATING PARTICLES AND PARALLAX STYLE ACCENTS */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-deep-black to-deep-black overflow-hidden border-b border-gray-900/40">
        
        {/* Subtle Floating Gold Particle Background via Animated CSS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 bg-gold-primary rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-gold-hover rounded-full opacity-20 animate-pulse" style={{ animationDelay: "3s" }} />
          <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-gold-primary rounded-full opacity-45 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-1/2 left-2/3 w-2.5 h-2.5 bg-gold-primary rounded-full opacity-15 animate-ping [animation-duration:4s]" />
          <div className="absolute top-3/4 left-4/5 w-1.5 h-1.5 bg-gold-hover rounded-full opacity-25 animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Backdrop gold glow glow filter */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[400px] bg-gold-primary/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          {/* Subheader Accent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card shadow-[0_4px_15px_rgba(0,0,0,0.3)] rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <Sparkles className="w-3.5 h-3.5 text-gold-primary" />
            <span className="font-display font-semibold text-[10px] tracking-[0.25em] uppercase text-gold-primary">
  Authorized Dealer • Wipro • North West • K-Lite • Nexus
</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight max-w-4xl text-pure-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Lighting & Electrical <span className="bg-gradient-to-r from-gold-primary via-gold-hover to-gold-primary bg-clip-text text-transparent font-extrabold">Solutions</span> 
          </h1>

          {/* Subtext */}
          <p className="font-sans text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-5 duration-800">
  Trusted by businesses, institutions and project developers across Tamil Nadu with authorized solutions from Wipro, North West, K-Lite and Nexus.
</p>

          {/* Action Call-to-actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 mb-16">
            <button
              onClick={() => {
                onFilterChange("all");
                onPageChange("products");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="button-shimmer gold-gradient text-black font-display font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all shadow-[0_8px_30px_rgba(200,155,60,0.3)] hover:shadow-[0_8px_40px_rgba(200,155,60,0.55)] hover:scale-103 flex items-center gap-2 cursor-pointer border border-gold-primary/30"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => {
                onPageChange("projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-transparent hover:bg-stone-900/40 text-pure-white border border-gray-700 hover:border-gold-primary/40 font-display font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all focus:outline-none cursor-pointer"
            >
              VIEW PROJECTS
            </button>
          </div>

          {/* INSTITUTION BADGES / TRUST */}
          <div className="w-full max-w-5xl border-t border-gray-900/60 pt-10">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold">
              TRUSTED ACROSS EDUCATION, HEALTHCARE &amp; COMMERCIAL PROJECTS
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
              {TRUST_BADGES.map((badge, idx) => (
                <div
                  key={idx}
                  className="p-5 glass-card glass-card-hover rounded-lg border border-white/10 hover:border-gold-primary/30 shadow-lg flex flex-col items-center justify-center text-center group transition-all duration-300"
                >
                  <p className="font-display font-extrabold text-sm text-gold-primary tracking-wide group-hover:scale-105 transition-transform duration-300">
                    {badge.term}
                  </p>
                  <p className="font-sans text-[10.5px] text-gray-300 mt-1.5 font-medium">
                    {badge.label}
                  </p>
                  <p className="font-mono text-[9px] text-gray-500 mt-1 leading-none group-hover:text-gold-hover/80 transition-colors">
                    {badge.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-white/[0.02] backdrop-blur-md border-y border-white/10 py-10 shadow-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {BUSINESS_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center group">
                <span className="font-display font-bold text-3xl sm:text-4xl text-pure-white group-hover:text-gold-primary transition-colors">
                  {stat.value}
                </span>
                <span className="font-sans text-[11px] tracking-widest text-gold-primary uppercase font-bold mt-2">
                  {stat.label}
                </span>
                <span className="font-sans text-xs text-gray-500 mt-1 leading-none">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* BRAND PARTNERS */}
      <section className="py-24 bg-stone-950 border-t border-white/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <span className="text-gold-primary uppercase tracking-[0.3em] text-xs font-bold">
        Authorized Brand Partners
      </span>

      <h2 className="mt-4 text-4xl font-display font-bold text-white">
        Trusted Industry Leaders
      </h2>

      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Spica Lighting proudly partners with leading lighting and electrical brands to deliver world-class solutions across residential, commercial, industrial and architectural projects.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

  <div className="glass-card rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-gold-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
    <div className="text-gold-primary text-3xl font-black tracking-wider mb-4">
      WIPRO
    </div>

    <p className="text-gray-400 text-sm leading-relaxed">
      Commercial, industrial and architectural lighting solutions.
    </p>

    <span className="inline-block mt-5 text-[10px] uppercase tracking-[0.2em] text-gold-primary font-semibold">
      Authorised Partner
    </span>
  </div>

  <div className="glass-card rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-gold-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
    <div className="text-gold-primary text-3xl font-black tracking-wider mb-4">
      NORTH WEST
    </div>

    <p className="text-gray-400 text-sm leading-relaxed">
      Premium modular switches, sockets and electrical accessories.
    </p>

    <span className="inline-block mt-5 text-[10px] uppercase tracking-[0.2em] text-gold-primary font-semibold">
      Authorised Partner
    </span>
  </div>

  <div className="glass-card rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-gold-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
    <div className="text-gold-primary text-3xl font-black tracking-wider mb-4">
      K-LITE
    </div>

    <p className="text-gray-400 text-sm leading-relaxed">
      Architectural, facade and outdoor lighting solutions for commercial and infrastructure projects.
    </p>

    <span className="inline-block mt-5 text-[10px] uppercase tracking-[0.2em] text-gold-primary font-semibold">
      Authorised Partner
    </span>
  </div>

  <div className="glass-card rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-gold-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
    <div className="text-gold-primary text-3xl font-black tracking-wider mb-4">
      NEXUS
    </div>

    <p className="text-gray-400 text-sm leading-relaxed">
      Decorative, designer and premium interior lighting collections.
    </p>

    <span className="inline-block mt-5 text-[10px] uppercase tracking-[0.2em] text-gold-primary font-semibold">
      Authorised Partner
    </span>
  </div>
</div>
</div>
</section>

      {/* 3. PRODUCT CATEGORIES BENTO GRID */}
      <section className="py-24 bg-deep-black relative">
        <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-display text-xs text-gold-primary font-bold uppercase tracking-[0.2em] mb-3 block">
              ✦ Structured Solutions
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-pure-white leading-tight">
              Configured For Your Environment
            </h2>
            <div className="w-12 h-0.5 bg-gold-primary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES_NAV.map((cat, idx) => {
              return (
                <div
                  key={cat.id}
                  onClick={() => navigateToCategory(cat.id)}
                  className="group relative min-h-[500px] glass-card glass-card-hover rounded-xl overflow-hidden flex flex-col justify-start p-6 cursor-pointer border border-white/10 shadow-xl transition-all"
                >
                  {/* Premium Pure CSS Light Beams (Elegant glowing effects reflecting lighting design) */}
                  <div className="absolute inset-0 z-0 bg-stone-950/60">
                    {/* Top Right glow mimicking a recessed spotlight bloom */}
                    <div className="absolute top-[-40px] right-[-40px] w-40 h-40 bg-gold-primary/10 rounded-full blur-[45px] group-hover:bg-gold-primary/20 group-hover:scale-110 transition-all duration-500" />
                    
                    {/* Soft ambient lighting cone emanating from the top ceiling corner */}
                    <svg className="absolute top-0 right-0 w-full h-full opacity-15 group-hover:opacity-25 transition-opacity duration-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon points="100,0 80,0 30,100 100,100" fill="url(#light-cone-grad)" />
                      <defs>
                        <linearGradient id="light-cone-grad" x1="100%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#E5C87A" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#C89B3C" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="relative z-10">

  <div className="bg-white rounded-lg p-4 mb-4 flex justify-center items-center h-40">
    <img
      src={featuredCategories[idx]?.image}
      alt={cat.label}
      className="max-h-24 w-auto object-contain"
    />
  </div>

  <span className="font-mono text-[10px] text-gold-primary uppercase tracking-widest block mb-2 font-semibold">
                    </span>
                    <h3 className="font-display font-bold text-lg text-pure-white group-hover:text-gold-primary transition-colors mb-2">
                      {cat.label}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300">
                      {cat.desc}
                    </p>
                    <div className="flex items-center gap-1.5 font-display text-xs text-gold-primary font-bold uppercase tracking-wider block">
                      <span>Explore Catalog</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. BRAND DIFFERENTIATORS section */}
      <section className="py-24 bg-stone-950/80 border-y border-gray-900/60 relative">
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="font-display text-xs text-gold-primary font-bold uppercase tracking-[0.2em]">
                ✦ Executive Capabilities
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl text-pure-white leading-tight">
                Project Expertise Beyond Supply
              </h2>
              <p className="font-sans text-sm text-gray-400 leading-relaxed mt-2">
                For over 9 years, Spica Lighting has supplied and supported residential, commercial, industrial and institutional projects across Tamil Nadu with trusted lighting and electrical solutions.
              </p>
              
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-stone-900 border border-gray-800 text-gold-primary mt-1">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-pure-white">
                      Authorised Brand Supply
                    </h4>
                    <p className="font-sans text-xs text-gray-400 leading-normal mt-0.5">
                      Direct access to Wipro, North West, K-Lite and Nexus product portfolios with genuine manufacturer-backed solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-stone-900 border border-gray-800 text-gold-primary mt-1">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-pure-white">
                     Projects Of Every Scale
                    </h4>
                    <p className="font-sans text-xs text-gray-400 leading-normal mt-0.5">
                      From residences and retail stores to hospitals, campuses and large commercial facilities, we scale solutions to project requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* THREE DIFFERENTIATOR COLUMN PILLARS */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="glass-card glass-card-hover p-6 border border-white/10 rounded-xl shadow-lg transition-all duration-300">
                <span className="font-display font-extrabold text-3xl text-gold-primary block mb-4">01</span>
                <h4 className="font-display font-semibold text-sm text-pure-white mb-2 uppercase tracking-wide">
                  Designed for the Discerning
                </h4>
                <p className="font-sans text-xs text-gray-300 leading-relaxed">
                  Tailored luminaire layouts configured specifically for premium layouts. We optimize beam spread, lux targets, and color metrics for precise vibes.
                </p>
              </div>

              <div className="glass-card glass-card-hover p-6 border border-gold-primary/30 rounded-xl relative shadow-xl transition-all duration-300 bg-white/[0.05]">
                <div className="absolute top-4 right-4 text-gold-primary">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="font-display font-extrabold text-3xl text-gold-primary block mb-4">02</span>
                <h4 className="font-display font-semibold text-sm text-pure-white mb-2 uppercase tracking-wide">
                  Project-Ready Solutions
                </h4>
                <p className="font-sans text-xs text-gray-300 leading-relaxed">
                  Heavy-duty performance arrays. Every unit handles heat dissipation and voltage ripples, guaranteeing lifetime efficiency under Tamil Nadu climate cycles.
                </p>
              </div>

              <div className="glass-card glass-card-hover p-6 border border-white/10 rounded-xl shadow-lg transition-all duration-300">
                <span className="font-display font-extrabold text-3xl text-gold-primary block mb-4">03</span>
                <h4 className="font-display font-semibold text-sm text-pure-white mb-2 uppercase tracking-wide">
                  Transparent Sourcing
                </h4>
                <p className="font-sans text-xs text-gray-300 leading-relaxed">
                  100% legal compliance. Honest pricing, original manufacturing parameters, and direct supply channels with no hidden middlemen.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE CHAT ADVISOR WIDGET CONTEXT */}
      <section className="py-24 bg-gradient-to-r from-stone-950 via-neutral-950 to-stone-950 border-b border-gray-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            
            {/* Background elements */}
            <div className="absolute -top-12 -left-12 w-[150px] h-[150px] bg-gold-primary/10 rounded-full blur-[60px]" />
            <div className="absolute -bottom-12 -right-12 w-[150px] h-[150px] bg-gold-primary/10 rounded-full blur-[60px]" />

            <div className="flex-1 space-y-4 relative z-10">
              <span className="font-mono text-xs text-gold-primary uppercase tracking-widest block font-bold">
                ✦ Smart Lighting Assistant
              </span>
              <h2 className="font-display font-medium text-2xl sm:text-4xl text-pure-white leading-tight">
                Get Instant Lighting Recommendations
For Your Project
              </h2>
              <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-2xl">
                Need help choosing the right lighting solution? Our Lighting Assistant can recommend suitable products, estimate lighting requirements, answer technical questions and guide you towards the best solution for your space.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-gray-300 pt-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
                  <span>Product Recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
                  <span>Room Lighting Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
                  <span> Energy Saving Calculations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
                  <span>Technical Support & Guidance</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col gap-3 items-center justify-center glass-card-strong p-6 rounded-xl border border-white/20 text-center max-w-[280px] shadow-2xl relative z-10">
              <HelpCircle className="w-10 h-10 text-gold-primary animate-bounce mb-2" />
              <p className="font-display font-bold text-sm text-pure-white">
                Lighting Assistant
              </p>
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed mb-4">
                Ask about products, room lighting, energy savings or technical support.
              </p>
              <button
                onClick={triggerChatOpen}
                className="button-shimmer gold-gradient text-black font-display font-bold text-[10px] tracking-wider uppercase px-5 py-3 rounded-sm leading-none transition-all hover:scale-103 cursor-pointer w-full border border-gold-primary/30"
              >
                Ask The Assistant
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PROJECTS STRIP PANEL */}
      <section className="py-24 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-display text-xs text-gold-primary font-bold uppercase tracking-[0.2em] mb-2 block">
                ✦ High Integrity Runs
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl text-pure-white tracking-tight leading-tight">
                Featured Projects
              </h2>
            </div>
            
            <button
              onClick={() => {
                onPageChange("projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-gold-primary hover:text-gold-hover font-display text-xs font-bold uppercase tracking-widest flex items-center gap-1 cursor-pointer select-none"
            >
              <span>VIEW ALL PROJECTS →</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    onPageChange("projects");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer border border-white/10 shadow-xl transition-all duration-300 p-6 min-h-[100px] relative bg-white/[0.01]"
                >
                  <div className="space-y-4">
                    {/* Project Header Tag & Location */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="bg-gold-primary/10 text-gold-primary border border-gold-primary/20 font-mono text-[9px] tracking-wider px-2.5 py-1 font-bold uppercase rounded">
                        {project.type}
                      </span>
                      <span className="font-mono text-[10px] text-gray-500 font-semibold uppercase">
                        {project.city}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-base sm:text-lg text-pure-white group-hover:text-gold-primary transition-colors leading-snug">
                        {project.name}
                      </h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3">
                        {project.scope}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER SECTION */}
      <section className="bg-stone-950 py-24 relative overflow-hidden border-t border-gray-900">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-medium text-3xl sm:text-5xl leading-tight tracking-tight text-pure-white mb-6">
            Ready to Light Up Your Space?
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Submit your layout drawings, electrical load targets or specific fixtures schedule. Our expert engineering desk processes inputs and reverts with an optimized, genuine quotation and technical recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onPageChange("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="button-shimmer gold-gradient text-black font-display font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all shadow-[0_8px_30px_rgba(200,155,60,0.35)] hover:shadow-[0_8px_40px_rgba(200,155,60,0.6)] hover:scale-103 flex items-center gap-2 cursor-pointer border border-gold-primary/30"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href={CONTACT_DETAILS.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-transparent hover:bg-emerald-950/20 text-emerald-500 border border-emerald-900/40 hover:border-emerald-500/50 rounded-sm font-display font-bold text-xs tracking-widest uppercase flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.003 21.003c-1.636 0-3.176-.404-4.544-1.114l-.326-.17-3.377.885.9-.3.284-3.073-.186-.297C3.963 15.542 3.51 13.827 3.51 12c0-4.68 3.81-8.49 8.49-8.49s8.49 3.81 8.49 8.49-3.81 8.49-8.49 8.49m0-18C6.477 3.003 2.003 7.477 2.003 13c0 1.932.548 3.827 1.584 5.485L2 24l5.698-1.493C9.284 23.36 10.632 23.997 12.003 23.997c5.523 0 9.997-4.474 9.997-9.997S17.526 3.003 12.003 3.003z" />
              </svg>
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
      

    </div>
  );
}
