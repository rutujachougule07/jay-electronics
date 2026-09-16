import { Link } from "@tanstack/react-router";
<<<<<<< HEAD
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
} from "lucide-react";
import { useState } from "react";
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
=======
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
>>>>>>> 60b13bed1fe2f90978c40af09d9a96d43e85bf50
import logo from "@/assets/logo.png.asset.json";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
<<<<<<< HEAD
  { label: "Solutions", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Blogs", to: "/projects" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md py-2.5 px-2 sm:px-4 lg:px-6">
      <div className="mx-auto w-full max-w-[98%] xl:max-w-[1550px]">
        {/* Floating Dark Navy Gradient Navbar Container */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#051630] via-[#072448] to-[#0a386b] px-6 py-3.5 shadow-xl shadow-slate-950/20 border border-slate-800/60">
          
          {/* Subtle Abstract Wave / Technology Pattern Overlay on Right */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-25 overflow-hidden">
            <svg
              viewBox="0 0 400 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full object-cover"
            >
              <path
                d="M0 60C100 20 200 100 300 40C350 10 380 30 400 50V120H0V60Z"
                fill="url(#wave-gradient)"
              />
              <path
                d="M50 80C150 40 250 110 350 60C380 45 390 55 400 70V120H50V80Z"
                stroke="url(#stroke-gradient)"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  id="wave-gradient"
                  x1="0"
                  y1="0"
                  x2="400"
                  y2="120"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#38bdf8" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#0284c7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="stroke-gradient"
                  x1="0"
                  y1="0"
                  x2="400"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#38bdf8" />
                  <stop offset="1" stopColor="#0369a1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-4">
            {/* Logo / Branding (LEFT) */}
            <Link to="/" className="flex items-center shrink-0" aria-label="Jay Electronics home">
              <img
                src="/jay-logo.jpeg"
                alt="Jay Electronics Logo"
                className="h-9 sm:h-10 w-auto object-contain bg-white rounded-xl px-2.5 py-1 shadow-md border border-slate-200/40 hover:opacity-95 transition"
              />
            </Link>

            {/* Desktop Navigation Links (CENTER) */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="relative text-sm font-medium text-slate-300 hover:text-white transition-all py-1"
                  activeProps={{ className: "text-white font-bold" }}
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full shadow-xs shadow-cyan-400/50" />
                      )}
                    </>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-slate-300 hover:text-cyan-400 transition p-1.5 rounded-full hover:bg-white/5"
                aria-label="Search"
              >
                <Search className="size-4.5" />
              </button>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-sky-600/90 to-cyan-500/90 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:from-sky-500 hover:to-cyan-400 hover:border-cyan-300 transition-all transform hover:scale-[1.02]"
              >
                <span>Contact</span>
                <ArrowRight className="size-3.5 text-white" />
              </Link>

              {/* Mobile Navigation Trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-slate-300 hover:text-white hover:bg-white/10"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[88%] max-w-sm p-0 bg-slate-950 text-white border-slate-800">
                  <SheetHeader className="border-b border-slate-800 px-6 py-5 text-left bg-slate-900">
                    <SheetTitle className="text-white flex items-center gap-2">
                      <span className="text-red-500 font-bold">JAY</span> ELECTRONICS
                    </SheetTitle>
                    <SheetDescription className="text-slate-400 text-xs">
                      Securing Businesses. Empowering Connectivity.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col px-4 py-5" aria-label="Mobile navigation">
                    {navigation.map((item) => (
                      <SheetClose key={item.label} asChild>
                        <Link
                          to={item.to}
                          className="border-b border-slate-800/60 px-2 py-3.5 text-base font-medium text-slate-200 hover:text-cyan-400"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="px-6 pb-6">
                    <Button asChild className="w-full rounded-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Search Input Bar (Toggled by Search icon) */}
        {searchOpen && (
          <div className="mt-2.5 rounded-xl bg-slate-900 p-3 shadow-lg border border-slate-800 flex items-center gap-3 text-white animate-in fade-in slide-in-from-top-2 duration-200">
            <Search className="size-4 text-cyan-400 shrink-0" />
            <input
              type="text"
              placeholder="Search services, products, capabilities..."
              className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
            >
              Close
            </button>
          </div>
        )}
=======
  { label: "Services", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="bg-brand-navy text-primary-foreground">
        <div className="mx-auto flex min-h-8 max-w-7xl items-center justify-between gap-4 px-4 text-[11px] sm:px-6 lg:px-8">
          <span className="truncate">Electronics & Telecommunications Engineering since 1989</span>
          <a href="tel:+919422407175" className="shrink-0 font-semibold hover:text-brand-cyan">+91 94224 07175</a>
        </div>
      </div>
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Jay Electronics home">
          <img src={logo.url} alt="Jay Electronics Private Limited" className="h-11 w-auto max-w-[180px] object-contain" />
        </Link>
        <div className="flex shrink-0 items-center gap-2 lg:gap-6">
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link-active" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Get a Quote</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation menu"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="w-[88%] max-w-sm p-0">
              <SheetHeader className="border-b border-border px-6 py-5 text-left">
                <SheetTitle>Jay Electronics</SheetTitle>
                <SheetDescription>Security, connectivity and infrastructure.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col px-4 py-5" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <SheetClose key={item.to} asChild>
                    <Link to={item.to} className="border-b border-border px-2 py-4 text-base font-semibold text-foreground">{item.label}</Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="px-6 pb-6"><Button asChild className="w-full"><Link to="/contact">Get a Quote</Link></Button></div>
            </SheetContent>
          </Sheet>
        </div>
>>>>>>> 60b13bed1fe2f90978c40af09d9a96d43e85bf50
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
<<<<<<< HEAD
    <footer className="bg-gradient-to-r from-[#0b2756] via-[#0e3b7e] to-[#08224c] text-white">
      {/* Top Header Row of Footer */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/jay-logo.jpeg"
              alt="Jay Electronics Logo"
              className="h-10 w-auto object-contain bg-white rounded-xl px-2.5 py-1 shadow-md"
            />
          </Link>

          <div className="flex items-center gap-3">
            {[Globe, Twitter, Facebook, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 transition-colors text-white"
                aria-label="Social link"
              >
                <Icon className="size-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Column 1: Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Subscribe To Our Newsletter:
            </h3>
            <p className="text-xs leading-5 text-slate-300 mb-4">
              Protecting products by Jay Electronics Pvt. Ltd.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-full bg-white py-2.5 pl-4 pr-12 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 flex size-8 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-600 hover:to-cyan-600 transition"
              >
                <Send className="size-3.5" />
              </button>
            </form>
          </div>

          {/* Column 2: Quick Link */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Quick Link
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition">Services</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Important Links
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/about" className="hover:text-cyan-400 transition">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition">Vision &amp; Mission</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition">Attendee</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition">Leadership</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Terms &amp; Condition</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Contact Info
            </h3>
            <address className="not-italic space-y-3 text-xs text-slate-300">
              <a href="tel:+919422407175" className="flex items-center gap-2 hover:text-cyan-400 transition">
                <Phone className="size-3.5 text-cyan-400 shrink-0" />
                <span>+919422407175</span>
              </a>
              <a href="tel:02332600175" className="flex items-center gap-2 hover:text-cyan-400 transition">
                <Phone className="size-3.5 text-cyan-400 shrink-0" />
                <span>0233-2600175</span>
              </a>
              <a href="mailto:info@jayelectronics.co.in" className="flex items-center gap-2 hover:text-cyan-400 transition">
                <Mail className="size-3.5 text-cyan-400 shrink-0" />
                <span>info@jayelectronics.co.in</span>
              </a>
              <a
                href="https://maps.google.com/?q=College+Corner+North+Shivajinagar+Sangli+416416"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-cyan-400 transition leading-5"
              >
                <MapPin className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>College Corner North Shivajinagar, Sangli 416416</span>
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-[#051838] py-4 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          © 2026 jayelectronics.co.in All Rights Reserved.
        </div>
      </div>
=======
    <footer className="bg-brand-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1.1fr] lg:px-8">
        <div>
          <img src={logo.url} alt="Jay Electronics Private Limited" className="h-12 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/70">Integrated security, communications, networking and infrastructure solutions from Sangli, Maharashtra.</p>
        </div>
        <div>
          <h2 className="footer-title">Company</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70">
            <Link to="/about">About Us</Link><Link to="/projects">Projects</Link><Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-title">Capabilities</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70">
            <Link to="/services">Surveillance</Link><Link to="/services">Networking</Link><Link to="/services">Telecommunications</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-title">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-6 text-primary-foreground/70">
            <a className="flex gap-3" href="https://maps.google.com/?q=College+Corner+North+Shivajinagar+Sangli+416416" target="_blank" rel="noreferrer"><MapPin className="mt-1 size-4 shrink-0 text-brand-cyan" />College Corner, North Shivajinagar, Sangli 416416, Maharashtra</a>
            <a className="flex items-center gap-3" href="tel:+919422407175"><Phone className="size-4 text-brand-cyan" />+91 94224 07175</a>
            <a className="flex items-center gap-3" href="mailto:info@jayelectronics.co.in"><Mail className="size-4 text-brand-cyan" />info@jayelectronics.co.in</a>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between sm:px-6 lg:px-8"><span>© 2026 Jay Electronics Private Limited.</span><span>Engineering connected, secure environments since 1989.</span></div></div>
>>>>>>> 60b13bed1fe2f90978c40af09d9a96d43e85bf50
    </footer>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
<<<<<<< HEAD
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
=======
    <section className="page-hero">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="eyebrow text-brand-cyan">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/70 sm:text-lg">{description}</p>
>>>>>>> 60b13bed1fe2f90978c40af09d9a96d43e85bf50
      </div>
    </section>
  );
}

<<<<<<< HEAD
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

=======
export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>{description ? <p className={`mt-4 leading-7 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{description}</p> : null}</div>;
}
>>>>>>> 60b13bed1fe2f90978c40af09d9a96d43e85bf50
