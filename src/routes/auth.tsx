import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "../lib/auth-context";
import {
  Shield,
  Lock,
  Mail,
  User as UserIcon,
  LogOut,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Sparkles,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

function AuthPage() {
  const {
    currentUser,
    userProfile,
    loginWithEmail,
    registerWithEmail,
    loginWithGoogle,
    logout,
    resetPassword,
    isAdmin,
  } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      setSuccess("Successfully logged in!");
      setTimeout(() => {
        if (isAdmin || email.toLowerCase() === "admin123@gmail.com") {
          navigate({ to: "/admin" });
        } else {
          navigate({ to: "/" });
        }
      }, 800);
    } catch (err: any) {
      setError(err.message || "Failed to log in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!email || !password || !name) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setLoading(true);
    try {
      await registerWithEmail(email, password, name);
      setSuccess("Account created successfully!");
      setTimeout(() => {
        navigate({ to: "/" });
      }, 1000);
    } catch (err: any) {
      setError(err.message || "Failed to register account.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      await loginWithGoogle();
      setSuccess("Signed in with Google!");
      setTimeout(() => {
        navigate({ to: "/" });
      }, 800);
    } catch (err: any) {
      setError(err.message || "Google Sign-In failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setLoading(true);
    try {
      await resetPassword(email);
      setSuccess("Password reset link sent to your email!");
    } catch (err: any) {
      setError(err.message || "Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center">
          <Link to="/" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-md shadow-xl hover:bg-white/10 transition">
            <img src="/jay-logo.jpeg" alt="Jay Electronics Logo" className="h-10 w-auto bg-white rounded-xl px-2 py-1" />
          </Link>
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-white">
          {currentUser
            ? `Welcome, ${userProfile?.displayName || currentUser.email}`
            : mode === "login"
            ? "Sign in to your Account"
            : mode === "signup"
            ? "Create a New Account"
            : "Reset Your Password"}
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          {currentUser
            ? "Firebase Authentication & Firestore Sync Active"
            : "Access Jay Electronics Enterprise Portal & Services"}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl py-8 px-6 shadow-2xl rounded-3xl border border-slate-800/80 sm:px-10">
          {/* LOGGED IN USER CARD */}
          {currentUser ? (
            <div className="space-y-6">
              <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/50 flex items-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-400 flex items-center justify-center font-bold text-lg text-slate-950 shadow-md">
                  {currentUser.email?.charAt(0).toUpperCase() || "U"}
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-semibold text-white truncate">
                    {userProfile?.displayName || currentUser.displayName || "User"}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">{currentUser.email}</p>
                  <span
                    className={`inline-block mt-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md ${
                      isAdmin
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    }`}
                  >
                    Role: {userProfile?.role || (isAdmin ? "Admin" : "User")}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg hover:from-amber-400 hover:to-amber-500 transition"
                  >
                    <ShieldCheck className="size-4" />
                    Go to Admin Dashboard
                  </Link>
                )}

                <Link
                  to="/"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-3 text-sm font-semibold text-slate-200 transition border border-slate-700"
                >
                  Return to Home
                  <ArrowRight className="size-4" />
                </Link>

                <button
                  type="button"
                  onClick={async () => {
                    await logout();
                    setSuccess("Logged out successfully.");
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 px-4 py-3 text-sm font-semibold text-red-400 transition"
                >
                  <LogOut className="size-4" />
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            /* AUTH FORM */
            <div className="space-y-6">
              {/* Mode Switcher Tabs */}
              <div className="grid grid-cols-2 gap-1 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setError(null);
                    setSuccess(null);
                  }}
                  className={`py-2 text-xs font-bold rounded-xl transition ${
                    mode === "login"
                      ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode("signup");
                    setError(null);
                    setSuccess(null);
                  }}
                  className={`py-2 text-xs font-bold rounded-xl transition ${
                    mode === "signup"
                      ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Status Notifications */}
              {error && (
                <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-xs">
                  <AlertCircle className="size-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-400 text-xs">
                  <CheckCircle className="size-4 shrink-0 mt-0.5" />
                  <span>{success}</span>
                </div>
              )}

              {/* LOGIN FORM */}
              {mode === "login" && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin123@gmail.com or user@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-semibold text-slate-300">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setMode("forgot")}
                        className="text-xs text-cyan-400 hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition"
                  >
                    {loading ? "Authenticating..." : "Sign In"}
                  </Button>
                </form>
              )}

              {/* SIGNUP FORM */}
              {mode === "signup" && (
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="user@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Password (min 6 chars)
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition"
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              )}

              {/* FORGOT PASSWORD FORM */}
              {mode === "forgot" && (
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Enter your account email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your-email@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold py-3 rounded-xl shadow-lg transition"
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </Button>

                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="w-full text-xs text-slate-400 hover:text-white transition text-center block pt-2"
                  >
                    ← Back to Sign In
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
