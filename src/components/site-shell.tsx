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
    <header className="sticky top-0 z-50 w-full bg-[#F0F4F8] border-b border-slate-300/80 shadow-xs shadow-slate-900/5 transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Branding */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Jay Electronics home">
            <img
              src="/jay-logo.jpeg"
              alt="Jay Electronics Logo"
              className="h-10 sm:h-12 w-auto object-contain rounded-lg px-1 py-0.5 hover:opacity-95 transition"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-sm font-semibold text-slate-800 hover:text-[#DC2626] transition-colors py-1"
                activeProps={{ className: "text-[#DC2626] font-extrabold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Phone Call Info */}
            <a
              href="tel:+919422407175"
              className="hidden md:flex items-center gap-2.5 text-xs font-bold text-slate-800 hover:text-[#DC2626] transition bg-[#FEE2E2]/70 border border-rose-200/80 px-3 py-1.5 rounded-full"
            >
              <div className="size-6 rounded-full bg-[#DC2626] flex items-center justify-center text-white shadow-xs">
                <Phone className="size-3" />
              </div>
              <span className="tracking-tight">+91 94224 07175</span>
            </a>

            {/* Red Accent Pill Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#DC2626] hover:bg-[#b91c1c] px-5 py-2 text-xs font-extrabold text-white transition shadow-md shadow-rose-500/20 hover:scale-[1.02] active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowRight className="size-3.5" />
            </Link>

            {/* Search Toggle Icon */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="size-9 rounded-full border border-slate-300/80 bg-slate-200/60 text-slate-700 hover:text-[#DC2626] hover:bg-slate-200 flex items-center justify-center transition cursor-pointer"
              aria-label="Search"
            >
              <Search className="size-4" />
            </button>

            {/* Mobile Sheet Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-slate-800 hover:bg-slate-200 rounded-full"
                  aria-label="Open menu"
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[85%] max-w-sm p-0 bg-[#F0F4F8] text-slate-900 border-slate-300 flex flex-col justify-between">
                <div>
                  <SheetHeader className="border-b border-slate-300/80 px-6 py-5 text-left bg-[#E4E9F0]">
                    <SheetTitle className="text-slate-900 text-lg font-black">
                      <img
                        src="/jay-logo.jpeg"
                        alt="Jay Electronics Logo"
                        className="h-10 w-auto object-contain rounded-lg"
                      />
                    </SheetTitle>
                    <SheetDescription className="text-slate-600 text-xs mt-1">
                      Securing Businesses. Empowering Connectivity.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
                    {navigation.map((item) => (
                      <SheetClose key={item.label} asChild>
                        <Link
                          to={item.to}
                          className="border-b border-slate-200/80 px-3 py-3.5 text-base font-semibold text-slate-800 hover:text-[#DC2626] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <a
                    href="tel:+919422407175"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-200/80 border border-slate-300/80 py-3 text-xs font-bold text-slate-800 hover:bg-slate-300/80 transition"
                  >
                    <Phone className="size-4 text-[#DC2626]" />
                    <span>Call +91 94224 07175</span>
                  </a>
                  <SheetClose asChild>
                    <Button asChild className="w-full rounded-full bg-[#DC2626] hover:bg-[#b91c1c] text-white font-extrabold py-3 shadow-lg shadow-rose-500/20">
                      <Link to="/contact">Get In Touch</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Drawer */}
        {searchOpen && (
          <div className="mt-3 rounded-2xl bg-[#E4E9F0] p-3 border border-slate-300 shadow-xl flex items-center gap-3 text-slate-800 animate-in fade-in duration-200">
            <Search className="size-4 text-[#DC2626] shrink-0 ml-1" />
            <input
              type="text"
              placeholder="Search services, products, solution specs..."
              className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-full bg-slate-200 border border-slate-300 cursor-pointer"
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
    <footer className="bg-[#EEF2F6] text-slate-800 border-t border-slate-300/80 relative pb-16 md:pb-0">
      {/* Main Footer Links Grid - Grey Elegant Theme */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Column 1: SUBSCRIBE TO NEWSLETTER */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-[#DC2626] mb-3">
              SUBSCRIBE TO NEWSLETTER
            </h3>
            <p className="text-xs leading-relaxed text-slate-600 mb-4">
              Stay updated with smart security solutions by Jay Electronics Pvt Ltd.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-lg bg-white py-2.5 pl-3.5 pr-11 text-xs text-slate-800 placeholder:text-slate-400 border border-slate-300 shadow-xs focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 flex size-8 items-center justify-center rounded-md bg-[#DC2626] text-white hover:bg-[#b91c1c] transition shadow-xs cursor-pointer"
              >
                <Send className="size-3.5" />
              </button>
            </form>
          </div>

          {/* Column 2: QUICK LINK */}
          <div>
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-[#DC2626] mb-3.5">
              QUICK LINK
            </h3>
            <ul className="space-y-2.5 text-xs font-medium text-slate-700">
              <li><Link to="/" className="hover:text-[#DC2626] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#DC2626] transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#DC2626] transition">Services</Link></li>
              <li><Link to="/blogs" className="hover:text-[#DC2626] transition">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: IMPORTANT LINKS */}
          <div>
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-[#DC2626] mb-3.5">
              IMPORTANT LINKS
            </h3>
            <ul className="space-y-2.5 text-xs font-medium text-slate-700">
              <li><Link to="/about" className="hover:text-[#DC2626] transition">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-[#DC2626] transition">Vision &amp; Mission</Link></li>
              <li><Link to="/projects" className="hover:text-[#DC2626] transition">Attendee</Link></li>
              <li><Link to="/about" className="hover:text-[#DC2626] transition">Leadership</Link></li>
            </ul>
          </div>

          {/* Column 4: SUPPORT */}
          <div>
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-[#DC2626] mb-3.5">
              SUPPORT
            </h3>
            <ul className="space-y-2.5 text-xs font-medium text-slate-700">
              <li><Link to="/contact" className="hover:text-[#DC2626] transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#DC2626] transition">Terms &amp; Condition</Link></li>
              <li><Link to="/contact" className="hover:text-[#DC2626] transition">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-[#DC2626] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 5: CONTACT INFO */}
          <div>
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-[#DC2626] mb-3.5">
              CONTACT INFO
            </h3>
            <address className="not-italic space-y-2.5 text-xs font-medium text-slate-700">
              <a href="tel:+919422407175" className="flex items-center gap-2 hover:text-[#DC2626] transition">
                <Phone className="size-3.5 text-[#DC2626] shrink-0" />
                <span>+91 94224 07175</span>
              </a>
              <a href="tel:02332600175" className="flex items-center gap-2 hover:text-[#DC2626] transition">
                <Phone className="size-3.5 text-[#DC2626] shrink-0" />
                <span>0233-2600175</span>
              </a>
              <a href="mailto:info@jayelectronics.co.in" className="flex items-center gap-2 hover:text-[#DC2626] transition break-all">
                <Mail className="size-3.5 text-[#DC2626] shrink-0" />
                <span>info@jayelectronics.co.in</span>
              </a>
              <a
                href="https://maps.google.com/?q=College+Corner+North+Shivajinagar+Sangli+416416"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-[#DC2626] transition leading-relaxed"
              >
                <MapPin className="size-3.5 text-[#DC2626] shrink-0 mt-0.5" />
                <span>College Corner, Sangli 416416</span>
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Bar - Deeper Soft Grey */}
      <div className="border-t border-slate-300/90 bg-[#DCE2E9] py-3.5 text-center text-xs text-slate-700 font-semibold mb-12 md:mb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          A 35+ Year Experienced Solution Provider | All Rights Reserved
        </div>
      </div>

      {/* Sticky Bottom Quick Action Buttons Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-2xl md:hidden border-t border-slate-300">
        <a
          href="tel:+919422407175"
          className="flex items-center justify-center gap-2 bg-[#F0F4F8] text-slate-800 py-3.5 text-xs font-bold border-r border-slate-300 active:bg-slate-200"
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
