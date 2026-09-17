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
import { useAdminStore } from "@/lib/admin-store";
import { subscribeHeroSlidesFromFirestore, subscribeTeamMembersFromFirestore } from "@/lib/firestore-service";
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
   1. HERO SECTION (HD DYNAMIC IMAGE SLIDER)
   ========================================================================= */
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const store = useAdminStore();
  const [firestoreSlides, setFirestoreSlides] = useState<any[]>([]);

  useEffect(() => {
    const unsub = subscribeHeroSlidesFromFirestore((items) => {
      if (items && items.length > 0) {
        setFirestoreSlides(items);
      }
    });
    return () => unsub();
  }, []);

  const storeSlides = store.getHeroSlides();
  const slides = firestoreSlides.length > 0 ? firestoreSlides : storeSlides;

  // Auto slide transition every 6 seconds
  useEffect(() => {
    if (slides.length === 0) return;
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
          key={item.id || index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img
            src={item.image}
            alt={item.alt || item.title || "Hero Slide"}
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
/* =========================================================================
   2. ABOUT US SECTION (DYNAMIC FROM ADMIN STORE / FIRESTORE)
   ========================================================================= */
function AboutSection() {
  const store = useAdminStore();
  const about = store.getAboutData();

  return (
    <section className="bg-slate-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ROW 1: WELCOME TO JAY ELECTRONICS PVT LTD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/60 border border-slate-100">
          {/* Left Column: Building Image */}
          <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-md group">
            <img
              src={about.buildingImage || "/about-building.png"}
              alt="Jay Electronics Building Headquarters"
              className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Column: Corporate Info */}
          <div className="lg:col-span-6 space-y-5">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/90 px-3.5 py-1 text-xs font-bold text-sky-700 uppercase tracking-wider border border-sky-200">
              <Shield className="size-3.5" />
              <span>{about.eyebrow || "ABOUT US"}</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              {about.heading || "Welcome to JAY ELECTRONICS PVT LTD"}
            </h2>

            {/* Tagline */}
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-500">
              {about.tagline || "INNOVATIVE SOLUTIONS FOR A SAFER TOMORROW"}
            </p>

            {/* Description Paragraph */}
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {about.description ||
                "For more than three decades, JAY ELECTRONICS PRIVATE LIMITED has been delivering innovative technology solutions that help businesses, industries, educational institutions, hospitals, government organizations, and residential customers improve security, communication and operational efficiency."}
            </p>

            {/* 4 Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Shield, title: "Trusted Technology" },
                { icon: Users, title: "Expert Team" },
                { icon: Settings, title: "Customized Solutions" },
                { icon: Headphones, title: "24/7 Support" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2">
                  <div className="flex size-14 items-center justify-center rounded-full bg-sky-100/80 text-sky-600 shadow-sm transition hover:bg-sky-500 hover:text-white">
                    <item.icon className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: MEET OUR OWNER / FOUNDER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/60 border border-slate-100">
          {/* Left Column: Founder Bio */}
          <div className="lg:col-span-6 space-y-5">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/90 px-3.5 py-1 text-xs font-bold text-sky-700 uppercase tracking-wider border border-sky-200">
              <User className="size-3.5" />
              <span>{about.founderEyebrow || "OUR FOUNDER"}</span>
            </div>

            {/* Heading & Subheading */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Meet Our Owner
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                <span className="text-sky-500">{about.founderName || "Er. Jayant Wankar"}</span>
              </h3>
              <p className="text-xs font-bold text-slate-500 tracking-wide uppercase mt-0.5">
                {about.founderDesignation || "Founder & Managing Director"}
              </p>
            </div>

            {/* Founder Description */}
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {about.founderDescription ||
                "With a strong foundation in Electronics & Telecommunications Engineering, Er. Jayant Wankar established Jay Electronics in 1989. Under his visionary leadership, the company has grown into a premier provider of integrated security, networking, and telecom infrastructure."}
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <Award className="size-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900">
                    {about.founderExperience || "35+ Years"}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">Years of Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <Building2 className="size-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900">1000+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Happy Clients</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <Users className="size-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900">Dedicated</div>
                  <div className="text-[10px] text-slate-500 font-medium">Team Leadership</div>
                </div>
              </div>
            </div>

            {/* Founder Quote Card */}
            <div className="rounded-2xl bg-sky-50/80 p-4 border border-sky-100 text-slate-700 relative">
              <div className="flex items-start gap-3">
                <Quote className="size-5 text-sky-500 shrink-0 rotate-180 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm italic font-medium leading-relaxed text-slate-700">
                    "Our goal is to create safer, smarter and more connected spaces through reliable technology solutions."
                  </p>
                  <p className="text-xs font-bold text-slate-600 text-right mt-2">
                    — {about.founderName || "Er. Jayant Wankar"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Image with Card Badge Overlay */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-2xl shadow-md group">
            <img
              src={about.founderImage || "/about-owner.png"}
              alt={`${about.founderName} - Founder & Managing Director`}
              className="w-full h-[360px] sm:h-[440px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-700/80 shadow-xl text-white">
              <h4 className="text-sm font-bold text-white">{about.founderName || "Er. Jayant Wankar"}</h4>
              <p className="text-[11px] text-sky-400 font-medium">{about.founderDesignation || "Founder & Managing Director"}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">JAY ELECTRONICS PVT LTD</p>
            </div>
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(1);

  const industryCards = [
    {
      id: 1,
      num: "01",
      title: "Government & Municipal",
      subtitle: "Public Safety & Infrastructure",
      desc: "Smart city junctions, civic offices, safe city citywide command surveillance and multi-tier monitoring systems.",
      icon: Landmark,
      color: "from-rose-500 to-red-600",
      activeStyle: "border-rose-500 shadow-xl shadow-rose-500/10 ring-2 ring-rose-400/40 -translate-y-2",
    },
    {
      id: 2,
      num: "02",
      title: "Police & Law Enforcement",
      subtitle: "High-Security Checkpoints",
      desc: "HQ control rooms, jail security systems, ANPR highway checkpoints, and tactical surveillance feeds.",
      icon: ShieldCheck,
      color: "from-rose-500 to-red-600",
      activeStyle: "border-rose-500 shadow-xl shadow-rose-500/10 ring-2 ring-rose-400/40 -translate-y-2",
    },
    {
      id: 7,
      num: "03",
      title: "Commercial Real Estate",
      subtitle: "Integrated Facility Security",
      desc: "IT Parks, BMS integration, tenant billing intercoms, fire evacuation systems, and automated access controls.",
      icon: Building2,
      color: "from-rose-500 to-red-600",
      activeStyle: "border-rose-500 shadow-xl shadow-rose-500/10 ring-2 ring-rose-400/40 -translate-y-2",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-sky-50/40 via-rose-50/20 to-white py-16 sm:py-24 relative overflow-hidden font-sans border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200">
            <span className="text-xs font-bold text-rose-600 tracking-widest uppercase">
              TAILORED SECURITY SOLUTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Industries We <span className="text-rose-600">Protect</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            From smart cities to modern workplaces, we design security, surveillance, networking and communication solutions tailored for high-demand environments.
          </p>
        </div>

        {/* 3 Industry Cards Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {industryCards.map((item) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                className={`group relative bg-white p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? item.activeStyle
                    : "border-slate-200/80 shadow-sm hover:border-rose-300 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Top Header: Icon Box & Card Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`size-13 sm:size-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "bg-rose-600 text-white shadow-lg shadow-rose-500/30 scale-105"
                          : "bg-rose-100/80 text-rose-700"
                      }`}
                    >
                      <IconComponent className="size-6 sm:size-7" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono tracking-widest">
                      {item.num}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Explore Link Action */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-600 group-hover:text-rose-600">
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Explore Solution
                  </span>
                  <div className="size-8 rounded-full bg-rose-50 group-hover:bg-rose-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
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
   4. OUR EXPERT TEAM MEMBER SECTION (DYNAMIC FROM STORE & FIRESTORE)
   ========================================================================= */
function ExpertTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const store = useAdminStore();
  const [firestoreMembers, setFirestoreMembers] = useState<any[]>([]);

  useEffect(() => {
    const unsub = subscribeTeamMembersFromFirestore((items) => {
      if (items && items.length > 0) {
        setFirestoreMembers(items);
      }
    });
    return () => unsub();
  }, []);

  const storeMembers = store.getTeamMembers();
  const teamMembers = firestoreMembers.length > 0 ? firestoreMembers : storeMembers;

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
