import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { adminStore, useAdminStore } from "@/lib/admin-store";
import { submitContactInquiryToFirestore } from "@/lib/firestore-service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface QueryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QueryModal({ open, onOpenChange }: QueryModalProps) {
  const store = useAdminStore();
  const offices = store.getOfficeHubs();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "Anonymous Customer";
    const phone = (formData.get("phone") as string) || "Not provided";
    const email = (formData.get("email") as string) || "Not provided";
    const office = (formData.get("office") as string) || offices[0]?.title || "Sangli HQ";
    const message = (formData.get("message") as string) || "No message provided";

    const inquiryPayload = {
      name,
      email,
      phone,
      subject: `Query regarding ${office}`,
      message,
    };

    try {
      await submitContactInquiryToFirestore(inquiryPayload);
    } catch (err) {
      console.warn("Firestore inquiry fallback:", err);
    }

    adminStore.addInquiry(inquiryPayload);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset submitted state after close animation finishes
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[94vw] max-w-[94vw] sm:max-w-xl max-h-[92vh] overflow-y-auto p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xl text-slate-900 overscroll-contain">
        <DialogHeader className="text-left space-y-1 sm:space-y-2 pb-2 border-b border-slate-100 pr-6">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 sm:px-3 py-0.5 rounded-full border border-red-100 w-fit">
            <FileText className="size-3 text-[#DC2626]" />
            <span>LOG YOUR QUERY</span>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
            Log Your <span className="text-[#DC2626]">Query</span>
          </DialogTitle>

          <DialogDescription className="text-slate-600 text-[11px] sm:text-xs font-medium leading-relaxed">
            Submit your technical query or product requirement below. Our engineering team will connect with you promptly.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 px-4 bg-red-50/70 border border-red-100 rounded-2xl text-center space-y-3.5 animate-in fade-in zoom-in-95 my-2">
            <CheckCircle2 className="size-12 sm:size-14 text-[#DC2626] mx-auto animate-bounce" />
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Query Submitted Successfully!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out! Your query has been logged and routed to our regional technical lead. We will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs transition cursor-pointer shadow-md"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-900 block">
                  Your Name <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 sm:size-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sunil Patil"
                    className="w-full rounded-xl bg-slate-50/80 border border-slate-200 py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-900 block">
                  Phone Number <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 sm:size-4 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98..."
                    className="w-full rounded-xl bg-slate-50/80 border border-slate-200 py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-900 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 sm:size-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="w-full rounded-xl bg-slate-50/80 border border-slate-200 py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-900 block">
                  Preferred Location / Hub <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 sm:size-4 text-slate-400 pointer-events-none z-10" />
                  <select
                    name="office"
                    required
                    defaultValue={offices[0]?.title || "Sangli HQ"}
                    className="w-full rounded-xl bg-slate-50/80 border border-slate-200 py-2 sm:py-2.5 pl-9 pr-8 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium cursor-pointer appearance-none"
                  >
                    {offices.map((off) => (
                      <option key={off.id} value={off.title}>
                        {off.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-1 text-left">
              <label className="text-[11px] sm:text-xs font-bold text-slate-900 block">
                Your Query / Technical Requirement <span className="text-[#DC2626]">*</span>
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 size-3.5 sm:size-4 text-slate-400" />
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell us about your requirement, CCTV installation, AMC, brand preference, or project timeline..."
                  className="w-full rounded-xl bg-slate-50/80 border border-slate-200 py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#DC2626] focus:ring-4 focus:ring-red-600/10 transition font-medium resize-y"
                />
              </div>
            </div>

            <div className="pt-1.5 sm:pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3.5 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-red-600/20 transition flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Send className="size-3.5 sm:size-4 text-white shrink-0" />
                <span>
                  {isSubmitting ? "Submitting Query..." : "Submit Query Now"}
                </span>
                <ArrowRight className="size-3.5 sm:size-4 text-white group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
