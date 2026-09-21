import { useLang } from "@/i18n/LangContext";
import { Map, FileText, Tablet, BadgeCheck, Globe } from "lucide-react";

const DIGITAL_IMG = "https://images.pexels.com/photos/31805295/pexels-photo-31805295.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function DigitalPublications() {
  const { t } = useLang();

  const cards = [
    { icon: Map, title: t.digital.avcsTitle, desc: t.digital.avcsDesc },
    { icon: FileText, title: t.digital.adpTitle, desc: t.digital.adpDesc },
    { icon: Tablet, title: t.digital.enpTitle, desc: t.digital.enpDesc },
    { icon: Globe, title: t.digital.primarTitle, desc: t.digital.primarDesc },
  ];

  return (
    <section id="digital" className="py-24 bg-gradient-to-b from-[#0a1929] to-[#0d2237] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium mb-4">
            {t.digital.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.digital.sectionTitle}
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">{t.digital.sectionSubtitle}</p>
        </div>

        {/* Image + cards layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src={DIGITAL_IMG}
              alt="Digital navigation charts"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/60 to-transparent" />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {cards.map((card, i) => (
              <div
                key={i}
                className="group flex gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6 text-cyan-300" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authorized banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 border border-cyan-400/20 p-8 sm:p-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="relative flex flex-col sm:flex-row items-start gap-5">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <BadgeCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{t.digital.authorized}</h3>
              <p className="text-slate-300 leading-relaxed">{t.digital.authorizedDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
