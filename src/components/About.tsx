import { useLang } from "@/i18n/LangContext";
import { Package, Clock, TrendingDown, Handshake } from "lucide-react";

const ABOUT_IMG = "https://images.pexels.com/photos/14643625/pexels-photo-14643625.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function About() {
  const { t } = useLang();

  const valueIcons = [Package, Clock, TrendingDown, Handshake];

  return (
    <section id="about" className="py-24 bg-[#0d2237] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium mb-4">
            {t.about.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.about.sectionTitle}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t.about.subtitle}</p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group lg:sticky lg:top-24">
            <img
              src={ABOUT_IMG}
              alt="Marine operations"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2237]/80 via-transparent to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#0a1929]/90 backdrop-blur-md rounded-xl border border-white/10 p-5">
                <p className="text-cyan-300 text-sm font-semibold mb-1">{t.about.companyName}</p>
                <p className="text-slate-400 text-xs">Est. 2023 — Istanbul, Turkey</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            {[t.about.p1, t.about.p2, t.about.p3, t.about.p4, t.about.p5].map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed text-[15px]">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {t.about.values.map((value, i) => {
            const Icon = valueIcons[i] ?? Package;
            return (
              <div
                key={i}
                className="group bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-cyan-300" strokeWidth={1.8} />
                </div>
                <h3 className="text-white font-bold text-base mb-1">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
