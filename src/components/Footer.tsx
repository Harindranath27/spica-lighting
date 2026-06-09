import React from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";
import { CONTACT_DETAILS, BRAND_NAME, TAGLINE, GST_NUMBER } from "../data";

interface FooterProps {
  onPageChange: (page: string) => void;
  onFilterChange?: (category: string) => void;
}

export default function Footer({ onPageChange, onFilterChange }: FooterProps) {
  const handleProductCategoryClick = (category: string) => {
    if (onFilterChange) {
      onFilterChange(category);
    }
    onPageChange("products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageLinkClick = (page: string) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050506] border-t border-gray-900 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* COLUMN 1: BRAND */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <button
              onClick={() => handlePageLinkClick("home")}
              className="text-left focus:outline-none self-start hover:scale-102 transition-transform"
            >
              <Logo variant="dark" size="md" showTagline={false} />
            </button>
            <p className="font-display font-medium text-xs text-gold-primary uppercase tracking-widest mt-2">
              {TAGLINE}
            </p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs mt-1">
              Authorised partner for premium lighting and electrical solutions across residential, commercial and institutional projects.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={CONTACT_DETAILS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-stone-900 border border-gray-800 text-gray-400 hover:text-gold-primary hover:border-gold-primary transition-all cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DETAILS.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-stone-900 border border-gray-800 text-gray-400 hover:text-emerald-500 hover:border-emerald-500 transition-all cursor-pointer"
                aria-label="WhatsApp Chat"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.848.001-2.63-1.019-5.101-2.871-6.957C16.398 1.99 13.926.972 11.298.973c-5.438 0-9.863 4.417-9.865 9.848-.001 2.045.539 4.025 1.566 5.797L1.928 22.21l5.836-1.53c.045-.024.08-.04.123-.056z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: PRODUCTS */}
         <div className="flex flex-col gap-2.5 text-xs">
  <button
    onClick={() => handleProductCategoryClick("residential")}
    className="text-left hover:text-gold-primary transition-colors cursor-pointer"
  >
    Residential
  </button>

  <button
    onClick={() => handleProductCategoryClick("commercial")}
    className="text-left hover:text-gold-primary transition-colors cursor-pointer"
  >
    Commercial
  </button>

  <button
    onClick={() => handleProductCategoryClick("industrial")}
    className="text-left hover:text-gold-primary transition-colors cursor-pointer"
  >
    Industrial
  </button>

  <button
    onClick={() => handleProductCategoryClick("outdoor")}
    className="text-left hover:text-gold-primary transition-colors cursor-pointer"
  >
    Outdoor
  </button>

  <button
    onClick={() => handleProductCategoryClick("architectural")}
    className="text-left hover:text-gold-primary transition-colors cursor-pointer"
  >
    Architectural
  </button>

  <button
    onClick={() => handleProductCategoryClick("switches")}
    className="text-left hover:text-gold-primary transition-colors cursor-pointer"
  >
    Switches
  </button>
</div>

          {/* COLUMN 3: COMPANY */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-sm text-gray-200 tracking-wider uppercase border-b border-gray-900 pb-2">
              Company
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <button
                onClick={() => handlePageLinkClick("about")}
                className="text-left hover:text-gold-primary transition-colors cursor-pointer"
              >
              About Spica Lighting
              </button>
              <button
                onClick={() => handlePageLinkClick("projects")}
                className="text-left hover:text-gold-primary transition-colors cursor-pointer"
              >
                Projects Portfolio
              </button>
              <button
                onClick={() => handlePageLinkClick("contact")}
                className="text-left hover:text-gold-primary transition-colors cursor-pointer"
              >
                Contact & Warehouse
              </button>
            </div>
          </div>

          {/* COLUMN 4: RESOURCES */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-sm text-gray-200 tracking-wider uppercase border-b border-gray-900 pb-2">
              Advisor Support
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <button
                onClick={() => handlePageLinkClick("about")}
                className="text-left hover:text-gold-primary transition-colors cursor-pointer"
              >
                Lighting Consultation
              </button>
              <button
                onClick={() => handlePageLinkClick("home")}
                className="text-left hover:text-gold-primary transition-colors cursor-pointer"
              >
                Project Support
              </button>
              <button
                onClick={() => handlePageLinkClick("contact")}
                className="text-left hover:text-gold-primary transition-colors cursor-pointer"
              >
                Product Guidance
              </button>
              <span className="text-gray-500 font-mono text-[10px]">
                GSTIN: {GST_NUMBER}
              </span>
            </div>
          </div>

          {/* COLUMN 5: CONTACT */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-sm text-gray-200 tracking-wider uppercase border-b border-gray-900 pb-2">
              Office & Hub
            </h4>
            <div className="flex flex-col gap-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <span>
                  No. 39, B-7, L.I.C Colony,<br />
                  1st Main Road, K.K Nagar,<br />
                  Trichy – 620021, Tamil Nadu
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-primary shrink-0" />
                <a href={`tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, "")}`} className="hover:text-gold-primary">
                  {CONTACT_DETAILS.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-primary shrink-0" />
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-gold-primary">
                  {CONTACT_DETAILS.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <span>
                  {CONTACT_DETAILS.workingHours}
                </span>
              </div>
              <div className="mt-1 bg-stone-950 border border-gray-900/60 p-2.5 rounded-sm">
                <p className="text-[10px] text-gray-500 italic uppercase tracking-wider mb-0.5">
                  ✦ Note on Visit
                </p>
                <p className="text-[10.5px] text-gray-400 leading-normal">
                  Warehouse & project supplies only. Prior consultation booking required - no direct walk-in retail showroom.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>
              &copy; {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.
            </p>
            <p className="text-[11px] text-gray-600">
              Precision In Every Light &bull; Trichy, Tamil Nadu
            </p>
          </div>

          <div className="text-center md:text-right">
            <span className="font-display px-3 py-1 bg-gold-primary/5 border border-gold-primary/20 rounded-full text-gold-primary font-medium text-[10px] tracking-wider uppercase inline-block">
              AUTHORISED PARTNER — WIPRO • NORTH WEST • K-LITE • NEXUS
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
