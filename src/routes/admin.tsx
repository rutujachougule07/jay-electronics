import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Cpu,
  ExternalLink,
  Eye,
  EyeOff,
  FileText,
  Image as ImageIcon,
  Key,
  Layers,
  LayoutDashboard,
  Lock,
  LogOut,
  Mail,
  MapPin,
  MessageSquare,
  MoveDown,
  MoveUp,
  Pencil,
  Plus,
  Radio,
  RefreshCw,
  Save,
  Search,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Tag,
  Trash2,
  TrendingUp,
  User,
  UserCheck,
  UserPlus,
  Users,
  Headphones,
  Calendar,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  adminStore,
  useAdminStore,
  type CustomTab,
  type HeroSlide,
  type TeamMember,
  type ContactInquiry,
  type SolutionModule,
  type ProjectItemData,
  type BlogPostData,
  type MilestoneItem,
  type TestingLabItem,
  type OfficeHub,
  type HomeStatItem,
  type HomeAboutData,
  type HomeBrandItem,
  type HomeIndustryItem,
  type HomeSolutionItem,
  type AboutData,
  type EngineeringCredoData,
} from "@/lib/admin-store";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { ImageDropzone } from "@/components/ui/image-dropzone";
import { EditableImageCard } from "@/components/ui/editable-image-card";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal | Jay Electronics Pvt Ltd" },
      { name: "description", content: "Jay Electronics Admin Dashboard Control Center" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const store = useAdminStore();
  const { currentUser, loginWithEmail, loginWithGoogle, logout: authLogout } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  const isLoggedIn = store.isLoggedIn() || !!currentUser;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setAuthLoading(true);

    try {
      await loginWithEmail(username, password);
      setAuthLoading(false);
      return;
    } catch (firebaseErr: any) {
      // Fallback check against local admin store
      const localSuccess = store.login(username, password);
      if (localSuccess) {
        setAuthLoading(false);
        return;
      }
      setLoginError(
        firebaseErr?.message || "Invalid credentials! (Default: admin123@gmail.com / admin123)"
      );
    } finally {
      setAuthLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoginError("");
    setAuthLoading(true);
    try {
      await loginWithGoogle();
    } catch (err: any) {
      setLoginError(err.message || "Google Sign-In failed.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    store.logout();
    authLogout();
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen lg:h-screen w-full bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#EBF2FA] text-slate-900 flex items-center justify-center relative font-sans overflow-x-hidden selection:bg-red-500 selection:text-white p-4 sm:p-6 lg:px-8 lg:py-4 lg:overflow-hidden">
        {/* TOP-LEFT RED VECTOR ACCENT (Compact size so it doesn't overlap logo/content) */}
        <div className="absolute top-0 left-0 z-0 pointer-events-none w-48 h-48 sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px]">
          <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-sm">
            <path d="M0,0 L320,0 L160,260 L0,180 Z" fill="#991B1B" opacity="0.95" />
            <path d="M0,0 L270,0 L120,240 L0,140 Z" fill="#DC2626" />
            <path d="M180,0 L360,0 L240,180 Z" fill="#EF4444" opacity="0.9" />
            <path
              d="M0,120 Q180,180 320,60"
              stroke="#EF4444"
              strokeWidth="3"
              fill="none"
              opacity="0.8"
            />
            <circle cx="320" cy="60" r="4" fill="#EF4444" opacity="0.9" />
          </svg>
        </div>

        {/* BOTTOM-LEFT RED VECTOR ACCENT */}
        <div className="absolute bottom-0 left-0 z-0 pointer-events-none w-48 h-48 sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px]">
          <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-sm">
            <path d="M0,500 L0,220 L260,500 Z" fill="#7F1D1D" opacity="0.9" />
            <path d="M0,500 L0,280 L200,500 Z" fill="#DC2626" />
            <path d="M0,280 L120,200 L240,420 L200,500 Z" fill="#EF4444" />
            <path d="M0,180 Q280,340 500,500 L0,500 Z" fill="#2563EB" opacity="0.08" />
          </svg>
        </div>

        {/* DOT MATRIX GRID PATTERN (Middle-Left) */}
        <div className="absolute top-1/3 left-6 sm:left-12 lg:left-16 z-0 pointer-events-none opacity-40 hidden lg:block">
          <div className="grid grid-cols-4 gap-2.5">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-slate-400" />
            ))}
          </div>
        </div>

        {/* SOFT AMBIENT BLUE GLOW ON THE RIGHT */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sky-200/50 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />

        {/* Main Split Layout Container (Compact max-w-6xl for optimal spacing) */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center relative z-10 py-2 sm:py-4 lg:py-0">
          {/* LEFT COLUMN - BRANDING & SLOGAN & FEATURES (Shifted rightwards to clear red background completely) */}
          <div className="lg:col-span-6 space-y-5 lg:space-y-6 pl-4 sm:pl-12 lg:pl-28 pr-0 lg:pr-2">
            {/* Top Brand Logo */}
            <div className="flex flex-col items-start space-y-0.5">
              <img
                src="/jay-logo.jpeg"
                alt="Jay Electronics Logo"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain drop-shadow-sm"
              />
              <div className="text-[11px] sm:text-xs font-extrabold tracking-[0.25em] text-slate-500 uppercase pt-1.5 pl-0.5">
                ADMIN CONTROL CENTER
              </div>
            </div>

            {/* Headline and Top-Right Block Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
              {/* Main Headline (Cols 8) */}
              <div className="sm:col-span-8 space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.12] tracking-tight">
                  Innovation
                  <br />
                  For a Smarter
                  <br />
                  <span>
                    <span className="text-[#DC2626]">Tom</span>
                    <span className="text-[#0066FF]">orrow</span>
                  </span>
                </h1>

                {/* Subtitle */}
                <div className="pt-1">
                  <p className="text-slate-600 font-bold text-base sm:text-lg leading-snug">
                    Premium Electronics Solutions
                  </p>
                  <p className="text-slate-600 font-semibold text-xs sm:text-sm">
                    for Everyone
                  </p>
                </div>
              </div>

              {/* Technology Connects Block (Cols 4) - Top Right beside Headline */}
              <div className="sm:col-span-4 border-l-2 border-red-500 pl-3.5 py-0.5 flex flex-col items-start justify-center">
                <div className="text-[10px] sm:text-xs font-extrabold tracking-[0.2em] text-slate-400 uppercase leading-relaxed">
                  <div>TECHNOLOGY</div>
                  <div>CONNECTS</div>
                  <div>A BETTER</div>
                  <div>TOMORROW</div>
                </div>
                <div className="w-8 h-1 bg-red-600 rounded-full mt-2" />
              </div>
            </div>

            {/* 4 Feature Cards (White Floating Cards with Clean Badges) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-1">
              {/* Secure Access */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200/80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 mb-2 group-hover:scale-110 transition-transform shadow-xs">
                  <Shield className="size-5.5 text-red-500" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                  Secure
                </span>
                <span className="text-xs font-bold text-slate-400 leading-tight">Access</span>
                <div className="w-6 h-0.5 bg-red-500 rounded-full mt-2" />
              </div>

              {/* 24/7 Availability */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200/80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-2 group-hover:scale-110 transition-transform shadow-xs">
                  <Clock className="size-5.5 text-blue-500" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                  24/7
                </span>
                <span className="text-xs font-bold text-slate-400 leading-tight">
                  Availability
                </span>
                <div className="w-6 h-0.5 bg-blue-500 rounded-full mt-2" />
              </div>

              {/* Global Support */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200/80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 mb-2 group-hover:scale-110 transition-transform shadow-xs">
                  <Headphones className="size-5.5 text-red-500" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                  Global
                </span>
                <span className="text-xs font-bold text-slate-400 leading-tight">Support</span>
                <div className="w-6 h-0.5 bg-red-500 rounded-full mt-2" />
              </div>

              {/* Better Management */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200/80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-2 group-hover:scale-110 transition-transform shadow-xs">
                  <BarChart3 className="size-5.5 text-blue-500" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                  Better
                </span>
                <span className="text-xs font-bold text-slate-400 leading-tight">
                  Management
                </span>
                <div className="w-6 h-0.5 bg-blue-500 rounded-full mt-2" />
              </div>
            </div>

            {/* Bottom Slogan Bar */}
            <div className="flex items-center pt-2">
              <div className="w-10 h-1 bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 rounded-full mr-2.5" />
              <span className="text-[10px] sm:text-xs font-extrabold tracking-[0.2em] text-slate-500 uppercase">
                A SMARTER • SAFER • CONNECTED WORLD
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN - FLOATING WHITE LOGIN CARD (Positioned close to left content without wide gap) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start lg:pl-4 relative z-10">
            {/* Outer Subtle Frame Accent */}
            <div className="relative w-full max-w-md lg:max-w-lg p-[2px] rounded-[30px] bg-gradient-to-br from-red-500/70 via-slate-200 to-blue-500/70 shadow-[0_15px_45px_rgba(0,0,0,0.08)]">
              {/* White Card */}
              <div className="w-full bg-white rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-xl relative z-10 text-slate-900">
                {/* Header inside card */}
                <div className="flex flex-col items-center text-center mb-5">
                  <img
                    src="/jay-logo.jpeg"
                    alt="Jay Electronics Logo"
                    className="h-9 sm:h-11 w-auto object-contain"
                  />
                  <div className="text-[10px] sm:text-xs font-extrabold tracking-[0.2em] text-slate-500 uppercase mt-1.5">
                    ADMIN CONTROL CENTER
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  {loginError && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs font-bold text-red-600 flex items-start gap-2.5">
                      <ShieldAlert className="size-4.5 shrink-0 text-red-500 mt-0.5" />
                      <span>{loginError}</span>
                    </div>
                  )}

                  {/* Email Input */}
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="admin123@gmail.com"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-300/80 py-3.5 pl-12 pr-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 font-medium focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all outline-none"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-300/80 py-3.5 pl-12 pr-12 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 font-medium focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition cursor-pointer p-1"
                    >
                      {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                    </button>
                  </div>

                  {/* Checkbox and Forgot Password Link */}
                  <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-900 select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 size-4 cursor-pointer accent-blue-600"
                      />
                      <span className="font-extrabold">Remember Me</span>
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setLoginError(
                          "Default Admin Credentials: admin123@gmail.com / admin123"
                        )
                      }
                      className="text-slate-700 hover:text-red-600 transition-colors font-bold cursor-pointer text-xs sm:text-sm"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Submit Sign In Button */}
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer group mt-2 transform hover:scale-[1.01]"
                  >
                    <span>{authLoading ? "Authenticating..." : "Sign In"}</span>
                    <ArrowRight className="size-5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </form>

                {/* Back to main website link */}
                <div className="mt-5 pt-1 text-center">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold text-slate-800 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="size-4" /> Back to Main Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <DashboardLayout onLogout={handleLogout} />;
}

/* =========================================================================
   DASHBOARD LAYOUT (ULTRA PROFESSIONAL & ATTRACTIVE SAAS DESIGN)
   ========================================================================= */
type SidebarTab =
  | "dashboard"
  | "solutions"
  | "projects"
  | "blogs"
  | "banners"
  | "homeStats"
  | "homeAbout"
  | "homeFounder"
  | "homeSolutions"
  | "homeBrands"
  | "homeIndustries"
  | "about"
  | "milestones"
  | "testingLab"
  | "offices"
  | "team"
  | "inquiries";

function DashboardLayout({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<SidebarTab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const store = useAdminStore();
  const heroSlides = store.getHeroSlides();
  const teamMembers = store.getTeamMembers();
  const inquiries = store.getInquiries();
  const solutions = store.getSolutions();
  const projects = store.getProjects();
  const blogs = store.getBlogs();
  const newInquiriesCount = inquiries.filter((i) => i.status === "New").length;

  return (
    <div className="h-screen w-screen overflow-hidden overscroll-none bg-[#F4F6FA] text-slate-800 flex font-sans antialiased">
      {/* 1. SIDEBAR (LIGHT CLEAN THEME - INDEPENDENT SCROLL NO VISIBLE SCROLLBAR LINE) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 h-screen bg-white text-slate-800 flex flex-col justify-between p-5 border-r border-slate-200/80 shadow-sm transition-transform duration-300 lg:static lg:translate-x-0 shrink-0 relative overflow-hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-4 relative z-10 flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* Sidebar Top Logo Branding (Fixed at Top) */}
          <div className="pt-2 px-1 flex flex-col items-start space-y-1 shrink-0">
            <img
              src="/jay-logo.jpeg"
              alt="Jay Electronics Logo"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-xs"
            />
            <div className="text-[10px] font-extrabold tracking-[0.25em] text-slate-500 uppercase pt-2 pl-0.5">
              ADMIN CONTROL CENTER
            </div>
          </div>

          {/* Navigation Categories - Independent Middle Scroll with NO visible scrollbar line */}
          <nav
            className="space-y-4 pt-2 flex-1 pr-1 overflow-y-auto overscroll-contain scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Sidebar Navigation"
          >
            {[
              {
                category: "OVERVIEW",
                items: [
                  {
                    id: "dashboard",
                    label: "Dashboard",
                    icon: LayoutDashboard,
                    badge: null,
                  },
                ],
              },
              {
                category: "HOME PAGE (8 SECTIONS)",
                items: [
                  {
                    id: "banners",
                    label: "1. Hero Banners",
                    icon: ImageIcon,
                    badge: null,
                  },
                  {
                    id: "homeStats",
                    label: "2. Impact & Key Stats",
                    icon: BarChart3,
                    badge: null,
                  },
                  {
                    id: "homeAbout",
                    label: "3. Welcome & Capabilities",
                    icon: FileText,
                    badge: null,
                  },
                  {
                    id: "homeFounder",
                    label: "4. Founder & Leadership",
                    icon: UserCheck,
                    badge: null,
                  },
                  {
                    id: "homeSolutions",
                    label: "5. Solutions & Offerings",
                    icon: Layers,
                    badge: null,
                  },
                  {
                    id: "homeBrands",
                    label: "6. Brand Partners",
                    icon: Award,
                    badge: null,
                  },
                  {
                    id: "homeIndustries",
                    label: "7. Industries We Serve",
                    icon: Building2,
                    badge: null,
                  },
                  {
                    id: "team",
                    label: "8. Team Members",
                    icon: Users,
                    badge: null,
                  },
                ],
              },
              {
                category: "ABOUT PAGE",
                items: [
                  {
                    id: "about",
                    label: "About Us & Hero Credo",
                    icon: FileText,
                    badge: null,
                  },
                  {
                    id: "milestones",
                    label: "Historical Milestones",
                    icon: Calendar,
                    badge: null,
                  },
                  {
                    id: "testingLab",
                    label: "In-House Testing Lab",
                    icon: Wrench,
                    badge: null,
                  },
                ],
              },
              {
                category: "SOLUTIONS PAGE",
                items: [
                  {
                    id: "solutions",
                    label: "Solutions Modules",
                    icon: Layers,
                    badge: null,
                  },
                ],
              },
              {
                category: "PROJECTS PAGE",
                items: [
                  {
                    id: "projects",
                    label: "Landmark Projects",
                    icon: Building2,
                    badge: null,
                  },
                ],
              },
              {
                category: "BLOGS PAGE",
                items: [
                  {
                    id: "blogs",
                    label: "Blogs & Circulars",
                    icon: BookOpen,
                    badge: null,
                  },
                ],
              },
              {
                category: "CONTACT PAGE & LEADS",
                items: [
                  {
                    id: "inquiries",
                    label: "Inquiries & Leads",
                    icon: Mail,
                    badge: newInquiriesCount > 0 ? `${newInquiriesCount} NEW` : null,
                  },
                  {
                    id: "offices",
                    label: "Your Location",
                    icon: MapPin,
                    badge: null,
                  },
                ],
              },
            ].map((section, secIdx) => (
              <div key={section.category} className={secIdx > 0 ? "pt-2 border-t border-slate-100" : ""}>
                {/* Category Header Label */}
                <div className="px-2 pb-1 text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span>{section.category}</span>
                  <span className="h-px bg-slate-100 flex-1" />
                </div>

                {/* Category Items */}
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id as SidebarTab);
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                          isActive
                            ? "bg-[#FFF0F2] text-[#DC2626] font-extrabold shadow-2xs border-l-4 border-[#DC2626]"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-semibold"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon
                            className={`size-4 transition-colors ${
                              isActive ? "text-[#DC2626]" : "text-slate-500 group-hover:text-slate-800"
                            }`}
                          />
                          <span className="tracking-tight text-xs sm:text-sm">{item.label}</span>
                        </div>

                        {item.badge !== null && (
                          <span
                            className={`font-black flex items-center justify-center text-[10px] px-2 py-0.5 rounded-full ${
                              isActive
                                ? "bg-[#DC2626] text-white shadow-2xs"
                                : "bg-[#DC2626] text-white size-5 rounded-full p-0 leading-none"
                            }`}
                          >
                            {item.badge as string}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Sidebar Bottom Direct Actions: View Website & Logout Button (Placed at the VERY END of sidebar menu) */}
            <div className="pt-4 border-t border-slate-200 space-y-2 mt-4 pb-4">
              <Link
                to="/"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition cursor-pointer"
              >
                <ExternalLink className="size-3.5 text-blue-600" />
                <span>View Live Website</span>
              </Link>

              <button
                type="button"
                onClick={onLogout}
                className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-red-50 hover:bg-red-600 text-[#DC2626] hover:text-white border border-red-100 font-extrabold text-xs tracking-wide shadow-2xs transition-all duration-200 cursor-pointer group"
              >
                <LogOut className="size-4 text-[#DC2626] group-hover:text-white transition-colors" />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>

      {/* Overlay for Mobile Drawer */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* 2. MAIN CONTENT AREA (INDEPENDENT SCROLL) */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto overscroll-contain">
        {/* TOP HEADER */}
        <header className="bg-transparent px-6 sm:px-10 py-6 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            {/* Mobile Drawer Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs"
            >
              <LayoutDashboard className="size-5" />
            </button>

            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Dashboard
                </h1>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-100/80 px-3 py-1 text-xs font-extrabold text-[#DC2626] shadow-2xs">
                  <TrendingUp className="size-3.5 text-[#DC2626]" /> System Overview
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Overview of your website content
              </p>
            </div>
          </div>

          {/* Right Controls: Search, Notification Bell, Admin Avatar */}
          <div className="flex items-center gap-3.5">
            {/* Search Input */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3.5 top-2.5 size-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-48 md:w-60 bg-white border border-slate-200/90 rounded-full py-2 pl-9 pr-12 text-xs text-slate-800 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
              />
              <span className="absolute right-3 top-2 text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                ⌘K
              </span>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                className="flex size-9.5 items-center justify-center rounded-full bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 shadow-2xs hover:bg-slate-50 transition"
              >
                <Bell className="size-4" />
              </button>
              <span className="absolute top-0.5 right-0.5 size-2.5 rounded-full bg-[#DC2626] ring-2 ring-white animate-pulse" />
            </div>

            {/* Admin Profile/Avatar Area */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <div className="relative">
                <img
                  src="/about-owner.png"
                  alt="Admin Avatar"
                  className="size-9.5 rounded-full object-cover border border-slate-200 shadow-2xs"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute(
                      "src",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
                    );
                  }}
                />
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div className="hidden md:block text-left">
                <div className="text-xs font-extrabold text-slate-900 leading-tight flex items-center gap-1">
                  Admin <ChevronDown className="size-3 text-slate-400" />
                </div>
                <div className="text-[10px] text-slate-400 font-medium">Administrator</div>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN BODY CONTENT */}
        <main className="flex-1 px-6 sm:px-10 pb-12 space-y-8">
          {activeTab === "dashboard" && <DashboardMainView onNavigateTab={(tab) => setActiveTab(tab)} />}
          {activeTab === "banners" && <BannersManagementView />}
          {activeTab === "homeStats" && <HomeStatsManagementView />}
          {activeTab === "homeAbout" && <HomeAboutManagementView />}
          {activeTab === "homeFounder" && <HomeFounderManagementView />}
          {activeTab === "homeSolutions" && <HomeSolutionsView />}
          {activeTab === "solutions" && <SolutionsManagementView />}
          {activeTab === "homeBrands" && <HomeBrandsManagementView />}
          {activeTab === "homeIndustries" && <HomeIndustriesManagementView />}
          {activeTab === "team" && <TeamManagementView />}
          {activeTab === "projects" && <ProjectsManagementView />}
          {activeTab === "blogs" && <BlogsManagementView />}
          {activeTab === "about" && <AboutManagementView />}
          {activeTab === "milestones" && <MilestonesManagementView />}
          {activeTab === "testingLab" && <TestingLabManagementView />}
          {activeTab === "offices" && <OfficesManagementView />}
          {activeTab === "inquiries" && <InquiriesManagementView />}
        </main>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN DASHBOARD VIEW (LIGHT THEME - EXACT MATCH TO USER SCREENSHOT)
   ========================================================================= */
function DashboardMainView({ onNavigateTab }: { onNavigateTab: (tab: SidebarTab) => void }) {
  const store = useAdminStore();
  const heroSlides = store.getHeroSlides();
  const teamMembers = store.getTeamMembers();
  const inquiries = store.getInquiries();

  const heroCount = heroSlides.length || 4;
  const aboutCount = 1;
  const teamCount = teamMembers.length || 5;
  const inqCount = inquiries.length || 3;

  return (
    <div className="space-y-8">
      {/* 4 STATISTICS CARDS IN ONE ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Hero Banners */}
        <div
          onClick={() => onNavigateTab("banners")}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 relative overflow-hidden group"
        >
          {/* Soft background wave graphic */}
          <div className="absolute right-0 bottom-0 top-0 w-32 pointer-events-none opacity-30 bg-gradient-to-l from-red-200/60 to-transparent" />
          
          <div className="flex items-center gap-3.5 relative z-10">
            <div className="size-11 rounded-2xl bg-red-50 text-red-500 border border-red-100/80 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-2xs">
              <ImageIcon className="size-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Hero Banners</span>
              <h3 className="text-2xl font-black text-slate-900 leading-tight mt-0.5">
                {heroCount} Slides
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 relative z-10">
            <span className="text-[11px] text-slate-400 font-medium">Homepage Slider</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 border border-red-100/80 px-2.5 py-0.5 text-[11px] font-bold text-red-500">
              ↑ 31%
            </span>
          </div>
        </div>

        {/* Card 2: Website Status */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group">
          {/* Soft background wave graphic */}
          <div className="absolute right-0 bottom-0 top-0 w-32 pointer-events-none opacity-30 bg-gradient-to-l from-emerald-200/60 to-transparent" />

          <div className="flex items-center gap-3.5 relative z-10">
            <div className="size-11 rounded-2xl bg-emerald-50 text-emerald-500 border border-emerald-100/80 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-2xs">
              <CheckCircle2 className="size-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Website Status</span>
              <h3 className="text-2xl font-black text-slate-900 leading-tight mt-0.5 flex items-center gap-1.5">
                Active <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 relative z-10">
            <span className="text-[11px] text-slate-400 font-medium">All systems working</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100/80 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600">
              ↑ 100%
            </span>
          </div>
        </div>

        {/* Card 3: Team Members */}
        <div
          onClick={() => onNavigateTab("team")}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 relative overflow-hidden group"
        >
          {/* Soft background wave graphic */}
          <div className="absolute right-0 bottom-0 top-0 w-32 pointer-events-none opacity-30 bg-gradient-to-l from-purple-200/60 to-transparent" />

          <div className="flex items-center gap-3.5 relative z-10">
            <div className="size-11 rounded-2xl bg-purple-50 text-purple-500 border border-purple-100/80 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-2xs">
              <Users className="size-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Team Members</span>
              <h3 className="text-2xl font-black text-slate-900 leading-tight mt-0.5">
                {teamCount} Members
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 relative z-10">
            <span className="text-[11px] text-slate-400 font-medium">~2 this month</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 border border-purple-100/80 px-2.5 py-0.5 text-[11px] font-bold text-purple-600">
              ↑ 38%
            </span>
          </div>
        </div>

        {/* Card 4: Inquiries */}
        <div
          onClick={() => onNavigateTab("inquiries")}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 relative overflow-hidden group"
        >
          {/* Soft background wave graphic */}
          <div className="absolute right-0 bottom-0 top-0 w-32 pointer-events-none opacity-30 bg-gradient-to-l from-rose-200/60 to-transparent" />

          <div className="flex items-center gap-3.5 relative z-10">
            <div className="size-11 rounded-2xl bg-red-50 text-red-500 border border-red-100/80 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-2xs">
              <Mail className="size-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Inquiries</span>
              <h3 className="text-2xl font-black text-slate-900 leading-tight mt-0.5">
                {inqCount} Messages
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 relative z-10">
            <span className="text-[11px] text-red-500 font-extrabold flex items-center gap-1">
              1 new unread
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 border border-red-100/80 px-2.5 py-0.5 text-[11px] font-bold text-red-500">
              ↑ 23%
            </span>
          </div>
        </div>
      </div>



      {/* QUICK RECENT INQUIRIES FEED WIDGET (MATCHING EXACT TABLE DESIGN) */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Recent Customer Inquiries</h3>
            <p className="text-xs text-slate-400 mt-0.5">Latest project inquiries received via website contact form</p>
          </div>
          <button
            onClick={() => onNavigateTab("inquiries")}
            className="text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] flex items-center gap-1 transition"
          >
            <span>View All Inquiries</span> →
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {inquiries.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-xs font-medium">
              No inquiries received yet. New inquiries submitted from the website contact form will appear here.
            </div>
          ) : (
            inquiries.slice(0, 5).map((item) => {
              const isNew = item.status === "New";
              return (
                <div
                  key={item.id}
                  className={`py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 rounded-xl transition ${
                    isNew
                      ? "bg-white border-l-4 border-[#800000] shadow-2xs font-medium"
                      : "hover:bg-slate-50/60"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`size-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs ${
                      isNew ? "bg-[#800000] text-white" : "bg-red-100 text-red-600"
                    }`}>
                      {(item.name || "U").charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-extrabold text-slate-900">{item.name}</h4>
                        {isNew && (
                          <span className="text-[9px] font-black uppercase tracking-wider bg-[#800000] text-white px-2 py-0.5 rounded-full animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#800000] font-semibold">{item.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
                    <span
                      className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${
                        isNew
                          ? "bg-white text-[#800000] border-2 border-red-200 shadow-2xs font-black"
                          : item.status === "In Progress"
                          ? "bg-amber-100/70 text-amber-700"
                          : "bg-slate-200/70 text-slate-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   HERO BANNERS MANAGEMENT VIEW
   ========================================================================= */
function BannersManagementView() {
  const store = useAdminStore();
  const slides = store.getHeroSlides();
  const [items, setItems] = useState<HeroSlide[]>(slides);
  const [toast, setToast] = useState("");

  const [newImage, setNewImage] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<HeroSlide | null>(null);

  const handleSave = (updated: HeroSlide[]) => {
    store.saveHeroSlides(updated);
    setToast("Hero Banner Slides saved successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleStartEdit = (slide: HeroSlide) => {
    setEditingId(slide.id);
    setEditItem({ ...slide });
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    const updated = items.map((s) => (s.id === editItem.id ? editItem : s));
    setItems(updated);
    handleSave(updated);
    setEditingId(null);
    setEditItem(null);
  };

  const handleRemove = (id: string) => {
    if (confirm("Delete this hero slide?")) {
      const updated = items.filter((s) => s.id !== id);
      setItems(updated);
      handleSave(updated);
    }
  };

  const handleAddSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImage) return;
    const slide: HeroSlide = {
      id: `slide-${Date.now()}`,
      image: newImage,
      title: "Hero Banner Slide",
      subtitle: "",
      alt: "Hero Banner Slide",
    };
    const updated = [...items, slide];
    setItems(updated);
    handleSave(updated);
    setNewImage("");
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-blue-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Hero Banner Images</h2>
          <p className="text-xs text-slate-500 mt-1">Manage HD slides displayed on the home page hero slider.</p>
        </div>
        <Button onClick={() => handleSave(items)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2">
          <Save className="size-4" /> Save Banner Changes
        </Button>
      </div>

      {/* Add New Form */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
        <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-2">
          <Plus className="size-4" /> Add New Hero Slide
        </h3>
        <form onSubmit={handleAddSlide} className="space-y-4">
          <ImageDropzone
            value={newImage}
            onChange={setNewImage}
            label="Hero Slide Banner Photo"
            placeholder="Drag & drop banner photo here or click to browse"
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={!newImage} className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-[38px] px-6">
              Add Slide
            </Button>
          </div>
        </form>
      </div>

      {/* Slide Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((slide, idx) => {
          if (editingId === slide.id && editItem) {
            return (
              <form key={slide.id} onSubmit={handleSaveEdit} className="bg-white p-5 rounded-3xl border-2 border-blue-500 shadow-xl space-y-3 col-span-1 md:col-span-2 lg:col-span-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <h4 className="font-extrabold text-sm text-blue-700 flex items-center gap-1.5">
                    <Pencil className="size-4" /> Edit Hero Slide #{idx + 1}
                  </h4>
                  <button type="button" onClick={() => setEditingId(null)} className="text-xs text-slate-500 font-bold hover:text-slate-900">
                    Cancel
                  </button>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-700">Slide Title</label>
                  <input
                    type="text"
                    value={editItem.title}
                    onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                    className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs font-bold text-slate-900"
                  />
                </div>
                <ImageDropzone
                  value={editItem.image}
                  onChange={(val) => setEditItem({ ...editItem, image: val })}
                  label="Banner Photo"
                  placeholder="Drag & drop banner photo here"
                />
                <div className="flex justify-end gap-2 pt-2">
                  <button type="button" onClick={() => setEditingId(null)} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer">
                    Cancel
                  </button>
                  <button type="submit" className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer">
                    <Save className="size-4" /> Save Slide Changes
                  </button>
                </div>
              </form>
            );
          }

          return (
            <div key={slide.id} className="bg-white p-4 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/60">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-black px-2.5 py-1 rounded-full shadow-xs">
                    Slide #{idx + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 truncate">{slide.title || `Slide #${idx + 1}`}</h4>
                  <p className="text-[10px] font-mono text-slate-400">ID: {slide.id}</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleStartEdit(slide)}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Pencil className="size-3.5" /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleRemove(slide.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Trash2 className="size-3.5" /> Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   TEAM MANAGEMENT VIEW
   ========================================================================= */
function TeamManagementView() {
  const store = useAdminStore();
  const members = store.getTeamMembers();
  const [toast, setToast] = useState("");

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<TeamMember | null>(null);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) return;
    store.addTeamMember({
      name,
      role,
      experience: experience || "5+ Yrs Experience",
      image: image || "/team-1.png",
      accent: "from-[#00E5FF] to-[#0088FF]",
      bio: "Key engineering expert.",
    });
    setName("");
    setRole("");
    setExperience("");
    setImage("");
    setShowAddForm(false);
    setToast("Team Member added successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleStartEdit = (item: TeamMember) => {
    setEditingId(item.id);
    setEditItem({ ...item });
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    store.updateTeamMember(editItem.id, editItem);
    setEditingId(null);
    setEditItem(null);
    setToast(`Team member "${editItem.name}" updated!`);
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, memberName: string) => {
    if (confirm(`Delete team member "${memberName}"?`)) {
      store.deleteTeamMember(id);
      setToast(`Team member "${memberName}" deleted!`);
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-blue-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Users className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Leadership Team Members ({members.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">Add, update/edit or remove team members displayed on the Home Page.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add Team Member"}</span>
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-4">
          <h4 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Plus className="size-4 text-blue-600" /> Create Team Member
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Er. Payal Wankar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Role / Designation *</label>
              <input
                type="text"
                required
                placeholder="e.g. System Architect"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 font-bold"
              />
            </div>
          </div>
          <ImageDropzone
            value={image}
            onChange={setImage}
            label="Profile Photo"
            placeholder="Drag & drop profile photo here or click to browse"
          />
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Save className="size-4" /> Save Team Member
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map((member) => {
          if (editingId === member.id && editItem) {
            return (
              <form key={member.id} onSubmit={handleSaveEdit} className="bg-white p-5 rounded-3xl border-2 border-blue-500 shadow-xl space-y-3 col-span-1 sm:col-span-2 lg:col-span-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <h4 className="font-extrabold text-sm text-blue-700 flex items-center gap-1.5">
                    <Pencil className="size-4" /> Edit Team Member: {member.name}
                  </h4>
                  <button type="button" onClick={() => setEditingId(null)} className="text-xs text-slate-500 font-bold hover:text-slate-900">
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      required
                      value={editItem.name}
                      onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700">Role / Designation</label>
                    <input
                      type="text"
                      required
                      value={editItem.role}
                      onChange={(e) => setEditItem({ ...editItem, role: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs font-bold text-blue-600"
                    />
                  </div>
                </div>

                <ImageDropzone
                  value={editItem.image}
                  onChange={(val) => setEditItem({ ...editItem, image: val })}
                  label="Profile Photo"
                  placeholder="Drag & drop profile photo here"
                />

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Save className="size-4" /> Save Member Changes
                  </button>
                </div>
              </form>
            );
          }

          return (
            <div key={member.id} className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
              <div className="flex items-start gap-4">
                <img src={member.image} alt={member.name} className="size-16 rounded-2xl object-cover border-2 border-blue-500/30 bg-slate-100 shrink-0 shadow-xs" />
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-base text-slate-900">{member.name}</h4>
                  <p className="text-xs text-blue-600 font-bold">{member.role}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-400">ID: {member.id}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStartEdit(member)}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Pencil className="size-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member.id, member.name)}
                    className="px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Trash2 className="size-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   INQUIRIES MANAGEMENT VIEW (FIRESTORE REALTIME SYNC)
   ========================================================================= */
import {
  subscribeInquiriesFromFirestore,
  updateInquiryStatusInFirestore,
  deleteInquiryFromFirestore,
} from "@/lib/firestore-service";
import { useEffect } from "react";

function InquiriesManagementView() {
  const store = useAdminStore();
  const [firestoreInquiries, setFirestoreInquiries] = useState<ContactInquiry[]>([]);
  const [filter, setFilter] = useState<"All" | "New" | "In Progress" | "Resolved">("All");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const unsub = subscribeInquiriesFromFirestore((items) => {
      if (items && items.length > 0) {
        setFirestoreInquiries(items);
      }
    });
    return () => unsub();
  }, []);

  const storeInquiries = store.getInquiries();
  const inquiries = firestoreInquiries.length > 0 ? firestoreInquiries : storeInquiries;

  const filtered = inquiries.filter((i) => (filter === "All" ? true : i.status === filter));

  const handleStatusChange = async (id: string, status: "New" | "In Progress" | "Resolved") => {
    store.updateInquiryStatus(id, status);
    try {
      await updateInquiryStatusInFirestore(id, status);
    } catch (err) {
      console.warn("Firestore status update fallback:", err);
    }
    setToast(`Status updated to ${status}`);
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = async (id: string, name?: string) => {
    if (confirm(`Delete inquiry from "${name || "client"}"?`)) {
      store.deleteInquiry(id);
      setFirestoreInquiries((prev) => prev.filter((item) => item.id !== id));
      try {
        await deleteInquiryFromFirestore(id);
      } catch (err) {
        console.warn("Firestore delete inquiry fallback:", err);
      }
      setToast("Inquiry deleted!");
      setTimeout(() => setToast(""), 3000);
    }
  };

  const handleClearAll = async () => {
    if (confirm("Are you sure you want to delete ALL inquiries?")) {
      store.clearAllInquiries();
      const idsToDelete = inquiries.map((i) => i.id);
      setFirestoreInquiries([]);
      for (const id of idsToDelete) {
        try {
          await deleteInquiryFromFirestore(id);
        } catch (err) {
          console.warn("Firestore bulk delete fallback:", err);
        }
      }
      setToast("All inquiries deleted!");
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-blue-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <span>Inquiries ({inquiries.length})</span>
            <span className="text-[10px] uppercase font-bold bg-cyan-50 text-cyan-700 border border-cyan-200 px-2 py-0.5 rounded-full">
              Firestore Live
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Review contact form submissions & real-time Cloud Firestore inquiries.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {inquiries.length > 0 && (
            <button
              onClick={handleClearAll}
              className="px-4 py-2 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <Trash2 className="size-4" />
              <span>Clear All Inquiries</span>
            </button>
          )}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            {(["All", "New", "In Progress", "Resolved"] as const).map((st) => (
              <button
                key={st}
                onClick={() => setFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  filter === st ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center text-slate-500 text-xs font-medium">
            No inquiries found for filter: {filter}
          </div>
        ) : (
          filtered.map((item) => {
            const isNew = item.status === "New";
            return (
              <div
                key={item.id}
                className={`p-6 rounded-3xl transition-all duration-300 space-y-3 relative overflow-hidden bg-white ${
                  isNew
                    ? "border-2 border-[#800000]/30 shadow-md ring-4 ring-red-500/5"
                    : "border border-slate-200/80 shadow-xs"
                }`}
              >
                {/* Left Edge Accent Indicator Bar */}
                {isNew && (
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#800000]" />
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100/90 pb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="font-extrabold text-base text-slate-900">{item.name}</h4>
                      {isNew && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#800000] text-white shadow-xs animate-pulse">
                          <span className="size-1.5 rounded-full bg-white animate-ping" />
                          NEW UNREAD INQUIRY
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{item.email} • {item.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 font-mono">{item.date}</span>
                    <select
                      value={item.status}
                      onChange={(e) => handleStatusChange(item.id, e.target.value as any)}
                      className={`rounded-xl px-3.5 py-1.5 text-xs font-black border-2 transition cursor-pointer outline-none bg-white ${
                        isNew
                          ? "text-[#800000] border-red-300 hover:border-[#800000] shadow-2xs"
                          : "border-slate-200 text-slate-800"
                      }`}
                    >
                      <option value="New" className="bg-white text-[#800000] font-bold py-1">🔴 New</option>
                      <option value="In Progress" className="bg-white text-[#800000] font-bold py-1">🟡 In Progress</option>
                      <option value="Resolved" className="bg-white text-slate-700 font-bold py-1">⚪ Resolved</option>
                    </select>
                    <button
                      onClick={() => handleDelete(item.id, item.name)}
                      className="p-1.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 transition cursor-pointer"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#800000] uppercase tracking-wider">{item.subject}</h5>
                  <p className={`text-xs leading-relaxed mt-1.5 p-4 rounded-2xl border ${
                    isNew ? "bg-white text-[#800000] border-red-200/90 font-medium shadow-2xs" : "bg-slate-50 text-slate-700 border-slate-100"
                  }`}>
                    {item.message}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   HOME PAGE: SOLUTIONS & OFFERINGS VIEW (WHAT WE CATER 6 CARDS MANAGEMENT)
   ========================================================================= */
function HomeSolutionsView() {
  const store = useAdminStore();
  const homeSolutions = store.getHomeSolutions();
  const [toast, setToast] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Add Form State
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [iconName, setIconName] = useState("Camera");

  // Edit Form State
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editIconName, setEditIconName] = useState("Camera");

  const availableIcons = [
    { name: "Camera", label: "Camera (CCTV)" },
    { name: "Network", label: "Network (LAN/WAN)" },
    { name: "Phone", label: "Phone (EPABX/Intercom)" },
    { name: "Video", label: "Video (AV Systems)" },
    { name: "Cable", label: "Cable (Structured Cabling)" },
    { name: "Tv", label: "Tv (LED Video Walls)" },
    { name: "Shield", label: "Shield (Security)" },
    { name: "Lock", label: "Lock (Access Control)" },
    { name: "Server", label: "Server (Datacenter)" },
    { name: "Cpu", label: "Cpu (AI Hardware)" },
  ];

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return;

    store.addHomeSolution({
      title,
      desc,
      iconName,
    });

    setTitle("");
    setDesc("");
    setIconName("Camera");
    setShowAddForm(false);
    setToast("Home Page Solution card added successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleStartEdit = (item: HomeSolutionItem) => {
    setEditingId(item.id);
    setEditTitle(item.title);
    setEditDesc(item.desc);
    setEditIconName(item.iconName || "Camera");
  };

  const handleSaveEdit = (id: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!editTitle.trim() || !editDesc.trim()) return;

    store.updateHomeSolution(id, {
      title: editTitle,
      desc: editDesc,
      iconName: editIconName,
    });

    setEditingId(null);
    setToast("Solution card updated successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, itemTitle: string) => {
    if (confirm(`Are you sure you want to delete "${itemTitle}" card from Home Page?`)) {
      store.deleteHomeSolution(id);
      setToast(`Card "${itemTitle}" deleted!`);
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-red-50 text-red-600">
              <Layers className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              Home Page: Solutions & Offerings Cards ({homeSolutions.length})
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Manage the "WHAT WE CATER / Our Integrated Electronic Solutions" section cards displayed on the Home Page.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-[#E52328] hover:bg-red-700 text-white text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-red-900/10"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add Solution Card"}</span>
        </button>
      </div>

      {/* Add New Solution Form */}
      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-4 animate-in fade-in slide-in-from-top-2">
          <h4 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Plus className="size-4 text-red-600" /> Create New Home Solution Card
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Card Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. IP CCTV / Analog CCTV"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Icon Style *</label>
              <select
                value={iconName}
                onChange={(e) => setIconName(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-bold"
              >
                {availableIcons.map((ic) => (
                  <option key={ic.name} value={ic.name}>
                    {ic.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Card Description *</label>
            <textarea
              rows={3}
              required
              placeholder="e.g. AI-enabled IP surveillance, thermal detection, and central command NVR matrices."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full rounded-xl bg-white border border-slate-200 p-3.5 text-xs text-slate-900 focus:outline-none focus:border-red-600"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-[#E52328] hover:bg-red-700 text-white text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Save className="size-4" /> Save Solution Card
            </button>
          </div>
        </form>
      )}

      {/* Grid of Solutions Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {homeSolutions.map((item) => {
          if (editingId === item.id) {
            return (
              <form key={item.id} onSubmit={(e) => handleSaveEdit(item.id, e)} className="bg-white p-5 rounded-3xl border-2 border-red-500 shadow-xl space-y-3 col-span-1 animate-in fade-in">
                <div className="flex items-center justify-between border-b pb-2">
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                    <Pencil className="size-3.5" /> Edit Solution Card
                  </h4>
                  <button type="button" onClick={() => setEditingId(null)} className="text-[11px] text-slate-400 hover:text-slate-700 font-bold">
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Title *</label>
                    <input
                      type="text"
                      required
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full rounded-xl bg-white border border-slate-200 px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Icon Style *</label>
                    <select
                      value={editIconName}
                      onChange={(e) => setEditIconName(e.target.value)}
                      className="w-full rounded-xl bg-white border border-slate-200 px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-red-600"
                    >
                      {availableIcons.map((ic) => (
                        <option key={ic.name} value={ic.name}>
                          {ic.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Description / Subtitle *</label>
                  <textarea
                    rows={2}
                    required
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    className="w-full rounded-xl bg-white border border-slate-200 p-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold cursor-pointer hover:bg-slate-200 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold flex items-center gap-1 shadow-md cursor-pointer transition"
                  >
                    <Save className="size-3.5" /> Save Changes
                  </button>
                </div>
              </form>
            );
          }

          return (
            <div key={item.id} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition flex items-center justify-between gap-3 group">
              <div className="min-w-0 flex-1 space-y-0.5">
                <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 uppercase tracking-tight truncate">{item.title}</h4>
                <p className="text-[11px] text-red-600 font-bold uppercase tracking-wider line-clamp-1">{item.desc}</p>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleStartEdit(item)}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200/80 transition cursor-pointer"
                  title="Edit Solution Card"
                >
                  <Pencil className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id, item.title)}
                  className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100 transition cursor-pointer"
                  title="Delete Solution Card"
                >
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   SOLUTIONS MANAGEMENT VIEW (ADD, EDIT & DELETE MODULES)
   ========================================================================= */
function SolutionsManagementView() {
  const store = useAdminStore();
  const solutions = store.getSolutions();
  const solutionCategories = store.getSolutionCategories();
  const [toast, setToast] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<SolutionModule | null>(null);

  // Create Form States
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(solutionCategories[0] || "ELECTRONIC SECURITY");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [featuresText, setFeaturesText] = useState("");
  const [specsText, setSpecsText] = useState("");
  const [appsText, setAppsText] = useState("");
  const [brandsText, setBrandsText] = useState("");
  const [image, setImage] = useState("");

  // Edit Form States
  const [editFeaturesText, setEditFeaturesText] = useState("");
  const [editSpecsText, setEditSpecsText] = useState("");
  const [editAppsText, setEditAppsText] = useState("");
  const [editBrandsText, setEditBrandsText] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const features = featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);
    const applications = appsText
      .split("\n")
      .map((a) => a.trim())
      .filter(Boolean);
    const partnerBrands = brandsText
      .split(",")
      .map((b) => b.trim())
      .filter(Boolean);
    const specs = specsText
      .split("\n")
      .map((line) => {
        const parts = line.split(":");
        if (parts.length < 2) return null;
        return { label: (parts[0] || "").trim(), value: parts.slice(1).join(":").trim() };
      })
      .filter((s): s is { label: string; value: string } => Boolean(s && s.label && s.value));

    store.addSolution({
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title,
      category: category || solutionCategories[0] || "ELECTRONIC SECURITY",
      tagline: tagline || title,
      shortDesc: description || title,
      fullDesc: description || title,
      features,
      specs,
      applications,
      partnerBrands,
      image: image || "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000",
    });

    setTitle("");
    setTagline("");
    setDescription("");
    setFeaturesText("");
    setSpecsText("");
    setAppsText("");
    setBrandsText("");
    setImage("");
    setShowAddForm(false);
    setToast("Solution Module created!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleStartEdit = (item: SolutionModule) => {
    setEditingId(item.id);
    setEditItem({ ...item });
    setEditFeaturesText((item.features || []).join("\n"));
    setEditSpecsText((item.specs || []).map((s) => `${s.label}: ${s.value}`).join("\n"));
    setEditAppsText((item.applications || []).join("\n"));
    setEditBrandsText((item.partnerBrands || []).join(", "));
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;

    const features = editFeaturesText
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);
    const applications = editAppsText
      .split("\n")
      .map((a) => a.trim())
      .filter(Boolean);
    const partnerBrands = editBrandsText
      .split(",")
      .map((b) => b.trim())
      .filter(Boolean);
    const specs = editSpecsText
      .split("\n")
      .map((line) => {
        const parts = line.split(":");
        if (parts.length < 2) return null;
        return { label: (parts[0] || "").trim(), value: parts.slice(1).join(":").trim() };
      })
      .filter((s): s is { label: string; value: string } => Boolean(s && s.label && s.value));

    const updatedModule: SolutionModule = {
      ...editItem,
      shortDesc: editItem.fullDesc || editItem.shortDesc,
      features,
      specs,
      applications,
      partnerBrands,
    };

    store.updateSolution(editItem.id, updatedModule);
    setEditingId(null);
    setEditItem(null);
    setToast(`Solution "${editItem.title}" updated successfully!`);
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, solutionTitle: string) => {
    if (confirm(`Are you sure you want to delete solution "${solutionTitle}"?`)) {
      store.deleteSolution(id);
      setToast(`Solution "${solutionTitle}" deleted permanently!`);
      setTimeout(() => setToast(""), 3000);
    }
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to remove ALL solution modules and make this page blank?")) {
      store.clearAllSolutions();
      setToast("All solution modules removed permanently!");
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <Layers className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Solutions & Architecture Modules ({solutions.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Add, edit or delete technology solution modules displayed on the website.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {solutions.length > 0 && (
            <button
              onClick={handleClearAll}
              className="px-4 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <Trash2 className="size-4" />
              <span>Clear All</span>
            </button>
          )}
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-5 py-2.5 rounded-2xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-emerald-900/10"
          >
            <Plus className="size-4" />
            <span>{showAddForm ? "Cancel Add" : "Add New Solution Module"}</span>
          </button>
        </div>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-5 animate-in fade-in slide-in-from-top-2">
          <h4 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Plus className="size-4 text-emerald-600" /> Create Solution Module
          </h4>

          {/* TAB 1: SYSTEM ARCHITECTURE */}
          <div className="bg-slate-50/80 p-4.5 rounded-2xl border border-slate-200/80 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
              <Building2 className="size-3.5" /> Website Tab 1: System Architecture
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Module Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., CCTV Surveillance"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Category Tag *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 font-bold"
                >
                  {solutionCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Tagline</label>
              <input
                type="text"
                placeholder="e.g., AI-Powered Vision & Command Center Matrix"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
              <textarea
                rows={3}
                placeholder="Detailed description of the solution..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 p-3.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Key Features (One feature per line)</label>
              <textarea
                rows={3}
                placeholder="Edge AI Object Classification&#10;High-throughput Central NVRs&#10;Thermal perimeter tripwires"
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 p-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Deployment Scenarios / Applications (One per line)</label>
              <textarea
                rows={2}
                placeholder="Smart Cities & Traffic Police&#10;Industrial MIDC Plants&#10;Hospitals & Medical Hubs"
                value={appsText}
                onChange={(e) => setAppsText(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 p-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          {/* TAB 2: HARDWARE & SPECS */}
          <div className="bg-slate-50/80 p-4.5 rounded-2xl border border-slate-200/80 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
              <Wrench className="size-3.5" /> Website Tab 2: Hardware & Specs
            </span>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Hardware Specifications (One per line as Label: Value)</label>
              <textarea
                rows={3}
                placeholder="Video Resolution: 4MP, 4K UHD&#10;Compression: Smart H.265+&#10;Ingress Protection: IP67 Weatherproof"
                value={specsText}
                onChange={(e) => setSpecsText(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 p-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 font-mono"
              />
            </div>
          </div>

          {/* TAB 3: DEPLOYMENTS & BRANDS */}
          <div className="bg-slate-50/80 p-4.5 rounded-2xl border border-slate-200/80 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
              <Award className="size-3.5" /> Website Tab 3: Deployments & Brands
            </span>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Certified OEM Partner Brands (Comma separated)</label>
              <input
                type="text"
                placeholder="CP PLUS, Dahua, Hikvision, Honeywell, Bosch"
                value={brandsText}
                onChange={(e) => setBrandsText(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <ImageDropzone
              value={image}
              onChange={setImage}
              label="Solution Main Image"
              placeholder="Drag & drop solution photo here"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-extrabold tracking-wide flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Save className="size-4" /> Save Solution Module
            </button>
          </div>
        </form>
      )}

      {/* List of Solution Modules */}
      {solutions.length === 0 ? (
        <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Layers className="size-6 text-slate-400" />
          </div>
          <h4 className="text-base font-extrabold text-slate-800">No Solutions & Offerings Configured</h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            All solution modules have been removed. You can click "Add New Solution Module" above to create solution modules.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item) => {
            if (editingId === item.id && editItem) {
              return (
                <form key={item.id} onSubmit={handleSaveEdit} className="bg-white p-6 rounded-3xl border-2 border-emerald-500 shadow-xl space-y-4 col-span-1 md:col-span-2 lg:col-span-3 animate-in fade-in">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h4 className="font-extrabold text-base text-emerald-700 flex items-center gap-1.5">
                      <Pencil className="size-4" /> Edit Solution Module: {item.title}
                    </h4>
                    <button type="button" onClick={() => setEditingId(null)} className="text-xs text-slate-500 font-bold hover:text-slate-900 cursor-pointer">
                      Cancel
                    </button>
                  </div>

                  {/* TAB 1: SYSTEM ARCHITECTURE */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                    <span className="text-xs font-black uppercase text-emerald-700 flex items-center gap-1">
                      <Building2 className="size-3.5" /> Website Tab 1: System Architecture
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">Module Title *</label>
                        <input
                          type="text"
                          required
                          value={editItem.title}
                          onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                          className="w-full rounded-xl bg-white border px-3 py-2 text-xs font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">Category Tag *</label>
                        <select
                          value={editItem.category}
                          onChange={(e) => setEditItem({ ...editItem, category: e.target.value })}
                          className="w-full rounded-xl bg-white border px-3 py-2 text-xs font-bold"
                        >
                          {solutionCategories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Tagline</label>
                      <input
                        type="text"
                        value={editItem.tagline}
                        onChange={(e) => setEditItem({ ...editItem, tagline: e.target.value })}
                        className="w-full rounded-xl bg-white border px-3 py-2 text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Description</label>
                      <textarea
                        rows={3}
                        value={editItem.fullDesc || editItem.shortDesc}
                        onChange={(e) => setEditItem({ ...editItem, fullDesc: e.target.value, shortDesc: e.target.value })}
                        className="w-full rounded-xl bg-white border p-3 text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Key Features (One feature per line)</label>
                      <textarea
                        rows={3}
                        value={editFeaturesText}
                        onChange={(e) => setEditFeaturesText(e.target.value)}
                        className="w-full rounded-xl bg-white border p-3 text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Deployment Scenarios / Applications (One per line)</label>
                      <textarea
                        rows={2}
                        value={editAppsText}
                        onChange={(e) => setEditAppsText(e.target.value)}
                        className="w-full rounded-xl bg-white border p-3 text-xs"
                      />
                    </div>
                  </div>

                  {/* TAB 2: HARDWARE & SPECS */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                    <span className="text-xs font-black uppercase text-emerald-700 flex items-center gap-1">
                      <Wrench className="size-3.5" /> Website Tab 2: Hardware & Specs
                    </span>
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Hardware Specifications (One per line as Label: Value)</label>
                      <textarea
                        rows={3}
                        value={editSpecsText}
                        onChange={(e) => setEditSpecsText(e.target.value)}
                        className="w-full rounded-xl bg-white border p-3 text-xs font-mono"
                      />
                    </div>
                  </div>

                  {/* TAB 3: DEPLOYMENTS & BRANDS */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                    <span className="text-xs font-black uppercase text-emerald-700 flex items-center gap-1">
                      <Award className="size-3.5" /> Website Tab 3: Deployments & Brands
                    </span>
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">Certified OEM Partner Brands (Comma separated)</label>
                      <input
                        type="text"
                        value={editBrandsText}
                        onChange={(e) => setEditBrandsText(e.target.value)}
                        className="w-full rounded-xl bg-white border px-3 py-2 text-xs"
                      />
                    </div>

                    <ImageDropzone
                      value={editItem.image}
                      onChange={(val) => setEditItem({ ...editItem, image: val })}
                      label="Solution Main Image"
                      placeholder="Drag & drop solution photo here"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Save className="size-4" /> Save Solution Changes
                    </button>
                  </div>
                </form>
              );
            }

            return (
              <div key={item.id} className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000";
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-[#059669] text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-md shadow-xs">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-extrabold text-base text-slate-900">{item.title}</h4>
                    {item.tagline && <p className="text-xs text-[#059669] font-bold">{item.tagline}</p>}
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{item.fullDesc || item.shortDesc}</p>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">ID: {item.id}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleStartEdit(item)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <Pencil className="size-3.5" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id, item.title)}
                      className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <Trash2 className="size-3.5" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}

/* =========================================================================
   PROJECTS MANAGEMENT VIEW (ADD, EDIT & DELETE LANDMARK PROJECTS)
   ========================================================================= */
function ProjectsManagementView() {
  const store = useAdminStore();
  const projects = store.getProjects();
  const projectCategories = store.getProjectCategories();
  const [toast, setToast] = useState("");

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<ProjectItemData | null>(null);

  const [newCatInput, setNewCatInput] = useState("");
  const [title, setTitle] = useState("");
  const [categoryTag, setCategoryTag] = useState(projectCategories[0] || "Government & Municipal");
  const [location, setLocation] = useState("");
  const [scale, setScale] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [footerBadge, setFooterBadge] = useState("100% Uptime Maintained");
  const [metricsText, setMetricsText] = useState("");
  const [specsText, setSpecsText] = useState("");

  const [editMetricsText, setEditMetricsText] = useState("");
  const [editSpecsText, setEditSpecsText] = useState("");

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatInput.trim()) return;
    store.addProjectCategory(newCatInput);
    setToast(`Project Category "${newCatInput.trim()}" added successfully!`);
    setNewCatInput("");
    setTimeout(() => setToast(""), 3000);
  };

  const handleDeleteCategory = (categoryName: string) => {
    if (confirm(`Are you sure you want to delete project category "${categoryName}"?`)) {
      store.deleteProjectCategory(categoryName);
      setToast(`Category "${categoryName}" deleted!`);
      setTimeout(() => setToast(""), 3000);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const metrics = metricsText
      .split("\n")
      .map((line) => {
        const parts = line.split("|");
        const val = parts[0]?.trim();
        const lbl = parts[1]?.trim();
        if (val && lbl) return { value: val, label: lbl };
        return null;
      })
      .filter((m): m is { value: string; label: string } => Boolean(m));

    const detailedSpecs = specsText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const newProject: Omit<ProjectItemData, "id"> = {
      title,
      categoryTag: categoryTag || projectCategories[0] || "Government & Municipal",
      categoryBadge: (categoryTag || "PROJECT").toUpperCase(),
      location: location || "Maharashtra, India",
      scale: scale || "Turnkey Enterprise Installation",
      description: description || title,
      image: image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
      challenge: "High security and uninterrupted SLA requirements.",
      solution: "Engineered fiber backbone with redundant surveillance coverage.",
      footerBadge: footerBadge || "Verified Deployment",
    };

    if (metrics.length > 0) newProject.metrics = metrics;
    if (detailedSpecs.length > 0) newProject.detailedSpecs = detailedSpecs;

    store.addProject(newProject);

    setTitle("");
    setLocation("");
    setScale("");
    setDescription("");
    setImage("");
    setMetricsText("");
    setSpecsText("");
    setShowAddForm(false);
    setToast("Landmark Project added!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleStartEdit = (item: ProjectItemData) => {
    setEditingId(item.id);
    setEditItem({ ...item });
    setEditMetricsText(
      (item.metrics || []).map((m) => `${m.value} | ${m.label}`).join("\n")
    );
    setEditSpecsText((item.detailedSpecs || []).join("\n"));
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;

    const metrics = editMetricsText
      .split("\n")
      .map((line) => {
        const parts = line.split("|");
        const val = parts[0]?.trim();
        const lbl = parts[1]?.trim();
        if (val && lbl) return { value: val, label: lbl };
        return null;
      })
      .filter((m): m is { value: string; label: string } => Boolean(m));

    const detailedSpecs = editSpecsText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const updatedItem: ProjectItemData = {
      ...editItem,
    };

    if (metrics.length > 0) {
      updatedItem.metrics = metrics;
    } else {
      delete updatedItem.metrics;
    }

    if (detailedSpecs.length > 0) {
      updatedItem.detailedSpecs = detailedSpecs;
    } else {
      delete updatedItem.detailedSpecs;
    }

    store.updateProject(editItem.id, updatedItem);
    setEditingId(null);
    setEditItem(null);
    setToast(`Project "${editItem.title}" updated successfully!`);
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, projectTitle: string) => {
    if (confirm(`Are you sure you want to delete project "${projectTitle}"?`)) {
      store.deleteProject(id);
      setToast(`Project "${projectTitle}" deleted permanently!`);
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-sky-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-sky-50 text-[#0284C7]">
              <Building2 className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Landmark Projects & Case Studies ({projects.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Add, update/edit or delete infrastructure deployments shown on the Projects page.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-sky-900/10"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add New Project"}</span>
        </button>
      </div>

      {/* PROJECT CATEGORIES MANAGEMENT SECTION */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Layers className="size-4 text-[#0284C7]" />
              <span>Manage Project Categories &amp; Filters ({projectCategories.length})</span>
            </h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Add new project categories or delete existing ones. These appear as dynamic filter pills on the public Projects page.
            </p>
          </div>

          <form onSubmit={handleAddCategory} className="flex items-center gap-2 shrink-0">
            <input
              type="text"
              required
              placeholder="Enter category name..."
              value={newCatInput}
              onChange={(e) => setNewCatInput(e.target.value)}
              className="rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-[#0284C7] font-bold"
            />
            <button
              type="submit"
              className="px-4 py-1.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold flex items-center gap-1 cursor-pointer transition shadow-2xs"
            >
              <Plus className="size-3.5" />
              <span>Add Category</span>
            </button>
          </form>
        </div>

        {/* Dynamic Category Badges List */}
        <div className="flex flex-wrap gap-2 pt-1">
          {projectCategories.map((cat) => (
            <div
              key={cat}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 text-xs font-bold"
            >
              <span>{cat}</span>
              {projectCategories.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleDeleteCategory(cat)}
                  title={`Delete ${cat}`}
                  className="text-slate-400 hover:text-red-600 transition cursor-pointer p-0.5"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-4 animate-in fade-in slide-in-from-top-2">
          <h4 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Plus className="size-4 text-[#0284C7]" /> Create Landmark Project
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Project Title *</label>
              <input
                type="text"
                required
                placeholder="e.g., Sugar Mill Fiber Backhaul &amp; CCTV"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Category Tag *</label>
              <select
                value={categoryTag}
                onChange={(e) => setCategoryTag(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white font-bold"
              >
                {projectCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="e.g., Sangli, Maharashtra"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Scale / Capacity Subtitle</label>
              <input
                type="text"
                placeholder="e.g., SCALE: 240+ 4K &amp; ANPR CAMERAS • 8X3 VIDEO WALL"
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
              />
            </div>
          </div>

          <ImageDropzone
            value={image}
            onChange={setImage}
            label="Project Showcase Photo"
            placeholder="Drag &amp; drop project photo here or click to browse"
          />

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Project Description</label>
            <textarea
              rows={2}
              placeholder="Short summary of the deployment..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Key Metrics Boxes (1 per line as Value | Label)
              </label>
              <textarea
                rows={3}
                placeholder="240+ Units | CAMERAS DEPLOYED&#10;42 km | FIBER BACKBONE&#10;8x3 NOC | VIDEO WALL SCALE"
                value={metricsText}
                onChange={(e) => setMetricsText(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Technical Specifications &amp; Architecture (1 spec per line)
              </label>
              <textarea
                rows={3}
                placeholder="Armored 10Gbps Optical Fiber Ring Topology&#10;Dahua &amp; CP PLUS 4K Starlight PTZ Cameras&#10;Automated ANPR &amp; Red Light Software"
                value={specsText}
                onChange={(e) => setSpecsText(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Footer Badge</label>
              <input
                type="text"
                placeholder="e.g., 100% Uptime Maintained"
                value={footerBadge}
                onChange={(e) => setFooterBadge(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
              />
            </div>
            <div className="flex items-end justify-end">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Save className="size-4" /> Save Project
              </button>
            </div>
          </div>
        </form>
      )}

      {/* List of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((item) => {
          if (editingId === item.id && editItem) {
            return (
              <form key={item.id} onSubmit={handleSaveEdit} className="bg-white p-5 rounded-3xl border-2 border-sky-500 shadow-xl space-y-3 col-span-1 md:col-span-2 animate-in fade-in">
                <div className="flex items-center justify-between border-b pb-2">
                  <h4 className="font-extrabold text-sm text-sky-700 flex items-center gap-1.5">
                    <Pencil className="size-4" /> Edit Project: {item.title}
                  </h4>
                  <button type="button" onClick={() => setEditingId(null)} className="text-xs text-slate-500 font-bold hover:text-slate-900 cursor-pointer">
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Project Title *</label>
                    <input
                      type="text"
                      required
                      value={editItem.title}
                      onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Category Tag *</label>
                    <select
                      value={editItem.categoryTag}
                      onChange={(e) => setEditItem({ ...editItem, categoryTag: e.target.value, categoryBadge: e.target.value.toUpperCase() })}
                      className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs font-bold"
                    >
                      {projectCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Location</label>
                    <input
                      type="text"
                      value={editItem.location}
                      onChange={(e) => setEditItem({ ...editItem, location: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Scale / Capacity Subtitle</label>
                    <input
                      type="text"
                      value={editItem.scale}
                      onChange={(e) => setEditItem({ ...editItem, scale: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs"
                    />
                  </div>
                </div>

                <ImageDropzone
                  value={editItem.image}
                  onChange={(val) => setEditItem({ ...editItem, image: val })}
                  label="Project Showcase Photo"
                  placeholder="Drag &amp; drop project photo here"
                />

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Project Description</label>
                  <textarea
                    rows={2}
                    value={editItem.description}
                    onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                    className="w-full rounded-xl bg-slate-50 border p-3 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Key Metrics Boxes (1 per line as Value | Label)
                    </label>
                    <textarea
                      rows={3}
                      value={editMetricsText}
                      onChange={(e) => setEditMetricsText(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border p-2.5 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Technical Specifications &amp; Architecture (1 spec per line)
                    </label>
                    <textarea
                      rows={3}
                      value={editSpecsText}
                      onChange={(e) => setEditSpecsText(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border p-2.5 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Footer Badge</label>
                    <input
                      type="text"
                      value={editItem.footerBadge}
                      onChange={(e) => setEditItem({ ...editItem, footerBadge: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs"
                    />
                  </div>
                  <div className="flex justify-end items-end gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Save className="size-4" /> Save Project Changes
                    </button>
                  </div>
                </div>
              </form>
            );
          }

          return (
            <div key={item.id} className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between group">
              <div>
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#0284C7] text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-md shadow-xs">
                    {item.categoryTag}
                  </div>
                  {item.location && (
                    <div className="absolute bottom-3 left-3 bg-slate-950/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
                      <MapPin className="size-3 text-sky-400" /> {item.location}
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="font-extrabold text-base text-slate-900">{item.title}</h4>
                  {item.scale && <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">{item.scale}</p>}
                  <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>

                  {item.metrics && item.metrics.length > 0 && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 grid grid-cols-2 sm:grid-cols-4 gap-1 text-center">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-1 border border-slate-200">
                          <div className="text-[10px] font-black text-slate-900">{m.value}</div>
                          <div className="text-[7.5px] font-extrabold uppercase text-slate-400 truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.detailedSpecs && item.detailedSpecs.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Technical Specs ({item.detailedSpecs.length})</span>
                      <ul className="text-[11px] text-slate-700 space-y-0.5 list-disc list-inside">
                        {item.detailedSpecs.slice(0, 2).map((s, idx) => (
                          <li key={idx} className="truncate">{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-3">
                <span className="text-[10px] font-mono text-slate-400">ID: {item.id}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStartEdit(item)}
                    className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Pencil className="size-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Trash2 className="size-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   BLOGS MANAGEMENT VIEW (ADD, EDIT & DELETE ARTICLES)
   ========================================================================= */
function BlogsManagementView() {
  const store = useAdminStore();
  const blogs = store.getBlogs();
  const blogCategories = store.getBlogCategories();
  const [toast, setToast] = useState("");

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<BlogPostData | null>(null);

  const [newCatInput, setNewCatInput] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("Compliance & Banking");
  const [description, setDescription] = useState("");
  const [takeaway, setTakeaway] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatInput.trim()) return;
    store.addBlogCategory(newCatInput);
    setToast(`Category "${newCatInput.trim()}" added successfully!`);
    setNewCatInput("");
    setTimeout(() => setToast(""), 3000);
  };

  const handleDeleteCategory = (categoryName: string) => {
    if (confirm(`Are you sure you want to delete blog category "${categoryName}"?`)) {
      store.deleteBlogCategory(categoryName);
      setToast(`Category "${categoryName}" deleted!`);
      setTimeout(() => setToast(""), 3000);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    store.addBlog({
      title,
      tag: tag || "TECHNICAL INSIGHT",
      description: description || title,
      takeaway: takeaway || "Key engineering recommendation by JEPL specialists.",
      image: image || "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=600&q=80",
      content: content || description || title,
    });

    setTitle("");
    setDescription("");
    setTakeaway("");
    setImage("");
    setContent("");
    setShowAddForm(false);
    setToast("Blog Article published!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleStartEdit = (item: BlogPostData) => {
    setEditingId(item.id);
    setEditItem({ ...item });
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    store.updateBlog(editItem.id, editItem);
    setEditingId(null);
    setEditItem(null);
    setToast(`Article "${editItem.title}" updated successfully!`);
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, blogTitle: string) => {
    if (confirm(`Are you sure you want to delete article "${blogTitle}"?`)) {
      store.deleteBlog(id);
      setToast(`Article "${blogTitle}" deleted permanently!`);
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-amber-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-50 text-[#D97706]">
              <BookOpen className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Blogs &amp; Compliance Circulars ({blogs.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Publish, update/edit or remove technical blogs, compliance guidelines, and engineering insights.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-amber-900/10"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add New Blog Article"}</span>
        </button>
      </div>

      {/* BLOG CATEGORIES MANAGEMENT SECTION */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Layers className="size-4 text-[#D97706]" />
              <span>Manage Blog Categories &amp; Filters ({blogCategories.length})</span>
            </h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Add new blog categories or delete existing ones. These appear as dynamic filter pills on the public Blogs page.
            </p>
          </div>

          <form onSubmit={handleAddCategory} className="flex items-center gap-2 shrink-0">
            <input
              type="text"
              required
              placeholder="Enter category name..."
              value={newCatInput}
              onChange={(e) => setNewCatInput(e.target.value)}
              className="rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-[#D97706] font-bold"
            />
            <button
              type="submit"
              className="px-4 py-1.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-extrabold flex items-center gap-1 cursor-pointer transition shadow-2xs"
            >
              <Plus className="size-3.5" />
              <span>Add Category</span>
            </button>
          </form>
        </div>

        {/* Dynamic Category Badges List */}
        <div className="flex flex-wrap gap-2 pt-1">
          {blogCategories.map((cat) => (
            <div
              key={cat}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/90 text-[#D97706] text-xs font-black shadow-2xs"
            >
              <span>{cat}</span>
              <button
                type="button"
                onClick={() => handleDeleteCategory(cat)}
                title={`Delete ${cat}`}
                className="size-4 rounded-full bg-amber-200/80 hover:bg-rose-600 hover:text-white text-amber-900 flex items-center justify-center transition cursor-pointer text-[10px] leading-none"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-4 animate-in fade-in slide-in-from-top-2">
          <h4 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Plus className="size-4 text-[#D97706]" /> Create Blog Article
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Article Title *</label>
              <input
                type="text"
                required
                placeholder="e.g., Understanding RBI Physical Security Norms"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Category Tag *</label>
              <div className="flex items-center gap-2">
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 font-bold"
                >
                  <option value="">Select Existing...</option>
                  {blogCategories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <input
                  type="text"
                  required
                  placeholder="Or type custom category..."
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white font-bold"
                />
              </div>
            </div>
          </div>

          <ImageDropzone
            value={image}
            onChange={setImage}
            label="Blog Cover Photo"
            placeholder="Drag &amp; drop blog cover photo here or click to browse"
          />

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Short Description / Summary</label>
            <textarea
              rows={2}
              placeholder="Short summary for the blog card..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Full Article Body Content</label>
            <textarea
              rows={4}
              placeholder="Full article content text..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Key Takeaway Box Text</label>
            <input
              type="text"
              placeholder="e.g., Banks must calculate true H.265+ bitrate budgets..."
              value={takeaway}
              onChange={(e) => setTakeaway(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-extrabold tracking-wide flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Save className="size-4" /> Publish Blog Article
            </button>
          </div>
        </form>
      )}

      {/* List of Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {blogs.map((item) => {
          if (editingId === item.id && editItem) {
            return (
              <form key={item.id} onSubmit={handleSaveEdit} className="bg-white p-5 rounded-3xl border-2 border-amber-500 shadow-xl space-y-3 col-span-1 md:col-span-2 animate-in fade-in">
                <div className="flex items-center justify-between border-b pb-2">
                  <h4 className="font-extrabold text-sm text-amber-700 flex items-center gap-1.5">
                    <Pencil className="size-4" /> Edit Blog Article: {item.title}
                  </h4>
                  <button type="button" onClick={() => setEditingId(null)} className="text-xs text-slate-500 font-bold hover:text-slate-900 cursor-pointer">
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Article Title</label>
                    <input
                      type="text"
                      required
                      value={editItem.title}
                      onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Category Tag</label>
                    <input
                      type="text"
                      required
                      value={editItem.tag}
                      onChange={(e) => setEditItem({ ...editItem, tag: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs font-bold"
                    />
                  </div>
                </div>

                <ImageDropzone
                  value={editItem.image}
                  onChange={(val) => setEditItem({ ...editItem, image: val })}
                  label="Blog Cover Photo"
                  placeholder="Drag &amp; drop blog cover photo here"
                />

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Summary / Description</label>
                  <textarea
                    rows={2}
                    value={editItem.description}
                    onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                    className="w-full rounded-xl bg-slate-50 border p-3 text-xs"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Full Article Content</label>
                  <textarea
                    rows={4}
                    value={editItem.content}
                    onChange={(e) => setEditItem({ ...editItem, content: e.target.value })}
                    className="w-full rounded-xl bg-slate-50 border p-3 text-xs"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Key Takeaway Text</label>
                  <input
                    type="text"
                    value={editItem.takeaway}
                    onChange={(e) => setEditItem({ ...editItem, takeaway: e.target.value })}
                    className="w-full rounded-xl bg-slate-50 border px-3 py-2 text-xs font-semibold text-amber-900"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Save className="size-4" /> Save Article Changes
                  </button>
                </div>
              </form>
            );
          }

          return (
            <div key={item.id} className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between group">
              <div>
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#D97706] text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-md shadow-xs">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="font-extrabold text-base text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>
                  {item.takeaway && (
                    <div className="bg-amber-50 border border-amber-200/80 p-3 rounded-2xl text-[11px] text-amber-900 font-semibold">
                      💡 {item.takeaway}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-3">
                <span className="text-[10px] font-mono text-slate-400">ID: {item.id}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStartEdit(item)}
                    className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Pencil className="size-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Trash2 className="size-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



/* =========================================================================
   REGIONAL OFFICES MANAGEMENT VIEW (ADD, EDIT & DELETE)
   ========================================================================= */
function OfficesManagementView() {
  const store = useAdminStore();
  const offices = store.getOfficeHubs();
  const [toast, setToast] = useState("");

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<OfficeHub | null>(null);

  const [badge, setBadge] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hours, setHours] = useState("Mon-Sat 9:30 AM - 7:00 PM");
  const [callLabel, setCallLabel] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newItem = {
      id: "office-" + Date.now(),
      badge: badge || "REGIONAL OFFICE",
      title,
      address,
      phone,
      email,
      hours,
      callLabel: callLabel || `Call ${title}`,
      phoneHref: `tel:${phone.replace(/[^0-9+]/g, "")}`,
      image: image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    };

    store.saveOfficeHubs([...offices, newItem]);
    setTitle("");
    setAddress("");
    setPhone("");
    setEmail("");
    setShowAddForm(false);
    setToast("Regional Office created!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleStartEdit = (item: OfficeHub) => {
    setEditingId(item.id);
    setEditItem({ ...item });
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    store.updateOfficeHub(editItem.id, editItem);
    setEditingId(null);
    setEditItem(null);
    setToast(`Office "${editItem.title}" updated successfully!`);
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, officeTitle: string) => {
    if (confirm(`Are you sure you want to delete "${officeTitle}"?`)) {
      store.saveOfficeHubs(offices.filter((o) => o.id !== id));
      setToast(`Office "${officeTitle}" deleted permanently!`);
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-[#DC2626] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-red-50 text-[#DC2626]">
              <MapPin className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Your Location ({offices.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Add, update/edit or remove locations displayed on the Contact page.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add Office Hub"}</span>
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-4 animate-in fade-in slide-in-from-top-2">
          <h4 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Plus className="size-4 text-[#DC2626]" /> Create Regional Office Hub
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Office Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Sangli HQ / Pune IT Hub"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Badge Tag</label>
              <input
                type="text"
                placeholder="e.g. HEADQUARTERS & SPARES DEPOT"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Full Physical Address</label>
            <textarea
              rows={2}
              placeholder="Building name, street, city, pincode..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="+91 233 2300000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Official Email</label>
              <input
                type="email"
                placeholder="sangli@jayelectronics.co.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Working Hours</label>
              <input
                type="text"
                placeholder="Mon-Sat 9:30 AM - 7:00 PM"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
              />
            </div>
          </div>

          <ImageDropzone
            value={image}
            onChange={setImage}
            label="Cover Image / Office Building Photo"
            placeholder="Drag & drop office photo here or click to browse"
          />

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Save className="size-4" /> Save Office Hub
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {offices.map((office) => {
          if (editingId === office.id && editItem) {
            return (
              <form
                key={office.id}
                onSubmit={handleSaveEdit}
                className="bg-white rounded-3xl border-2 border-red-500 shadow-xl overflow-hidden flex flex-col justify-between transition animate-in fade-in"
              >
                <div>
                  {/* Top Image Preview & Inline Office Title Input */}
                  <div className="h-36 w-full bg-slate-900 relative overflow-hidden">
                    <img
                      src={editItem.image}
                      alt={editItem.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute bottom-2 left-2 right-2">
                      <input
                        type="text"
                        required
                        placeholder="Office Name"
                        value={editItem.title}
                        onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                        className="w-full bg-slate-950/90 text-white text-xs font-extrabold px-3 py-1 rounded-full border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  {/* Direct Inline Card Body Edit Fields */}
                  <div className="p-4 space-y-2.5 text-xs">
                    {/* Badge Tag Direct Input */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block mb-0.5">BADGE TAG:</span>
                      <input
                        type="text"
                        placeholder="HEADQUARTERS & SPARES DEPOT"
                        value={editItem.badge}
                        onChange={(e) => setEditItem({ ...editItem, badge: e.target.value })}
                        className="w-full font-extrabold text-red-600 text-xs bg-red-50 border border-red-200 px-2.5 py-1 rounded-lg focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Address Direct Input */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block mb-0.5">LOCATION / ADDRESS:</span>
                      <textarea
                        rows={2}
                        placeholder="Physical address..."
                        value={editItem.address}
                        onChange={(e) => setEditItem({ ...editItem, address: e.target.value })}
                        className="w-full text-slate-700 text-xs bg-slate-50 border border-slate-200 p-2 rounded-lg focus:bg-white focus:outline-none leading-relaxed"
                      />
                    </div>

                    {/* Phone Direct Input */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block mb-0.5">PHONE NUMBER:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="shrink-0 text-slate-700">📞</span>
                        <input
                          type="text"
                          placeholder="Phone number"
                          value={editItem.phone}
                          onChange={(e) =>
                            setEditItem({
                              ...editItem,
                              phone: e.target.value,
                              phoneHref: `tel:${e.target.value.replace(/[^0-9+]/g, "")}`,
                            })
                          }
                          className="w-full font-bold text-slate-900 text-xs bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Email Direct Input */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block mb-0.5">OFFICIAL EMAIL:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="shrink-0 text-slate-500">✉️</span>
                        <input
                          type="email"
                          placeholder="Official email"
                          value={editItem.email}
                          onChange={(e) => setEditItem({ ...editItem, email: e.target.value })}
                          className="w-full text-slate-600 text-xs bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Hours Direct Input */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block mb-0.5">WORKING HOURS:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="shrink-0 text-slate-600">🕒</span>
                        <input
                          type="text"
                          placeholder="Mon-Sat 9:30 AM - 7:00 PM"
                          value={editItem.hours || ""}
                          onChange={(e) => setEditItem({ ...editItem, hours: e.target.value })}
                          className="w-full font-semibold text-slate-700 text-xs bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Cover Photo URL */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block mb-0.5">PHOTO URL / PATH:</span>
                      <input
                        type="text"
                        placeholder="/about-building.png"
                        value={editItem.image}
                        onChange={(e) => setEditItem({ ...editItem, image: e.target.value })}
                        className="w-full text-slate-500 text-[11px] bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg focus:bg-white focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Save & Cancel Action Buttons right on card bottom */}
                <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-2">
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="px-3.5 py-1.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-bold transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md transition cursor-pointer"
                  >
                    <Save className="size-3.5" /> Save Changes
                  </button>
                </div>
              </form>
            );
          }

          return (
            <div key={office.id} className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs flex flex-col justify-between">
              <div>
                <div className="h-36 w-full bg-slate-900 relative">
                  <img src={office.image} alt={office.title} className="w-full h-full object-cover opacity-90" />
                  <div className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-xs font-bold px-3 py-0.5 rounded-full">
                    {office.title}
                  </div>
                </div>
                <div className="p-4 space-y-2 text-xs">
                  <p className="font-extrabold text-red-600">{office.badge}</p>
                  <p className="text-slate-600 leading-relaxed">📍 {office.address}</p>
                  <p className="font-bold text-slate-900">📞 {office.phone}</p>
                  <p className="text-slate-500">✉️ {office.email}</p>
                  <p className="text-slate-600 font-semibold">🕒 {office.hours || "Mon-Sat 9:30 AM - 7:00 PM"}</p>
                </div>
              </div>
              <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <span className="text-[10px] font-mono text-slate-400">ID: {office.id}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStartEdit(office)}
                    className="px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Pencil className="size-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(office.id, office.title)}
                    className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Trash2 className="size-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   FOOTER & CONTACT SETTINGS MANAGEMENT VIEW
   ========================================================================= */
function FooterManagementView() {
  const store = useAdminStore();
  const footerSettings = store.getFooterSettings();

  const [form, setForm] = useState(footerSettings);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    store.saveFooterSettings(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-red-50 text-[#DC2626]">
              <Settings className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Footer Settings & Contact Information</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Manage global phone numbers, address, social media links, and copyright bar text.
          </p>
        </div>
        {saved && <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Saved Successfully!</span>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Primary Phone 1 *</label>
          <input
            type="text"
            required
            value={form.phone1}
            onChange={(e) => setForm({ ...form, phone1: e.target.value })}
            className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 font-bold"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Secondary Phone 2</label>
          <input
            type="text"
            value={form.phone2}
            onChange={(e) => setForm({ ...form, phone2: e.target.value })}
            className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 font-bold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Primary Support Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Google Maps Link URL</label>
          <input
            type="text"
            value={form.mapUrl}
            onChange={(e) => setForm({ ...form, mapUrl: e.target.value })}
            className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">Short Address Text</label>
        <input
          type="text"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 font-medium"
        />
      </div>

      {/* Social Links */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider text-[#DC2626]">Social Media Profile Links</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Facebook URL</label>
            <input
              type="text"
              value={form.facebook}
              onChange={(e) => setForm({ ...form, facebook: e.target.value })}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Instagram URL</label>
            <input
              type="text"
              value={form.instagram}
              onChange={(e) => setForm({ ...form, instagram: e.target.value })}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">LinkedIn URL</label>
            <input
              type="text"
              value={form.linkedin}
              onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">YouTube URL</label>
            <input
              type="text"
              value={form.youtube}
              onChange={(e) => setForm({ ...form, youtube: e.target.value })}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs"
            />
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-100">
        <label className="block text-xs font-bold text-slate-700 mb-1">Copyright Bar Text</label>
        <input
          type="text"
          value={form.copyrightText}
          onChange={(e) => setForm({ ...form, copyrightText: e.target.value })}
          className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 font-medium"
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="px-6 py-3 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Save className="size-4" /> Save Footer Settings
        </button>
      </div>
    </form>
  );
}

/* =========================================================================
   HOME PAGE SECTION 2: IMPACT & KEY STATS CARDS
   ========================================================================= */
function HomeStatsManagementView() {
  const store = useAdminStore();
  const stats = store.getHomeStats();
  const [toast, setToast] = useState("");

  const [label, setLabel] = useState("");
  const [targetValue, setTargetValue] = useState<number>(100);
  const [suffix, setSuffix] = useState("+");
  const [showAddForm, setShowAddForm] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<HomeStatItem | null>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!label.trim()) return;
    store.addHomeStat({ label: label.trim().toUpperCase(), targetValue: Number(targetValue), suffix });
    setLabel("");
    setTargetValue(100);
    setSuffix("+");
    setShowAddForm(false);
    setToast("Stat Card added!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    store.updateHomeStat(editItem.id, editItem);
    setEditingId(null);
    setEditItem(null);
    setToast("Stat updated!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this stat card?")) {
      store.deleteHomeStat(id);
      setToast("Stat deleted!");
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-red-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-red-50 text-red-600">
              <BarChart3 className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Impact & Key Stats Cards ({stats.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Manage counter stats cards displayed in Section 2 of the Home Page.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add Stat Card"}</span>
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2 border-b pb-2">
            <Plus className="size-4 text-red-600" /> Create New Stat Card
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Label *</label>
              <input
                type="text"
                required
                placeholder="e.g., PROJECTS COMPLETED"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Number Value *</label>
              <input
                type="number"
                required
                step="any"
                value={targetValue}
                onChange={(e) => setTargetValue(Number(e.target.value))}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Suffix (+, %, km)</label>
              <input
                type="text"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-red-600"
              />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit" className="px-5 py-2 rounded-xl bg-red-600 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md">
              <Save className="size-4" /> Save Stat Card
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {stats.map((st) => {
          if (editingId === st.id && editItem) {
            return (
              <form key={st.id} onSubmit={handleSaveEdit} className="bg-white p-4 rounded-2xl border-2 border-red-500 shadow-md space-y-3">
                <input
                  type="text"
                  required
                  value={editItem.label}
                  onChange={(e) => setEditItem({ ...editItem, label: e.target.value })}
                  className="w-full rounded-lg bg-slate-50 border px-2.5 py-1.5 text-xs font-bold"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="any"
                    value={editItem.targetValue}
                    onChange={(e) => setEditItem({ ...editItem, targetValue: Number(e.target.value) })}
                    className="w-1/2 rounded-lg bg-slate-50 border px-2.5 py-1.5 text-xs font-bold"
                  />
                  <input
                    type="text"
                    value={editItem.suffix}
                    onChange={(e) => setEditItem({ ...editItem, suffix: e.target.value })}
                    className="w-1/2 rounded-lg bg-slate-50 border px-2.5 py-1.5 text-xs font-bold text-red-600"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setEditingId(null)} className="text-xs font-bold text-slate-500">Cancel</button>
                  <button type="submit" className="px-3 py-1 bg-red-600 text-white text-xs font-extrabold rounded-lg">Save</button>
                </div>
              </form>
            );
          }

          return (
            <div key={st.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-2xl font-black text-red-600">
                  {st.targetValue}{st.suffix}
                </div>
                <div className="text-xs font-extrabold text-slate-700 mt-1 uppercase tracking-wider">{st.label}</div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t">
                <button onClick={() => { setEditingId(st.id); setEditItem({ ...st }); }} className="p-1.5 bg-slate-100 rounded-lg text-slate-600 hover:text-red-600">
                  <Pencil className="size-3.5" />
                </button>
                <button onClick={() => handleDelete(st.id)} className="p-1.5 bg-rose-50 rounded-lg text-rose-600 hover:bg-rose-100">
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   HOME PAGE SECTION 3: WELCOME & CAPABILITIES
   ========================================================================= */
function HomeAboutManagementView() {
  const store = useAdminStore();
  const [form, setForm] = useState<HomeAboutData>(store.getHomeAbout());
  const [toast, setToast] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    store.saveHomeAbout(form);
    setToast("Welcome Section details updated!");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-red-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex items-center gap-2 border-b pb-3">
        <span className="p-2 rounded-xl bg-red-50 text-red-600">
          <FileText className="size-5" />
        </span>
        <div>
          <h3 className="text-xl font-black text-slate-900">Welcome & Capability Pillars Section</h3>
          <p className="text-xs text-slate-500">Edit the Welcome Section headings, description and 4 capability pillar cards on Home Page.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Eyebrow Tagline</label>
          <input
            type="text"
            value={form.eyebrow}
            onChange={(e) => setForm({ ...form, eyebrow: e.target.value })}
            className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-red-600"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Main Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle Banner</label>
        <input
          type="text"
          value={form.subtitle}
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
          className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">Main Description Paragraph</label>
        <textarea
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full rounded-xl bg-slate-50 border p-3.5 text-xs text-slate-800"
        />
      </div>

      <h4 className="font-extrabold text-sm text-slate-900 pt-2 border-t">4 Key Capability Cards</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-slate-50 p-4 rounded-2xl border space-y-2">
          <span className="text-xs font-extrabold text-red-600">Pillar Card 1</span>
          <input type="text" placeholder="Title" value={form.pillar1Title} onChange={(e) => setForm({ ...form, pillar1Title: e.target.value })} className="w-full rounded-lg bg-white border px-3 py-1.5 text-xs font-bold" />
          <input type="text" placeholder="Description" value={form.pillar1Desc} onChange={(e) => setForm({ ...form, pillar1Desc: e.target.value })} className="w-full rounded-lg bg-white border px-3 py-1.5 text-xs" />
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border space-y-2">
          <span className="text-xs font-extrabold text-red-600">Pillar Card 2</span>
          <input type="text" placeholder="Title" value={form.pillar2Title} onChange={(e) => setForm({ ...form, pillar2Title: e.target.value })} className="w-full rounded-lg bg-white border px-3 py-1.5 text-xs font-bold" />
          <input type="text" placeholder="Description" value={form.pillar2Desc} onChange={(e) => setForm({ ...form, pillar2Desc: e.target.value })} className="w-full rounded-lg bg-white border px-3 py-1.5 text-xs" />
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border space-y-2">
          <span className="text-xs font-extrabold text-red-600">Pillar Card 3</span>
          <input type="text" placeholder="Title" value={form.pillar3Title} onChange={(e) => setForm({ ...form, pillar3Title: e.target.value })} className="w-full rounded-lg bg-white border px-3 py-1.5 text-xs font-bold" />
          <input type="text" placeholder="Description" value={form.pillar3Desc} onChange={(e) => setForm({ ...form, pillar3Desc: e.target.value })} className="w-full rounded-lg bg-white border px-3 py-1.5 text-xs" />
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border space-y-2">
          <span className="text-xs font-extrabold text-red-600">Pillar Card 4</span>
          <input type="text" placeholder="Title" value={form.pillar4Title} onChange={(e) => setForm({ ...form, pillar4Title: e.target.value })} className="w-full rounded-lg bg-white border px-3 py-1.5 text-xs font-bold" />
          <input type="text" placeholder="Description" value={form.pillar4Desc} onChange={(e) => setForm({ ...form, pillar4Desc: e.target.value })} className="w-full rounded-lg bg-white border px-3 py-1.5 text-xs" />
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button type="submit" className="px-6 py-3 bg-red-600 text-white font-extrabold text-xs rounded-2xl shadow-md flex items-center gap-2">
          <Save className="size-4" /> Save Welcome Section Changes
        </button>
      </div>
    </form>
  );
}

/* =========================================================================
   HOME PAGE SECTION 4: FOUNDER & LEADERSHIP
   ========================================================================= */
function HomeFounderManagementView() {
  const store = useAdminStore();
  const [about, setAbout] = useState(store.getAboutData());
  const [toast, setToast] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    store.saveAboutData(about);
    setToast("Founder & Leadership Section updated!");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-sky-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex items-center gap-2 border-b pb-3">
        <span className="p-2 rounded-xl bg-sky-50 text-sky-600">
          <UserCheck className="size-5" />
        </span>
        <div>
          <h3 className="text-xl font-black text-slate-900">Founder & Leadership Section</h3>
          <p className="text-xs text-slate-500">Edit Founder / Owner profile details shown on Home Page & About Page.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Founder Eyebrow</label>
          <input type="text" value={about.founderEyebrow} onChange={(e) => setAbout({ ...about, founderEyebrow: e.target.value })} className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-sky-600" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Founder Name</label>
          <input type="text" value={about.founderName} onChange={(e) => setAbout({ ...about, founderName: e.target.value })} className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Designation</label>
          <input type="text" value={about.founderDesignation || ""} onChange={(e) => setAbout({ ...about, founderDesignation: e.target.value })} className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Experience Years</label>
          <input type="text" value={about.founderExperience || ""} onChange={(e) => setAbout({ ...about, founderExperience: e.target.value })} className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold" />
        </div>
      </div>

      <ImageDropzone
        value={about.founderImage || ""}
        onChange={(val) => setAbout({ ...about, founderImage: val })}
        label="Founder / Owner Photo"
        placeholder="Drag & drop founder photo here or click to browse"
      />

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">Founder Biography & Message</label>
        <textarea rows={4} value={about.founderDescription || ""} onChange={(e) => setAbout({ ...about, founderDescription: e.target.value })} className="w-full rounded-xl bg-slate-50 border p-3.5 text-xs text-slate-800" />
      </div>

      <div className="flex justify-end pt-2">
        <button type="submit" className="px-6 py-3 bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-xs rounded-2xl shadow-md flex items-center gap-2">
          <Save className="size-4" /> Save Founder Details
        </button>
      </div>
    </form>
  );
}

/* =========================================================================
   HOME PAGE SECTION 6: OEM BRAND PARTNERS
   ========================================================================= */
function HomeBrandsManagementView() {
  const store = useAdminStore();
  const brands = store.getHomeBrands();
  const [toast, setToast] = useState("");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<HomeBrandItem | null>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    store.addHomeBrand({ name: name.trim().toUpperCase(), category: category.trim().toUpperCase() || "OEM PARTNER" });
    setName("");
    setCategory("");
    setShowAddForm(false);
    setToast("Brand Partner added!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    store.updateHomeBrand(editItem.id, editItem);
    setEditingId(null);
    setEditItem(null);
    setToast("Brand Partner updated!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, brandName: string) => {
    if (confirm(`Delete brand partner "${brandName}"?`)) {
      store.deleteHomeBrand(id);
      setToast("Brand Partner deleted!");
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-[#DC2626] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-red-50 text-red-600">
              <Award className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">OEM Brand Partners ({brands.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">Manage OEM partner brand logos shown in marquee rows on the Home Page.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add Brand Partner"}</span>
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <h4 className="font-extrabold text-sm text-slate-900 border-b pb-2 flex items-center gap-2">
            <Plus className="size-4 text-red-600" /> Add New OEM Brand
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Brand Name *</label>
              <input type="text" required placeholder="e.g., CP PLUS" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Category Tag</label>
              <input type="text" placeholder="e.g., SECURITY VISION" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold" />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit" className="px-5 py-2 bg-red-600 text-white text-xs font-extrabold rounded-xl flex items-center gap-1.5 shadow-md">
              <Save className="size-4" /> Save Brand Partner
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((b) => {
          if (editingId === b.id && editItem) {
            return (
              <form key={b.id} onSubmit={handleSaveEdit} className="bg-white p-4 rounded-2xl border-2 border-red-500 shadow-md space-y-2">
                <input type="text" required value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} className="w-full rounded-lg bg-slate-50 border px-2.5 py-1.5 text-xs font-bold" />
                <input type="text" value={editItem.category} onChange={(e) => setEditItem({ ...editItem, category: e.target.value })} className="w-full rounded-lg bg-slate-50 border px-2.5 py-1.5 text-xs" />
                <div className="flex justify-end gap-2 pt-1">
                  <button type="button" onClick={() => setEditingId(null)} className="text-xs font-bold text-slate-500">Cancel</button>
                  <button type="submit" className="px-3 py-1 bg-red-600 text-white text-xs font-extrabold rounded-lg">Save</button>
                </div>
              </form>
            );
          }

          return (
            <div key={b.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <div className="text-sm font-black text-slate-900 tracking-tight">{b.name}</div>
                <div className="text-[10px] font-bold text-red-600 uppercase">{b.category}</div>
              </div>
              <div className="flex items-center gap-1.5">
                <button onClick={() => { setEditingId(b.id); setEditItem({ ...b }); }} className="p-1.5 bg-slate-100 rounded-lg text-slate-600 hover:text-red-600">
                  <Pencil className="size-3.5" />
                </button>
                <button onClick={() => handleDelete(b.id, b.name)} className="p-1.5 bg-rose-50 rounded-lg text-rose-600 hover:bg-rose-100">
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   HOME PAGE SECTION 7: INDUSTRIES WE SERVE
   ========================================================================= */
function HomeIndustriesManagementView() {
  const store = useAdminStore();
  const industries = store.getHomeIndustries();
  const [toast, setToast] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<HomeIndustryItem | null>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    store.addHomeIndustry({ title, desc, index: String(industries.length + 1).padStart(2, "0") });
    setTitle("");
    setDesc("");
    setShowAddForm(false);
    setToast("Industry Sector added!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    store.updateHomeIndustry(editItem.id, editItem);
    setEditingId(null);
    setEditItem(null);
    setToast("Industry Sector updated!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, indTitle: string) => {
    if (confirm(`Delete industry sector "${indTitle}"?`)) {
      store.deleteHomeIndustry(id);
      setToast("Industry Sector deleted!");
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-sky-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-sky-50 text-sky-600">
              <Building2 className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Industries We Serve ({industries.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">Manage sector verticals displayed in Section 7 of the Home Page.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add Industry Vertical"}</span>
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <h4 className="font-extrabold text-sm text-slate-900 border-b pb-2 flex items-center gap-2">
            <Plus className="size-4 text-sky-600" /> Create Industry Sector
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Sector Title *</label>
              <input type="text" required placeholder="e.g., Police & Law Enforcement" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Short Description</label>
              <input type="text" placeholder="e.g., HQ control rooms, jail security..." value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs" />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit" className="px-5 py-2 bg-sky-600 text-white text-xs font-extrabold rounded-xl flex items-center gap-1.5 shadow-md">
              <Save className="size-4" /> Save Industry Sector
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((ind) => {
          if (editingId === ind.id && editItem) {
            return (
              <form key={ind.id} onSubmit={handleSaveEdit} className="bg-white p-4 rounded-2xl border-2 border-sky-500 shadow-md space-y-2 col-span-1 sm:col-span-2">
                <input type="text" required value={editItem.title} onChange={(e) => setEditItem({ ...editItem, title: e.target.value })} className="w-full rounded-lg bg-slate-50 border px-2.5 py-1.5 text-xs font-bold" />
                <textarea rows={2} value={editItem.desc} onChange={(e) => setEditItem({ ...editItem, desc: e.target.value })} className="w-full rounded-lg bg-slate-50 border px-2.5 py-1.5 text-xs" />
                <div className="flex justify-end gap-2 pt-1">
                  <button type="button" onClick={() => setEditingId(null)} className="text-xs font-bold text-slate-500">Cancel</button>
                  <button type="submit" className="px-3 py-1 bg-sky-600 text-white text-xs font-extrabold rounded-lg">Save</button>
                </div>
              </form>
            );
          }

          return (
            <div key={ind.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-sky-600 font-mono">SECTOR {ind.index}</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mt-2">{ind.title}</h4>
                <p className="text-xs text-slate-600 mt-1">{ind.desc}</p>
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t">
                <button onClick={() => { setEditingId(ind.id); setEditItem({ ...ind }); }} className="p-1.5 bg-slate-100 rounded-lg text-slate-600 hover:text-sky-600">
                  <Pencil className="size-3.5" />
                </button>
                <button onClick={() => handleDelete(ind.id, ind.title)} className="p-1.5 bg-rose-50 rounded-lg text-rose-600 hover:bg-rose-100">
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   ABOUT PAGE 1: HERO & CREDO MANAGEMENT VIEW
   ========================================================================= */
function AboutManagementView() {
  const store = useAdminStore();
  const [aboutForm, setAboutForm] = useState<AboutData>(store.getAboutData());
  const [credoForm, setCredoForm] = useState<EngineeringCredoData>(store.getCredo());
  const [toast, setToast] = useState("");

  const handleSaveAbout = (e: React.FormEvent) => {
    e.preventDefault();
    store.saveAboutData(aboutForm);
    store.saveCredo(credoForm);
    setToast("About Us & Credo details updated successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-red-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-red-50 text-red-600">
            <FileText className="size-5" />
          </span>
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">About Page Hero, Bio &amp; Engineering Credo</h3>
            <p className="text-xs text-slate-500">Edit headlines, certifications, depot photo, and Credo metrics on the About page.</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSaveAbout} className="space-y-6">
        {/* Section 1: Hero Intro */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h4 className="font-extrabold text-sm text-slate-900 border-b pb-2 flex items-center gap-2">
            <FileText className="size-4 text-red-600" /> Hero Section &amp; Certifications
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Pill Badge Eyebrow</label>
              <input
                type="text"
                value={aboutForm.eyebrow || ""}
                onChange={(e) => setAboutForm({ ...aboutForm, eyebrow: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Main Headline</label>
              <input
                type="text"
                value={aboutForm.heading || ""}
                onChange={(e) => setAboutForm({ ...aboutForm, heading: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Page Description / Bio</label>
            <textarea
              rows={3}
              value={aboutForm.description || ""}
              onChange={(e) => setAboutForm({ ...aboutForm, description: e.target.value })}
              className="w-full rounded-xl bg-slate-50 border p-3.5 text-xs text-slate-900 font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Certification Badge 1</label>
              <input
                type="text"
                value={aboutForm.cert1 || ""}
                onChange={(e) => setAboutForm({ ...aboutForm, cert1: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Certification Badge 2</label>
              <input
                type="text"
                value={aboutForm.cert2 || ""}
                onChange={(e) => setAboutForm({ ...aboutForm, cert2: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Certification Badge 3</label>
              <input
                type="text"
                value={aboutForm.cert3 || ""}
                onChange={(e) => setAboutForm({ ...aboutForm, cert3: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          <ImageDropzone
            value={aboutForm.buildingImage || ""}
            onChange={(url) => setAboutForm({ ...aboutForm, buildingImage: url })}
            label="Sangli Testing Depot Showcase Image"
            placeholder="Drag & drop depot image or paste URL"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Depot Card Title</label>
              <input
                type="text"
                value={aboutForm.buildingTitle || ""}
                onChange={(e) => setAboutForm({ ...aboutForm, buildingTitle: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Depot Subtitle / Desc</label>
              <input
                type="text"
                value={aboutForm.buildingDesc || ""}
                onChange={(e) => setAboutForm({ ...aboutForm, buildingDesc: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Engineering Credo */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h4 className="font-extrabold text-sm text-slate-900 border-b pb-2 flex items-center gap-2">
            <Award className="size-4 text-red-600" /> Engineering Credo Section
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Credo Eyebrow</label>
              <input
                type="text"
                value={credoForm.eyebrow || ""}
                onChange={(e) => setCredoForm({ ...credoForm, eyebrow: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Credo Quote / Main Motto</label>
              <input
                type="text"
                value={credoForm.quote || ""}
                onChange={(e) => setCredoForm({ ...credoForm, quote: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Credo Body Description</label>
            <textarea
              rows={2}
              value={credoForm.description || ""}
              onChange={(e) => setCredoForm({ ...credoForm, description: e.target.value })}
              className="w-full rounded-xl bg-slate-50 border p-3.5 text-xs text-slate-900 font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Metric 1 Value</label>
              <input
                type="text"
                value={credoForm.metric1Value || ""}
                onChange={(e) => setCredoForm({ ...credoForm, metric1Value: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-red-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Metric 1 Label</label>
              <input
                type="text"
                value={credoForm.metric1Label || ""}
                onChange={(e) => setCredoForm({ ...credoForm, metric1Label: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Metric 2 Value</label>
              <input
                type="text"
                value={credoForm.metric2Value || ""}
                onChange={(e) => setCredoForm({ ...credoForm, metric2Value: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-red-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Metric 2 Label</label>
              <input
                type="text"
                value={credoForm.metric2Label || ""}
                onChange={(e) => setCredoForm({ ...credoForm, metric2Label: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">Button Text</label>
              <input
                type="text"
                value={credoForm.buttonText || ""}
                onChange={(e) => setCredoForm({ ...credoForm, buttonText: e.target.value })}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition cursor-pointer"
          >
            <Save className="size-4" /> Save About Page &amp; Credo
          </button>
        </div>
      </form>
    </div>
  );
}

/* =========================================================================
   ABOUT PAGE 2: HISTORICAL TIMELINE MILESTONES MANAGEMENT VIEW
   ========================================================================= */
function MilestonesManagementView() {
  const store = useAdminStore();
  const milestones = store.getMilestones();

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<MilestoneItem | null>(null);
  const [toast, setToast] = useState("");

  const [milestoneLabel, setMilestoneLabel] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("Landmark");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    store.addMilestone({
      milestone: milestoneLabel || `Milestone ${milestones.length + 1}`,
      year: year || "2026",
      title,
      description,
      desc: description,
      icon,
    });
    setMilestoneLabel("");
    setYear("");
    setTitle("");
    setDescription("");
    setShowAddForm(false);
    setToast("Milestone added!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    store.updateMilestone(editItem.id, editItem);
    setEditingId(null);
    setEditItem(null);
    setToast("Milestone updated!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, mTitle: string) => {
    if (confirm(`Delete milestone "${mTitle}"?`)) {
      store.deleteMilestone(id);
      setToast("Milestone deleted!");
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-red-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-red-50 text-red-600">
              <Calendar className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Historical Timeline Milestones ({milestones.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">Manage journey timeline milestones shown on the About page.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add Timeline Milestone"}</span>
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2 border-b pb-2">
            <Plus className="size-4 text-red-600" /> Create Timeline Milestone
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Milestone Tag (e.g., Milestone 1)</label>
              <input
                type="text"
                placeholder="Milestone 5"
                value={milestoneLabel}
                onChange={(e) => setMilestoneLabel(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Year (e.g., 2026+)</label>
              <input
                type="text"
                required
                placeholder="2026+"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-red-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Icon Type</label>
              <select
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              >
                <option value="Landmark">Landmark / Foundation</option>
                <option value="Network">Network / Optical Fiber</option>
                <option value="Camera">Camera / Surveillance</option>
                <option value="Sparkles">Sparkles / AI NOC</option>
                <option value="Award">Award / Cert</option>
                <option value="Cpu">Cpu / Automation</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Milestone Title *</label>
            <input
              type="text"
              required
              placeholder="e.g., AI Telemetry &amp; Video NOCs"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
            <textarea
              rows={2}
              placeholder="Short summary of this historical achievement..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border p-3.5 text-xs text-slate-900"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit" className="px-5 py-2 rounded-xl bg-red-600 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md">
              <Save className="size-4" /> Save Milestone
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {milestones.map((m) => {
          if (editingId === m.id && editItem) {
            return (
              <form key={m.id} onSubmit={handleSaveEdit} className="bg-white p-4 rounded-2xl border-2 border-red-500 shadow-md space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editItem.milestone}
                    onChange={(e) => setEditItem({ ...editItem, milestone: e.target.value })}
                    className="w-1/2 rounded-lg bg-slate-50 border px-2 py-1 text-xs font-bold"
                  />
                  <input
                    type="text"
                    value={editItem.year}
                    onChange={(e) => setEditItem({ ...editItem, year: e.target.value })}
                    className="w-1/2 rounded-lg bg-slate-50 border px-2 py-1 text-xs font-bold text-red-600"
                  />
                </div>
                <input
                  type="text"
                  required
                  value={editItem.title}
                  onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                  className="w-full rounded-lg bg-slate-50 border px-2 py-1 text-xs font-bold"
                />
                <textarea
                  rows={2}
                  value={editItem.description || editItem.desc || ""}
                  onChange={(e) => setEditItem({ ...editItem, description: e.target.value, desc: e.target.value })}
                  className="w-full rounded-lg bg-slate-50 border p-2 text-xs"
                />
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setEditingId(null)} className="text-xs font-bold text-slate-500">Cancel</button>
                  <button type="submit" className="px-3 py-1 bg-red-600 text-white text-xs font-extrabold rounded-lg">Save</button>
                </div>
              </form>
            );
          }

          return (
            <div key={m.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-red-600">{m.milestone} • {m.year}</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mt-2">{m.title}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{m.description || m.desc}</p>
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t">
                <button onClick={() => { setEditingId(m.id); setEditItem({ ...m }); }} className="p-1.5 bg-slate-100 rounded-lg text-slate-600 hover:text-red-600">
                  <Pencil className="size-3.5" />
                </button>
                <button onClick={() => handleDelete(m.id, m.title)} className="p-1.5 bg-rose-50 rounded-lg text-rose-600 hover:bg-rose-100">
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   ABOUT PAGE 3: IN-HOUSE TESTING LAB MANAGEMENT VIEW
   ========================================================================= */
function TestingLabManagementView() {
  const store = useAdminStore();
  const labItems = store.getTestingLab();

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<TestingLabItem | null>(null);
  const [toast, setToast] = useState("");

  const [toolName, setToolName] = useState("");
  const [toolDesc, setToolDesc] = useState("");
  const [icon, setIcon] = useState("Wrench");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    store.addTestingLab({
      toolName,
      toolDesc,
      icon,
    });
    setToolName("");
    setToolDesc("");
    setShowAddForm(false);
    setToast("Testing tool added!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    store.updateTestingLab(editItem.id, editItem);
    setEditingId(null);
    setEditItem(null);
    setToast("Testing tool updated!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete testing tool "${name}"?`)) {
      store.deleteTestingLab(id);
      setToast("Testing tool deleted!");
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-red-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-red-50 text-red-600">
              <Wrench className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">In-House Testing &amp; Staging Lab Equipment ({labItems.length})</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">Manage certified diagnostic tools and instruments displayed on the About page.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add Testing Equipment"}</span>
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2 border-b pb-2">
            <Plus className="size-4 text-red-600" /> Create Testing Tool Item
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Tool Name *</label>
              <input
                type="text"
                required
                placeholder="e.g., Fluke DSX-8000 Cable Certifiers"
                value={toolName}
                onChange={(e) => setToolName(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Icon Type</label>
              <select
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border px-3.5 py-2 text-xs font-bold text-slate-900"
              >
                <option value="Wrench">Wrench / Instrument</option>
                <option value="Cpu">Cpu / Hardware</option>
                <option value="Server">Server / Rack</option>
                <option value="ShieldCheck">Shield / Security</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Tool Description / Certification Standard</label>
            <textarea
              rows={2}
              placeholder="e.g., 100% Channel certification for Cat6A up to 2000 MHz with PDF pass reports."
              value={toolDesc}
              onChange={(e) => setToolDesc(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border p-3.5 text-xs text-slate-900"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit" className="px-5 py-2 rounded-xl bg-red-600 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md">
              <Save className="size-4" /> Save Equipment Item
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {labItems.map((item) => {
          if (editingId === item.id && editItem) {
            return (
              <form key={item.id} onSubmit={handleSaveEdit} className="bg-white p-4 rounded-2xl border-2 border-red-500 shadow-md space-y-3">
                <input
                  type="text"
                  required
                  value={editItem.toolName}
                  onChange={(e) => setEditItem({ ...editItem, toolName: e.target.value })}
                  className="w-full rounded-lg bg-slate-50 border px-2.5 py-1.5 text-xs font-bold"
                />
                <textarea
                  rows={2}
                  value={editItem.toolDesc}
                  onChange={(e) => setEditItem({ ...editItem, toolDesc: e.target.value })}
                  className="w-full rounded-lg bg-slate-50 border p-2 text-xs"
                />
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setEditingId(null)} className="text-xs font-bold text-slate-500">Cancel</button>
                  <button type="submit" className="px-3 py-1 bg-red-600 text-white text-xs font-extrabold rounded-lg">Save</button>
                </div>
              </form>
            );
          }

          return (
            <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">{item.toolName}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.toolDesc}</p>
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t">
                <button onClick={() => { setEditingId(item.id); setEditItem({ ...item }); }} className="p-1.5 bg-slate-100 rounded-lg text-slate-600 hover:text-red-600">
                  <Pencil className="size-3.5" />
                </button>
                <button onClick={() => handleDelete(item.id, item.toolName)} className="p-1.5 bg-rose-50 rounded-lg text-rose-600 hover:bg-rose-100">
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
