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
} from "lucide-react";
import { useState } from "react";
import {
  adminStore,
  useAdminStore,
  type HeroSlide,
  type TeamMember,
  type ContactInquiry,
  type SolutionModule,
  type ProjectItemData,
  type BlogPostData,
} from "@/lib/admin-store";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";

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
      <div className="min-h-screen w-full bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#EBF2FA] text-slate-900 flex items-center justify-center relative font-sans overflow-x-hidden selection:bg-red-500 selection:text-white p-4 sm:p-8 lg:p-12">
        {/* TOP-LEFT RED VECTOR ACCENT */}
        <div className="absolute top-0 left-0 z-0 pointer-events-none w-72 h-72 sm:w-[450px] sm:h-[450px]">
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
        <div className="absolute bottom-0 left-0 z-0 pointer-events-none w-72 h-72 sm:w-[450px] sm:h-[450px]">
          <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-sm">
            <path d="M0,500 L0,220 L260,500 Z" fill="#7F1D1D" opacity="0.9" />
            <path d="M0,500 L0,280 L200,500 Z" fill="#DC2626" />
            <path d="M0,280 L120,200 L240,420 L200,500 Z" fill="#EF4444" />
            <path d="M0,180 Q280,340 500,500 L0,500 Z" fill="#2563EB" opacity="0.08" />
          </svg>
        </div>

        {/* DOT MATRIX GRID PATTERN (Middle-Left) */}
        <div className="absolute top-1/3 left-8 sm:left-16 z-0 pointer-events-none opacity-40 hidden lg:block">
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-400" />
            ))}
          </div>
        </div>

        {/* SOFT AMBIENT BLUE GLOW ON THE RIGHT */}
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-sky-200/50 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[130px] pointer-events-none" />

        {/* Main Split Layout Container */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10 py-6 sm:py-12">
          {/* LEFT COLUMN - BRANDING & SLOGAN & FEATURES */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10 pr-0 lg:pr-6">
            {/* Top Brand Logo */}
            <div className="flex flex-col items-start space-y-1">
              <img
                src="/jay-logo.jpeg"
                alt="Jay Electronics Logo"
                className="h-12 sm:h-16 w-auto object-contain drop-shadow-sm"
              />
              <div className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-slate-500 uppercase pt-2 pl-0.5">
                ADMIN CONTROL CENTER
              </div>
            </div>

            {/* Headline and Top-Right Block Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              {/* Main Headline (Cols 8) */}
              <div className="sm:col-span-8 space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.12] tracking-tight">
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
                <div className="pt-2">
                  <p className="text-slate-600 font-bold text-lg sm:text-xl leading-snug">
                    Premium Electronics Solutions
                  </p>
                  <p className="text-slate-600 font-semibold text-base sm:text-lg">
                    for Everyone
                  </p>
                </div>
              </div>

              {/* Technology Connects Block (Cols 4) - Top Right beside Headline */}
              <div className="sm:col-span-4 border-l-2 border-red-500 pl-4 py-1 flex flex-col items-start justify-center">
                <div className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-slate-400 uppercase leading-relaxed">
                  <div>TECHNOLOGY</div>
                  <div>CONNECTS</div>
                  <div>A BETTER</div>
                  <div>TOMORROW</div>
                </div>
                <div className="w-10 h-1 bg-red-600 rounded-full mt-3" />
              </div>
            </div>

            {/* 4 Feature Cards (White Floating Cards with Clean Badges) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-2">
              {/* Secure Access */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-200/80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <Shield className="size-7 text-red-500" />
                </div>
                <span className="text-base font-extrabold text-[#0F172A] leading-tight">
                  Secure
                </span>
                <span className="text-sm font-bold text-slate-400 leading-tight">Access</span>
                <div className="w-8 h-1 bg-red-500 rounded-full mt-3" />
              </div>

              {/* 24/7 Availability */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-200/80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <Clock className="size-7 text-blue-500" />
                </div>
                <span className="text-base font-extrabold text-[#0F172A] leading-tight">
                  24/7
                </span>
                <span className="text-sm font-bold text-slate-400 leading-tight">
                  Availability
                </span>
                <div className="w-8 h-1 bg-blue-500 rounded-full mt-3" />
              </div>

              {/* Global Support */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-200/80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <Headphones className="size-7 text-red-500" />
                </div>
                <span className="text-base font-extrabold text-[#0F172A] leading-tight">
                  Global
                </span>
                <span className="text-sm font-bold text-slate-400 leading-tight">Support</span>
                <div className="w-8 h-1 bg-red-500 rounded-full mt-3" />
              </div>

              {/* Better Management */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-200/80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <BarChart3 className="size-7 text-blue-500" />
                </div>
                <span className="text-base font-extrabold text-[#0F172A] leading-tight">
                  Better
                </span>
                <span className="text-sm font-bold text-slate-400 leading-tight">
                  Management
                </span>
                <div className="w-8 h-1 bg-blue-500 rounded-full mt-3" />
              </div>
            </div>

            {/* Bottom Slogan Bar */}
            <div className="flex items-center pt-4">
              <div className="w-12 h-1 bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 rounded-full mr-3" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-slate-500 uppercase">
                A SMARTER • SAFER • CONNECTED WORLD
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN - FLOATING WHITE LOGIN CARD */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative z-10">
            {/* Outer Subtle Frame Accent */}
            <div className="relative w-full max-w-lg lg:max-w-xl p-[2px] rounded-[36px] bg-gradient-to-br from-red-500/70 via-slate-200 to-blue-500/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {/* White Card */}
              <div className="w-full bg-white rounded-[34px] p-8 sm:p-12 shadow-2xl relative z-10 text-slate-900">
                {/* Header inside card */}
                <div className="flex flex-col items-center text-center mb-8">
                  <img
                    src="/jay-logo.jpeg"
                    alt="Jay Electronics Logo"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                  <div className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-slate-500 uppercase mt-2">
                    ADMIN CONTROL CENTER
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">
                  {loginError && (
                    <div className="rounded-2xl bg-red-50 border border-red-200 p-4 text-sm font-bold text-red-600 flex items-start gap-3">
                      <ShieldAlert className="size-5 shrink-0 text-red-500 mt-0.5" />
                      <span>{loginError}</span>
                    </div>
                  )}

                  {/* Email Input */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-6 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="admin123@gmail.com"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-300/80 py-4 pl-14 pr-5 text-base sm:text-lg text-slate-900 placeholder:text-slate-400 font-medium focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all outline-none"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-6 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-300/80 py-4 pl-14 pr-14 text-base sm:text-lg text-slate-900 placeholder:text-slate-400 font-medium focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition cursor-pointer p-1"
                    >
                      {showPassword ? <EyeOff className="size-6" /> : <Eye className="size-6" />}
                    </button>
                  </div>

                  {/* Checkbox and Forgot Password Link */}
                  <div className="flex items-center justify-between text-sm sm:text-base font-extrabold pt-2">
                    <label className="flex items-center gap-2.5 cursor-pointer text-slate-900 select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 size-5 cursor-pointer accent-blue-600"
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
                      className="text-slate-700 hover:text-red-600 transition-colors font-bold cursor-pointer"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Submit Sign In Button */}
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-4 sm:py-5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B] text-white font-extrabold text-lg sm:text-xl tracking-wide shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer group mt-3 transform hover:scale-[1.01]"
                  >
                    <span>{authLoading ? "Authenticating..." : "Sign In"}</span>
                    <ArrowRight className="size-6 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </form>

                {/* Back to main website link */}
                <div className="mt-8 pt-2 text-center">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-extrabold text-slate-800 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="size-5" /> Back to Main Website
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
  | "about"
  | "team"
  | "inquiries"
  | "settings";

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
    <div className="min-h-screen bg-[#F4F6FA] text-slate-800 flex font-sans antialiased">
      {/* 1. SIDEBAR (LIGHT CLEAN THEME - EXACT MATCH TO USER SCREENSHOT) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white text-slate-800 flex flex-col justify-between p-5 border-r border-slate-200/80 shadow-sm transition-transform duration-300 lg:static lg:translate-x-0 relative overflow-hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6 relative z-10">
          {/* Sidebar Top Logo Branding */}
          <div className="pt-2 px-1 flex flex-col items-start space-y-1">
            <img
              src="/jay-logo.jpeg"
              alt="Jay Electronics Logo"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-xs"
            />
            <div className="text-[10px] font-extrabold tracking-[0.25em] text-slate-500 uppercase pt-2 pl-0.5">
              ADMIN CONTROL CENTER
            </div>
          </div>

          {/* Navigation Category */}
          <nav className="space-y-1.5 pt-2" aria-label="Sidebar Navigation">
            {[
              {
                id: "dashboard",
                label: "Dashboard",
                icon: LayoutDashboard,
                badge: null,
              },
              {
                id: "solutions",
                label: "Solutions Modules",
                icon: Layers,
                badge: `${solutions.length || 10}`,
              },
              {
                id: "projects",
                label: "Landmark Projects",
                icon: Building2,
                badge: `${projects.length || 4}`,
              },
              {
                id: "blogs",
                label: "Blogs & Circulars",
                icon: BookOpen,
                badge: `${blogs.length || 4}`,
              },
              {
                id: "banners",
                label: "Hero Banners",
                icon: ImageIcon,
                badge: `${heroSlides.length || 4}`,
              },
              {
                id: "about",
                label: "About Us",
                icon: FileText,
                badge: null,
              },
              {
                id: "team",
                label: "Team Members",
                icon: Users,
                badge: `${teamMembers.length || 5}`,
              },
              {
                id: "inquiries",
                label: "Inquiries",
                icon: Mail,
                badge: newInquiriesCount > 0 ? `${newInquiriesCount} New` : "1 New",
              },
              {
                id: "settings",
                label: "Settings",
                icon: Settings,
                badge: null,
              },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as SidebarTab);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl transition-all duration-200 group ${
                    isActive
                      ? "bg-[#FFF0F2] text-[#DC2626] font-extrabold shadow-2xs border-l-4 border-[#DC2626]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-semibold"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`size-5 transition-colors ${
                        isActive ? "text-[#DC2626]" : "text-slate-500 group-hover:text-slate-800"
                      }`}
                    />
                    <span className="tracking-tight text-xs sm:text-sm">{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`font-black flex items-center justify-center text-[10px] px-2 py-0.5 rounded-full ${
                        isActive || item.badge.includes("New")
                          ? "bg-[#DC2626] text-white shadow-2xs"
                          : "bg-[#DC2626] text-white size-5 rounded-full p-0 leading-none"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom Slogan Accent */}
        <div className="relative z-10 pt-6 border-t border-slate-100 mt-auto">
          {profileMenuOpen && (
            <div className="absolute bottom-full mb-2 left-0 right-0 bg-white border border-slate-200 rounded-2xl p-2 shadow-xl space-y-1 z-50 animate-in fade-in slide-in-from-bottom-2 text-slate-800">
              <Link
                to="/"
                target="_blank"
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
              >
                <ExternalLink className="size-4 text-blue-600" />
                <span>View Live Website</span>
              </Link>
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 transition"
              >
                <LogOut className="size-4 text-red-600" />
                <span>Sign Out Control Center</span>
              </button>
            </div>
          )}

          <div
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="flex items-center justify-between cursor-pointer py-1 group"
          >
            <div className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase leading-tight">
              INNOVATION <br />
              FOR A SAFER <br />
              TOMORROW
            </div>
            <ChevronRight className="size-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
          </div>
        </div>

        {/* Bottom Left Subtle Vector Graphic Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none opacity-20 bg-gradient-to-t from-red-500/20 via-pink-400/10 to-transparent" />
      </aside>

      {/* Overlay for Mobile Drawer */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* TOP HEADER */}
        <header className="bg-transparent px-6 sm:px-10 py-6 flex items-center justify-between gap-4">
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
          {activeTab === "solutions" && <SolutionsManagementView />}
          {activeTab === "projects" && <ProjectsManagementView />}
          {activeTab === "blogs" && <BlogsManagementView />}
          {activeTab === "banners" && <BannersManagementView />}
          {activeTab === "about" && <AboutManagementView />}
          {activeTab === "team" && <TeamManagementView />}
          {activeTab === "inquiries" && <InquiriesManagementView />}
          {activeTab === "settings" && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900">Admin Control Settings</h2>
              <p className="text-sm text-slate-600">Configure global website preferences and security credentials.</p>
            </div>
          )}
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

      {/* ANALYTICS SECTION (TWO COLUMNS: LINE CHART + DONUT CHART) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: WEBSITE INQUIRIES SMOOTH RED LINE CHART */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                Website Inquiries
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Last 7 days activity</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 transition cursor-pointer shadow-2xs">
              <span>This Week</span>
              <ChevronDown className="size-3.5 text-slate-400" />
            </div>
          </div>

          {/* Smooth Red SVG Line Chart */}
          <div className="relative pt-4 pb-2">
            <div className="h-56 w-full relative">
              {/* Y Axis Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between text-[11px] text-slate-400 pointer-events-none">
                <div className="border-b border-slate-100 flex items-center justify-between pb-1">
                  <span>30</span>
                </div>
                <div className="border-b border-slate-100 flex items-center justify-between pb-1">
                  <span>20</span>
                </div>
                <div className="border-b border-slate-100 flex items-center justify-between pb-1">
                  <span>10</span>
                </div>
                <div className="border-b border-slate-100 flex items-center justify-between pb-1">
                  <span>0</span>
                </div>
              </div>

              {/* Smooth Red Curved Line Path */}
              <svg className="w-full h-full overflow-visible relative z-10" viewBox="0 0 500 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="redChartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Filled Red Gradient Area */}
                <path
                  d="M 10,145 C 75,120 140,115 210,90 C 275,65 340,65 410,50 C 445,40 480,25 490,20 L 490,170 L 10,170 Z"
                  fill="url(#redChartGradient)"
                />

                {/* Red Line Path */}
                <path
                  d="M 10,145 C 75,120 140,115 210,90 C 275,65 340,65 410,50 C 445,40 480,25 490,20"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Node Points on Curve */}
                <circle cx="10" cy="145" r="4.5" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
                <circle cx="90" cy="122" r="4.5" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
                <circle cx="170" cy="115" r="4.5" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
                <circle cx="250" cy="90" r="4.5" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
                <circle cx="330" cy="65" r="4.5" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
                <circle cx="410" cy="65" r="4.5" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
                <circle cx="490" cy="20" r="6" fill="#DC2626" stroke="#FFFFFF" strokeWidth="3" />
              </svg>
            </div>

            {/* X Axis Days Labels */}
            <div className="flex justify-between text-[11px] font-semibold text-slate-400 pt-3 px-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTENT DISTRIBUTION DONUT CHART */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-6 flex flex-col justify-between">
          <h3 className="text-base font-extrabold text-slate-900">Content Distribution</h3>

          <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
            {/* SVG Donut Chart */}
            <div className="relative size-44 shrink-0 flex items-center justify-center">
              <svg className="size-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Background Ring */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="4"
                />

                {/* Hero Banners - Red 31% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="4"
                  strokeDasharray="31, 100"
                />

                {/* About Us - Slate 8% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="4"
                  strokeDasharray="8, 100"
                  strokeDashoffset="-31"
                />

                {/* Team Members - Maroon 38% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#881337"
                  strokeWidth="4"
                  strokeDasharray="38, 100"
                  strokeDashoffset="-39"
                />

                {/* Inquiries - Magenta 23% */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E11D48"
                  strokeWidth="4"
                  strokeDasharray="23, 100"
                  strokeDashoffset="-77"
                />
              </svg>

              {/* Center Donut Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-black text-slate-900">100%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Site Data</span>
              </div>
            </div>

            {/* Donut Legend Items */}
            <div className="space-y-3.5 w-full max-w-[180px]">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#DC2626]" />
                  <span className="font-semibold text-slate-600">Hero Banners</span>
                </div>
                <span className="font-extrabold text-slate-900">31%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#94A3B8]" />
                  <span className="font-semibold text-slate-600">About Us</span>
                </div>
                <span className="font-extrabold text-slate-900">8%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#881337]" />
                  <span className="font-semibold text-slate-600">Team Members</span>
                </div>
                <span className="font-extrabold text-slate-900">38%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#E11D48]" />
                  <span className="font-semibold text-slate-600">Inquiries</span>
                </div>
                <span className="font-extrabold text-slate-900">23%</span>
              </div>
            </div>
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
          {[
            {
              id: "inq-1",
              initial: "R",
              initialBg: "bg-red-100 text-red-600",
              name: "Ramesh Shinde",
              subject: "City CCTV Surveillance Expansion Project",
              date: "2026-09-15 11:30 AM",
              status: "New",
              statusClass: "bg-emerald-100/70 text-emerald-700",
            },
            {
              id: "inq-2",
              initial: "D.",
              initialBg: "bg-amber-100 text-amber-700",
              name: "Dr. Ananya Kulkarni",
              subject: "Hospital Security System Inquiry",
              date: "2026-09-14 04:22 PM",
              status: "In Progress",
              statusClass: "bg-amber-100/70 text-amber-700",
            },
            {
              id: "inq-3",
              initial: "S",
              initialBg: "bg-sky-100 text-sky-700",
              name: "Sagar Patil",
              subject: "Network Infrastructure for Office",
              date: "2026-09-14 10:15 AM",
              status: "Replied",
              statusClass: "bg-sky-100/70 text-sky-700",
            },
            {
              id: "inq-4",
              initial: "P",
              initialBg: "bg-pink-100 text-pink-700",
              name: "Priya Deshmukh",
              subject: "LED Display Quotation Request",
              date: "2026-09-13 02:48 PM",
              status: "Closed",
              statusClass: "bg-slate-200/70 text-slate-700",
            },
          ].map((item) => (
            <div key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 px-2 rounded-xl transition">
              <div className="flex items-center gap-3.5">
                <div className={`size-9 rounded-full ${item.initialBg} flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs`}>
                  {item.initial}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.subject}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
                <span
                  className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${item.statusClass}`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
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
  const [newTitle, setNewTitle] = useState("");
  const [newSubtitle, setNewSubtitle] = useState("");

  const handleSave = (updated: HeroSlide[]) => {
    store.saveHeroSlides(updated);
    setToast("Hero Banner Slides saved successfully!");
    setTimeout(() => setToast(""), 3000);
  };

  const handleUpdateField = (id: string, field: keyof HeroSlide, val: string) => {
    const updated = items.map((s) => (s.id === id ? { ...s, [field]: val } : s));
    setItems(updated);
  };

  const handleRemove = (id: string) => {
    const updated = items.filter((s) => s.id !== id);
    setItems(updated);
  };

  const handleMove = (index: number, direction: "up" | "down") => {
    const target = direction === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    const temp = next[index];
    const targetItem = next[target];
    if (temp && targetItem) {
      next[index] = targetItem;
      next[target] = temp;
      setItems(next);
    }
  };

  const handleAddSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImage) return;
    const slide: HeroSlide = {
      id: `slide-${Date.now()}`,
      image: newImage,
      title: newTitle || "Jay Electronics Technology",
      subtitle: newSubtitle || "Empowering Connectivity & Security",
      alt: newTitle || "Hero Slide",
    };
    const updated = [...items, slide];
    setItems(updated);
    setNewImage("");
    setNewTitle("");
    setNewSubtitle("");
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
        <form onSubmit={handleAddSlide} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="space-y-1.5 md:col-span-3">
            <label className="text-xs font-bold text-slate-600">Image Path / URL</label>
            <input
              type="text"
              required
              placeholder="/hero-slide-3.jpeg or https://images.unsplash.com/..."
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">Title</label>
            <input
              type="text"
              placeholder="IP CCTV & Advanced Surveillance"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">Subtitle</label>
            <input
              type="text"
              placeholder="High-definition monitoring..."
              value={newSubtitle}
              onChange={(e) => setNewSubtitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
            />
          </div>
          <Button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs">
            Add Slide
          </Button>
        </form>
      </div>

      {/* Slide Items List */}
      <div className="space-y-4">
        {items.map((slide, idx) => (
          <div key={slide.id} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:w-48 h-28 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 relative">
              <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                Slide #{idx + 1}
              </span>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="space-y-1 md:col-span-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase">Image URL</label>
                <input
                  type="text"
                  value={slide.image}
                  onChange={(e) => handleUpdateField(slide.id, "image", e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase">Title</label>
                <input
                  type="text"
                  value={slide.title}
                  onChange={(e) => handleUpdateField(slide.id, "title", e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase">Subtitle</label>
                <input
                  type="text"
                  value={slide.subtitle}
                  onChange={(e) => handleUpdateField(slide.id, "subtitle", e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex lg:flex-col gap-2 shrink-0">
              <button onClick={() => handleMove(idx, "up")} disabled={idx === 0} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30">
                <MoveUp className="size-4" />
              </button>
              <button onClick={() => handleMove(idx, "down")} disabled={idx === items.length - 1} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30">
                <MoveDown className="size-4" />
              </button>
              <button onClick={() => handleRemove(slide.id)} className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200">
                <Trash2 className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
   ABOUT US MANAGEMENT VIEW
   ========================================================================= */
function AboutManagementView() {
  const store = useAdminStore();
  const [data, setData] = useState(store.getAboutData());
  const [toast, setToast] = useState("");

  const handleSave = () => {
    store.saveAboutData(data);
    setToast("About Us details updated!");
    setTimeout(() => setToast(""), 3000);
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
          <h2 className="text-xl font-extrabold text-slate-900">About Us Info & Images</h2>
          <p className="text-xs text-slate-500 mt-1">Update building photo, corporate bio, and founder information.</p>
        </div>
        <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2">
          <Save className="size-4" /> Save About Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
          <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider">Company & Building Info</h3>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">Building Photo Path / URL</label>
              <input
                type="text"
                value={data.buildingImage}
                onChange={(e) => setData({ ...data, buildingImage: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Heading</label>
                <input
                  type="text"
                  value={data.heading}
                  onChange={(e) => setData({ ...data, heading: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Tagline</label>
                <input
                  type="text"
                  value={data.tagline}
                  onChange={(e) => setData({ ...data, tagline: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">Company Overview</label>
              <textarea
                rows={4}
                value={data.description}
                onChange={(e) => setData({ ...data, description: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
              />
            </div>
          </div>

          <hr className="border-slate-200 my-4" />

          <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider">Founder / Owner Info</h3>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">Owner Photo Path / URL</label>
              <input
                type="text"
                value={data.founderImage}
                onChange={(e) => setData({ ...data, founderImage: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Founder Name</label>
                <input
                  type="text"
                  value={data.founderName}
                  onChange={(e) => setData({ ...data, founderName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Designation</label>
                <input
                  type="text"
                  value={data.founderDesignation}
                  onChange={(e) => setData({ ...data, founderDesignation: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Experience</label>
                <input
                  type="text"
                  value={data.founderExperience}
                  onChange={(e) => setData({ ...data, founderExperience: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">Founder Bio</label>
              <textarea
                rows={3}
                value={data.founderDescription}
                onChange={(e) => setData({ ...data, founderDescription: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Live Preview Column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 sticky top-24">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b pb-2">Live Preview</h4>
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Building Photo</span>
              <div className="h-40 rounded-2xl overflow-hidden bg-slate-100 border">
                <img src={data.buildingImage} alt="Building" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Owner Photo</span>
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border">
                <img src={data.founderImage} alt="Owner" className="size-14 rounded-full object-cover border-2 border-blue-500 shrink-0" />
                <div>
                  <div className="font-extrabold text-sm text-slate-900">{data.founderName}</div>
                  <div className="text-xs text-blue-600 font-semibold">{data.founderDesignation}</div>
                  <div className="text-[10px] text-slate-500">{data.founderExperience}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role) return;
    store.addTeamMember({
      name,
      role,
      experience: experience || "5+ Yrs Experience",
      image: image || "/team-1.png",
      accent: "from-[#00E5FF] to-[#0088FF]",
      bio: bio || "Key engineering expert.",
    });
    setName("");
    setRole("");
    setExperience("");
    setImage("");
    setBio("");
    setToast("Team Member added!");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-blue-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>{toast}</span>
        </div>
      )}

      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <h2 className="text-xl font-extrabold text-slate-900">Team Members ({members.length})</h2>
        <p className="text-xs text-slate-500 mt-1">Add, edit or delete experts in the 3D team carousel.</p>
      </div>

      {/* Add New Member Form */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
        <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-2">
          <UserPlus className="size-4" /> Add New Team Member
        </h3>
        <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">Full Name</label>
            <input
              type="text"
              required
              placeholder="Er. Payal Wankar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">Role / Title</label>
            <input
              type="text"
              required
              placeholder="System Architect"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">Experience</label>
            <input
              type="text"
              placeholder="8+ Yrs Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600">Photo Path / URL</label>
            <input
              type="text"
              placeholder="/team-2.png"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:border-blue-500"
            />
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:col-span-2 lg:col-span-4 py-2.5">
            Add Team Member
          </Button>
        </form>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <img src={member.image} alt={member.name} className="size-16 rounded-2xl object-cover border-2 border-blue-500/30 bg-slate-100 shrink-0" />
              <div className="flex-1 space-y-1">
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => store.updateTeamMember(member.id, { name: e.target.value })}
                  className="font-extrabold text-sm text-slate-900 bg-transparent border-b border-transparent focus:border-blue-500 w-full focus:outline-none"
                />
                <input
                  type="text"
                  value={member.role}
                  onChange={(e) => store.updateTeamMember(member.id, { role: e.target.value })}
                  className="text-xs text-blue-600 font-semibold bg-transparent border-b border-transparent focus:border-blue-500 w-full focus:outline-none"
                />
                <input
                  type="text"
                  value={member.experience}
                  onChange={(e) => store.updateTeamMember(member.id, { experience: e.target.value })}
                  className="text-[11px] text-slate-400 bg-transparent border-b border-transparent focus:border-blue-500 w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">ID: {member.id}</span>
              <button
                onClick={() => {
                  store.deleteTeamMember(member.id);
                  setToast("Member deleted!");
                  setTimeout(() => setToast(""), 3000);
                }}
                className="px-3 py-1 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 text-xs font-bold flex items-center gap-1.5"
              >
                <Trash2 className="size-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
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

  const handleDelete = async (id: string) => {
    store.deleteInquiry(id);
    try {
      await deleteInquiryFromFirestore(id);
    } catch (err) {
      console.warn("Firestore delete inquiry fallback:", err);
    }
    setToast("Inquiry deleted!");
    setTimeout(() => setToast(""), 3000);
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

      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center text-slate-500 text-xs font-medium">
            No inquiries found for filter: {filter}
          </div>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div>
                  <h4 className="font-extrabold text-base text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.email} • {item.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-mono">{item.date}</span>
                  <select
                    value={item.status}
                    onChange={(e) => handleStatusChange(item.id, e.target.value as any)}
                    className="rounded-xl px-3 py-1 text-xs font-bold border border-slate-200 bg-slate-50 text-slate-800"
                  >
                    <option value="New">🟢 New</option>
                    <option value="In Progress">🟡 In Progress</option>
                    <option value="Resolved">⚪ Resolved</option>
                  </select>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
              <div>
                <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.subject}</h5>
                <p className="text-xs text-slate-700 leading-relaxed mt-1 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  {item.message}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   SOLUTIONS MANAGEMENT VIEW (ADD & DELETE MODULES)
   ========================================================================= */
function SolutionsManagementView() {
  const store = useAdminStore();
  const solutions = store.getSolutions();

  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("ELECTRONIC SECURITY");
  const [tagline, setTagline] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [featuresText, setFeaturesText] = useState("");
  const [brandsText, setBrandsText] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const features = featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);
    const partnerBrands = brandsText
      .split(",")
      .map((b) => b.trim())
      .filter(Boolean);

    store.addSolution({
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title,
      category: category || "ELECTRONIC SECURITY",
      tagline: tagline || title,
      shortDesc: shortDesc || title,
      fullDesc: fullDesc || shortDesc || title,
      features: features.length > 0 ? features : ["Turnkey Installation & Engineering Support"],
      partnerBrands: partnerBrands.length > 0 ? partnerBrands : ["CP PLUS", "Cisco", "Honeywell"],
      image: image || "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000",
    });

    setTitle("");
    setTagline("");
    setShortDesc("");
    setFullDesc("");
    setFeaturesText("");
    setBrandsText("");
    setImage("");
    setShowAddForm(false);
  };

  const handleDelete = (id: string, solutionTitle: string) => {
    if (confirm(`Are you sure you want to delete solution "${solutionTitle}"?`)) {
      store.deleteSolution(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <Layers className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Solutions & Architecture Modules</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Add or delete technology architecture modules displayed on the Solutions page.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-2xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-emerald-900/10"
        >
          <Plus className="size-4" />
          <span>{showAddForm ? "Cancel Add" : "Add New Solution Module"}</span>
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-4 animate-in fade-in slide-in-from-top-2">
          <h4 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Plus className="size-4 text-emerald-600" /> Create Solution Module
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Module Title *</label>
              <input
                type="text"
                required
                placeholder="e.g., Fire Safety Systems"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Category Tag *</label>
              <input
                type="text"
                required
                placeholder="e.g., FIRE & SAFETY"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Tagline</label>
              <input
                type="text"
                placeholder="e.g., NBC 2016 Compliant Smoke & Heat Detection"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Image URL</label>
              <input
                type="text"
                placeholder="https://images.unsplash.com/... or /service-cctv.png"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Full Description</label>
            <textarea
              rows={3}
              placeholder="Detailed description of the technology architecture..."
              value={fullDesc}
              onChange={(e) => setFullDesc(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Key Features (One feature per line)</label>
              <textarea
                rows={3}
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Certified Brands (Comma separated)</label>
              <input
                type="text"
                placeholder="Honeywell, Bosch, CP PLUS"
                value={brandsText}
                onChange={(e) => setBrandsText(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
              />
            </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {solutions.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="relative h-40 w-full bg-slate-900 overflow-hidden">
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

              <div className="p-5 space-y-3">
                <h4 className="font-extrabold text-base text-slate-900">{item.title}</h4>
                <p className="text-xs text-[#059669] font-bold">{item.tagline}</p>
                <p className="text-xs text-slate-600 line-clamp-2">{item.fullDesc || item.shortDesc}</p>

                {item.features && item.features.length > 0 && (
                  <div className="space-y-1 pt-1 border-t border-slate-100">
                    <span className="text-[10px] font-black uppercase text-slate-400">Features ({item.features.length})</span>
                    <ul className="space-y-1">
                      {item.features.slice(0, 2).map((f, i) => (
                        <li key={i} className="text-[11px] font-medium text-slate-700 flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-3">
              <span className="text-[10px] font-mono text-slate-400">ID: {item.id}</span>
              <button
                onClick={() => handleDelete(item.id, item.title)}
                className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <Trash2 className="size-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
   PROJECTS MANAGEMENT VIEW (ADD & DELETE LANDMARK PROJECTS)
   ========================================================================= */
function ProjectsManagementView() {
  const store = useAdminStore();
  const projects = store.getProjects();

  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState("");
  const [categoryTag, setCategoryTag] = useState("Government & Municipal");
  const [location, setLocation] = useState("");
  const [scale, setScale] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [footerBadge, setFooterBadge] = useState("100% Uptime Maintained");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    store.addProject({
      title,
      categoryTag,
      categoryBadge: categoryTag.toUpperCase(),
      location: location || "Maharashtra, India",
      scale: scale || "Turnkey Enterprise Installation",
      description: description || title,
      image: image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
      challenge: challenge || "High security and uninterrupted SLA requirements.",
      solution: solution || "Engineered fiber backbone with redundant surveillance coverage.",
      footerBadge: footerBadge || "Verified Deployment",
    });

    setTitle("");
    setLocation("");
    setScale("");
    setDescription("");
    setImage("");
    setChallenge("");
    setSolution("");
    setShowAddForm(false);
  };

  const handleDelete = (id: string, projectTitle: string) => {
    if (confirm(`Are you sure you want to delete project "${projectTitle}"?`)) {
      store.deleteProject(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-sky-50 text-[#0284C7]">
              <Building2 className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Landmark Projects & Case Studies</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Add or delete infrastructure deployments shown on the Projects page.
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
                placeholder="e.g., Sugar Mill Fiber Backhaul & CCTV"
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
                <option value="Government & Municipal">Government & Municipal</option>
                <option value="Manufacturing & Heavy Industry">Manufacturing & Heavy Industry</option>
                <option value="Hospitals & Healthcare">Hospitals & Healthcare</option>
                <option value="Banks & Financial">Banks & Financial</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="e.g., Kolhapur, Maharashtra"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Scale / Capacity</label>
              <input
                type="text"
                placeholder="e.g., SCALE: 15 KM ARMORED FIBER • 12 SHEDS"
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Image URL</label>
            <input
              type="text"
              placeholder="https://images.unsplash.com/... or /project-smartcity.png"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
            />
          </div>

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
              <label className="block text-xs font-bold text-slate-700 mb-1">Engineering Challenge</label>
              <textarea
                rows={2}
                placeholder="Key difficulties (e.g. EMI interference, extreme weather)..."
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Deployed Solution</label>
              <textarea
                rows={2}
                placeholder="How JEPL solved the problem..."
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-900 focus:outline-none focus:border-sky-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div>
              <input
                type="text"
                placeholder="Footer Badge e.g. 100% Uptime"
                value={footerBadge}
                onChange={(e) => setFooterBadge(e.target.value)}
                className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-900"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold tracking-wide flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Save className="size-4" /> Save Project
            </button>
          </div>
        </form>
      )}

      {/* List of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((item) => (
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
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-3">
              <span className="text-[10px] font-mono text-slate-400">ID: {item.id}</span>
              <button
                onClick={() => handleDelete(item.id, item.title)}
                className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <Trash2 className="size-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
   BLOGS MANAGEMENT VIEW (ADD & DELETE ARTICLES)
   ========================================================================= */
function BlogsManagementView() {
  const store = useAdminStore();
  const blogs = store.getBlogs();

  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("COMPLIANCE & SECURITY");
  const [readTime, setReadTime] = useState("5 min read");
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  );
  const [description, setDescription] = useState("");
  const [takeaway, setTakeaway] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    store.addBlog({
      title,
      tag: tag || "TECHNICAL INSIGHT",
      readTime: readTime || "4 min read",
      date: date || "September 2026",
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
  };

  const handleDelete = (id: string, blogTitle: string) => {
    if (confirm(`Are you sure you want to delete article "${blogTitle}"?`)) {
      store.deleteBlog(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-50 text-[#D97706]">
              <BookOpen className="size-5" />
            </span>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Blogs & Compliance Circulars</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Publish or remove technical blogs, compliance guidelines, and engineering insights.
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
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Category Tag *</label>
              <input
                type="text"
                required
                placeholder="e.g., COMPLIANCE & BANKING"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Read Time</label>
              <input
                type="text"
                placeholder="e.g., 5 min read"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Publication Date</label>
              <input
                type="text"
                placeholder="e.g., September 17, 2026"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Image URL</label>
              <input
                type="text"
                placeholder="https://images.unsplash.com/..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
          </div>

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
            <label className="block text-xs font-bold text-slate-700 mb-1">Key Takeaway Box Text</label>
            <input
              type="text"
              placeholder="e.g., Banks must calculate true H.265+ bitrate budgets..."
              value={takeaway}
              onChange={(e) => setTakeaway(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
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
        {blogs.map((item) => (
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
                <div className="absolute bottom-3 left-3 bg-slate-950/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  {item.date} • {item.readTime}
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
              <button
                onClick={() => handleDelete(item.id, item.title)}
                className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <Trash2 className="size-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
