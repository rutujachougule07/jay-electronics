import { createFileRoute, Link } from "@tanstack/react-router";
<<<<<<< HEAD
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
  FolderKanban,
  Headphones,
  Instagram,
  Linkedin,
  Lock,
  Mail,
  Network,
  Phone,
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
      <ExpertTeamSection />
      <CtaBannerSection />
      <FaqSection />
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
    <section className="bg-slate-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ROW 1: WELCOME TO JAY ELECTRONICS PVT LTD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/60 border border-slate-100">
          {/* Left Column: Building Image */}
          <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-md group">
            <img
              src="/about-building.png"
              alt="Jay Electronics Building Headquarters"
              className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Column: Corporate Info */}
          <div className="lg:col-span-6 space-y-5">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/90 px-3.5 py-1 text-xs font-bold text-sky-700 uppercase tracking-wider border border-sky-200">
              <Shield className="size-3.5" />
              <span>ABOUT US</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Welcome to <br />
              <span className="text-slate-900">JAY ELECTRONICS </span>
              <span className="text-sky-500">PVT LTD</span>
            </h2>

            {/* Tagline */}
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-500">
              INNOVATIVE SOLUTIONS FOR A SAFER TOMORROW
            </p>

            {/* Description Paragraph */}
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              For more than three decades, JAY ELECTRONICS PRIVATE LIMITED has been delivering innovative technology solutions that help businesses, industries, educational institutions, hospitals, government organizations, and residential customers improve security, communication and operational efficiency.
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
              <span>OUR FOUNDER</span>
            </div>

            {/* Heading & Subheading */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Meet Our Owner
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Mr. <span className="text-sky-500">Jayesh Patil</span>
              </h3>
              <p className="text-xs font-bold text-slate-500 tracking-wide uppercase mt-0.5">
                Founder &amp; Managing Director
              </p>
            </div>

            {/* Founder Description */}
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              With a vision to make advanced security and communication technology accessible to everyone, Mr. Jayesh Patil established JAY Electronics with a strong commitment to quality, innovation and customer satisfaction. His leadership and expertise continue to guide the company towards new milestones.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <Award className="size-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900">35+</div>
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
                    — Mr. Jayesh Patil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Image with Card Badge Overlay */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-2xl shadow-md group">
            <img
              src="/about-owner.png"
              alt="Mr. Jayesh Patil - Founder & Managing Director"
              className="w-full h-[360px] sm:h-[440px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-700/80 shadow-xl text-white">
              <h4 className="text-sm font-bold text-white">Mr. Jayesh Patil</h4>
              <p className="text-[11px] text-sky-400 font-medium">Founder &amp; Managing Director</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">JAY ELECTRONICS PVT LTD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   3. WHAT WE DO (SERVICES) SECTION
   ========================================================================= */
function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-sky-50/50 via-slate-50 to-sky-50/30 py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Top Header Row with Corner Accents */}
        <div className="relative mb-12 flex flex-col items-center justify-center text-center">
          {/* Top Left Decorative Text */}
          <div className="hidden lg:block absolute left-0 top-0 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 max-w-[150px] text-left leading-relaxed">
            INNOVATIVE SOLUTIONS FOR A SAFER TOMORROW
          </div>

          {/* Top Right Decorative Cursive Accent */}
          <div className="hidden lg:block absolute right-0 top-0 text-right">
            <span className="font-serif italic text-lg sm:text-xl text-sky-600 font-semibold tracking-wide">
              Technology for a Better Tomorrow
            </span>
          </div>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/90 px-3.5 py-1 text-xs font-bold text-sky-700 uppercase tracking-widest border border-sky-200">
            <FolderKanban className="size-3.5" />
            <span>WHAT WE DO</span>
          </div>

          {/* Main Section Title */}
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            JAY ELECTRONICS <span className="text-sky-500">PVT LTD</span>
          </h2>

          {/* Subtitle Dots Row */}
          <p className="mt-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-400 flex items-center justify-center gap-2">
            <span>SECURE</span>
            <span className="text-sky-400">•</span>
            <span>CONNECT</span>
            <span className="text-sky-400">•</span>
            <span>COMMUNICATE</span>
            <span className="text-sky-400">•</span>
            <span>GROW</span>
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {/* CARD 01: IP CCTV / Analog CCTV Solutions (White Card) */}
          <div className="group relative rounded-3xl bg-white p-7 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
            {/* Top Row: Icon & Number 01 */}
            <div>
              <div className="flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-sky-100/80 text-sky-600 shadow-xs">
                  <Video className="size-7" />
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-sky-500 border-b-2 border-sky-400 pb-0.5">01</span>
                </div>
              </div>

              {/* Title & Description with Product Image Float */}
              <div className="mt-6 grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    IP CCTV / Analog CCTV Solutions
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Choosing the right CCTV solution depends on your budget, clarity needs, and scale. We provide reliable and high-quality surveillance systems for homes, businesses and industries.
                  </p>
                </div>
                {/* Product Cutout Image */}
                <div className="col-span-5 relative">
                  <img
                    src="/service-cctv.png"
                    alt="IP CCTV Bullet Camera"
                    className="w-full h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Bottom 3 Feature Micro Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-slate-700 border border-sky-100">
                  <Video className="size-3.5 text-sky-500" />
                  <span>High Resolution</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-slate-700 border border-sky-100">
                  <Cloud className="size-3.5 text-sky-500" />
                  <span>Remote Monitoring</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-slate-700 border border-sky-100">
                  <ShieldCheck className="size-3.5 text-sky-500" />
                  <span>24/7 Security</span>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
              <Link
                to="/services"
                className="text-xs font-bold text-slate-800 hover:text-sky-600 transition"
              >
                Learn More
              </Link>
              <Link
                to="/services"
                aria-label="Learn More about CCTV"
                className="flex size-9 items-center justify-center rounded-full bg-sky-50 text-sky-600 border border-sky-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition shadow-xs"
              >
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* CARD 02: LAN / WAN Networking (Active Glowing Center Card) */}
          <div className="group relative rounded-3xl bg-gradient-to-br from-[#061e3d] via-[#092d5c] to-[#0c4083] p-7 sm:p-8 text-white shadow-2xl shadow-sky-500/30 border-2 border-cyan-400 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5">
            {/* Ambient Background Glow Effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-lg group-hover:opacity-40 transition pointer-events-none" />

            {/* Top Row: Icon & Number 02 */}
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 shadow-sm">
                  <Network className="size-7" />
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-cyan-400 border-b-2 border-cyan-400 pb-0.5">02</span>
                </div>
              </div>

              {/* Title & Description with Product Image Float */}
              <div className="mt-6 grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    LAN / WAN Networking
                  </h3>
                  <p className="mt-2 text-xs text-sky-100/90 leading-relaxed">
                    IP and LAN-WAN Network Cables connect systems and devices seamlessly with total high-speed performance. We design and implement secure and scalable network infrastructures.
                  </p>
                </div>
                {/* Product Cutout Image */}
                <div className="col-span-5 relative">
                  <img
                    src="/service-network.png"
                    alt="LAN WAN Network Switch Router"
                    className="w-full h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Bottom 3 Feature Micro Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-cyan-300 border border-white/15">
                  <Zap className="size-3.5 text-cyan-400" />
                  <span>High Speed Connectivity</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-cyan-300 border border-white/15">
                  <Settings className="size-3.5 text-cyan-400" />
                  <span>Scalable Infrastructure</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-cyan-300 border border-white/15">
                  <BarChart3 className="size-3.5 text-cyan-400" />
                  <span>Reliable Performance</span>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/15 pt-5">
              <Link
                to="/services"
                className="text-xs font-bold text-white hover:text-cyan-300 transition"
              >
                Learn More
              </Link>
              <Link
                to="/services"
                aria-label="Learn More about Networking"
                className="flex size-9 items-center justify-center rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/50"
              >
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* CARD 03: EPABX / IP-PBX System (White Card) */}
          <div className="group relative rounded-3xl bg-white p-7 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
            {/* Top Row: Icon & Number 03 */}
            <div>
              <div className="flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-sky-100/80 text-sky-600 shadow-xs">
                  <Phone className="size-7" />
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-sky-500 border-b-2 border-sky-400 pb-0.5">03</span>
                </div>
              </div>

              {/* Title & Description with Product Image Float */}
              <div className="mt-6 grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    EPABX / IP-PBX System
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Communication solution provider of wide spectrum EPABX System providing wireless protocols for voice and data exchange. Stay connected with smart and efficient communication systems.
                  </p>
                </div>
                {/* Product Cutout Image */}
                <div className="col-span-5 relative">
                  <img
                    src="/service-epabx.png"
                    alt="EPABX IP PBX Telephone System"
                    className="w-full h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Bottom 3 Feature Micro Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-slate-700 border border-sky-100">
                  <Users className="size-3.5 text-sky-500" />
                  <span>Crystal Clear Communication</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-slate-700 border border-sky-100">
                  <Radio className="size-3.5 text-sky-500" />
                  <span>Wireless Protocols</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-slate-700 border border-sky-100">
                  <Sliders className="size-3.5 text-sky-500" />
                  <span>Easy Management</span>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
              <Link
                to="/services"
                className="text-xs font-bold text-slate-800 hover:text-sky-600 transition"
              >
                Learn More
              </Link>
              <Link
                to="/services"
                aria-label="Learn More about EPABX"
                className="flex size-9 items-center justify-center rounded-full bg-sky-50 text-sky-600 border border-sky-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition shadow-xs"
              >
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Floating CTA Button */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-sky-500/30 hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <span>Explore All Services</span>
            <ArrowRight className="size-4" />
          </Link>
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
    </section>
  );
}

/* =========================================================================
   5. CTA BANNER SECTION (PROTECT BUSINESS)
   ========================================================================= */
function CtaBannerSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-2xl grid lg:grid-cols-12">
          {/* Left Dark Blue Half */}
          <div className="lg:col-span-6 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 p-8 sm:p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                Protect business, Intelligence security solution today!
              </h2>
            </div>

            {/* Contact Pills */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Phone Pill */}
              <a
                href="tel:+919422407175"
                className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 text-xs font-semibold backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
              >
                <div className="flex size-7 items-center justify-center rounded-full bg-sky-500 text-white">
                  <Phone className="size-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-sky-300 uppercase font-medium">
                    GET A CONSULTATION
                  </span>
                  <span className="font-bold text-white">+91 9422407175</span>
                </div>
              </a>

              {/* Email Pill */}
              <a
                href="mailto:info@jayelectronics.co.in"
                className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 text-xs font-semibold backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
              >
                <div className="flex size-7 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                  <Mail className="size-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] text-cyan-300 uppercase font-medium">
                    SEND US EMAIL
                  </span>
                  <span className="font-bold text-white">info@jayelectronics.co.in</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Cyan Half with Image Mockup */}
          <div className="lg:col-span-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 p-8 sm:p-12 flex items-center justify-center relative min-h-[260px]">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-3 shadow-2xl border border-white/40 transform hover:scale-102 transition duration-300">
              <img
                src={teamImage.url}
                alt="Security Solution Monitoring Interface"
                className="h-52 w-full object-cover rounded-xl"
              />
              <div className="mt-3 flex items-center justify-between px-2">
                <span className="text-xs font-bold text-slate-900">
                  Protect business, Intelligence security solution today!
                </span>
                <span className="flex size-3 rounded-full bg-sky-500 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   6. FAQ SECTION
   ========================================================================= */
function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Specialized Audio / Visual (AV) Integration?",
      answer:
        "Design, program and commission custom AV solutions for enhanced communication and events across meeting rooms, classrooms, and boardrooms.",
    },
    {
      question: "Specialized Audio / Visual Solutions Important?",
      answer:
        "Specialized AV systems streamline corporate presentations, distance learning, and high-clarity teleconferencing with robust acoustic & video control.",
    },
    {
      question: "Why Partner With Us?",
      answer:
        "Jay Electronics brings over 35 years of engineering experience, complete turnkey installation, and dedicated post-sales support for long-term reliability.",
    },
    {
      question: "What is the Network & Infrastructure System Integration?",
      answer:
        "Structured LAN/WAN cabling, fibre backbones, active switching, and server infrastructure designed for scalable high-speed communications.",
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left Side: Header & Graphic Mockup */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold text-sky-700 uppercase tracking-widest border border-sky-200">
              <Shield className="size-3.5" />
              <span>FAQ</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Frequently Asked <br />
              <span className="text-sky-600">Questions</span>
            </h2>

            {/* Graphic Card Mockup */}
            <div className="mt-8 overflow-hidden rounded-3xl bg-white p-4 shadow-xl border border-slate-200/80">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950 h-56 sm:h-64">
                <img
                  src={eventImage.url}
                  alt="Security engineer reviewing FAQ"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Frequently Asked Questions
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-xl shadow-sky-500/20 p-6"
                      : "bg-white text-slate-900 border border-slate-200/80 p-6 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-base sm:text-lg focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-transform ${
                        isOpen ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-sky-50 font-normal">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
=======
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site-shell";
import { capabilities, industries, partners } from "@/lib/site-data";
import eventImage from "@/assets/about-image-1.jpg.asset.json";
import cctvImage from "@/assets/gallery-2.jpg.asset.json";
import aboutImage from "@/assets/about-image-3.jpg.asset.json";
import teamImage from "@/assets/about-image-2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Jay Electronics | Security & Telecom Solutions" },
    { name: "description", content: "Jay Electronics delivers CCTV, networking, EPABX, audio visual and telecom infrastructure solutions from Sangli since 1989." },
    { property: "og:title", content: "Jay Electronics | Security & Telecom Solutions" },
    { property: "og:description", content: "Integrated security, communication and infrastructure engineering since 1989." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: HomePage,
});

const slides = [
  { image: eventImage.url, alt: "Jay Electronics engineering professional at work", eyebrow: "Engineering since 1989", title: "Technology infrastructure, delivered with accountability.", description: "One experienced partner for surveillance, communications, networking and integrated infrastructure." },
  { image: cctvImage.url, alt: "Digital security and surveillance technology", eyebrow: "Integrated security", title: "Clear oversight. Connected systems. Confident operations.", description: "Purpose-built CCTV, fire security, access and network solutions for demanding environments." },
];

function HomePage() {
  return <><HeroSlider /><Stats /><About /><Services /><Brands /><Industries /><Team /></>;
}

function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500); return () => window.clearInterval(timer); }, []);
  const slide = slides[active] ?? slides[0];
  if (!slide) return null;
  return <section className="relative min-h-[610px] overflow-hidden bg-brand-navy sm:min-h-[680px]">
    {slides.map((item, index) => <img key={item.image} src={item.image} alt={item.alt} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${active === index ? "opacity-100" : "opacity-0"}`} />)}
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative mx-auto flex min-h-[610px] max-w-7xl items-end px-4 pb-20 pt-20 sm:min-h-[680px] sm:px-6 sm:pb-24 lg:px-8">
      <div className="max-w-3xl text-primary-foreground">
        <p className="eyebrow text-brand-cyan">{slide.eyebrow}</p>
        <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">{slide.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg">{slide.description}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/services">Explore Capabilities <ArrowRight /></Link></Button><Button asChild size="lg" variant="light"><Link to="/about">Company Profile</Link></Button></div>
      </div>
    </div>
    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => setActive((active - 1 + slides.length) % slides.length)} aria-label="Previous slide"><ChevronLeft /></Button>
      {slides.map((item, index) => <button key={item.title} aria-label={`Show slide ${index + 1}`} onClick={() => setActive(index)} className={`h-1.5 transition-all ${active === index ? "w-8 bg-primary" : "w-3 bg-primary-foreground/50"}`} />)}
      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => setActive((active + 1) % slides.length)} aria-label="Next slide"><ChevronRight /></Button>
    </div>
  </section>;
}

function Stats() { return <section className="border-b border-border bg-secondary"><div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">{[
  ["1989", "Established"], ["35+", "Years of experience"], ["Thousands", "Successful installations"], ["12", "Solution categories"],
].map(([value,label]) => <div key={label} className="border-border px-3 py-8 text-center odd:border-r lg:border-r lg:last:border-r-0"><strong className="block text-3xl font-extrabold text-brand-navy sm:text-4xl">{value}</strong><span className="mt-2 block text-xs font-bold uppercase text-muted-foreground">{label}</span></div>)}</div></section>; }

function About() { return <section className="section"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div className="relative"><img src={aboutImage.url} alt="Technology professional working with security systems" className="aspect-[4/3] w-full object-cover" /><div className="absolute -bottom-5 right-5 bg-primary px-5 py-4 text-primary-foreground shadow-lg"><strong className="text-2xl">35+</strong><span className="ml-2 text-xs font-bold uppercase">years</span></div></div><div><SectionHeading eyebrow="About us" title="An engineering foundation built over three decades." /><p className="mt-6 leading-7 text-muted-foreground">Founded in 1989 by an Electronics & Telecom engineering undergraduate, Jay Electronics has grown through practical experience, technical discipline and thousands of successful installations.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Telecommunications", "Electronic security", "CCTV & networking", "EPABX / IP-PBX", "Audio / video", "Infrastructure projects"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="size-4 text-primary" />{item}</div>)}</div><Button asChild variant="navy" className="mt-8"><Link to="/about">Discover our story <ArrowRight /></Link></Button></div></div></section>; }

function Services() { return <section className="section bg-secondary"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="What we deliver" title="Integrated technology capabilities" description="Consultation, design, installation and support—coordinated through one accountable team." /><Button asChild variant="outline"><Link to="/services">View all services <ArrowRight /></Link></Button></div><div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(({title,description,icon:Icon}, index) => <article key={title} className="group bg-card p-6 transition-colors hover:bg-background"><div className="flex items-start justify-between"><Icon className="size-7 text-brand-blue" /><span className="text-xs font-bold text-muted-foreground">{String(index+1).padStart(2,"0")}</span></div><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p></article>)}</div></div></section>; }

function Brands() { return <section className="section-sm border-y border-border"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Technology brands" title="Proven systems from established manufacturers" /><div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">{partners.map((brand) => <div key={brand} className="grid min-h-24 place-items-center bg-background px-4 text-center text-sm font-extrabold text-brand-navy grayscale transition hover:text-primary hover:grayscale-0">{brand}</div>)}</div></div></section>; }

function Industries() { return <section className="section bg-brand-navy"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Industries" title="Built for environments where reliability matters" description="Experience across public service, care, education, industry and enterprise." light /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map(({title,description,icon:Icon}) => <article key={title} className="border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6 text-primary-foreground"><Icon className="size-7 text-brand-cyan"/><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/65">{description}</p></article>)}</div></div></section>; }

function Team() { return <section className="section"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><SectionHeading eyebrow="Our team" title="Technical people who stay accountable from design to handover." /><p className="mt-5 leading-7 text-muted-foreground">Our multidisciplinary team brings electronics, telecom, security and field implementation experience together—supporting each engagement through planning, commissioning and ongoing service.</p><div className="mt-7 flex items-center gap-4 border-l-2 border-primary pl-5"><Users className="size-8 text-brand-blue"/><p className="text-sm font-semibold">Engineering, installation and support working as one delivery team.</p></div></div><img src={teamImage.url} alt="Technology specialist working at a computer" className="aspect-[4/3] w-full object-cover" /></div></section>; }
>>>>>>> 60b13bed1fe2f90978c40af09d9a96d43e85bf50
