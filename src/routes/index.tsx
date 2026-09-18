import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  Cable,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileCheck,
  FileText,
  Handshake,
  Headphones,
  Instagram,
  Landmark,
  Linkedin,
  MapPin,
  Network,
  Phone,
  Play,
  Quote,
  Settings,
  Shield,
  ShieldCheck,
  Tv,
  Twitter,
  User,
  UserCheck,
  Users,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jay Electronics Pvt Ltd | Security & Technology Solutions" },
      {
        name: "description",
        content:
          "Jay Electronics Private Limited provides IP CCTV, LAN/WAN Networking, EPABX, Audio Visual and security solutions since 1989.",
      },
      { property: "og:title", content: "Jay Electronics Pvt Ltd" },
      {
        property: "og:description",
        content: "Pioneering Security & Technology Since 1989",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-white font-sans text-[#0F172A] min-h-screen">
      <HeroSection />
      <ImpactSection />
      <WelcomeSection />
      <FounderSection />
      <WhatWeCaterSection />
      <BrandPartnersSection />
      <ExpertTeamSection />
    </div>
  );
}

/* =========================================================================
   1. HERO SECTION (MATCHING EXACT COLOR & LAYOUT FROM REFERENCE IMAGE)
   ========================================================================= */
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/inauguration-slide.png",
      title: "Police Command & Control Center Inauguration",
    },
    {
      image: "/hero-slide-1.png",
      title: "IP CCTV & Security Command Center",
    },
    {
      image: "/hero-slide-2.png",
      title: "Enterprise High-Speed Data Servers",
    },
    {
      image: "/hero-slide-3.jpeg",
      title: "Smart City Municipal NOC Matrix",
    },
    {
      image: "/hero-slide-4.png",
      title: "Futuristic Electronics & Fiber Networks",
    },
  ];

  const totalSlides = heroSlides.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="relative w-full h-[400px] sm:h-[520px] lg:h-[620px] bg-[#041321] overflow-hidden">
      {/* PURE FULL SCREEN SLIDE IMAGES */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none ${
            currentSlide === idx ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/hero-slide-1.png";
            }}
          />
        </div>
      ))}

      {/* LEFT NAVIGATION ARROW */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 size-11 sm:size-13 rounded-full bg-[#041321]/75 hover:bg-[#DC2626] text-white flex items-center justify-center border border-white/30 shadow-2xl transition backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="size-6 text-white" />
      </button>

      {/* RIGHT NAVIGATION ARROW */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 size-11 sm:size-13 rounded-full bg-[#041321]/75 hover:bg-[#DC2626] text-white flex items-center justify-center border border-white/30 shadow-2xl transition backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
      >
        <ChevronRight className="size-6 text-white" />
      </button>

      {/* SLIDER DOTS & INDICATORS AT BOTTOM */}
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2.5 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx
                ? "w-9 bg-[#DC2626] shadow-md shadow-rose-600/50"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}



/* =========================================================================
   1.C OUR IMPACT SECTION (EXACT MATCH FOR SECOND USER IMAGE)
   ========================================================================= */
function ImpactSection() {
  const stats = [
    {
      icon: UserCheck,
      watermark: Award,
      number: "35+",
      numberColor: "text-[#0F172A]",
      label: "YEARS EXPERIENCE",
      desc: "A legacy of innovation and trust since 1989.",
    },
    {
      icon: FileText,
      watermark: FileCheck,
      number: "1,000+",
      numberColor: "text-[#DC2626]", // Highlighted in red in reference design
      label: "PROJECTS COMPLETED",
      desc: "Delivering reliable solutions across industries.",
    },
    {
      icon: Users,
      watermark: Users,
      number: "500+",
      numberColor: "text-[#0F172A]",
      label: "ACTIVE ENTERPRISE CLIENTS",
      desc: "Trusted by leading organizations nationwide.",
    },
    {
      icon: Landmark,
      watermark: Landmark,
      number: "50+",
      numberColor: "text-[#0F172A]",
      label: "GOVERNMENT PROJECTS",
      desc: "Strengthening public infrastructure and security.",
    },
    {
      icon: Handshake,
      watermark: Handshake,
      number: "100+",
      numberColor: "text-[#0F172A]",
      label: "CORPORATE CUSTOMERS",
      desc: "Partnering for a smarter, safer future.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-rose-50/40 via-white to-rose-50/30 relative overflow-hidden border-b border-rose-100/60">
      {/* Subtle Background Pattern Dots/Lines */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-[#DC2626] 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, white, transparent)",
        }}
      />

      {/* Decorative side accent graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-rose-300" />
          <span className="px-4 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-[#DC2626] text-xs font-bold tracking-wider uppercase">
            OUR IMPACT
          </span>
          <div className="w-8 h-[2px] bg-rose-300" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
          Engineering <span className="text-[#DC2626]">Trust</span> Through Numbers
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-slate-500 font-medium max-w-2xl mx-auto">
          Decades of expertise. Thousands of successful deployments. A stronger, safer tomorrow.
        </p>

        {/* 5 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            const WatermarkIcon = stat.watermark;
            return (
              <div
                key={idx}
                className="group relative bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 text-left shadow-sm hover:shadow-xl hover:border-rose-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Background Watermark Icon */}
                <WatermarkIcon className="absolute -top-3 -right-3 size-24 text-rose-500/5 group-hover:text-rose-500/10 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Badge Icon */}
                  <div className="size-11 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-[#DC2626] mb-5 shadow-2xs group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                    <IconComp className="size-5.5" />
                  </div>

                  {/* Stat Number */}
                  <div className={`text-3xl sm:text-4xl font-black ${stat.numberColor} tracking-tight`}>
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-[11px] font-extrabold text-slate-700 tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>

                  {/* Red Accent Underline */}
                  <div className="w-8 h-1 bg-[#DC2626] rounded-full my-3 group-hover:w-14 transition-all duration-300" />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-normal mt-1">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2. WELCOME / ABOUT SECTION (MATCHING REFERENCE LAYOUT & HIGHLIGHT STACK)
   ========================================================================= */
function WelcomeSection() {
  const companyFeatures = [
    {
      icon: Award,
      title: "35+ Years Legacy",
      desc: "Founded in 1989 with unmatched institutional reliability.",
    },
    {
      icon: Settings,
      title: "Turnkey Execution",
      desc: "End-to-end scope from BOQ survey to long-term lifecycle AMC.",
    },
    {
      icon: Users,
      title: "In-House Engineers",
      desc: "Certified technicians for optical fiber, biometrics, and switches.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-rose-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE: EXACT CONTENT FROM 1ST IMAGE */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Red Accent Line + Eyebrow */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-1 bg-[#DC2626] rounded-full" />
              <span className="text-xs font-extrabold text-[#DC2626] tracking-wider uppercase">
                ABOUT JAY ELECTRONICS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
              Who We Are
            </h2>

            {/* Paragraph 1 */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              For more than three decades, JAY ELECTRONICS PRIVATE LIMITED has been delivering
              innovative technology solutions that help businesses, industries, educational
              institutions, hospitals, government organizations and residential customers improve
              security, communication and operational efficiency.
            </p>

            {/* Paragraph 2 */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              With thousands of successful installations and an experienced engineering team, we
              provide complete turnkey solutions—from consultation and design to installation,
              commissioning, training and annual maintenance contracts (AMC). We bridge complex
              hardware ecosystems into singular, intuitive control workflows.
            </p>

            {/* 3 Pillar Cards (Exact from 1st Image) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {companyFeatures.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-2xl p-4.5 space-y-2.5 shadow-xs hover:border-[#DC2626] hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="size-10 rounded-xl bg-rose-50 text-[#DC2626] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconComp className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                        {feat.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action CTA Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#DC2626] hover:text-[#B91C1C] transition-colors group cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: ELEGANT HQ BUILDING IMAGE FRAME */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group w-full max-w-lg">
              <img
                src="/about-building.png"
                alt="Jay Electronics Corporate Headquarters"
                className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/60 flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0F172A]">
                  CORPORATE HEADQUARTERS
                </span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/90 backdrop-blur-md p-4 rounded-2xl text-white shadow-xl border border-slate-700/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-white">Jay Electronics Pvt Ltd</span>
                  <span className="text-[10px] font-bold text-[#08A9DF] bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-800">
                    EST. 1989
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <MapPin className="size-3.5 text-[#DC2626]" />
                  <span>College Corner, Sangli, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. MEET OUR OWNER SECTION
   ========================================================================= */
function FounderSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/90 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0F7FE] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DCE7EE] shadow-xs">
                <User className="size-3.5 text-[#0A76A8]" />
                <span className="text-[11px] font-black text-[#0A76A8] tracking-widest uppercase">
                  FOUNDER &amp; MANAGING DIRECTOR
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                Meet Our Owner - <span className="text-[#0A76A8]">Mr. Jayesh Patil</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                With a vision to make advanced security and communication technology accessible to
                everyone, Mr. Jayesh Patil established JAY Electronics with a strong commitment to
                quality, innovation and customer satisfaction. Over three decades of visionary
                leadership has positioned Jay Electronics as a trusted partner for government
                institutions, industrial MIDCs, and enterprise networks.
              </p>

              {/* Dark Quote Container */}
              <div className="bg-[#0F172A] text-white p-5 sm:p-6 rounded-2xl shadow-xl space-y-3 border border-slate-800 relative">
                <Quote className="size-6 text-[#08A9DF] shrink-0 opacity-80" />
                <p className="text-sm italic font-medium leading-relaxed text-slate-200">
                  "Our goal is to create safer, smarter and more connected spaces through reliable
                  technology solutions."
                </p>
                <div className="text-right text-xs font-bold text-[#08A9DF]">
                  — Mr. Jayesh Patil (Managing Director)
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group w-full max-w-md">
                <img
                  src="/about-owner.png"
                  alt="Mr. Jayesh Patil - Founder & Managing Director"
                  className="w-full h-[320px] sm:h-[380px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/90 backdrop-blur-md p-3.5 rounded-2xl text-white shadow-lg border border-slate-700/80">
                  <span className="text-xs font-black text-white block">Mr. Jayesh Patil</span>
                  <span className="text-[10px] font-bold text-[#08A9DF]">
                    Founder &amp; Managing Director
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. WHAT WE CATER SECTION (OUR INTEGRATED ELECTRONIC SOLUTIONS FULL GRID)
   ========================================================================= */
function WhatWeCaterSection() {
  const solutionsList = [
    {
      title: "IP CCTV / Analog CCTV",
      desc: "AI-enabled IP surveillance, thermal detection, and central command NVR matrices.",
      icon: Camera,
      tag: "HD SURVEILLANCE",
    },
    {
      title: "LAN/WAN Networking",
      desc: "Enterprise Layer-3 PoE+ switching, core routing, and Wi-Fi 6 wireless meshing.",
      icon: Network,
      tag: "HIGH SPEED GIGABIT",
    },
    {
      title: "EPABX / IP-PBX System",
      desc: "Scalable IP-PBX communication, SIP trunking, IVR, and intercom extension grids.",
      icon: Phone,
      tag: "SMART VOICE & DATA",
    },
    {
      title: "Audio / Video Solutions",
      desc: "4K interactive touch panels, Dante IP audio, ceiling beamforming mics & AV setups.",
      icon: Video,
      tag: "PROFESSIONAL AV",
    },
    {
      title: "Structured Cabling",
      desc: "Single-mode OS2 & OM3/OM4 fiber optic backbones, HDPE ducting, and LIU patch bays.",
      icon: Cable,
      tag: "FIBER & COPPER LOOP",
    },
    {
      title: "LED Display Systems",
      desc: "Fine-pitch P1.25/P1.8 indoor video walls, 24/7 NOC matrices, and outdoor billboards.",
      icon: Tv,
      tag: "DIGITAL LED DISPLAY",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-slate-200/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF6FC] border border-[#DCE7EE] shadow-xs">
            <Shield className="size-4 text-[#0A76A8]" />
            <span className="text-xs font-black text-[#0A76A8] tracking-widest uppercase">
              WHAT WE CATER
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
            Our Integrated <span className="text-[#0A76A8]">Electronic Solutions</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-medium">
            Turnkey enterprise architectures engineered for commercial, industrial, municipal, and
            healthcare facilities.
          </p>
        </div>

        {/* Full Width 6 Solutions Grid (3-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsList.map((sol, idx) => {
            const IconComp = sol.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#0A76A8] hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-2xl bg-[#EAF6FC] text-[#0A76A8] flex items-center justify-center group-hover:bg-[#0A76A8] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComp className="size-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {sol.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-[#0F172A] leading-snug group-hover:text-[#0A76A8] transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-normal">
                      {sol.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-[#0A76A8]">
                  <span>Learn More</span>
                  <Link
                    to="/services"
                    className="size-8 rounded-full bg-[#EAF6FC] text-[#0A76A8] group-hover:bg-[#0A76A8] group-hover:text-white flex items-center justify-center transition-colors shadow-xs"
                  >
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. BRAND PARTNERS SECTION (Framed Brands We Work With)
   ========================================================================= */
function BrandPartnersSection() {
  const brandList = [
    { name: "HIKVISION", color: "text-rose-600" },
    { name: "CP PLUS", color: "text-[#DC2626]" },
    { name: "DAHUA", color: "text-blue-700" },
    { name: "BOSCH", color: "text-slate-900" },
    { name: "Honeywell", color: "text-rose-700" },
    { name: "MATRIX", color: "text-cyan-700" },
    { name: "CISCO", color: "text-blue-600" },
    { name: "LG", color: "text-rose-600" },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF6FC] border border-[#DCE7EE]">
            <Award className="size-3.5 text-[#0A76A8]" />
            <span className="text-[11px] font-black text-[#0A76A8] tracking-widest uppercase">
              AUTHORIZED DEALERS &amp; BRAND PARTNERS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
            Framed Brands We Work With
          </h2>
        </div>

        {/* Grid of Clean Framed Brand Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {brandList.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center justify-center shadow-xs hover:border-[#DC2626] hover:shadow-md transition cursor-pointer h-20"
            >
              <span className={`font-black text-sm tracking-tight ${brand.color}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Active Red Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="size-2.5 rounded-full bg-[#DC2626]" />
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="size-2.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   5. OUR EXPERT TEAM MEMBER SECTION (BLUE CITYSCAPE GRADIENT BACKGROUND)
   ========================================================================= */
function ExpertTeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Er. Amit Patil",
      role: "Senior Security Director",
      image: "/team-2.png",
    },
    {
      id: 2,
      name: "Er. Sneha Kulkarni",
      role: "Client Relationship Lead",
      image: "/team-5.png",
    },
    {
      id: 3,
      name: "Er. Jayant Wankar",
      role: "Founder & Managing Director",
      image: "/about-owner.png",
    },
    {
      id: 4,
      name: "Er. Payal Wankar",
      role: "Director & System Architect",
      image: "/team-3.png",
    },
    {
      id: 5,
      name: "Er. Rohan Wankar",
      role: "Technical Operations Lead",
      image: "/team-4.png",
    },
  ];

  return (
    <section className="bg-white border-t border-slate-200/90">
      {/* 1. TITLE BLOCK OUTSIDE THE BLUE CONTAINER (ON CLEAN WHITE BACKGROUND) */}
      <div className="py-10 sm:py-12 text-center space-y-3 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#DC2626] shadow-xs">
          <Users className="size-3.5 text-[#DC2626]" />
          <span className="text-[11px] font-black tracking-widest uppercase">OUR TEAM</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
          Our Expert Team Member
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
          Professionals Behind a Safer World
        </p>
      </div>

      {/* 2. BLUE CITYSCAPE BANNER CONTAINER WITH TEAM CARDS */}
      <div className="py-10 sm:py-14 bg-gradient-to-r from-[#05162A] via-[#093259] to-[#124B94] text-white relative overflow-hidden shadow-inner">
        {/* Background High-Tech City Overlay */}
        <img
          src="/project-smartcity.png"
          alt="Background Cityscape"
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay pointer-events-none"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 w-full max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#0A1628]/85 border border-slate-700/80 hover:border-[#DC2626] rounded-2xl p-4 text-center space-y-3 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group"
              >
                <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/about-owner.png";
                    }}
                  />
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-sm sm:text-base font-black text-white truncate">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-extrabold text-[#DC2626] truncate">
                    {member.role}
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-2.5 pt-0.5">
                  <a
                    href="#"
                    className="size-7 rounded-full bg-slate-800/80 text-slate-300 flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition shadow-xs"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="size-3.5" />
                  </a>
                  <a
                    href="#"
                    className="size-7 rounded-full bg-slate-800/80 text-slate-300 flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition shadow-xs"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="size-3.5" />
                  </a>
                  <a
                    href="#"
                    className="size-7 rounded-full bg-slate-800/80 text-slate-300 flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition shadow-xs"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
