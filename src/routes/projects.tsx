import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cpu,
  Landmark,
  Layers,
  Leaf,
  MapPin,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Landmark Projects & Case Studies | Jay Electronics" },
      {
        name: "description",
        content:
          "Explore Jay Electronics proven infrastructure deployments across municipal corporations, industrial foundries, cooperative bank networks, and healthcare campuses in Maharashtra.",
      },
      { property: "og:title", content: "Landmark Projects | Jay Electronics Pvt Ltd" },
      {
        property: "og:description",
        content: "Mission-critical surveillance, fiber optic backhaul, and smart city command center case studies.",
      },
    ],
  }),
  component: ProjectsPage,
});

interface ProjectItem {
  id: string;
  categoryTag: string;
  categoryBadge: string;
  location: string;
  scale: string;
  title: string;
  description: string;
  image: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  footerBadge: string;
  detailedSpecs?: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "smart-city",
    categoryTag: "Government & Municipal",
    categoryBadge: "MUNICIPAL SMART CITY",
    location: "Sangli, Maharashtra",
    scale: "SCALE: 240+ 4K & ANPR CAMERAS • 8X3 VIDEO WALL",
    title: "Smart City Surveillance & Integrated Command Control Center",
    description:
      "Citywide automated surveillance network with automatic number plate recognition (ANPR), speed violation detection, and an 8×3 video wall NOC for police traffic headquarters.",
    image: "/project-smartcity.png",
    metrics: [
      { value: "240+ Units", label: "CAMERAS DEPLOYED" },
      { value: "42 km", label: "FIBER BACKBONE" },
      { value: "8x3 NOC", label: "VIDEO WALL SCALE" },
      { value: "99.98%", label: "UPTIME SLA" },
    ],
    challenge:
      "Managing high traffic congestion across key city river bridges and market junctions, while ensuring zero downtime across diverse outdoor weather extremes and power fluctuations.",
    solution:
      "Designed an armored 10Gbps optical fiber ring connecting 68 strategic city junctions directly to the Police Headquarters command room. Deployed Dahua & CP PLUS 4K Starlight PTZ cameras with automated ANPR, red-light violation detection, and high-efficiency H.265+ encoding.",
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
    description:
      "Armored underground fiber optic ring topology connecting 12 separate foundry workshop sheds with Cisco core routing, zero EMI interference, and full redundancy.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    metrics: [
      { value: "15 km Armored", label: "FIBER DEPLOYED" },
      { value: "12 Sheds", label: "CONNECTED SHEDS" },
      { value: "10 Gbps Ring", label: "THROUGHPUT" },
      { value: "100% Optical", label: "EMI SHIELDING" },
    ],
    challenge:
      "Intense electromagnetic interference (EMI) from massive induction casting furnaces causing frequent copper cable packet loss, combined with heavy abrasive metallic dust in the atmosphere.",
    solution:
      "Engineered a completely isolated single-mode OS2 armored fiber backbone laid through heavy-duty HDPE conduits with sealed IP66 junction boxes. Implemented Cisco industrial Ethernet switches with ruggedized fanless cooling and dual redundant ring protocols.",
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
    description:
      "Sanitary touchless facial authentication for operation theaters, neonatal ward safety interlocking, and IP intercom integrated with emergency hospital PA response systems.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000",
    metrics: [
      { value: "120 Doors", label: "ACCESS POINTS" },
      { value: "650 Beds", label: "HOSPITAL BEDS" },
      { value: "380 Nodes", label: "INTERCOM TERMINALS" },
      { value: "NABH Passed", label: "ACCREDITATION" },
    ],
    challenge:
      "Strict NABH sterile protocol requiring completely contactless operation for surgeons and nurses entering clean zones, coupled with absolute baby-snatching protection in maternity wards.",
    solution:
      "Installed high-speed infrared facial recognition doors with electronic drop-bolt locks and interlocking double-door airlocks. Deployed an IP-based nurse call communication system with instant paging to on-duty nurse stations and integrated emergency codes into the central PA.",
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
      { value: "32 Branches", label: "LOCATIONS" },
      { value: "90 Days HD", label: "RETENTION DAYS" },
      { value: "256 Sensors", label: "STRONGROOM SENSORS" },
      { value: "100% Passed", label: "RBI AUDIT RECORD" },
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

const CATEGORIES = [
  "All",
  "Government & Municipal",
  "Manufacturing & Heavy Industry",
  "Hospitals & Healthcare",
  "Banks & Financial",
];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.categoryTag === activeCategory);

  return (
    <div className="bg-[#F8FAFC] text-slate-900 font-sans antialiased min-h-screen pt-4 pb-12 relative overflow-hidden">
      {/* Subtle Mesh Glow Backgrounds */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        {/* HERO BANNER CARD */}
        <div className="bg-white border border-slate-200/80 rounded-[28px] p-5 sm:p-6 lg:p-7 shadow-sm relative overflow-hidden space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center relative z-10">
            <div className="lg:col-span-6 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-red-50 text-red-600 text-[10.5px] font-black uppercase tracking-widest border border-red-100">
                <Building2 className="size-3.5 text-red-600" />
                <span>LANDMARK DEPLOYMENTS</span>
              </div>

              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.12]">
                  Proven Infrastructure <br />
                  Across <span className="text-red-600">Maharashtra</span>
                </h1>
                <div className="w-7 h-1 bg-red-600 rounded-full" />
              </div>

              <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed max-w-xl">
                Explore our engineering deployments across municipal corporations, industrial foundries, major cooperative bank networks, and multispecialty healthcare campuses.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px] font-bold text-slate-900">
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                  <Shield className="size-3 text-red-600" />
                  <span>Reliable Infrastructure</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                  <Settings className="size-3 text-red-600" />
                  <span>Engineering Excellence</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                  <Users className="size-3 text-red-600" />
                  <span>Stronger Communities</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                  <Leaf className="size-3 text-red-600" />
                  <span>Sustainable Growth</span>
                </div>
              </div>
            </div>

            {/* Skewed Images */}
            <div className="lg:col-span-6 flex items-center justify-end relative">
              <div className="relative flex items-center gap-3 sm:gap-4 w-full max-w-xl justify-end pr-0 sm:pr-24 pt-2 sm:pt-0">
                <div className="h-52 sm:h-60 lg:h-[255px] w-1/3 overflow-hidden rounded-[20px] transform -skew-x-12 border-2 border-white shadow-lg group bg-slate-950 relative">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                    alt="Smart Cities"
                    className="w-full h-full object-cover object-center transform skew-x-12 scale-[1.28] group-hover:scale-140 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-end p-3.5 transform skew-x-12">
                    <div className="w-5 h-0.5 bg-red-500 mb-1.5 rounded-full" />
                    <div className="text-xs font-black text-white leading-tight">Smart Cities</div>
                  </div>
                </div>

                <div className="h-52 sm:h-60 lg:h-[255px] w-1/3 overflow-hidden rounded-[20px] transform -skew-x-12 border-2 border-white shadow-lg group bg-slate-950 relative">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    alt="Industrial Growth"
                    className="w-full h-full object-cover object-center transform skew-x-12 scale-[1.28] group-hover:scale-140 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-end p-3.5 transform skew-x-12">
                    <div className="w-5 h-0.5 bg-red-500 mb-1.5 rounded-full" />
                    <div className="text-xs font-black text-white leading-tight">Industrial</div>
                  </div>
                </div>

                <div className="h-52 sm:h-60 lg:h-[255px] w-1/3 overflow-hidden rounded-[20px] transform -skew-x-12 border-2 border-white shadow-lg group bg-slate-950 relative">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                    alt="Healthcare"
                    className="w-full h-full object-cover object-center transform skew-x-12 scale-[1.28] group-hover:scale-140 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-end p-3.5 transform skew-x-12">
                    <div className="w-5 h-0.5 bg-red-500 mb-1.5 rounded-full" />
                    <div className="text-xs font-black text-white leading-tight">Healthcare</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Floating Stats */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-[20px] p-3 sm:px-6 sm:py-3 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
              <div className="flex items-center gap-2.5">
                <div className="size-9 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                  <Video className="size-4" />
                </div>
                <div>
                  <div className="text-base font-black text-slate-900">240+</div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-slate-400">4K CAMERAS</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="size-9 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                  <Layers className="size-4" />
                </div>
                <div>
                  <div className="text-base font-black text-slate-900">15 km</div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-slate-400">FIBER RING</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="size-9 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                  <Landmark className="size-4" />
                </div>
                <div>
                  <div className="text-base font-black text-slate-900">32</div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-slate-400">BANK BRANCHES</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="size-9 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                  <ShieldCheck className="size-4 text-red-600" />
                </div>
                <div>
                  <div className="text-base font-black text-red-600">99.98%</div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-slate-400">UPTIME SLA</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                INFRASTRUCTURE FOR MAHARASHTRA
              </span>
              <div className="size-7 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0">
                <ArrowRight className="size-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex items-center justify-between gap-4 flex-wrap bg-white border border-slate-200/80 rounded-2xl p-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                      : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-400 font-bold px-2">
            Showing {filteredProjects.length} Projects
          </div>
        </div>

        {/* PROJECTS GRID (2 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 pt-1">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/80 rounded-[23px] h-full flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative h-60 sm:h-64 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="size-3 text-white" />
                    <span>{project.categoryBadge}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-slate-950/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-slate-800">
                    <MapPin className="size-3.5 text-red-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <div className="text-[11px] font-black uppercase tracking-wider text-red-600">
                    {project.scale}
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="text-lg sm:text-xl font-black text-slate-900">
                      {project.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-2 border border-slate-200"
                      >
                        <div className="text-xs font-black text-slate-900">
                          {m.value}
                        </div>
                        <div className="text-[8.5px] font-extrabold uppercase tracking-wider text-slate-400 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-200 mt-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-red-600">
                  <ShieldCheck className="size-4 shrink-0 text-red-600" />
                  <span>{project.footerBadge}</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-800 hover:text-red-600 text-xs font-extrabold border border-slate-200 transition-colors cursor-pointer"
                  >
                    Case Study
                  </button>

                  <Link
                    to="/contact"
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md shadow-red-600/20 transition cursor-pointer"
                  >
                    <span>Request Similar</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDY MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-[28px] max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-50 text-slate-800 hover:bg-red-50 hover:text-red-600 border border-slate-200"
            >
              <X className="size-5" />
            </button>

            <div className="space-y-3">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">
                {selectedProject.categoryBadge}
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {selectedProject.title}
              </h2>
            </div>

            <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Cpu className="size-4 text-red-600" />
                <span>Technical Specifications &amp; Architecture</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProject.detailedSpecs?.map((spec, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="size-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <Link
                to="/contact"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-red-600/20"
              >
                <span>Consult Our Lead Engineer</span>
                <ArrowRight className="size-4" />
              </Link>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-3 rounded-xl bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200 text-xs font-bold"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
