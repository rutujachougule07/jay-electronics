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
  Lightbulb,
  Linkedin,
  Lock,
  MapPin,
  Network,
  Phone,
  Play,
  Quote,
  Settings,
  Shield,
  ShieldCheck,
  TrendingUp,
  Tv,
  Twitter,
  User,
  UserCheck,
  Users,
  Video,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
   1.C OUR IMPACT SECTION (REDUCED HEIGHT & FULLY ANIMATED WITH COUNTER TICKERS)
   ========================================================================= */
function AnimatedStatCounter({ targetValue, suffix = "+" }: { targetValue: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1600; // ms
    const steps = 40;
    const stepTime = duration / steps;
    const increment = targetValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <span ref={domRef} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function ImpactSection() {
  const stats = [
    {
      icon: UserCheck,
      watermark: Award,
      targetValue: 35,
      suffix: "+",
      numberColor: "text-[#0F172A]",
      label: "YEARS EXPERIENCE",
      desc: "A legacy of innovation and trust since 1989.",
    },
    {
      icon: FileText,
      watermark: FileCheck,
      targetValue: 1000,
      suffix: "+",
      numberColor: "text-[#DC2626]",
      label: "PROJECTS COMPLETED",
      desc: "Delivering reliable solutions across industries.",
    },
    {
      icon: Users,
      watermark: Users,
      targetValue: 500,
      suffix: "+",
      numberColor: "text-[#0F172A]",
      label: "ACTIVE ENTERPRISE CLIENTS",
      desc: "Trusted by leading organizations nationwide.",
    },
    {
      icon: Landmark,
      watermark: Landmark,
      targetValue: 50,
      suffix: "+",
      numberColor: "text-[#0F172A]",
      label: "GOVERNMENT PROJECTS",
      desc: "Strengthening public infrastructure and security.",
    },
    {
      icon: Handshake,
      watermark: Handshake,
      targetValue: 100,
      suffix: "+",
      numberColor: "text-[#0F172A]",
      label: "CORPORATE CUSTOMERS",
      desc: "Partnering for a smarter, safer future.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-rose-50/40 via-white to-rose-50/30 relative overflow-hidden border-b border-rose-100/60">
      {/* Decorative Background Pulsing Glow Blobs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center justify-center gap-2.5 mb-2.5">
          <div className="w-6 h-[2px] bg-rose-300" />
          <span className="px-3.5 py-0.5 rounded-full bg-rose-100/90 border border-rose-200 text-[#DC2626] text-[11px] font-extrabold tracking-wider uppercase shadow-2xs hover:scale-105 transition-transform">
            OUR IMPACT
          </span>
          <div className="w-6 h-[2px] bg-rose-300" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
          Engineering <span className="text-[#DC2626]">Trust</span> Through Numbers
        </h2>

        {/* Subtitle */}
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
          Decades of expertise. Thousands of successful deployments. A stronger, safer tomorrow.
        </p>

        {/* 5 Animated Cards Grid */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            const WatermarkIcon = stat.watermark;
            return (
              <div
                key={idx}
                className="group relative bg-white/95 backdrop-blur-sm border border-slate-200/90 hover:border-rose-400 rounded-2xl p-4.5 text-left shadow-xs hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Animated Background Watermark Icon */}
                <WatermarkIcon className="absolute -top-3 -right-3 size-24 text-rose-500/5 group-hover:text-rose-500/15 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 pointer-events-none" />

                {/* Animated Top Glow Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:via-rose-600 group-hover:to-rose-400 transition-all duration-300" />

                <div>
                  {/* Top Badge Icon */}
                  <div className="size-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-[#DC2626] mb-3.5 shadow-2xs group-hover:bg-[#DC2626] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComp className="size-5" />
                  </div>

                  {/* Animated Stat Number Ticker */}
                  <div className={`text-2xl sm:text-3xl font-black ${stat.numberColor} tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left`}>
                    <AnimatedStatCounter targetValue={stat.targetValue} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-[10px] font-extrabold text-slate-700 tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>

                  {/* Red Accent Underline */}
                  <div className="w-7 h-1 bg-[#DC2626] rounded-full my-2.5 group-hover:w-14 transition-all duration-300" />
                </div>

                {/* Description */}
                <p className="text-[11px] text-slate-500 leading-snug font-normal mt-0.5">
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
   2. WELCOME / ABOUT SECTION (EXACT PIXEL-PERFECT MATCH FOR USER REFERENCE IMAGE 1)
   ========================================================================= */
/* =========================================================================
   2. WELCOME / ABOUT SECTION (EXACT PIXEL-PERFECT MATCH FOR USER REFERENCE MOCKUP)
   ========================================================================= */
function WelcomeSection() {
  const pillarCards = [
    {
      icon: Award,
      title: "35+",
      subtitle: "Years Legacy",
      desc: "Founded in 1989 with unmatched reliability.",
    },
    {
      icon: Users,
      title: "5000+",
      subtitle: "Happy Clients",
      desc: "Trusted across government & industries.",
    },
    {
      icon: Settings,
      title: "Turnkey",
      subtitle: "Execution",
      desc: "End-to-end from BOQ to AMC.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted",
      subtitle: "Technology Partner",
      desc: "Building safer & smarter environments.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Red Sweep Wave Curve in Background */}
      <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-20 hidden lg:block">
        <svg className="w-full h-full text-[#DC2626]" viewBox="0 0 500 800" fill="none" preserveAspectRatio="none">
          <path
            d="M 150 0 C 350 200, 50 500, 300 800 L 500 800 L 500 0 Z"
            fill="url(#red-grad)"
          />
          <defs>
            <linearGradient id="red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#991B1B" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: TEXT, 4 CARDS, CTA BUTTON */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {/* Red Accent Line + Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-[3px] bg-[#DC2626] rounded-full" />
              <span className="text-xs font-black text-[#DC2626] tracking-wider uppercase">
                ABOUT JAY ELECTRONICS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-tight">
              Who We <span className="text-[#DC2626]">Are</span>
            </h2>

            {/* Subtitle Tagline */}
            <div className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase">
              INNOVATION &nbsp;|&nbsp; SECURITY &nbsp;|&nbsp; A SMARTER TOMORROW
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              For more than three decades, JAY ELECTRONICS PRIVATE LIMITED has been delivering
              innovative technology solutions that help businesses, industries, educational
              institutions, hospitals, government organizations and residential customers improve
              security, communication and operational efficiency.
            </p>

            {/* 4 Cards Grid (Single Row on SM+) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {pillarCards.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 rounded-2xl p-3 space-y-1.5 shadow-sm hover:border-[#DC2626]/40 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div className="size-9 rounded-full bg-[#FFECEC] text-[#DC2626] flex items-center justify-center shrink-0 group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                      <IconComp className="size-4.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#0F172A] leading-tight">
                        {feat.title}
                      </div>
                      <div className="text-[11px] font-bold text-[#0F172A] leading-tight">
                        {feat.subtitle}
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1 leading-tight">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Red Pill CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#DC2626] hover:bg-[#b91c1c] px-6 py-2.5 text-xs font-black text-white transition shadow-md shadow-rose-500/20 hover:scale-[1.02] active:scale-95"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: HQ BUILDING WITH SWEEPING RED CURVE ACCENT */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
            {/* Cursive Handwriting Annotation Label floating top left of building */}
            <div className="absolute -top-4 left-0 sm:-left-6 z-30 hidden sm:block pointer-events-none">
              <div className="text-[#0F172A] text-2xl font-bold font-cursive -rotate-6 tracking-wide drop-shadow-xs max-w-[170px] leading-tight text-center">
                Technology for a Safer Tomorrow
              </div>
              <svg className="w-28 h-8 text-[#DC2626] mt-0.5 ml-8" viewBox="0 0 100 30" fill="none">
                <path d="M10 5 Q 50 25 90 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M82 7 L 90 12 L 84 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Main Building Frame */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group w-full max-w-xl">
              {/* Left Sweeping Red Wave Ribbon Effect */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#DC2626]/80 via-[#DC2626]/30 to-transparent z-10 pointer-events-none" />

              <img
                src="/about-building.png"
                alt="Jay Electronics Corporate Headquarters"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />

              {/* Floating Top Right Glass Badge */}
              <div className="absolute top-4 right-4 bg-[#0F172A]/85 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2.5 max-w-[220px] z-20">
                <div className="size-7 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <MapPin className="size-3.5 text-rose-400" />
                </div>
                <div className="text-white">
                  <div className="text-[10px] font-black uppercase leading-tight">
                    Corporate Headquarters
                  </div>
                  <div className="text-[9px] text-slate-300 font-medium leading-tight">
                    College Corner, Sangli, Maharashtra
                  </div>
                </div>
              </div>

              {/* Floating Bottom Pill Bar with 4 Service Items */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B132B]/95 backdrop-blur-md p-3 rounded-2xl text-white shadow-2xl border border-white/10 z-20">
                <div className="grid grid-cols-4 gap-2 text-center text-slate-200">
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="size-4 text-rose-400" />
                    <span className="text-[9px] font-bold">Security Systems</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Network className="size-4 text-sky-400" />
                    <span className="text-[9px] font-bold">Networking</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Video className="size-4 text-amber-400" />
                    <span className="text-[9px] font-bold">Surveillance</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Lock className="size-4 text-emerald-400" />
                    <span className="text-[9px] font-bold">Access Control</span>
                  </div>
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
   3. MEET OUR OWNER SECTION (EXACT PIXEL-PERFECT MATCH FOR USER REFERENCE MOCKUP)
   ========================================================================= */
function FounderSection() {
  const founderPillars = [
    {
      icon: Lightbulb,
      title: "Visionary",
      subtitle: "Leadership",
    },
    {
      icon: Users,
      title: "Customer",
      subtitle: "Centric Approach",
    },
    {
      icon: TrendingUp,
      title: "Sustainable",
      subtitle: "Growth",
    },
    {
      icon: ShieldCheck,
      title: "Committed",
      subtitle: "to a Safer Society",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#EAF3FE] relative overflow-hidden border-t border-slate-200/80">
      {/* Decorative Blue Sweep Wave Curve in Background */}
      <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-20 hidden lg:block">
        <svg className="w-full h-full text-[#0284C7]" viewBox="0 0 500 800" fill="none" preserveAspectRatio="none">
          <path
            d="M 350 0 C 150 200, 450 500, 200 800 L 0 800 L 0 0 Z"
            fill="url(#blue-grad)"
          />
          <defs>
            <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0369A1" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: OWNER PHOTO WITH GLASS BADGES & OVERLAY TEXT */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start items-center">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group w-full max-w-lg">
              {/* Sweeping Blue Curve Frame Accent */}
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0284C7]/80 via-[#0284C7]/30 to-transparent z-10 pointer-events-none" />

              <img
                src="/about-owner.png"
                alt="Mr. Jayesh Patil - Founder & Managing Director"
                className="w-full h-[380px] sm:h-[440px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />

              {/* Text Overlay on Glass/Wall behind photo */}
              <div className="absolute top-6 left-6 right-6 pointer-events-none z-20">
                <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/70 text-center shadow-xs">
                  <div className="font-extrabold text-xs sm:text-sm text-slate-800 tracking-wider uppercase leading-snug">
                    LEADERSHIP BUILDS BRIGHTER TOMORROW
                  </div>
                </div>
              </div>

              {/* Floating Bottom Left Owner Info Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B1528]/95 backdrop-blur-md p-3.5 rounded-2xl text-white shadow-2xl border border-slate-700/80 flex items-center gap-3 z-20">
                <div className="size-9 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center shrink-0">
                  <User className="size-4 text-[#38BDF8]" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">Mr. Jayesh Patil</div>
                  <div className="text-[10px] font-bold text-[#38BDF8]">
                    Founder &amp; Managing Director
                  </div>
                  <div className="text-[9px] text-slate-300 font-semibold flex items-center gap-1.5 mt-0.5">
                    <span>JAY Electronics Pvt Ltd</span>
                    <span className="w-5 h-[2px] bg-[#DC2626] rounded-full inline-block" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: OWNER DETAILS, 4 CARDS, CTA BUTTON & CURSIVE SCRIPT */}
          <div className="lg:col-span-6 space-y-4 text-left relative">
            {/* Blue Accent Line + Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-[3px] bg-[#0284C7] rounded-full" />
              <span className="text-xs font-black text-[#0284C7] tracking-wider uppercase">
                FOUNDER &amp; MANAGING DIRECTOR
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-tight">
              Meet Our Owner – <span className="text-[#0284C7]">Mr. Jayesh Patil</span>
            </h2>

            {/* Subtitle Tagline */}
            <div className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase">
              VISION &nbsp;|&nbsp; LEADERSHIP &nbsp;|&nbsp; INNOVATION &nbsp;|&nbsp; PEOPLE
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              With a vision to make advanced security and communication technology accessible to
              everyone, Mr. Jayesh Patil established JAY Electronics with a strong commitment to
              quality, innovation and customer satisfaction.
            </p>

            {/* 4 Founder Cards Grid in 1 Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {founderPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 rounded-2xl p-3 text-center space-y-1.5 shadow-sm hover:border-[#0284C7]/40 hover:shadow-md transition-all duration-300 group flex flex-col items-center justify-center min-h-[105px]"
                  >
                    <div className="size-9 rounded-full bg-[#FFECEC] text-[#DC2626] flex items-center justify-center shrink-0 group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-300">
                      <IconComp className="size-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold text-[#0F172A] leading-tight">
                        {pillar.title}
                      </div>
                      <div className="text-[10px] font-bold text-slate-500 leading-tight">
                        {pillar.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button & Cursive Script Overlay */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#0284C7] hover:bg-[#0369A1] px-6 py-2.5 text-xs font-black text-white transition shadow-md shadow-sky-500/20 hover:scale-[1.02] active:scale-95 shrink-0"
              >
                <span>Know More About Our Owner</span>
                <ArrowRight className="size-3.5" />
              </Link>

              {/* Cursive Handwriting Script on Bottom Right */}
              <div className="hidden sm:block text-right pointer-events-none">
                <div className="text-sky-900 text-2xl font-bold font-cursive -rotate-6 tracking-wide drop-shadow-xs">
                  People Technology Progress
                </div>
                <svg className="w-36 h-3 text-[#0284C7] -mt-1 ml-auto" viewBox="0 0 140 12" fill="none">
                  <path d="M4 9 C 30 3, 100 11, 136 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M125 4 L 136 3 L 130 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
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
