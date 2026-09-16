import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site-shell";
import { adminStore } from "@/lib/admin-store";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Jay Electronics | Sangli" },
      {
        name: "description",
        content:
          "Contact Jay Electronics in Sangli for CCTV, networking, telecommunications, security and infrastructure requirements.",
      },
      { property: "og:title", content: "Contact Jay Electronics" },
      {
        property: "og:description",
        content: "Discuss your technology and infrastructure requirement with our team in Sangli.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string) || "Anonymous Customer";
    const email = (formData.get("email") as string) || "Not provided";
    const phone = (formData.get("phone") as string) || "Not provided";
    const service = (formData.get("service") as string) || "General Enquiry";
    const message = (formData.get("message") as string) || "No message specified";

    adminStore.addInquiry({
      name,
      email,
      phone,
      subject: `${service} Requirement`,
      message,
    });

    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Tell us what your site needs to achieve."
        description="Share your requirement and our team will help identify the right security, communication or infrastructure approach."
      />

      <section className="section py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">Jay Electronics Private Limited</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              For enquiries, project discussions and service requirements, contact our Sangli office.
            </p>
            <div className="mt-8 space-y-3">
              {[
                {
                  icon: MapPin,
                  label: "Office",
                  value: "College Corner, North Shivajinagar, Sangli 416416, Maharashtra",
                  href: "https://maps.google.com/?q=College+Corner+North+Shivajinagar+Sangli+416416",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 94224 07175 · 0233-2326375",
                  href: "tel:+919422407175",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@jayelectronics.co.in",
                  href: "mailto:info@jayelectronics.co.in",
                },
                {
                  icon: Clock,
                  label: "Response",
                  value: "Enquiries are reviewed during business hours",
                  href: undefined,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="grid grid-cols-[40px_1fr] gap-4 border-b border-border py-4">
                  <span className="grid size-10 place-items-center bg-secondary">
                    <Icon className="size-5 text-brand-blue" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-1 block text-sm font-semibold hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-sm">
            {sent ? (
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-14 text-emerald-500" />
                <h2 className="mt-5 text-2xl font-bold text-slate-900">Thank you for your enquiry!</h2>
                <p className="mt-3 max-w-md text-sm text-slate-600 leading-relaxed">
                  Your inquiry has been received and saved into our Admin System. Our team will contact you shortly. For immediate assistance, please call +91 94224 07175.
                </p>
                <Button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold" onClick={() => setSent(false)}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h2 className="text-2xl font-bold text-slate-900">Project Enquiry</h2>
                <p className="mt-1 text-sm text-slate-500">Fields marked with * are required.</p>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="form-label font-bold text-xs uppercase text-slate-700">
                    Name *
                    <Input required name="name" autoComplete="name" className="mt-1 bg-white" />
                  </label>
                  <label className="form-label font-bold text-xs uppercase text-slate-700">
                    Company
                    <Input name="company" autoComplete="organization" className="mt-1 bg-white" />
                  </label>
                  <label className="form-label font-bold text-xs uppercase text-slate-700">
                    Email *
                    <Input required name="email" type="email" autoComplete="email" className="mt-1 bg-white" />
                  </label>
                  <label className="form-label font-bold text-xs uppercase text-slate-700">
                    Phone *
                    <Input required name="phone" type="tel" autoComplete="tel" className="mt-1 bg-white" />
                  </label>
                  <label className="form-label sm:col-span-2 font-bold text-xs uppercase text-slate-700">
                    Service Area *
                    <select
                      required
                      name="service"
                      defaultValue=""
                      className="mt-1 h-10 w-full border border-input bg-white rounded-md px-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>IP CCTV & Surveillance</option>
                      <option>LAN / WAN Networking & Fibre</option>
                      <option>EPABX / IP-PBX Systems</option>
                      <option>Audio Visual Solutions</option>
                      <option>Fire Security</option>
                      <option>Telecom Civil Works</option>
                      <option>Office Automation</option>
                      <option>Solar Solutions</option>
                    </select>
                  </label>
                  <label className="form-label sm:col-span-2 font-bold text-xs uppercase text-slate-700">
                    Requirement Details *
                    <Textarea
                      required
                      name="message"
                      className="mt-1 min-h-32 bg-white"
                      placeholder="Tell us about your site, location, and system requirement..."
                    />
                  </label>
                </div>
                <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold">
                  Submit Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}