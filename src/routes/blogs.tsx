import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
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
}

const BLOG_POSTS: BlogPost[] = [
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
  },
];

function BlogsPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [firestoreBlogs, setFirestoreBlogs] = useState<BlogPostDoc[]>([]);

  useEffect(() => {
    const unsub = subscribeBlogsFromFirestore((items) => {
      if (items && items.length > 0) {
        setFirestoreBlogs(items);
      }
    });
    return () => unsub();
  }, []);

  const combinedPosts: BlogPost[] = firestoreBlogs.length > 0
    ? firestoreBlogs.map((b) => ({
        id: b.id,
        tag: b.category || "GENERAL",
        readTime: b.readTime || "5 min read",
        title: b.title,
        description: b.excerpt || b.content,
        takeaway: b.excerpt || "Engineering insights by Jay Electronics.",
        date: b.date || "Recent",
      }))
    : BLOG_POSTS;

  const tags = [
    "All",
    ...Array.from(new Set(combinedPosts.map((p) => p.tag))),
  ];

  const filteredPosts =
    selectedTag === "All"
      ? combinedPosts
      : combinedPosts.filter((p) => p.tag === selectedTag);

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
            <span className="text-[#DC2626]">TECHNICAL BLOGS & NORMS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Security Engineering & Compliance Insights
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-4xl font-normal leading-relaxed">
            Practical guidance written by JEPL senior engineers on meeting statutory RBI physical security guidelines, NBC 2016 fire standards, and optical fiber network topology design.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition cursor-pointer ${
                selectedTag === tag
                  ? "bg-[#0B132B] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* =========================================================================
           BLOG POSTS GRID (3 COLUMNS)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header Tag & Read Time */}
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-rose-50 text-[#DC2626] border border-rose-100 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                    <Clock className="size-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-snug tracking-tight hover:text-[#DC2626] transition cursor-pointer">
                  {post.title}
                </h2>

                {/* Article Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {post.description}
                </p>

                {/* Key Engineering Takeaway Box */}
                <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 space-y-1.5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    KEY ENGINEERING TAKEAWAY:
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {post.takeaway}
                  </p>
                </div>
              </div>

              {/* Card Footer: Date & Read Article Link */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold">
                <span className="text-slate-400 font-mono">{post.date}</span>

                <Link
                  to="/contact"
                  className="text-[#DC2626] font-extrabold flex items-center gap-1 hover:gap-2 transition-all group"
                >
                  <span>Read Article</span>
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
