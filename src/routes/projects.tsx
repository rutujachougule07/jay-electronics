import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
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
      { value: "8x3 Display NOC", label: "VIDEO WALL SCALE" },
      { value: "99.98%", label: "UPTIME SLA" },
    ],
    challenge:
      "Managing high traffic congestion across key city river bridges and market junctions, while ensuring zero downtime across diverse outdoor weather extremes and power fluctuations.",
    solution:
      "Designed an armored 10Gbps optical fiber ring connecting 68 strategic city junctions directly to the Police Headquarters command room. Deployed Dahua & CP PLUS 4K Starlight PTZ cameras with automated ANPR, red-light violation detection, and high-efficiency H.265+ encoding.",
    footerBadge: "100% Uptime Maintained",
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
      { value: "12 Sheds", label: "INTERCONNECTED SHEDS" },
      { value: "10 Gbps Ring", label: "THROUGHPUT" },
      { value: "100% Optical Isolation", label: "EMI SHIELDING" },
    ],
    challenge:
      "Intense electromagnetic interference (EMI) from massive induction casting furnaces causing frequent copper cable packet loss, combined with heavy abrasive metallic dust in the atmosphere.",
    solution:
      "Engineered a completely isolated single-mode OS2 armored fiber backbone laid through heavy-duty HDPE conduits with sealed IP66 junction boxes. Implemented Cisco industrial Ethernet switches with ruggedized fanless cooling and dual redundant ring protocols.",
    footerBadge: "10Gbps Ring Topology",
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
      { value: "380 IP Nodes", label: "INTERCOM TERMINALS" },
      { value: "NABH Fully Passed", label: "ACCREDITATION" },
    ],
    challenge:
      "Strict NABH sterile protocol requiring completely contactless operation for surgeons and nurses entering clean zones, coupled with absolute baby-snatching protection in maternity wards.",
    solution:
      "Installed high-speed infrared facial recognition doors with electronic drop-bolt locks and interlocking double-door airlocks. Deployed an IP-based nurse call communication system with instant paging to on-duty nurse stations and integrated emergency codes into the central PA.",
    footerBadge: "NABH Compliant",
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

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.categoryTag === activeCategory);

  return (
    <div className="bg-[#F8FAFC] text-slate-800 font-sans antialiased min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* =========================================================================
           TOP BREADCRUMB & HEADER SECTION
           ========================================================================= */}
        <div className="space-y-3">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <Link to="/" className="text-slate-500 hover:text-slate-800">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#DC2626]">LANDMARK PROJECTS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Proven Infrastructure Across Maharashtra
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-normal leading-relaxed">
            Explore our engineering deployments across municipal corporations, industrial foundries, major cooperative bank networks, and multispecialty healthcare campuses.
          </p>
        </div>

        {/* =========================================================================
           FILTER TABS
           ========================================================================= */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0B132B] text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200/90 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
           PROJECTS GRID (2 COLUMNS)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner Container */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000";
                    }}
                  />

                  {/* Top Left Red Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-md">
                    {project.categoryBadge}
                  </div>

                  {/* Bottom Right Location Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10">
                    <MapPin className="size-3.5 text-rose-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Scale line */}
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#DC2626]">
                    {project.scale}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* 4 Metrics Box */}
                  <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-sm sm:text-base font-black text-slate-900">
                          {m.value}
                        </div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Engineering Challenge Box */}
                  <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4 sm:p-5 space-y-1.5">
                    <div className="text-xs font-bold text-slate-900">
                      Engineering Challenge:
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Engineered Solution Box */}
                  <div className="bg-rose-50/40 border border-rose-100 rounded-2xl p-4 sm:p-5 space-y-1.5">
                    <div className="text-xs font-bold text-[#DC2626]">
                      Engineered Solution:
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100 mt-2">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-600">
                  <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                  <span>{project.footerBadge}</span>
                </div>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] active:bg-[#020617] text-white text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 transition duration-200 group cursor-pointer shadow-md"
                >
                  <span>Request Similar Architecture</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
