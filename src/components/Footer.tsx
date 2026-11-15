import React from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";
import { CONTACT_DETAILS, BRAND_NAME, TAGLINE, GST_NUMBER } from "../data";

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT_DETAILS.address)}`;

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

  const openLightingAssistant = () => {
    window.dispatchEvent(new Event("open-spica-advisor-chat"));
  };

  return (
    <footer className="bg-[#081522] border-t border-white/[0.08] pt-16 pb-10 text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* COLUMN 1: BRAND */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <button
              onClick={() => handlePageLinkClick("home")}
              className="text-left self-start hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-sm cursor-pointer"
              aria-label="Spica Lighting Home"
            >
              <Logo variant="dark" size="md" showTagline={false} />
            </button>
            <p className="font-display font-medium text-xs text-[#C89B3C] uppercase tracking-widest mt-1">
              {TAGLINE}
            </p>
            <p className="text-[#9CA3AF] text-xs leading-relaxed max-w-xs">
              Authorised supplier of lighting and electrical products for residential, commercial and institutional projects.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={CONTACT_DETAILS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#0B1C2B] border border-white/[0.08] text-[#9CA3AF] hover:text-[#C89B3C] hover:border-[#C89B3C]/50 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DETAILS.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#0B1C2B] border border-white/[0.08] text-[#9CA3AF] hover:text-[#F3F1EC] hover:border-[#C89B3C]/50 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
                aria-label="WhatsApp Chat"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.848.001-2.63-1.019-5.101-2.871-6.957C16.398 1.99 13.926.972 11.298.973c-5.438 0-9.863 4.417-9.865 9.848-.001 2.045.539 4.025 1.566 5.797L1.928 22.21l5.836-1.53c.045-.024.08-.04.123-.056z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: PRODUCTS */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs text-[#F3F1EC] tracking-widest uppercase border-b border-white/[0.08] pb-2">
              Products
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <button
                onClick={() => handleProductCategoryClick("residential")}
                className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
              >
                Residential
              </button>
              <button
                onClick={() => handleProductCategoryClick("commercial")}
                className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
              >
                Commercial
              </button>
              <button
                onClick={() => handleProductCategoryClick("industrial")}
                className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
              >
                Industrial
              </button>
              <button
                onClick={() => handleProductCategoryClick("outdoor")}
                className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
              >
                Outdoor
              </button>
              <button
                onClick={() => handleProductCategoryClick("architectural")}
                className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
              >
                Architectural
              </button>
              <button
                onClick={() => handleProductCategoryClick("switches")}
                className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
              >
                Switches
              </button>
            </div>
          </div>

          {/* COMPANY AND ADVISOR SUPPORT */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-semibold text-xs text-[#F3F1EC] tracking-widest uppercase border-b border-white/[0.08] pb-2">
                Company
              </h4>
              <div className="flex flex-col gap-2.5 text-xs">
                <button
                  onClick={() => handlePageLinkClick("about")}
                  className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
                >
                  About Spica Lighting
                </button>
                <button
                  onClick={() => handlePageLinkClick("projects")}
                  className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
                >
                  Projects Portfolio
                </button>
                <button
                  onClick={() => handlePageLinkClick("contact")}
                  className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
                >
                  Contact & Warehouse
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-display font-semibold text-xs text-[#F3F1EC] tracking-widest uppercase border-b border-white/[0.08] pb-2">
                Advisor Support
              </h4>
              <div className="flex flex-col gap-2.5 text-xs">
                <button
                  onClick={openLightingAssistant}
                  className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
                >
                  Lighting Consultation
                </button>
                <button
                  onClick={openLightingAssistant}
                  className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
                >
                  Project Support
                </button>
                <button
                  onClick={openLightingAssistant}
                  className="text-left hover:text-[#C89B3C] transition-colors cursor-pointer focus-visible:outline-none focus-visible:text-[#C89B3C]"
                >
                  Product Guidance
                </button>
                <span className="text-[#9CA3AF]/70 font-mono text-[10px] mt-1">
                  GSTIN: {GST_NUMBER}
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 5: CONTACT */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs text-[#F3F1EC] tracking-widest uppercase border-b border-white/[0.08] pb-2">
              Office & Hub
            </h4>
            <div className="flex flex-col gap-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F3F1EC] transition-colors hover:text-[#C89B3C] focus-visible:outline-none focus-visible:text-[#C89B3C]"
                >
                  No. 39, B-7, L.I.C Colony,<br />
                  1st Main Road, K.K Nagar,<br />
                  Trichy – 620021, Tamil Nadu
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a
                  href={`tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#C89B3C] transition-colors focus-visible:outline-none focus-visible:text-[#C89B3C] text-[#F3F1EC]"
                >
                  {CONTACT_DETAILS.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="hover:text-[#C89B3C] transition-colors focus-visible:outline-none focus-visible:text-[#C89B3C] text-[#F3F1EC]"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <span className="text-[#F3F1EC]">
                  Monday – Saturday<br />
                  9:00 AM – 6:00 PM
                </span>
              </div>
              <div className="mt-2 rounded-lg border border-white/[0.08] bg-[#0B1C2B] p-3">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#C89B3C]">
                  Warehouse &amp; Project Supplies
                </p>
                <p className="text-[11px] leading-normal text-[#9CA3AF]">
                  Prior consultation booking required.<br />
                  No walk-in retail showroom.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="border-t border-white/[0.08] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>
              &copy; {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.
            </p>
            <p className="text-[11px] text-[#9CA3AF]/70">
              Precision In Every Light &bull; Trichy, Tamil Nadu
            </p>
          </div>

          <div className="text-center md:text-right">
            <span className="font-display px-3.5 py-1.5 bg-[#0B1C2B] border border-white/[0.12] rounded-full text-[#C89B3C] font-semibold text-[10px] tracking-wider uppercase inline-block">
              AUTHORISED PARTNER — WIPRO • NORTH WEST • K-LITE • NEXUS
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

