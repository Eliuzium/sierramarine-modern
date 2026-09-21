import { useLang } from "@/i18n/LangContext";
import { Globe, BadgeCheck } from "lucide-react";

const OTHER_PARTNERS = [
  { name: "Elcome LLC", desc: "Admiralty Digital" },
  { name: "Witherby's", desc: "Marine Publications" },
  { name: "IMO", desc: "International Maritime Org." },
  { name: "ITU", desc: "Telecommunications" },
  { name: "SHOD", desc: "Turkish Hydrographic" },
];

const PRIMAR_BADGES: Record<string, { label: string; sub: string }> = {
  tr: { label: "Primar Distribütörü — Türkiye", sub: "Tüm gemilere dünya çapında hizmet" },
  en: { label: "Primar Distributor — Turkey", sub: "Worldwide service for all vessels" },
  de: { label: "Primar-Distributor — Türkei", sub: "Weltweiter Service für alle Schiffe" },
  fa: { label: "توزیع‌کننده Primar — ترکیه", sub: "خدمات جهانی برای تمام کشتی‌ها" },
};

export default function Partners() {
  const { t, lang } = useLang();
  const primar = PRIMAR_BADGES[lang];

  return (
    <section id="partners" className="py-24 bg-[#0a1929] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium mb-4">
            {t.partners.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.partners.sectionTitle}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t.partners.sectionSubtitle}</p>
        </div>

        {/* Featured Primar banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 border border-cyan-400/30 p-8 sm:p-10 mb-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />
          <div className="relative flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/30">
              <Globe className="w-10 h-10 text-white" strokeWidth={1.8} />
            </div>
            <div className="flex-1 text-center sm:text-start">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white">Primar</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold">
                  {primar.label}
                </span>
              </div>
              <p className="text-slate-300 text-base">{primar.sub}</p>
            </div>
            <div className="flex-shrink-0 hidden sm:flex flex-col items-center gap-1">
              <BadgeCheck className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-300/70 text-xs font-medium">ENC</span>
            </div>
          </div>
        </div>

        {/* Other partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {OTHER_PARTNERS.map((partner, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300 aspect-square"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-cyan-300 font-bold text-lg">{partner.name[0]}</span>
              </div>
              <p className="text-white font-semibold text-sm text-center">{partner.name}</p>
              <p className="text-slate-500 text-xs text-center mt-0.5">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
