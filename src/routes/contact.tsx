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
    <div className="bg-[#FFFFFF] text-slate-800 font-sans antialiased min-h-screen pt-4 pb-16 relative overflow-hidden">
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

        {/* THREE OFFICE CARDS */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible pb-4 md:pb-0 gap-4 sm:gap-8 md:grid-cols-3 snap-x snap-mandatory scroll-smooth no-scrollbar">
          {OFFICES.map((office) => (
            <div
              key={office.id}
              className="w-[85vw] sm:w-[360px] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
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
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#DC2626]">
                    <MapPin className="size-3.5 shrink-0 text-[#DC2626]" />
                    <span>{office.badge}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {office.title}
                  </h2>

                  <div className="space-y-3 pt-1 text-xs sm:text-sm font-medium text-slate-800">
                    <div className="flex items-start gap-3 text-slate-600">
                      <MapPin className="size-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="size-4 text-[#DC2626] shrink-0" />
                      <a href={office.phoneHref} className="hover:text-[#DC2626] font-bold text-slate-900 transition-colors">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="size-4 text-[#DC2626] shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-[#DC2626] text-slate-600 transition-colors">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-slate-600">
                      <Clock className="size-4 text-slate-400 shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Call Button */}
                <a
                  href={office.phoneHref}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-red-600/20 flex items-center justify-center gap-2.5 transition group/btn cursor-pointer"
                >
                  <PhoneCall className="size-4 text-white" />
                  <span>{office.callLabel}</span>
                  <ArrowRight className="size-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* TECHNICAL INQUIRY FORM CONTAINER */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          {/* Form Header Logo Row */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-6">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/jay-logo.jpeg"
                alt="Jay Electronics Logo"
                className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg px-2.5 py-1 shadow-2xs border border-slate-200/80"
              />
            </Link>
            <span className="text-xs sm:text-sm text-slate-500 font-medium hidden sm:inline-block">
              Engineering Support for a Smarter Tomorrow
            </span>
          </div>

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
                      defaultValue="Sangli HQ & Central Depot"
                      className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3.5 pl-11 pr-10 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium cursor-pointer appearance-none"
                    >
                      <option value="Sangli HQ & Central Depot">Sangli HQ & Central Depot</option>
                      <option value="Kolhapur Regional Office">Kolhapur Regional Office</option>
                      <option value="Pune IT Hub & Corporate">Pune IT Hub & Corporate</option>
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
                className="w-full py-4 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-red-600/25 transition flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Send className="size-4.5 text-white" />
                <span>{isSubmitting ? "Submitting Inquiry..." : "Send Technical Inquiry to JEPL Desk"}</span>
                <ArrowRight className="size-4.5 text-white group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Bottom Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                    <Shield className="size-4.5 text-[#DC2626]" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight text-left">
                    Direct to Engineers<br />
                    <span className="text-slate-500 font-normal">(No Middle Layer)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                    <Clock className="size-4.5 text-[#DC2626]" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight text-left">
                    Quick Response<br />
                    <span className="text-slate-500 font-normal">Within 24 Hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                    <ShieldCheck className="size-4.5 text-[#DC2626]" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight text-left">
                    Trusted by<br />
                    <span className="text-slate-500 font-normal">500+ Businesses</span>
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