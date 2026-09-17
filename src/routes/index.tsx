import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Instagram,
  Landmark,
  Linkedin,
  Network,
  Phone,
  Quote,
  Settings,
  Shield,
  ShieldCheck,
  Twitter,
  User,
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
    <div className="bg-[#F7F9FC] font-sans text-[#17202A] min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <FounderSection />
      <TrackRecordSection />
      <WhatWeCaterSection />
      <BrandPartnersSection />
      <ProtectionSpectrumSection />
      <ExpertTeamSection />
    </div>
  );
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/hero-slide-1.png",
      title: "IP CCTV & Security Command Center",
    },
    {
      image: "/hero-slide-2.png",
      title: "Enterprise High-Speed Data Servers",
    },
    {
      image: "/hero-slide-3.png",
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

  // Auto transition every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="relative overflow-hidden bg-[#041321] text-white w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Background HD AI Images Slider - Pure Full Opacity Display */}
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
          />
        </div>
      ))}

      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 z-20 size-11 sm:size-13 rounded-full bg-[#041321]/80 hover:bg-[#0A76A8] text-white flex items-center justify-center border border-slate-600 shadow-2xl transition backdrop-blur-md cursor-pointer"
      >
        <ChevronLeft className="size-6 text-white" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 z-20 size-11 sm:size-13 rounded-full bg-[#041321]/80 hover:bg-[#0A76A8] text-white flex items-center justify-center border border-slate-600 shadow-2xl transition backdrop-blur-md cursor-pointer"
      >
        <ChevronRight className="size-6 text-white" />
      </button>

      {/* Slide Indicator Dots at Bottom */}
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2.5 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx
                ? "w-8 bg-[#08A9DF] shadow-md shadow-[#08A9DF]/50"
                : "w-2.5 bg-white/50 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================================
   2. WELCOME / OVERVIEW SECTION (ANIMATED & ENHANCED)
   ========================================================================= */
function WelcomeSection() {
  const pillars = [
    { icon: Shield, title: "Trusted Technology", subtitle: "ISO 9001:2015 Assured" },
    { icon: Users, title: "Expert Team", subtitle: "35+ Yrs Field Engineers" },
    { icon: Settings, title: "Customized Solutions", subtitle: "Turnkey System Design" },
    { icon: Headphones, title: "24/7 Support", subtitle: "Guaranteed SLA Uptime" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7F9FC] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF6FC] border border-[#DCE7EE] shadow-sm">
            <Shield className="size-4 text-[#0A76A8] animate-pulse" />
            <span className="text-xs font-extrabold text-[#0A76A8] tracking-widest uppercase">
              ABOUT JAY ELECTRONICS PVT LTD
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#17202A] tracking-tight leading-tight">
            Welcome to <span className="text-[#0A76A8]">JAY ELECTRONICS</span> PVT LTD
          </h2>

          <p className="text-xs sm:text-sm text-[#647786] leading-relaxed max-w-2xl mx-auto font-normal">
            For more than three decades, JAY ELECTRONICS PRIVATE LIMITED has been delivering innovative technology solutions that help businesses, industries, educational institutions, hospitals, government organizations, and residential customers improve security, communication and operational efficiency.
          </p>
        </div>

        {/* 4 Animated Pillar Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-6 sm:p-7 rounded-2xl border border-[#DCE7EE] shadow-sm hover:shadow-xl hover:shadow-[#0A76A8]/15 hover:border-[#08A9DF] hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col items-center text-center space-y-3"
            >
              {/* Top Accent Gradient Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A76A8] to-[#08A9DF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Light Sweep Animation Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              {/* Icon Container with Rotation & Pulse Effect */}
              <div className="size-14 rounded-2xl bg-[#EAF6FC] text-[#0A76A8] flex items-center justify-center group-hover:bg-[#0A76A8] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                <item.icon className="size-7 transition-transform duration-300" />
              </div>

              {/* Card Title & Sub-tag */}
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-extrabold text-[#17202A] group-hover:text-[#0A76A8] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[10.5px] font-bold text-[#647786] group-hover:text-[#08A9DF] transition-colors">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Action Link Button */}
        <div className="text-center pt-2">
          <Link
            to="/about"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-[#DCE7EE] hover:border-[#0A76A8] text-xs sm:text-sm font-extrabold text-[#0A76A8] hover:bg-[#EAF6FC] shadow-sm hover:shadow-md transition-all duration-300 uppercase tracking-wider group cursor-pointer"
          >
            <span>Explore Full Company Story, Credentials &amp; Timeline</span>
            <ArrowRight className="size-4 text-[#0A76A8] group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
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
    <section className="py-14 sm:py-20 bg-white border-y border-[#DCE7EE]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Owner Image */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#DCE7EE]">
              <img
                src="/about-owner.png"
                alt="Mr. Jayesh Patil - Founder & Managing Director"
                className="w-full h-[300px] sm:h-[340px] object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#041321]/90 backdrop-blur-md p-3 rounded-xl text-white">
                <span className="text-xs font-bold block text-white">Mr. Jayesh Patil</span>
                <span className="text-[10px] text-[#08A9DF] font-semibold">Founder &amp; MD</span>
              </div>
            </div>
          </div>

          {/* Founder Content */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6FC] text-xs font-bold text-[#0A76A8] uppercase tracking-wider border border-[#DCE7EE]">
              <User className="size-3.5" />
              <span>FOUNDER &amp; MANAGING DIRECTOR</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#17202A]">
              Meet Our Owner - <span className="text-[#0A76A8]">Mr. Jayesh Patil</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#647786] leading-relaxed">
              With a vision to make advanced security and communication technology accessible to everyone, Mr. Jayesh Patil established JAY Electronics with a strong commitment to quality, innovation and customer satisfaction.
            </p>

            {/* Quote Card */}
            <div className="rounded-xl bg-[#041321] text-white p-5 shadow-md border border-[#082136]">
              <div className="flex items-start gap-3">
                <Quote className="size-5 text-[#08A9DF] shrink-0 rotate-180 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm italic font-medium leading-relaxed text-slate-200">
                    "Our goal is to create safer, smarter and more connected spaces through reliable technology solutions."
                  </p>
                  <p className="text-xs font-bold text-[#08A9DF] text-right">
                    — Mr. Jayesh Patil (Managing Director)
                  </p>
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
   4. TRACK RECORD & CREDENTIALS (DARK NAVY SECTION)
   ========================================================================= */
function TrackRecordSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#041321] text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#082136] border border-slate-700 px-4 py-1 text-xs font-bold text-[#08A9DF] uppercase tracking-widest">
            <Award className="size-3.5 text-[#08A9DF]" />
            <span>TRACK RECORD &amp; CREDENTIALS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Trusted by 1000+ Enterprises &amp; Govt Institutions
          </h2>
        </div>

        {/* 3 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-[#082136] p-6 rounded-2xl border border-slate-700 flex flex-col justify-center items-center text-center space-y-2">
            <span className="text-3xl sm:text-4xl font-black text-[#08A9DF]">35+</span>
            <h4 className="text-xs sm:text-sm font-extrabold text-white">Years of Engineering Experience</h4>
            <p className="text-[11px] text-slate-300">Continuous innovation since 1989</p>
          </div>

          <div className="bg-[#082136] p-6 rounded-2xl border border-slate-700 flex flex-col justify-center items-center text-center space-y-2">
            <span className="text-3xl sm:text-4xl font-black text-[#08A9DF]">1000+</span>
            <h4 className="text-xs sm:text-sm font-extrabold text-white">Satisfied Clients Across India</h4>
            <p className="text-[11px] text-slate-300">Govt, Hospitals, Banks &amp; Industry</p>
          </div>

          <div className="bg-[#082136] p-6 rounded-2xl border border-slate-700 flex flex-col justify-center items-center text-center space-y-2">
            <span className="text-3xl sm:text-4xl font-black text-[#08A9DF]">100%</span>
            <h4 className="text-xs sm:text-sm font-extrabold text-white">GeM &amp; Class-1 Govt Certified</h4>
            <p className="text-[11px] text-slate-300">ISO 9001:2015 Quality Assured</p>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center font-semibold tracking-wider">
          JAY ELECTRONICS PRIVATE LIMITED • SANGLI, MAHARASHTRA
        </p>
      </div>
    </section>
  );
}

/* =========================================================================
   5. WHAT WE CATER (SERVICES) SECTION
   ========================================================================= */
function WhatWeCaterSection() {
  const caterServices = [
    {
      id: 1,
      title: "IP CCTV/Analog CCTV Solutions",
      desc: "Choosing between IP CCTV and Analog CCTV solutions depends on your budget, clarity needs, and scale.",
      icon: Shield,
      badge: "HD SURVEILLANCE",
    },
    {
      id: 2,
      title: "LAN/WAN Networking",
      desc: "A Local Area Network (LAN) connects computers and devices seamlessly across office spaces.",
      icon: Network,
      badge: "HIGH SPEED GIGABIT",
    },
    {
      id: 3,
      title: "EPABX/IP-PBX System",
      desc: "Communications is a Trader of the wide spectrum EPABX System providing seamless voice & data.",
      icon: Phone,
      badge: "SMART VOICE & DATA",
    },
    {
      id: 4,
      title: "Audio/Video Solutions",
      desc: "We provide cost effective audio visual services for classroom, visual arts, communication.",
      icon: Video,
      badge: "PROFESSIONAL AV",
    },
    {
      id: 5,
      title: "Structured LAN/Telecom Cabling",
      desc: "Structured LAN and telecom cabling is a planned system of wires, patch panels.",
      icon: Settings,
      badge: "FIBER & COPPER LOOP",
    },
    {
      id: 6,
      title: "ACTIVE LED BOARD System",
      desc: "Technology is leading Outdoor LED Screen, Indoor LED Screen, Advertising LED display.",
      icon: BarChart3,
      badge: "DIGITAL LED DISPLAY",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F7F9FC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF6FC] px-3.5 py-1 text-xs font-bold text-[#0A76A8] uppercase tracking-widest border border-[#DCE7EE]">
            <Shield className="size-3.5 text-[#0A76A8]" />
            <span>WHAT WE CATER</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#17202A] tracking-tight">
            JAY ELECTRONICS <span className="text-[#0A76A8]">PVT LTD</span>
          </h2>

          <div className="flex items-center justify-center gap-2 text-[11px] font-extrabold tracking-widest uppercase text-[#647786]">
            <span>SECURE</span>
            <span className="text-[#0A76A8]">•</span>
            <span>CONNECT</span>
            <span className="text-[#0A76A8]">•</span>
            <span>COMMUNICATE</span>
            <span className="text-[#0A76A8]">•</span>
            <span>GROW</span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caterServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 border border-[#DCE7EE] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#0A76A8] hover:shadow-md transition cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-[#EAF6FC] flex items-center justify-center text-[#0A76A8]">
                      <IconComp className="size-6" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#FFF8E7] text-[#D97706] border border-[#FDE68A]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#17202A] leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#647786] leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCE7EE] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A76A8]">
                    Learn More
                  </span>
                  <Link
                    to="/services"
                    className="flex size-8 items-center justify-center rounded-full bg-[#0A76A8] text-white hover:bg-[#0896d7] transition"
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
   6. BRAND PARTNERS SECTION ("Framed Brands We Work With")
   ========================================================================= */
function BrandPartnersSection() {
  const brands = [
    { name: "CP PLUS", category: "CCTV & Security", tag: "CP" },
    { name: "DAHUA TECHNOLOGY", category: "IP Surveillance", tag: "DAH" },
    { name: "HIKVISION", category: "Smart Security", tag: "HIK" },
    { name: "MATRIX TELECOM", category: "Telecom & EPABX", tag: "MAT" },
    { name: "CISCO SYSTEMS", category: "Enterprise Networking", tag: "CSC" },
    { name: "HONEYWELL", category: "Building Automation", tag: "HON" },
    { name: "BOSCH SECURITY", category: "Critical Infrastructure", tag: "BOS" },
    { name: "COMMSCOPE", category: "Structured Cabling", tag: "COM" },
    { name: "SCHNEIDER ELECTRIC", category: "Smart Power & BMS", tag: "SCH" },
    { name: "ZKTECO", category: "Biometrics & Access", tag: "ZKT" },
  ];

  // Double list for smooth infinite scroll marquee
  const scrollerItems = [...brands, ...brands];

  return (
    <section className="py-14 sm:py-20 bg-[#041321] text-white border-y border-[#082136] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#082136] border border-slate-700 px-4 py-1 text-xs font-bold text-[#08A9DF] uppercase tracking-widest shadow-inner">
            <Award className="size-3.5 text-[#08A9DF]" />
            <span>AUTHORIZED DEALERS &amp; BRAND PARTNERS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Framed Brands We Work With
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            We partner with leading global manufacturers to deliver genuine, high-performance security, networking and telecommunication hardware.
          </p>
        </div>

        {/* Continuous Auto-Scrolling Logo Marquee */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient fade overlay edges for smooth visual transition */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#041321] via-[#041321]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#041321] via-[#041321]/80 to-transparent z-10" />

          {/* Marquee Track */}
          <div className="animate-marquee-left flex gap-4 sm:gap-6 items-center">
            {scrollerItems.map((brand, idx) => (
              <div
                key={idx}
                className="w-56 sm:w-64 flex-shrink-0 bg-[#082136] p-5 rounded-xl border border-slate-700/80 flex flex-col items-center text-center space-y-3 hover:border-[#08A9DF] hover:shadow-lg hover:shadow-[#08A9DF]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="size-12 sm:size-14 rounded-xl bg-[#0A76A8] group-hover:bg-[#08A9DF] text-white font-black text-sm sm:text-base flex items-center justify-center shadow-md transition-colors duration-300 group-hover:scale-105">
                  {brand.tag}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-white group-hover:text-[#08A9DF] transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-[11px] text-[#08A9DF] font-semibold">
                    {brand.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-slate-400 font-medium">
          Hover over any partner brand to pause scrolling
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7. OUR INTEGRATED PROTECTION SPECTRUM SECTION
   ========================================================================= */
function ProtectionSpectrumSection() {
  const spectrumItems = [
    {
      id: 1,
      title: "Government & Municipal",
      subtitle: "Public Safety & Urban Infrastructure",
      desc: "Smart city junctions, civic offices, safe city citywide command surveillance and multi-tier monitoring systems.",
      icon: Landmark,
      features: ["ANPR & Speed Cameras", "Traffic Junction Nodes", "Civic HQ Security", "Command Video Walls"],
    },
    {
      id: 2,
      title: "Police & Law Enforcement",
      subtitle: "High-Security Checkpoints & Tactical Feeds",
      desc: "HQ control rooms, jail security systems, ANPR highway checkpoints, and real-time tactical surveillance feeds.",
      icon: ShieldCheck,
      features: ["Central Control Console", "Tactical Video Wall", "Jail Security Systems", "Highway ANPR Checkpoints"],
    },
    {
      id: 3,
      title: "Commercial Real Estate",
      subtitle: "Integrated Smart Facility Security",
      desc: "IT Parks, BMS integration, tenant billing intercoms, fire evacuation systems, and automated access controls.",
      icon: Building2,
      features: ["BMS Building Automation", "Tenant Intercom Systems", "Addressable Fire Evacuation", "Biometric Access Control"],
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F7F9FC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EAF6FC] border border-[#DCE7EE]">
            <span className="text-xs font-bold text-[#0A76A8] tracking-widest uppercase">
              TAILORED SECURITY SOLUTIONS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17202A] tracking-tight">
            Our Integrated <span className="text-[#0A76A8]">Protection Spectrum</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#647786] max-w-2xl mx-auto">
            From smart cities to modern workplaces, we design security, surveillance, networking and communication solutions tailored for high-demand environments.
          </p>
        </div>

        {/* 3D Diagram Image */}
        <div className="rounded-2xl overflow-hidden bg-white border border-[#DCE7EE] shadow-md p-2">
          <img
            src="/integrated-protection-spectrum.png"
            alt="Our Integrated Protection Spectrum"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        {/* 3 Nodes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spectrumItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl border border-[#DCE7EE] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#0A76A8] transition"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="size-8 rounded-lg bg-[#EAF6FC] flex items-center justify-center text-[#0A76A8]">
                      <IconComponent className="size-4" />
                    </div>
                    <span className="text-xs font-bold text-[#0A76A8] uppercase">
                      Node {item.id}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#17202A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0A76A8] mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#647786] leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#17202A] bg-[#F7F9FC] border border-[#DCE7EE] px-2 py-0.5 rounded-md"
                      >
                        <CheckCircle2 className="size-3 text-[#0A76A8] shrink-0" />
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
   8. OUR EXPERT TEAM MEMBER SECTION
   ========================================================================= */
function ExpertTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Priya Deshmukh",
      role: "Incident Responder",
      image: "/team-5.png",
    },
    {
      id: 2,
      name: "Mr. Jayesh Patil",
      role: "Managing Director",
      image: "/about-owner.png",
    },
    {
      id: 3,
      name: "Rajesh Shinde",
      role: "Security Head",
      image: "/team-2.png",
    },
    {
      id: 4,
      name: "Ananya Sharma",
      role: "CCTV Analyst",
      image: "/team-3.png",
    },
  ];

  const total = teamMembers.length;

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentMember = teamMembers[activeIndex] || {
    id: 1,
    name: "Preetam Aandshala",
    role: "Founder & CEO",
    image: "/team-1.png",
  };

  return (
    <section className="py-14 sm:py-20 bg-[#041321] text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#082136] border border-slate-700 px-4 py-1 text-xs font-bold text-[#08A9DF] uppercase tracking-widest">
            <Users className="size-3.5" />
            <span>OUR TEAM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Our Expert Team Member
          </h2>

          <p className="text-xs sm:text-sm text-slate-300">
            Professionals Behind a Safer World
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            aria-label="Previous member"
            className="absolute left-0 sm:left-4 z-20 size-10 rounded-full bg-[#082136] text-white flex items-center justify-center border border-slate-700 hover:bg-[#0A76A8] transition"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div className="bg-[#082136] border border-slate-700 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-xl">
            <div className="w-full h-56 rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div>
              <h3 className="text-lg font-black text-white">{currentMember.name}</h3>
              <p className="text-xs font-bold text-[#08A9DF]">{currentMember.role}</p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <a href="#" className="size-8 rounded-full bg-[#041321] text-[#08A9DF] flex items-center justify-center hover:bg-[#0A76A8] hover:text-white transition">
                <Linkedin className="size-4" />
              </a>
              <a href="#" className="size-8 rounded-full bg-[#041321] text-[#08A9DF] flex items-center justify-center hover:bg-[#0A76A8] hover:text-white transition">
                <Twitter className="size-4" />
              </a>
              <a href="#" className="size-8 rounded-full bg-[#041321] text-[#08A9DF] flex items-center justify-center hover:bg-[#0A76A8] hover:text-white transition">
                <Instagram className="size-4" />
              </a>
            </div>
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next member"
            className="absolute right-0 sm:right-4 z-20 size-10 rounded-full bg-[#082136] text-white flex items-center justify-center border border-slate-700 hover:bg-[#0A76A8] transition"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2">
          {teamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                activeIndex === idx ? "w-6 bg-[#08A9DF]" : "w-2 bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
