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
    <div className="bg-[#F7F9FC] text-[#17202A] font-sans antialiased min-h-screen py-6 sm:py-12">
      {/* =========================================================================
         1. HERO INTRO & CERTIFICATIONS
         ========================================================================= */}
      <section className="py-6 sm:py-12 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-6">
          <Link to="/" className="text-[#647786] hover:text-[#17202A]">Home</Link>
          <span className="text-[#647786]">/</span>
          <span className="text-[#0A76A8]">ABOUT US</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text & Badges */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="text-xs font-black uppercase tracking-widest text-[#0A76A8]">
              INSTITUTIONAL TRUST SINCE 1989
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#17202A] leading-[1.15] tracking-tight">
              35+ Years of Pioneering System Integration in Maharashtra
            </h1>

            <p className="text-[#647786] text-xs sm:text-base leading-relaxed font-normal">
              Established in 1989, JAY ELECTRONICS PRIVATE LIMITED (JEPL) has grown from a specialized electronics communications venture into one of Western India's foremost turnkey system integrators for mission-critical surveillance, high-speed optical networking, biometric access, and command center architectures.
            </p>

            {/* 3 Certification Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="bg-white border border-[#DCE7EE] shadow-sm rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-extrabold text-[#17202A]">
                <Award className="size-4 text-[#0A76A8]" />
                <span>ISO 9001:2015 Certified</span>
              </div>

              <div className="bg-white border border-[#DCE7EE] shadow-sm rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-extrabold text-[#17202A]">
                <FileText className="size-4 text-[#0A76A8]" />
                <span>Class-1 Govt. Contractor</span>
              </div>

              <div className="bg-white border border-[#DCE7EE] shadow-sm rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-extrabold text-[#17202A]">
                <ShieldCheck className="size-4 text-[#0A76A8]" />
                <span>GeM Registered Vendor</span>
              </div>
            </div>
          </div>

          {/* Right Image Box with Depot Label */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DCE7EE] group bg-[#041321]">
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
              <div className="absolute bottom-4 left-4 right-4 bg-[#041321]/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl text-white shadow-xl">
                <h3 className="text-sm font-extrabold text-white tracking-wide">
                  Sangli Central Testing Depot
                </h3>
                <p className="text-xs text-[#08A9DF] font-medium mt-0.5">
                  Pre-commissioning stress tests &amp; firmware audits before field dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         2. HISTORICAL TIMELINE SECTION
         ========================================================================= */}
      <section className="py-8 sm:py-12 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white border border-[#DCE7EE] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm space-y-12 relative overflow-hidden font-sans">
          <div className="text-center space-y-2 relative z-10 max-w-3xl mx-auto">
            <div className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#0A76A8]">
              HISTORICAL TIMELINE
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#17202A] tracking-tight">
              Milestones in Technology Excellence
            </h2>
          </div>

          <div className="relative z-10 pt-4 pb-4">
            <div className="hidden lg:block relative min-h-[460px]">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2.5px] bg-[#041321] z-0">
                <div className="size-3.5 rounded-full bg-[#041321] absolute -left-1.5 -top-[5.5px]" />
                <div className="size-3.5 rounded-full bg-[#041321] absolute -right-1.5 -top-[5.5px]" />
              </div>

              <div className="grid grid-cols-4 gap-6 relative z-10 h-full">
                {/* NODE 1 */}
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-3 pb-4 flex flex-col items-center">
                    <div className="bg-[#F7F9FC] border border-[#DCE7EE] rounded-2xl p-4 text-center shadow-xs space-y-1 w-full hover:shadow-md transition">
                      <h3 className="text-sm font-extrabold text-[#17202A]">
                        Foundation &amp; Telephony
                      </h3>
                      <p className="text-xs text-[#647786] leading-relaxed font-normal">
                        Founded in Sangli, pioneering early EPABX telecom and electronic lines for agro-industries and banks.
                      </p>
                    </div>
                    <div className="size-14 rounded-full border-2 border-[#0A76A8] bg-white shadow-md flex items-center justify-center text-[#0A76A8]">
                      <div className="size-11 rounded-full border border-[#EAF6FC] flex items-center justify-center">
                        <Landmark className="size-5 text-[#0A76A8]" />
                      </div>
                    </div>
                    <div className="w-0.5 h-7 bg-[#041321]" />
                  </div>
                  <div className="relative flex flex-col items-center my-auto">
                    <div className="size-4.5 rounded-full bg-[#08A9DF] border-2 border-white shadow-md z-20" />
                    <span className="text-xs font-extrabold text-[#0A76A8] mt-2">
                      Milestone 1 • 1989
                    </span>
                  </div>
                  <div className="h-44 opacity-0 pointer-events-none" />
                </div>

                {/* NODE 2 */}
                <div className="flex flex-col justify-between h-full">
                  <div className="h-44 opacity-0 pointer-events-none" />
                  <div className="relative flex flex-col items-center my-auto">
                    <span className="text-xs font-extrabold text-[#0A76A8] mb-2">
                      Milestone 2 • 2002
                    </span>
                    <div className="size-4.5 rounded-full bg-[#08A9DF] border-2 border-white shadow-md z-20" />
                  </div>
                  <div className="space-y-3 pt-4 flex flex-col items-center">
                    <div className="w-0.5 h-7 bg-[#041321]" />
                    <div className="size-14 rounded-full border-2 border-[#0A76A8] bg-white shadow-md flex items-center justify-center text-[#0A76A8]">
                      <div className="size-11 rounded-full border border-[#EAF6FC] flex items-center justify-center">
                        <Camera className="size-5 text-[#0A76A8]" />
                      </div>
                    </div>
                    <div className="bg-[#F7F9FC] border border-[#DCE7EE] rounded-2xl p-4 text-center shadow-xs space-y-1 w-full hover:shadow-md transition">
                      <h3 className="text-sm font-extrabold text-[#17202A]">
                        CCTV &amp; Security Era
                      </h3>
                      <p className="text-xs text-[#647786] leading-relaxed font-normal">
                        Expanded into analog CCTV, co-operative bank currency chest alarm systems, and industrial security.
                      </p>
                    </div>
                  </div>
                </div>

                {/* NODE 3 */}
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-3 pb-4 flex flex-col items-center">
                    <div className="bg-[#F7F9FC] border border-[#DCE7EE] rounded-2xl p-4 text-center shadow-xs space-y-1 w-full hover:shadow-md transition">
                      <h3 className="text-sm font-extrabold text-[#17202A]">
                        Smart City &amp; Optical Fiber
                      </h3>
                      <p className="text-xs text-[#647786] leading-relaxed font-normal">
                        Commissioned optical fiber splicing teams, Class-1 municipal traffic surveillance, and Pune hubs.
                      </p>
                    </div>
                    <div className="size-14 rounded-full border-2 border-[#0A76A8] bg-white shadow-md flex items-center justify-center text-[#0A76A8]">
                      <div className="size-11 rounded-full border border-[#EAF6FC] flex items-center justify-center">
                        <Network className="size-5 text-[#0A76A8]" />
                      </div>
                    </div>
                    <div className="w-0.5 h-7 bg-[#041321]" />
                  </div>
                  <div className="relative flex flex-col items-center my-auto">
                    <div className="size-4.5 rounded-full bg-[#08A9DF] border-2 border-white shadow-md z-20" />
                    <span className="text-xs font-extrabold text-[#0A76A8] mt-2">
                      Milestone 3 • 2014
                    </span>
                  </div>
                  <div className="h-44 opacity-0 pointer-events-none" />
                </div>

                {/* NODE 4 */}
                <div className="flex flex-col justify-between h-full">
                  <div className="h-44 opacity-0 pointer-events-none" />
                  <div className="relative flex flex-col items-center my-auto">
                    <span className="text-xs font-extrabold text-[#0A76A8] mb-2">
                      Milestone 4 • 2026+
                    </span>
                    <div className="size-4.5 rounded-full bg-[#08A9DF] border-2 border-white shadow-md z-20" />
                  </div>
                  <div className="space-y-3 pt-4 flex flex-col items-center">
                    <div className="w-0.5 h-7 bg-[#041321]" />
                    <div className="size-14 rounded-full border-2 border-[#0A76A8] bg-white shadow-md flex items-center justify-center text-[#0A76A8]">
                      <div className="size-11 rounded-full border border-[#EAF6FC] flex items-center justify-center">
                        <Sparkles className="size-5 text-[#0A76A8]" />
                      </div>
                    </div>
                    <div className="bg-[#F7F9FC] border border-[#DCE7EE] rounded-2xl p-4 text-center shadow-xs space-y-1 w-full hover:shadow-md transition">
                      <h3 className="text-sm font-extrabold text-[#17202A]">
                        AI Telemetry &amp; Video NOCs
                      </h3>
                      <p className="text-xs text-[#647786] leading-relaxed font-normal">
                        Leading the region in edge AI computer vision, LED command walls, touchless biometrics &amp; SLA support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="lg:hidden space-y-6">
              {[
                { milestone: "Milestone 1", year: "1989", title: "Foundation & Telephony", desc: "Founded in Sangli, pioneering early EPABX telecom and electronic communication lines.", icon: Landmark },
                { milestone: "Milestone 2", year: "2002", title: "CCTV & Security Era", desc: "Expanded into analog CCTV, bank currency chest alarms, and industrial perimeter protection.", icon: Camera },
                { milestone: "Milestone 3", year: "2014", title: "Smart City & Optical Fiber", desc: "Commissioned high-precision optical fiber splicing teams and municipal surveillance.", icon: Network },
                { milestone: "Milestone 4", year: "2026+", title: "AI Telemetry & Video NOCs", desc: "Leading edge AI computer vision, fine-pitch LED command walls, and 24x7 SLA support.", icon: Sparkles },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="bg-[#F7F9FC] border border-[#DCE7EE] rounded-2xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#0A76A8]">{item.milestone} • {item.year}</span>
                      <div className="size-8 rounded-full bg-[#EAF6FC] flex items-center justify-center text-[#0A76A8]">
                        <IconComp className="size-4" />
                      </div>
                    </div>
                    <h3 className="text-sm font-extrabold text-[#17202A]">{item.title}</h3>
                    <p className="text-xs text-[#647786]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         3. IN-HOUSE TESTING LAB & ENGINEERING CREDO
         ========================================================================= */}
      <section className="py-8 sm:py-12 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Box: In-House Testing */}
          <div className="lg:col-span-6 bg-white border border-[#DCE7EE] rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black text-[#17202A] tracking-tight">
                In-House Testing &amp; Staging Lab
              </h2>
              <p className="text-xs sm:text-sm text-[#647786] leading-relaxed font-normal">
                Unlike brokers or re-sellers, JEPL owns and maintains certified diagnostic instruments to ensure zero post-installation defects:
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="bg-[#F7F9FC] border border-[#DCE7EE] rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                  <Wrench className="size-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#17202A]">
                    Fluke DSX-8000 Cable Certifiers:
                  </h3>
                  <p className="text-xs text-[#647786] mt-0.5">
                    100% Channel certification for Cat6A up to 2000 MHz with PDF pass reports.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F9FC] border border-[#DCE7EE] rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                  <Wrench className="size-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#17202A]">
                    Fujikura 90S+ Core Alignment Splicers:
                  </h3>
                  <p className="text-xs text-[#647786] mt-0.5">
                    Sub-0.02dB optical splice loss for mission-critical industrial foundries.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F9FC] border border-[#DCE7EE] rounded-2xl p-4 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                  <Wrench className="size-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#17202A]">
                    OTDR Optical Loss Analyzers:
                  </h3>
                  <p className="text-xs text-[#647786] mt-0.5">
                    Bidirectional wavelength reflection tracing for 50+ km campus loops.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Box: Engineering Credo (Dark Navy Card) */}
          <div className="lg:col-span-6 bg-[#041321] border border-slate-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-black uppercase tracking-widest text-[#08A9DF]">
                ENGINEERING CREDO
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                "Zero Tolerance for Downtime"
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When a hospital ICU access door locks up, a bank strongroom alarm fails, or a smart city junction camera goes blind, seconds count. That is why JEPL refuses shortcuts in cabling gauges, surge suppressors, or OEM licensing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-slate-700">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  99.8%
                </div>
                <div className="text-xs font-semibold text-[#08A9DF] mt-1">
                  Contract SLA Uptime
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  4-Hour
                </div>
                <div className="text-xs font-semibold text-[#08A9DF] mt-1">
                  Emergency Van Dispatch
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="w-full py-3.5 rounded-xl bg-[#0A76A8] hover:bg-[#0896d7] text-white font-extrabold text-sm tracking-wide shadow-md transition duration-300 flex items-center justify-center gap-2 group cursor-pointer"
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
