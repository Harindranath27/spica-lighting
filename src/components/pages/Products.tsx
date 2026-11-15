import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Info, MessageSquare, Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { CATEGORIES_NAV, PRODUCTS } from "../../data";
import { Product } from "../../types";

interface ProductsProps {
  initialFilter?: string;
}

const BRAND_OPTIONS = [
  { id: "wipro", label: "Wipro Lighting", logo: "/brands/wipro.png" },
  { id: "northwest", label: "Wipro North-West", logo: "/brands/northwest.png" },
  { id: "klite", label: "K-Lite", logo: "/brands/klite.png" },
  { id: "nexus", label: "Nexus", logo: "/brands/nexus.png" }
];

const CATEGORY_LABELS: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  outdoor: "Outdoor",
  facade: "Facade",
  landscape: "Landscape",
  architectural: "Architectural",
  street: "Street lighting",
  switches: "Switches"
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  residential: "Interior luminaires and lighting for residential spaces.",
  commercial: "Linear and workspace lighting for commercial environments.",
  industrial: "Lighting products for industrial spaces and facilities.",
  outdoor: "Outdoor luminaires for external spaces and applications.",
  facade: "Architectural luminaires for exterior surfaces.",
  landscape: "Lighting products for landscape and public realm settings.",
  architectural: "Architectural and decorative lighting selections.",
  street: "Street lighting products for roads and pathways.",
  switches: "Switches and electrical distribution accessories."
};

const brandName = (id: string) => BRAND_OPTIONS.find((brand) => brand.id === id)?.label ?? id;
const categoriesForBrand = (brandId: string) => new Set(PRODUCTS.filter((product) => product.brand === brandId).map((product) => product.category));

export default function Products({ initialFilter = "all" }: ProductsProps) {
  const reduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState(initialFilter);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [categoryDrawerOpen, setCategoryDrawerOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => setSelectedCategory(initialFilter), [initialFilter]);

  const visibleCategories = useMemo(() => {
    const actual = [...new Set(PRODUCTS.map((product) => product.category))];
    const allowed = selectedBrand === "all" ? null : categoriesForBrand(selectedBrand);
    return actual.filter((id) => !allowed || allowed.has(id)).map((id) => ({
      id,
      label: CATEGORY_LABELS[id] ?? id,
      desc: CATEGORY_DESCRIPTIONS[id]
    }));
  }, [selectedBrand]);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = !query || [product.name, product.feature, product.wattage, product.cct, product.brand, product.category]
        .some((value) => value.toLowerCase().includes(query));
      return matchesBrand && matchesCategory && matchesSearch;
    });
  }, [selectedBrand, selectedCategory, searchQuery]);

  const filteredByCategory = useMemo(() => {
    return visibleCategories.map((category) => ({
      ...category,
      products: filteredProducts.filter((product) => product.category === category.id)
    })).filter((category) => category.products.length > 0);
  }, [filteredProducts, visibleCategories]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSearchQuery("");
  };

  const getWhatsAppEnquiryLink = (productName: string) => {
    const text = `Hi Spica Lighting (Trichy), I would like to enquire about the pricing and availability of: "${productName}" for my lighting project. Kindly share quotation.`;
    return `https://wa.me/919092049595?text=${encodeURIComponent(text)}`;
  };

  const getEmailEnquiryLink = (productName: string) => {
    const subject = `Enquiry: ${productName} - Spica Lighting`;
    const body = `Dear Senthil Kumar K S,\n\nI am interested in ${productName}.\nCould you please share commercial pricing and lead times for my project?\n\nProject Location:\nRequired Quantities:\nMy Phone Number:\n\nThank you!`;
    return `mailto:spicalighting@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    if (!selectedProduct) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProduct]);

  return (
    <main className="min-h-screen bg-[#081522] pb-20 pt-28 text-[#F3F1EC] sm:pt-32">
      <div className="spica-container">
        <header className="mb-8 grid gap-5 border-b border-white/[0.08] pb-7 sm:mb-9 sm:grid-cols-[1fr_220px] sm:items-center lg:grid-cols-[1fr_280px] lg:gap-10 lg:pb-9">
          <div className="max-w-3xl">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C89B3C]">Product catalogue</p>
            <h1 className="font-display text-3xl font-medium tracking-tight text-[#F3F1EC] sm:text-4xl lg:text-5xl">Lighting &amp; Electrical Products</h1>
          </div>
        </header>

        <section aria-label="Browse product categories" className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#9CA3AF]">Browse by category</h2>
            <button type="button" onClick={() => setCategoryDrawerOpen((open) => !open)} aria-expanded={categoryDrawerOpen} aria-controls="category-navigation" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-[#C89B3C] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]">
              {categoryDrawerOpen ? "Hide categories" : `Browse categories${selectedCategory !== "all" ? ` · ${CATEGORY_LABELS[selectedCategory] ?? selectedCategory}` : ""}`}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${categoryDrawerOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
          <div id="category-navigation" hidden={!categoryDrawerOpen} className="grid grid-cols-2 gap-px border border-white/[0.08] bg-[#0B1C2B] sm:grid-cols-3 lg:grid-cols-5">
            <button type="button" aria-pressed={selectedCategory === "all"} onClick={() => { setSelectedCategory("all"); setCategoryDrawerOpen(false); }} className={`group relative min-h-24 overflow-hidden bg-[#0B1C2B] p-3 text-left focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] sm:min-h-28 sm:p-4 ${selectedCategory === "all" ? "ring-1 ring-inset ring-[#C89B3C]" : ""}`}>
              <span className="font-display text-sm font-semibold text-[#F3F1EC]">All categories</span><span className="mt-1 block font-mono text-[10px] text-[#9CA3AF]">{filteredProducts.length} products</span>
            </button>
            {visibleCategories.map((category) => {
              const count = filteredProducts.filter((product) => product.category === category.id).length;
              return (
                <button key={category.id} type="button" aria-pressed={selectedCategory === category.id} onClick={() => { setSelectedCategory(category.id); setCategoryDrawerOpen(false); }} className={`group relative flex min-h-24 flex-col justify-end overflow-hidden bg-[#0B1C2B] p-3 text-left focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] sm:min-h-28 sm:p-4 ${selectedCategory === category.id ? "ring-1 ring-inset ring-[#C89B3C]" : ""}`}>
                  {PRODUCTS.find((product) => product.category === category.id)?.image && <img src={PRODUCTS.find((product) => product.category === category.id)?.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-contain p-3 opacity-30 transition-opacity duration-300 group-hover:opacity-50 motion-reduce:transition-none" />}
                  <span className="absolute inset-0 bg-gradient-to-t from-[#081522] via-[#081522]/75 to-[#081522]/30" />
                  <span className="relative block font-display text-sm font-semibold text-[#F3F1EC]">{category.label}</span><span className="relative mt-1 block font-mono text-[10px] text-[#9CA3AF]">{count} products</span>
                </button>
              );
            })}
          </div>
        </section>

        <section aria-label="Search and filter products" className="mb-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <label className="relative block min-w-0 flex-1">
              <span className="sr-only">Search products</span>
              <Search aria-hidden="true" className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C89B3C]" />
              <input type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search downlights, linear lights, switches…" className="h-14 w-full rounded-sm border border-white/[0.08] bg-[#0B1C2B] pl-14 pr-5 text-sm text-[#F3F1EC] placeholder:text-[#9CA3AF]/70 transition-colors hover:border-[#C89B3C]/40 focus:border-[#C89B3C] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40 sm:h-16 sm:text-base" />
            </label>
            <div className="flex items-center justify-between gap-3 lg:justify-end">
              <p className="text-xs text-[#9CA3AF]" aria-live="polite"><span className="font-semibold text-[#F3F1EC]">{filteredProducts.length}</span> products</p>
              <button type="button" aria-expanded={filtersOpen} aria-controls="filter-panel" onClick={() => setFiltersOpen((open) => !open)} className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/[0.08] bg-[#0B1C2B] px-4 text-xs font-semibold text-[#F3F1EC] transition-colors hover:border-[#C89B3C]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]">
                <SlidersHorizontal className="h-4 w-4" /> Filters{selectedBrand !== "all" ? " · 1" : ""}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
              </button>
              {(selectedCategory !== "all" || selectedBrand !== "all" || searchQuery) && <button type="button" onClick={clearFilters} className="min-h-11 px-2 text-xs font-semibold text-[#C89B3C] underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-[#C89B3C]">Clear all filters</button>}
            </div>
          </div>

          <div id="filter-panel" hidden={!filtersOpen} className="mt-4 grid gap-5 border border-white/[0.08] bg-[#0B1C2B] p-4 sm:grid-cols-[1fr_auto] sm:items-end sm:p-5">
            <fieldset>
              <legend className="mb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#9CA3AF]">Filter by brand</legend>
              <div className="flex flex-wrap gap-2">
                {[{ id: "all", label: "All Brands" }, ...BRAND_OPTIONS].map((brand) => (
                  <button key={brand.id} type="button" aria-pressed={selectedBrand === brand.id} onClick={() => { setSelectedBrand(brand.id); if (brand.id !== "all" && selectedCategory !== "all" && !categoriesForBrand(brand.id).has(selectedCategory)) setSelectedCategory("all"); }} className={`flex min-h-11 items-center gap-2 border px-3 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] ${selectedBrand === brand.id ? "border-[#C89B3C] bg-[#C89B3C] text-[#081522] font-bold" : "border-white/[0.08] bg-[#0B1C2B] text-[#F3F1EC] hover:border-[#C89B3C]/50"}`}>
                    {"logo" in brand && <img src={brand.logo} alt="" className="max-h-4 w-auto max-w-10 object-contain" />}{brand.label}
                  </button>
                ))}
              </div>
            </fieldset>
            <button type="button" onClick={() => setFiltersOpen(false)} className="min-h-11 justify-self-start px-2 text-xs text-[#9CA3AF] underline underline-offset-4 hover:text-[#F3F1EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] sm:justify-self-end">Close filters</button>
          </div>
          {(selectedCategory !== "all" || selectedBrand !== "all" || searchQuery) && (
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] text-[#9CA3AF]" aria-label="Active filters">
              {selectedBrand !== "all" && <button type="button" onClick={() => setSelectedBrand("all")} aria-label={`Remove brand filter ${brandName(selectedBrand)}`} className="inline-flex min-h-10 items-center gap-1 rounded-full border border-white/[0.08] bg-[#0B1C2B] px-2.5 py-1 text-[#F3F1EC] hover:border-[#C89B3C]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]">Brand: {brandName(selectedBrand)} <X className="h-3 w-3" /></button>}
              {selectedCategory !== "all" && <button type="button" onClick={() => setSelectedCategory("all")} aria-label={`Remove category filter ${CATEGORY_LABELS[selectedCategory] ?? selectedCategory}`} className="inline-flex min-h-10 items-center gap-1 rounded-full border border-white/[0.08] bg-[#0B1C2B] px-2.5 py-1 text-[#F3F1EC] hover:border-[#C89B3C]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]">Category: {CATEGORY_LABELS[selectedCategory] ?? selectedCategory} <X className="h-3 w-3" /></button>}
              {searchQuery && <button type="button" onClick={() => setSearchQuery("")} aria-label="Clear product search" className="inline-flex min-h-10 items-center gap-1 rounded-full border border-white/[0.08] bg-[#0B1C2B] px-2.5 py-1 text-[#F3F1EC] hover:border-[#C89B3C]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]">Search: “{searchQuery}” <X className="h-3 w-3" /></button>}
                <button type="button" onClick={clearFilters} className="min-h-8 px-1 font-semibold text-[#C89B3C] underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-[#C89B3C]">Clear all</button>
            </div>
          )}
        </section>

        {filteredProducts.length === 0 ? (
          <div className="border-y border-white/[0.08] py-16 text-center sm:py-20">
            <Search className="mx-auto h-8 w-8 text-[#9CA3AF]" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-medium text-[#F3F1EC]">No matching products</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-[#9CA3AF]">Try another search or clear the selected filters to browse the full catalogue.</p>
            <button type="button" onClick={clearFilters} className="mt-5 min-h-11 rounded-sm border border-[#C89B3C]/40 px-5 text-xs font-semibold text-[#C89B3C] hover:bg-white/[0.04] focus-visible:ring-2 focus-visible:ring-[#C89B3C]">Clear filters</button>
          </div>
        ) : (
          <section aria-label="Product results">
            {(selectedCategory === "all" ? filteredByCategory : filteredByCategory.filter((category) => category.id === selectedCategory)).map((category) => (
              <motion.section key={category.id} aria-labelledby={`category-${category.id}`} initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }} className="mb-12 scroll-mt-28 sm:mb-16">
                <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/[0.08] pb-3">
                  <div><p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#C89B3C]">Product range</p><h2 id={`category-${category.id}`} className="font-display text-xl font-medium text-[#F3F1EC] sm:text-2xl">{category.label}</h2><p className="mt-1 max-w-xl text-xs leading-5 text-[#9CA3AF]">{CATEGORY_DESCRIPTIONS[category.id]}</p></div>
                  <span className="shrink-0 font-mono text-[10px] text-[#9CA3AF]">{category.products.length} items</span>
                </div>
                <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-12">
              {category.products.map((product) => (
                <article key={`${product.brand}-${product.name}`} className="group min-w-0 border-b border-white/[0.08] pb-5">
                  <button type="button" onClick={() => setSelectedProduct(product)} aria-label={`View ${product.name} details`} className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081522]">
                    <div className="relative flex aspect-[1.25] items-center justify-center overflow-hidden bg-white p-6 sm:aspect-[1.18] lg:p-8 rounded-sm">
                      <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transition-none" />
                    </div>
                    <div className="pt-4">
                      <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#9CA3AF]">{brandName(product.brand)}</p>
                      <h2 className="mt-1 font-display text-base font-semibold leading-snug text-[#F3F1EC] transition-colors group-hover:text-[#C89B3C]">{product.name}</h2>
                      <div className="mt-3 flex min-h-5 flex-wrap gap-x-4 gap-y-1 text-xs text-[#9CA3AF]">
                        {product.wattage && product.wattage !== "-" && <span>{product.wattage}</span>}
                        {product.cct && product.cct !== "-" && <span className="text-[#9CA3AF]/80">{product.cct}</span>}
                      </div>
                      <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-[#9CA3AF]">{product.feature}</p>
                    </div>
                  </button>
                  <button type="button" onClick={() => setSelectedProduct(product)} className="mt-3 inline-flex min-h-11 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#C89B3C] transition-colors hover:text-[#E5C87A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081522]">
                    Enquire about this product <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </article>
              ))}
                </div>
              </motion.section>
            ))}
          </section>
        )}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProduct(null); }}>
          <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="product-dialog-title" tabIndex={-1} className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden border border-white/[0.12] bg-[#0B1C2B] shadow-2xl focus:outline-none sm:max-h-[calc(100dvh-3rem)] sm:flex-row rounded-lg">
            <div className="relative flex h-48 shrink-0 items-center justify-center bg-white sm:h-auto sm:w-[42%]">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full max-h-[38vh] w-full object-contain p-5 sm:max-h-full sm:p-8" />
              <button type="button" onClick={() => setSelectedProduct(null)} aria-label="Close product details" className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-black/80 text-white hover:text-[#C89B3C] focus-visible:ring-2 focus-visible:ring-[#C89B3C] sm:hidden"><X className="h-5 w-5" /></button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C89B3C]">{brandName(selectedProduct.brand)}</p><h2 id="product-dialog-title" className="mt-2 font-display text-2xl font-medium leading-tight text-[#F3F1EC]">{selectedProduct.name}</h2></div>
                <button type="button" onClick={() => setSelectedProduct(null)} aria-label="Close product details" className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white/[0.08] text-[#9CA3AF] hover:border-[#C89B3C]/50 hover:text-white focus-visible:ring-2 focus-visible:ring-[#C89B3C] sm:inline-flex"><X className="h-5 w-5" /></button>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#9CA3AF]">{selectedProduct.feature}</p>
              <dl className="mt-6 divide-y divide-[#C89B3C]/15 border-y border-white/[0.08]">
                <div className="grid grid-cols-[minmax(7rem,0.7fr)_1fr] gap-4 py-3 text-sm"><dt className="text-[#9CA3AF]">Category</dt><dd className="text-right text-[#F3F1EC]">{CATEGORIES_NAV.find((category) => category.id === selectedProduct.category)?.label ?? selectedProduct.category}</dd></div>
                {selectedProduct.wattage && selectedProduct.wattage !== "-" && <div className="grid grid-cols-[minmax(7rem,0.7fr)_1fr] gap-4 py-3 text-sm"><dt className="text-[#9CA3AF]">Wattage</dt><dd className="text-right text-[#F3F1EC]">{selectedProduct.wattage}</dd></div>}
                {selectedProduct.cct && selectedProduct.cct !== "-" && <div className="grid grid-cols-[minmax(7rem,0.7fr)_1fr] gap-4 py-3 text-sm"><dt className="text-[#9CA3AF]">Specification</dt><dd className="text-right text-[#F3F1EC]">{selectedProduct.cct}</dd></div>}
                <div className="grid grid-cols-[minmax(7rem,0.7fr)_1fr] gap-4 py-3 text-sm"><dt className="text-[#9CA3AF]">Pricing</dt><dd className="text-right text-[#F3F1EC]">Enquire</dd></div>
              </dl>
              <div className="mt-5 flex items-start gap-3 text-xs leading-5 text-[#9CA3AF]"><Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C89B3C]" /><p>Contact Spica Lighting for product availability and a project quotation.</p></div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={getWhatsAppEnquiryLink(selectedProduct.name)} target="_blank" rel="noreferrer" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-[#C89B3C] px-4 text-xs font-bold uppercase tracking-[0.08em] text-[#081522] hover:bg-[#E5C87A] focus-visible:ring-2 focus-visible:ring-white rounded-sm">Enquire via WhatsApp <ArrowRight className="h-4 w-4" /></a>
                <a href={getEmailEnquiryLink(selectedProduct.name)} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-white/[0.12] px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#F3F1EC] hover:border-[#C89B3C]/60 hover:text-[#C89B3C] focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-sm"><MessageSquare className="h-4 w-4" /> Request email quote</a>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
