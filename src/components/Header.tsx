import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Phone, Menu, X, MessageSquare } from "lucide-react";
import { CONTACT_DETAILS } from "../data";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-[0_8px_32px_rgba(5,14,25,0.7)]"
          : "bg-[#081522]/85 backdrop-blur-md py-4 border-b border-white/[0.08]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO (Preserve original logo & colors) */}
          <button
            onClick={() => {
              onPageChange("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-sm transition-transform hover:opacity-90 cursor-pointer"
            aria-label="Spica Lighting - Return to Home"
          >
            <Logo variant="dark" size="md" showTagline={true} />
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-display text-xs tracking-widest uppercase py-1 border-b-2 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-sm ${
                    isActive
                      ? "text-[#F3F1EC] border-[#C89B3C] font-bold"
                      : "text-[#9CA3AF] border-transparent hover:text-[#F3F1EC] hover:border-[#C89B3C]/40"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* ACTION PHONE & CHAT CTAs */}
          <div className="hidden lg:flex items-center gap-3.5">
            <a
              href={`tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 font-mono text-xs tracking-wider text-[#9CA3AF] hover:text-[#F3F1EC] transition-colors py-2 px-3 rounded-md bg-[#0B1C2B] border border-white/[0.08] hover:border-[#C89B3C]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
              aria-label={`Call Spica Lighting at ${CONTACT_DETAILS.primaryPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
              <span>{CONTACT_DETAILS.primaryPhone}</span>
            </a>
            
            <button
              onClick={() => onPageChange("contact")}
              className="button-shimmer bg-[#C89B3C] hover:bg-[#E5C87A] text-[#081522] font-display font-bold text-xs tracking-widest uppercase px-4 py-2.5 rounded-sm transition-all duration-300 shadow-[0_4px_15px_rgba(5,14,25,0.4)] hover:shadow-[0_4px_25px_rgba(200,155,60,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer border border-[#C89B3C]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Consultation</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#9CA3AF] hover:text-[#F3F1EC] p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-[68px] glass-card-strong border-b border-white/[0.08] p-6 flex flex-col gap-6 shadow-2xl z-40 animate-in fade-in slide-in-from-top-4 duration-300 bg-[#081522]/95 backdrop-blur-xl"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-display text-base tracking-widest uppercase text-left py-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-sm ${
                    isActive ? "text-[#F3F1EC]" : "text-[#9CA3AF] hover:text-[#F3F1EC]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <hr className="border-white/[0.08]" />

          {/* Contact Details in mobile menu */}
          <div className="flex flex-col gap-3.5">
            <a
              href={`tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 font-mono text-sm text-[#9CA3AF] hover:text-[#F3F1EC] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C89B3C] shrink-0" />
              <span>{CONTACT_DETAILS.primaryPhone}</span>
            </a>
            
            <a
              href={CONTACT_DETAILS.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#C89B3C] hover:text-[#E5C87A] text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.848.001-2.63-1.019-5.101-2.871-6.957C16.398 1.99 13.926.972 11.298.973c-5.438 0-9.863 4.417-9.865 9.848-.001 2.045.539 4.025 1.566 5.797L1.928 22.21l5.836-1.53c.045-.024.08-.04.123-.056z"/>
              </svg>
              <span>Instant WhatsApp Enquiry</span>
            </a>

            <button
              onClick={() => {
                onPageChange("contact");
                setMobileMenuOpen(false);
              }}
              className="button-shimmer bg-[#C89B3C] hover:bg-[#E5C87A] text-[#081522] font-display font-bold text-xs tracking-widest uppercase py-3 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-[#C89B3C]/40 mt-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

