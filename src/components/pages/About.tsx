import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { CONTACT_DETAILS, FOUNDED } from "../../data";

const partnerBrands = [
  { name: "Wipro Lighting", src: "/brands/wipro.png", heightClass: "h-8 sm:h-9" },
  { name: "Wipro North-West", src: "/brands/northwest.png", heightClass: "h-8 sm:h-9" },
  { name: "K-Lite", src: "/brands/klite.png", heightClass: "h-7 sm:h-8" },
  { name: "Nexus", src: "/brands/nexus.png", heightClass: "h-6 sm:h-7" },
];

const supportSteps = [
  { title: "Understand Your Requirements", description: "Understand the space, application and lighting requirements." },
  { title: "Recommend Suitable Products", description: "Help identify appropriate lighting products and electrical accessories." },
  { title: "Coordinate Project Supply", description: "Support product selection and supply coordination for the project." },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#081522] pb-20 pt-28 text-[#F3F1EC] sm:pt-32">
      <div className="spica-container">
        <header className="grid gap-6 border-b border-white/[0.08] pb-12 sm:pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C89B3C] sm:text-xs">Trichy · Tamil Nadu · Est. {FOUNDED}</p>
            <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Lighting expertise. Built on experience.</h1>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-base leading-7 text-[#9CA3AF] sm:text-lg">Spica Lighting supplies lighting and electrical products for residential, commercial and institutional projects across Tamil Nadu.</p>
            <a href={CONTACT_DETAILS.whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#C89B3C] px-5 text-xs font-bold uppercase tracking-[0.12em] text-[#081522] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E5C87A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C] motion-reduce:transform-none">Talk to our team <ArrowRight className="h-3.5 w-3.5" /></a>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-[#9CA3AF]"><MapPin className="h-3.5 w-3.5 text-[#C89B3C]" /> KK Nagar, Trichy</p>
          </div>
        </header>

        <section aria-label="Spica Lighting at a glance" className="grid gap-6 border-b border-white/[0.08] py-8 sm:grid-cols-3 sm:gap-8 sm:py-10">
          <div><p className="font-display text-2xl font-medium sm:text-3xl">{FOUNDED}</p><p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#9CA3AF]">Established</p></div>
          <div><p className="font-display text-2xl font-medium sm:text-3xl">200+</p><p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#9CA3AF]">Projects supplied</p></div>
          <div><p className="font-display text-2xl font-medium sm:text-3xl">Tamil Nadu</p><p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#9CA3AF]">Regional supply</p></div>
        </section>

        <section aria-label="Authorised brand partners" className="border-b border-white/[0.08] py-8 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="font-display text-lg font-medium">4 authorised brand partners</p><p className="mt-1 text-sm text-[#9CA3AF]">Lighting and electrical products from established brands.</p></div>
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-10">
              {partnerBrands.map((brand) => <div key={brand.name} className="flex items-center justify-center rounded-sm bg-white px-3 py-2"><img src={brand.src} alt={brand.name} className={`w-auto max-w-[125px] object-contain ${brand.heightClass}`} /></div>)}
            </div>
          </div>
        </section>

        <section aria-labelledby="support-heading" className="pt-12 sm:pt-16">
          <header className="mb-8 sm:mb-10"><p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C89B3C]">Project support</p><h2 id="support-heading" className="font-display text-2xl font-medium sm:text-3xl">How We Support Your Project</h2></header>
          <ol className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {supportSteps.map((step, index) => <li key={step.title} className="border-t border-white/[0.12] pt-5 sm:pt-6"><span className="font-mono text-xs text-[#C89B3C]">0{index + 1}</span><h3 className="mt-3 font-display text-lg font-medium sm:text-xl">{step.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[#9CA3AF]">{step.description}</p></li>)}
          </ol>
        </section>

        <section aria-labelledby="founder-heading" className="mt-14 border-t border-white/[0.08] pt-10 sm:mt-20 sm:pt-14">
          <div className="grid gap-6 rounded-xl border border-white/[0.08] bg-[#0B1C2B] p-6 sm:gap-8 sm:p-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:p-10">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C89B3C]">Founder</p>
              <h2 id="founder-heading" className="font-display text-2xl font-medium sm:text-3xl">Senthil Kumar K.S.</h2>
              <p className="mt-2 text-sm text-[#9CA3AF]">Founder · Spica Lighting · Established {FOUNDED}</p>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#F3F1EC]/90 sm:text-base">Senthil Kumar founded Spica Lighting in Trichy in {FOUNDED} to provide architects, contractors and project promoters with dependable, brand-authorized lighting supply. Working directly with site teams, he assists in evaluating technical specifications and coordinating certified material delivery across Tamil Nadu.</p>
              <a href={CONTACT_DETAILS.whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#C89B3C] px-5 text-xs font-bold uppercase tracking-[0.12em] text-[#081522] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E5C87A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C] motion-reduce:transform-none">Connect with Senthil on WhatsApp <ArrowRight className="h-3.5 w-3.5" /></a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
