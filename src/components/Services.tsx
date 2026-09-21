import { useLang } from "@/i18n/LangContext";
import { Ship, ShieldCheck, Monitor, BookOpen, ClipboardCheck, LayoutDashboard, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Ship,
  ShieldCheck,
  Monitor,
  BookOpen,
  ClipboardCheck,
  LayoutDashboard,
};

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 bg-[#0a1929] relative overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium mb-4">
            {t.services.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.services.sectionTitle}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t.services.sectionSubtitle}</p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Ship;
            return (
              <div
                key={i}
                className="group relative bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-7 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mb-5 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all">
                  <Icon className="w-7 h-7 text-cyan-300" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

                {/* Short */}
                <p className="text-cyan-300/60 text-sm mb-3">{service.short}</p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-7 right-7 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
