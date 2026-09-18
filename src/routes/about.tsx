import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Calendar,
  Camera,
  CheckCircle2,
  Cpu,
  FileText,
  Landmark,
  Network,
  ShieldCheck,
  Sparkles,
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
    <div className="bg-[#FFFFFF] text-slate-800 font-sans antialiased min-h-screen relative overflow-hidden">
      {/* Background Soft Mesh Glow Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================================================
         1. HERO INTRO & CERTIFICATIONS (EXACT MATCH TO REFERENCE IMAGE)
         ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider mb-8 text-slate-500">
          <Link to="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#DC2626] font-black">About Us</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-black text-[#DC2626] uppercase tracking-wider shadow-2xs">
              <span className="size-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span>INSTITUTIONAL TRUST SINCE 1989</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight">
              35+ Years of Pioneering System Integration in{" "}
              <span className="text-[#DC2626]">Maharashtra</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl">
              Established in 1989, JAY ELECTRONICS PRIVATE LIMITED (JEPL) has grown from a
              specialized electronics communications venture into one of Western India's foremost
              turnkey system integrators for mission-critical surveillance, high-speed optical
              networking, biometric access, and command center architectures.
            </p>

            {/* 3 Certification Badges (With Red Icon Badges) */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-white border border-slate-200/90 shadow-2xs rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-slate-900 hover:shadow-md transition">
                <div className="size-7 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                  <Award className="size-4 text-[#DC2626]" />
                </div>
                <span>ISO 9001:2015 Certified</span>
              </div>

              <div className="bg-white border border-slate-200/90 shadow-2xs rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-slate-900 hover:shadow-md transition">
                <div className="size-7 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                  <FileText className="size-4 text-[#DC2626]" />
                </div>
                <span>Class-1 Govt. Contractor</span>
              </div>

              <div className="bg-white border border-slate-200/90 shadow-2xs rounded-2xl px-4 py-2.5 flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-slate-900 hover:shadow-md transition">
                <div className="size-7 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-4 text-[#DC2626]" />
                </div>
                <span>GeM Registered Vendor</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Sangli Central Testing Depot"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700 opacity-95"
              />
              {/* Bottom Translucent Overlay Bar */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-800 p-4 sm:p-5 rounded-2xl text-white shadow-2xl flex items-center gap-3">
                <div className="w-1.5 h-10 bg-[#DC2626] rounded-full shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white tracking-wide">
                    Sangli Central Testing Depot
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    Pre-commissioning stress tests &amp; firmware audits before field dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         2. HISTORICAL TIMELINE SECTION (MATCHING EXACT TIMELINE CARDS FLOW)
         ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 lg:p-16 shadow-2xs space-y-12 relative overflow-hidden">
          {/* Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-black text-[#DC2626] uppercase tracking-wider">
              <Calendar className="size-3.5 text-[#DC2626]" />
              <span>HISTORICAL TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Milestones in <span className="text-[#DC2626]">Technology</span>{" "}
              <span className="text-[#0066FF]">Excellence</span>
            </h2>
          </div>

          {/* Desktop Timeline Flow (Alternating Cards) */}
          <div className="relative pt-6 pb-6">
            <div className="hidden lg:block relative min-h-[460px]">
              {/* Center Line Axis */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-slate-300 z-0">
                <div className="size-3.5 rounded-full bg-slate-400 absolute -left-1.5 -top-[5px]" />
                <div className="size-3.5 rounded-full bg-slate-400 absolute -right-1.5 -top-[5px]" />
              </div>

              <div className="grid grid-cols-4 gap-6 relative z-10 h-full">
                {/* NODE 1: 1989 (Top Card) */}
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-3 pb-4 flex flex-col items-center">
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-2xs space-y-1.5 w-full hover:shadow-md transition group border-t-4 border-t-red-500">
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
                        Foundation &amp; Telephony
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Founded in Sangli, pioneering early EPABX telecom and electronic lines for agro-industries and banks.
                      </p>
                    </div>
                    <div className="size-12 rounded-full border-2 border-red-500 bg-red-50 shadow-md flex items-center justify-center text-red-600">
                      <Landmark className="size-5 text-red-600" />
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center my-auto">
                    <div className="size-5 rounded-full bg-red-600 border-4 border-white shadow-md z-20" />
                    <span className="text-xs font-black text-red-600 mt-2">
                      Milestone 1 • 1989
                    </span>
                  </div>
                  <div className="h-44 opacity-0 pointer-events-none" />
                </div>

                {/* NODE 2: 2002 (Bottom Card) */}
                <div className="flex flex-col justify-between h-full">
                  <div className="h-44 opacity-0 pointer-events-none" />
                  <div className="relative flex flex-col items-center my-auto">
                    <span className="text-xs font-black text-blue-600 mb-2">
                      Milestone 2 • 2002
                    </span>
                    <div className="size-5 rounded-full bg-blue-600 border-4 border-white shadow-md z-20" />
                  </div>
                  <div className="space-y-3 pt-4 flex flex-col items-center">
                    <div className="size-12 rounded-full border-2 border-blue-500 bg-blue-50 shadow-md flex items-center justify-center text-blue-600">
                      <Network className="size-5 text-blue-600" />
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-2xs space-y-1.5 w-full hover:shadow-md transition group border-t-4 border-t-blue-500">
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        Smart City &amp; Optical Fiber
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Commissioned optical fiber splicing teams, Class-1 municipal traffic surveillance, and Pune hubs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* NODE 3: 2014 (Top Card) */}
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-3 pb-4 flex flex-col items-center">
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-2xs space-y-1.5 w-full hover:shadow-md transition group border-t-4 border-t-red-500">
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
                        CCTV &amp; Security Era
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Expanded into analog CCTV, co-operative bank currency chest alarm systems, and industrial security.
                      </p>
                    </div>
                    <div className="size-12 rounded-full border-2 border-red-500 bg-red-50 shadow-md flex items-center justify-center text-red-600">
                      <Camera className="size-5 text-red-600" />
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center my-auto">
                    <div className="size-5 rounded-full bg-red-600 border-4 border-white shadow-md z-20" />
                    <span className="text-xs font-black text-red-600 mt-2">
                      Milestone 3 • 2014
                    </span>
                  </div>
                  <div className="h-44 opacity-0 pointer-events-none" />
                </div>

                {/* NODE 4: 2026+ (Bottom Card) */}
                <div className="flex flex-col justify-between h-full">
                  <div className="h-44 opacity-0 pointer-events-none" />
                  <div className="relative flex flex-col items-center my-auto">
                    <span className="text-xs font-black text-blue-600 mb-2">
                      Milestone 4 • 2026+
                    </span>
                    <div className="size-5 rounded-full bg-blue-600 border-4 border-white shadow-md z-20" />
                  </div>
                  <div className="space-y-3 pt-4 flex flex-col items-center">
                    <div className="size-12 rounded-full border-2 border-blue-500 bg-blue-50 shadow-md flex items-center justify-center text-blue-600">
                      <Sparkles className="size-5 text-blue-600" />
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-2xs space-y-1.5 w-full hover:shadow-md transition group border-t-4 border-t-blue-500">
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        AI Telemetry &amp; Video NOCs
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Leading the region in edge AI computer vision, LED command walls, touchless biometrics &amp; SLA support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="lg:hidden space-y-5">
              {[
                { milestone: "Milestone 1", year: "1989", title: "Foundation & Telephony", desc: "Founded in Sangli, pioneering early EPABX telecom and electronic lines for agro-industries and banks.", icon: Landmark, color: "text-red-600 bg-red-50 border-red-500" },
                { milestone: "Milestone 2", year: "2002", title: "Smart City & Optical Fiber", desc: "Commissioned optical fiber splicing teams, Class-1 municipal traffic surveillance, and Pune hubs.", icon: Network, color: "text-blue-600 bg-blue-50 border-blue-500" },
                { milestone: "Milestone 3", year: "2014", title: "CCTV & Security Era", desc: "Expanded into analog CCTV, co-operative bank currency chest alarm systems, and industrial security.", icon: Camera, color: "text-red-600 bg-red-50 border-red-500" },
                { milestone: "Milestone 4", year: "2026+", title: "AI Telemetry & Video NOCs", desc: "Leading the region in edge AI computer vision, LED command walls, touchless biometrics & SLA support.", icon: Sparkles, color: "text-blue-600 bg-blue-50 border-blue-500" },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className={`bg-white border border-slate-200 border-l-4 ${item.color.split(" ").slice(-1)[0]} rounded-2xl p-5 shadow-2xs space-y-2`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black ${item.color.split(" ")[0]}`}>{item.milestone} • {item.year}</span>
                      <div className={`size-8 rounded-full ${item.color.split(" ")[1]} flex items-center justify-center ${item.color.split(" ")[0]}`}>
                        <IconComp className="size-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         3. IN-HOUSE TESTING LAB & ENGINEERING CREDO (MATCHING REFERENCE IMAGE)
         ========================================================================= */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: In-House Testing & Staging Lab */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                In-House Testing &amp; Staging Lab
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                Unlike brokers or re-sellers, JEPL owns and maintains certified diagnostic instruments to ensure zero post-installation defects:
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4.5 flex items-start gap-4 hover:bg-white hover:shadow-md transition">
                <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                  <Wrench className="size-4.5 text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Fluke DSX-8000 Cable Certifiers:
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    100% Channel certification for Cat6A up to 2000 MHz with PDF pass reports.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4.5 flex items-start gap-4 hover:bg-white hover:shadow-md transition">
                <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                  <Wrench className="size-4.5 text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Fujikura 90S+ Core Alignment Splicers:
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Sub-0.02dB optical splice loss for mission-critical industrial foundries.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4.5 flex items-start gap-4 hover:bg-white hover:shadow-md transition">
                <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                  <Wrench className="size-4.5 text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    OTDR Optical Loss Analyzers:
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Bidirectional wavelength reflection tracing for 50+ km campus loops.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Credo Card (Light Blue Gradient Theme Card) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#EBF3FC] via-[#F4F8FD] to-[#E5EFFB] border border-blue-200/80 rounded-3xl p-6 sm:p-10 text-slate-900 shadow-md flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  ENGINEERING CREDO
                </span>
                <span className="w-8 h-0.5 bg-[#DC2626] rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                "Zero Tolerance for Downtime"
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                When a hospital ICU access door locks up, a bank strongroom alarm fails, or a smart city junction camera goes blind, seconds count. That is why JEPL refuses shortcuts in cabling gauges, surge suppressors, or OEM licensing.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-blue-200/80 relative z-10">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#DC2626] tracking-tight">
                  99.8%
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  Contract SLA Uptime
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#DC2626] tracking-tight">
                  4-Hour
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  Emergency Van Dispatch
                </div>
              </div>
            </div>

            {/* CTA Red Button */}
            <Link
              to="/contact"
              className="w-full py-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-red-600/20 transition duration-300 flex items-center justify-center gap-2.5 group cursor-pointer relative z-10"
            >
              <span>Consult with Senior Systems Engineer</span>
              <ArrowRight className="size-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
