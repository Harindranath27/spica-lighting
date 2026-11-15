import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, ImageOff, MapPin, X } from "lucide-react";
import { PROJECTS, CONTACT_DETAILS } from "../../data";
import type { Project } from "../../types";

const projectFilters = ["All", "Institutional", "Healthcare", "Hospitality", "Commercial", "Marriage Hall"];
const featuredNames = ["IIM Trichy Cricket Ground", "NIT Trichy", "Silverline Cancer & Multispecialty Hospital"];

function ProjectImage({ project, className = "" }: { project: Project; className?: string }) {
  const positionClass = className.split(/\s+/).includes("absolute") ? "absolute" : "relative";
  if (project.image) {
    return <div className={`overflow-hidden bg-[#081522] ${positionClass} ${className}`}><img src={project.image} alt={`${project.name} project photograph`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div>;
  }
  return (
    <div
      role="img"
      aria-label={`No verified project photograph available for ${project.name}`}
      className={`isolate overflow-hidden bg-[#081522] ${positionClass} ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[#0B1C2B]" />
      <div aria-hidden="true" className="absolute inset-4 border border-white/[0.08] sm:inset-6">
        <span className="absolute left-0 top-0 h-5 w-px bg-[#C89B3C]/60" />
        <span className="absolute left-0 top-0 h-px w-5 bg-[#C89B3C]/60" />
        <span className="absolute bottom-0 right-0 h-5 w-px bg-[#C89B3C]/60" />
        <span className="absolute bottom-0 right-0 h-px w-5 bg-[#C89B3C]/60" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
        <ImageOff className="h-6 w-6 text-[#C89B3C]/80 sm:h-7 sm:w-7" strokeWidth={1.2} />
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#9CA3AF] sm:text-[10px]">No verified photograph</span>
      </div>
      <span aria-hidden="true" className="absolute bottom-5 left-7 font-mono text-[8px] uppercase tracking-[0.18em] text-[#9CA3AF]/50">{project.type} · Project reference</span>
    </div>
  );
}
export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const filteredProjects = PROJECTS.filter((project) => selectedFilter === "All" || project.type === selectedFilter);
  const featuredProjects = featuredNames.map((name) => PROJECTS.find((project) => project.name === name)).filter((project): project is Project => Boolean(project) && (selectedFilter === "All" || project.type === selectedFilter));
  const featuredProjectNames = new Set(featuredProjects.map((project) => project.name));
  const gridProjects = filteredProjects.filter((project) => !featuredProjectNames.has(project.name));
  const filterCounts = (filter: string) => filter === "All" ? PROJECTS.length : PROJECTS.filter((project) => project.type === filter).length;

  useEffect(() => {
    if (!activeProject) return;
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = document.querySelector<HTMLElement>("[role=dialog]");
      const focusable = dialog?.querySelectorAll<HTMLElement>(`a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])`);
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      openerRef.current?.focus();
    };
  }, [activeProject]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081522] pb-20 pt-28 text-[#F3F1EC] sm:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-40 h-[34rem] w-[34rem] rounded-full bg-[#C89B3C]/[0.045] blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 grid gap-7 border-b border-white/[0.08] pb-9 md:grid-cols-[1fr_auto] md:items-end md:gap-12 md:pb-11">
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#C89B3C] sm:text-xs">
              <span className="h-px w-8 bg-[#C89B3C]" /> Project portfolio <span className="text-[#9CA3AF]/50">/ {String(PROJECTS.length).padStart(2, "0")} references</span>
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#F3F1EC] sm:text-5xl lg:text-6xl">
              Our Work Speaks in Light.
            </h1>
          </div>
        </header>

        <section aria-labelledby="featured-heading" className="mb-16 sm:mb-20">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#C89B3C]">Selected references</p>
              <h2 id="featured-heading" className="font-display text-xl font-medium text-[#F3F1EC] sm:text-2xl">A closer look</h2>
            </div>
            <a href="#portfolio" className="group inline-flex min-h-11 items-center gap-2 text-xs font-medium text-[#9CA3AF] transition-colors hover:text-[#C89B3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C]">
              Browse all <ArrowDownRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.48fr_1fr]">
            {featuredProjects.slice(0, 1).map((project) => (
              <button key={project.name} type="button" onClick={() => setActiveProject(project)} className="group relative min-h-[310px] overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C] sm:min-h-[400px] lg:min-h-[480px]">
                <ProjectImage project={project} className="absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081522] via-[#081522]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
                    <span className="text-[#C89B3C]">{project.type}</span><span>{project.city}</span>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <div><h3 className="font-display text-2xl font-medium text-white sm:text-4xl">{project.name}</h3><p className="mt-2 text-sm text-white/70">{project.scope}</p></div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#C89B3C]/40 text-[#C89B3C] transition-colors group-hover:border-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-[#081522]"><ArrowUpRight aria-hidden="true" className="h-5 w-5" /></span>
                  </div>
                </div>
              </button>
            ))}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {featuredProjects.slice(1).map((project) => (
                <button key={project.name} type="button" onClick={() => setActiveProject(project)} className="group grid min-h-[170px] grid-cols-[42%_1fr] overflow-hidden border border-white/[0.08] bg-[#0B1C2B] text-left transition-colors hover:border-[#C89B3C]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C89B3C] sm:min-h-[190px] lg:min-h-0 lg:grid-cols-[45%_1fr]">
                  <ProjectImage project={project} className="h-full min-h-[170px] sm:min-h-[190px] lg:min-h-[232px]" />
                  <div className="flex flex-col justify-center p-3 sm:p-5">
                    <span className="mb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#C89B3C]">{project.type} · {project.city}</span>
                    <h3 className="font-display text-base font-medium leading-snug text-[#F3F1EC] sm:text-xl">{project.name}</h3>
                    <p className="mt-2 text-xs text-[#9CA3AF]">{project.scope}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#9CA3AF] transition-colors group-hover:text-[#C89B3C]">View reference <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" aria-labelledby="portfolio-heading" className="scroll-mt-24">
          <div className="mb-5 flex flex-col gap-4 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#C89B3C]">Browse by category</p><h2 id="portfolio-heading" className="font-display text-2xl font-medium text-[#F3F1EC] sm:text-3xl">Project references</h2></div>
            <p aria-live="polite" className="font-mono text-[11px] text-[#9CA3AF]">{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}</p>
          </div>
          <div role="group" aria-label="Filter projects by category" className="-mx-4 mb-7 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
            {projectFilters.map((filter) => {
              const active = selectedFilter === filter;
              return <button key={filter} type="button" aria-pressed={active} onClick={() => setSelectedFilter(filter)} className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C89B3C] ${active ? "border-[#C89B3C] bg-[#C89B3C] text-[#081522] font-bold" : "border-white/[0.08] bg-[#0B1C2B] text-[#9CA3AF] hover:border-[#C89B3C]/60 hover:text-white"}`}>
                {filter}<span className={`font-mono text-[10px] ${active ? "text-[#081522]/75 font-bold" : "text-[#9CA3AF]"}`}>{filterCounts(filter)}</span>
              </button>;
            })}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={selectedFilter} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -5 }} transition={{ duration: reduceMotion ? 0 : 0.22 }} className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10">
              {gridProjects.map((project, index) => (
                <motion.button key={project.name} type="button" onClick={() => setActiveProject(project)} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.24, delay: reduceMotion ? 0 : Math.min(index * 0.025, 0.16) }} className="group min-w-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C]">
                  <ProjectImage project={project} className="aspect-[1.55] w-full" />
                  <div className="flex items-start justify-between gap-3 border-b border-white/[0.08] py-4 transition-colors group-hover:border-[#C89B3C]/50">
                    <div className="min-w-0">
                      <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#C89B3C]">{project.type}</span>
                      <h3 className="font-display text-lg font-medium leading-snug text-[#F3F1EC] transition-colors group-hover:text-[#C89B3C] sm:text-xl">{project.name}</h3>
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-[#9CA3AF]"><MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#C89B3C]" />{project.city}</p>
                      <p className="mt-1 text-xs text-[#9CA3AF]/80">{project.scope}</p>
                    </div>
                    <span aria-hidden="true" className="mt-5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/[0.08] text-[#9CA3AF] transition-all group-hover:border-[#C89B3C] group-hover:text-[#C89B3C]"><ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        <section className="mt-16 flex flex-col gap-6 border-y border-white/[0.12] py-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:py-10 bg-[#0B1C2B] px-6 sm:px-8 rounded-xl">
          <div className="max-w-2xl"><p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#C89B3C]">Project enquiry</p><h2 className="font-display text-2xl font-medium text-[#F3F1EC] sm:text-3xl">Planning a lighting project?</h2><p className="mt-2 text-sm leading-6 text-[#9CA3AF]">Contact Spica Lighting to discuss your project requirements.</p></div>
          <a href={CONTACT_DETAILS.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#C89B3C] px-6 text-xs font-bold uppercase tracking-[0.14em] text-[#081522] transition-colors hover:bg-[#E5C87A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C] rounded-sm">Discuss your project <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
        </section>
      </div>

      <AnimatePresence>
        {activeProject && <motion.div role="presentation" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null); }}>
          <motion.section role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, y: 8 }} className="relative grid max-h-[90vh] w-full max-w-3xl overflow-auto border border-white/[0.08] bg-[#0B1C2B] sm:grid-cols-[1fr_0.85fr] rounded-lg shadow-2xl">
            <button ref={closeButtonRef} type="button" onClick={() => setActiveProject(null)} aria-label="Close project details" className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/[0.12] bg-black/60 text-white hover:border-[#C89B3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C89B3C]"><X className="h-5 w-5" /></button>
            <ProjectImage project={activeProject} className="aspect-[1.4] min-h-56 sm:aspect-auto sm:min-h-[360px]" />
            <div className="flex flex-col justify-center p-6 sm:p-8"><span className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#C89B3C]">{activeProject.type}</span><h2 id="project-dialog-title" className="font-display text-2xl font-medium leading-tight text-[#F3F1EC] sm:text-3xl">{activeProject.name}</h2><p className="mt-4 flex items-center gap-2 text-sm text-[#F3F1EC]"><MapPin aria-hidden="true" className="h-4 w-4 text-[#C89B3C]" />{activeProject.city}</p><p className="mt-3 text-sm text-[#9CA3AF]">{activeProject.scope}</p>{!activeProject.image && <p className="mt-6 border-t border-white/[0.08] pt-4 text-xs leading-5 text-[#9CA3AF]/70">No verified photograph is linked to this project record.</p>}</div>
          </motion.section>
        </motion.div>}
      </AnimatePresence>
    </main>
  );
}




