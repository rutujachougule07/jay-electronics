import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Send,
  Shield,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { adminStore } from "@/lib/admin-store";
import { submitContactInquiryToFirestore } from "@/lib/firestore-service";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Our Offices | Jay Electronics Private Limited" },
      {
        name: "description",
        content:
          "Find the nearest Jay Electronics office to connect with our engineering team in Sangli, Kolhapur, and Pune.",
      },
      { property: "og:title", content: "Contact Our Offices | Jay Electronics" },
      {
        property: "og:description",
        content: "Connect with Jay Electronics regional offices in Sangli, Kolhapur, and Pune.",
      },
    ],
  }),
  component: ContactPage,
});

interface OfficeInfo {
  id: string;
  badge: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  callLabel: string;
  phoneHref: string;
  image: string;
  delayMs: string;
}

const OFFICES: OfficeInfo[] = [
  {
    id: "sangli",
    badge: "HEADQUARTERS & SPARES DEPOT",
    title: "Sangli Office",
    address: "JEPL Tower, Market Yard Main Corridor, Sangli 416416, Maharashtra.",
    phone: "+91 233 2300000 / 2300001",
    email: "sangli@jayelectronics.co.in",
    hours: "Mon-Sat 9:30 AM - 7:00 PM",
    callLabel: "Call Sangli Desk",
    phoneHref: "tel:+912332300000",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    delayMs: "0ms",
  },
  {
    id: "kolhapur",
    badge: "REGIONAL INDUSTRIAL HUB",
    title: "Kolhapur Office",
    address: "Shahupuri 2nd Lane, Near Station Road, Kolhapur 416001, Maharashtra.",
    phone: "+91 231 2650000 / 2650001",
    email: "kolhapur@jayelectronics.co.in",
    hours: "Mon-Sat 9:30 AM - 7:00 PM",
    callLabel: "Call Kolhapur Desk",
    phoneHref: "tel:+912312650000",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    delayMs: "120ms",
  },
  {
    id: "pune",
    badge: "CORPORATE & AV SYSTEMS",
    title: "Pune IT Hub",
    address: "Baner IT Park Corridor, Near Highway Junction, Pune 411045, Maharashtra.",
    phone: "+91 20 25600000 / 25600001",
    email: "pune@jayelectronics.co.in",
    hours: "Mon-Sat 9:30 AM - 7:00 PM",
    callLabel: "Call Pune Desk",
    phoneHref: "tel:+912025600000",
    image:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80",
    delayMs: "240ms",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "Anonymous Customer";
    const phone = (formData.get("phone") as string) || "Not provided";
    const email = (formData.get("email") as string) || "Not provided";
    const office = (formData.get("office") as string) || "Sangli HQ & Central Depot";
    const message = (formData.get("message") as string) || "No message provided";

    const inquiryPayload = {
      name,
      email,
      phone,
      subject: `Technical Inquiry for ${office}`,
      message,
    };

    try {
      await submitContactInquiryToFirestore(inquiryPayload);
    } catch (err) {
      console.warn("Firestore save fallback to local store:", err);
    }

    adminStore.addInquiry(inquiryPayload);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F7F9FC] text-[#101828] font-sans antialiased min-h-screen py-10 sm:py-16 relative overflow-hidden">
      {/* Decorative Subtle Background Glow Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-sky-200/30 via-red-100/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-blue-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* =========================================================================
           HERO / SECTION HEADER (CENTERED DESIGN MATCHING REFERENCE)
           ========================================================================= */}
        <div className="text-center space-y-3 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#EF233C] bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            <span>OUR OFFICES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#101828] tracking-tight leading-tight">
            Contact Our Offices
          </h1>

          <p className="text-[#667085] text-sm sm:text-base font-normal leading-relaxed">
            Find the nearest Jay Electronics office to connect with our team.
            <br className="hidden sm:inline" /> We’re always ready to support you.
          </p>
        </div>

        {/* =========================================================================
           THREE OFFICE CARDS (MATCHING REFERENCE LAYOUT & CARDS STYLING)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {OFFICES.map((office) => (
            <div
              key={office.id}
              style={{ animationDelay: office.delayMs }}
              className="bg-white border border-[#E4E7EC] rounded-[22px] shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden group cursor-pointer animate-in fade-in slide-in-from-bottom-6"
            >
              {/* Card Header Image (30-35% Height with smooth hover zoom) */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Location Red Icon + Category Badge */}
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#EF233C]">
                    <MapPin className="size-4 shrink-0 text-[#EF233C]" />
                    <span>{office.badge}</span>
                  </div>

                  {/* Office Name Title */}
                  <h2 className="text-xl sm:text-2xl font-black text-[#101828] group-hover:text-[#EF233C] transition-colors leading-tight">
                    {office.title}
                  </h2>

                  {/* Details List */}
                  <div className="space-y-3 pt-1 text-xs sm:text-sm font-medium text-[#101828]">
                    {/* Address */}
                    <div className="flex items-start gap-2.5 text-[#667085]">
                      <MapPin className="size-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2.5">
                      <Phone className="size-4 text-[#EF233C] shrink-0" />
                      <a
                        href={office.phoneHref}
                        className="hover:text-[#EF233C] font-bold text-[#101828] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2.5">
                      <Mail className="size-4 text-[#EF233C] shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-[#EF233C] text-[#667085] transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-center gap-2.5 text-[#667085]">
                      <Clock className="size-4 text-slate-400 shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <a
                  href={office.phoneHref}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#071B3A] hover:bg-[#0E2A56] active:bg-[#051227] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#071B3A]/20 transition-all duration-200 flex items-center justify-center gap-2.5 group/btn"
                >
                  <PhoneCall className="size-4 text-white group-hover/btn:scale-110 transition-transform" />
                  <span>{office.callLabel}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
           TECHNICAL INQUIRY FORM CARD (MATCHING DESIGN 1 - MODERN CLEAN SCREENSHOT)
           ========================================================================= */}
        <div className="bg-white border border-[#E4E7EC] rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-sm max-w-4xl mx-auto space-y-8">
          {/* Top Header Bar inside Card */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/jay-logo.jpeg"
                alt="Jay Electronics Logo"
                className="h-9 sm:h-10 w-auto object-contain bg-white rounded-xl px-2 py-0.5 shadow-xs border border-slate-200/60"
              />
            </Link>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
              Engineering Support for a Smarter Tomorrow
            </span>
          </div>

          {/* Form Header */}
          <div className="text-center space-y-2">
            <div className="text-xs font-black uppercase tracking-widest text-[#EF233C]">
              DIRECT ENGINEERING CORRESPONDENCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#101828] tracking-tight">
              Send a Technical Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] max-w-xl mx-auto font-normal leading-relaxed">
              Your request will be routed directly to the regional lead engineer for immediate follow-up.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
              <CheckCircle2 className="size-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-extrabold text-[#101828]">
                Technical Inquiry Submitted Successfully!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your request has been routed to our regional lead engineer and logged into our Admin Portal. We will get back to you within business hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Phone Number (With Icons Inside Inputs) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#101828] block">
                    Your Full Name <span className="text-[#EF233C]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sunil Patil"
                      className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E4E7EC] py-3.5 pl-11 pr-4 text-sm text-[#101828] placeholder:text-slate-400 focus:outline-none focus:border-[#EF233C] focus:bg-white focus:ring-4 focus:ring-red-500/10 transition font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#101828] block">
                    Phone Number <span className="text-[#EF233C]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98..."
                      className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E4E7EC] py-3.5 pl-11 pr-4 text-sm text-[#101828] placeholder:text-slate-400 focus:outline-none focus:border-[#EF233C] focus:bg-white focus:ring-4 focus:ring-red-500/10 transition font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Work Email & Target Regional Office */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#101828] block">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E4E7EC] py-3.5 pl-11 pr-4 text-sm text-[#101828] placeholder:text-slate-400 focus:outline-none focus:border-[#EF233C] focus:bg-white focus:ring-4 focus:ring-red-500/10 transition font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#101828] block">
                    Target Regional Office <span className="text-[#EF233C]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none z-10" />
                    <select
                      name="office"
                      required
                      defaultValue="Sangli HQ & Central Depot"
                      className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E4E7EC] py-3.5 pl-11 pr-10 text-sm text-[#101828] focus:outline-none focus:border-[#EF233C] focus:bg-white focus:ring-4 focus:ring-red-500/10 transition font-medium cursor-pointer appearance-none"
                    >
                      <option value="Sangli HQ & Central Depot">
                        Sangli HQ & Central Depot
                      </option>
                      <option value="Kolhapur Regional Office">
                        Kolhapur Regional Office
                      </option>
                      <option value="Pune IT Hub & Corporate">
                        Pune IT Hub & Corporate
                      </option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Technical Requirement / Question */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-[#101828] block">
                  Technical Requirement / Question <span className="text-[#EF233C]">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 size-4 text-slate-400" />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your security challenge, existing hardware brand, tender BOQ timeline, or AMC requirement..."
                    className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E4E7EC] py-3.5 pl-11 pr-4 text-sm text-[#101828] placeholder:text-slate-400 focus:outline-none focus:border-[#EF233C] focus:bg-white focus:ring-4 focus:ring-red-500/10 transition font-medium resize-y"
                  />
                </div>
              </div>

              {/* Red Submit Button with Arrows & Icons */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-[#EF233C] hover:bg-[#D90429] active:bg-[#B8001F] text-white font-extrabold text-sm tracking-wide shadow-lg shadow-red-500/25 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Send className="size-4 text-white group-hover:-translate-y-0.5 transition-transform" />
                <span>{isSubmitting ? "Submitting Inquiry..." : "Send Technical Inquiry to JEPL Desk"}</span>
                <ArrowRight className="size-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* 3 Bottom Feature Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-2 rounded-xl bg-red-50 text-[#EF233C] border border-red-100 shrink-0">
                    <Shield className="size-4.5" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight text-left">
                    Direct to Engineers<br />
                    <span className="text-slate-400 font-normal">(No Middle Layer)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-2 rounded-xl bg-red-50 text-[#EF233C] border border-red-100 shrink-0">
                    <Clock className="size-4.5" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight text-left">
                    Quick Response<br />
                    <span className="text-slate-400 font-normal">Within 24 Hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-2 rounded-xl bg-red-50 text-[#EF233C] border border-red-100 shrink-0">
                    <ShieldCheck className="size-4.5" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight text-left">
                    Trusted by<br />
                    <span className="text-slate-400 font-normal">500+ Businesses</span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}