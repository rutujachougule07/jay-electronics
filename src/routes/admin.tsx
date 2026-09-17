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
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 sm:p-8 lg:p-12 relative font-sans overflow-x-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(238, 234, 227, 0.45), rgba(245, 241, 235, 0.25)), url('/admin-login-bg.png')`,
          backgroundColor: '#EBE6DE',
        }}
      >
        {/* Main Split Layout Container */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 py-6">
          
          {/* LEFT COLUMN - BRANDING & SLOGAN & STATS */}
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-6">
            {/* Top Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-md border border-white/60 inline-flex items-center">
                <img
                  src="/logo.jpg"
                  alt="Jay Electronics Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="font-extrabold text-2xl tracking-tight text-[#0F172A]">
                <span className="text-[#DC2626]">JAY</span>{" "}
                <span className="text-[#2563EB]">electronics</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E293B] leading-[1.12] tracking-tight">
                Let’s Build a<br />
                Smarter World<br />
                With Electronics
              </h1>
              
              {/* Golden Line Accent */}
              <div className="w-14 h-1 bg-[#D97706] rounded-full" />

              {/* Subtext */}
              <p className="text-slate-600 text-sm sm:text-base font-medium max-w-md leading-relaxed">
                Manage your system with security, speed and simplicity.
              </p>
            </div>

            {/* Bottom Statistics Section */}
            <div className="pt-6 lg:pt-12">
              <div className="grid grid-cols-4 gap-3 sm:gap-6 border-t border-slate-400/30 pt-6">
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">100%</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Secure</div>
                </div>
                <div className="border-l border-slate-400/40 pl-3 sm:pl-6">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">24/7</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Access</div>
                </div>
                <div className="border-l border-slate-400/40 pl-3 sm:pl-6">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">Global</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Support</div>
                </div>
                <div className="border-l border-slate-400/40 pl-3 sm:pl-6">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">Better</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">Future</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FLOATING WHITE LOGIN CARD */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.14)] border border-slate-100 backdrop-blur-md relative overflow-hidden">
              
              {/* Header inside card */}
              <div className="text-center space-y-1.5 mb-8">
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A]">
                  JAY ELECTRONICS
                </h2>
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#2563EB]">
                  ADMIN CONTROL CENTER
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-5">
                {loginError && (
                  <div className="rounded-2xl bg-rose-50 border border-rose-200 p-3.5 text-xs font-medium text-rose-600 flex items-start gap-2.5">
                    <ShieldAlert className="size-4 shrink-0 text-rose-500 mt-0.5" />
                    <span>{loginError}</span>
                  </div>
                )}

                {/* Email Input */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="admin123@gmail.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3.5 pl-12 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all font-medium"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl bg-slate-50/80 border border-slate-200/90 py-3.5 pl-12 pr-12 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                  >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>

                {/* Checkbox and Forgot Password Link */}
                <div className="flex items-center justify-between text-xs font-semibold pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-700 select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 size-4 cursor-pointer"
                    />
                    <span>Remember Me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setLoginError("Default Credentials: admin123@gmail.com / admin123")}
                    className="text-slate-700 hover:text-blue-600 transition-colors font-bold"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Sign In Button */}
                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full py-4 rounded-2xl bg-[#0F172A] hover:bg-[#1E293B] active:bg-[#020617] text-white font-extrabold text-sm tracking-wide shadow-lg shadow-slate-900/10 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{authLoading ? "Authenticating..." : "Sign In"}</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Google Auth Button */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={authLoading}
                  className="w-full py-3.5 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs tracking-wide shadow-xs transition-all flex items-center justify-center gap-2.5 cursor-pointer mt-3"
                >
                  <svg className="size-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Sign In with Google</span>
                </button>
              </form>

              {/* Back to main website link */}
              <div className="mt-8 pt-4 text-center border-t border-slate-100">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="size-3.5" /> Back to Main Website
                </Link>
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
    <div className="min-h-screen bg-[#F6F8FC] text-slate-800 flex font-sans antialiased">
      {/* 1. SIDEBAR (EXACT MATCH TO DESIGN SCREENSHOT) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#091434] text-white flex flex-col justify-between p-5 border-r border-slate-800/80 shadow-2xl transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* Sidebar Top Logo Branding */}
          <div className="pt-2 px-1">
            <div className="w-14 h-14 bg-white rounded-2xl p-2 shadow-lg flex items-center justify-center shrink-0">
              <img
                src="/logo.jpg"
                alt="Jay Electronics Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-base font-black tracking-wide text-white uppercase leading-none">
                JAY ELECTRONICS
              </h1>
              <div className="text-xs font-extrabold text-cyan-400 tracking-wider flex items-center gap-1.5 mt-2 uppercase">
                <span className="size-2.5 rounded-full bg-emerald-400 shrink-0" />
                <span>ADMIN CONTROL CENTER</span>
              </div>
            </div>
          </div>

          {/* Navigation Category */}
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 px-1">
              MAIN MENU
            </div>

            <nav className="space-y-2" aria-label="Sidebar Navigation">
              {[
                {
                  id: "dashboard",
                  label: "Dashboard",
                  icon: LayoutDashboard,
                  badge: null,
                  badgeType: null,
                },
                {
                  id: "solutions",
                  label: "Solutions Modules",
                  icon: Layers,
                  badge: `${solutions.length}`,
                  badgeType: "emerald",
                },
                {
                  id: "projects",
                  label: "Landmark Projects",
                  icon: Building2,
                  badge: `${projects.length}`,
                  badgeType: "cyan",
                },
                {
                  id: "blogs",
                  label: "Blogs & Circulars",
                  icon: BookOpen,
                  badge: `${blogs.length}`,
                  badgeType: "orange",
                },
                {
                  id: "banners",
                  label: "Hero Banners",
                  icon: ImageIcon,
                  badge: `${heroSlides.length}`,
                  badgeType: "blue",
                },
                {
                  id: "about",
                  label: "About Us",
                  icon: FileText,
                  badge: null,
                  badgeType: null,
                },
                {
                  id: "team",
                  label: "Team Members",
                  icon: Users,
                  badge: `${teamMembers.length}`,
                  badgeType: "purple",
                },
                {
                  id: "inquiries",
                  label: "Inquiries",
                  icon: Mail,
                  badge: newInquiriesCount > 0 ? `${newInquiriesCount} New` : `${inquiries.length}`,
                  badgeType: "pink",
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
                        ? "bg-gradient-to-r from-[#00A3FF] via-[#0077FF] to-[#0055FF] text-white shadow-lg shadow-blue-500/30 font-bold"
                        : "text-slate-200 hover:text-white hover:bg-white/5 font-semibold"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "text-slate-400 group-hover:text-cyan-400"
                        }`}
                      >
                        <Icon className="size-4.5" />
                      </div>
                      <span className="tracking-wide text-xs sm:text-sm">{item.label}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={`font-black flex items-center justify-center ${
                          item.badgeType === "emerald"
                            ? "bg-[#059669] text-white text-[11px] size-6 rounded-full shadow-xs"
                            : item.badgeType === "cyan"
                            ? "bg-[#0284C7] text-white text-[11px] size-6 rounded-full shadow-xs"
                            : item.badgeType === "orange"
                            ? "bg-[#D97706] text-white text-[11px] size-6 rounded-full shadow-xs"
                            : item.badgeType === "blue"
                            ? "bg-[#0E46A3] text-white text-[11px] size-6 rounded-full shadow-xs"
                            : item.badgeType === "purple"
                            ? "bg-[#6B11B0] text-white text-[11px] size-6 rounded-full shadow-xs"
                            : item.badgeType === "pink"
                            ? "bg-[#FF0055] text-white px-2.5 py-0.5 rounded-full text-[10px] font-black shadow-md shadow-rose-500/30"
                            : "bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full text-xs"
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
        </div>

        {/* Sidebar Bottom Profile Card (With Popup Actions) */}
        <div className="relative mt-auto pt-4">
          {profileMenuOpen && (
            <div className="absolute bottom-full mb-2 left-0 right-0 bg-[#0C1842] border border-slate-700/80 rounded-2xl p-2 shadow-2xl backdrop-blur-xl space-y-1 z-50 animate-in fade-in slide-in-from-bottom-2">
              <Link
                to="/"
                target="_blank"
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition"
              >
                <ExternalLink className="size-4 text-cyan-400" />
                <span>View Live Website</span>
              </Link>
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition"
              >
                <LogOut className="size-4 text-rose-400" />
                <span>Sign Out Control Center</span>
              </button>
            </div>
          )}

          <div
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="bg-[#0D1C48]/90 hover:bg-[#12235A] border border-slate-700/60 rounded-2xl p-3 flex items-center justify-between cursor-pointer transition-all shadow-md group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-full bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-400 flex items-center justify-center text-white shrink-0 shadow-md">
                <User className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white leading-tight truncate">
                  Admin User
                </div>
                <div className="text-[10px] text-slate-400 font-medium leading-tight truncate">
                  admin@jayelectronics.com
                </div>
              </div>
            </div>

            <ChevronRight className="size-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile Drawer */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
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
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Dashboard
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-100 px-3 py-0.5 text-[11px] font-extrabold text-blue-600">
                  <Sparkles className="size-3" /> System Overview
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">
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
                className="w-48 md:w-60 bg-white border border-slate-200/90 rounded-full py-2 pl-9 pr-12 text-xs text-slate-800 placeholder:text-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
              <span className="absolute right-3 top-2 text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                ⌘K
              </span>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                className="flex size-9.5 items-center justify-center rounded-full bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 shadow-xs hover:bg-slate-50 transition"
              >
                <Bell className="size-4" />
              </button>
              <span className="absolute top-0 right-0 size-2.5 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
            </div>

            {/* Admin Profile/Avatar Area */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <div className="relative">
                <img
                  src="/about-owner.png"
                  alt="Admin Avatar"
                  className="size-9.5 rounded-full object-cover border border-slate-200 shadow-xs"
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
        </main>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN DASHBOARD VIEW (ULTRA PROFESSIONAL & ATTRACTIVE)
   ========================================================================= */
function DashboardMainView({ onNavigateTab }: { onNavigateTab: (tab: SidebarTab) => void }) {
  const store = useAdminStore();
  const heroSlides = store.getHeroSlides();
  const teamMembers = store.getTeamMembers();
  const inquiries = store.getInquiries();

  const heroCount = heroSlides.length;
  const aboutCount = 1;
  const teamCount = teamMembers.length;
  const inqCount = inquiries.length;
  const totalCount = Math.max(heroCount + aboutCount + teamCount + inqCount, 1);

  const heroPct = Math.round((heroCount / totalCount) * 100);
  const aboutPct = Math.round((aboutCount / totalCount) * 100);
  const teamPct = Math.round((teamCount / totalCount) * 100);
  const inqPct = Math.max(0, 100 - (heroPct + aboutPct + teamPct));

  const newInquiriesCount = inquiries.filter((i) => i.status === "New").length;

  return (
    <div className="space-y-8">
      {/* 4 STATISTICS CARDS IN ONE ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Hero Banners */}
        <div
          onClick={() => onNavigateTab("banners")}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="size-11 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-blue-600 border border-blue-200/60 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
              <ImageIcon className="size-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Hero Banners</span>
              <h3 className="text-2xl font-black text-slate-900 leading-tight mt-0.5">
                {heroSlides.length} Slides
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-400 font-medium">Homepage Slider</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-[11px] font-bold text-blue-600">
              ↑ {heroPct}%
            </span>
          </div>
        </div>

        {/* Card 2: Website Status */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group">
          <div className="flex items-center gap-3.5">
            <div className="size-11 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
              <CheckCircle2 className="size-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Website Status</span>
              <h3 className="text-2xl font-black text-slate-900 leading-tight mt-0.5 flex items-center gap-1.5">
                Active <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-400 font-medium">All systems working</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600">
              ↑ 100%
            </span>
          </div>
        </div>

        {/* Card 3: Team Members */}
        <div
          onClick={() => onNavigateTab("team")}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="size-11 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 text-purple-600 border border-purple-200/60 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-xs">
              <Users className="size-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Team Members</span>
              <h3 className="text-2xl font-black text-slate-900 leading-tight mt-0.5">
                {teamMembers.length} Members
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-400 font-medium">~2 this month</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 border border-purple-100 px-2.5 py-0.5 text-[11px] font-bold text-purple-600">
              ↑ {teamPct}%
            </span>
          </div>
        </div>

        {/* Card 4: Inquiries */}
        <div
          onClick={() => onNavigateTab("inquiries")}
          className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="size-11 rounded-2xl bg-gradient-to-br from-rose-500/10 to-amber-500/10 text-rose-500 border border-rose-200/60 flex items-center justify-center shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-xs">
              <Mail className="size-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Inquiries</span>
              <h3 className="text-2xl font-black text-slate-900 leading-tight mt-0.5">
                {inquiries.length} Messages
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-rose-500 font-extrabold flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-rose-500 animate-ping" />
              {newInquiriesCount} new unread
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-100 px-2.5 py-0.5 text-[11px] font-bold text-rose-500">
              ↑ {inqPct}%
            </span>
          </div>
        </div>
      </div>

      {/* ANALYTICS SECTION (TWO COLUMNS: LINE CHART + DONUT CHART) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: WEBSITE INQUIRIES SMOOTH LINE CHART */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                Website Inquiries
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">Last 7 days activity</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 transition cursor-pointer shadow-xs">
              <span>This Week</span>
              <ChevronDown className="size-3.5 text-slate-400" />
            </div>
          </div>

          {/* Smooth SVG Line Chart */}
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

              {/* Smooth Curved Line Path */}
              <svg className="w-full h-full overflow-visible relative z-10" viewBox="0 0 500 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Filled Gradient Area */}
                <path
                  d="M 10,140 C 60,130 110,90 160,110 C 210,130 260,70 310,60 C 360,50 410,80 460,30 L 460,170 L 10,170 Z"
                  fill="url(#chartGradient)"
                />

                {/* Line Path */}
                <path
                  d="M 10,140 C 60,130 110,90 160,110 C 210,130 260,70 310,60 C 360,50 410,80 460,30"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Node Points on Curve */}
                <circle cx="10" cy="140" r="4.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                <circle cx="85" cy="120" r="4.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                <circle cx="160" cy="110" r="4.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                <circle cx="235" cy="85" r="4.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                <circle cx="310" cy="60" r="4.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                <circle cx="385" cy="70" r="4.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                <circle cx="460" cy="30" r="5.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
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
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-6 flex flex-col justify-between">
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

                {/* Hero Banners */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="4"
                  strokeDasharray={`${heroPct}, 100`}
                />

                {/* About Us */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="4"
                  strokeDasharray={`${aboutPct}, 100`}
                  strokeDashoffset={`-${heroPct}`}
                />

                {/* Team Members */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#9333EA"
                  strokeWidth="4"
                  strokeDasharray={`${teamPct}, 100`}
                  strokeDashoffset={`-${heroPct + aboutPct}`}
                />

                {/* Inquiries */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="4"
                  strokeDasharray={`${inqPct}, 100`}
                  strokeDashoffset={`-${heroPct + aboutPct + teamPct}`}
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
                  <span className="size-2.5 rounded-full bg-[#2563EB]" />
                  <span className="font-semibold text-slate-600">Hero Banners</span>
                </div>
                <span className="font-extrabold text-slate-900">{heroPct}%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#06B6D4]" />
                  <span className="font-semibold text-slate-600">About Us</span>
                </div>
                <span className="font-extrabold text-slate-900">{aboutPct}%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#9333EA]" />
                  <span className="font-semibold text-slate-600">Team Members</span>
                </div>
                <span className="font-extrabold text-slate-900">{teamPct}%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#F97316]" />
                  <span className="font-semibold text-slate-600">Inquiries</span>
                </div>
                <span className="font-extrabold text-slate-900">{inqPct}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK RECENT INQUIRIES FEED WIDGET */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Recent Customer Inquiries</h3>
            <p className="text-xs text-slate-400 mt-0.5">Latest project inquiries received via website contact form</p>
          </div>
          <button
            onClick={() => onNavigateTab("inquiries")}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>View All Inquiries</span> →
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {inquiries.slice(0, 3).map((item) => (
            <div key={item.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                  {item.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.subject}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-slate-400 font-mono">{item.date}</span>
                <span
                  className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                    item.status === "New"
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                      : item.status === "In Progress"
                      ? "bg-amber-50 text-amber-600 border border-amber-200"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
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
