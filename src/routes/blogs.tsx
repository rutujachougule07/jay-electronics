import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  FileText,
  Search,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { subscribeBlogsFromFirestore, type BlogPostDoc } from "@/lib/firestore-service";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Technical Blogs & Compliance Insights | Jay Electronics" },
      {
        name: "description",
        content:
          "Practical guidance written by JEPL senior engineers on meeting statutory RBI physical security guidelines, NBC 2016 fire standards, and optical fiber network topology design.",
      },
      { property: "og:title", content: "Technical Blogs & Norms | Jay Electronics" },
      {
        property: "og:description",
        content: "Security engineering and compliance insights by Jay Electronics Pvt Ltd.",
      },
    ],
  }),
  component: BlogsPage,
});

interface BlogPost {
  id: string;
  tag: string;
  readTime: string;
  title: string;
  description: string;
  takeaway: string;
  date: string;
  image: string;
  content?: string;
}

const DEFAULT_BLOG_POSTS: BlogPost[] = [
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
];

function BlogsPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [firestoreBlogs, setFirestoreBlogs] = useState<BlogPostDoc[]>([]);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  useEffect(() => {
    const unsub = subscribeBlogsFromFirestore((items) => {
      if (items && items.length > 0) {
        setFirestoreBlogs(items);
      }
    });
    return () => unsub();
  }, []);

  const combinedPosts: BlogPost[] = firestoreBlogs.length > 0
    ? firestoreBlogs.map((b, idx) => ({
        id: b.id,
        tag: b.category || "GENERAL",
        readTime: b.readTime || "5 min read",
        title: b.title,
        description: b.excerpt || b.content,
        takeaway: b.excerpt || "Engineering insights by Jay Electronics.",
        date: b.date || "Recent",
        image:
          DEFAULT_BLOG_POSTS[idx % DEFAULT_BLOG_POSTS.length]?.image ||
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
        content: b.content,
      }))
    : DEFAULT_BLOG_POSTS;

  const categories = [
    "All",
    "Compliance & Banking",
    "Networking & Fiber",
    "Smart City & AI",
  ];

  const filteredPosts = combinedPosts.filter((post) => {
    const matchesTag =
      selectedTag === "All" ||
      post.tag.toLowerCase().includes(selectedTag.toLowerCase()) ||
      selectedTag.toLowerCase().includes(post.tag.toLowerCase());

    const matchesQuery =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tag.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesQuery;
  });

  return (
    <div className="bg-[#FFFFFF] text-slate-800 font-sans antialiased min-h-screen pt-4 pb-16 relative overflow-hidden">
      {/* Background Soft Mesh Glow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch pt-2">
          {/* LEFT SIDEBAR BANNER PANEL (4 COLUMNS) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-white via-slate-50/50 to-red-50/30 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs relative overflow-hidden h-full">
            <div className="space-y-5 relative z-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-3.5 py-1 rounded-full border border-red-100 shadow-2xs">
                <span>TECHNICAL BLOGS &amp; NORMS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Security Engineering &amp; Compliance{" "}
                <span className="text-[#DC2626]">Insights</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Practical guidance written by JEPL senior engineers on meeting statutory RBI physical security guidelines, NBC 2016 fire standards, and optical fiber network topology design.
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white border border-slate-200/80 rounded-2xl p-3 flex items-center gap-3.5 shadow-2xs hover:shadow-md transition">
                  <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                    <Shield className="size-4.5 text-[#DC2626]" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-900">
                    Latest Technical Insights
                  </span>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-3 flex items-center gap-3.5 shadow-2xs hover:shadow-md transition">
                  <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                    <FileText className="size-4.5 text-[#DC2626]" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-900">
                    RBI &amp; NBC Guidelines
                  </span>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-3 flex items-center gap-3.5 shadow-2xs hover:shadow-md transition">
                  <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                    <CheckCircle2 className="size-4.5 text-[#DC2626]" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-900">
                    Real-world Implementations
                  </span>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-3 flex items-center gap-3.5 shadow-2xs hover:shadow-md transition">
                  <div className="p-2.5 rounded-xl bg-red-50 text-[#DC2626] shrink-0 border border-red-100">
                    <Award className="size-4.5 text-[#DC2626]" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-900">
                    Expert Engineering Knowledge
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Slogan Accent */}
            <div className="pt-4 border-t border-slate-200/80 relative z-10 flex flex-col items-start space-y-1">
              <span className="text-base sm:text-lg font-serif italic text-slate-900 font-bold tracking-wide">
                Engineering for a Safer Tomorrow
              </span>
              <div className="w-10 h-0.5 bg-[#DC2626] rounded-full" />
            </div>
          </div>

          {/* RIGHT CONTENT PANEL (8 COLUMNS) */}
          <div className="lg:col-span-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Search Bar */}
              <div className="relative flex items-center">
                <Search className="absolute left-4.5 size-4.5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics..."
                  className="w-full bg-white border border-slate-200/90 rounded-full py-3.5 pl-12 pr-14 text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium"
                />
                <button
                  type="button"
                  className="absolute right-2 size-9.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white flex items-center justify-center shadow-md transition cursor-pointer"
                  title="Search"
                >
                  <Search className="size-4 text-white" />
                </button>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center gap-2.5 overflow-x-auto">
                {categories.map((cat) => {
                  const isActive = selectedTag === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedTag(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-extrabold transition cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-[#DC2626] text-white shadow-2xs"
                          : "bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Blog Cards List */}
              <div className="flex lg:block overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-4 lg:gap-0 lg:space-y-4 snap-x snap-mandatory scroll-smooth no-scrollbar">
                {filteredPosts.length === 0 ? (
                  <div className="w-full bg-white border border-slate-200/90 rounded-2xl p-8 text-center space-y-3">
                    <p className="text-sm font-bold text-slate-600">
                      No articles found matching your criteria.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedTag("All");
                        setSearchQuery("");
                      }}
                      className="text-xs font-bold text-[#DC2626] underline cursor-pointer"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => setActiveArticle(post)}
                      className="w-[85vw] sm:w-[380px] lg:w-auto shrink-0 lg:shrink snap-center bg-white border border-slate-200/80 hover:border-red-400 rounded-3xl p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group cursor-pointer"
                    >
                      <div className="w-full sm:w-44 h-36 sm:h-32 rounded-2xl overflow-hidden bg-slate-950 shrink-0 relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="bg-red-50 text-[#DC2626] border border-red-100/80 px-3 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase">
                            {post.tag}
                          </span>
                          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold">
                            <Clock className="size-3.5 text-slate-400" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h2 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                          {post.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed font-medium">
                          {post.description}
                        </p>
                      </div>

                      <div className="shrink-0 self-end sm:self-center">
                        <div className="size-10 rounded-full bg-red-50 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                          <ArrowRight className="size-4.5" />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200/90 relative shadow-2xl">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition cursor-pointer"
            >
              <X className="size-5" />
            </button>

            <div className="space-y-3">
              <span className="bg-red-50 text-[#DC2626] border border-red-100 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                {activeArticle.tag}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {activeArticle.title}
              </h2>
            </div>

            <div className="h-60 w-full rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
              <p>{activeArticle.description}</p>
              {activeArticle.content && <p className="pt-2">{activeArticle.content}</p>}

              <div className="bg-red-50/70 border border-red-100 rounded-2xl p-4 space-y-1.5">
                <div className="text-[11px] font-black uppercase text-[#DC2626] flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  <span>KEY ENGINEERING TAKEAWAY</span>
                </div>
                <p className="text-xs text-slate-900 font-bold leading-relaxed">
                  {activeArticle.takeaway}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/contact"
                onClick={() => setActiveArticle(null)}
                className="px-6 py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-extrabold flex items-center gap-2 shadow-md transition"
              >
                <span>Consult Our Lead Engineer</span>
                <ArrowRight className="size-4" />
              </Link>

              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
