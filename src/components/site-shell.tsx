import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Send,
  Shield,
  Twitter,
  User,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../lib/auth-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.png.asset.json";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Solutions", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Blogs", to: "/blogs" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F172A] border-b border-slate-800/90 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Branding */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Jay Electronics home">
            <img
              src="/jay-logo.jpeg"
              alt="Jay Electronics Logo"
              className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg px-2.5 py-1 shadow-sm hover:opacity-95 transition"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-sm font-semibold text-slate-300 hover:text-[#DC2626] transition-colors py-1"
                activeProps={{ className: "text-[#DC2626] font-extrabold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919422407175"
              className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#DC2626] transition"
            >
              <div className="size-8 rounded-full bg-slate-800 flex items-center justify-center text-[#DC2626] border border-slate-700/60">
                <Phone className="size-4" />
              </div>
              <span>+91 94224 07175</span>
            </a>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#DC2626] hover:bg-[#b91c1c] px-4.5 py-2 text-xs font-extrabold text-white transition shadow-md shadow-rose-950/40 hover:scale-[1.02] active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="size-3.5" />
            </Link>

            {/* Search Toggle */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-slate-300 hover:text-[#DC2626] p-2 rounded-lg hover:bg-slate-800 transition"
              aria-label="Search"
            >
              <Search className="size-5" />
            </button>

            {/* Mobile Sheet Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-slate-800"
                  aria-label="Open menu"
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[85%] max-w-sm p-0 bg-[#0F172A] text-white border-slate-800 flex flex-col justify-between">
                <div>
                  <SheetHeader className="border-b border-slate-800 px-6 py-5 text-left bg-[#0B1120]">
                    <SheetTitle className="text-white text-lg font-black">
                      <img
                        src="/jay-logo.jpeg"
                        alt="Jay Electronics Logo"
                        className="h-10 w-auto object-contain bg-white rounded-lg px-2.5 py-1 shadow-sm"
                      />
                    </SheetTitle>
                    <SheetDescription className="text-slate-400 text-xs mt-1">
                      Securing Businesses. Empowering Connectivity.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
                    {navigation.map((item) => (
                      <SheetClose key={item.label} asChild>
                        <Link
                          to={item.to}
                          className="border-b border-slate-800/80 px-3 py-3.5 text-base font-semibold text-slate-200 hover:text-[#DC2626] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <SheetClose asChild>
                    <Button asChild className="w-full rounded-xl bg-[#DC2626] hover:bg-[#b91c1c] text-white font-extrabold py-3 shadow-lg shadow-rose-950/50">
                      <Link to="/contact">Contact Us Now</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Drawer */}
        {searchOpen && (
          <div className="mt-3 rounded-xl bg-slate-800 p-3 border border-slate-700 flex items-center gap-3 text-white animate-in fade-in duration-200">
            <Search className="size-4 text-[#DC2626] shrink-0" />
            <input
              type="text"
              placeholder="Search services, products, solution specs..."
              className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1 rounded bg-[#0F172A]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </header>
  );
}


export function SiteFooter() {
  return (
    <footer className="bg-[#0F172A] text-white border-t border-slate-800 relative pb-16 md:pb-0">
      {/* Top Header Row of Footer */}
      <div className="border-b border-slate-800 bg-[#0B1120]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/jay-logo.jpeg"
              alt="Jay Electronics Logo"
              className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg px-2.5 py-1 shadow-md"
            />
          </Link>

          <div className="flex items-center gap-2.5">
            {[Globe, Twitter, Facebook, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="flex size-9 items-center justify-center rounded-full bg-slate-800 hover:bg-[#DC2626] transition-all duration-300 text-slate-300 hover:text-white border border-slate-700/60 hover:scale-105"
                aria-label="Social link"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links - Symmetric 2x2 Grid on Mobile */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Row 0 (Top): Newsletter (Spans 2 cols on mobile) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 bg-[#0B1120]/80 p-4 rounded-xl border border-slate-800 md:bg-transparent md:p-0 md:border-0">
            <h3 className="text-xs font-black tracking-wider uppercase text-[#DC2626] mb-2.5">
              SUBSCRIBE TO NEWSLETTER
            </h3>
            <p className="text-xs leading-5 text-slate-300 mb-3">
              Stay updated with smart security solutions by Jay Electronics Pvt Ltd.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-lg bg-slate-800 py-2.5 pl-3.5 pr-11 text-xs text-white placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:border-[#DC2626]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 flex size-8 items-center justify-center rounded-md bg-[#DC2626] text-white hover:bg-[#b91c1c] transition shadow-sm"
              >
                <Send className="size-3.5" />
              </button>
            </form>
          </div>

          {/* Row 1, Col 1: Quick Link */}
          <div>
            <h3 className="text-xs font-black tracking-wider uppercase text-[#DC2626] mb-3">
              QUICK LINK
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/" className="hover:text-[#DC2626] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#DC2626] transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#DC2626] transition">Services</Link></li>
              <li><Link to="/blogs" className="hover:text-[#DC2626] transition">Blog</Link></li>
            </ul>
          </div>

          {/* Row 1, Col 2: Important Links */}
          <div>
            <h3 className="text-xs font-black tracking-wider uppercase text-[#DC2626] mb-3">
              IMPORTANT LINKS
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/about" className="hover:text-[#DC2626] transition">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-[#DC2626] transition">Vision &amp; Mission</Link></li>
              <li><Link to="/projects" className="hover:text-[#DC2626] transition">Attendee</Link></li>
              <li><Link to="/about" className="hover:text-[#DC2626] transition">Leadership</Link></li>
            </ul>
          </div>

          {/* Row 2, Col 1: Support */}
          <div>
            <h3 className="text-xs font-black tracking-wider uppercase text-[#DC2626] mb-3">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/contact" className="hover:text-[#DC2626] transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#DC2626] transition">Terms &amp; Condition</Link></li>
              <li><Link to="/contact" className="hover:text-[#DC2626] transition">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-[#DC2626] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Row 2, Col 2: Contact Info */}
          <div>
            <h3 className="text-xs font-black tracking-wider uppercase text-[#DC2626] mb-3">
              CONTACT INFO
            </h3>
            <address className="not-italic space-y-2 text-xs text-slate-300">
              <a href="tel:+919422407175" className="flex items-center gap-1.5 hover:text-[#DC2626] transition">
                <Phone className="size-3.5 text-[#DC2626] shrink-0" />
                <span>+91 94224 07175</span>
              </a>
              <a href="tel:02332600175" className="flex items-center gap-1.5 hover:text-[#DC2626] transition">
                <Phone className="size-3.5 text-[#DC2626] shrink-0" />
                <span>0233-2600175</span>
              </a>
              <a href="mailto:info@jayelectronics.co.in" className="flex items-center gap-1.5 hover:text-[#DC2626] transition break-all">
                <Mail className="size-3.5 text-[#DC2626] shrink-0" />
                <span>info@jayelectronics.co.in</span>
              </a>
              <a
                href="https://maps.google.com/?q=College+Corner+North+Shivajinagar+Sangli+416416"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-1.5 hover:text-[#DC2626] transition leading-4 mt-1"
              >
                <MapPin className="size-3.5 text-[#DC2626] shrink-0 mt-0.5" />
                <span>College Corner, Sangli 416416</span>
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 bg-[#0B1120] py-4 text-center text-xs text-slate-400 mb-12 md:mb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-medium">
          A 35+ Year Experienced Solution Provider | All Rights Reserved
        </div>
      </div>

      {/* Sticky Bottom Quick Action Buttons Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-2xl md:hidden border-t border-slate-800">
        <a
          href="tel:+919422407175"
          className="flex items-center justify-center gap-2 bg-[#0F172A] text-white py-3.5 text-xs font-bold border-r border-slate-800 active:bg-slate-900"
        >
          <Phone className="size-4 text-[#DC2626]" />
          <span>Call Us</span>
        </a>
        <a
          href="https://wa.me/919422407175"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white py-3.5 text-xs font-bold active:opacity-90"
        >
          <Send className="size-4 text-white" />
          <span>WhatsApp Directly</span>
        </a>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#090D16] via-[#0F172A] to-[#1E293B] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#DC2626]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${light ? "bg-rose-400/10 text-[#DC2626] border border-rose-400/20" : "bg-rose-50 text-[#DC2626] border border-rose-100"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
