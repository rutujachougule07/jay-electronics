import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site-shell";
import { capabilities, industries, partners } from "@/lib/site-data";
import eventImage from "@/assets/about-image-1.jpg.asset.json";
import cctvImage from "@/assets/gallery-2.jpg.asset.json";
import aboutImage from "@/assets/about-image-3.jpg.asset.json";
import teamImage from "@/assets/about-image-2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Jay Electronics | Security & Telecom Solutions" },
    { name: "description", content: "Jay Electronics delivers CCTV, networking, EPABX, audio visual and telecom infrastructure solutions from Sangli since 1989." },
    { property: "og:title", content: "Jay Electronics | Security & Telecom Solutions" },
    { property: "og:description", content: "Integrated security, communication and infrastructure engineering since 1989." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: HomePage,
});

const slides = [
  { image: eventImage.url, alt: "Jay Electronics engineering professional at work", eyebrow: "Engineering since 1989", title: "Technology infrastructure, delivered with accountability.", description: "One experienced partner for surveillance, communications, networking and integrated infrastructure." },
  { image: cctvImage.url, alt: "Digital security and surveillance technology", eyebrow: "Integrated security", title: "Clear oversight. Connected systems. Confident operations.", description: "Purpose-built CCTV, fire security, access and network solutions for demanding environments." },
];

function HomePage() {
  return <><HeroSlider /><Stats /><About /><Services /><Brands /><Industries /><Team /></>;
}

function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500); return () => window.clearInterval(timer); }, []);
  const slide = slides[active] ?? slides[0];
  if (!slide) return null;
  return <section className="relative min-h-[610px] overflow-hidden bg-brand-navy sm:min-h-[680px]">
    {slides.map((item, index) => <img key={item.image} src={item.image} alt={item.alt} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${active === index ? "opacity-100" : "opacity-0"}`} />)}
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative mx-auto flex min-h-[610px] max-w-7xl items-end px-4 pb-20 pt-20 sm:min-h-[680px] sm:px-6 sm:pb-24 lg:px-8">
      <div className="max-w-3xl text-primary-foreground">
        <p className="eyebrow text-brand-cyan">{slide.eyebrow}</p>
        <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">{slide.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg">{slide.description}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/services">Explore Capabilities <ArrowRight /></Link></Button><Button asChild size="lg" variant="light"><Link to="/about">Company Profile</Link></Button></div>
      </div>
    </div>
    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => setActive((active - 1 + slides.length) % slides.length)} aria-label="Previous slide"><ChevronLeft /></Button>
      {slides.map((item, index) => <button key={item.title} aria-label={`Show slide ${index + 1}`} onClick={() => setActive(index)} className={`h-1.5 transition-all ${active === index ? "w-8 bg-primary" : "w-3 bg-primary-foreground/50"}`} />)}
      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => setActive((active + 1) % slides.length)} aria-label="Next slide"><ChevronRight /></Button>
    </div>
  </section>;
}

function Stats() { return <section className="border-b border-border bg-secondary"><div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">{[
  ["1989", "Established"], ["35+", "Years of experience"], ["Thousands", "Successful installations"], ["12", "Solution categories"],
].map(([value,label]) => <div key={label} className="border-border px-3 py-8 text-center odd:border-r lg:border-r lg:last:border-r-0"><strong className="block text-3xl font-extrabold text-brand-navy sm:text-4xl">{value}</strong><span className="mt-2 block text-xs font-bold uppercase text-muted-foreground">{label}</span></div>)}</div></section>; }

function About() { return <section className="section"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div className="relative"><img src={aboutImage.url} alt="Technology professional working with security systems" className="aspect-[4/3] w-full object-cover" /><div className="absolute -bottom-5 right-5 bg-primary px-5 py-4 text-primary-foreground shadow-lg"><strong className="text-2xl">35+</strong><span className="ml-2 text-xs font-bold uppercase">years</span></div></div><div><SectionHeading eyebrow="About us" title="An engineering foundation built over three decades." /><p className="mt-6 leading-7 text-muted-foreground">Founded in 1989 by an Electronics & Telecom engineering undergraduate, Jay Electronics has grown through practical experience, technical discipline and thousands of successful installations.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Telecommunications", "Electronic security", "CCTV & networking", "EPABX / IP-PBX", "Audio / video", "Infrastructure projects"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="size-4 text-primary" />{item}</div>)}</div><Button asChild variant="navy" className="mt-8"><Link to="/about">Discover our story <ArrowRight /></Link></Button></div></div></section>; }

function Services() { return <section className="section bg-secondary"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="What we deliver" title="Integrated technology capabilities" description="Consultation, design, installation and support—coordinated through one accountable team." /><Button asChild variant="outline"><Link to="/services">View all services <ArrowRight /></Link></Button></div><div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(({title,description,icon:Icon}, index) => <article key={title} className="group bg-card p-6 transition-colors hover:bg-background"><div className="flex items-start justify-between"><Icon className="size-7 text-brand-blue" /><span className="text-xs font-bold text-muted-foreground">{String(index+1).padStart(2,"0")}</span></div><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p></article>)}</div></div></section>; }

function Brands() { return <section className="section-sm border-y border-border"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Technology brands" title="Proven systems from established manufacturers" /><div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">{partners.map((brand) => <div key={brand} className="grid min-h-24 place-items-center bg-background px-4 text-center text-sm font-extrabold text-brand-navy grayscale transition hover:text-primary hover:grayscale-0">{brand}</div>)}</div></div></section>; }

function Industries() { return <section className="section bg-brand-navy"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Industries" title="Built for environments where reliability matters" description="Experience across public service, care, education, industry and enterprise." light /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map(({title,description,icon:Icon}) => <article key={title} className="border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6 text-primary-foreground"><Icon className="size-7 text-brand-cyan"/><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/65">{description}</p></article>)}</div></div></section>; }

function Team() { return <section className="section"><div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><SectionHeading eyebrow="Our team" title="Technical people who stay accountable from design to handover." /><p className="mt-5 leading-7 text-muted-foreground">Our multidisciplinary team brings electronics, telecom, security and field implementation experience together—supporting each engagement through planning, commissioning and ongoing service.</p><div className="mt-7 flex items-center gap-4 border-l-2 border-primary pl-5"><Users className="size-8 text-brand-blue"/><p className="text-sm font-semibold">Engineering, installation and support working as one delivery team.</p></div></div><img src={teamImage.url} alt="Technology specialist working at a computer" className="aspect-[4/3] w-full object-cover" /></div></section>; }
