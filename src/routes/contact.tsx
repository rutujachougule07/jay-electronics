import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
import { useState, useRef, useEffect, type FormEvent } from "react";
import { adminStore, useAdminStore } from "@/lib/admin-store";
import { submitContactInquiryToFirestore } from "@/lib/firestore-service";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Our Offices | Jay Electronics Private Limited" },
      {
        name: "description",
        content:
          "Find the nearest Jay Electronics office to connect with our engineering team in Sangli and Kolhapur.",
      },
      { property: "og:title", content: "Contact Our Offices | Jay Electronics" },
      {
        property: "og:description",
        content: "Connect with Jay Electronics regional offices in Sangli and Kolhapur.",
      },
    ],
  }),
  component: ContactPage,
});

function OfficeCard({ office }: { office: any }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
      {/* Card Top Image with Translucent Pill Badge */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950">
        <img
          src={office.image}
          alt={office.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-slate-700 text-xs font-extrabold text-white shadow-md">
          <span>{office.title}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#DC2626]">
            <MapPin className="size-3.5 shrink-0 text-[#DC2626]" />
            <span className="break-words">{office.badge}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            {office.title}
          </h2>

          <div className="space-y-3 pt-1 text-xs sm:text-sm font-medium text-slate-800">
            <div className="flex items-start gap-3 text-slate-600">
              <MapPin className="size-4 text-slate-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed break-words">{office.address}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="size-4 text-[#DC2626] shrink-0" />
              <a href={office.phoneHref} className="hover:text-[#DC2626] font-bold text-slate-900 transition-colors break-words">
                {office.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="size-4 text-[#DC2626] shrink-0" />
              <a href={`mailto:${office.email}`} className="hover:text-[#DC2626] text-slate-600 transition-colors break-all">
                {office.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
              <Clock className="size-4 text-slate-400 shrink-0" />
              <span className="break-words">{office.hours}</span>
            </div>
          </div>
        </div>

        {/* Call Button */}
        <a
          href={office.phoneHref}
          className="w-full py-3.5 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-red-600/20 flex items-center justify-center gap-2.5 transition group/btn cursor-pointer"
        >
          <PhoneCall className="size-4 text-white shrink-0" />
          <span className="truncate">{office.callLabel}</span>
          <ArrowRight className="size-4 text-white group-hover/btn:translate-x-1 transition-transform shrink-0" />
        </a>
      </div>
    </div>
  );
}

function ContactPage() {
  const store = useAdminStore();
  const offices = store.getOfficeHubs();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / clientWidth);
        setActiveSlide(Math.max(0, Math.min(offices.length - 1, index)));
      }
    }
  };

  const scrollToSlide = (idx: number) => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({ left: idx * width, behavior: "smooth" });
      setActiveSlide(idx);
    }
  };

  // Automatic slideshow timer - changes office slide every 3.5 seconds
  useEffect(() => {
    if (isPaused || offices.length <= 1) return;

    const timer = setInterval(() => {
      setActiveSlide((prevIndex) => {
        const nextIndex = (prevIndex + 1) % offices.length;
        if (sliderRef.current) {
          const width = sliderRef.current.clientWidth;
          sliderRef.current.scrollTo({ left: nextIndex * width, behavior: "smooth" });
        }
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, offices.length]);

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
    <div className="bg-[#FFFFFF] text-slate-800 font-sans antialiased min-h-screen pt-4 pb-24 sm:pb-16 relative overflow-hidden">
      {/* Background Soft Mesh Glow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        {/* HERO HEADER */}
        <div className="text-center space-y-3 max-w-2xl mx-auto pt-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3.5 py-1 rounded-full border border-red-100 shadow-2xs">
            <span>OUR OFFICES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Contact Our <span className="text-[#DC2626]">Offices</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Find the nearest Jay Electronics office to connect with our team. We're always ready to support you.
          </p>
        </div>

        {/* MOBILE OFFICE CARDS AUTO-PLAY SLIDER (< md) */}
        <div className="block md:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex overflow-x-auto snap-x snap-mandatory select-none scrollbar-none scroll-smooth justify-start items-stretch w-full"
          >
            {offices.map((office) => (
              <div
                key={office.id}
                className="flex-none w-full snap-center px-0.5"
              >
                <OfficeCard office={office} />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP OFFICE CARDS GRID (>= md) */}
        <div
          className={`hidden md:grid gap-6 sm:gap-8 justify-center w-full ${
            offices.length === 1
              ? "grid-cols-1 max-w-md mx-auto"
              : offices.length === 2
              ? "grid-cols-2 max-w-4xl mx-auto"
              : "grid-cols-3 max-w-6xl mx-auto"
          }`}
        >
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>

        {/* TECHNICAL INQUIRY FORM CONTAINER */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8 max-w-4xl mx-auto shadow-xl relative overflow-hidden">

          <div className="text-center space-y-2">
            <div className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
              DIRECT ENGINEERING CORRESPONDENCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Send a <span className="text-[#DC2626]">Technical</span> Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
              Your request will be routed directly to the regional lead engineer for immediate follow-up.
            </p>
          </div>

          {submitted ? (
            <div className="bg-red-50/70 border border-red-100 rounded-2xl p-8 text-center space-y-4">
              <CheckCircle2 className="size-12 text-[#DC2626] mx-auto" />
              <h3 className="text-xl font-extrabold text-slate-900">
                Technical Inquiry Submitted Successfully!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your request has been routed to our regional lead engineer. We will get back to you within business hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs transition cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900 block">
                    Your Full Name <span className="text-[#DC2626]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4.5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sunil Patil"
                      className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900 block">
                    Phone Number <span className="text-[#DC2626]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-4.5 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98..."
                      className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900 block">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4.5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900 block">
                    Target Regional Office <span className="text-[#DC2626]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 size-4.5 text-slate-400 pointer-events-none z-10" />
                    <select
                      name="office"
                      required
                      defaultValue={offices[0]?.title || "Sangli HQ & Central Depot"}
                      className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3.5 pl-11 pr-10 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium cursor-pointer appearance-none"
                    >
                      {offices.map((off) => (
                        <option key={off.id} value={off.title}>
                          {off.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-slate-900 block">
                  Technical Requirement / Question <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 size-4.5 text-slate-400" />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your security challenge, existing hardware brand, tender BOQ timeline, or AMC requirement..."
                    className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium resize-y"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 px-4 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-base tracking-wide shadow-lg shadow-red-600/25 transition flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Send className="size-4 sm:size-4.5 text-white shrink-0" />
                <span className="truncate">
                  {isSubmitting ? "Submitting Inquiry..." : "Send Technical Inquiry to JEPL Desk"}
                </span>
                <ArrowRight className="size-4 sm:size-4.5 text-white group-hover:translate-x-1.5 transition-transform shrink-0" />
              </button>

              {/* Bottom Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 p-3 sm:p-0 rounded-2xl bg-slate-50/80 sm:bg-transparent border border-slate-200/70 sm:border-0 justify-start text-left">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100/80">
                    <Shield className="size-4 sm:size-4.5 text-[#DC2626]" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Direct to Engineers<br />
                    <span className="text-slate-500 font-normal text-[11px]">(No Middle Layer)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 sm:p-0 rounded-2xl bg-slate-50/80 sm:bg-transparent border border-slate-200/70 sm:border-0 justify-start text-left">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100/80">
                    <Clock className="size-4 sm:size-4.5 text-[#DC2626]" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Quick Response<br />
                    <span className="text-slate-500 font-normal text-[11px]">Within 24 Hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 sm:p-0 rounded-2xl bg-slate-50/80 sm:bg-transparent border border-slate-200/70 sm:border-0 justify-start text-left">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100/80">
                    <ShieldCheck className="size-4 sm:size-4.5 text-[#DC2626]" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Trusted by<br />
                    <span className="text-slate-500 font-normal text-[11px]">500+ Businesses</span>
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