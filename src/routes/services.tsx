import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  Cable,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Fingerprint,
  Flame,
  GitFork,
  Headphones,
  Home,
  MapPin,
  Network,
  Pause,
  PhoneCall,
  Play,
  ShieldCheck,
  Tv,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAdminStore } from "@/lib/admin-store";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Select Technology Architecture | Jay Electronics" },
      {
        name: "description",
        content:
          "Enterprise CCTV surveillance, fiber optic networking, access control biometrics, video door phones, fire alarm systems, and 24/7 AMC services by Jay Electronics Pvt Ltd.",
      },
      { property: "og:title", content: "Technology Architecture | Jay Electronics" },
      {
        property: "og:description",
        content:
          "Integrated security, connectivity and communication solutions engineered for enterprise, public sector, and industrial facilities.",
      },
    ],
  }),
  component: SolutionsPage,
});

interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: LucideIcon;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  partnerBrands: string[];
  image: string;
}

const DEFAULT_SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "cctv",
    slug: "cctv-surveillance",
    title: "CCTV Surveillance",
    category: "ELECTRONIC SECURITY",
    icon: Camera,
    tagline: "AI-Powered Vision & Command Center Matrix",
    shortDesc:
      "AI-enabled IP surveillance, thermal perimeter detection, central multi-site NVR arrays, and integrated municipal command centers.",
    fullDesc:
      "JEPL delivers high-definition optical surveillance engineered for harsh industrial environments, smart city crossroads, and high-security financial vaults. From 4K PTZ tracking and Starlight low-light clarity to Automatic Number Plate Recognition (ANPR) and centralized video analytics servers, our architectures guarantee uninterrupted video telemetry with RAID storage failovers.",
    features: [
      "Edge AI Deep Learning Object Classification (Human, Vehicle, Animal)",
      "High-throughput Central NVRs & Redundant Storage SANs (up to 180 days retention)",
      "Thermal perimeter tripwires for wide industrial campuses and power substations",
      "Optical PTZ cameras with 45x zoom and laser-guided IR illumination (500m)",
      "Multi-site command center software (CMS/VMS) with video wall matrix integration",
    ],
    specs: [
      { label: "Video Resolution", value: "4MP, 4K UHD, 12MP Ultra-Panoramic" },
      { label: "Compression", value: "Smart H.265+ / H.264 High Profile" },
      { label: "Ingress Protection", value: "IP67 Weatherproof, IK10 Vandal-Proof" },
      { label: "Analytics Support", value: "ANPR, Face Match, Line Cross, Loitering, Heatmaps" },
    ],
    applications: [
      "Smart Cities & Traffic Police",
      "Industrial MIDC Plants",
      "Hospitals & Medical Hubs",
      "Banks & Currency Chests",
      "Gated Real Estate Societies",
    ],
    image: "/service-cctv.png",
    partnerBrands: ["CP PLUS", "Dahua", "Hikvision", "Honeywell", "Bosch"],
  },
  {
    id: "networking",
    slug: "networking-infrastructure",
    title: "Networking Infrastructure",
    category: "DATA & TELEPHONY",
    icon: Network,
    tagline: "High-Density Campus Backbone & Core Switching",
    shortDesc:
      "Structured Cat6A/Fiber optic backbone, core Layer-3 switching, unified enterprise Wi-Fi 6 meshing, and server rack management.",
    fullDesc:
      "Modern enterprises depend on zero-latency, fault-tolerant networks. JEPL plans and executes enterprise-grade campus Local Area Networks (LAN), Wide Area Networks (WAN), and Software-Defined Networks (SDN). We deploy enterprise Layer-2/Layer-3 PoE+ managed switches, core routing stacks, Fluke-certified structured cabling, and dense Wi-Fi 6 access point arrays.",
    features: [
      "Layer-3 Gigabit & 10G/40G core routing switches with VRRP redundancy",
      "High-density server racks with intelligent PDU and thermal airflow containment",
      "Unified enterprise Wi-Fi 6/6E with seamless roaming and guest captive portals",
      "Hardware firewalls and intrusion prevention systems (UTM/NGFW)",
      "100% Fluke-tested patch cord and Cat6A channel certification",
    ],
    specs: [
      { label: "Switch Backplane", value: "Up to 2.4 Tbps Core Switching Throughput" },
      { label: "Cabling Standard", value: "TIA/EIA-568-C.2 Cat6 / Cat6A Shielded" },
      { label: "PoE Capabilities", value: "802.3at / 802.3bt Ultra PoE (up to 90W/port)" },
      { label: "Uptime SLA", value: "99.99% Hardware Reliability" },
    ],
    applications: [
      "Corporate Headquarters",
      "Colleges & Universities",
      "Automotive & Foundry Works",
      "Data Centers & Server Rooms",
      "Retail Chains",
    ],
    image: "/service-network.png",
    partnerBrands: ["Cisco", "TP-Link", "Netgear", "Dell EMC", "CommScope"],
  },
  {
    id: "access-control",
    slug: "access-control",
    title: "Access Control Systems",
    category: "BIOMETRICS & ACCESS",
    icon: Fingerprint,
    tagline: "Contactless Biometrics & Physical Barrier Integration",
    shortDesc:
      "Facial recognition biometrics, RFID turnstiles, multi-door controllers, boom barriers, and automated visitor pass management.",
    fullDesc:
      "Control physical access with millisecond biometric precision. JEPL designs comprehensive entrance control architectures featuring contactless face recognition, palm vein scanners, anti-passback turnstiles, optical flap barriers, automated toll-grade boom barriers, and automated RFID parking management systems integrated directly with enterprise HRMS & payroll software.",
    features: [
      "Contactless biometric facial recognition (<0.2s verification with mask detection)",
      "Heavy-duty stainless steel tripod turnstiles, flap barriers, and full-height gates",
      "Multi-door TCP/IP and RS485 controllers with battery backup fail-safes",
      "Automatic vehicle boom barriers with FASTag / long-range RFID readers",
      "Centralized cloud/local HRMS payroll sync with real-time shift reporting",
    ],
    specs: [
      { label: "User Capacity", value: "Up to 50,000 Faces / 100,000 RFID Cards" },
      { label: "Door Controllers", value: "1, 2, 4, 8 Door Network Controller Panels" },
      { label: "Emergency Override", value: "Fire Alarm Auto-Release Relay Interlock" },
      { label: "Enclosure Rating", value: "SUS304 Stainless Steel" },
    ],
    applications: [
      "Cleanrooms & Pharma Laboratories",
      "Factory Turnstile Entrances",
      "Corporate Boardrooms & Server Rooms",
      "Gated Luxury Residential Societies",
      "Educational Exam Centers",
    ],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000",
    partnerBrands: ["Matrix Comsec", "eSSL", "Hikvision", "ZKTeco", "Honeywell"],
  },
  {
    id: "vdp",
    slug: "video-door-phones",
    title: "Video Door Phones",
    category: "INTERCOM & SECURITY",
    icon: Home,
    tagline: "Multi-Tenant IP Intercoms & Smart Residential Security",
    shortDesc:
      "IP-based multi-apartment intercom grids, gated society security consoles, and standalone smart villa mobile-app unlock systems.",
    fullDesc:
      "Deliver crystal clear audio-visual communication between entrance gates, guard stations, and private residences. JEPL installs SIP-enabled multi-tenant IP intercom systems capable of connecting hundreds of apartments over existing Cat6/Fiber infrastructure, offering mobile app call forwarding, remote gate release, and lift integration.",
    features: [
      'Touchscreen indoor stations (7" & 10") with high-fidelity echo cancellation',
      "Multi-button and digital directory outdoor gate panels with HD night vision",
      "Mobile app call forwarding (receive gate calls and unlock doors from anywhere)",
      "Guard security console with direct SOS broadcast and intercom calling",
      "Integration with lift controllers for authorized floor access",
    ],
    specs: [
      { label: "Protocol", value: "Standard SIP 2.0 / TCP/IP" },
      { label: "Display Resolution", value: "1024x600 Capacitive IPS Screen" },
      { label: "Camera Angle", value: "130° Wide Field of View with WDR" },
      { label: "Power Input", value: "Standard PoE IEEE802.3af" },
    ],
    applications: [
      "High-Rise Residential Apartments",
      "Gated Bungalow Schemes",
      "Corporate Executive Suites",
      "Hospital Quarantine Wards",
    ],
    image: "/about-depot.png",
    partnerBrands: ["Hikvision", "Dahua", "Panasonic", "Matrix"],
  },
  {
    id: "fire-alarm",
    slug: "fire-alarm-systems",
    title: "Fire Alarm Systems",
    category: "LIFE SAFETY & COMPLIANCE",
    icon: Flame,
    tagline: "Addressable Fire Detection & Automated Suppression",
    shortDesc:
      "Addressable and conventional optical smoke detection, MCP stations, hooter integration, and automated server-room gas suppression.",
    fullDesc:
      "Protect life and property with certified fire early-warning systems compliant with National Building Code (NBC 2016) and Maharashtra Fire Services norms. JEPL installs intelligent addressable smoke/heat detectors that pinpoint exact alarm zones on graphic software, automatic emergency voice evacuation PA systems, and clean-agent (FM-200 / NOVEC 1230) gas suppression for server rooms.",
    features: [
      "Microprocessor-based addressable fire panels supporting up to 1,000+ points",
      "Intelligent optical smoke, rate-of-rise heat, and multi-sensor detectors",
      "Manual Call Points (MCP), dual-tone strobes, and localized hooters",
      "Clean agent gas flooding systems for server rooms and electrical LT panels",
      "Integration with HVAC smoke dampers and access control emergency unlock",
    ],
    specs: [
      { label: "Standards", value: "EN54 / UL Listed / NBC 2016 Compliant" },
      { label: "Loop Capacity", value: "1 to 8 Loops (127 to 254 devices/loop)" },
      { label: "Standby Power", value: "24-hour backup batteries with auto-charger" },
      { label: "Notification", value: "Auto-SMS / Phone Dialer to Fire Station" },
    ],
    applications: [
      "Hospitals & Intensive Care Units",
      "Commercial Shopping Malls",
      "Pharma Chemical Plants",
      "IT Parks & Server Hubs",
      "Textile Mills",
    ],
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000",
    partnerBrands: ["Honeywell", "Agni", "Schneider", "Ravel", "Bosch"],
  },
  {
    id: "epabx",
    slug: "epabx-and-intercom",
    title: "EPABX & Intercom",
    category: "DATA & TELEPHONY",
    icon: GitFork,
    tagline: "Hybrid IP Telecom & Enterprise Unified Communications",
    shortDesc:
      "Hybrid IP-PBX communication, multi-tenant high-rise intercom networks, VoIP telephony trunks, and call billing reporting suites.",
    fullDesc:
      "Unify voice communications across your organization with JEPL's enterprise telephony solutions. We deploy scalable IP-PBX servers, hybrid analog/digital EPABX systems, SIP trunks, call center IVRs, and integrated hospital nurse-call paging networks that lower communication costs and ensure 100% uptime.",
    features: [
      "Scalable IP-PBX handling 10 to 2,000+ extensions with SIP Trunking",
      "Auto-Attendant multi-level IVR, voice mail to email, and call recording",
      "Multi-building copper and optical inter-building extension ties",
      "Hospital nurse call system integration with emergency code broadcasts",
      "Android/iOS mobile softphone extensions for remote executives",
    ],
    specs: [
      { label: "Trunk Protocols", value: "SIP, PRI E1/T1, Analog CO Lines" },
      { label: "Concurrent Calls", value: "Up to 500 Simultaneous Calls" },
      { label: "Audio Codecs", value: "G.711u/a, G.729, Opus HD Audio" },
      { label: "Redundancy", value: "Dual Hot-Swappable Power & CPU Failover" },
    ],
    applications: [
      "Multispecialty Hospitals",
      "Sugar Mills & Foundries",
      "Banks & Co-operative Credit Societies",
      "Hotels & Resort Campuses",
      "Government Offices",
    ],
    image: "/service-epabx.png",
    partnerBrands: ["Matrix", "Panasonic", "Grandstream", "Avaya", "NEC"],
  },
  {
    id: "fiber",
    slug: "fiber-optic-solutions",
    title: "Fiber Optic Solutions",
    category: "OPTICAL BACKBONE",
    icon: Cable,
    tagline: "Single-Mode OS2 Armored Fiber Rings & Splicing",
    shortDesc:
      "Long-distance optical fiber backbones, underground HDPE ducting, core alignment fusion splicing, and OTDR attenuation testing.",
    fullDesc:
      "Deploy ultra-high-speed EMI-immune optical fiber networks for large campuses, industrial plants, and smart cities. JEPL's certified fiber technicians execute trenching, HDPE conduit pulling, 10G/40G single-mode OS2 & multimode OM3/OM4 fusion splicing, LIU rack termination, and complete Fluke OTDR trace reporting.",
    features: [
      "Single-mode OS2 armored fiber and multimode OM3/OM4 fiber cable installation",
      "Core alignment fusion splicing with optical loss <0.02dB per splice joint",
      "Fiber Distribution Hubs (FDH), LIUs, and high-density optical patch bays",
      "Direct-buried armored fiber and aerial figure-8 self-supporting layouts",
      "Bidirectional OTDR testing and optical power budget certification",
    ],
    specs: [
      { label: "Fiber Cable Standard", value: "OS2 Single-Mode / OM3, OM4 Multi-Mode" },
      { label: "Splice Loss", value: "Sub-0.02dB Average Splice Attenuation" },
      { label: "Throughput Capacity", value: "10 Gbps / 40 Gbps / 100 Gbps Optics" },
      { label: "Testing Standard", value: "Fluke DSX-8000 OTDR PDF Certification" },
    ],
    applications: [
      "MIDC Heavy Industrial Foundries",
      "Smart City Ring Backbones",
      "Solar Power Plants",
      "University Campus Distribution",
      "Hospital Imaging Loops",
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000",
    partnerBrands: ["CommScope", "Sterlite", "Finolex", "D-Link", "Schneider"],
  },
  {
    id: "led",
    slug: "led-video-walls",
    title: "LED Video Walls & Displays",
    category: "DISPLAY & NOC",
    icon: Tv,
    tagline: "Fine-Pitch Direct View LED & Command Center Walls",
    shortDesc:
      "Fine-pitch indoor P1.25/P1.8 LED screens, outdoor high-brightness advertising billboards, and 24/7 NOC video wall matrices.",
    fullDesc:
      "Transform command centers, corporate boardrooms, and public auditoriums with vibrant direct-view LED video walls. JEPL delivers fine-pitch LED display matrices featuring ultra-narrow bezels, P1.25 to P2.5 indoor resolutions, Dante audio integration, and multi-window video controllers capable of displaying dozens of camera feeds simultaneously.",
    features: [
      "Fine-pitch P1.25, P1.5, P1.86 & P2.5 indoor direct-view LED video walls",
      "Die-cast aluminum lightweight cabinets with front-service magnetic access",
      "Multi-input 4K video wall processors (HDMI, DisplayPort, IP Stream)",
      "High-brightness outdoor LED billboards (up to 6,500 nits) with IP65 rating",
      "Redundant receiving card and power supply failovers for 24/7 NOCs",
    ],
    specs: [
      { label: "Pixel Pitch", value: "P1.25, P1.53, P1.86, P2.5 Indoor / P3.9 Outdoor" },
      { label: "Brightness", value: "600 to 1,000 Nits (Indoor) / 6,500 Nits (Outdoor)" },
      { label: "Refresh Rate", value: "3,840 Hz Ultra-High Refresh Rate" },
      { label: "Service Access", value: "100% Front-Serviceable Magnetic Modules" },
    ],
    applications: [
      "Municipal Command & Control NOCs",
      "Corporate Boardrooms",
      "Sugar Mill Executive Conference Rooms",
      "Auditoriums & Places of Worship",
      "Public Railway & Bus Hubs",
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000",
    partnerBrands: ["Samsung", "LG", "Absen", "Hikvision", "Unilumin"],
  },
  {
    id: "av",
    slug: "audio-visual-solutions",
    title: "Audio Visual Solutions",
    category: "MEDIA & COLLABORATION",
    icon: Volume2,
    tagline: "Boardroom Automation & Professional Acoustic PA",
    shortDesc:
      "Interactive 4K flat panels, motorized projection systems, ceiling array microphones, and multi-zone public address audio.",
    fullDesc:
      "Equip modern meeting rooms, auditoriums, and institutional halls with seamless audio-visual infrastructure. JEPL installs 4K interactive flat panels, motorized laser projectors, Dante network audio, wireless presentation gateways, ceiling array beamforming microphones, and multi-zone background music PA systems.",
    features: [
      'Touchscreen 4K displays (65", 75", 86") with dual OS (Android & Windows)',
      "Ceiling array microphones with acoustic echo cancellation & noise suppression",
      "Dante IP-based audio distribution with multi-zone digital signal processors (DSP)",
      "Wireless BYOD presentation gateways for instant laptop/mobile screen sharing",
      "Motorized projector lifts, tensioned acoustic screens, and smart lighting controls",
    ],
    specs: [
      { label: "Display Tech", value: "4K UHD D-LED Touch (20-Point Touch)" },
      { label: "Audio Protocol", value: "Dante IP Audio / 100V Line PA Evacuation" },
      { label: "Control System", value: "Wall Touch Panel / Tablet App Control" },
      { label: "Microphone Coverage", value: "360° Beamforming Ceiling Arrays" },
    ],
    applications: [
      "Executive Boardrooms",
      "University Lecture Halls",
      "Courtroom Audio-Visual Recording",
      "Hotel Banquet Halls",
      "Public Evacuation PA",
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000",
    partnerBrands: ["Samsung", "BenQ", "JBL", "Bosch", "Yamaha"],
  },
  {
    id: "amc",
    slug: "annual-maintenance-contracts",
    title: "Annual Maintenance Contracts (AMC)",
    category: "SLA & SUPPORT",
    icon: Headphones,
    tagline: "24/7 Field Van Dispatch & Guaranteed SLA Uptime",
    shortDesc:
      "Comprehensive and non-comprehensive AMC maintenance for CCTV, networking, fire alarms, and biometrics with guaranteed 4-hour van dispatch.",
    fullDesc:
      "Ensure zero system downtime with JEPL's institutional Annual Maintenance Contracts (AMC). Backed by certified diagnostic instruments, resident field engineers, and dedicated spare parts depots in Sangli, Kolhapur, and Pune, we provide quarterly preventive audits, 4-hour emergency van dispatch, and 99.8% SLA uptime guarantees.",
    features: [
      "Guaranteed 4-hour emergency field technician van dispatch across Western Maharashtra",
      "Dedicated standby spare inventory (cameras, switches, power supplies, fiber patch cords)",
      "Quarterly preventive maintenance audits including lens cleaning & optical loss testing",
      "Firmware updates, database backup, and statutory RBI/NABH compliance reports",
      "24/7 dedicated helpline desk and online ticketing portal for instant logging",
    ],
    specs: [
      { label: "Response SLA", value: "4-Hour Emergency Field Dispatch" },
      { label: "Contract Types", value: "Comprehensive (Parts + Labor) & Non-Comprehensive" },
      { label: "Audits Included", value: "4 Mandatory Quarterly Preventive Audits/Year" },
      { label: "Coverage Region", value: "Sangli, Kolhapur, Satara, Pune, Belgaum" },
    ],
    applications: [
      "Co-operative Bank Branch Networks",
      "Foundry Industrial Parks",
      "Multispecialty Hospitals",
      "Municipal Smart City Networks",
      "Residential Apartment Societies",
    ],
    image: "/about-depot.png",
    partnerBrands: ["JEPL Care", "CP PLUS", "Cisco", "Honeywell", "Matrix"],
  },
];

const getIconForSolution = (category: string, id: string): LucideIcon => {
  const cat = (category || "").toUpperCase();
  const lowerId = (id || "").toLowerCase();
  if (lowerId.includes("cctv") || cat.includes("SECURITY")) return Camera;
  if (lowerId.includes("networking") || cat.includes("DATA")) return Network;
  if (lowerId.includes("access") || cat.includes("BIOMETRIC")) return Fingerprint;
  if (lowerId.includes("vdp") || lowerId.includes("door") || cat.includes("INTERCOM")) return Home;
  if (lowerId.includes("fire") || cat.includes("SAFETY")) return Flame;
  if (lowerId.includes("epabx") || lowerId.includes("telecom")) return GitFork;
  if (lowerId.includes("fiber") || cat.includes("OPTICAL")) return Cable;
  if (lowerId.includes("led") || cat.includes("DISPLAY")) return Tv;
  if (lowerId.includes("av") || cat.includes("MEDIA")) return Volume2;
  if (lowerId.includes("amc") || cat.includes("SLA") || cat.includes("SUPPORT")) return Headphones;
  return Camera;
};

export function SolutionsPage() {
  const store = useAdminStore();
  const solutionsData = store.getSolutions();
  const [selectedSolutionId, setSelectedSolutionId] = useState(solutionsData[0]?.id || "cctv");
  const [activeTab, setActiveTab] = useState<string>("blueprint");
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const mobileModulesRef = useRef<HTMLDivElement>(null);

  // Automatic auto-play slider effect (Mobile only <1024px; Desktop is 100% manual selection)
  useEffect(() => {
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    if (isDesktop || !isAutoPlayActive || isHoverPaused || !solutionsData || solutionsData.length === 0) return;

    const timer = setInterval(() => {
      setSelectedSolutionId((prevId) => {
        const currentIndex = solutionsData.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % solutionsData.length;
        const nextSolution = solutionsData[nextIndex];

        if (mobileModulesRef.current && nextSolution) {
          const container = mobileModulesRef.current;
          const activeEl = container.children[nextIndex] as HTMLElement;
          if (activeEl) {
            const targetLeft = activeEl.offsetLeft - (container.clientWidth - activeEl.clientWidth) / 2;
            container.scrollTo({
              left: Math.max(0, targetLeft),
              behavior: "smooth",
            });
          }
        }

        return nextSolution ? nextSolution.id : prevId;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlayActive, isHoverPaused, solutionsData]);

  const selectedSolution =
    solutionsData.find((s) => s.id === selectedSolutionId) || solutionsData[0] || {
      id: "fallback",
      slug: "solutions",
      title: "Solutions Architecture",
      category: "ELECTRONIC SECURITY",
      tagline: "Enterprise Security Solutions",
      shortDesc: "Comprehensive turnkey security and networking solutions.",
      fullDesc: "Comprehensive turnkey security and networking solutions.",
      features: [],
      specs: [],
      applications: [],
      partnerBrands: ["CP PLUS", "Cisco", "Honeywell"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000",
    };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 font-sans antialiased min-h-screen py-6 sm:py-10 relative overflow-hidden">
      {/* Subtle Mesh Glow Backgrounds */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 relative z-10">
        {/* SUB-HEADER HUB BADGE */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 sm:px-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-900">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-wider border border-red-100">
              <MapPin className="size-3 text-red-600" />
              <span>REGIONAL HUBS</span>
            </span>
            <span className="text-slate-900 font-extrabold text-[11px] sm:text-xs">SANGLI | KOLHAPUR | PUNE</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
              <Clock className="size-3.5 text-slate-400 shrink-0" />
              <span>Mon-Sat 9:30 AM - 7:00 PM</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-red-600 font-bold">
              <PhoneCall className="size-3.5 shrink-0" />
              <span>Direct Support Active</span>
            </div>
          </div>
        </div>

        {/* PAGE HEADER BANNER */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm space-y-2.5 sm:space-y-3 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] sm:text-[10.5px] font-black uppercase tracking-widest border border-red-100">
            <Building2 className="size-3.5 text-red-600" />
            <span>ENTERPRISE ARCHITECTURE BLUEPRINTS</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Turnkey Technology <span className="text-red-600">Solutions</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-3xl">
            Select a technology architecture from the menu to inspect detailed engineering blueprints, hardware specifications, statutory standards, and certified deployment OEM brand partners.
          </p>
        </div>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT SIDEBAR MENU */}
          <div
            className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-3.5 sm:p-5 shadow-sm space-y-3 lg:sticky lg:top-24"
            onMouseEnter={() => setIsHoverPaused(true)}
            onMouseLeave={() => setIsHoverPaused(false)}
            onTouchStart={() => setIsHoverPaused(true)}
            onTouchEnd={() => setIsHoverPaused(false)}
          >
            <div className="flex items-center justify-between px-2 pt-1 pb-1 gap-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                SELECT TECHNOLOGY ARCHITECTURE
              </span>

              <span className="text-[10px] font-black bg-red-50 text-red-600 px-2.5 py-0.5 rounded-full border border-red-100">
                {solutionsData.length} MODULES
              </span>
            </div>

            {/* Desktop Vertical Menu */}
            <div className="hidden lg:block space-y-2">
              {solutionsData.map((item) => {
                const Icon = getIconForSolution(item.category, item.id);
                const isSelected = item.id === selectedSolutionId;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedSolutionId(item.id);
                      setActiveTab("blueprint");
                    }}
                    className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${isSelected
                      ? "bg-slate-900 text-white shadow-md border border-slate-800"
                      : "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80"
                      }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 rounded-r-full" />
                    )}

                    <div className="flex items-center gap-3.5 min-w-0 pl-1">
                      <div
                        className={`size-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isSelected
                          ? "bg-red-600 text-white"
                          : "bg-red-50 text-red-600"
                          }`}
                      >
                        <Icon className="size-5" />
                      </div>

                      <div className="min-w-0">
                        <div className={`text-[10px] font-extrabold uppercase tracking-wider ${isSelected ? "text-slate-400" : "text-slate-400"}`}>
                          {item.category}
                        </div>
                        <div
                          className={`truncate text-sm sm:text-base font-black tracking-tight ${isSelected ? "text-white" : "text-slate-900"
                            }`}
                        >
                          {item.title}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`size-4 shrink-0 transition-transform ${isSelected ? "text-red-500 translate-x-1" : "text-slate-400"
                        }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Mobile Horizontal Module Slider */}
            <div
              ref={mobileModulesRef}
              className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-2.5 pb-2 pt-1 -mx-1 px-1 select-none scrollbar-none scroll-smooth"
            >
              {solutionsData.map((item, idx) => {
                const Icon = getIconForSolution(item.category, item.id);
                const isSelected = item.id === selectedSolutionId;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedSolutionId(item.id);
                      setActiveTab("blueprint");
                      if (mobileModulesRef.current) {
                        const container = mobileModulesRef.current;
                        const activeEl = container.children[idx] as HTMLElement;
                        if (activeEl) {
                          const targetLeft = activeEl.offsetLeft - (container.clientWidth - activeEl.clientWidth) / 2;
                          container.scrollTo({
                            left: Math.max(0, targetLeft),
                            behavior: "smooth",
                          });
                        }
                      }
                    }}
                    className={`flex-none snap-center flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl transition-all duration-300 cursor-pointer text-left border ${isSelected
                      ? "bg-slate-900 text-white shadow-md border-slate-800 ring-2 ring-red-600/30"
                      : "bg-white text-slate-800 border-slate-200/80 shadow-2xs hover:bg-slate-50"
                      }`}
                  >
                    <div
                      className={`size-8 rounded-xl flex items-center justify-center shrink-0 ${isSelected
                        ? "bg-red-600 text-white"
                        : "bg-red-50 text-red-600"
                        }`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className={`text-[9px] font-extrabold uppercase tracking-wider ${isSelected ? "text-slate-400" : "text-slate-400"}`}>
                        {item.category}
                      </div>
                      <div className={`text-xs font-black tracking-tight whitespace-nowrap ${isSelected ? "text-white" : "text-slate-900"}`}>
                        {item.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT DISPLAY: ACTIVE SOLUTION DETAILS */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
            {/* Top Banner */}
            <div className="relative h-52 sm:h-76 w-full bg-slate-950 overflow-hidden">
              <img
                src={selectedSolution.image}
                alt={selectedSolution.title}
                className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 space-y-1.5 sm:space-y-2 text-white">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-red-600 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-md">
                  <ShieldCheck className="size-3" />
                  <span>{selectedSolution.category}</span>
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                  {selectedSolution.title}
                </h2>
                <p className="text-[11px] sm:text-sm text-red-400 font-semibold tracking-wide">
                  {selectedSolution.tagline}
                </p>
              </div>
            </div>

            {/* Tabs Header Bar */}
            <div className="flex items-stretch border-b border-slate-200 px-1 sm:px-6 bg-slate-50 overflow-x-auto scrollbar-none w-full">
              {[
                { id: "blueprint", label: "System Architecture" },
                { id: "specs", label: "Hardware & Specs" },
                { id: "brands", label: "Deployments & Brands" },
                ...(selectedSolution.customTabs || []).map((ct) => ({
                  id: ct.id,
                  label: ct.title,
                })),
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 sm:flex-initial flex items-center justify-center text-center py-2.5 sm:py-4 px-1.5 min-[400px]:px-3 sm:px-6 text-[11px] sm:text-sm font-extrabold border-b-2 transition-all cursor-pointer whitespace-normal sm:whitespace-nowrap leading-tight ${isActive
                      ? "border-red-600 text-red-600 font-black bg-white"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Active Tab Body */}
            <div className="p-4 sm:p-8 space-y-5 sm:space-y-6">
              {activeTab === "blueprint" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                      ENGINEERING BLUEPRINT &amp; OVERVIEW
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                      {selectedSolution.fullDesc}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-[11px] font-black uppercase tracking-widest text-red-600">
                      KEY TECHNICAL CAPABILITIES
                    </div>
                    <div className="space-y-2.5">
                      {(selectedSolution.features || []).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200/80 p-3.5 rounded-2xl shadow-xs">
                          <CheckCircle2 className="size-4 shrink-0 text-red-600 mt-0.5" />
                          <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                      RECOMMENDED INSTITUTIONAL APPLICATIONS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(selectedSolution.applications || []).map((app: string) => (
                        <span
                          key={app}
                          className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-xs hover:border-red-200 hover:text-red-600 transition-colors"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="space-y-6">
                  <div className="text-[11px] font-black uppercase tracking-widest text-red-600">
                    HARDWARE SPECIFICATIONS &amp; RATINGS
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(selectedSolution.specs || []).map((spec: { label: string; value: string }, idx: number) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5 border-l-4 border-l-red-600">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {spec.label}
                        </div>
                        <div className="text-xs sm:text-sm font-black text-slate-900">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-2 border border-slate-800 shadow-md">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
                      <Award className="size-4 text-red-500" />
                      <span>STATUTORY STANDARDS &amp; COMPLIANCE</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      All hardware deployed under JEPL {selectedSolution.title} meets Maharashtra state PWD norms, NBC 2016 fire standards, RBI physical security circulars, and OEM warranty standards.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "brands" && (
                <div className="space-y-6">
                  <div className="text-[11px] font-black uppercase tracking-widest text-red-600">
                    CERTIFIED OEM BRAND PARTNERS
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {(selectedSolution.partnerBrands || []).map((brand) => (
                      <div
                        key={brand}
                        className="bg-white border border-slate-200/80 rounded-2xl p-3.5 text-center font-extrabold text-xs sm:text-sm text-slate-800 shadow-xs hover:border-red-600 hover:text-red-600 transition-colors w-full"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>

                  <div className="bg-red-50/60 border border-red-100 rounded-2xl p-5 space-y-2">
                    <div className="text-xs font-bold text-red-600">
                      TURNKEY SURVEY &amp; BOQ PREPARATION
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      Need a formal BOQ estimate or site survey for your facility? Our senior engineers prepare detailed technical proposals with CAD layout schematics.
                    </p>
                  </div>
                </div>
              )}

              {/* DYNAMIC CUSTOM TAB CONTENT RENDERER */}
              {(() => {
                const customTab = (selectedSolution.customTabs || []).find((t) => t.id === activeTab);
                if (!customTab) return null;
                const points = (customTab.content || "")
                  .split("\n")
                  .map((p) => p.trim())
                  .filter(Boolean);

                return (
                  <div className="space-y-6 animate-in fade-in">
                    <div className="text-[11px] font-black uppercase tracking-widest text-red-600">
                      {customTab.title}
                    </div>

                    {points.length > 0 ? (
                      <div className="space-y-2.5">
                        {points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200/80 p-4 rounded-2xl shadow-2xs">
                            <CheckCircle2 className="size-4 shrink-0 text-red-600 mt-0.5" />
                            <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm text-slate-600 italic bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                        No details provided for this tab yet.
                      </p>
                    )}
                  </div>
                );
              })()}

              {/* Action Bar */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-semibold text-slate-500 hidden sm:block">
                  Need custom BOQ specs or tender documentation?
                </div>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-wide flex items-center justify-center gap-2 transition-all duration-200 group cursor-pointer shadow-md shadow-red-600/20"
                >
                  <span>Request Engineering BOQ &amp; Survey</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
