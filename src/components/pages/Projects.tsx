import React, { useState } from "react";
import { Sparkles, MapPin, Search, Calendar, ChevronRight, HelpCircle } from "lucide-react";
import { PROJECTS, CONTACT_DETAILS } from "../../data";
import { PROJECT_IMAGES } from "../../utils/assets";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);

  // Group of filters corresponding to Section 5.3
  const projectFilters = [
  "All",
  "Institutional",
  "Healthcare",
  "Hospitality",
  "Commercial",
  "Marriage Hall"
];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === "All") return true;
    return proj.type.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <div className="bg-deep-black min-h-screen text-gray-200 pt-32 pb-24 relative overflow-hidden">
      {/* Background radial gold soft glows */}
      <div className="absolute top-[30%] left-[5%] w-[350px] h-[350px] bg-gold-primary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-gold-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="text-center md:text-left max-w-3xl mb-12">
          <span className="font-display text-xs text-gold-primary font-bold uppercase tracking-[0.2em] mb-2.5 block">
            ✦ Completed Portfolios
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-pure-white mb-4">
            Our Work Speaks In Light
          </h1>
          <p className="font-sans text-sm text-gray-400 leading-relaxed">
            From premier national academic institutions to multi-storey healthcare facilities and bespoke fine-dining venues - see how Spica Lighting engineers precision throughout Tamil Nadu.
          </p>
        </div>

        {/* METRIC BADGES STRIP IN THE PROJECT PAGE */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 glass-card p-4 rounded-xl mb-10 shadow-xl border border-white/10 bg-white/[0.02]">
          <div className="text-center py-2">
            <span className="block font-display font-bold text-lg text-gold-primary">IIM Trichy</span>
            <span className="block text-[10px] uppercase text-gray-500 font-mono tracking-wider mt-1">Cricket Stadium Lights</span>
          </div>
          <div className="text-center py-2 border-l border-white/10">
            <span className="block font-display font-bold text-lg text-gold-primary">NIT Trichy</span>
            <span className="block text-[10px] uppercase text-gray-500 font-mono tracking-wider mt-1">Campus Hub Luminaires</span>
          </div>
          <div className="text-center py-2 border-l border-white/10">
            <span className="block font-display font-bold text-lg text-gold-primary">Silverline</span>
            <span className="block text-[10px] uppercase text-gray-500 font-mono tracking-wider mt-1">Multi-Storey Medical Facade</span>
          </div>
          <div className="text-center py-2 border-l border-white/10">
            <span className="block font-display font-bold text-lg text-gold-primary">200+ Projects</span>
            <span className="block text-[10px] uppercase text-gray-500 font-mono tracking-wider mt-1">Tamil Nadu Footprint</span>
          </div>
        </div>

        {/* CATEGORY SELECTOR CHUKS */}
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap mb-12 py-1 border-b border-white/5 pb-3 scrollbar-none">
          {projectFilters.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setSelectedFilter(tab);
                setActiveProjectIdx(null);
              }}
              className={`px-5 py-2.5 text-xs font-display tracking-widest uppercase rounded-lg border transition-all cursor-pointer ${
                selectedFilter === tab
                  ? "gold-gradient text-gray-950 font-extrabold border-gold-primary/40 shadow-lg"
                  : "bg-white/[0.04] backdrop-blur border-white/10 text-gray-400 hover:text-gold-hover hover:border-gold-hover/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID DISPLAY */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-stone-950 border border-gray-900 rounded-sm">
            <HelpCircle className="w-12 h-12 text-gold-primary/30 mx-auto mb-4" />
            <h3 className="font-display font-semibold text-lg text-pure-white mb-2">
              No matching installations
            </h3>
            <p className="font-sans text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
              We haven't listed projects under this filter tab in the catalog yet. We continue expanding our public case portfolio regularly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, index) => {
              return (
                <div
                  key={index}
                  className="group relative glass-card glass-card-hover border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 p-6 bg-white/[0.01]"
                >
                  <div className="space-y-4">
                    {/* Project Header Tag & Location */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="bg-gold-primary/10 text-gold-primary border border-gold-primary/20 font-mono text-[9px] tracking-wider px-2.5 py-1 font-bold uppercase rounded">
                        {proj.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-gray-400 font-mono text-[10px] font-semibold uppercase">
                        <MapPin className="w-3 h-3 text-gold-primary shrink-0" />
                        <span>{proj.city}</span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="font-display font-bold text-lg text-pure-white group-hover:text-gold-primary transition-colors leading-snug">
                        {proj.name}
                      </h3>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed">
                        {proj.scope}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    {/* Specifications detail accordion context */}

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TRUST ACCENT BLOCK */}
        <div className="mt-20 border border-gold-primary/15 bg-stone-950 p-8 rounded-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-2">
            <span className="font-mono text-[10px] text-gold-primary block uppercase tracking-wide font-bold">
              ✦ Technical Integration Quality
            </span>
            <h3 className="font-display font-semibold text-lg sm:text-xl text-pure-white">
              Over 200+ Premium Engineering Commites Delivered
            </h3>
            <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-2xl">
              We cooperate directly with architects, main contractors, HVAC engineers and building promoters. Request full references, drawing layouts or sample boards for approval in Tamil Nadu.
            </p>
          </div>

          <a
            href={CONTACT_DETAILS.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-gold-primary hover:bg-gold-hover text-gray-950 font-display font-bold text-xs tracking-widest uppercase rounded-sm transition-transform hover:scale-103 shrink-0 cursor-pointer shadow-md"
          >
            Settle Your Project Quote
          </a>
        </div>

      </div>
    </div>
  );
}
