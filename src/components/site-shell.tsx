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
  return (
    <header className="sticky top-0 z-50 w-full bg-[#041321] border-b border-[#082136]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Branding */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Jay Electronics home">
            <img
              src="/jay-logo.jpeg"
              alt="Jay Electronics Logo"
              className="h-9 sm:h-10 w-auto object-contain bg-white rounded-lg px-2 py-1 shadow-sm"
            />
            <div className="hidden xs:flex flex-col">
              <span className="text-base sm:text-lg font-black text-white tracking-wide leading-none">
                JAY <span className="text-[#08A9DF]">ELECTRONICS</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                PVT LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-sm font-semibold text-slate-300 hover:text-[#08A9DF] transition-colors py-1"
                activeProps={{ className: "text-[#08A9DF] font-bold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919422407175"
              className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#08A9DF] transition"
            >
              <div className="size-8 rounded-full bg-[#082136] flex items-center justify-center text-[#08A9DF]">
                <Phone className="size-4" />
              </div>
              <span>+91 94224 07175</span>
            </a>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#0A76A8] hover:bg-[#0896d7] px-4 py-2 text-xs font-bold text-white transition shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowRight className="size-3.5" />
            </Link>


            {/* Mobile Sheet Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-[#082136]"
                  aria-label="Open menu"
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[85%] max-w-sm p-0 bg-[#041321] text-white border-[#082136] flex flex-col justify-between">
                <div>
                  <SheetHeader className="border-b border-[#082136] px-6 py-5 text-left bg-[#071B2D]">
                    <SheetTitle className="text-white text-lg font-black">
                      JAY <span className="text-[#08A9DF]">ELECTRONICS</span>
                    </SheetTitle>
                    <SheetDescription className="text-slate-400 text-xs">
                      Securing Businesses. Empowering Connectivity.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
                    {navigation.map((item) => (
                      <SheetClose key={item.label} asChild>
                        <Link
                          to={item.to}
                          className="border-b border-[#082136] px-3 py-3.5 text-base font-semibold text-slate-200 hover:text-[#08A9DF]"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <SheetClose asChild>
                    <Button asChild className="w-full rounded-lg bg-[#0A76A8] hover:bg-[#0896d7] text-white font-bold py-3">
                      <Link to="/contact">Contact Us Now</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}


export function SiteFooter() {
  return (
    <footer className="bg-[#041321] text-white border-t border-[#082136] relative pb-16 md:pb-0">
      {/* Top Header Row of Footer */}
      <div className="border-b border-[#082136] bg-[#071B2D]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/jay-logo.jpeg"
              alt="Jay Electronics Logo"
              className="h-9 sm:h-10 w-auto object-contain bg-white rounded-lg px-2.5 py-1 shadow-md"
            />
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-black text-white tracking-wide leading-none">
                JAY <span className="text-[#08A9DF]">ELECTRONICS</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                PRIVATE LIMITED
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2.5">
            {[Globe, Twitter, Facebook, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="flex size-9 items-center justify-center rounded-full bg-[#082136] hover:bg-[#0A76A8] transition-colors text-slate-300 hover:text-white border border-slate-700/60"
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
          <div className="col-span-2 md:col-span-1 lg:col-span-1 bg-[#071B2D]/60 p-4 rounded-xl border border-slate-800 md:bg-transparent md:p-0 md:border-0">
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#08A9DF] mb-2.5">
              SUBSCRIBE TO NEWSLETTER
            </h3>
            <p className="text-xs leading-5 text-slate-300 mb-3">
              Stay updated with smart security solutions by Jay Electronics Pvt Ltd.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-lg bg-[#082136] py-2.5 pl-3.5 pr-11 text-xs text-white placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:border-[#08A9DF]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 flex size-8 items-center justify-center rounded-md bg-[#0A76A8] text-white hover:bg-[#0896d7] transition shadow-sm"
              >
                <Send className="size-3.5" />
              </button>
            </form>
          </div>

          {/* Row 1, Col 1: Quick Link */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#08A9DF] mb-3">
              QUICK LINK
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/" className="hover:text-[#08A9DF] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#08A9DF] transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#08A9DF] transition">Services</Link></li>
              <li><Link to="/blogs" className="hover:text-[#08A9DF] transition">Blog</Link></li>
            </ul>
          </div>

          {/* Row 1, Col 2: Important Links */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#08A9DF] mb-3">
              IMPORTANT LINKS
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/about" className="hover:text-[#08A9DF] transition">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-[#08A9DF] transition">Vision &amp; Mission</Link></li>
              <li><Link to="/projects" className="hover:text-[#08A9DF] transition">Attendee</Link></li>
              <li><Link to="/about" className="hover:text-[#08A9DF] transition">Leadership</Link></li>
            </ul>
          </div>

          {/* Row 2, Col 1: Support */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#08A9DF] mb-3">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/contact" className="hover:text-[#08A9DF] transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#08A9DF] transition">Terms &amp; Condition</Link></li>
              <li><Link to="/contact" className="hover:text-[#08A9DF] transition">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-[#08A9DF] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Row 2, Col 2: Contact Info */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#08A9DF] mb-3">
              CONTACT INFO
            </h3>
            <address className="not-italic space-y-2 text-xs text-slate-300">
              <a href="tel:+919422407175" className="flex items-center gap-1.5 hover:text-[#08A9DF] transition">
                <Phone className="size-3.5 text-[#08A9DF] shrink-0" />
                <span>+91 94224 07175</span>
              </a>
              <a href="tel:02332600175" className="flex items-center gap-1.5 hover:text-[#08A9DF] transition">
                <Phone className="size-3.5 text-[#08A9DF] shrink-0" />
                <span>0233-2600175</span>
              </a>
              <a href="mailto:info@jayelectronics.co.in" className="flex items-center gap-1.5 hover:text-[#08A9DF] transition break-all">
                <Mail className="size-3.5 text-[#08A9DF] shrink-0" />
                <span>info@jayelectronics.co.in</span>
              </a>
              <a
                href="https://maps.google.com/?q=College+Corner+North+Shivajinagar+Sangli+416416"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-1.5 hover:text-[#08A9DF] transition leading-4 mt-1"
              >
                <MapPin className="size-3.5 text-[#08A9DF] shrink-0 mt-0.5" />
                <span>College Corner, Sangli 416416</span>
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#082136] bg-[#041321] py-4 text-center text-xs text-slate-400 mb-12 md:mb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          A 35+ Year Experienced Solution Provider | All Rights Reserved
        </div>
      </div>

      {/* Sticky Bottom Quick Action Buttons Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-2xl md:hidden border-t border-slate-800">
        <a
          href="tel:+919422407175"
          className="flex items-center justify-center gap-2 bg-[#041321] text-white py-3.5 text-xs font-bold border-r border-[#082136] active:bg-[#071B2D]"
        >
          <Phone className="size-4 text-[#08A9DF]" />
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#060e22] via-[#0b1938] to-[#08224c] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
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
      <p className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${light ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20" : "bg-sky-50 text-sky-600 border border-sky-100"}`}>
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
