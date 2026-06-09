import React, { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, AlertCircle, Plus, Minus, CheckCircle, HelpCircle } from "lucide-react";
import { CONTACT_DETAILS, FREQUENT_QUESTIONS } from "../../data";

const FAQS = FREQUENT_QUESTIONS;

export default function Contact() {
  // Frequently Asked Questions state manager
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorText("Please state your Name and Phone Number accurately.");
      return;
    }

    setIsSubmitting(true);
    setErrorText("");

    try {
      // Simulate submission cleanly
      const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
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
        location: "",
        message: ""
      });
    } catch (err) {
      setErrorText("Something went wrong. Please request immediate consultation on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };
 

  return (
    <div className="bg-deep-black min-h-screen text-gray-200 pt-32 pb-24 relative overflow-hidden">
      {/* Visual lighting gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] bg-gold-primary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[380px] h-[380px] bg-gold-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="text-center md:text-left max-w-3xl mb-16">
          <span className="font-display text-xs text-gold-primary font-bold uppercase tracking-[0.2em] mb-2.5 block">
            ✦ Sourcing Hub &amp; Quotations desk
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-pure-white mb-4">
            Request a Project Consultation
          </h1>
          <p className="font-sans text-sm text-gray-400 leading-relaxed">
           Our team assists with lighting selection, project quotations, product recommendations and commercial supply requirements across Tamil Nadu.
          </p>
        </div>

        {/* PRIMARY DIVISION: FORM vs DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* COLUMN 1: INTERACTIVE ENQUIRY FORM */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl relative bg-white/[0.02]">
            <h3 className="font-display font-bold text-lg text-pure-white mb-1 uppercase tracking-wide">
             GET PROJECT QUOTE
            </h3>
            <p className="font-sans text-xs text-gray-500 mb-6 leading-normal">
              Please enter your requirements below to receive a customized commercial proposal directly from our desk.
            </p>

            {isSubmitted && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-5 rounded-xl flex gap-3 text-xs text-emerald-400 mb-6 animate-in fade-in duration-300">
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-display font-bold text-sm text-pure-white">Consultation Request Received!</strong>
                  <p className="mt-1 leading-relaxed text-gray-300">
                    Thank you for contacting Spica Lighting. Our project team will review your requirements and get back to you within 24 working hours. For urgent enquiries, connect with us directly via WhatsApp.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 font-display font-semibold uppercase tracking-wider text-[10px] underline hover:text-white cursor-pointer"
                  >
                    Send Another Sheet
                  </button>
                </div>
              </div>
            )}

            {errorText && (
              <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl flex gap-3 text-xs text-rose-400 mb-6 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorText}</span>
              </div>
            )}

            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                    Full Name <span className="text-gold-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white/[0.04] border border-white/10 text-xs px-3.5 py-3 focus:outline-none focus:border-gold-primary rounded-lg text-gray-200 transition-all duration-200 shadow-inner"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                    Phone Number <span className="text-gold-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g., +91 9000000000"
                    className="w-full bg-white/[0.04] border border-white/10 text-xs px-3.5 py-3 focus:outline-none focus:border-gold-primary rounded-lg text-gray-200 transition-all duration-200 shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-white/[0.04] border border-white/10 text-xs px-3.5 py-3 focus:outline-none focus:border-gold-primary rounded-lg text-gray-200 transition-all duration-200 shadow-inner"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                    Company Name / Promoters
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g., Architects Associates"
                    className="w-full bg-white/[0.04] border border-white/10 text-xs px-3.5 py-3 focus:outline-none focus:border-gold-primary rounded-lg text-gray-200 transition-all duration-200 shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                  Project Location <span className="text-gray-500">(e.g., KK Nagar, Trichy)</span>
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Where is the site located?"
                  className="w-full bg-white/[0.04] border border-white/10 text-xs px-3.5 py-3 focus:outline-none focus:border-gold-primary rounded-lg text-gray-200 transition-all duration-200 shadow-inner"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                  Detailed Scope of Requirements / Bill of Material (BOM)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="List fixture wattages, quantities needed, timelines or design specifications..."
                  className="w-full bg-white/[0.04] border border-white/10 text-xs px-3.5 py-3 focus:outline-none focus:border-gold-primary rounded-lg text-gray-200 transition-all duration-200 shadow-inner resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-shimmer w-full gold-gradient hover:opacity-95 disabled:bg-white/5 disabled:hover:opacity-100 disabled:text-gray-500 text-gray-950 font-display font-bold text-xs tracking-widest uppercase py-4 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg border border-gold-primary/30"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-gray-950 shrink-0" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Processing Sheet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Specification sheet</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* COLUMN 2: HUB SPECIFICS & LOCATION */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6 bg-white/[0.02] shadow-xl">
              <h3 className="font-display font-medium text-sm text-pure-white uppercase tracking-wider border-b border-white/5 pb-2">
                Spica Office Coordinates
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 text-xs">
                  <MapPin className="w-5 h-5 text-gold-primary shrink-0 mt-0.5 animate-pulse" />
                  <div>
                    <span className="block font-display font-bold text-pure-white mb-0.5">Physical Warehouse Hub</span>
                    <span className="text-gray-400 leading-relaxed block text-xs font-medium">
                      No. 39, B-7, L.I.C Colony,<br />
                      1st Main Road, K.K Nagar,<br />
                      Trichy – 620021, Tamil Nadu
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-xs">
                  <Phone className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-display font-bold text-pure-white mb-0.5">Primary Direct Sourcing desk</span>
                    <a href={`tel:${CONTACT_DETAILS.primaryPhone.replace(/\s+/g, "")}`} className="text-gray-400 hover:text-gold-primary transition-colors">
                      {CONTACT_DETAILS.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-xs">
                  <Mail className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-display font-bold text-pure-white mb-0.5">Corporate Email Inbox</span>
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-gray-400 hover:text-gold-primary transition-colors">
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-xs">
                  <Clock className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-display font-bold text-pure-white mb-0.5">Working Logistics Window</span>
                    <span className="text-gray-400 leading-normal block font-medium">
                      {CONTACT_DETAILS.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* SPECIAL CRITICAL DISCLOSURE NOTICE */}
              <div className="bg-gold-primary/5 border border-gold-primary/25 backdrop-blur-md p-4 rounded-xl flex gap-3 text-xs text-gray-300">
                <AlertCircle className="w-6 h-6 text-gold-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gold-primary uppercase tracking-wide text-[10.5px] font-bold">✦ Visitor Disclaimer</strong>
                  <p className="mt-1 leading-normal text-[11px] text-gray-400">
                    We run a high-volume warehouse supply and executive project desk. In order to keep logistics flowing cleanly, there is <strong className="text-pure-white">no walk-in retail showroom</strong> with sample rows display. Direct site visits require a pre-booked appointment coordinate.
                  </p>
                </div>
              </div>
            </div>

            {/* INTEGRATED MAP VIEW */}
            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 group shadow-xl relative bg-white/[0.02]">
              {/* Dynamic Google Maps iframe for KK Nagar, Trichy location */}
              <iframe
                title="Spica Lighting KK Nagar Trichy Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1672624388316!2d78.69460591142993!3d10.798485258742881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ab9c6f2a7%3A0xe54e2fe7e4ed8d97!2sK%20K%20Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620021!5e0!3m2!1sen!2sin!4v1716945088210!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-gray-300 border border-white/10 text-[9px] px-2.5 py-1 uppercase rounded-lg">
                Trichy Location index
              </div>
            </div>

          </div>

        </div>

        {/* HELPFUL SYSTEM ACCORDIAN FAQS - SECTION 8 */}
        <div className="border-t border-gray-900 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-display text-xs text-gold-primary font-bold uppercase tracking-[0.2em] mb-2 block">
              ✦ Support Repository
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-3.5xl text-pure-white">
              FAQ &mdash; Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="border border-white/5 rounded-xl bg-white/[0.02] backdrop-blur transition-all duration-300 hover:border-gold-primary/25"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-display font-bold text-xs sm:text-sm text-gray-200 hover:text-gold-primary transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-gold-primary shrink-0 p-1 bg-white/[0.04] border border-white/10 rounded-lg">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-400 leading-relaxed border-t border-white/5 animate-in fade-in duration-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
