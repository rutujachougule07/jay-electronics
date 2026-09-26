import {
  Building2,
  Cable,
  Camera,
  Factory,
  Flame,
  GraduationCap,
  HeartPulse,
  Landmark,
  MonitorPlay,
  Network,
  PhoneCall,
  RadioTower,
  ShieldCheck,
  Sun,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Capability = {
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  { title: "IP CCTV / Analog CCTV Solutions", shortTitle: "CCTV & Surveillance", description: "Integrated analog, HD and IP surveillance systems designed for clear oversight and dependable operation.", icon: Camera },
  { title: "EPABX / IP-PBX Systems", shortTitle: "EPABX / IP-PBX", description: "Scalable business telephony, intercom and unified communication systems.", icon: PhoneCall },
  { title: "LAN / WAN Networking", shortTitle: "LAN / WAN Networking", description: "Wired and wireless network infrastructure engineered for resilient connectivity.", icon: Network },
  { title: "Audio / Video Solutions", shortTitle: "Audio Visual", description: "Presentation, projection, conferencing and professional audio solutions.", icon: MonitorPlay },
  { title: "Structured LAN / Telecom Cabling", shortTitle: "Structured Cabling", description: "Organised copper and telecom cabling for high-performance workplaces and facilities.", icon: Cable },
  { title: "Active LED Board Systems", shortTitle: "LED Display Systems", description: "High-visibility information and display systems for institutions and public environments.", icon: Workflow },
  { title: "Fibre Optic Networks", shortTitle: "Fibre Optics", description: "High-capacity fibre backbone solutions for campus, enterprise and public networks.", icon: RadioTower },
  { title: "City Surveillance", shortTitle: "City Surveillance", description: "Centralised monitoring solutions supporting safer, better-connected public spaces.", icon: ShieldCheck },
  { title: "Fire Security", shortTitle: "Fire Security", description: "Fire alarm and safety systems planned around early detection and reliable response.", icon: Flame },
  { title: "Telecommunications & Office Automation", shortTitle: "Office Automation", description: "Communication and productivity systems that keep organisations connected.", icon: Building2 },
  { title: "Solar Projects", shortTitle: "Solar Solutions", description: "Solar-powered technology and security solutions for practical, efficient deployment.", icon: Sun },
  { title: "Telecom Civil Works", shortTitle: "Telecom Infrastructure", description: "Supporting civil and site work for complete telecommunications rollouts.", icon: RadioTower },
];

export const partners = [
  "CP PLUS",
  "Samsung",
  "Dahua",
  "Matrix",
  "Panasonic",
  "Sony",
  "Axis",
  "Aditya Infotech",
];

export const industries = [
  { title: "Government & Public Sector", description: "Technology systems for government offices, police departments and municipal organisations.", icon: Landmark },
  { title: "Healthcare", description: "Secure communications and surveillance for hospitals and medical facilities.", icon: HeartPulse },
  { title: "Education", description: "Connected, protected learning environments for schools and colleges.", icon: GraduationCap },
  { title: "Industrial", description: "Durable monitoring and connectivity for factories and manufacturing environments.", icon: Factory },
  { title: "Corporate & Enterprise", description: "Integrated communications, networks and security for modern workplaces.", icon: Building2 },
  { title: "Public Infrastructure", description: "Scalable systems for civic facilities and wider public environments.", icon: RadioTower },
];

export const projectCategories = [
  { title: "City Surveillance", category: "Public safety", description: "Integrated camera networks and central monitoring environments for public-space oversight.", icon: Camera },
  { title: "Government Projects", category: "Public sector", description: "Security, telecom and office systems for government departments and civic organisations.", icon: Landmark },
  { title: "Healthcare Projects", category: "Hospitals", description: "Dependable communications, access and surveillance solutions for care environments.", icon: HeartPulse },
  { title: "Court Projects", category: "Institutions", description: "Audio visual, security and network systems for judicial and institutional facilities.", icon: Building2 },
  { title: "Networking Projects", category: "Connectivity", description: "Structured LAN, WAN and fibre backbones for connected organisations.", icon: Network },
  { title: "EPABX Projects", category: "Communication", description: "Business telephony and intercom deployments designed around operational workflows.", icon: PhoneCall },
  { title: "AV Projects", category: "Collaboration", description: "Professional display, conferencing and public-address systems.", icon: MonitorPlay },
];
