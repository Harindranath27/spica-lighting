import React, { useState, FormEvent, useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  Plus,
  Minus,
  CheckCircle2,
  Navigation,
  Building2,
  CalendarCheck,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { CONTACT_DETAILS, FREQUENT_QUESTIONS } from "../../data";

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  CONTACT_DETAILS.address
)}`;

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const formIdPrefix = useId();

  // Frequently Asked Questions state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorText("Please provide your name, phone number and message.");
      return;
    }

    setIsSubmitting(true);
    setErrorText("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch {
      setErrorText(
        "We could not send your enquiry right now. Please try again or reach our desk directly via phone or WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <main className="bg-[#081522] min-h-screen text-[#F3F1EC] pt-28 sm:pt-32 pb-20 selection:bg-[#C89B3C]/30 selection:text-white">
      <div className="spica-container">

        {/* 1. HERO SECTION */}
        <header className="max-w-3xl mb-10 sm:mb-14">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.08 }
              }
            }}
          >
            <motion.p
              variants={reveal}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C89B3C] mb-3 flex items-center gap-2"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
              SPICA LIGHTING · TRICHY
            </motion.p>

            <motion.h1
              variants={reveal}
              className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-[#F3F1EC] tracking-[-0.03em] leading-[1.1] text-balance mb-4"
            >
              Send Us an Enquiry
            </motion.h1>

            <motion.p
              variants={reveal}
              className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-2xl"
            >
              Tell us what you&apos;re looking for. Our team will get in touch to help.
            </motion.p>
          </motion.div>
        </header>

        {/* 2. PRIMARY TWO-COLUMN SECTION: FORM vs OFFICE & SUPPLY DESK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 sm:mb-14">

          {/* COLUMN 1: PROJECT ENQUIRY FORM (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B1C2B] border border-white/[0.08] rounded-xl p-6 sm:p-8 sm:py-9 shadow-2xl relative">
            <div className="flex items-start justify-between border-b border-white/[0.08] pb-5 mb-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C89B3C] block mb-1">
                  Enquiry Form
                </span>
                <h2 className="font-display font-medium text-xl sm:text-2xl text-[#F3F1EC] tracking-tight">
                  Send Us an Enquiry
                </h2>
              </div>
            </div>

            <p className="text-xs text-[#9CA3AF] mb-6 leading-relaxed">
              Share a few details and our team will get back to you.
            </p>

            {/* Submission Feedback: Success */}
            {isSubmitted && (
              <div
                role="status"
                aria-live="polite"
                className="bg-emerald-950/40 border border-emerald-500/40 p-5 rounded-lg flex items-start gap-3.5 text-xs text-emerald-300 mb-6 animate-in fade-in duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <strong className="block font-display font-semibold text-sm text-white">
                    Enquiry Received Successfully
                  </strong>
                  <p className="leading-relaxed text-gray-300">
                      Thank you for reaching out to Spica Lighting. Our team will review your
                    message and contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-1.5 pt-2 font-display text-[11px] font-semibold tracking-wider uppercase text-[#C89B3C] hover:text-[#E5C87A] transition-colors underline cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89B3C]"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            )}

            {/* Submission Feedback: Error */}
            {errorText && (
              <div
                role="alert"
                aria-live="assertive"
                className="bg-rose-950/40 border border-rose-500/40 p-4 rounded-lg flex items-start gap-3 text-xs text-rose-300 mb-6 font-medium animate-in fade-in duration-300"
              >
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{errorText}</p>
              </div>
            )}

            <form onSubmit={handleSubmitForm} className="space-y-4 sm:space-y-5" noValidate={false}>
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formIdPrefix}-name`}
                    className="font-mono text-[11px] text-[#F3F1EC] uppercase tracking-wider block font-semibold"
                  >
                    Full Name <span className="text-[#C89B3C]" aria-label="Required">*</span>
                  </label>
                  <input
                    id={`${formIdPrefix}-name`}
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Ar. Rajesh Kumar"
                    className="w-full bg-[#0B1C2B] border border-white/[0.08] text-sm px-3.5 py-2.5 rounded-md text-[#F3F1EC] placeholder-[#9CA3AF]/60 focus:outline-none focus:border-[#C89B3C] focus:bg-[#0B1C2B] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formIdPrefix}-phone`}
                    className="font-mono text-[11px] text-[#F3F1EC] uppercase tracking-wider block font-semibold"
                  >
                    Phone Number <span className="text-[#C89B3C]" aria-label="Required">*</span>
                  </label>
                  <input
                    id={`${formIdPrefix}-phone`}
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 90000 00000"
                    className="w-full bg-[#0B1C2B] border border-white/[0.08] text-sm px-3.5 py-2.5 rounded-md text-[#F3F1EC] placeholder-[#9CA3AF]/60 focus:outline-none focus:border-[#C89B3C] focus:bg-[#0B1C2B] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formIdPrefix}-email`}
                    className="font-mono text-[11px] text-[#F3F1EC] uppercase tracking-wider block font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    id={`${formIdPrefix}-email`}
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#0B1C2B] border border-white/[0.08] text-sm px-3.5 py-2.5 rounded-md text-[#F3F1EC] placeholder-[#9CA3AF]/60 focus:outline-none focus:border-[#C89B3C] focus:bg-[#0B1C2B] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formIdPrefix}-company`}
                    className="font-mono text-[11px] text-[#F3F1EC] uppercase tracking-wider block font-semibold"
                  >
                    Company / Organisation
                  </label>
                  <input
                    id={`${formIdPrefix}-company`}
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Studio or firm name"
                    className="w-full bg-[#0B1C2B] border border-white/[0.08] text-sm px-3.5 py-2.5 rounded-md text-[#F3F1EC] placeholder-[#9CA3AF]/60 focus:outline-none focus:border-[#C89B3C] focus:bg-[#0B1C2B] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor={`${formIdPrefix}-message`}
                  className="font-mono text-[11px] text-[#F3F1EC] uppercase tracking-wider block font-semibold"
                >
                  Message <span className="text-[#C89B3C]" aria-label="Required">*</span>
                </label>
                <textarea
                  id={`${formIdPrefix}-message`}
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you need or how we can help."
                  className="w-full bg-[#0B1C2B] border border-white/[0.08] text-sm px-3.5 py-2.5 rounded-md text-[#F3F1EC] placeholder-[#9CA3AF]/60 focus:outline-none focus:border-[#C89B3C] focus:bg-[#0B1C2B] transition-colors resize-y min-h-[105px]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-steel-solid button-shimmer w-full min-h-12 py-3.5 px-6 rounded-md text-xs font-bold tracking-[0.14em] uppercase text-[#081522] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-[#081522] shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#081522]" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9CA3AF]" />
                <span className="text-[11px] text-[#9CA3AF]">
                  Direct commercial enquiry &middot; Official GST invoices provided
                </span>
              </div>
            </form>
          </div>

          {/* COLUMN 2: OFFICE DETAILS & WAREHOUSE DISCLOSURE (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Business Coordinates Card */}
            <div className="bg-[#0B1C2B] border border-white/[0.08] rounded-xl p-6 sm:p-7 shadow-2xl space-y-6">
              <div className="border-b border-white/[0.08] pb-4 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C89B3C] block mb-1">
                    Contact Coordinates
                  </span>
                  <h2 className="font-display font-medium text-lg text-[#F3F1EC]">
                    Spica Lighting Desk
                  </h2>
                </div>
                <Building2 className="w-5 h-5 text-[#C89B3C]" />
              </div>

              <div className="space-y-5">
                {/* Warehouse address */}
                <div className="flex items-start gap-3.5 text-xs">
                  <div className="p-2 rounded-md bg-[#0B1C2B] border border-white/[0.08] text-[#C89B3C] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-display font-semibold text-[#F3F1EC] mb-1 text-xs">
                      Warehouse &amp; Logistics Hub
                    </span>
                    <address className="not-italic text-[#F3F1EC]/90 leading-relaxed text-xs">
                      No. 39, B-7, L.I.C Colony,<br />
                      1st Main Road, K.K Nagar,<br />
                      Trichy &ndash; 620021, Tamil Nadu
                    </address>
                  </div>
                </div>

                {/* Primary phone */}
                <div className="flex items-start gap-3.5 text-xs">
                  <div className="p-2 rounded-md bg-[#0B1C2B] border border-white/[0.08] text-[#C89B3C] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-display font-semibold text-[#F3F1EC] mb-1 text-xs">
                      Direct Project Line
                    </span>
                    <a
                      href={`tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, "")}`}
                      className="text-[#F3F1EC] hover:text-[#C89B3C] transition-colors font-mono text-xs inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89B3C] rounded-sm"
                    >
                      <span>{CONTACT_DETAILS.primaryPhone}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                    </a>
                    <span className="block text-[11px] text-[#9CA3AF] mt-0.5">
                      General &amp; tender enquiries
                    </span>
                  </div>
                </div>

                {/* Corporate email */}
                <div className="flex items-start gap-3.5 text-xs">
                  <div className="p-2 rounded-md bg-[#0B1C2B] border border-white/[0.08] text-[#C89B3C] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-display font-semibold text-[#F3F1EC] mb-1 text-xs">
                      Corporate Email
                    </span>
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="text-[#F3F1EC] hover:text-[#C89B3C] transition-colors font-mono text-xs inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89B3C] rounded-sm"
                    >
                      <span>{CONTACT_DETAILS.email}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                    </a>
                    <span className="block text-[11px] text-[#9CA3AF] mt-0.5">
                      We usually reply by email.
                    </span>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3.5 text-xs">
                  <div className="p-2 rounded-md bg-[#0B1C2B] border border-white/[0.08] text-[#C89B3C] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-display font-semibold text-[#F3F1EC] mb-1 text-xs">
                      Working Hours
                    </span>
                    <span className="text-[#F3F1EC]/90 leading-normal block text-xs">
                      {CONTACT_DETAILS.workingHours}
                    </span>
                    <span className="block text-[11px] text-[#9CA3AF] mt-0.5">
                      Sunday: Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Warehouse & Consultation Disclosure Callout */}
            <div className="bg-[#081522] border border-white/[0.12] p-5 rounded-xl flex items-start gap-3.5 text-xs shadow-lg">
              <CalendarCheck className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#C89B3C] uppercase tracking-widest font-semibold block">
                  Project Supply &middot; Consultation Policy
                </span>
                <p className="text-[#F3F1EC] text-xs leading-relaxed">
                  Warehouse &amp; project supplies only. Prior consultation booking required. No direct
                  walk-in retail showroom.
                </p>
                <p className="text-[11px] text-[#9CA3AF] pt-1 leading-normal">
                  In-person technical discussions are arranged by appointment for architects,
                  consultants, contractors, and institutional promoters.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 3. LOCATION & DIRECTIONS SECTION */}
        <section aria-labelledby="location-heading" className="mb-10 sm:mb-12">
          <div className="bg-[#0B1C2B] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl">
            <div className="p-5 sm:p-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C89B3C] block mb-1">
                  Location &amp; Logistics
                </span>
                <h2 id="location-heading" className="font-display font-medium text-xl sm:text-2xl text-[#F3F1EC]">
                  Trichy Warehouse &amp; Dispatch Facility
                </h2>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  K.K Nagar, Tiruchirappalli &middot; Central distribution access across Tamil Nadu
                </p>
              </div>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-outline inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89B3C]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>Get Driving Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Map embed column (8 cols) */}
              <div className="lg:col-span-8 relative h-[280px] sm:h-[320px] lg:h-[340px] bg-[#081522] border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#081522] text-[#9CA3AF] z-10">
                    <MapPin className="w-8 h-8 text-[#C89B3C] mb-2 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF]">
                      Loading Trichy Facility Map...
                    </span>
                  </div>
                )}
                <iframe
                  title="Spica Lighting Trichy Warehouse Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=78.685,10.790,78.705,10.806&layer=mapnik&marker=10.798485,78.694606"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0"
                  style={{
                    filter: "invert(86%) hue-rotate(180deg) brightness(102%) contrast(100%)"
                  }}
                  onLoad={() => setMapLoaded(true)}
                  loading="lazy"
                />
              </div>

              {/* Location details card (4 cols) */}
              <div className="lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between bg-white/[0.01] space-y-5">
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] block font-semibold">
                      Registered Address
                    </span>
                    <p className="text-xs text-[#F3F1EC] leading-relaxed font-medium">
                      No. 39, B-7, L.I.C Colony, 1st Main Road, K.K Nagar, Trichy &ndash; 620021, Tamil Nadu
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-white/[0.08]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] block font-semibold">
                      Logistics Coverage
                    </span>
                    <p className="text-xs text-[#F3F1EC]/90 leading-relaxed">
                      Supplying projects across Trichy, Chennai, Coimbatore, Madurai, Salem, and all
                      Tamil Nadu districts.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-white/[0.08]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] block font-semibold">
                      Prior Appointment
                    </span>
                    <p className="text-xs text-[#F3F1EC]/90 leading-relaxed">
                      Please contact us in advance to arrange a project meeting.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full btn-steel-solid inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold uppercase tracking-wider text-[#081522]"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FREQUENTLY ASKED QUESTIONS SECTION */}
        <section aria-labelledby="faq-heading" className="border-t border-white/[0.08] pt-10 sm:pt-12">
          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C89B3C] mb-2 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
              Support &amp; FAQ
            </p>
            <h2 id="faq-heading" className="font-display font-medium text-2xl sm:text-3xl text-[#F3F1EC] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed max-w-2xl">
              A few helpful details about our products and enquiry process.
            </p>
          </div>

          <div className="space-y-3">
            {FREQUENT_QUESTIONS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              const buttonId = `faq-btn-${idx}`;
              const panelId = `faq-panel-${idx}`;

              return (
                <div
                  key={idx}
                  className={`border rounded-lg transition-colors duration-200 ${
                    isOpen
                      ? "border-[#C89B3C]/60 bg-[#0B1C2B]"
                      : "border-white/[0.08] bg-[#0B1C2B] hover:border-[#C89B3C]/50"
                  }`}
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89B3C] rounded-lg"
                  >
                    <span className="font-display font-medium text-xs sm:text-sm text-[#F3F1EC] pr-2">
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 p-1.5 rounded-md border transition-colors ${
                        isOpen
                          ? "bg-[#C89B3C]/20 border-[#C89B3C]/50 text-[#C89B3C]"
                          : "bg-white/[0.04] border-white/[0.08] text-[#9CA3AF]"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-5 sm:px-6 pb-5 pt-1 text-xs text-[#F3F1EC]/90 leading-relaxed border-t border-white/[0.08] animate-in fade-in duration-200"
                    >
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
