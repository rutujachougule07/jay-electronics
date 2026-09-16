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
  tagline: string;
  description: string;
  founderEyebrow: string;
  founderName: string;
  founderDesignation: string;
  founderExperience: string;
  founderDescription: string;
  founderImage: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  accent: string;
  bio?: string;
};

export type ContactInquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: "New" | "In Progress" | "Resolved";
};

// Default Initial Data
const DEFAULT_HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop",
    title: "IP CCTV & Advanced Surveillance",
    subtitle: "High-definition monitoring & intelligent threat detection",
    alt: "IP CCTV & Security Systems",
  },
  {
    id: "slide-2",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    title: "Enterprise LAN & Fibre Backbone",
    subtitle: "High-speed structured networking & server infrastructure",
    alt: "Network Infrastructure & Servers",
  },
  {
    id: "slide-3",
    image: "/hero-slide-3.jpeg",
    title: "EPABX & Telecommunication Solutions",
    subtitle: "Unified business communications and office automation",
    alt: "Jay Electronics Solutions",
  },
  {
    id: "slide-4",
    image: "/hero-slide-4.jpeg",
    title: "35+ Years of Engineering Excellence",
    subtitle: "Trusted by Government, Healthcare & Corporate Sectors",
    alt: "Jay Electronics Inauguration Event",
  },
];

const DEFAULT_ABOUT_DATA: AboutData = {
  buildingImage: "/about-building.png",
  eyebrow: "ABOUT US",
  heading: "Welcome to JAY ELECTRONICS PVT LTD",
  tagline: "INNOVATIVE SOLUTIONS FOR A SAFER TOMORROW",
  description:
    "For more than three decades, JAY ELECTRONICS PRIVATE LIMITED has been delivering innovative technology solutions that help businesses, industries, educational institutions, hospitals, government organizations, and residential customers improve security, communication and operational efficiency.",
  founderEyebrow: "OUR FOUNDER",
  founderName: "Er. Jayant Wankar",
  founderDesignation: "Founder & Managing Director",
  founderExperience: "35+ Years Experience",
  founderDescription:
    "With a strong foundation in Electronics & Telecommunications Engineering, Er. Jayant Wankar established Jay Electronics in 1989. Under his visionary leadership, the company has grown into a premier provider of integrated security, networking, and telecom infrastructure across Maharashtra.",
  founderImage: "/about-owner.png",
};

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Er. Jayant Wankar",
    role: "Founder & Managing Director",
    experience: "35+ Yrs Experience",
    image: "/team-1.png",
    accent: "from-[#00E5FF] to-[#0088FF]",
    bio: "Pioneer in Telecom & Surveillance Infrastructure with over three decades of engineering expertise.",
  },
  {
    id: "team-2",
    name: "Er. Payal Wankar",
    role: "Director & System Architect",
    experience: "10+ Yrs Experience",
    image: "/team-2.png",
    accent: "from-[#7C4DFF] to-[#00E5FF]",
    bio: "Specializing in Next-Gen IP Surveillance, Fibre Networks, and Smart City Solutions.",
  },
  {
    id: "team-3",
    name: "Er. Rohan Wankar",
    role: "Head of Technical Operations",
    experience: "8+ Yrs Experience",
    image: "/team-3.png",
    accent: "from-[#00E5FF] to-[#00E676]",
    bio: "Directing large-scale turnkey networking, server deployments, and government projects.",
  },
  {
    id: "team-4",
    name: "Er. Amit Patil",
    role: "Senior Security Specialist",
    experience: "12+ Yrs Experience",
    image: "/team-4.png",
    accent: "from-[#FF9100] to-[#FF3D00]",
    bio: "Expert in Fire Safety, EPABX Systems, and Industrial CCTV Audits.",
  },
  {
    id: "team-5",
    name: "Er. Sneha Kulkarni",
    role: "Client Relationship Lead",
    experience: "7+ Yrs Experience",
    image: "/team-5.png",
    accent: "from-[#FF4081] to-[#7C4DFF]",
    bio: "Ensuring 24/7 service delivery, institutional support, and client satisfaction.",
  },
];

const DEFAULT_INQUIRIES: ContactInquiry[] = [
  {
    id: "inq-101",
    name: "Ramesh Shinde",
    email: "ramesh.shinde@sangligov.in",
    phone: "+91 98220 12345",
    subject: "City CCTV Surveillance Expansion Project",
    message: "We need a detailed quote and site inspection for installing 24 new IP CCTV cameras at College Corner Sangli.",
    date: "2026-09-15 11:30 AM",
    status: "New",
  },
  {
    id: "inq-102",
    name: "Dr. Ananya Kulkarni",
    email: "drananya@cityhospital.org",
    phone: "+91 94230 88990",
    subject: "Hospital EPABX & Intercom System",
    message: "Requirement for 50-line IP-PBX communication system for our new hospital wing with intercom and emergency alert integration.",
    date: "2026-09-14 03:45 PM",
    status: "In Progress",
  },
  {
    id: "inq-103",
    name: "Vikram Patil",
    email: "vikram@patilindustries.com",
    phone: "+91 98900 77665",
    subject: "Industrial Fibre Optic Cable Installation",
    message: "Looking for structured LAN networking and fibre optic backbone cabling across our 3 factory sheds in Miraj MIDC.",
    date: "2026-09-12 10:15 AM",
    status: "Resolved",
  },
];

// LocalStorage Keys
const KEYS = {
  HERO_SLIDES: "jay_hero_slides",
  ABOUT_DATA: "jay_about_data",
  TEAM_MEMBERS: "jay_team_members",
  INQUIRIES: "jay_inquiries",
  AUTH_TOKEN: "jay_admin_auth",
};

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
      return JSON.parse(data);
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
    if (typeof window === "undefined") return DEFAULT_INQUIRIES;
    const data = localStorage.getItem(KEYS.INQUIRIES);
    if (!data) return DEFAULT_INQUIRIES;
    try {
      return JSON.parse(data);
    } catch {
      return DEFAULT_INQUIRIES;
    }
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

  // Reset to Defaults
  resetAll() {
    localStorage.removeItem(KEYS.HERO_SLIDES);
    localStorage.removeItem(KEYS.ABOUT_DATA);
    localStorage.removeItem(KEYS.TEAM_MEMBERS);
    localStorage.removeItem(KEYS.INQUIRIES);
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
