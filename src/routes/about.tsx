import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Camera,
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
    <div className="bg-[#F8FAFC] text-slate-800 font-sans antialiased min-h-screen py-6 sm:py-12">
      {/* =========================================================================
         1. HERO INTRO & CERTIFICATIONS + TESTING DEPOT IMAGE (IMAGE 1)
         ========================================================================= */}
      <section className="py-6 sm:py-12 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-6">
          <Link to="/" className="text-slate-600 hover:text-slate-800">Home</Link>
          <span className="text-slate-400">/</span>
          <span className="text-sky-600">ABOUT US</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text & Badges */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="text-xs font-black uppercase tracking-widest text-sky-600">
              INSTITUTIONAL TRUST SINCE 1989
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
              35+ Years of Pioneering System Integration in Maharashtra
            </h1>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-normal">
              Established in 1989, JAY ELECTRONICS PRIVATE LIMITED (JEPL) has grown from a specialized electronics communications venture into one of Western India's foremost turnkey system integrators for mission-critical surveillance, high-speed optical networking, biometric access, and command center architectures.
            </p>

            {/* 3 Certification Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-extrabold text-slate-800 hover:border-slate-300 transition">
                <Award className="size-4 text-sky-600" />
                <span>ISO 9001:2015 Certified</span>
              </div>

              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-extrabold text-slate-800 hover:border-slate-300 transition">
                <FileText className="size-4 text-sky-600" />
                <span>Class-1 Govt. Contractor</span>
              </div>

              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-extrabold text-slate-800 hover:border-slate-300 transition">
                <ShieldCheck className="size-4 text-sky-600" />
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
         2. HISTORICAL TIMELINE SECTION (MATCHING NEW ALTERNATING REFERENCE IMAGE)
         ========================================================================= */}
      <section className="py-8 sm:py-12 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-md space-y-12 relative overflow-hidden font-sans">

          {/* Top Right Decorative Arc (Matching reference image) */}
          <div className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full border border-sky-300/40" />

          {/* Section Header (Centered matching 1st Image Title) */}
          <div className="text-center space-y-2 relative z-10 max-w-3xl mx-auto">
            <div className="text-xs sm:text-sm font-black uppercase tracking-widest text-sky-600">
              HISTORICAL TIMELINE
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Milestones in Technology Excellence
            </h2>
          </div>

          {/* Timeline Component Container */}
          <div className="relative z-10 pt-4 pb-4">

            {/* DESKTOP ALTERNATING TOP/BOTTOM HORIZONTAL TIMELINE LAYOUT (lg & above) */}
            <div className="hidden lg:block relative min-h-[460px]">

              {/* Central Black Horizontal Axis Line */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2.5px] bg-slate-900 z-0">
                {/* Solid End Black Dots */}
                <div className="size-3.5 rounded-full bg-slate-900 absolute -left-1.5 -top-[5.5px]" />
                <div className="size-3.5 rounded-full bg-slate-900 absolute -right-1.5 -top-[5.5px]" />
              </div>

              {/* 4 Alternating Milestone Columns */}
              <div className="grid grid-cols-4 gap-6 relative z-10 h-full">

                {/* -------------------- NODE 1 (TOP) -------------------- */}
                <div className="flex flex-col justify-between h-full">
                  {/* TOP SECTION (Card + Icon + Vertical Stem) */}
                  <div className="space-y-3 pb-4 flex flex-col items-center">
                    {/* Content Card */}
                    <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs space-y-1 w-full hover:shadow-md transition">
                      <h3 className="text-sm font-extrabold text-slate-900">
                        Foundation &amp; Telephony
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        Founded in Sangli, pioneering early EPABX telecom and electronic lines for agro-industries and banks.
                      </p>
                    </div>

                    {/* Double-Ring Blue Circle Icon */}
                    <div className="size-14 rounded-full border-2 border-sky-500 bg-white shadow-md flex items-center justify-center text-sky-600 hover:scale-110 transition">
                      <div className="size-11 rounded-full border border-sky-200 flex items-center justify-center">
                        <Landmark className="size-5 text-sky-600" />
                      </div>
                    </div>

                    {/* Vertical Stem Line pointing DOWN to Axis */}
                    <div className="w-0.5 h-7 bg-slate-800" />
                  </div>

                  {/* CENTER NODE ON AXIS */}
                  <div className="relative flex flex-col items-center my-auto">
                    <div className="size-4.5 rounded-full bg-sky-500 border-2 border-white shadow-md ring-4 ring-sky-500/20 z-20" />
                    <span className="text-xs font-extrabold text-sky-600 mt-2">
                      Milestone 1 • 1989
                    </span>
                  </div>

                  {/* Empty Spacer for Bottom */}
                  <div className="h-44 opacity-0 pointer-events-none" />
                </div>

                {/* -------------------- NODE 2 (BOTTOM) -------------------- */}
                <div className="flex flex-col justify-between h-full">
                  {/* Empty Spacer for Top */}
                  <div className="h-44 opacity-0 pointer-events-none" />

                  {/* CENTER NODE ON AXIS */}
                  <div className="relative flex flex-col items-center my-auto">
                    <span className="text-xs font-extrabold text-sky-600 mb-2">
                      Milestone 2 • 2002
                    </span>
                    <div className="size-4.5 rounded-full bg-sky-500 border-2 border-white shadow-md ring-4 ring-sky-500/20 z-20" />
                  </div>

                  {/* BOTTOM SECTION (Vertical Stem + Icon + Card) */}
                  <div className="space-y-3 pt-4 flex flex-col items-center">
                    {/* Vertical Stem Line pointing UP to Axis */}
                    <div className="w-0.5 h-7 bg-slate-800" />

                    {/* Double-Ring Blue Circle Icon */}
                    <div className="size-14 rounded-full border-2 border-sky-500 bg-white shadow-md flex items-center justify-center text-sky-600 hover:scale-110 transition">
                      <div className="size-11 rounded-full border border-sky-200 flex items-center justify-center">
                        <Camera className="size-5 text-sky-600" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs space-y-1 w-full hover:shadow-md transition">
                      <h3 className="text-sm font-extrabold text-slate-900">
                        CCTV &amp; Security Era
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        Expanded into analog CCTV, co-operative bank currency chest alarm systems, and industrial security.
                      </p>
                    </div>
                  </div>
                </div>

                {/* -------------------- NODE 3 (TOP) -------------------- */}
                <div className="flex flex-col justify-between h-full">
                  {/* TOP SECTION (Card + Icon + Vertical Stem) */}
                  <div className="space-y-3 pb-4 flex flex-col items-center">
                    {/* Content Card */}
                    <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs space-y-1 w-full hover:shadow-md transition">
                      <h3 className="text-sm font-extrabold text-slate-900">
                        Smart City &amp; Optical Fiber
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        Commissioned optical fiber splicing teams, Class-1 municipal traffic surveillance, and Pune hubs.
                      </p>
                    </div>

                    {/* Double-Ring Blue Circle Icon */}
                    <div className="size-14 rounded-full border-2 border-sky-500 bg-white shadow-md flex items-center justify-center text-sky-600 hover:scale-110 transition">
                      <div className="size-11 rounded-full border border-sky-200 flex items-center justify-center">
                        <Network className="size-5 text-sky-600" />
                      </div>
                    </div>

                    {/* Vertical Stem Line pointing DOWN to Axis */}
                    <div className="w-0.5 h-7 bg-slate-800" />
                  </div>

                  {/* CENTER NODE ON AXIS */}
                  <div className="relative flex flex-col items-center my-auto">
                    <div className="size-4.5 rounded-full bg-sky-500 border-2 border-white shadow-md ring-4 ring-sky-500/20 z-20" />
                    <span className="text-xs font-extrabold text-sky-600 mt-2">
                      Milestone 3 • 2014
                    </span>
                  </div>

                  {/* Empty Spacer for Bottom */}
                  <div className="h-44 opacity-0 pointer-events-none" />
                </div>

                {/* -------------------- NODE 4 (BOTTOM) -------------------- */}
                <div className="flex flex-col justify-between h-full">
                  {/* Empty Spacer for Top */}
                  <div className="h-44 opacity-0 pointer-events-none" />

                  {/* CENTER NODE ON AXIS */}
                  <div className="relative flex flex-col items-center my-auto">
                    <span className="text-xs font-extrabold text-sky-600 mb-2">
                      Milestone 4 • 2026+
                    </span>
                    <div className="size-4.5 rounded-full bg-sky-500 border-2 border-white shadow-md ring-4 ring-sky-500/20 z-20" />
                  </div>

                  {/* BOTTOM SECTION (Vertical Stem + Icon + Card) */}
                  <div className="space-y-3 pt-4 flex flex-col items-center">
                    {/* Vertical Stem Line pointing UP to Axis */}
                    <div className="w-0.5 h-7 bg-slate-800" />

                    {/* Double-Ring Blue Circle Icon */}
                    <div className="size-14 rounded-full border-2 border-sky-500 bg-white shadow-md flex items-center justify-center text-sky-600 hover:scale-110 transition">
                      <div className="size-11 rounded-full border border-sky-200 flex items-center justify-center">
                        <Sparkles className="size-5 text-sky-600" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs space-y-1 w-full hover:shadow-md transition">
                      <h3 className="text-sm font-extrabold text-slate-900">
                        AI Telemetry &amp; Video NOCs
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        Leading the region in edge AI computer vision, LED command walls, touchless biometrics &amp; SLA support.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* MOBILE & TABLET VERTICAL ALTERNATING TIMELINE LAYOUT (< lg) */}
            <div className="lg:hidden space-y-7">
              {[
                {
                  milestone: "Milestone 1",
                  year: "1989",
                  title: "Foundation & Telephony",
                  desc: "Founded in Sangli, pioneering early EPABX telecom and electronic communication lines for agro-industries and banks.",
                  icon: Landmark,
                },
                {
                  milestone: "Milestone 2",
                  year: "2002",
                  title: "CCTV & Security Era",
                  desc: "Expanded into analog CCTV, co-operative bank currency chest alarm systems, and regional industrial perimeter protection.",
                  icon: Camera,
                },
                {
                  milestone: "Milestone 3",
                  year: "2014",
                  title: "Smart City & Optical Fiber",
                  desc: "Commissioned high-precision optical fiber splicing teams, Class-1 municipal traffic surveillance, and Kolhapur/Pune hubs.",
                  icon: Network,
                },
                {
                  milestone: "Milestone 4",
                  year: "2026+",
                  title: "AI Telemetry & Video NOCs",
                  desc: "Leading the region in edge AI computer vision, fine-pitch LED command walls, touchless biometrics, and 24×7 SLA support.",
                  icon: Sparkles,
                },
              ].map((item, idx, arr) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="relative flex gap-3.5 sm:gap-5 items-start">
                    {/* Connecting Vertical Axis Line for mobile */}
                    {idx < arr.length - 1 && (
                      <div className="absolute left-[24px] sm:left-[28px] top-[54px] bottom-[-28px] w-0.5 bg-slate-800" />
                    )}

                    {/* Icon Circle on left */}
                    <div className="flex flex-col items-center shrink-0 z-10">
                      <div className="size-12 sm:size-14 rounded-full border-2 border-sky-500 bg-white shadow-md flex items-center justify-center text-sky-600">
                        <div className="size-9 sm:size-10 rounded-full border border-sky-200 flex items-center justify-center">
                          <IconComp className="size-4 sm:size-4.5 text-sky-600" />
                        </div>
                      </div>
                    </div>

                    {/* Content Card on right */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex-1 shadow-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-sky-600">
                          {item.milestone}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-md">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
         3. IN-HOUSE TESTING LAB & ENGINEERING CREDO (IMAGE 3)
         ========================================================================= */}
      <section className="py-8 sm:py-12 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Box: In-House Testing & Staging Lab */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
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
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shrink-0">
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
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shrink-0">
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
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shrink-0">
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
          <div className="lg:col-span-6 bg-gradient-to-br from-[#06143D] via-[#081f57] to-[#040e2b] border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-black uppercase tracking-widest text-cyan-400">
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
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-slate-800">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  99.8%
                </div>
                <div className="text-xs font-semibold text-slate-400 mt-1">
                  Contract SLA Uptime
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  4-Hour
                </div>
                <div className="text-xs font-semibold text-slate-400 mt-1">
                  Emergency Van Dispatch
                </div>
              </div>
            </div>

            {/* Brand Sky/Cyan CTA Button */}
            <Link
              to="/contact"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition duration-300 flex items-center justify-center gap-2 group cursor-pointer"
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
