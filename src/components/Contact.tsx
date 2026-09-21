import { useState, type FormEvent } from "react";
import { useLang } from "@/i18n/LangContext";
import { Phone, MapPin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // Simulate submission — in production this would POST to a backend
    setTimeout(() => {
      if (data.name && data.email && data.message) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    }, 1200);
  };

  const contactItems = [
    { icon: Phone, label: t.contact.phone, value: "+90 (216) 395 06 68", href: "tel:+902163950668" },
    { icon: Mail, label: t.contact.email, value: "info@sierramarine.com.tr", href: "mailto:info@sierramarine.com.tr" },
    { icon: MapPin, label: t.contact.address, value: t.contact.addressValue, href: "https://maps.google.com/?q=Tuzla+Istanbul+Turkey" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0a1929] to-[#0d2237] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium mb-4">
            {t.contact.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.contact.sectionTitle}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t.contact.sectionSubtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-cyan-300" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-500 text-sm mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-[15px] break-words">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-64">
              <iframe
                title="Sierra Marine Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=29.18%2C40.82%2C29.22%2C40.84&layer=mapnik&marker=40.8317%2C29.2006"
                className="w-full h-full grayscale-[40%] opacity-80"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.contact.name}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.contact.emailLabel}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder={t.contact.subject}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.message}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  t.contact.sending
                ) : (
                  <>
                    {t.contact.send}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 text-sm mt-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{t.contact.success}</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{t.contact.error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
