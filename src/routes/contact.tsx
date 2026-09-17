import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { adminStore } from "@/lib/admin-store";
import { submitContactInquiryToFirestore } from "@/lib/firestore-service";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Regional Engineering Hubs | Jay Electronics" },
      {
        name: "description",
        content:
          "Direct access to senior system engineers, emergency field technicians, and our central testing depots in Sangli, Kolhapur, and Pune.",
      },
      { property: "og:title", content: "Contact Engineering Hubs | Jay Electronics" },
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
    <div className="bg-[#F8FAFC] text-slate-800 font-sans antialiased min-h-screen py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* =========================================================================
           SECTION 1: TOP BREADCRUMB & REGIONAL OFFICES GRID (IMAGE 1)
           ========================================================================= */}
        <div className="space-y-6 sm:space-y-8">
          {/* Breadcrumb & Header */}
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <Link to="/" className="text-slate-500 hover:text-slate-800">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-sky-600 font-bold">CONTACT OFFICES</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Connect with Our Engineering Hubs
            </h1>

            <p className="text-slate-600 text-xs sm:text-base max-w-3xl font-normal leading-relaxed">
              Direct access to senior system engineers, emergency field technicians, and our central testing depots in Sangli, Kolhapur, and Pune.
            </p>
          </div>

          {/* 3 Regional Office Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {OFFICES.map((office) => (
              <div
                key={office.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Badge */}
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-sky-600">
                    <MapPin className="size-3.5 shrink-0 text-sky-600" />
                    <span>{office.badge}</span>
                  </div>

                  {/* Title & Address */}
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {office.title}
                    </h2>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                  {/* Contact Details List */}
                  <div className="space-y-2.5 pt-2 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <Phone className="size-4 text-sky-600 shrink-0" />
                      <a href={office.phoneHref} className="hover:text-sky-600 font-bold">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="size-4 text-sky-600 shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-sky-600">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="size-4 text-slate-400 shrink-0" />
                      <span className="text-slate-500">{office.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Call Button */}
                <a
                  href={office.phoneHref}
                  className="w-full py-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 active:bg-sky-200 text-sky-700 border border-sky-200/80 text-xs font-extrabold text-center transition duration-200 block shadow-xs"
                >
                  {office.callLabel}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
           SECTION 2: TECHNICAL INQUIRY FORM CARD (IMAGE 2)
           ========================================================================= */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-10 lg:p-12 shadow-sm max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-1.5">
            <div className="text-xs font-black uppercase tracking-widest text-sky-600">
              DIRECT ENGINEERING CORRESPONDENCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Send a Technical Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-normal">
              Your request will be routed directly to the regional lead engineer for immediate follow-up.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4">
              <CheckCircle2 className="size-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-extrabold text-slate-900">
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
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Your Full Name <span className="text-sky-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sunil Patil"
                    className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Phone Number <span className="text-sky-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98..."
                    className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition font-medium"
                  />
                </div>
              </div>

              {/* Row 2: Work Email & Target Regional Office */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Target Regional Office <span className="text-sky-600">*</span>
                  </label>
                  <select
                    name="office"
                    required
                    defaultValue="Sangli HQ & Central Depot"
                    className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3 px-4 text-sm text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition font-medium cursor-pointer"
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
                </div>
              </div>

              {/* Row 3: Technical Requirement / Question */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-slate-800">
                  Technical Requirement / Question <span className="text-sky-600">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your security challenge, existing hardware brand, tender BOQ timeline, or AMC requirement..."
                  className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition font-medium resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 active:scale-[0.99] text-white font-extrabold text-sm tracking-wide shadow-lg shadow-sky-600/20 transition duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Send className="size-4 group-hover:translate-x-0.5 transition-transform" />
                <span>{isSubmitting ? "Sending Inquiry..." : "Send Technical Inquiry to JEPL Desk"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}