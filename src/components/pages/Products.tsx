import React, { useState, useEffect } from "react";
import { Search, Info, SlidersHorizontal, MessageSquare, PhoneCall, HelpCircle, ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES_NAV, CONTACT_DETAILS } from "../../data";
import { Product } from "../../types";
import { CATEGORY_IMAGES } from "../../utils/assets";

interface ProductsProps {
  initialFilter?: string;
}

export default function Products({ initialFilter = "all" }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilter);
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setSelectedCategory(initialFilter);
  }, [initialFilter]);

  // Handle case-insensitive filter & search
  const filteredProducts = PRODUCTS.filter((product) => {
  const matchesBrand =
    selectedBrand === "all" || product.brand === selectedBrand;

  const matchesCategory =
    selectedCategory === "all" || product.category === selectedCategory;

  const matchesSearch =
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.feature.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.wattage.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.cct.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesBrand && matchesCategory && matchesSearch;
});

  const visibleCategories = CATEGORIES_NAV.filter((cat) => {
  if (selectedBrand === "wipro") {
    return ["residential", "commercial", "industrial", "outdoor"].includes(cat.id);
  }

  if (selectedBrand === "klite") {
    return ["landscape", "facade", "street", "architectural"].includes(cat.id);
  }

  if (selectedBrand === "northwest") {
    return ["switches"].includes(cat.id);
  }

  if (selectedBrand === "nexus") {
    return ["architectural"].includes(cat.id);
  }

  return true;
});

const getCategoryLabel = (id: string) => {
  const f = CATEGORIES_NAV.find((c) => c.id === id);
  return f ? f.label : "Residential & Commercial Range";
};

  const getWhatsAppEnquiryLink = (pName: string) => {
    const baseText = `Hi Spica Lighting (Trichy), I would like to enquire about the pricing and availability of: "${pName}" for my lighting project. Kindly share quotation.`;
    return `https://wa.me/919092049595?text=${encodeURIComponent(baseText)}`;
  };

  const getEmailEnquiryLink = (pName: string) => {
    const subject = `Enquiry: ${pName} - Spica Lighting`;
    const body = `Dear Senthil Kumar K S,\n\nI am interested in ${pName}.\nCould you please share commercial pricing and lead times for my project?\n\nProject Location:\nRequired Quantities:\nMy Phone Number:\n\nThank you!`;
    return `mailto:spicalighting@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-deep-black min-h-screen text-gray-200 pt-32 pb-24 relative overflow-hidden">
      {/* Background ambient gold aura */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER BRAND BANNER */}
        <div className="text-center md:text-left max-w-3xl mb-12">
          <span className="font-display text-xs text-gold-primary font-bold uppercase tracking-[0.2em] mb-2.5 block">
  ✦ Multi-Brand Product Portfolio
</span>

<h1 className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-pure-white mb-4">
  Lighting & Electrical Solutions Catalog
</h1>

<p className="font-sans text-sm text-gray-400 leading-relaxed">
  Explore premium products from Wipro Lighting, North West, K-Lite and Nexus Lighting. From residential interiors and commercial spaces to facade, landscape, street lighting and electrical solutions, Spica Lighting delivers complete project-ready product portfolios.
</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

  <div className="group glass-card rounded-xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-gold-primary/40 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
    <h3 className="text-gold-primary font-bold text-lg mb-2">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700 pointer-events-none" />
      Wipro Lighting
    </h3>
    <p className="text-gray-400 text-xs">
      Indoor, Commercial & Industrial Lighting
    </p>
  </div>

  <div className="group glass-card rounded-xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-gold-primary/40 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
    <h3 className="text-gold-primary font-bold text-xl mb-3 transition-all duration-300 group-hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700 pointer-events-none" />
      North West
    </h3>
    <p className="text-gray-400 text-xs">
      Switches & Electrical Accessories
    </p>
  </div>

  <div className="group glass-card rounded-xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-gold-primary/40 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
    <h3 className="text-gold-primary font-bold text-lg mb-2">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700 pointer-events-none" />
      K-Lite
    </h3>
    <p className="text-gray-400 text-xs">
      Architectural & Outdoor Lighting
    </p>
  </div>

  <div className="group glass-card rounded-xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-gold-primary/40 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]">
    <h3 className="text-gold-primary font-bold text-lg mb-2">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700 pointer-events-none" />
      Nexus Lighting
    </h3>
    <p className="text-gray-400 text-xs">
      Decorative & Luxury Lighting
    </p>
  </div>

</div>
<div className="flex flex-wrap gap-3 mb-8 justify-center">

  <button
    onClick={() => setSelectedBrand("all")}
    className={`px-5 py-2 rounded-lg text-sm transition-all ${
      selectedBrand === "all"
        ? "gold-gradient text-black font-bold"
        : "bg-white/5 text-gray-400 hover:text-gold-primary"
    }`}
  >
    All Brands
  </button>

  <button
    onClick={() => setSelectedBrand("wipro")}
    className={`px-5 py-2 rounded-lg text-sm transition-all ${
      selectedBrand === "wipro"
        ? "gold-gradient text-black font-bold"
        : "bg-white/5 text-gray-400 hover:text-gold-primary"
    }`}
  >
    Wipro
  </button>

  <button
    onClick={() => setSelectedBrand("northwest")}
    className={`px-5 py-2 rounded-lg text-sm transition-all ${
      selectedBrand === "northwest"
        ? "gold-gradient text-black font-bold"
        : "bg-white/5 text-gray-400 hover:text-gold-primary"
    }`}
  >
    North West
  </button>

  <button
    onClick={() => setSelectedBrand("klite")}
    className={`px-5 py-2 rounded-lg text-sm transition-all ${
      selectedBrand === "klite"
        ? "gold-gradient text-black font-bold"
        : "bg-white/5 text-gray-400 hover:text-gold-primary"
    }`}
  >
    K-Lite
  </button>

  <button
    onClick={() => setSelectedBrand("nexus")}
    className={`px-5 py-2 rounded-lg text-sm transition-all ${
      selectedBrand === "nexus"
        ? "gold-gradient text-black font-bold"
        : "bg-white/5 text-gray-400 hover:text-gold-primary"
    }`}
  >
    Nexus
  </button>

</div>

        {/* CONTROLS (SEARCH & TABS FILTERING) */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 glass-card p-4 rounded-2xl mb-10 shadow-xl border border-white/10">
          
          {/* SEARCH BAR */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search products..."
              className="w-full h-12 bg-white/[0.04] backdrop-blur-md border border-white/5 text-xs px-10 py-3.5 focus:outline-none focus:border-gold-primary rounded-xl text-gray-200 placeholder-gray-500 transition-all duration-200 shadow-inner"
            />
          </div>

          {/* ACTIVE CATEGORY FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`shrink-0 px-4 py-2 text-xs font-display tracking-widest uppercase rounded-lg border transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "gold-gradient text-gray-950 font-extrabold border-gold-primary/40 shadow-lg"
                  : "bg-white/[0.04] backdrop-blur border-white/10 text-gray-400 hover:text-gold-hover hover:border-gold-hover/40"
              }`}
            >
              All Range
            </button>
            {visibleCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-4 py-2 text-xs font-display tracking-widest uppercase rounded-lg border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "gold-gradient text-gray-950 font-extrabold border-gold-primary/40 shadow-lg"
                    : "bg-white/[0.04] backdrop-blur border-white/10 text-gray-400 hover:text-gold-hover hover:border-gold-hover/40"
                }`}
              >
                {cat.label.replace("Indoor - ", "").replace("Outdoor & ", "")}
              </button>
            ))}
          </div>

        </div>

        {/* RESULTS METADATA & GRID */}
        <div>
          <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
            <span>
              Showing <strong>{filteredProducts.length}</strong> items in{" "}
              <strong className="text-gold-primary">
                {selectedCategory === "all" ? "All Products" : getCategoryLabel(selectedCategory)}
              </strong>
            </span>
            {searchQuery && (
              <span>
                Search filter active: <strong className="text-gray-300">"{searchQuery}"</strong>
              </span>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-stone-950 border border-gray-900 rounded-sm">
              <HelpCircle className="w-12 h-12 text-gold-primary/40 mx-auto mb-4" />
              <h3 className="font-display font-semibold text-lg text-pure-white mb-2">
                No matching products found
              </h3>
              <p className="font-sans text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                We couldn't find any products in this range matching your search parameters. Try adjusting your vocabulary or contact Senthil Kumar K S directly.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-6 font-display font-bold text-xs tracking-widest text-gold-primary underline hover:text-gold-hover cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((p, index) => {
                return (
                  <div
                    key={index}
                    className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all border border-white/10 shadow-lg"
                    onClick={() => setSelectedProduct(p)}
                  >
                    
                    {/* Specifications Header (No images, pure executive CSS style) */}
                    <div className="relative bg-white border-b border-white/5">
  <img
    src={p.image}
    alt={p.name}
    className="w-full h-64 object-contain p-4"
  />

  <div className="absolute top-3 left-3">
    <span className="font-mono text-[9px] text-gold-primary uppercase tracking-widest bg-black/80 border border-gold-primary/20 rounded-md px-2.5 py-1 font-semibold">
      {p.brand.toUpperCase()} AUTHORISED
    </span>
  </div>
</div>


                    {/* Specifications */}
                    <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-display font-bold text-lg text-pure-white leading-snug group-hover:text-gold-primary transition-colors">
                            {p.name}
                          </h3>
                        </div>
                        
                        {/* Specs Pill strips */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-1 bg-white/[0.04] border border-white/5 text-gray-300 font-mono text-[9px] rounded-lg uppercase tracking-wide">
                            Watt: {p.wattage}
                          </span>
                          <span className="px-2.5 py-1 bg-white/[0.04] border border-white/5 text-gray-300 font-mono text-[9px] rounded-lg uppercase tracking-wide">
                            CCT: {p.cct}
                          </span>
                        </div>

                        <p className="font-sans text-xs text-gray-400 line-clamp-2 leading-relaxed">
                          {p.feature}
                        </p>
                      </div>

                      <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-gray-600 uppercase font-mono tracking-wider">
                            MRP Reference
                          </span>
                          <span className="text-xs text-gray-400 font-bold font-mono">
                            Enquire pricing
                          </span>
                        </div>

                        <button
                          className="button-shimmer px-4 py-2 bg-white/[0.04] border border-white/10 text-gold-primary group-hover:gold-gradient group-hover:text-black hover:border-gold-primary rounded-lg text-xs font-display font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                        >
                          <span>Enquire Now</span>
                          <ArrowRight className="w-3 h-3 text-gold-primary group-hover:text-black transition-colors" />
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      {/* 3. PRODUCT SPECIFICATIONS DETAIL WINDOW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-card-strong border border-white/20 rounded-2xl w-full max-w-2xl relative shadow-[0_24px_50px_rgba(0,0,0,0.95)] overflow-hidden scale-in duration-300">
            
            {/* Header / Accent Ribbon */}
            <div className="h-1.5 bg-gradient-to-r from-gold-primary via-gold-hover to-gold-primary" />
            
            {/* Main scrollable body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Title Block */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-[10px] text-gold-primary uppercase tracking-widest block font-bold mb-1">
                    {selectedProduct.brand?.toUpperCase()} PRODUCT ENQUIRY
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-pure-white">
                    {selectedProduct.name}
                  </h2>
                  <p className="font-sans text-xs text-gray-400 mt-1 italic">
                   Authorised dealer support for {selectedProduct.brand} products
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 rounded bg-stone-900 border border-gray-800 text-gray-400 hover:text-gold-primary hover:border-gold-primary transition-all cursor-pointer"
                  aria-label="Close details"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Specs Table */}
              <div className="border border-gray-900 rounded bg-stone-950">
                <div className="grid grid-cols-3 border-b border-gray-900 p-3 bg-stone-900/60 font-mono text-[10px] uppercase text-gray-500 font-bold tracking-wider">
                  <div>Model Parameter</div>
                  <div className="col-span-2">Specification Value</div>
                </div>

                <div className="grid grid-cols-3 border-b border-gray-900/60 p-3.5 text-xs">
                  <div className="font-display font-semibold text-gray-400">Available Wattage</div>
                  <div className="col-span-2 text-pure-white font-mono">{selectedProduct.wattage || "N/A"}</div>
                </div>

                <div className="grid grid-cols-3 border-b border-gray-900/60 p-3.5 text-xs">
                  <div className="font-display font-semibold text-gray-400">Kelvin Options (CCT)</div>
                  <div className="col-span-2 text-pure-white font-mono">{selectedProduct.cct || "N/A"}</div>
                </div>

                <div className="grid grid-cols-3 border-b border-gray-900/60 p-3.5 text-xs">
                  <div className="font-display font-semibold text-gray-400">Key Features</div>
                  <div className="col-span-2 text-gray-300">{selectedProduct.feature}</div>
                </div>

                <div className="grid grid-cols-3 border-b border-gray-900/60 p-3.5 text-xs">
                  <div className="font-display font-semibold text-gray-400">MRP Range Reference</div>
                  <div className="col-span-2 text-gold-primary font-mono select-none">
                    {selectedProduct.mrpRange} <span className="text-gray-500 italic text-[10px]">(Request Spica Dealer Quote)</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 p-3.5 text-xs">
                  <div className="font-display font-semibold text-gray-400">Warranty Support</div>
                  <div className="col-span-2 text-gray-300">
                    {selectedProduct.brand.toUpperCase()} Official Brand Warranty & Spica Support
                    </div>
                </div>
              </div>

              {/* Quick info note */}
              <div className="flex gap-3 bg-gold-primary/5 border border-gold-primary/20 p-4 rounded-sm">
                <Info className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                <div className="text-xs text-gray-400 leading-relaxed">
                  <strong className="text-gold-primary">Direct Trade Quotation</strong>: Since Spica processes commercial project volumes directly across Tamil Nadu, exact rates are adjusted for quantities, architectural drafts, and trade limits.
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 pt-3">
                <a
                  href={getWhatsAppEnquiryLink(selectedProduct.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="button-shimmer flex-1 flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs tracking-widest uppercase py-3.5 rounded-sm shadow-md transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.848.001-2.63-1.019-5.101-2.871-6.957C16.398 1.99 13.926.972 11.298.973c-5.438 0-9.863 4.417-9.865 9.848-.001 2.045.539 4.025 1.566 5.797L1.928 22.21l5.836-1.53c.045-.024.08-.04.123-.056z"/>
                  </svg>
                  <span>Enquire via WhatsApp</span>
                </a>

                <a
                  href={getEmailEnquiryLink(selectedProduct.name)}
                  className="flex-1 flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-850 text-gold-primary border border-gold-primary/25 hover:border-gold-primary/50 font-display font-bold text-xs tracking-widest uppercase py-3.5 rounded-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-gold-primary" />
                  <span>Request Email Quotation</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

