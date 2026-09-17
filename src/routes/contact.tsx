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
    <div className="bg-[#F7F9FC] text-[#17202A] font-sans antialiased min-h-screen pt-2 pb-10 sm:pt-4 sm:pb-12 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 relative z-10">
        {/* HERO HEADER */}
        <div className="text-center space-y-1.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A76A8] bg-[#EAF6FC] px-2.5 py-0.5 rounded-full border border-[#DCE7EE]">
            <span>OUR OFFICES</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#17202A] tracking-tight leading-tight">
            Contact Our Offices
          </h1>

          <p className="text-[#647786] text-xs sm:text-sm font-normal leading-relaxed">
            Find the nearest Jay Electronics office to connect with our team. We’re always ready to support you.
          </p>
        </div>

        {/* THREE OFFICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {OFFICES.map((office) => (
            <div key={office.id} className="bg-white rounded-[24px] border border-[#DCE7EE] shadow-xs flex flex-col justify-between overflow-hidden group">
              <div className="relative h-38 sm:h-44 w-full overflow-hidden bg-[#041321]">
                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-[#041321]/90 px-3 py-1 rounded-full border border-slate-700 text-[10px] font-extrabold text-white">
                  <span>{office.title}</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-black uppercase text-[#0A76A8]">
                    <MapPin className="size-3.5 shrink-0 text-[#0A76A8]" />
                    <span>{office.badge}</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-black text-[#17202A]">
                    {office.title}
                  </h2>

                  <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-medium text-[#17202A]">
                    <div className="flex items-start gap-2.5 text-[#647786]">
                      <MapPin className="size-4 text-[#647786] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="size-4 text-[#0A76A8] shrink-0" />
                      <a href={office.phoneHref} className="hover:text-[#0A76A8] font-bold text-[#17202A]">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="size-4 text-[#0A76A8] shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-[#0A76A8] text-[#647786]">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 text-[#647786]">
                      <Clock className="size-4 text-[#647786] shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={office.phoneHref}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0A76A8] hover:bg-[#0896d7] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md flex items-center justify-center gap-2.5 transition"
                >
                  <PhoneCall className="size-4 text-white" />
                  <span>{office.callLabel}</span>
                  <ArrowRight className="size-3.5 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* TECHNICAL INQUIRY FORM */}
        <div className="bg-white border border-[#DCE7EE] rounded-[27px] p-6 sm:p-10 lg:p-12 space-y-8 max-w-4xl mx-auto shadow-xs">
          <div className="flex items-center justify-between border-b border-[#DCE7EE] pb-5">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/jay-logo.jpeg"
                alt="Jay Electronics Logo"
                className="h-9 sm:h-10 w-auto object-contain bg-white rounded-xl px-2 py-0.5 shadow-xs border border-[#DCE7EE]"
              />
            </Link>
            <span className="text-xs text-[#647786] font-medium hidden sm:inline-block">
              Engineering Support for a Smarter Tomorrow
            </span>
          </div>

          <div className="text-center space-y-2">
            <div className="text-xs font-black uppercase tracking-widest text-[#0A76A8]">
              DIRECT ENGINEERING CORRESPONDENCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#17202A] tracking-tight">
              Send a Technical Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#647786] max-w-xl mx-auto font-normal leading-relaxed">
              Your request will be routed directly to the regional lead engineer for immediate follow-up.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#EAF6FC] border border-[#DCE7EE] rounded-2xl p-8 text-center space-y-4">
              <CheckCircle2 className="size-12 text-[#0A76A8] mx-auto" />
              <h3 className="text-xl font-extrabold text-[#17202A]">
                Technical Inquiry Submitted Successfully!
              </h3>
              <p className="text-xs text-[#647786] max-w-md mx-auto leading-relaxed">
                Your request has been routed to our regional lead engineer. We will get back to you within business hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-[#0A76A8] hover:bg-[#0896d7] text-white font-extrabold text-xs transition"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#17202A] block">
                    Your Full Name <span className="text-[#0A76A8]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#647786]" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sunil Patil"
                      className="w-full rounded-2xl bg-[#F7F9FC] border border-[#DCE7EE] py-3.5 pl-11 pr-4 text-sm text-[#17202A] placeholder:text-[#647786] focus:outline-none focus:border-[#0A76A8] transition font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#17202A] block">
                    Phone Number <span className="text-[#0A76A8]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#647786]" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98..."
                      className="w-full rounded-2xl bg-[#F7F9FC] border border-[#DCE7EE] py-3.5 pl-11 pr-4 text-sm text-[#17202A] placeholder:text-[#647786] focus:outline-none focus:border-[#0A76A8] transition font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#17202A] block">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#647786]" />
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      className="w-full rounded-2xl bg-[#F7F9FC] border border-[#DCE7EE] py-3.5 pl-11 pr-4 text-sm text-[#17202A] placeholder:text-[#647786] focus:outline-none focus:border-[#0A76A8] transition font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#17202A] block">
                    Target Regional Office <span className="text-[#0A76A8]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#647786] pointer-events-none z-10" />
                    <select
                      name="office"
                      required
                      defaultValue="Sangli HQ & Central Depot"
                      className="w-full rounded-2xl bg-[#F7F9FC] border border-[#DCE7EE] py-3.5 pl-11 pr-10 text-sm text-[#17202A] focus:outline-none focus:border-[#0A76A8] transition font-medium cursor-pointer appearance-none"
                    >
                      <option value="Sangli HQ & Central Depot">Sangli HQ & Central Depot</option>
                      <option value="Kolhapur Regional Office">Kolhapur Regional Office</option>
                      <option value="Pune IT Hub & Corporate">Pune IT Hub & Corporate</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-[#647786] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-[#17202A] block">
                  Technical Requirement / Question <span className="text-[#0A76A8]">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 size-4 text-[#647786]" />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your security challenge, existing hardware brand, tender BOQ timeline, or AMC requirement..."
                    className="w-full rounded-2xl bg-[#F7F9FC] border border-[#DCE7EE] py-3.5 pl-11 pr-4 text-sm text-[#17202A] placeholder:text-[#647786] focus:outline-none focus:border-[#0A76A8] transition font-medium resize-y"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-[#0A76A8] hover:bg-[#0896d7] text-white font-extrabold text-sm tracking-wide shadow-md transition flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Send className="size-4 text-white" />
                <span>{isSubmitting ? "Submitting Inquiry..." : "Send Technical Inquiry to JEPL Desk"}</span>
                <ArrowRight className="size-4 text-white" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#DCE7EE]">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                    <Shield className="size-4.5" />
                  </div>
                  <div className="text-[11px] font-bold text-[#17202A] leading-tight text-left">
                    Direct to Engineers<br />
                    <span className="text-[#647786] font-normal">(No Middle Layer)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                    <Clock className="size-4.5" />
                  </div>
                  <div className="text-[11px] font-bold text-[#17202A] leading-tight text-left">
                    Quick Response<br />
                    <span className="text-[#647786] font-normal">Within 24 Hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                    <ShieldCheck className="size-4.5" />
                  </div>
                  <div className="text-[11px] font-bold text-[#17202A] leading-tight text-left">
                    Trusted by<br />
                    <span className="text-[#647786] font-normal">500+ Businesses</span>
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