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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "glass-nav py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <button
            onClick={() => {
              onPageChange("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="focus:outline-none transition-transform hover:scale-102"
          >
            <Logo variant="dark" size="md" showTagline={true} />
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`font-display text-sm tracking-widest uppercase py-1 border-b-2 transition-all duration-200 cursor-pointer ${
                  currentPage === item.id
                    ? "text-gold-primary border-gold-primary font-semibold"
                    : "text-gray-300 border-transparent hover:text-gold-hover hover:border-gold-hover/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ACTION PHONE & CHAT CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 font-mono text-xs tracking-wider text-gray-300 hover:text-gold-primary transition-colors py-2 px-3 rounded-md bg-stone-900 border border-gray-800"
            >
              <Phone className="w-3.5 h-3.5 text-gold-primary" />
              <span>{CONTACT_DETAILS.primaryPhone}</span>
            </a>
            
            <button
              onClick={() => onPageChange("contact")}
              className="button-shimmer gold-gradient text-black font-display font-bold text-xs tracking-widest uppercase px-4 py-2.5 rounded-sm transition-all duration-300 shadow-[0_4px_15px_rgba(200,155,60,0.25)] hover:shadow-[0_4px_25px_rgba(200,155,60,0.5)] flex items-center gap-2 cursor-pointer border border-gold-primary/30"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Consultation</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-gold-primary focus:outline-none p-1 pointer-events-auto"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] glass-card-strong border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl z-40 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`font-display text-lg tracking-widest uppercase text-left py-2 font-semibold ${
                  currentPage === item.id ? "text-gold-primary" : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <hr className="border-gray-800" />

          {/* Contact Details in mobile menu */}
          <div className="flex flex-col gap-3">
            <a
              href={`tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 font-mono text-sm text-gray-300 hover:text-gold-primary"
            >
              <Phone className="w-4 h-4 text-gold-primary" />
              <span>{CONTACT_DETAILS.primaryPhone}</span>
            </a>
            
            <a
              href={CONTACT_DETAILS.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gold-primary hover:text-gold-hover text-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.848.001-2.63-1.019-5.101-2.871-6.957C16.398 1.99 13.926.972 11.298.973c-5.438 0-9.863 4.417-9.865 9.848-.001 2.045.539 4.025 1.566 5.797L1.928 22.21l5.836-1.53c.045-.024.08-.04.123-.056z"/>
              </svg>
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
