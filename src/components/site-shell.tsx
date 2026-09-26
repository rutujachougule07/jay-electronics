import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  FileText,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Shield,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../lib/auth-context";
import { useAdminStore } from "@/lib/admin-store";
import { QueryModal } from "./QueryModal";
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
  const [queryOpen, setQueryOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#F0F4F8]/95 backdrop-blur-md border-b border-slate-300/80 shadow-md transition-all">
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

              {/* Log Your Query Pill Button */}
              <button
                type="button"
                onClick={() => setQueryOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#DC2626] hover:bg-[#b91c1c] px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-black text-white transition shadow-md shadow-rose-500/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <FileText className="size-3.5 text-white" />
                <span className="hidden xs:inline">Log Your Query</span>
                <span className="xs:hidden">Query</span>
                <ArrowRight className="size-3.5" />
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
                      <Button
                        type="button"
                        onClick={() => setQueryOpen(true)}
                        className="w-full rounded-full bg-[#DC2626] hover:bg-[#b91c1c] text-white font-extrabold py-3 shadow-lg shadow-rose-500/20 cursor-pointer flex items-center justify-center gap-2"
                      >
                        <FileText className="size-4 text-white" />
                        <span>Log Your Query</span>
                        <ArrowRight className="size-4 text-white" />
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Query Modal Popup */}
      <QueryModal open={queryOpen} onOpenChange={setQueryOpen} />
    </>
  );
}

export function SiteFooter() {
  const store = useAdminStore();
  const footer = store.getFooterSettings();

  return (
    <footer className="bg-gradient-to-br from-[#F3F7FB] via-[#F8FAFC] to-[#EDF3F9] text-slate-800 border-t border-slate-200/90 relative pb-12 md:pb-0 overflow-hidden">
      {/* Decorative World Map Background Graphics - Top Right */}
      <div className="absolute top-2 right-4 lg:right-12 opacity-30 pointer-events-none z-0 hidden md:block">
        <div className="relative">
          <svg className="w-[520px] h-[240px] text-slate-300" viewBox="0 0 800 400" fill="currentColor">
            {/* World Map Dotted Pattern */}
            <circle cx="150" cy="120" r="3" /> <circle cx="170" cy="110" r="3" /> <circle cx="190" cy="130" r="3" />
            <circle cx="210" cy="100" r="3" /> <circle cx="230" cy="140" r="3" /> <circle cx="250" cy="120" r="3" />
            <circle cx="270" cy="150" r="3" /> <circle cx="290" cy="130" r="3" /> <circle cx="310" cy="160" r="3" />
            <circle cx="120" cy="140" r="2.5" /> <circle cx="140" cy="160" r="2.5" /> <circle cx="160" cy="180" r="2.5" />
            <circle cx="180" cy="220" r="2.5" /> <circle cx="200" cy="250" r="2.5" /> <circle cx="210" cy="280" r="2.5" />
            <circle cx="410" cy="100" r="3" /> <circle cx="430" cy="110" r="3" /> <circle cx="450" cy="90" r="3" />
            <circle cx="420" cy="160" r="2.5" /> <circle cx="440" cy="190" r="2.5" /> <circle cx="460" cy="220" r="2.5" />
            <circle cx="470" cy="260" r="2.5" /> <circle cx="450" cy="290" r="2.5" />
            <circle cx="530" cy="120" r="3" /> <circle cx="550" cy="110" r="3" /> <circle cx="570" cy="130" r="3" />
            <circle cx="590" cy="100" r="3" /> <circle cx="610" cy="140" r="3" /> <circle cx="630" cy="120" r="3" />
            <circle cx="650" cy="150" r="3" /> <circle cx="670" cy="130" r="3" /> <circle cx="690" cy="160" r="3" />
            <circle cx="580" cy="180" r="3.5" /> <circle cx="600" cy="195" r="3.5" /> <circle cx="615" cy="210" r="3.5" />
            <circle cx="700" cy="270" r="3" /> <circle cx="720" cy="280" r="3" /> <circle cx="740" cy="260" r="3" />
            <circle cx="730" cy="300" r="3" />
          </svg>
        </div>
      </div>

      {/* Location Badge on World Map */}
      <div className="absolute top-3 right-4 lg:top-4 lg:right-8 z-10 hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/90 shadow-xs">
        <MapPin className="size-4 text-[#E52328] fill-[#E52328]/20 shrink-0" />
        <div className="text-[11px] font-extrabold text-slate-800 leading-tight">
          Sangli<br />
          <span className="text-[10px] text-slate-500 font-medium">Maharashtra</span>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Column 1: Brand & SUBSCRIBE TO NEWSLETTER */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 space-y-3.5">
            {/* Brand Logo & Tagline */}
            <div className="space-y-1.5">
              <Link to="/" className="inline-flex items-center gap-2">
                <img src="/jay-logo.jpeg" alt="Jay Electronics Logo" className="h-10 sm:h-12 w-auto object-contain rounded-lg" />
              </Link>
              <p className="text-xs text-slate-600 font-bold leading-tight">
                Smart Security Solutions<br />
                <span className="font-normal text-slate-500">for a Safer Tomorrow</span>
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-1">
              <h3 className="text-xs font-black tracking-wider uppercase text-[#E52328] mb-2">
                SUBSCRIBE TO NEWSLETTER
              </h3>
              <p className="text-[11px] leading-relaxed text-slate-500 mb-2.5 max-w-sm">
                Stay updated with smart security solutions by Jay Electronics Pvt Ltd.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full max-w-sm sm:max-w-xs">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full rounded-l-lg bg-white py-2 pl-3 pr-2 text-xs text-slate-800 placeholder:text-slate-400 border border-slate-300 border-r-0 shadow-2xs focus:outline-none focus:border-[#E52328]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex size-8.5 items-center justify-center rounded-r-lg bg-[#E52328] text-white hover:bg-red-700 transition shrink-0 cursor-pointer shadow-2xs"
                >
                  <Send className="size-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="col-span-1">
            <h3 className="text-xs font-black tracking-wider uppercase text-[#E52328] mb-3">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li><Link to="/" className="hover:text-[#E52328] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#E52328] transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#E52328] transition">Services</Link></li>
              <li><Link to="/blogs" className="hover:text-[#E52328] transition">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: IMPORTANT LINKS */}
          <div className="col-span-1">
            <h3 className="text-xs font-black tracking-wider uppercase text-[#E52328] mb-3">
              IMPORTANT LINKS
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li><Link to="/about" className="hover:text-[#E52328] transition">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-[#E52328] transition">Vision &amp; Mission</Link></li>
              <li><Link to="/projects" className="hover:text-[#E52328] transition">Attendee</Link></li>
              <li><Link to="/about" className="hover:text-[#E52328] transition">Leadership</Link></li>
            </ul>
          </div>

          {/* Column 4: SUPPORT */}
          <div className="col-span-1">
            <h3 className="text-xs font-black tracking-wider uppercase text-[#E52328] mb-3">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li><Link to="/contact" className="hover:text-[#E52328] transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#E52328] transition">Terms &amp; Condition</Link></li>
              <li><Link to="/contact" className="hover:text-[#E52328] transition">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-[#E52328] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 5: CONTACT INFO & FOLLOW US */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1">
            <h3 className="text-xs font-black tracking-wider uppercase text-[#E52328] mb-3">
              CONTACT INFO
            </h3>
            <address className="not-italic space-y-2 text-xs font-medium text-slate-700">
              <a href={`tel:${footer.phone1}`} className="flex items-center gap-2 hover:text-[#E52328] transition">
                <Phone className="size-3.5 text-[#E52328] shrink-0" />
                <span>{footer.phone1}</span>
              </a>
              {footer.phone2 ? (
                <a href={`tel:${footer.phone2}`} className="flex items-center gap-2 hover:text-[#E52328] transition">
                  <Phone className="size-3.5 text-[#E52328] shrink-0" />
                  <span>{footer.phone2}</span>
                </a>
              ) : null}
              <a href={`mailto:${footer.email}`} className="flex items-center gap-2 hover:text-[#E52328] transition break-all">
                <Mail className="size-3.5 text-[#E52328] shrink-0" />
                <span>{footer.email}</span>
              </a>
              <a
                href={footer.mapUrl || "https://maps.google.com/?q=College+Corner+North+Shivajinagar+Sangli+416416"}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-[#E52328] transition leading-relaxed"
              >
                <MapPin className="size-3.5 text-[#E52328] shrink-0 mt-0.5" />
                <span>{footer.address}</span>
              </a>
            </address>

            {/* Follow Us Sub-section */}
            <div className="pt-3">
              <h3 className="text-xs font-black tracking-wider uppercase text-[#E52328] mb-2">
                FOLLOW US
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                {footer.facebook ? (
                  <a
                    href={footer.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="size-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition shadow-2xs"
                    aria-label="Facebook"
                  >
                    <Facebook className="size-3.5 fill-white" />
                  </a>
                ) : null}
                {footer.instagram ? (
                  <a
                    href={footer.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="size-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition shadow-2xs"
                    aria-label="Instagram"
                  >
                    <Instagram className="size-3.5" />
                  </a>
                ) : null}
                {footer.linkedin ? (
                  <a
                    href={footer.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="size-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition shadow-2xs"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-3.5 fill-[#0A66C2] stroke-white" />
                  </a>
                ) : null}
                {footer.youtube ? (
                  <a
                    href={footer.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="size-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition shadow-2xs"
                    aria-label="YouTube"
                  >
                    <Youtube className="size-3.5 fill-white" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-300/80 bg-[#E2E8F0]/70 py-3.5 text-xs text-slate-600 font-medium mb-0 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
          <p className="font-semibold text-slate-700">Making Spaces Safer &amp; Smarter</p>
          <p className="font-bold text-slate-800">
            {footer.copyrightText || "A 35+ Year Experienced Solution Provider | All Rights Reserved"}
          </p>
          <div className="flex items-center gap-3 text-slate-500 font-medium">
            <Link to="/contact" className="hover:text-[#E52328] transition">Privacy</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-[#E52328] transition">Sitemap</Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-[#E52328] transition">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Floating Quick Action Buttons on Right Side */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto">
        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${(footer.phone1 || "+919422407175").replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Directly"
          className="group relative size-10.5 sm:size-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Pulsing Ambient Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35 pointer-events-none" />
          
          {/* WhatsApp SVG Icon */}
          <svg className="size-5 sm:size-6 text-white fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>

          {/* Hover Tooltip Label */}
          <span className="hidden sm:block absolute right-14 bg-slate-950/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
            WhatsApp Us
          </span>
        </a>

        {/* Call Floating Button */}
        <a
          href={`tel:${footer.phone1 || "+919422407175"}`}
          aria-label="Call Us"
          className="group relative size-10.5 sm:size-13 rounded-full bg-[#E52328] hover:bg-[#b91c1c] text-white shadow-xl shadow-rose-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <Phone className="size-4.5 sm:size-5.5 text-white relative z-10" />

          {/* Hover Tooltip Label */}
          <span className="hidden sm:block absolute right-14 bg-slate-950/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
            Call Us
          </span>
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
