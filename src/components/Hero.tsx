import { useLang } from "@/i18n/LangContext";
import { ArrowRight, Anchor, Compass, ShieldCheck, Globe } from "lucide-react";

const HERO_IMG = "https://images.pexels.com/photos/28498830/pexels-photo-28498830.jpeg?auto=compress&cs=tinysrgb&w=1920";

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Marine navigation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/80 via-[#0a1929]/70 to-[#0a1929]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1929]/90 via-transparent to-[#0a1929]/40" />
      </div>

      {/* Animated wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#0a1929"
            opacity="0.5"
          />
          <path
            d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z"
            fill="#0a1929"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-8 animate-fade-in">
          <Anchor className="w-4 h-4" />
          {t.hero.badge}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#services")}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            {t.hero.ctaSecondary}
          </button>
        </div>

        {/* Feature icons */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 mt-16 flex-wrap">
          {[
            { icon: ShieldCheck, label: "SOLAS" },
            { icon: Compass, label: "AVCS / ADP / ENP" },
            { icon: Globe, label: "Primar ENC" },
            { icon: Anchor, label: "IMO / ITU / Witherby's" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400">
              <item.icon className="w-5 h-5 text-cyan-400/70" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
