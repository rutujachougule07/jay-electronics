import { useState, useEffect } from "react";

export type HeroSlide = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  alt: string;
};

export type AboutData = {
  buildingImage: string;
  eyebrow: string;
  heading: string;
  tagline?: string;
  description: string;
  cert1?: string;
  cert2?: string;
  cert3?: string;
  buildingTitle?: string;
  buildingDesc?: string;
  founderEyebrow?: string;
  founderName?: string;
  founderDesignation?: string;
  founderExperience?: string;
  founderDescription?: string;
  founderImage?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  accent: string;
  bio: string;
  isRedRole?: boolean;
};

export type ContactInquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: string;
};

export type CustomTab = {
  id: string;
  title: string;
  content: string;
};

export type SolutionModule = {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs?: { label: string; value: string }[];
  applications?: string[];
  partnerBrands: string[];
  image: string;
  customTabs?: CustomTab[];
};

export type ProjectItemData = {
  id: string;
  categoryTag: string;
  categoryBadge: string;
  location: string;
  scale: string;
  title: string;
  description: string;
  image: string;
  metrics?: { value: string; label: string }[];
  challenge: string;
  solution: string;
  footerBadge: string;
  detailedSpecs?: string[];
};

export type BlogPostData = {
  id: string;
  tag: string;
  readTime?: string;
  title: string;
  description: string;
  takeaway: string;
  date?: string;
  image: string;
  content: string;
};

export type MilestoneItem = {
  id: string;
  milestone: string;
  year: string;
  title: string;
  desc?: string;
  description?: string;
  color?: string;
  icon: string;
  iconName?: string;
};

export type TestingLabItem = {
  id: string;
  title?: string;
  desc?: string;
  toolName: string;
  toolDesc: string;
  icon: string;
  iconName?: string;
};

export type EngineeringCredoData = {
  eyebrow: string;
  quote: string;
  description: string;
  metric1Value: string;
  metric1Label: string;
  metric2Value: string;
  metric2Label: string;
  buttonText: string;
  slaUptime?: string;
  emergencyVanDispatch?: string;
};

export type OfficeHub = {
  id: string;
  badge: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  callLabel: string;
  phoneHref: string;
  image: string;
};

export type FooterSettings = {
  tagline: string;
  newsletterText: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  mapUrl: string;
  copyrightText: string;
};

const DEFAULT_SOLUTIONS_DATA: SolutionModule[] = [
  {
    id: "cctv",
    slug: "cctv-surveillance",
    title: "CCTV Surveillance",
    category: "ELECTRONIC SECURITY",
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


const DEFAULT_PROJECTS_DATA: ProjectItemData[] = [
  {
    id: "smart-city",
    categoryTag: "Government & Municipal",
    categoryBadge: "MUNICIPAL SMART CITY",
    location: "Sangli, Maharashtra",
    scale: "SCALE: 240+ 4K & ANPR CAMERAS • 8X3 VIDEO WALL",
    title: "Smart City Surveillance & Integrated Command Control Center",
    description: "Citywide automated surveillance network with automatic number plate recognition (ANPR).",
    image: "/project-smartcity.png",
    metrics: [
      { value: "240+ Units", label: "CAMERAS DEPLOYED" },
      { value: "42 km", label: "FIBER BACKBONE" },
      { value: "8x3 NOC", label: "VIDEO WALL SCALE" },
      { value: "99.98%", label: "UPTIME SLA" },
    ],
    challenge: "Managing high traffic congestion across key city river bridges and market junctions.",
    solution: "Designed an armored 10Gbps optical fiber ring connecting 68 strategic city junctions directly to Police HQ.",
    footerBadge: "100% Uptime Maintained",
    detailedSpecs: [
      "Armored 10Gbps Optical Fiber Ring Topology across 68 Junctions",
      "Dahua & CP PLUS 4K Starlight PTZ Cameras with 45x Optical Zoom",
      "Automated ANPR & Red Light Violation Detection (RLVD) Software",
      "8x3 Ultra-Narrow Bezel Commercial Display Matrix at Police HQ",
    ],
  },
  {
    id: "industrial-network",
    categoryTag: "Manufacturing & Heavy Industry",
    categoryBadge: "INDUSTRIAL NETWORK",
    location: "Kolhapur MIDC (Shiroli & Gokul Shirgaon)",
    scale: "SCALE: 15 KM ARMORED FIBER • 12 WORKSHOP SHEDS",
    title: "Heavy Industrial Campus Fiber Backhaul & Auto Foundries",
    description: "Armored underground fiber optic ring topology connecting 12 separate foundry workshop sheds.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    metrics: [
      { value: "15 km Armored", label: "FIBER DEPLOYED" },
      { value: "12 Sheds", label: "CONNECTED SHEDS" },
      { value: "10 Gbps Ring", label: "THROUGHPUT" },
      { value: "100% Optical", label: "EMI SHIELDING" },
    ],
    challenge: "Intense electromagnetic interference (EMI) from massive induction casting furnaces.",
    solution: "Engineered a completely isolated single-mode OS2 armored fiber backbone laid through HDPE conduits.",
    footerBadge: "10Gbps Ring Topology",
    detailedSpecs: [
      "Single-mode OS2 Corrugated Steel Tape Armored Fiber Cable",
      "Cisco Industrial Ethernet Ruggedized Managed Switches",
      "IP66 NEMA Sealed Junction Boxes with Heat Dissipation Fin Kits",
      "Sub-20ms Ring Recovery Protocol for Continuous Data Flow",
    ],
  },
  {
    id: "healthcare-security",
    categoryTag: "Hospitals & Healthcare",
    categoryBadge: "HEALTHCARE SECURITY",
    location: "Baner-Aundh, Pune",
    scale: "SCALE: 650-BED TIER-3 HOSPITAL • 120 BIOMETRIC POINTS",
    title: "Multi-Zone Touchless Biometric Access & Nurse Calling System",
    description: "Sanitary touchless facial authentication for operation theaters and neonatal ward safety.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000",
    metrics: [
      { value: "120 Doors", label: "ACCESS POINTS" },
      { value: "650 Beds", label: "HOSPITAL BEDS" },
      { value: "380 Nodes", label: "INTERCOM TERMINALS" },
      { value: "NABH Passed", label: "ACCREDITATION" },
    ],
    challenge: "Strict NABH sterile protocol requiring completely contactless operation for clean zones.",
    solution: "Installed high-speed infrared facial recognition doors with electronic drop-bolt locks.",
    footerBadge: "NABH Compliant",
    detailedSpecs: [
      "Contactless AI Thermal & Infrared Facial Recognition Terminals",
      "Maternity Ward RFID Interlocking Locks with Emergency Lockdown",
      "IP-Based Nurse Call System with Bedside Cord Terminals",
      "Centralized Command Server Logged to NABH Audit Standards",
    ],
  },
  {
    id: "banking-bfsi",
    categoryTag: "Banks & Financial",
    categoryBadge: "BANKING & BFSI",
    location: "Satara & Western Maharashtra",
    scale: "SCALE: 32 BRANCHES • 90-DAY RBI RETENTION",
    title: "32-Branch Centralized CCTV & Safe Room Alarm Monitoring",
    description:
      "Centralized cloud and local NVR surveillance for co-operative bank branches with two-way audio teller verification, vibration strongroom alarms, and scheduled quarterly RBI audits.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000",
    metrics: [
      { value: "32 Locations", label: "BANK BRANCHES" },
      { value: "90 Days Full HD", label: "RETENTION DAYS" },
      { value: "256 Strongroom Sensors", label: "SENSORS INTEGRATED" },
      { value: "100% Compliant", label: "AUDIT RECORD" },
    ],
    challenge:
      "Stringent RBI mandate demanding minimum 90-day continuous video retention with automated SMS alert triggers for off-hour locker room intrusion.",
    solution:
      "Configured H.265+ enterprise NVRs with Western Digital Purple Pro surveillance drives in RAID configuration. Linked dual-tech PIR and seismic vibration sensors to auto-dialer panels that notify local police and bank managers upon unauthorized physical tampering.",
    footerBadge: "RBI Mandate Compliant",
    detailedSpecs: [
      "H.265+ Smart Codec Storage Arrays with RAID 5 Redundancy",
      "Seismic Vibration & Microphonic Strongroom Vault Sensors",
      "Dual-Tech Auto-Dialer GSM/PSTN Central Police Alert Panels",
      "Central Management Software (CMS) with Remote Health Checks",
    ],
  },
];


// LocalStorage Keys

const KEYS = {
  HERO_SLIDES: "jay_hero_slides",
  ABOUT_DATA: "jay_about_data",
  TEAM_MEMBERS: "jay_team_members",
  INQUIRIES: "jay_inquiries",
  SOLUTIONS: "jay_solutions",
  PROJECTS: "jay_projects",
  BLOGS: "jay_blogs",
  MILESTONES: "jay_milestones",
  TESTING_LAB: "jay_testing_lab",
  CREDO_METRICS: "jay_credo_metrics",
  OFFICE_HUBS: "jay_office_hubs",
  BLOG_CATEGORIES: "jay_blog_categories",
  PROJECT_CATEGORIES: "jay_project_categories",
  SOLUTION_CATEGORIES: "jay_solution_categories",
  HOME_STATS: "jay_home_stats",
  HOME_ABOUT: "jay_home_about",
  HOME_BRANDS: "jay_home_brands",
  HOME_INDUSTRIES: "jay_home_industries",
  HOME_SOLUTIONS: "jay_home_solutions",
  FOOTER_SETTINGS: "jay_footer_settings",
  AUTH_TOKEN: "jay_admin_auth",
};

export const DEFAULT_BLOG_CATEGORIES: string[] = [
  "Compliance & Banking",
  "Networking & Fiber",
  "Smart City & AI",
];

export const DEFAULT_PROJECT_CATEGORIES: string[] = [
  "Government & Municipal",
  "Manufacturing & Heavy Industry",
  "Hospitals & Healthcare",
  "Banks & Financial",
];

export const DEFAULT_SOLUTION_CATEGORIES: string[] = [
  "ELECTRONIC SECURITY",
  "DATA & TELEPHONY",
  "BIOMETRICS & ACCESS",
  "INTERCOM & SECURITY",
  "LIFE SAFETY & COMPLIANCE",
  "SLA & SUPPORT",
];

export type HomeStatItem = {
  id: string;
  label: string;
  targetValue: number;
  suffix: string;
  iconName?: string;
};

export type HomeAboutData = {
  eyebrow: string;
  title: string;
  heading?: string;
  subtitle: string;
  tagline?: string;
  description: string;
  buildingImage?: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  pillar4Title: string;
  pillar4Desc: string;
  pillars?: { iconName?: string; title: string; subtitle: string; desc: string }[];
};

export type HomeBrandItem = {
  id: string;
  name: string;
  category: string;
  logoText?: string;
  image?: string;
};

export type HomeIndustryItem = {
  id: string;
  index: string;
  title: string;
  desc: string;
  iconName?: string;
  iconBg?: string;
};

export type HomeSolutionItem = {
  id: string;
  title: string;
  desc: string;
  iconName?: string;
};

const DEFAULT_HOME_SOLUTIONS: HomeSolutionItem[] = [
  {
    id: "hsol-1",
    title: "IP CCTV / Analog CCTV",
    desc: "AI-enabled IP surveillance, thermal detection, and central command NVR matrices.",
    iconName: "Camera",
  },
  {
    id: "hsol-2",
    title: "LAN/WAN Networking",
    desc: "Enterprise Layer-3 PoE+ switching, core routing, and Wi-Fi 6 wireless meshing grids.",
    iconName: "Network",
  },
  {
    id: "hsol-3",
    title: "EPABX / IP-PBX System",
    desc: "Scalable IP-PBX communication, SIP trunking, IVR, and intercom extension grids.",
    iconName: "Phone",
  },
  {
    id: "hsol-4",
    title: "Audio / Video Solutions",
    desc: "4K interactive touch panels, Dante IP audio, ceiling beamforming mics, & AV setups.",
    iconName: "Video",
  },
  {
    id: "hsol-5",
    title: "Structured Cabling",
    desc: "Single-mode OS2 & OM3/OM4 fiber optic backbones, HDPE ducting, and LIU patch bays.",
    iconName: "Cable",
  },
  {
    id: "hsol-6",
    title: "LED Display Systems",
    desc: "Fine-pitch P1.25/P1.8 indoor video walls, 24/7 NOC matrices, and outdoor billboards.",
    iconName: "Tv",
  },
];

const DEFAULT_HOME_STATS: HomeStatItem[] = [
  { id: "stat-1", label: "YEARS EXPERIENCE", targetValue: 35, suffix: "+" },
  { id: "stat-2", label: "PROJECTS COMPLETED", targetValue: 1000, suffix: "+" },
  { id: "stat-3", label: "ACTIVE CLIENTS", targetValue: 500, suffix: "+" },
  { id: "stat-4", label: "GOVERNMENT PROJECTS", targetValue: 50, suffix: "+" },
  { id: "stat-5", label: "CORPORATE CUSTOMERS", targetValue: 100, suffix: "+" },
];

const DEFAULT_HOME_ABOUT: HomeAboutData = {
  eyebrow: "ABOUT JAY ELECTRONICS",
  title: "Who We Are",
  subtitle: "INNOVATION | SECURITY | A SMARTER TOMORROW",
  description:
    "For more than three decades, JAY ELECTRONICS PRIVATE LIMITED has been delivering innovative technology solutions that help businesses, industries, educational institutions, hospitals, government organizations and residential customers improve security, communication and operational efficiency.",
  pillar1Title: "35+ Years Legacy",
  pillar1Desc: "Founded in 1989 with unmatched reliability.",
  pillar2Title: "5000+ Happy Clients",
  pillar2Desc: "Trusted across government & industries.",
  pillar3Title: "Turnkey Execution",
  pillar3Desc: "End-to-end from BOQ to AMC.",
  pillar4Title: "Trusted Tech Partner",
  pillar4Desc: "Building safer & smarter environments.",
};

const DEFAULT_HOME_BRANDS: HomeBrandItem[] = [
  { id: "b1", name: "HIKVISION", category: "IP SURVEILLANCE" },
  { id: "b2", name: "CP PLUS", category: "SECURITY VISION" },
  { id: "b3", name: "DAHUA", category: "AI CAMERAS" },
  { id: "b4", name: "BOSCH", category: "SECURITY & SOUND" },
  { id: "b5", name: "HONEYWELL", category: "LIFE SAFETY" },
  { id: "b6", name: "CISCO", category: "ENTERPRISE LAN" },
  { id: "b7", name: "MATRIX", category: "BIOMETRICS & ACCESS" },
  { id: "b8", name: "TP-LINK", category: "NETWORKING" },
  { id: "b9", name: "SAMSUNG", category: "LED DISPLAY WALLS" },
  { id: "b10", name: "LG", category: "COMMERCIAL DISPLAYS" },
  { id: "b11", name: "SCHNEIDER", category: "BUILDING AUTOMATION" },
  { id: "b12", name: "NETGEAR", category: "NETWORKING SWITCHES" },
  { id: "b13", name: "DELL EMC", category: "SERVER & STORAGE" },
  { id: "b14", name: "COMMSCOPE", category: "STRUCTURED CABLING" },
  { id: "b15", name: "ESSL", category: "BIOMETRIC ACCESS" },
  { id: "b16", name: "ZKTECO", category: "BIOMETRICS" },
  { id: "b17", name: "PANASONIC", category: "TELEPHONY & INTERCOM" },
  { id: "b18", name: "AGNI", category: "FIRE ALARM" },
  { id: "b19", name: "RAVEL", category: "FIRE PROTECTION" },
  { id: "b20", name: "GRANDSTREAM", category: "IP TELEPHONY" },
  { id: "b21", name: "AVAYA", category: "ENTERPRISE TELEPHONY" },
  { id: "b22", name: "NEC", category: "EPABX SYSTEMS" },
  { id: "b23", name: "STERLITE", category: "OPTICAL FIBER" },
  { id: "b24", name: "FINOLEX", category: "CABLES & WIRES" },
  { id: "b25", name: "D-LINK", category: "NETWORKING" },
  { id: "b26", name: "ABSEN", category: "LED DISPLAYS" },
  { id: "b27", name: "UNILUMIN", category: "DISPLAY WALLS" },
  { id: "b28", name: "BENQ", category: "COMMERCIAL PROJECTION" },
  { id: "b29", name: "JBL", category: "COMMERCIAL AUDIO" },
  { id: "b30", name: "YAMAHA", category: "PRO AUDIO" },
];

const DEFAULT_HOME_INDUSTRIES: HomeIndustryItem[] = [
  { id: "ind-1", index: "01", title: "Government & Municipal", desc: "Smart city junctions, civic offices, safe city citywide command surveillance." },
  { id: "ind-2", index: "02", title: "Police & Law Enforcement", desc: "HQ control rooms, jail security systems, ANPR highway checkpoints." },
  { id: "ind-3", index: "03", title: "Manufacturing & Factories", desc: "MIDC industrial belts, blast-proof cameras, optical campus loops." },
  { id: "ind-4", index: "04", title: "Hospitals & Healthcare", desc: "ICU access control, nurse call systems, patient record network security." },
  { id: "ind-5", index: "05", title: "Educational Campuses", desc: "Colleges & universities, student tracking, PA systems, secure campus Wi-Fi." },
  { id: "ind-6", index: "06", title: "Banks & Financial", desc: "RBI-compliant 90-day DVR storage, strongroom sensors, alarm dialers." },
  { id: "ind-7", index: "07", title: "Commercial Real Estate", desc: "IT Parks, BMS integration, tenant billing intercoms, fire evacuation." },
  { id: "ind-8", index: "08", title: "Smart Cities & Urban Transit", desc: "Integrated Command & Control Centers (ICCC), RLVD, & traffic signals." },
];

const DEFAULT_ABOUT_DATA: AboutData = {
  eyebrow: "INSTITUTIONAL TRUST SINCE 1989",
  heading: "35+ Years of Pioneering System Integration in Maharashtra",
  description:
    "Established in 1989, JAY ELECTRONICS PRIVATE LIMITED (JEPL) has grown from a specialized electronics communications venture into one of Western India's foremost turnkey system integrators for mission-critical surveillance, high-speed optical networking, biometric access, and command center architectures.",
  cert1: "ISO 9001:2015 Certified",
  cert2: "Class-1 Govt. Contractor",
  cert3: "GeM Registered Vendor",
  buildingImage:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  buildingTitle: "Sangli Central Testing Depot",
  buildingDesc: "Pre-commissioning stress tests & firmware audits before field dispatch.",
  founderEyebrow: "FOUNDER & MANAGING DIRECTOR",
  founderName: "Er. Preetam A. Shah",
  founderDesignation: "Managing Director & CEO",
  founderExperience: "35+ Years Industry Experience",
  founderDescription: "Pioneered early EPABX, optical backbones, and smart city command networks in Western Maharashtra.",
  founderImage: "/founder-photo.jpg",
};

const DEFAULT_MILESTONES: MilestoneItem[] = [
  { id: "m1", milestone: "Milestone 1", year: "1989", title: "Foundation & Telephony", desc: "Founded in Sangli, pioneering early EPABX telecom and electronic lines for agro-industries and banks.", description: "Founded in Sangli, pioneering early EPABX telecom and electronic lines for agro-industries and banks.", color: "text-red-600 bg-red-50 border-red-500", icon: "Landmark", iconName: "Landmark" },
  { id: "m2", milestone: "Milestone 2", year: "2002", title: "Smart City & Optical Fiber", desc: "Commissioned optical fiber splicing teams, Class-1 municipal traffic surveillance, and Pune hubs.", description: "Commissioned optical fiber splicing teams, Class-1 municipal traffic surveillance, and Pune hubs.", color: "text-blue-600 bg-blue-50 border-blue-500", icon: "Network", iconName: "Network" },
  { id: "m3", milestone: "Milestone 3", year: "2014", title: "CCTV & Security Era", desc: "Expanded into analog CCTV, co-operative bank currency chest alarm systems, and industrial security.", description: "Expanded into analog CCTV, co-operative bank currency chest alarm systems, and industrial security.", color: "text-red-600 bg-red-50 border-red-500", icon: "Camera", iconName: "Camera" },
  { id: "m4", milestone: "Milestone 4", year: "2026+", title: "AI Telemetry & Video NOCs", desc: "Leading the region in edge AI computer vision, LED command walls, touchless biometrics & SLA support.", description: "Leading the region in edge AI computer vision, LED command walls, touchless biometrics & SLA support.", color: "text-blue-600 bg-blue-50 border-blue-500", icon: "Sparkles", iconName: "Sparkles" },
];

const DEFAULT_TESTING_LAB: TestingLabItem[] = [
  { id: "lab-1", title: "Fluke DSX-8000 Cable Certifiers", desc: "100% Channel certification for Cat6A up to 2000 MHz with PDF pass reports.", toolName: "Fluke DSX-8000 Cable Certifiers", toolDesc: "100% Channel certification for Cat6A up to 2000 MHz with PDF pass reports.", icon: "Wrench" },
  { id: "lab-2", title: "Fujikura 90S+ Core Alignment Splicers", desc: "Sub-0.02dB optical splice loss for mission-critical industrial foundries.", toolName: "Fujikura 90S+ Core Alignment Splicers", toolDesc: "Sub-0.02dB optical splice loss for mission-critical industrial foundries.", icon: "Wrench" },
  { id: "lab-3", title: "OTDR Optical Loss Analyzers", desc: "Bidirectional wavelength reflection tracing for 50+ km campus loops.", toolName: "OTDR Optical Loss Analyzers", toolDesc: "Bidirectional wavelength reflection tracing for 50+ km campus loops.", icon: "Wrench" },
];

const DEFAULT_CREDO: EngineeringCredoData = {
  eyebrow: "ENGINEERING CREDO",
  quote: "Zero Tolerance for Downtime",
  description: "When a hospital ICU access door locks up, a bank strongroom alarm fails, or a smart city junction camera goes blind, seconds count. That is why JEPL refuses shortcuts in cabling gauges, surge suppressors, or OEM licensing.",
  metric1Value: "99.8%",
  metric1Label: "Contract SLA Uptime",
  metric2Value: "4-Hour",
  metric2Label: "Emergency Van Dispatch",
  buttonText: "Consult with Senior Systems Engineer",
  slaUptime: "99.8%",
  emergencyVanDispatch: "4-Hour",
};

const DEFAULT_OFFICE_HUBS: OfficeHub[] = [
  {
    id: "sangli",
    badge: "HEADQUARTERS & SPARES DEPOT",
    title: "Sangli Office",
    address: "JEPL Tower, Market Yard Main Corridor, Sangli 416416, Maharashtra.",
    phone: "+91 233 2300000 / 2300001",
    email: "sangli@jayelectronics.co.in",
    hours: "Mon-Sat 9:30 AM - 7:00 PM",
    callLabel: "Call Sangli Desk",
    phoneHref: "tel:+912332300000",
    image: "/about-building.png",
  },
  {
    id: "kolhapur",
    badge: "REGIONAL INDUSTRIAL HUB",
    title: "Kolhapur Office",
    address: "Shahupuri 2nd Lane, Near Station Road, Kolhapur 416001, Maharashtra.",
    phone: "+91 231 2650000 / 2650001",
    email: "kolhapur@jayelectronics.co.in",
    hours: "Mon-Sat 9:30 AM - 7:00 PM",
    callLabel: "Call Kolhapur Desk",
    phoneHref: "tel:+912312650000",
    image: "/about-depot.png",
  },
];

const DEFAULT_FOOTER_SETTINGS: FooterSettings = {
  tagline: "Smart Security Solutions for a Safer Tomorrow",
  newsletterText: "Stay updated with smart security solutions by Jay Electronics Pvt Ltd.",
  phone1: "+91 94224 07175",
  phone2: "0233-2600175",
  email: "info@jayelectronics.co.in",
  address: "College Corner, Sangli 416416",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  mapUrl: "https://maps.google.com/?q=College+Corner+North+Shivajinagar+Sangli+416416",
  copyrightText: "A 35+ Year Experienced Solution Provider | All Rights Reserved",
};
const DEFAULT_HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/inauguration-slide.png",
    title: "Police Command & Control Center Inauguration",
    subtitle: "Pioneering Security & Technology Solutions",
    alt: "Police Command & Control Center Inauguration",
  },
  {
    id: "slide-2",
    image: "/hero-slide-1.png",
    title: "IP CCTV & Security Command Center",
    subtitle: "AI-Powered Vision & Command Center Matrix",
    alt: "IP CCTV & Security Command Center",
  },
  {
    id: "slide-3",
    image: "/hero-slide-2.png",
    title: "Enterprise High-Speed Data Servers",
    subtitle: "Enterprise Layer-3 Switching & Routing",
    alt: "Enterprise High-Speed Data Servers",
  },
  {
    id: "slide-4",
    image: "/hero-slide-3.jpeg",
    title: "Smart City Municipal NOC Matrix",
    subtitle: "Citywide Automated Surveillance Network",
    alt: "Smart City Municipal NOC Matrix",
  },
  {
    id: "slide-5",
    image: "/hero-slide-4.png",
    title: "Futuristic Electronics & Fiber Networks",
    subtitle: "Single-Mode OS2 Armored Fiber Optics",
    alt: "Futuristic Electronics & Fiber Networks",
  },
];

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Er. Jayant Wankar",
    role: "Founder & Managing Director",
    experience: "",
    image: "/team-1.png",
    accent: "from-[#00E5FF] to-[#0088FF]",
    bio: "Pioneer in Telecom & Surveillance Infrastructure with over three decades of engineering expertise.",
  },
  {
    id: "team-2",
    name: "Er. Payal Wankar",
    role: "Director & System Architect",
    experience: "",
    image: "/team-2.png",
    accent: "from-[#7C4DFF] to-[#00E5FF]",
    bio: "Specializing in Next-Gen IP Surveillance, Fibre Networks, and Smart City Solutions.",
  },
  {
    id: "team-3",
    name: "Er. Rohan Wankar",
    role: "Head of Technical Operations",
    experience: "",
    image: "/team-3.png",
    accent: "from-[#00E5FF] to-[#00E676]",
    bio: "Directing large-scale turnkey networking, server deployments, and government projects.",
  },
  {
    id: "team-4",
    name: "Er. Amit Patil",
    role: "Senior Security Specialist",
    experience: "",
    image: "/team-4.png",
    accent: "from-[#FF9100] to-[#FF3D00]",
    bio: "Expert in Fire Safety, EPABX Systems, and Industrial CCTV Audits.",
  },
  {
    id: "team-5",
    name: "Er. Sneha Kulkarni",
    role: "Client Relationship Lead",
    experience: "",
    image: "/team-5.png",
    accent: "from-[#FF4081] to-[#7C4DFF]",
    bio: "Ensuring 24/7 service delivery, institutional support, and client satisfaction.",
  },
];

const DEFAULT_INQUIRIES: ContactInquiry[] = [];


const DEFAULT_BLOGS_DATA: BlogPostData[] = [
  {
    id: "rbi-cctv-retention",
    tag: "COMPLIANCE & BANKING",
    readTime: "5 min read",
    title: "Understanding RBI Physical Security Norms: Why 90-Day CCTV Retention Matters",
    description:
      "A comprehensive guide for co-operative and scheduled commercial banks in Maharashtra on meeting statutory RBI circulars for CCTV storage, strongroom telemetry, and fire suppression.",
    takeaway:
      "Banks must calculate true H.265+ bitrate budgets to ensure footage retention does not degrade under low-light night conditions.",
    date: "August 12, 2026",
    image:
      "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=600&q=80",
    content:
      "Statutory RBI guidelines for commercial and urban co-operative banks strictly mandate 90-day continuous CCTV footage retention across cash counters, strongroom corridors, and ATM vestibules. Deploying H.265+ smart codecs with Variable Bitrate (VBR) management prevents frame loss during high-activity banking hours while optimizing SAN/NAS storage array costs.",
  },
  {
    id: "fiber-single-vs-multimode",
    tag: "NETWORKING & FIBER",
    readTime: "6 min read",
    title: "Single-Mode vs Multimode Fiber in Industrial Foundries: Choosing the Right Cable",
    description:
      "Foundry environments present extreme heat, heavy induction EMI, and metallic dust. Learn why single-mode OS2 armored fiber outlasts legacy copper and multimode cables in heavy manufacturing.",
    takeaway:
      "Optical isolation protects expensive PLC equipment from lightning strikes and ground-loop surges.",
    date: "July 24, 2026",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    content:
      "High-power induction furnaces generate immense electromagnetic interference (EMI) that disrupts traditional Cat6 copper signals. Deploying Corrugated Steel Tape (CST) armored OS2 single-mode fiber guarantees zero-loss optical throughput across multi-building industrial foundries.",
  },
  {
    id: "smart-city-ai-command",
    tag: "SMART CITY & AI",
    readTime: "4 min read",
    title: "The Rise of AI in Municipal Smart City Command Centers: ANPR to Crowd Analytics",
    description:
      "How modern Indian tier-2 cities like Sangli and Kolhapur are utilizing edge-AI video analytics to reduce emergency response times and streamline civic safety.",
    takeaway:
      "Edge processing reduces central server bandwidth loads by over 65% while delivering sub-second number plate alerts.",
    date: "June 18, 2026",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    content:
      "Integrated Command & Control Centers (ICCC) rely on deep-learning vision models for Automatic Number Plate Recognition (ANPR), red-light violation detection (RLVD), and real-time crowd density tracking. Processing video streams directly at the edge camera node minimizes backhaul network overhead.",
  },
  {
    id: "banking-cctv-alarm-monitoring",
    tag: "BANKING & BFSI",
    readTime: "5 min read",
    title: "32-Branch Centralized CCTV & Safe Room Alarm Monitoring",
    description:
      "Centralized cloud and local NVR surveillance for co-operative bank branches with two-way audio teller verification, vibration strongroom alarms, and scheduled quarterly RBI audits.",
    takeaway:
      "Centralized multi-site monitoring reduces branch security overhead while fulfilling mandatory RBI 90-day retention guidelines.",
    date: "August 28, 2026",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    content:
      "Centralized surveillance architecture for co-operative banks unifies remote multi-branch camera feeds into a secure central command station. Equipped with 90-day H.265+ storage arrays, dual-tech PIR and seismic vibration strongroom sensors, and automated GSM police dialers, this infrastructure guarantees round-the-clock protection and full compliance with RBI physical security mandates.",
  },
];



// Custom Event for cross-component re-renders
const EVENT_NAME = "jay_admin_store_updated";

function notifyUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT_NAME));
  }
}

// Store Helper Functions
export const adminStore = {
  // Auth
  isLoggedIn(): boolean {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(KEYS.AUTH_TOKEN) === "logged_in_true";
  },
  login(u: string, p: string): boolean {
    if (u.trim().toLowerCase() === "admin123@gmail.com" && p === "admin123") {
      localStorage.setItem(KEYS.AUTH_TOKEN, "logged_in_true");
      notifyUpdate();
      return true;
    }
    return false;
  },
  logout() {
    localStorage.removeItem(KEYS.AUTH_TOKEN);
    notifyUpdate();
  },

  // Hero Slides
  getHeroSlides(): HeroSlide[] {
    if (typeof window === "undefined") return DEFAULT_HERO_SLIDES;
    const data = localStorage.getItem(KEYS.HERO_SLIDES);
    if (!data) return DEFAULT_HERO_SLIDES;
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_HERO_SLIDES;
    }
  },
  saveHeroSlides(slides: HeroSlide[]) {
    localStorage.setItem(KEYS.HERO_SLIDES, JSON.stringify(slides));
    notifyUpdate();
  },

  // About Data
  getAboutData(): AboutData {
    if (typeof window === "undefined") return DEFAULT_ABOUT_DATA;
    const data = localStorage.getItem(KEYS.ABOUT_DATA);
    if (!data) return DEFAULT_ABOUT_DATA;
    try {
      const parsed = JSON.parse(data);
      return { ...DEFAULT_ABOUT_DATA, ...parsed };
    } catch {
      return DEFAULT_ABOUT_DATA;
    }
  },
  saveAboutData(about: AboutData) {
    localStorage.setItem(KEYS.ABOUT_DATA, JSON.stringify(about));
    notifyUpdate();
  },

  // Team Members
  getTeamMembers(): TeamMember[] {
    if (typeof window === "undefined") return DEFAULT_TEAM_MEMBERS;
    const data = localStorage.getItem(KEYS.TEAM_MEMBERS);
    if (!data) return DEFAULT_TEAM_MEMBERS;
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_TEAM_MEMBERS;
    }
  },
  saveTeamMembers(members: TeamMember[]) {
    localStorage.setItem(KEYS.TEAM_MEMBERS, JSON.stringify(members));
    notifyUpdate();
  },
  addTeamMember(member: Omit<TeamMember, "id">) {
    const current = this.getTeamMembers();
    const newMember: TeamMember = {
      ...member,
      id: `team-${Date.now()}`,
    };
    this.saveTeamMembers([...current, newMember]);
  },
  deleteTeamMember(id: string) {
    const current = this.getTeamMembers();
    this.saveTeamMembers(current.filter((m) => m.id !== id));
  },
  updateTeamMember(id: string, updated: Partial<TeamMember>) {
    const current = this.getTeamMembers();
    const next = current.map((m) => (m.id === id ? { ...m, ...updated } : m));
    this.saveTeamMembers(next);
  },

  // Inquiries
  getInquiries(): ContactInquiry[] {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(KEYS.INQUIRIES);
    if (!data) return [];
    try {
      const parsed = JSON.parse(data);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(
        (i: ContactInquiry) =>
          !["inq-101", "inq-102", "inq-103", "inq-1", "inq-2", "inq-3", "inq-4"].includes(i.id)
      );
    } catch {
      return [];
    }
  },
  clearAllInquiries() {
    localStorage.setItem(KEYS.INQUIRIES, JSON.stringify([]));
    notifyUpdate();
  },
  addInquiry(inquiry: Omit<ContactInquiry, "id" | "date" | "status">) {
    const current = this.getInquiries();
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }) + " " + now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

    const newInquiry: ContactInquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      date: dateStr,
      status: "New",
    };
    const next = [newInquiry, ...current];
    localStorage.setItem(KEYS.INQUIRIES, JSON.stringify(next));
    notifyUpdate();
    return newInquiry;
  },
  updateInquiryStatus(id: string, status: "New" | "In Progress" | "Resolved") {
    const current = this.getInquiries();
    const next = current.map((item) => (item.id === id ? { ...item, status } : item));
    localStorage.setItem(KEYS.INQUIRIES, JSON.stringify(next));
    notifyUpdate();
  },
  deleteInquiry(id: string) {
    const current = this.getInquiries();
    const next = current.filter((item) => item.id !== id);
    localStorage.setItem(KEYS.INQUIRIES, JSON.stringify(next));
    notifyUpdate();
  },

  // Solutions Modules
  getSolutions(): SolutionModule[] {
    if (typeof window === "undefined") return DEFAULT_SOLUTIONS_DATA;
    const data = localStorage.getItem(KEYS.SOLUTIONS);
    if (data === null) {
      localStorage.setItem(KEYS.SOLUTIONS, JSON.stringify(DEFAULT_SOLUTIONS_DATA));
      return DEFAULT_SOLUTIONS_DATA;
    }
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return DEFAULT_SOLUTIONS_DATA;
    } catch {
      return DEFAULT_SOLUTIONS_DATA;
    }
  },
  saveSolutions(solutions: SolutionModule[]) {
    localStorage.setItem(KEYS.SOLUTIONS, JSON.stringify(solutions));
    notifyUpdate();
  },
  clearAllSolutions() {
    localStorage.setItem(KEYS.SOLUTIONS, JSON.stringify([]));
    notifyUpdate();
  },
  addSolution(solution: Omit<SolutionModule, "id">) {
    const current = this.getSolutions();
    const newSolution: SolutionModule = {
      ...solution,
      id: `sol-${Date.now()}`,
    };
    this.saveSolutions([newSolution, ...current]);
  },
  updateSolution(id: string, updated: Partial<SolutionModule>) {
    const current = this.getSolutions();
    const next = current.map((s) => (s.id === id ? { ...s, ...updated } : s));
    this.saveSolutions(next);
  },
  deleteSolution(id: string) {
    const current = this.getSolutions();
    this.saveSolutions(current.filter((s) => s.id !== id));
  },

  // Projects
  getProjects(): ProjectItemData[] {
    if (typeof window === "undefined") return DEFAULT_PROJECTS_DATA;
    const data = localStorage.getItem(KEYS.PROJECTS);
    if (data === null) {
      localStorage.setItem(KEYS.PROJECTS, JSON.stringify(DEFAULT_PROJECTS_DATA));
      return DEFAULT_PROJECTS_DATA;
    }
    try {
      const parsed: ProjectItemData[] = JSON.parse(data);
      return parsed.map((item) => {
        const defaultMatch = DEFAULT_PROJECTS_DATA.find((d) => d.id === item.id);
        const result: ProjectItemData = { ...item };
        const metrics = item.metrics && item.metrics.length > 0 ? item.metrics : defaultMatch?.metrics;
        const detailedSpecs = item.detailedSpecs && item.detailedSpecs.length > 0 ? item.detailedSpecs : defaultMatch?.detailedSpecs;
        if (metrics) result.metrics = metrics;
        if (detailedSpecs) result.detailedSpecs = detailedSpecs;
        return result;
      });
    } catch {
      return DEFAULT_PROJECTS_DATA;
    }
  },
  saveProjects(projects: ProjectItemData[]) {
    localStorage.setItem(KEYS.PROJECTS, JSON.stringify(projects));
    notifyUpdate();
  },
  addProject(project: Omit<ProjectItemData, "id">) {
    const current = this.getProjects();
    const newProject: ProjectItemData = {
      ...project,
      id: `proj-${Date.now()}`,
    };
    this.saveProjects([newProject, ...current]);
  },
  updateProject(id: string, updated: Partial<ProjectItemData>) {
    const current = this.getProjects();
    const next = current.map((p) => (p.id === id ? { ...p, ...updated } : p));
    this.saveProjects(next);
  },
  deleteProject(id: string) {
    const current = this.getProjects();
    this.saveProjects(current.filter((p) => p.id !== id));
  },

  // Blogs
  getBlogs(): BlogPostData[] {
    if (typeof window === "undefined") return DEFAULT_BLOGS_DATA;
    const data = localStorage.getItem(KEYS.BLOGS);
    if (data === null) {
      localStorage.setItem(KEYS.BLOGS, JSON.stringify(DEFAULT_BLOGS_DATA));
      return DEFAULT_BLOGS_DATA;
    }
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_BLOGS_DATA;
    }
  },
  saveBlogs(blogs: BlogPostData[]) {
    localStorage.setItem(KEYS.BLOGS, JSON.stringify(blogs));
    notifyUpdate();
  },
  addBlog(blog: Omit<BlogPostData, "id">) {
    const current = this.getBlogs();
    const newBlog: BlogPostData = {
      ...blog,
      id: `blog-${Date.now()}`,
    };
    this.saveBlogs([newBlog, ...current]);
  },
  updateBlog(id: string, updated: Partial<BlogPostData>) {
    const current = this.getBlogs();
    const next = current.map((b) => (b.id === id ? { ...b, ...updated } : b));
    this.saveBlogs(next);
  },
  deleteBlog(id: string) {
    const current = this.getBlogs();
    this.saveBlogs(current.filter((b) => b.id !== id));
  },

  // Blog Categories
  getBlogCategories(): string[] {
    if (typeof window === "undefined") return DEFAULT_BLOG_CATEGORIES;
    const data = localStorage.getItem(KEYS.BLOG_CATEGORIES);
    if (data === null) {
      localStorage.setItem(KEYS.BLOG_CATEGORIES, JSON.stringify(DEFAULT_BLOG_CATEGORIES));
      return DEFAULT_BLOG_CATEGORIES;
    }
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_BLOG_CATEGORIES;
    }
  },
  saveBlogCategories(categories: string[]) {
    localStorage.setItem(KEYS.BLOG_CATEGORIES, JSON.stringify(categories));
    notifyUpdate();
  },
  addBlogCategory(categoryName: string) {
    const trimmed = categoryName.trim();
    if (!trimmed) return;
    const current = this.getBlogCategories();
    if (current.some((c) => c.toLowerCase() === trimmed.toLowerCase())) return;
    this.saveBlogCategories([...current, trimmed]);
  },
  deleteBlogCategory(categoryName: string) {
    const current = this.getBlogCategories();
    const next = current.filter((c) => c.toLowerCase() !== categoryName.trim().toLowerCase());
    this.saveBlogCategories(next);
  },

  // Project Categories
  getProjectCategories(): string[] {
    if (typeof window === "undefined") return DEFAULT_PROJECT_CATEGORIES;
    const data = localStorage.getItem(KEYS.PROJECT_CATEGORIES);
    if (data === null) {
      localStorage.setItem(KEYS.PROJECT_CATEGORIES, JSON.stringify(DEFAULT_PROJECT_CATEGORIES));
      return DEFAULT_PROJECT_CATEGORIES;
    }
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_PROJECT_CATEGORIES;
    }
  },
  saveProjectCategories(categories: string[]) {
    localStorage.setItem(KEYS.PROJECT_CATEGORIES, JSON.stringify(categories));
    notifyUpdate();
  },
  addProjectCategory(categoryName: string) {
    const trimmed = categoryName.trim();
    if (!trimmed) return;
    const current = this.getProjectCategories();
    if (current.some((c) => c.toLowerCase() === trimmed.toLowerCase())) return;
    this.saveProjectCategories([...current, trimmed]);
  },
  deleteProjectCategory(categoryName: string) {
    const current = this.getProjectCategories();
    const next = current.filter((c) => c.toLowerCase() !== categoryName.trim().toLowerCase());
    this.saveProjectCategories(next);
  },

  // Solution Categories
  getSolutionCategories(): string[] {
    if (typeof window === "undefined") return DEFAULT_SOLUTION_CATEGORIES;
    const data = localStorage.getItem(KEYS.SOLUTION_CATEGORIES);
    if (data === null) {
      localStorage.setItem(KEYS.SOLUTION_CATEGORIES, JSON.stringify(DEFAULT_SOLUTION_CATEGORIES));
      return DEFAULT_SOLUTION_CATEGORIES;
    }
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_SOLUTION_CATEGORIES;
    }
  },
  saveSolutionCategories(categories: string[]) {
    localStorage.setItem(KEYS.SOLUTION_CATEGORIES, JSON.stringify(categories));
    notifyUpdate();
  },
  addSolutionCategory(categoryName: string) {
    const trimmed = categoryName.trim();
    if (!trimmed) return;
    const current = this.getSolutionCategories();
    if (current.some((c) => c.toLowerCase() === trimmed.toLowerCase())) return;
    this.saveSolutionCategories([...current, trimmed.toUpperCase()]);
  },
  deleteSolutionCategory(categoryName: string) {
    const current = this.getSolutionCategories();
    const next = current.filter((c) => c.toLowerCase() !== categoryName.trim().toLowerCase());
    this.saveSolutionCategories(next);
  },

  // Home Stats
  getHomeStats(): HomeStatItem[] {
    if (typeof window === "undefined") return DEFAULT_HOME_STATS;
    const data = localStorage.getItem(KEYS.HOME_STATS);
    if (data === null) return DEFAULT_HOME_STATS;
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return DEFAULT_HOME_STATS;
    } catch {
      return DEFAULT_HOME_STATS;
    }
  },
  saveHomeStats(stats: HomeStatItem[]) {
    localStorage.setItem(KEYS.HOME_STATS, JSON.stringify(stats));
    notifyUpdate();
  },
  addHomeStat(stat: Omit<HomeStatItem, "id">) {
    const current = this.getHomeStats();
    const newStat: HomeStatItem = { ...stat, id: `stat-${Date.now()}` };
    this.saveHomeStats([...current, newStat]);
  },
  updateHomeStat(id: string, updated: Partial<HomeStatItem>) {
    const current = this.getHomeStats();
    this.saveHomeStats(current.map((s) => (s.id === id ? { ...s, ...updated } : s)));
  },
  deleteHomeStat(id: string) {
    const current = this.getHomeStats();
    this.saveHomeStats(current.filter((s) => s.id !== id));
  },

  // Home About
  getHomeAbout(): HomeAboutData {
    if (typeof window === "undefined") return DEFAULT_HOME_ABOUT;
    const data = localStorage.getItem(KEYS.HOME_ABOUT);
    if (data === null) return DEFAULT_HOME_ABOUT;
    try {
      const parsed = JSON.parse(data);
      if (
        parsed.eyebrow?.includes("Pioneering Electronic Systems") ||
        parsed.title?.includes("Engineering Reliable")
      ) {
        localStorage.setItem(KEYS.HOME_ABOUT, JSON.stringify(DEFAULT_HOME_ABOUT));
        return DEFAULT_HOME_ABOUT;
      }
      return parsed;
    } catch {
      return DEFAULT_HOME_ABOUT;
    }
  },
  saveHomeAbout(about: HomeAboutData) {
    localStorage.setItem(KEYS.HOME_ABOUT, JSON.stringify(about));
    notifyUpdate();
  },

  // Home Brands
  getHomeBrands(): HomeBrandItem[] {
    if (typeof window === "undefined") return DEFAULT_HOME_BRANDS;
    const data = localStorage.getItem(KEYS.HOME_BRANDS);
    if (data === null) return DEFAULT_HOME_BRANDS;
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return DEFAULT_HOME_BRANDS;
    } catch {
      return DEFAULT_HOME_BRANDS;
    }
  },
  saveHomeBrands(brands: HomeBrandItem[]) {
    localStorage.setItem(KEYS.HOME_BRANDS, JSON.stringify(brands));
    notifyUpdate();
  },
  addHomeBrand(brand: Omit<HomeBrandItem, "id">) {
    const current = this.getHomeBrands();
    const newBrand: HomeBrandItem = { ...brand, id: `b-${Date.now()}` };
    this.saveHomeBrands([...current, newBrand]);
  },
  updateHomeBrand(id: string, updated: Partial<HomeBrandItem>) {
    const current = this.getHomeBrands();
    this.saveHomeBrands(current.map((b) => (b.id === id ? { ...b, ...updated } : b)));
  },
  deleteHomeBrand(id: string) {
    const current = this.getHomeBrands();
    this.saveHomeBrands(current.filter((b) => b.id !== id));
  },

  // Home Industries
  getHomeIndustries(): HomeIndustryItem[] {
    if (typeof window === "undefined") return DEFAULT_HOME_INDUSTRIES;
    const data = localStorage.getItem(KEYS.HOME_INDUSTRIES);
    if (data === null) {
      localStorage.setItem(KEYS.HOME_INDUSTRIES, JSON.stringify(DEFAULT_HOME_INDUSTRIES));
      return DEFAULT_HOME_INDUSTRIES;
    }
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return DEFAULT_HOME_INDUSTRIES;
    } catch {
      return DEFAULT_HOME_INDUSTRIES;
    }
  },
  saveHomeIndustries(industries: HomeIndustryItem[]) {
    localStorage.setItem(KEYS.HOME_INDUSTRIES, JSON.stringify(industries));
    notifyUpdate();
  },
  addHomeIndustry(industry: Omit<HomeIndustryItem, "id">) {
    const current = this.getHomeIndustries();
    const newIndustry: HomeIndustryItem = {
      ...industry,
      id: `ind-${Date.now()}`,
      index: String(current.length + 1).padStart(2, "0"),
    };
    this.saveHomeIndustries([...current, newIndustry]);
  },
  updateHomeIndustry(id: string, updated: Partial<HomeIndustryItem>) {
    const current = this.getHomeIndustries();
    this.saveHomeIndustries(current.map((i) => (i.id === id ? { ...i, ...updated } : i)));
  },
  deleteHomeIndustry(id: string) {
    const current = this.getHomeIndustries();
    this.saveHomeIndustries(current.filter((i) => i.id !== id));
  },

  // Home Solutions (What We Cater)
  getHomeSolutions(): HomeSolutionItem[] {
    if (typeof window === "undefined") return DEFAULT_HOME_SOLUTIONS;
    const data = localStorage.getItem(KEYS.HOME_SOLUTIONS);
    if (data === null) {
      localStorage.setItem(KEYS.HOME_SOLUTIONS, JSON.stringify(DEFAULT_HOME_SOLUTIONS));
      return DEFAULT_HOME_SOLUTIONS;
    }
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return DEFAULT_HOME_SOLUTIONS;
    } catch {
      return DEFAULT_HOME_SOLUTIONS;
    }
  },
  saveHomeSolutions(solutions: HomeSolutionItem[]) {
    localStorage.setItem(KEYS.HOME_SOLUTIONS, JSON.stringify(solutions));
    notifyUpdate();
  },
  addHomeSolution(solution: Omit<HomeSolutionItem, "id">) {
    const current = this.getHomeSolutions();
    const newItem: HomeSolutionItem = { ...solution, id: `hsol-${Date.now()}` };
    this.saveHomeSolutions([...current, newItem]);
  },
  updateHomeSolution(id: string, updated: Partial<HomeSolutionItem>) {
    const current = this.getHomeSolutions();
    this.saveHomeSolutions(current.map((i) => (i.id === id ? { ...i, ...updated } : i)));
  },
  deleteHomeSolution(id: string) {
    const current = this.getHomeSolutions();
    this.saveHomeSolutions(current.filter((i) => i.id !== id));
  },

  // Milestones
  getMilestones(): MilestoneItem[] {
    if (typeof window === "undefined") return DEFAULT_MILESTONES;
    const data = localStorage.getItem(KEYS.MILESTONES);
    if (data === null) {
      localStorage.setItem(KEYS.MILESTONES, JSON.stringify(DEFAULT_MILESTONES));
      return DEFAULT_MILESTONES;
    }
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_MILESTONES;
    }
  },
  saveMilestones(items: MilestoneItem[]) {
    localStorage.setItem(KEYS.MILESTONES, JSON.stringify(items));
    notifyUpdate();
  },
  addMilestone(item: Omit<MilestoneItem, "id">) {
    const current = this.getMilestones();
    const newItem: MilestoneItem = { ...item, id: `m-${Date.now()}` };
    this.saveMilestones([...current, newItem]);
  },
  updateMilestone(id: string, updated: Partial<MilestoneItem>) {
    const current = this.getMilestones();
    const next = current.map((m) => (m.id === id ? { ...m, ...updated } : m));
    this.saveMilestones(next);
  },
  deleteMilestone(id: string) {
    const current = this.getMilestones();
    this.saveMilestones(current.filter((m) => m.id !== id));
  },

  // Testing Lab
  getTestingLab(): TestingLabItem[] {
    if (typeof window === "undefined") return DEFAULT_TESTING_LAB;
    const data = localStorage.getItem(KEYS.TESTING_LAB);
    if (data === null) {
      localStorage.setItem(KEYS.TESTING_LAB, JSON.stringify(DEFAULT_TESTING_LAB));
      return DEFAULT_TESTING_LAB;
    }
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_TESTING_LAB;
    }
  },
  saveTestingLab(items: TestingLabItem[]) {
    localStorage.setItem(KEYS.TESTING_LAB, JSON.stringify(items));
    notifyUpdate();
  },
  addTestingLab(item: Omit<TestingLabItem, "id">) {
    const current = this.getTestingLab();
    const newItem: TestingLabItem = { ...item, id: `lab-${Date.now()}` };
    this.saveTestingLab([...current, newItem]);
  },
  updateTestingLab(id: string, updated: Partial<TestingLabItem>) {
    const current = this.getTestingLab();
    const next = current.map((t) => (t.id === id ? { ...t, ...updated } : t));
    this.saveTestingLab(next);
  },
  deleteTestingLab(id: string) {
    const current = this.getTestingLab();
    this.saveTestingLab(current.filter((t) => t.id !== id));
  },

  // Engineering Credo
  getCredo(): EngineeringCredoData {
    if (typeof window === "undefined") return DEFAULT_CREDO;
    const data = localStorage.getItem(KEYS.CREDO_METRICS);
    if (data === null) {
      localStorage.setItem(KEYS.CREDO_METRICS, JSON.stringify(DEFAULT_CREDO));
      return DEFAULT_CREDO;
    }
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_CREDO;
    }
  },
  saveCredo(credo: EngineeringCredoData) {
    localStorage.setItem(KEYS.CREDO_METRICS, JSON.stringify(credo));
    notifyUpdate();
  },

  // Office Hubs
  getOfficeHubs(): OfficeHub[] {
    if (typeof window === "undefined") return DEFAULT_OFFICE_HUBS;
    const data = localStorage.getItem(KEYS.OFFICE_HUBS);
    if (data === null || data.includes('"pune"')) {
      localStorage.setItem(KEYS.OFFICE_HUBS, JSON.stringify(DEFAULT_OFFICE_HUBS));
      return DEFAULT_OFFICE_HUBS;
    }
    try {
      return JSON.parse(data).filter((o: OfficeHub) => o.id !== "pune" && !o.title.toLowerCase().includes("pune"));
    } catch {
      return DEFAULT_OFFICE_HUBS;
    }
  },
  saveOfficeHubs(offices: OfficeHub[]) {
    localStorage.setItem(KEYS.OFFICE_HUBS, JSON.stringify(offices));
    notifyUpdate();
  },
  updateOfficeHub(id: string, updated: Partial<OfficeHub>) {
    const current = this.getOfficeHubs();
    const next = current.map((o) => (o.id === id ? { ...o, ...updated } : o));
    this.saveOfficeHubs(next);
  },

  // Footer Settings
  getFooterSettings(): FooterSettings {
    if (typeof window === "undefined") return DEFAULT_FOOTER_SETTINGS;
    const data = localStorage.getItem(KEYS.FOOTER_SETTINGS);
    if (!data) return DEFAULT_FOOTER_SETTINGS;
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_FOOTER_SETTINGS;
    }
  },
  saveFooterSettings(settings: FooterSettings) {
    localStorage.setItem(KEYS.FOOTER_SETTINGS, JSON.stringify(settings));
    notifyUpdate();
  },

  // Reset to Defaults
  resetAll() {
    localStorage.removeItem(KEYS.HERO_SLIDES);
    localStorage.removeItem(KEYS.ABOUT_DATA);
    localStorage.removeItem(KEYS.TEAM_MEMBERS);
    localStorage.removeItem(KEYS.INQUIRIES);
    localStorage.removeItem(KEYS.SOLUTIONS);
    localStorage.removeItem(KEYS.PROJECTS);
    localStorage.removeItem(KEYS.BLOGS);
    localStorage.removeItem(KEYS.BLOG_CATEGORIES);
    localStorage.removeItem(KEYS.PROJECT_CATEGORIES);
    localStorage.removeItem(KEYS.SOLUTION_CATEGORIES);
    localStorage.removeItem(KEYS.HOME_STATS);
    localStorage.removeItem(KEYS.HOME_ABOUT);
    localStorage.removeItem(KEYS.HOME_BRANDS);
    localStorage.removeItem(KEYS.HOME_INDUSTRIES);
    localStorage.removeItem(KEYS.MILESTONES);
    localStorage.removeItem(KEYS.TESTING_LAB);
    localStorage.removeItem(KEYS.CREDO_METRICS);
    localStorage.removeItem(KEYS.OFFICE_HUBS);
    localStorage.removeItem(KEYS.FOOTER_SETTINGS);
    notifyUpdate();
  },
};

// React Hook to listen for store changes
export function useAdminStore() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setTick((prev) => prev + 1);
    window.addEventListener(EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(EVENT_NAME, handleUpdate);
  }, []);

  return adminStore;
}
