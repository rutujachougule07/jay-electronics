import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  FileText,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jay Electronics | Engineering Since 1989" },
      {
        name: "description",
        content:
          "Learn about Jay Electronics (JEPL), its 35+ years engineering foundation, historical timeline, testing labs, and integrated technology approach in Maharashtra.",
      },
      { property: "og:title", content: "About Jay Electronics Pvt Ltd" },
      {
        property: "og:description",
        content: "Turnkey system integration & electronics engineering experience since 1989.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] text-slate-800 font-sans antialiased min-h-screen py-8 sm:py-12">
      {/* =========================================================================
         1. HERO INTRO & CERTIFICATIONS + TESTING DEPOT IMAGE (IMAGE 1)
         ========================================================================= */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-6">
          <Link to="/" className="text-slate-600 hover:text-slate-800">Home</Link>
          <span className="text-slate-400">/</span>
          <span className="text-[#DC2626]">ABOUT US</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
              INSTITUTIONAL TRUST SINCE 1989
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
              35+ Years of Pioneering System Integration in Maharashtra
            </h1>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Established in 1989, JAY ELECTRONICS PRIVATE LIMITED (JEPL) has grown from a specialized electronics communications venture into one of Western India's foremost turnkey system integrators for mission-critical surveillance, high-speed optical networking, biometric access, and command center architectures.
            </p>

            {/* 3 Certification Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-xs font-extrabold text-slate-800 hover:border-slate-300 transition">
                <Award className="size-4 text-[#DC2626]" />
                <span>ISO 9001:2015 Certified</span>
              </div>

              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-xs font-extrabold text-slate-800 hover:border-slate-300 transition">
                <FileText className="size-4 text-[#DC2626]" />
                <span>Class-1 Govt. Contractor</span>
              </div>

              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-xs font-extrabold text-slate-800 hover:border-slate-300 transition">
                <ShieldCheck className="size-4 text-[#DC2626]" />
                <span>GeM Registered Vendor</span>
              </div>
            </div>
          </div>

          {/* Right Image Box with Depot Label */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900">
              <img
                src="/about-depot.png"
                alt="Sangli Central Testing Depot"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000";
                }}
              />
              {/* Overlay Label Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B132B]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white shadow-xl">
                <h3 className="text-sm font-extrabold text-white tracking-wide">
                  Sangli Central Testing Depot
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  Pre-commissioning stress tests & firmware audits before field dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         2. HISTORICAL TIMELINE CARD (IMAGE 2)
         ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
          <div className="text-center space-y-2">
            <div className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
              HISTORICAL TIMELINE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Milestones in Technology Excellence
            </h2>
          </div>

          {/* 4 Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1989 Card */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:bg-slate-100/80 transition duration-300">
              <div>
                <div className="text-3xl font-black text-[#DC2626] tracking-tight">
                  1989
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mt-2">
                  Foundation & Telephony
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Founded in Sangli, pioneering early EPABX telecom and electronic communication lines for agro-industries and banks.
                </p>
              </div>
            </div>

            {/* 2002 Card */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:bg-slate-100/80 transition duration-300">
              <div>
                <div className="text-3xl font-black text-[#DC2626] tracking-tight">
                  2002
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mt-2">
                  CCTV & Security Era
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Expanded into analog CCTV, co-operative bank currency chest alarm systems, and regional industrial perimeter protection.
                </p>
              </div>
            </div>

            {/* 2014 Card */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:bg-slate-100/80 transition duration-300">
              <div>
                <div className="text-3xl font-black text-[#DC2626] tracking-tight">
                  2014
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mt-2">
                  Smart City & Optical Fiber
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Commissioned high-precision optical fiber splicing teams, Class-1 municipal traffic surveillance, and Kolhapur/Pune hubs.
                </p>
              </div>
            </div>

            {/* 2026+ Card */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:bg-slate-100/80 transition duration-300">
              <div>
                <div className="text-3xl font-black text-[#DC2626] tracking-tight">
                  2026+
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mt-2">
                  AI Telemetry & Video NOCs
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Leading the region in edge AI computer vision, fine-pitch LED command walls, touchless biometrics, and 24×7 SLA support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         3. IN-HOUSE TESTING LAB & ENGINEERING CREDO (IMAGE 3)
         ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Box: In-House Testing & Staging Lab */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                In-House Testing & Staging Lab
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Unlike brokers or re-sellers, JEPL owns and maintains certified diagnostic instruments to ensure zero post-installation defects:
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Tool Item 1 */}
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-rose-50 text-[#DC2626] border border-rose-100 shrink-0">
                  <Wrench className="size-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-slate-900">
                    Fluke DSX-8000 Cable Certifiers:
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    100% Channel certification for Cat6A up to 2000 MHz with PDF pass reports.
                  </p>
                </div>
              </div>

              {/* Tool Item 2 */}
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-rose-50 text-[#DC2626] border border-rose-100 shrink-0">
                  <Wrench className="size-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-slate-900">
                    Fujikura 90S+ Core Alignment Splicers:
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Sub-0.02dB optical splice loss for mission-critical industrial foundries.
                  </p>
                </div>
              </div>

              {/* Tool Item 3 */}
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-rose-50 text-[#DC2626] border border-rose-100 shrink-0">
                  <Wrench className="size-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-slate-900">
                    OTDR Optical Loss Analyzers:
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Bidirectional wavelength reflection tracing for 50+ km campus loops.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Box: Engineering Credo (Dark Navy Card) */}
          <div className="lg:col-span-6 bg-[#0B132B] border border-slate-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                ENGINEERING CREDO
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                "Zero Tolerance for Downtime"
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When a hospital ICU access door locks up, a bank strongroom alarm fails, or a smart city junction camera goes blind, seconds count. That is why JEPL refuses shortcuts in cabling gauges, surge suppressors, or OEM licensing.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div>
                <div className="text-3xl font-black text-white tracking-tight">
                  99.8%
                </div>
                <div className="text-xs font-semibold text-slate-400 mt-1">
                  Contract SLA Uptime
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-white tracking-tight">
                  4-Hour
                </div>
                <div className="text-xs font-semibold text-slate-400 mt-1">
                  Emergency Van Dispatch
                </div>
              </div>
            </div>

            {/* Red CTA Button */}
            <Link
              to="/contact"
              className="w-full py-4 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B] text-white font-extrabold text-sm tracking-wide shadow-lg shadow-red-900/30 transition duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Consult with Senior Systems Engineer</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
