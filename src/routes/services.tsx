import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cable,
  Camera,
  CheckCircle2,
  ChevronRight,
  Fingerprint,
  Flame,
  GitFork,
  Headphones,
  Home,
  Network,
  Tv,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

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

const SOLUTIONS_DATA: SolutionItem[] = [
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
      'Interactive 4K touch displays (65", 75", 86") with dual OS (Android & Windows)',
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

export function SolutionsPage() {
  const [selectedSolutionId, setSelectedSolutionId] = useState("cctv");
  const [activeTab, setActiveTab] = useState<"blueprint" | "specs" | "brands">("blueprint");

  const selectedSolution =
    SOLUTIONS_DATA.find((s) => s.id === selectedSolutionId) || SOLUTIONS_DATA[0]!;

  return (
    <div className="bg-[#F8FAFC] text-slate-800 font-sans antialiased min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* =========================================================================
           TOP SUB-HEADER HUB BADGE & BREADCRUMB
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-slate-200/90 rounded-2xl p-4 sm:px-6 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <span className="text-sky-600 font-black">📍 HUBS:</span>
            <span>SANGLI | KOLHAPUR | PUNE</span>
          </div>
          <div className="text-xs font-medium text-slate-500">
            ⏱ Mon-Sat 9:30 AM - 7:00 PM
          </div>
        </div>

        {/* =========================================================================
           PAGE HEADER TITLE
           ========================================================================= */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <Link to="/" className="text-slate-500 hover:text-slate-800">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-sky-600 font-bold">SOLUTIONS</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Turnkey Technology Solutions
          </h1>
          <p className="text-slate-600 text-xs sm:text-base max-w-3xl font-normal leading-relaxed">
            Select a technology architecture from the menu to inspect detailed engineering blueprints, hardware specifications, and certified deployment brands.
          </p>
        </div>

        {/* =========================================================================
           MAIN 2-COLUMN LAYOUT (LEFT SIDEBAR MENU + RIGHT CONTENT DISPLAY)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* 1. LEFT SIDEBAR MENU: SELECT TECHNOLOGY ARCHITECTURE */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-3.5 sm:p-5 shadow-xs space-y-3 lg:sticky lg:top-24">
            <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-3 pt-2">
              SELECT TECHNOLOGY ARCHITECTURE
            </div>

            <div className="space-y-1.5 max-h-[420px] sm:max-h-none overflow-y-auto pr-1">
              {SOLUTIONS_DATA.map((item) => {
                const Icon = item.icon;
                const isSelected = item.id === selectedSolutionId;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedSolutionId(item.id);
                      setActiveTab("blueprint");
                      const displayElem = document.getElementById("solution-details-display");
                      if (displayElem && window.innerWidth < 1024) {
                        displayElem.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className={`w-full flex items-center justify-between p-3 sm:p-4 rounded-2xl text-xs font-extrabold transition-all duration-200 cursor-pointer text-left ${
                      isSelected
                        ? "bg-[#06143D] text-white shadow-md border border-slate-800"
                        : "bg-white hover:bg-slate-50 text-slate-700 border border-transparent hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`size-8.5 sm:size-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-white/15 text-cyan-300"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <Icon className="size-4.5" />
                      </div>
                      <span className="truncate tracking-tight text-xs sm:text-base font-bold">
                        {item.title}
                      </span>
                    </div>

                    <ChevronRight
                      className={`size-4 shrink-0 transition-transform ${
                        isSelected ? "text-cyan-400 translate-x-0.5" : "text-slate-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. RIGHT DISPLAY: ACTIVE SOLUTION DETAILS */}
          <div id="solution-details-display" className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between scroll-mt-24">
            
            {/* Top Image Banner & Hero Header */}
            <div className="relative h-56 sm:h-72 w-full bg-slate-900 overflow-hidden">
              <img
                src={selectedSolution.image}
                alt={selectedSolution.title}
                className="w-full h-full object-cover opacity-60"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06143D] via-[#06143D]/60 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 space-y-1 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-sky-600 to-cyan-500 text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                  {selectedSolution.category}
                </div>
                <h2 className="text-xl sm:text-4xl font-black tracking-tight text-white">
                  {selectedSolution.title}
                </h2>
                <p className="text-xs sm:text-sm text-cyan-300 font-semibold tracking-wide">
                  {selectedSolution.tagline}
                </p>
              </div>
            </div>

            {/* Content Tabs Header Bar */}
            <div className="flex items-center border-b border-slate-200/90 px-3 sm:px-6 bg-slate-50/50 overflow-x-auto">
              {[
                { id: "blueprint", label: "System Architecture" },
                { id: "specs", label: "Hardware & Specs" },
                { id: "brands", label: "Deployments & Brands" },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-3.5 px-3 sm:px-6 text-xs sm:text-sm font-extrabold border-b-2 transition-all cursor-pointer shrink-0 ${
                      isActive
                        ? "border-sky-600 text-sky-600 font-black"
                        : "border-transparent text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Active Tab Body Content */}
            <div className="p-4 sm:p-8 space-y-6">
              {activeTab === "blueprint" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                      ENGINEERING BLUEPRINT
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {selectedSolution.fullDesc}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-[11px] font-black uppercase tracking-widest text-sky-600">
                      KEY TECHNICAL CAPABILITIES
                    </div>
                    <div className="space-y-2.5">
                      {selectedSolution.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200/80 p-3.5 rounded-2xl">
                          <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                          <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                      RECOMMENDED APPLICATIONS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedSolution.applications.map((app) => (
                        <span
                          key={app}
                          className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full"
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
                  <div className="text-[11px] font-black uppercase tracking-widest text-sky-600">
                    HARDWARE SPECIFICATIONS & RATINGS
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedSolution.specs.map((spec, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {spec.label}
                        </div>
                        <div className="text-xs sm:text-sm font-black text-slate-900">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-2 border border-slate-800">
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      STATUTORY STANDARDS & COMPLIANCE
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      All hardware deployed under JEPL {selectedSolution.title} meets Maharashtra state PWD norms, NBC 2016 regulations, and OEM warranty standards.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "brands" && (
                <div className="space-y-6">
                  <div className="text-[11px] font-black uppercase tracking-widest text-sky-600">
                    CERTIFIED OEM BRAND PARTNERS
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedSolution.partnerBrands.map((brand) => (
                      <div
                        key={brand}
                        className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center font-extrabold text-sm text-slate-800 shadow-xs"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>

                  <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-5 space-y-2">
                    <div className="text-xs font-bold text-sky-700">
                      TURNKEY SURVEY & BOQ PREPARATION
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      Need a formal BOQ estimate or site survey for your facility? Our senior engineers prepare detailed technical proposals with CAD layout schematics.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Request BOQ Action Bar */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="text-xs font-semibold text-slate-500 hidden sm:block">
                  Need custom BOQ specs for tenders?
                </div>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 transition duration-200 group cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <span>Request Engineering BOQ & Survey</span>
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
