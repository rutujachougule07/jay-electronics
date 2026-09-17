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
    <div className="bg-[#F7F9FC] text-[#17202A] font-sans antialiased min-h-screen pt-2 sm:pt-4 pb-8">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* LEFT SIDEBAR BANNER PANEL */}
          <div className="lg:col-span-4 bg-[#EAF6FC] border border-[#DCE7EE] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between space-y-5 shadow-xs relative overflow-hidden h-full">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#0A76A8]">
                <span>TECHNICAL BLOGS &amp; NORMS</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-[#17202A] tracking-tight leading-tight">
                Security Engineering &amp; Compliance{" "}
                <span className="text-[#0A76A8]">Insights</span>
              </h1>

              <p className="text-xs sm:text-sm text-[#647786] font-normal leading-relaxed">
                Practical guidance written by JEPL senior engineers on meeting statutory RBI physical security guidelines, NBC 2016 fire standards, and optical fiber network topology design.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="bg-white border border-[#DCE7EE] rounded-2xl p-2.5 flex items-center gap-3 shadow-xs">
                  <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                    <Shield className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-[#17202A]">
                    Latest Technical Insights
                  </span>
                </div>

                <div className="bg-white border border-[#DCE7EE] rounded-2xl p-2.5 flex items-center gap-3 shadow-xs">
                  <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                    <FileText className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-[#17202A]">
                    RBI &amp; NBC Guidelines
                  </span>
                </div>

                <div className="bg-white border border-[#DCE7EE] rounded-2xl p-2.5 flex items-center gap-3 shadow-xs">
                  <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-[#17202A]">
                    Real-world Implementations
                  </span>
                </div>

                <div className="bg-white border border-[#DCE7EE] rounded-2xl p-2.5 flex items-center gap-3 shadow-xs">
                  <div className="p-2 rounded-xl bg-[#EAF6FC] text-[#0A76A8] shrink-0">
                    <Award className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-[#17202A]">
                    Expert Engineering Knowledge
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#DCE7EE] relative z-10">
              <span className="text-base sm:text-lg font-serif italic text-[#17202A] font-semibold tracking-wide">
                Engineering for a Safer Tomorrow
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT PANEL */}
          <div className="lg:col-span-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative flex items-center">
                <Search className="absolute left-4.5 size-4.5 text-[#647786] pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics..."
                  className="w-full bg-white border border-[#DCE7EE] rounded-full py-3.5 pl-12 pr-14 text-sm text-[#17202A] placeholder:text-[#647786] shadow-xs focus:outline-none focus:border-[#0A76A8] transition font-medium"
                />
                <button
                  type="button"
                  className="absolute right-2 size-9 rounded-full bg-[#0A76A8] hover:bg-[#0896d7] text-white flex items-center justify-center shadow-md transition cursor-pointer"
                  title="Search"
                >
                  <Search className="size-4 text-white" />
                </button>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 overflow-x-auto">
                {categories.map((cat) => {
                  const isActive = selectedTag === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedTag(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-extrabold transition cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-[#0A76A8] text-white shadow-md"
                          : "bg-white text-[#647786] border border-[#DCE7EE] hover:bg-[#EAF6FC]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Blog Cards */}
              <div className="space-y-3.5">
                {filteredPosts.length === 0 ? (
                  <div className="bg-white border border-[#DCE7EE] rounded-2xl p-8 text-center space-y-3">
                    <p className="text-sm font-bold text-[#647786]">
                      No articles found matching your criteria.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedTag("All");
                        setSearchQuery("");
                      }}
                      className="text-xs font-bold text-[#0A76A8] underline"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => setActiveArticle(post)}
                      className="bg-white border border-[#DCE7EE] hover:border-[#0A76A8] rounded-[20px] p-3.5 sm:p-4 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer"
                    >
                      <div className="w-full sm:w-40 h-28 rounded-[14px] overflow-hidden bg-[#041321] shrink-0 relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="bg-[#EAF6FC] text-[#0A76A8] border border-[#DCE7EE] px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                            {post.tag}
                          </span>
                          <div className="flex items-center gap-1 text-[#647786] text-xs font-semibold">
                            <Clock className="size-3.5 text-[#647786]" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h2 className="text-sm sm:text-base font-black text-[#17202A] group-hover:text-[#0A76A8] transition-colors leading-snug">
                          {post.title}
                        </h2>

                        <p className="text-xs text-[#647786] line-clamp-2 leading-relaxed">
                          {post.description}
                        </p>
                      </div>

                      <div className="shrink-0 self-end sm:self-center">
                        <div className="size-9 rounded-full bg-[#EAF6FC] group-hover:bg-[#0A76A8] text-[#0A76A8] group-hover:text-white flex items-center justify-center transition-all shadow-xs">
                          <ArrowRight className="size-4" />
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

      {/* ARTICLE MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-[28px] max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-[#DCE7EE] relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F7F9FC] text-[#17202A] border border-[#DCE7EE]"
            >
              <X className="size-5" />
            </button>

            <div className="space-y-3">
              <span className="bg-[#EAF6FC] text-[#0A76A8] border border-[#DCE7EE] px-3 py-1 rounded-full text-[10px] font-black uppercase">
                {activeArticle.tag}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#17202A]">
                {activeArticle.title}
              </h2>
            </div>

            <div className="h-56 w-full rounded-2xl overflow-hidden bg-[#041321]">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-[#17202A] leading-relaxed font-normal">
              <p>{activeArticle.description}</p>
              {activeArticle.content && <p className="pt-2">{activeArticle.content}</p>}

              <div className="bg-[#EAF6FC] border border-[#DCE7EE] rounded-2xl p-4 space-y-1">
                <div className="text-[11px] font-black uppercase text-[#0A76A8] flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  <span>KEY ENGINEERING TAKEAWAY</span>
                </div>
                <p className="text-xs text-[#17202A] font-bold leading-relaxed">
                  {activeArticle.takeaway}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DCE7EE] flex items-center justify-between">
              <Link
                to="/contact"
                onClick={() => setActiveArticle(null)}
                className="px-6 py-3 rounded-xl bg-[#0A76A8] hover:bg-[#0896d7] text-white text-xs font-bold flex items-center gap-2"
              >
                <span>Consult Our Lead Engineer</span>
                <ArrowRight className="size-4" />
              </Link>

              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2.5 rounded-xl bg-[#F7F9FC] text-[#17202A] border border-[#DCE7EE] text-xs font-bold"
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
