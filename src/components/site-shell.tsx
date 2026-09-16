import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png.asset.json";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
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
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
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
    </footer>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-hero">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="eyebrow text-brand-cyan">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/70 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>{description ? <p className={`mt-4 leading-7 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{description}</p> : null}</div>;
}
