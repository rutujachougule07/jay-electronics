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
  Factory,
  FileCheck,
  FileText,
  GraduationCap,
  Handshake,
  Headphones,
  HeartPulse,
  Hexagon,
  Home,
  Instagram,
  Landmark,
  Lightbulb,
  Linkedin,
  Lock,
  MapPin,
  Network,
  Package,
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
import { useAdminStore } from "@/lib/admin-store";

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

function useAutoScroll(itemCount: number, speedMs: number = 3000) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Do not scroll if there is no horizontal overflow (e.g. desktop grid view)
        if (scrollWidth <= clientWidth + 10) return;

        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 290, behavior: "smooth" });
        }
      }
    }, speedMs);

    return () => clearInterval(timer);
  }, [isPaused, itemCount, speedMs]);

  return { scrollRef, setIsPaused };
}

function HomePage() {
  return (
    <div className="bg-white font-sans text-[#0F172A] min-h-screen">
      <HeroSection />
      <ImpactSection />
      <WelcomeSection />
      <FounderSection />
      <WhatWeCaterSection />
      <BrandPartnersSection />
      <IndustriesWeServeSection />
      <ExpertTeamSection />
    </div>
  );
}

/* =========================================================================
   1. HERO SECTION (MATCHING EXACT COLOR & LAYOUT FROM REFERENCE IMAGE)
   ========================================================================= */
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const store = useAdminStore();
  const storeSlides = store.getHeroSlides();
  const heroSlides = storeSlides && storeSlides.length > 0 ? storeSlides : [
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
    }, 4500);
    return () => clearInterval(timer);
  }, [totalSlides]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null && e.changedTouches && e.changedTouches[0]) {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchStartX - touchEndX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      setTouchStartX(null);
    }
  };

  return (
    <section
      className="relative w-full h-[calc(100vh-66px)] lg:h-[calc(100vh-74px)] min-h-[500px] max-h-[850px] bg-[#041321] overflow-hidden select-none group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none z-10" />

      {/* LEFT NAVIGATION ARROW */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 size-9 sm:size-11 rounded-full bg-[#041321]/60 hover:bg-[#DC2626] text-white flex items-center justify-center border border-white/30 shadow-xl transition backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="size-4 sm:size-6 text-white" />
      </button>

      {/* RIGHT NAVIGATION ARROW */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 size-9 sm:size-11 rounded-full bg-[#041321]/60 hover:bg-[#DC2626] text-white flex items-center justify-center border border-white/30 shadow-xl transition backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
      >
        <ChevronRight className="size-4 sm:size-6 text-white" />
      </button>

      {/* PAGINATION DOTS (CENTERED AT BOTTOM TO AVOID FLOATING BUTTON COLLISION) */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === idx
                ? "w-5 sm:w-7 h-2 sm:h-2.5 bg-[#DC2626]"
                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white"
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

export function ImpactSection() {
  const store = useAdminStore();
  const homeStats = store.getHomeStats();

  const getStatIcon = (label: string, index: number) => {
    const l = label.toUpperCase();
    if (l.includes("EXPERIENCE") || l.includes("YEAR")) return Users;
    if (l.includes("PROJECT")) return FileText;
    if (l.includes("CLIENT")) return Users;
    if (l.includes("GOVERNMENT") || l.includes("GOVT")) return Landmark;
    if (l.includes("CORPORATE") || l.includes("CUSTOMER")) return Handshake;
    if (l.includes("SLA") || l.includes("UPTIME")) return ShieldCheck;

    const icons = [Users, FileText, Users, Landmark, Handshake, BarChart3, Award];
    return icons[index % icons.length] || BarChart3;
  };

  return (
    <section className="relative z-30 mt-4 sm:mt-6 pb-4 sm:pb-8 w-full bg-transparent">
      <div className="w-full px-2 sm:px-6 lg:px-8 xl:px-12">
        {/* Full-width Outer Banner Card Container attached to Slider */}
        <div className="relative w-full bg-gradient-to-r from-rose-50/95 via-white/95 to-rose-50/95 backdrop-blur-md border border-rose-100/90 rounded-2xl sm:rounded-3xl p-3 sm:p-7 lg:p-9 shadow-xl overflow-hidden">
          {/* Faint Background Glowing Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header Row */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Top Center Eyebrow Pill Badge */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className="w-4 sm:w-5 h-[1.5px] bg-rose-300" />
              <span className="px-3 py-0.5 rounded-full bg-rose-100/90 border border-rose-200/80 text-[#DC2626] text-[9px] sm:text-[11px] font-extrabold tracking-wider uppercase">
                OUR IMPACT
              </span>
              <div className="w-4 sm:w-5 h-[1.5px] bg-rose-300" />
            </div>

            {/* Main Headline */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-snug">
              Engineering <span className="text-[#DC2626]">Trust</span> Through Numbers
            </h2>

            {/* Top Right "INNOVATION FOR A SAFER TOMORROW" badge */}
            <div className="hidden lg:flex flex-col items-end text-right absolute top-0 right-0">
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase leading-tight max-w-[120px]">
                INNOVATION FOR A SAFER TOMORROW
              </span>
              <div className="w-8 h-[2px] bg-[#DC2626] mt-1" />
            </div>
          </div>

          {/* Dynamic Stat Cards Responsive Grid Layout */}
          <div className={`mt-4 sm:mt-8 grid gap-2.5 sm:gap-3.5 xl:gap-4.5 relative z-10 ${homeStats.length === 4
            ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
            : homeStats.length === 5
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            }`}>
            {homeStats.map((stat, idx) => {
              const IconComp = getStatIcon(stat.label, idx);
              return (
                <div
                  key={stat.id || idx}
                  className={`bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 xl:p-4.5 flex items-center gap-2.5 sm:gap-3 xl:gap-3.5 shadow-2xs hover:shadow-md hover:border-rose-200 transition-all duration-300 w-full ${homeStats.length === 5 && idx === 4
                    ? "col-span-2 justify-self-center w-full max-w-[calc(50%-0.3125rem)] sm:max-w-none sm:col-span-1"
                    : ""
                    }`}
                >
                  {/* Left Red Icon Box */}
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#FFF0F0] border border-rose-100/80 flex items-center justify-center shrink-0 text-[#DC2626]">
                    <IconComp className="size-4 sm:size-5.5 text-[#DC2626]" />
                  </div>

                  {/* Right Text Column */}
                  <div className="flex flex-col justify-center min-w-0 flex-1">
                    <div className="text-base sm:text-2xl xl:text-3xl font-black text-[#0F172A] tracking-tight leading-none">
                      <AnimatedStatCounter targetValue={stat.targetValue} suffix={stat.suffix} />
                    </div>
                    <div className="text-[8.5px] sm:text-[10px] xl:text-[10.5px] font-extrabold text-slate-500 tracking-wider uppercase mt-1 leading-tight whitespace-normal">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2. WELCOME / ABOUT SECTION (EXACT PIXEL-PERFECT MATCH FOR USER REFERENCE MOCKUP)
   ========================================================================= */
function WelcomeSection() {
  const store = useAdminStore();
  const homeAbout = store.getHomeAbout();

  const pillarCards = [
    {
      icon: Award,
      title: homeAbout.pillar1Title || "35+ Years Legacy",
      desc: homeAbout.pillar1Desc || "Founded in 1989 with unmatched reliability.",
    },
    {
      icon: Users,
      title: homeAbout.pillar2Title || "5000+ Happy Clients",
      desc: homeAbout.pillar2Desc || "Trusted across government & industries.",
    },
    {
      icon: Settings,
      title: homeAbout.pillar3Title || "Turnkey Execution",
      desc: homeAbout.pillar3Desc || "End-to-end from BOQ to AMC.",
    },
    {
      icon: ShieldCheck,
      title: homeAbout.pillar4Title || "Trusted Tech Partner",
      desc: homeAbout.pillar4Desc || "Building safer & smarter environments.",
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
                {homeAbout.eyebrow || "ABOUT JAY ELECTRONICS"}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-tight">
              {(() => {
                const titleStr = homeAbout.title || "Who We Are";
                const parts = titleStr.trim().split(" ");
                if (parts.length > 1) {
                  const last = parts.pop();
                  return (
                    <>
                      {parts.join(" ")} <span className="text-[#DC2626]">{last}</span>
                    </>
                  );
                }
                return titleStr;
              })()}
            </h2>

            {/* Subtitle Tagline */}
            <div className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase">
              {homeAbout.subtitle || "INNOVATION | SECURITY | A SMARTER TOMORROW"}
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {homeAbout.description}
            </p>

            {/* 4 Cards Grid - 2 cols on mobile, 4 cols on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {pillarCards.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 rounded-2xl p-3 space-y-1.5 shadow-sm hover:border-[#DC2626]/40 hover:shadow-md transition-all duration-300 group flex flex-col justify-between w-full"
                  >
                    <div className="size-9 rounded-full bg-[#FFECEC] text-[#DC2626] flex items-center justify-center shrink-0 group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                      <IconComp className="size-4.5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#0F172A] leading-tight">
                        {feat.title}
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
  const store = useAdminStore();
  const about = store.getAboutData();

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

  const founderName = about.founderName || "Jayprakash Ashok Chougule";
  const founderDesignation = about.founderDesignation || "Founder & Managing Director";
  const founderEyebrow = about.founderEyebrow || "OUR FOUNDER";
  const founderImage = about.founderImage || "/about-owner.png";
  const founderDescription =
    about.founderDescription ||
    "With a strong foundation in Electronics & Telecommunications Engineering, Er. Jayprakash Ashok Chougule established Jay Electronics in 1989. Under his visionary leadership, the company has grown into a premier provider of integrated security, networking, and telecom infrastructure across Maharashtra.";

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
                src={founderImage}
                alt={`${founderName} - ${founderDesignation}`}
                className="w-full h-[380px] sm:h-[440px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/about-owner.png";
                }}
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
                  <div className="text-xs font-black text-white">{founderName}</div>
                  <div className="text-[10px] font-bold text-[#38BDF8]">
                    {founderDesignation}
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
                {founderEyebrow}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-tight">
              Meet Our Owner – <span className="text-[#0284C7]">{founderName}</span>
            </h2>

            {/* Subtitle Tagline */}
            <div className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase">
              VISION &nbsp;|&nbsp; LEADERSHIP &nbsp;|&nbsp; INNOVATION &nbsp;|&nbsp; PEOPLE
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {founderDescription}
            </p>

            {/* 4 Founder Cards Grid - 2 cols on mobile, 4 cols on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {founderPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 rounded-2xl p-3 text-center space-y-1.5 shadow-sm hover:border-[#0284C7]/40 hover:shadow-md transition-all duration-300 group flex flex-col items-center justify-center min-h-[105px] w-full"
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
  const store = useAdminStore();
  const homeSolutions = store.getHomeSolutions();
  const { scrollRef, setIsPaused } = useAutoScroll(homeSolutions.length, 3000);

  if (!homeSolutions || homeSolutions.length === 0) {
    return null;
  }

  const getIconComponent = (name?: string) => {
    switch (name) {
      case "Network":
        return Network;
      case "Phone":
        return Phone;
      case "Video":
        return Video;
      case "Cable":
        return Cable;
      case "Tv":
        return Tv;
      case "Shield":
        return Shield;
      case "Lock":
        return Lock;
      case "Server":
        return Landmark;
      case "Cpu":
        return Lightbulb;
      case "Camera":
      default:
        return Camera;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-slate-200/90 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs">
            <Hexagon className="size-4 text-[#E52328] fill-[#E52328]/10" />
            <span className="text-xs font-black text-slate-700 tracking-widest uppercase">
              WHAT WE CATER
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
            Our Integrated <span className="text-[#E52328]">Electronic Solutions</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-medium">
            Turnkey enterprise architectures engineered for commercial, industrial, municipal, and
            healthcare facilities.
          </p>
        </div>

        {/* Solutions Container - Horizontal Scroll on Mobile with Auto-Scroll, Grid on Desktop */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none"
        >
          {homeSolutions.map((sol) => {
            const IconComp = getIconComponent(sol.iconName);
            return (
              <div
                key={sol.id}
                className="relative bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 hover:border-red-300/90 shadow-2xs flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300 group overflow-hidden flex-none md:flex-1 w-[280px] xs:w-[300px] md:w-full snap-center"
              >

                {/* Top Animated Gradient Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:via-rose-600 group-hover:to-red-500 transition-all duration-500" />

                {/* Soft Red Ambient Radial Background Glow on Hover */}
                <div className="absolute -top-12 -right-12 size-36 bg-rose-500/0 group-hover:bg-rose-500/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none group-hover:scale-150" />

                <div className="space-y-4 relative z-10">
                  {/* Icon Container */}
                  <div className="size-12 rounded-2xl bg-red-50/90 border border-red-100/70 text-[#E52328] flex items-center justify-center group-hover:bg-[#E52328] group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-2xs">
                    <IconComp className="size-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-[#0F172A] leading-snug group-hover:text-[#E52328] transition-colors duration-300">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-normal">
                      {sol.desc}
                    </p>
                  </div>
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
  const store = useAdminStore();
  const brands = store.getHomeBrands();

  if (!brands || brands.length === 0) {
    return null;
  }

  const renderBrandLogo = (brand: typeof brands[number]) => {
    if (brand.image) {
      return (
        <img
          src={brand.image}
          alt={brand.name}
          className="h-8 sm:h-10 max-w-[130px] object-contain"
        />
      );
    }

    const nameUpper = (brand.name || "").trim().toUpperCase();

    if (nameUpper === "HIKVISION") {
      return (
        <span className="font-black text-[#DC2626] text-base sm:text-lg tracking-tighter italic">
          HIKVISION
        </span>
      );
    }
    if (nameUpper === "CP PLUS") {
      return (
        <div className="flex items-center gap-1.5 text-[#DC2626]">
          <span className="font-black text-sm">※</span>
          <span className="font-black text-sm sm:text-base tracking-tight">CP PLUS</span>
        </div>
      );
    }
    if (nameUpper === "DAHUA" || nameUpper === "ALHUA") {
      return (
        <div className="flex items-center text-base sm:text-lg font-black italic">
          <span className="text-[#DC2626]">a</span>
          <span className="text-slate-900">lhua</span>
        </div>
      );
    }
    if (nameUpper === "BOSCH") {
      return (
        <div className="flex items-center gap-1.5 text-[#DC2626]">
          <div className="size-5 rounded-full border-2 border-[#DC2626] flex items-center justify-center text-[9px] font-bold shrink-0">
            I
          </div>
          <span className="font-black text-xs sm:text-sm tracking-wider text-slate-800">BOSCH</span>
        </div>
      );
    }
    if (nameUpper === "HONEYWELL") {
      return (
        <span className="font-bold text-[#DC2626] text-sm sm:text-base tracking-tight">
          Honeywell
        </span>
      );
    }
    if (nameUpper === "MATRIX") {
      return (
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-[#00A896]">
            <div className="grid grid-cols-2 gap-0.5 size-3.5">
              <span className="bg-[#00A896] rounded-xs" />
              <span className="bg-[#00A896] rounded-xs" />
              <span className="bg-[#00A896] rounded-xs" />
              <span className="bg-[#00A896] rounded-xs" />
            </div>
            <span className="font-black text-xs sm:text-sm tracking-wider">MATRIX</span>
          </div>
          <div className="text-[7px] font-bold text-[#00A896] tracking-widest uppercase -mt-0.5">
            Telecom | Security
          </div>
        </div>
      );
    }
    if (nameUpper === "CISCO") {
      return (
        <div className="flex flex-col items-center text-[#0284C7]">
          <div className="flex items-end gap-0.5 h-3 mb-0.5">
            <span className="w-0.5 h-1.5 bg-[#0284C7] rounded-full" />
            <span className="w-0.5 h-2.5 bg-[#0284C7] rounded-full" />
            <span className="w-0.5 h-3.5 bg-[#0284C7] rounded-full" />
            <span className="w-0.5 h-2.5 bg-[#0284C7] rounded-full" />
            <span className="w-0.5 h-1.5 bg-[#0284C7] rounded-full" />
          </div>
          <span className="font-black text-xs sm:text-sm tracking-widest text-slate-800">CISCO</span>
        </div>
      );
    }
    if (nameUpper === "SAMSUNG") {
      return (
        <span className="font-black text-sm sm:text-base text-[#1428A0] tracking-wider">
          SAMSUNG
        </span>
      );
    }
    if (nameUpper === "LG") {
      return (
        <div className="flex items-center gap-1.5 text-rose-600">
          <div className="size-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] font-extrabold shrink-0">
            L
          </div>
          <span className="font-black text-base sm:text-lg text-slate-800 tracking-tight">LG</span>
        </div>
      );
    }
    if (nameUpper === "SCHNEIDER") {
      return (
        <span className="font-black text-emerald-600 text-sm sm:text-base tracking-wider">
          Schneider
        </span>
      );
    }

    return (
      <span className="font-black text-[#DC2626] text-sm sm:text-base tracking-tight uppercase">
        {brand.logoText || brand.name}
      </span>
    );
  };

  const mid = Math.ceil(brands.length / 2);
  const row1Raw = brands.slice(0, mid);
  const row2Raw = brands.slice(mid).length > 0 ? brands.slice(mid) : row1Raw;

  const repeatCount1 = Math.max(4, Math.ceil(12 / row1Raw.length));
  const repeatCount2 = Math.max(4, Math.ceil(12 / row2Raw.length));

  const row1 = Array(repeatCount1).fill(row1Raw).flat();
  const row2 = Array(repeatCount2).fill(row2Raw).flat();

  return (
    <section className="relative bg-gradient-to-b from-[#F0F5FA] via-[#F8FAFC] to-[#EDF3F9] py-16 sm:py-24 border-y border-slate-200/90 overflow-hidden">
      {/* Light Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/3 left-10 size-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 size-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 text-center relative z-10">
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-[#DC2626]">
            <span className="size-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-[11px] font-black tracking-widest uppercase">
              GLOBAL TECHNOLOGY PARTNERS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
            Brands That Build a{" "}
            <span className="text-[#DC2626]">
              Safer Tomorrow
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">
            Collaborating with world-class OEM technology pioneers for smart, secure enterprise architectures.
          </p>
        </div>

        {/* 2-ROW SCROLLING BRAND CONTAINERS */}
        <div className="space-y-4 sm:space-y-6 max-w-7xl mx-auto overflow-hidden px-2">
          {/* ROW 1: Auto Scrolling Leftward */}
          <div className="w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
            <div className="flex w-max items-center gap-4 sm:gap-6 animate-marquee-left">
              {row1.map((brand, idx) => (
                <div key={`r1-${idx}`} className="group relative flex-none cursor-pointer">
                  <div className="relative w-40 h-28 sm:w-48 sm:h-32 rounded-2xl bg-white border border-slate-200/90 shadow-sm shadow-slate-900/5 hover:border-[#DC2626] hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between p-3.5 sm:p-4 overflow-hidden">
                    {/* Top Animated Red Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 group-hover:bg-[#DC2626] transition-all duration-300" />

                    {/* Top Category Tag */}
                    <span className="text-[8px] sm:text-[9px] font-extrabold tracking-wider uppercase text-slate-400 group-hover:text-[#DC2626] transition-colors relative z-10 truncate max-w-full">
                      {brand.category}
                    </span>

                    {/* Brand Logo */}
                    <div className="w-full flex items-center justify-center my-auto group-hover:scale-105 transition-transform duration-300 relative z-10">
                      {renderBrandLogo(brand)}
                    </div>

                    {/* Status Pill */}
                    <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                      <span className="size-1.5 rounded-full bg-[#DC2626]" />
                      <span className="text-[8px] font-bold text-slate-500 group-hover:text-[#DC2626] tracking-wider uppercase">
                        Authorized Partner
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Auto Scrolling Rightward */}
          <div className="w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
            <div className="flex w-max items-center gap-4 sm:gap-6 animate-marquee-right">
              {row2.map((brand, idx) => (
                <div key={`r2-${idx}`} className="group relative flex-none cursor-pointer">
                  <div className="relative w-40 h-28 sm:w-48 sm:h-32 rounded-2xl bg-white border border-slate-200/90 shadow-sm shadow-slate-900/5 hover:border-[#DC2626] hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between p-3.5 sm:p-4 overflow-hidden">
                    {/* Top Animated Red Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 group-hover:bg-[#DC2626] transition-all duration-300" />

                    {/* Top Category Tag */}
                    <span className="text-[8px] sm:text-[9px] font-extrabold tracking-wider uppercase text-slate-400 group-hover:text-[#DC2626] transition-colors relative z-10 truncate max-w-full">
                      {brand.category}
                    </span>

                    {/* Brand Logo */}
                    <div className="w-full flex items-center justify-center my-auto group-hover:scale-105 transition-transform duration-300 relative z-10">
                      {renderBrandLogo(brand)}
                    </div>

                    {/* Status Pill */}
                    <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                      <span className="size-1.5 rounded-full bg-[#DC2626]" />
                      <span className="text-[8px] font-bold text-slate-500 group-hover:text-[#DC2626] tracking-wider uppercase">
                        Authorized Partner
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4.5. INDUSTRIES WE SERVE SECTION (TAILORED SECTOR VERTICALS)
   ========================================================================= */
function IndustriesWeServeSection() {
  const store = useAdminStore();
  const storeData = store.getHomeIndustries();

  const default8Industries = [
    { index: "01", title: "Government & Municipal", desc: "Smart city junctions, civic offices, safe city citywide command surveillance." },
    { index: "02", title: "Police & Law Enforcement", desc: "HQ control rooms, jail security systems, ANPR highway checkpoints." },
    { index: "03", title: "Manufacturing & Factories", desc: "MIDC industrial belts, blast-proof cameras, optical campus loops." },
    { index: "04", title: "Hospitals & Healthcare", desc: "ICU access control, nurse call systems, patient record network security." },
    { index: "05", title: "Educational Campuses", desc: "Colleges & universities, student tracking, PA systems, secure campus Wi-Fi." },
    { index: "06", title: "Banks & Financial", desc: "RBI-compliant 90-day DVR storage, strongroom sensors, alarm dialers." },
    { index: "07", title: "Commercial Real Estate", desc: "IT Parks, BMS integration, tenant billing intercoms, fire evacuation." },
    { index: "08", title: "Smart Cities & Urban Transit", desc: "Integrated Command & Control Centers (ICCC), RLVD, & traffic signals." },
  ];

  const rawIndustries = storeData && storeData.length > 0 ? storeData : default8Industries;
  const { scrollRef, setIsPaused } = useAutoScroll(rawIndustries.length, 2800);

  const getIconAndBg = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("government") || t.includes("municipal")) {
      return { icon: Landmark, iconBg: "bg-sky-100/80 text-[#0284C7]" };
    }
    if (t.includes("police") || t.includes("law")) {
      return { icon: Shield, iconBg: "bg-rose-100/80 text-rose-600" };
    }
    if (t.includes("manufacturing") || t.includes("factories")) {
      return { icon: Factory, iconBg: "bg-amber-100/80 text-amber-600" };
    }
    if (t.includes("hospital") || t.includes("health")) {
      return { icon: HeartPulse, iconBg: "bg-rose-100/80 text-rose-600" };
    }
    if (t.includes("education") || t.includes("school") || t.includes("college")) {
      return { icon: GraduationCap, iconBg: "bg-sky-100/80 text-[#0284C7]" };
    }
    if (t.includes("bank") || t.includes("financial")) {
      return { icon: Landmark, iconBg: "bg-emerald-100/80 text-emerald-600" };
    }
    if (t.includes("smart") || t.includes("transit") || t.includes("city")) {
      return { icon: Hexagon, iconBg: "bg-purple-100/80 text-purple-600" };
    }
    return { icon: Building2, iconBg: "bg-sky-100/80 text-[#0284C7]" };
  };

  const industryList = rawIndustries.map((ind, idx) => {
    const { icon, iconBg } = getIconAndBg(ind.title);
    return {
      index: ind.index || String(idx + 1).padStart(2, "0"),
      title: ind.title,
      desc: ind.desc,
      icon,
      iconBg,
    };
  });

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#F0F7FD] via-white to-sky-50/40 border-y border-sky-100 overflow-hidden">
      {/* Decorative Corner Grids / Blurs */}
      <div className="absolute top-8 left-8 size-48 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 right-8 size-64 bg-sky-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 text-center relative z-10">
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#0284C7]/40" />
            <span className="text-[11px] font-black text-[#0284C7] tracking-widest uppercase">
              TAILORED SECTOR VERTICALS
            </span>
            <span className="h-px w-8 bg-[#0284C7]/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
            Industries <span className="text-[#0284C7]">We Serve</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Domain-specific compliance requirements, environmental hardening, and scalable network
            architectures for key industries.
          </p>
        </div>

        {/* Industry Cards Container - Horizontal Scroll on Mobile with Auto-Scroll, Grid on Desktop */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none"
        >
          {industryList.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <div
                key={idx}
                className="relative bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 border-l-4 border-l-[#0284C7] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start justify-between cursor-pointer group overflow-hidden flex-none w-[280px] xs:w-[310px] md:w-auto snap-center"
              >
                {/* Left Side: Icon & Content */}
                <div className="flex items-start gap-4 pr-4">
                  <div
                    className={`size-11 sm:size-12 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${ind.iconBg} group-hover:scale-105 transition-transform`}
                  >
                    <IconComp className="size-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-black text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                {/* Right Side: Index Number */}
                <div className="flex flex-col items-end justify-start self-stretch shrink-0">
                  <span className="text-sm sm:text-base font-black text-slate-300 group-hover:text-[#0284C7] transition-colors">
                    {ind.index}
                  </span>
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
   5. OUR EXPERT TEAM MEMBER SECTION (BLUE CITYSCAPE GRADIENT BACKGROUND)
   ========================================================================= */
function ExpertTeamSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Center card default
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const store = useAdminStore();
  const storeMembers = store.getTeamMembers();

  const defaultTeam = [
    {
      id: "1",
      name: "Er. Amit Patil",
      role: "Senior Security Director",
      isRedRole: false,
      image: "/team-2.png",
    },
    {
      id: "2",
      name: "Er. Sneha Kulkarni",
      role: "Client Relationship Lead",
      isRedRole: false,
      image: "/team-5.png",
    },
    {
      id: "3",
      name: "Er. Jayant Wankar",
      role: "Founder & Managing Director",
      isRedRole: true,
      image: "/about-owner.png",
    },
    {
      id: "4",
      name: "Er. Payal Wankar",
      role: "Director & System Architect",
      isRedRole: true,
      image: "/team-3.png",
    },
    {
      id: "5",
      name: "Er. Rohan Wankar",
      role: "Technical Operations Lead",
      isRedRole: false,
      image: "/team-4.png",
    },
  ];

  const teamMembers =
    storeMembers && storeMembers.length > 0
      ? storeMembers.map((m) => ({
        id: m.id,
        name: m.name,
        role: m.role,
        isRedRole:
          (m.role || "").toLowerCase().includes("director") ||
          (m.role || "").toLowerCase().includes("founder"),
        image: m.image || "/team-2.png",
      }))
      : defaultTeam;

  // Auto-slide loop (2.4 seconds interval, pauses on hover / touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    }, 2400);
    return () => clearInterval(timer);
  }, [isPaused, teamMembers.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  // Touch / Mobile Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    if (e.touches && e.touches[0]) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null && e.changedTouches && e.changedTouches[0]) {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchStartX - touchEndX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
      setTouchStartX(null);
    }
    setIsPaused(false);
  };

  // Calculate circular distances so cards stay ordered from left to right (-2, -1, 0, 1, 2)
  const sortedMembers = teamMembers
    .map((member, originalIdx) => {
      let distance = originalIdx - activeIndex;
      const half = Math.floor(teamMembers.length / 2);
      if (distance > half) distance -= teamMembers.length;
      if (distance < -half) distance += teamMembers.length;
      return { ...member, originalIdx, distance };
    })
    .sort((a, b) => a.distance - b.distance);

  return (
    <section className="relative py-6 sm:py-8 bg-gradient-to-br from-rose-50/40 via-white to-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 space-y-4 sm:space-y-5 relative z-10 text-center">
        {/* Header Block */}
        <div className="space-y-1 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-50 border border-rose-200/80 text-[#E52328] shadow-2xs">
            <User className="size-3.5 text-[#E52328]" />
            <span className="text-[10px] font-black tracking-widest uppercase">OUR TEAM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
            Our Expert <span className="text-[#E52328]">Team Member</span>
          </h2>

          <p className="text-xs text-slate-500 font-medium">
            Professionals Behind a Safer World
          </p>
        </div>

        {/* 3D Coverflow Carousel Stage */}
        <div
          className="relative flex items-center justify-center max-w-7xl mx-auto py-2 px-2 sm:px-4 md:px-6 [perspective:1000px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cards 3D Row */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-5 w-full overflow-hidden py-4 select-none">
            {sortedMembers.map((member) => {
              const { distance, originalIdx } = member;
              const isActive = distance === 0;
              const isAdjacent = Math.abs(distance) === 1;

              let cardStyle = "";
              let depthTransform = "";

              if (isActive) {
                cardStyle =
                  "z-30 scale-[1.08] opacity-100 border-2 border-[#E52328] shadow-[0_12px_36px_-6px_rgba(229,35,40,0.38)] bg-white brightness-[1.02] hover:scale-[1.10] hover:brightness-105";
                depthTransform = "[transform:translateZ(0px)_rotateY(0deg)]";
              } else if (isAdjacent) {
                cardStyle =
                  "z-20 scale-[0.94] opacity-80 border border-slate-200/90 shadow-xs bg-white brightness-95 hover:opacity-100 hover:scale-[0.98]";
                depthTransform =
                  distance < 0
                    ? "[transform:rotateY(7deg)]"
                    : "[transform:rotateY(-7deg)]";
              } else {
                cardStyle =
                  "z-10 scale-[0.86] opacity-45 border border-slate-200/60 shadow-2xs bg-white/90 brightness-90 blur-[0.3px] hidden md:block hover:opacity-75";
                depthTransform =
                  distance < 0
                    ? "[transform:rotateY(10deg)]"
                    : "[transform:rotateY(-10deg)]";
              }

              return (
                <div
                  key={member.id}
                  onClick={() => setActiveIndex(originalIdx)}
                  className={`group relative w-44 sm:w-52 md:w-56 rounded-2xl p-3 sm:p-4 text-center space-y-2.5 transform-gpu will-change-transform [transition:all_800ms_cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex-none ${cardStyle} ${depthTransform}`}
                >
                  {/* Photo Container */}
                  <div className="w-full h-32 sm:h-38 md:h-40 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover object-top transform-gpu transition-all duration-700 ease-out ${isActive
                        ? "scale-[1.03] brightness-[1.03]"
                        : "group-hover:scale-105"
                        }`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/about-owner.png";
                      }}
                    />
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-0.5">
                    <h3 className="text-sm sm:text-base font-black text-[#0F172A] truncate group-hover:text-[#E52328] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p
                      className={`text-[11px] sm:text-xs font-bold truncate ${member.isRedRole || isActive ? "text-[#E52328]" : "text-slate-500"
                        }`}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex items-center justify-center gap-2 pt-0.5">
                    <a
                      href="#"
                      className="size-6 sm:size-6.5 rounded-full bg-rose-50 text-[#E52328] flex items-center justify-center hover:bg-[#E52328] hover:text-white transition-all shadow-2xs"
                      aria-label="LinkedIn Profile"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="size-3" />
                    </a>
                    <a
                      href="#"
                      className="size-6 sm:size-6.5 rounded-full bg-rose-50 text-[#E52328] flex items-center justify-center hover:bg-[#E52328] hover:text-white transition-all shadow-2xs"
                      aria-label="Twitter Profile"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="size-3" />
                    </a>
                    <a
                      href="#"
                      className="size-6 sm:size-6.5 rounded-full bg-rose-50 text-[#E52328] flex items-center justify-center hover:bg-[#E52328] hover:text-white transition-all shadow-2xs"
                      aria-label="Instagram Profile"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="size-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Red Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-0.5">
          {teamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${idx === activeIndex
                ? "w-6 bg-[#E52328]"
                : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
