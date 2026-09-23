import { useLang } from "@/i18n/LangContext";
import { ExternalLink } from "lucide-react";

// Tüm iş ortakları (Primar dahil) artık eşit boyutta ve aynı listede yer alıyor
const ALL_PARTNERS = [
  { name: "Primar", desc: "Primar Distribütörü", url: "https://www.primar.org", initial: "P" },
  { name: "Elcome LLC", desc: "Admiralty Digital", url: "https://www.elcome.com", initial: "E" },
  { name: "Witherby's", desc: "Marine Publications", url: "https://www.witherbys.com", initial: "W" },
  { name: "IMO", desc: "International Maritime Org.", url: "https://www.imo.org", initial: "I" },
  { name: "ITU", desc: "Telecommunications", url: "https://www.itu.int", initial: "I" },
  { name: "SHOD", desc: "Turkish Hydrographic", url: "https://www.shodb.gov.tr", initial: "S" },
];

// Metin çevirileri (İstediğiniz yeni cümle eklendi)
const PARTNERS_TEXTS: Record<string, { subtitle: string }> = {
  tr: { subtitle: "Ulusal ve uluslararası otoritelerin resmi distribütörü ve yetkili satıcısıyız. İş ortaklarımız ile birlikte dünya çapında hizmet sunuyoruz." },
  en: { subtitle: "We are the official distributor and authorized dealer of national and international authorities. Together with our partners, we provide worldwide service." },
  de: { subtitle: "Wir sind offizieller Distributor und autorisierter Händler nationaler und internationaler Behörden. Gemeinsam mit unseren Partnern bieten wir weltweiten Service." },
  ar: { subtitle: "نحن الموزع الرسمي والوكيل المعتمد للسلطات الوطنية والدولية. جنباً إلى جنب مع شركائنا، نقدم خدمات عالمية." },
};

export default function Partners() {
  const { t, lang } = useLang();
  const currentText = PARTNERS_TEXTS[lang] || PARTNERS_TEXTS['en'];

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
          {/* Güncellenen Açıklama Metni */}
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">{currentText.subtitle}</p>
        </div>

        {/* Tüm İş Ortakları Eşit Boyutta Grid Yapısında */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {ALL_PARTNERS.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300 aspect-square relative"
            >
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-cyan-300 font-bold text-lg">{partner.initial}</span>
              </div>
              <p className="text-white font-semibold text-sm text-center group-hover:text-cyan-300 transition-colors">{partner.name}</p>
              <p className="text-slate-500 text-xs text-center mt-0.5">{partner.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
