import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Cloud,
  Factory,
  Flame,
  FolderKanban,
  GraduationCap,
  Headphones,
  Home as HomeIcon,
  Instagram,
  Landmark,
  Linkedin,
  Lock,
  Mail,
  Network,
  Phone,
  Plus,
  Quote,
  Radio,
  Settings,
  Shield,
  ShieldCheck,
  Sliders,
  Twitter,
  User,
  Users,
  Video,
  Volume2,
  Warehouse,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import cctvImage from "@/assets/gallery-2.jpg.asset.json";
import aboutImage from "@/assets/about-image-3.jpg.asset.json";
import eventImage from "@/assets/about-image-1.jpg.asset.json";
import teamImage from "@/assets/about-image-2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jay Electronics Pvt Ltd | Security, Telecommunications & Infrastructure" },
      {
        name: "description",
        content:
          "Jay Electronics Private Limited provides IP CCTV, LAN/WAN Networking, EPABX, Audio Visual and security solutions since 1989.",
      },
      { property: "og:title", content: "Jay Electronics Pvt Ltd" },
      {
        property: "og:description",
        content: "Securing Businesses. Empowering Connectivity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BrandLogosSliderSection />
      <IndustriesWeProtectSection />
      <ExpertTeamSection />
    </div>
  );
}

/* =========================================================================
   1. HERO SECTION (HD IMAGE SLIDER)
   ========================================================================= */
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop",
      alt: "IP CCTV & Security Systems",
    },
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
      alt: "Network Infrastructure & Servers",
    },
    {
      image: "/hero-slide-3.jpeg",
      alt: "Jay Electronics Solutions",
    },
    {
      image: "/hero-slide-4.jpeg",
      alt: "Jay Electronics Inauguration Event",
    },
  ];

  // Auto slide transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden w-full h-[calc(100vh-100px)] min-h-[400px] max-h-[680px] bg-slate-950">
      {/* Background HD Images Slider */}
      {slides.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img
            src={item.image}
            alt={item.alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

    </section>
  );
}

/* =========================================================================
   2. ABOUT US SECTION
   ========================================================================= */
function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-sky-50/50 via-white to-slate-50 py-16 sm:py-24 relative overflow-hidden font-sans border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* TOP SECTION HEADER & STATS COUNTER BAR */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 shadow-xs">
            <Shield className="size-3.5 text-sky-600" />
            <span className="text-xs font-bold text-sky-700 tracking-widest uppercase">
              ABOUT JAY ELECTRONICS PVT LTD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Pioneering Security &amp; Technology <span className="text-sky-600">Since 1989</span>
          </h2>

          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-500">
            INNOVATIVE SOLUTIONS FOR A SAFER TOMORROW
          </p>
        </div>

        {/* HERO CARD 1: CORPORATE OVERVIEW & HEADQUARTERS SHOWCASE */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: HQ Image Showcase */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/about-building.png"
              alt="Jay Electronics Building Headquarters"
              className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200/60">
              <h3 className="text-sm font-extrabold text-slate-900 tracking-wide">
                Sangli Headquarters &amp; Central Testing Depot
              </h3>
              <p className="text-xs text-sky-600 font-semibold mt-0.5">
                35+ Years of System Integration Leadership in Maharashtra
              </p>
            </div>
          </div>

          {/* Right: Overview Text & 4 Pillar Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Welcome to <span className="text-slate-900">JAY ELECTRONICS </span>
                <span className="text-sky-500">PVT LTD</span>
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                For more than three decades, JAY ELECTRONICS PRIVATE LIMITED has been delivering innovative technology solutions that help businesses, industries, educational institutions, hospitals, government organizations, and residential customers improve security, communication and operational efficiency.
              </p>
            </div>

            {/* 4 Pillar Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { icon: Shield, title: "Trusted Technology" },
                { icon: Users, title: "Expert Team" },
                { icon: Settings, title: "Customized Solutions" },
                { icon: Headphones, title: "24/7 Support" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-3 rounded-2xl bg-sky-50/70 border border-sky-100 hover:bg-sky-500 hover:text-white hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-white text-sky-600 group-hover:bg-white/20 group-hover:text-white shadow-xs mb-2 transition-colors">
                    <item.icon className="size-5" />
                  </div>
                  <span className="text-xs font-bold leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-sky-600 hover:text-sky-700 uppercase tracking-wider group"
              >
                <span>Explore Full Company Story, Credentials &amp; Timeline</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM SPLIT SHOWCASE: FOUNDER SPOTLIGHT & TRUST STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Split (7 Cols): Founder Profile Showcase */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-200/80 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Founder Image Column */}
              <div className="sm:col-span-5 relative overflow-hidden rounded-2xl shadow-md group">
                <img
                  src="/about-owner.png"
                  alt="Mr. Jayesh Patil - Founder & Managing Director"
                  className="w-full h-[260px] sm:h-[300px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-xs font-bold block text-white">Mr. Jayesh Patil</span>
                  <span className="text-[10px] text-sky-300 font-medium">Founder &amp; MD</span>
                </div>
              </div>

              {/* Founder Text & Bio Column */}
              <div className="sm:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/90 text-[11px] font-bold text-sky-700 uppercase tracking-wider border border-sky-200">
                  <User className="size-3.5" />
                  <span>FOUNDER &amp; MANAGING DIRECTOR</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  Meet Our Owner - <span className="text-sky-600">Mr. Jayesh Patil</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  With a vision to make advanced security and communication technology accessible to everyone, Mr. Jayesh Patil established JAY Electronics with a strong commitment to quality, innovation and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Founder Quote Bar */}
            <div className="rounded-2xl bg-slate-900 text-white p-5 relative shadow-md">
              <div className="flex items-start gap-3">
                <Quote className="size-5 text-sky-400 shrink-0 rotate-180 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm italic font-medium leading-relaxed text-slate-200">
                    "Our goal is to create safer, smarter and more connected spaces through reliable technology solutions."
                  </p>
                  <p className="text-xs font-bold text-sky-400 text-right mt-2">
                    — Mr. Jayesh Patil (Managing Director)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Split (5 Cols): Key Performance Statistics & Credentials */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#06143D] via-[#09225c] to-[#040e2b] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950/90 border border-cyan-500/30 px-3.5 py-1 text-xs font-bold text-cyan-400 uppercase tracking-widest shadow-md mb-4">
                <Award className="size-3.5 text-cyan-400" />
                <span>TRACK RECORD &amp; CREDENTIALS</span>
              </div>

              <h3 className="text-2xl font-black text-white leading-snug">
                Trusted by 1000+ Enterprises &amp; Govt Institutions
              </h3>
            </div>

            {/* 3 Large Stat Cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-white/10 border border-white/15 p-4 rounded-2xl backdrop-blur-md">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-lg font-black">
                  35+
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Years of Engineering Experience</h4>
                  <p className="text-xs text-slate-300">Continuous innovation since 1989</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 border border-white/15 p-4 rounded-2xl backdrop-blur-md">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-lg font-black">
                  1000+
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Satisfied Clients Across India</h4>
                  <p className="text-xs text-slate-300">Govt, Hospitals, Banks &amp; Industry</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 border border-white/15 p-4 rounded-2xl backdrop-blur-md">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-lg font-black">
                  100%
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">GeM &amp; Class-1 Govt Certified</h4>
                  <p className="text-xs text-slate-300">ISO 9001:2015 Quality Assured</p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center font-medium">
              JAY ELECTRONICS PRIVATE LIMITED • SANGLI, MAHARASHTRA
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================================
   3. WHAT WE CATER (SERVICES) SECTION - 6 CARD INTERACTIVE & COMPACT GRID
   ========================================================================= */
function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const caterServices = [
    {
      id: 1,
      title: "IP CCTV/Analog CCTV Solutions",
      desc: "Choosing between IP CCTV and Analog CCTV solutions depends on your budget, clarity needs, and scale.",
      icon: Shield,
      badge: "✨ HD Surveillance",
      gradient: "from-[#0F172A] via-[#1E40AF] to-[#06B6D4]",
    },
    {
      id: 2,
      title: "LAN/WAN Networking",
      desc: "A Local Area Network (LAN) connects computers and devices seamlessly.",
      icon: Network,
      badge: "⚡ High Speed Gigabit",
      gradient: "from-[#0F172A] via-[#1E40AF] to-[#06B6D4]",
    },
    {
      id: 3,
      title: "EPABX/IP-PBX System",
      desc: "Communications is a Trader of the wide spectrum EPABX System.",
      icon: Phone,
      badge: "📞 Smart Voice & Data",
      gradient: "from-[#0F172A] via-[#1E40AF] to-[#06B6D4]",
    },
    {
      id: 4,
      title: "Audio/Video Solutions",
      desc: "We provide cost effective audio visual services for classroom, visual arts, communication.",
      icon: Video,
      badge: "🎥 Professional AV",
      gradient: "from-[#0F172A] via-[#1E40AF] to-[#06B6D4]",
    },
    {
      id: 5,
      title: "Structured LAN/Telecom Cabling",
      desc: "Structured LAN and telecom cabling is a planned system of wires, patch panels.",
      icon: Settings,
      badge: "🔌 Fiber & Copper Loop",
      gradient: "from-[#0F172A] via-[#1E40AF] to-[#06B6D4]",
    },
    {
      id: 6,
      title: "ACTIVE LED BOARD System",
      desc: "Technology is leading Outdoor LED Screen, Indoor LED Screen, Advertising LED display.",
      icon: BarChart3,
      badge: "📺 Digital LED Display",
      gradient: "from-[#0F172A] via-[#1E40AF] to-[#06B6D4]",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-50 py-14 sm:py-20 relative overflow-hidden select-none">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="relative mb-10 flex flex-col items-center justify-center text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/90 px-3.5 py-1 text-xs font-bold text-sky-700 uppercase tracking-widest border border-sky-200/80 shadow-xs mb-2.5">
            <Shield className="size-3.5 text-sky-600" />
            <span>WHAT WE CATER</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl tracking-tight">
            JAY ELECTRONICS <span className="text-sky-500">PVT LTD</span>
          </h2>

          <div className="mt-2 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-extrabold tracking-widest uppercase text-slate-400">
            <span>SECURE</span>
            <span className="text-sky-400">•</span>
            <span>CONNECT</span>
            <span className="text-sky-400">•</span>
            <span>COMMUNICATE</span>
            <span className="text-sky-400">•</span>
            <span>GROW</span>
          </div>
        </div>

        {/* 6 Cards Compact Grid (3 columns x 2 rows) */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {caterServices.map((service) => {
            const isHovered = hoveredCard === service.id;
            const isSelected = activeCard === service.id;
            const isActive = isHovered || isSelected;
            const IconComp = service.icon;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(service.id)}
                className={`group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden min-h-[220px] ${
                  isActive
                    ? `bg-gradient-to-br ${service.gradient} text-white shadow-xl shadow-sky-500/25 scale-[1.02] border-2 border-cyan-300/80`
                    : "bg-white text-slate-800 border border-slate-200/80 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Glow Light Sweep Animation on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div>
                  {/* Top Vector Icon & Dynamic Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`size-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-inner rotate-3 scale-105"
                          : "bg-sky-50 text-sky-600 border border-sky-100 shadow-xs"
                      }`}
                    >
                      <IconComp className="size-6" />
                    </div>

                    {/* Dynamic Floating Badge on Hover / Active */}
                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-white/20 text-cyan-200 backdrop-blur-md border border-white/30 opacity-100 translate-y-0"
                          : "bg-slate-100 text-slate-500 border border-slate-200 opacity-60"
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3
                      className={`text-base font-extrabold leading-snug tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-slate-900 group-hover:text-sky-600"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        isActive ? "text-sky-100/90 font-medium" : "text-slate-500 font-normal"
                      }`}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Row with Circular Arrow Button */}
                <div className="mt-5 pt-3 flex items-center justify-between border-t border-transparent">
                  <span
                    className={`text-[11px] font-extrabold transition-colors ${
                      isActive ? "text-cyan-200" : "text-slate-400 group-hover:text-sky-600"
                    }`}
                  >
                    {isActive ? "Explore Service →" : "Learn More"}
                  </span>

                  <Link
                    to="/services"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Learn more about ${service.title}`}
                    className={`flex size-8 items-center justify-center rounded-full transition-all duration-300 shadow-sm ${
                      isActive
                        ? "bg-white text-blue-700 hover:bg-cyan-300 hover:scale-110 shadow-cyan-400/50"
                        : "bg-[#2563EB] text-white hover:bg-sky-500 hover:scale-110"
                    }`}
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
   3.2 BRAND LOGOS AUTO SLIDER SECTION
   ========================================================================= */
function BrandLogosSliderSection() {
  const brandLogos = [
    { name: "CP PLUS", category: "CCTV & Security", color: "from-blue-600 to-indigo-700", logoText: "CP PLUS" },
    { name: "Dahua Technology", category: "IP Surveillance", color: "from-red-600 to-rose-700", logoText: "DAHUA" },
    { name: "Hikvision", category: "Smart Security", color: "from-[#C4161C] to-red-700", logoText: "HIKVISION" },
    { name: "Matrix Comsec", category: "Telecom & EPABX", color: "from-cyan-600 to-blue-700", logoText: "MATRIX" },
    { name: "Panasonic", category: "IP-PBX & Telephony", color: "from-blue-700 to-sky-800", logoText: "PANASONIC" },
    { name: "Samsung", category: "Display & Security", color: "from-blue-800 to-indigo-900", logoText: "SAMSUNG" },
    { name: "Sony", category: "AV & Camera Optics", color: "from-slate-900 to-slate-800", logoText: "SONY" },
    { name: "Axis Communications", category: "Network Cameras", color: "from-amber-600 to-orange-700", logoText: "AXIS" },
    { name: "Aditya Infotech", category: "Distribution Partner", color: "from-purple-700 to-indigo-800", logoText: "ADITYA" },
    { name: "Bosch Security", category: "Fire & Access Control", color: "from-emerald-700 to-[#005691]", logoText: "BOSCH" },
    { name: "Honeywell", category: "Automation & Safety", color: "from-red-700 to-rose-800", logoText: "HONEYWELL" },
  ];

  // Duplicate logos for seamless 360-degree marquee loop
  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="bg-[#06143D] text-white py-12 sm:py-16 relative overflow-hidden select-none border-y border-slate-800">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-brand-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }
        .animate-brand-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Subtle Tech Pattern & Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030b24] via-[#081a4d] to-[#030b24] opacity-95 pointer-events-none" />
      <div className="pointer-events-none absolute -top-24 left-1/4 size-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 size-96 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950/90 border border-cyan-500/30 px-4 py-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest shadow-md">
          <Award className="size-3.5 text-cyan-400" />
          <span>AUTHORIZED DEALERS &amp; BRAND PARTNERS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Trusted Global Brands We Work With
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-300 max-w-2xl mx-auto">
          We partner with leading global manufacturers to deliver genuine, high-performance security, networking and telecommunication hardware.
        </p>
      </div>

      {/* Marquee Auto Slider Container */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        {/* Left & Right Gradient Blur Faders */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#030b24] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#030b24] to-transparent z-20" />

        {/* Continuous Track */}
        <div className="animate-brand-marquee gap-5 sm:gap-7">
          {duplicatedLogos.map((brand, idx) => (
            <div
              key={idx}
              className="group relative flex-shrink-0 flex items-center gap-4 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-400/80 rounded-2xl px-5 py-3.5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20 cursor-pointer min-w-[210px] sm:min-w-[240px]"
            >
              {/* Brand Emblem Badge */}
              <div className={`size-11 sm:size-12 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-md tracking-wider border border-white/20 group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                {brand.logoText.slice(0, 3).toUpperCase()}
              </div>

              {/* Brand Name & Category */}
              <div className="text-left">
                <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-cyan-400 transition-colors tracking-wide">
                  {brand.name}
                </h3>
                <p className="text-[11px] font-semibold text-cyan-300/80 tracking-normal mt-0.5">
                  {brand.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3.5 INDUSTRIES WE PROTECT SECTION
   ========================================================================= */
function IndustriesWeProtectSection() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const spectrumItems = [
    {
      id: 1,
      num: "01",
      tag: "Citywide Surveillance",
      title: "Government & Municipal",
      subtitle: "Public Safety & Urban Infrastructure",
      desc: "Smart city junctions, civic offices, safe city citywide command surveillance and multi-tier monitoring systems.",
      icon: Landmark,
      features: ["ANPR & Speed Cameras", "Traffic Junction Nodes", "Civic HQ Security", "Command Video Walls"],
      link: "/services",
    },
    {
      id: 2,
      num: "02",
      tag: "Command Center & Control Rooms",
      title: "Police & Law Enforcement",
      subtitle: "High-Security Checkpoints & Tactical Feeds",
      desc: "HQ control rooms, jail security systems, ANPR highway checkpoints, and real-time tactical surveillance feeds.",
      icon: ShieldCheck,
      features: ["Central Control Console", "Tactical Video Wall", "Jail Security Systems", "Highway ANPR Checkpoints"],
      link: "/services",
    },
    {
      id: 3,
      num: "03",
      tag: "BMS Integration",
      title: "Commercial Real Estate",
      subtitle: "Integrated Smart Facility Security",
      desc: "IT Parks, BMS integration, tenant billing intercoms, fire evacuation systems, and automated access controls.",
      icon: Building2,
      features: ["BMS Building Automation", "Tenant Intercom Systems", "Addressable Fire Evacuation", "Biometric Access Control"],
      link: "/services",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 via-sky-50/30 to-white py-16 sm:py-24 relative overflow-hidden font-sans border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header (Matching Image 1 EXACTLY) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300/80 shadow-xs">
            <span className="text-[11px] sm:text-xs font-bold text-slate-700 tracking-widest uppercase">
              TAILORED SECURITY SOLUTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Integrated <span className="text-sky-600">Protection Spectrum</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            From smart cities to modern workplaces, we design security, surveillance, networking and communication solutions tailored for high-demand environments.
          </p>
        </div>

        {/* IMAGE 1: Hero 3D Isometric Integrated Protection Diagram */}
        <div className="relative mx-auto max-w-6xl rounded-3xl bg-white/60 p-2 sm:p-4 border border-slate-200/80 shadow-2xl shadow-sky-900/5 overflow-hidden group">
          <img
            src="/integrated-protection-spectrum.png"
            alt="Our Integrated Protection Spectrum - 3D Isometric Security Systems Architecture"
            className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />

          {/* Subtle Ambient Tech Glow Effects */}
          <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 size-72 bg-sky-400/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 size-72 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>

        {/* 3 Interactive Protection Spectrum Nodes Card Bar Below Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mt-12 sm:mt-16">
          {spectrumItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)}
                className={`group relative bg-white p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "border-sky-500 shadow-xl shadow-sky-500/15 ring-2 ring-sky-400/30 -translate-y-1.5"
                    : "border-slate-200/80 shadow-sm hover:border-sky-300 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Badge Tag & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors">
                      <IconComponent className="size-3.5 text-sky-600" />
                      <span>{item.tag}</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <h3 className="text-xs font-bold text-sky-600 mb-2.5 uppercase tracking-wider">
                    {item.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>

                  {/* Key Tech Feature Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md"
                      >
                        <CheckCircle2 className="size-3 text-sky-500 shrink-0" />
                        <span>{feat}</span>
                      </span>
                    ))}
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
   4. OUR EXPERT TEAM MEMBER SECTION
   ========================================================================= */
function ExpertTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Mr. Jayesh Patil",
      role: "Managing Director",
      image: "/team-1.png",
    },
    {
      id: 2,
      name: "Rajesh Shinde",
      role: "Security Head",
      image: "/team-2.png",
    },
    {
      id: 3,
      name: "Ananya Sharma",
      role: "CCTV Analyst",
      image: "/team-3.png",
    },
    {
      id: 4,
      name: "Vikram Malhotra",
      role: "Network Architect",
      image: "/team-4.png",
    },
    {
      id: 5,
      name: "Priya Deshmukh",
      role: "Incident Responder",
      image: "/team-5.png",
    },
  ];

  const total = teamMembers.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto slide every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  return (
    <section className="relative overflow-hidden bg-[#06143D] text-white py-20 sm:py-28 select-none">
      {/* Abstract Background Tech Pattern & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/40 via-[#06143D] to-[#030a21]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-500/40 px-4 py-1 text-xs font-bold text-cyan-400 uppercase tracking-widest shadow-lg shadow-cyan-500/10">
            <Users className="size-3.5" />
            <span>OUR TEAM</span>
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
            Our Expert Team Member
          </h2>

          <p className="text-sm sm:text-base font-medium text-slate-300">
            Professionals Behind a Safer World
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div
          className="relative min-h-[440px] sm:min-h-[480px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Team Member"
            className="absolute left-1 sm:left-6 z-40 flex size-11 sm:size-13 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-2xl shadow-slate-950/50 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <ChevronLeft className="size-6 sm:size-7 text-slate-800" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Team Member"
            className="absolute right-1 sm:right-6 z-40 flex size-11 sm:size-13 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-2xl shadow-slate-950/50 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <ChevronRight className="size-6 sm:size-7 text-slate-800" />
          </button>

          {/* Cards Track */}
          <div className="relative w-full max-w-4xl h-[420px] sm:h-[460px] flex items-center justify-center">
            {teamMembers.map((member, i) => {
              // Calculate relative offset from activeIndex (-2, -1, 0, 1, 2)
              let offset = (i - activeIndex + total) % total;
              if (offset > total / 2) offset -= total;

              const isCenter = offset === 0;
              const isLeft1 = offset === -1;
              const isRight1 = offset === 1;
              const isLeft2 = offset === -2 || offset < -2;
              const isRight2 = offset === 2 || offset > 2;

              // Hide cards further than 2 steps away
              if (Math.abs(offset) > 2) return null;

              // Styles calculation
              let positionClass = "";
              let opacityClass = "";
              let scaleClass = "";
              let cardStyle = "";

              if (isCenter) {
                positionClass = "translate-x-0 z-30";
                opacityClass = "opacity-100";
                scaleClass = "scale-100 sm:scale-105";
                cardStyle = "bg-gradient-to-b from-slate-900/90 to-[#0c1c4d]/90 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/30 backdrop-blur-xl";
              } else if (isLeft1) {
                positionClass = "-translate-x-[140px] sm:-translate-x-[220px] lg:-translate-x-[260px] z-20";
                opacityClass = "opacity-75 sm:opacity-85 hover:opacity-100";
                scaleClass = "scale-90 sm:scale-95";
                cardStyle = "bg-slate-950/80 border border-slate-700/80 shadow-xl backdrop-blur-md";
              } else if (isRight1) {
                positionClass = "translate-x-[140px] sm:translate-x-[220px] lg:translate-x-[260px] z-20";
                opacityClass = "opacity-75 sm:opacity-85 hover:opacity-100";
                scaleClass = "scale-90 sm:scale-95";
                cardStyle = "bg-slate-950/80 border border-slate-700/80 shadow-xl backdrop-blur-md";
              } else if (isLeft2) {
                positionClass = "-translate-x-[220px] sm:-translate-x-[360px] lg:-translate-x-[420px] z-10 hidden sm:flex";
                opacityClass = "opacity-35 hover:opacity-60";
                scaleClass = "scale-75 sm:scale-80 blur-[1px]";
                cardStyle = "bg-slate-950/60 border border-slate-800/50 shadow-md backdrop-blur-xs";
              } else if (isRight2) {
                positionClass = "translate-x-[220px] sm:translate-x-[360px] lg:translate-x-[420px] z-10 hidden sm:flex";
                opacityClass = "opacity-35 hover:opacity-60";
                scaleClass = "scale-75 sm:scale-80 blur-[1px]";
                cardStyle = "bg-slate-950/60 border border-slate-800/50 shadow-md backdrop-blur-xs";
              }

              return (
                <div
                  key={member.id}
                  onClick={() => setActiveIndex(i)}
                  className={`absolute transition-all duration-500 ease-out cursor-pointer flex flex-col items-center rounded-3xl p-5 sm:p-6 text-center w-[250px] sm:w-[280px] lg:w-[300px] ${positionClass} ${opacityClass} ${scaleClass} ${cardStyle}`}
                >
                  {/* Employee Photo */}
                  <div className="relative w-full h-[200px] sm:h-[230px] rounded-2xl overflow-hidden bg-slate-800 mb-4 border border-white/10 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>

                  {/* Member Name */}
                  <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wide">
                    {member.name}
                  </h3>

                  {/* Job Designation */}
                  <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-0.5">
                    {member.role}
                  </p>

                  {/* Social Media Buttons */}
                  <div className="flex items-center justify-center gap-2.5 mt-4">
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${member.name} LinkedIn`}
                      className="flex size-8 items-center justify-center rounded-full bg-sky-500/20 text-cyan-300 hover:bg-sky-500 hover:text-white transition shadow-sm"
                    >
                      <Linkedin className="size-4" />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${member.name} Twitter`}
                      className="flex size-8 items-center justify-center rounded-full bg-sky-500/20 text-cyan-300 hover:bg-sky-500 hover:text-white transition shadow-sm"
                    >
                      <Twitter className="size-4" />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${member.name} Instagram`}
                      className="flex size-8 items-center justify-center rounded-full bg-sky-500/20 text-cyan-300 hover:bg-sky-500 hover:text-white transition shadow-sm"
                    >
                      <Instagram className="size-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {teamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to team member slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? "w-8 h-2.5 bg-cyan-400 shadow-md shadow-cyan-400/50"
                  : "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Glowing Divider Bar to separate cleanly from Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/60" />
    </section>
  );
}
