import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CONTACT_DETAILS, FOUNDED, PROJECTS } from "../../data";

interface HomeProps {
  onPageChange: (page: string) => void;
  onFilterChange: (category: string) => void;
}

const BRAND_PARTNERS = [
  { name: "Wipro Lighting", logo: "/brands/wipro.png", categoryFilter: "commercial" },
  { name: "Wipro North-West", logo: "/brands/northwest.png", categoryFilter: "switches" },
  { name: "K-Lite", logo: "/brands/klite.png", categoryFilter: "architectural" },
  { name: "Nexus Lighting", logo: "/brands/nexus.png", categoryFilter: "residential" }
];

const capabilities = [
  {
    number: "01",
    title: "Lighting Supply",
    description: "Commercial, architectural and outdoor lighting from authorised brand partners.",
    action: "Explore lighting",
    onClick: (props: HomeProps) => props.onFilterChange("commercial")
  },
  {
    number: "02",
    title: "Electrical Accessories",
    description: "Modular switches and distribution products for building projects.",
    action: "Explore accessories",
    onClick: (props: HomeProps) => props.onFilterChange("switches")
  },
  {
    number: "03",
    title: "Project Support",
    description: "Talk through product selection and supply requirements with our team.",
    action: "Discuss a project",
    onClick: (props: HomeProps) => props.onPageChange("contact")
  }
];

export default function Home({ onPageChange, onFilterChange }: HomeProps) {
  const reduceMotion = useReducedMotion();
  const leadProject = PROJECTS.find((project) => project.name === "Silverline Cancer & Multispecialty Hospital")!;
  const heroImage = PROJECTS.find((project) => project.name === "Hotel Sai Karthik")?.image;
  const supportingProjects = [
    PROJECTS.find((project) => project.name === "IIM Trichy Cricket Ground")!,
    PROJECTS.find((project) => project.name === "NIT Trichy")!
  ];

  const navigate = (page: string) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <main className="bg-[#081522] text-[#F3F1EC] selection:bg-[#C89B3C]/30 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/[0.08] pt-24 sm:pt-28 lg:pt-32">
        <div className="spica-container">
          <div className="grid items-center gap-7 pb-12 sm:pb-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:pb-20">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.11 } } }} className="relative z-10 max-w-2xl py-2 lg:py-10">
              <motion.p variants={reveal} className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#9CA3AF]">
                Authorised lighting supply · Tamil Nadu
              </motion.p>
              <motion.h1 variants={reveal} className="max-w-[12ch] text-balance font-display text-[clamp(2.7rem,5.1vw,5rem)] font-medium leading-[1.02] tracking-[-0.045em] text-[#F3F1EC]">
                Lighting Solutions for Every Space.
              </motion.h1>
              <motion.p variants={reveal} className="mt-6 max-w-lg text-base leading-7 text-[#9CA3AF] sm:text-lg sm:leading-8">
                Authorised lighting supply for commercial, institutional and architectural projects across Tamil Nadu.
              </motion.p>
              <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="button" onClick={() => navigate("contact")} className="btn-steel-solid inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 text-xs font-bold tracking-[0.12em] focus-visible:ring-2 focus-visible:ring-white">
                  Discuss Your Project <ArrowRight className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => navigate("projects")} className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/[0.12] px-6 text-xs font-bold tracking-[0.12em] text-[#F3F1EC] transition-colors hover:border-[#C89B3C]/60 hover:text-[#C89B3C] focus-visible:ring-2 focus-visible:ring-[#C89B3C]">
                  Explore Our Work <ArrowUpRight className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>

            <motion.figure initial={{ opacity: 0, clipPath: reduceMotion ? "inset(0)" : "inset(0 0 0 8%)" }} animate={{ opacity: 1, clipPath: "inset(0)" }} transition={{ duration: reduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : 0.08 }} className="relative min-w-0">
              <div className="relative h-[min(48vh,420px)] min-h-[260px] overflow-hidden bg-[#0B1C2B] sm:h-[min(54vh,500px)] lg:h-[min(67vh,650px)]">
                {heroImage ? <img src={heroImage} alt="Architecturally illuminated building exterior" fetchPriority="high" className="h-full w-full object-cover object-[52%_44%] transition-transform duration-700 hover:scale-[1.025] motion-reduce:transition-none" /> : <div aria-label="No verified project photograph available" className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-wider text-[#9CA3AF]">No verified photograph</div>}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081522]/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/90 sm:bottom-6 sm:left-6">Lighting for places that matter</span>
              </div>
            </motion.figure>
          </div>
        </div>
      </section>

      <section aria-label="Spica Lighting credentials and authorised partners" className="border-b border-white/[0.08] bg-[#081522]">
        <div className="spica-container py-6 sm:py-7">
          <div className="grid gap-7 xl:grid-cols-[1fr_1fr] xl:items-center xl:gap-8 2xl:flex 2xl:justify-between">
            <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-5 xl:gap-x-3 2xl:flex 2xl:gap-7">
              <div className="min-w-0 whitespace-nowrap"><p className="font-display text-xl font-medium text-[#F3F1EC] sm:text-2xl">Est. {FOUNDED}</p><p className="mt-1 text-sm text-[#9CA3AF]">Lighting supply</p></div>
              <div className="min-w-0 whitespace-nowrap"><p className="font-display text-xl font-medium text-[#F3F1EC] sm:text-2xl">200+</p><p className="mt-1 text-sm text-[#9CA3AF]">Projects supplied</p></div>
              <div className="min-w-0 whitespace-nowrap"><p className="font-display text-xl font-medium text-[#F3F1EC] sm:text-2xl">4 partners</p><p className="mt-1 text-sm text-[#9CA3AF]">Authorised brands</p></div>
              <div className="min-w-0 whitespace-nowrap"><p className="font-display text-xl font-medium text-[#F3F1EC] sm:text-2xl">Tamil Nadu</p><p className="mt-1 text-sm text-[#9CA3AF]">Regional supply</p></div>
            </div>
            <div className="border-t border-white/[0.08] pt-5 xl:border-l xl:border-t-0 xl:pl-6 xl:pt-0 2xl:border-l 2xl:pl-7">
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-[#9CA3AF]">Authorised brand partners</span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:flex xl:items-center xl:gap-2 2xl:gap-3">
                {BRAND_PARTNERS.map((brand) => (
                  <button key={brand.name} type="button" onClick={() => { onFilterChange(brand.categoryFilter); navigate("products"); }} title={`View ${brand.name} products`} className="flex h-11 min-w-0 items-center justify-center rounded-sm bg-white px-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#C89B3C] motion-reduce:transform-none sm:h-12 xl:w-[84px] xl:flex-none xl:px-1 2xl:w-[88px]">
                    <img src={brand.logo} alt={brand.name} className="max-h-7 w-auto max-w-[92px] object-contain sm:max-h-8 xl:max-w-[78px]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spica-section border-b border-white/[0.08] bg-[#081522]">
        <div className="spica-container">
          <div className="mb-10 grid gap-4 md:mb-14 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C89B3C]">What we do</p>
              <h2 className="max-w-xl font-display text-3xl font-medium leading-tight tracking-tight text-[#F3F1EC] sm:text-4xl">Practical support for building projects.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[#9CA3AF] md:justify-self-end">Lighting, electrical accessories and project support from one authorised supply partner.</p>
          </div>
          <div className="grid grid-cols-1 border-t border-white/[0.08] md:grid-cols-3 md:divide-x md:divide-[#C89B3C]/15">
            {capabilities.map((item) => (
              <button key={item.number} type="button" onClick={() => { item.onClick({ onPageChange, onFilterChange }); if (item.number !== "03") navigate("products"); else navigate("contact"); }} className="group flex min-h-[205px] flex-col items-start border-b border-white/[0.08] py-6 text-left focus-visible:ring-2 focus-visible:ring-[#C89B3C] md:min-h-[230px] md:border-b-0 md:px-6 md:py-7 first:md:pl-0 last:md:pr-0">
                <span className="font-mono text-[10px] text-[#9CA3AF]">{item.number}</span>
                <span className="mt-5 font-display text-xl font-medium text-[#F3F1EC] transition-colors group-hover:text-[#C89B3C] sm:text-2xl">{item.title}</span>
                <span className="mt-2 max-w-sm text-sm leading-6 text-[#9CA3AF]">{item.description}</span>
                <span className="mt-auto flex items-center gap-2 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C89B3C]">{item.action}<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="spica-section border-b border-white/[0.08] bg-[#0B1C2B]">
        <div className="spica-container">
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C89B3C]">Selected references</p>
              <h2 className="font-display text-3xl font-medium tracking-tight text-[#F3F1EC] sm:text-4xl">Projects in focus.</h2>
            </div>
            <button type="button" onClick={() => navigate("projects")} className="group inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.14em] text-[#9CA3AF] transition-colors hover:text-[#C89B3C] sm:self-auto">View all projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
          </div>

          <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} onClick={() => navigate("projects")} className="group grid cursor-pointer gap-0 md:grid-cols-[1.35fr_0.65fr]">
            <div className="relative min-h-[290px] overflow-hidden bg-[#081522] sm:min-h-[390px] lg:min-h-[510px]">
              {leadProject.image ? <img src={leadProject.image} alt={`${leadProject.name} project photograph`} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[52%_42%] transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none" /> : <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-wider text-[#9CA3AF]">No verified photograph</div>}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081522]/70 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85">Healthcare · Manachanallur, Trichy</span>
            </div>
            <div className="flex min-h-[270px] flex-col justify-between border-b border-white/[0.08] bg-[#0B1C2B] p-6 sm:p-8 lg:p-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#9CA3AF]">Featured reference · 01</p>
                <h3 className="mt-5 max-w-md font-display text-2xl font-medium leading-tight text-[#F3F1EC] sm:text-3xl lg:text-4xl">{leadProject.name}</h3>
                <p className="mt-4 text-sm leading-6 text-[#9CA3AF]">{leadProject.type} · {leadProject.scope}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#C89B3C]">View project references <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </div>
          </motion.article>

          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
            {supportingProjects.map((project, index) => {
              return (
                <motion.article key={project.name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} onClick={() => navigate("projects")} className="group cursor-pointer">
                  <div className="relative aspect-[1.55] overflow-hidden bg-[#081522]">
                    {project.image ? <img src={project.image} alt={`${project.name} project photograph`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none" /> : <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-wider text-[#9CA3AF]">No verified photograph</div>}
                    <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/90">{project.type} · {project.city}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] py-4">
                    <div><h3 className="font-display text-xl font-medium text-[#F3F1EC]">{project.name}</h3><p className="mt-1 text-xs text-[#9CA3AF]">{project.scope}</p></div>
                    <ArrowUpRight className="h-5 w-5 text-[#9CA3AF] transition-colors group-hover:text-[#C89B3C]" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081522]">
        <div className="spica-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 border-b border-white/[0.08] pb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C89B3C]">For your next project</p>
              <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-[#F3F1EC] sm:text-5xl">Planning a lighting project?</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <button type="button" onClick={() => navigate("contact")} className="btn-steel-solid inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 text-xs font-bold tracking-[0.12em] focus-visible:ring-2 focus-visible:ring-white">Start a Project <ArrowRight className="h-4 w-4" /></button>
              <a href={CONTACT_DETAILS.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white/[0.12] px-6 text-xs font-bold tracking-[0.12em] text-[#F3F1EC] transition-colors hover:border-[#C89B3C] hover:text-[#C89B3C] focus-visible:ring-2 focus-visible:ring-[#C89B3C]">WhatsApp Us</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 font-mono text-[10px] uppercase tracking-[0.1em] text-[#9CA3AF] sm:flex-row sm:flex-wrap sm:gap-x-8">
            <span>Trichy office <a href={`tel:${CONTACT_DETAILS.primaryPhone}`} className="ml-1 text-[#F3F1EC] hover:text-[#C89B3C]">{CONTACT_DETAILS.primaryPhone}</a></span>
            <span>Email <a href={`mailto:${CONTACT_DETAILS.email}`} className="ml-1 text-[#F3F1EC] hover:text-[#C89B3C]">{CONTACT_DETAILS.email}</a></span>
            <span>GSTIN <span className="ml-1 text-[#F3F1EC]">33ADTFS4928B1ZX</span></span>
          </div>
        </div>
      </section>
    </main>
  );
}
