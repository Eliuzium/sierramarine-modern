import { useLang } from "@/i18n/LangContext";
import { Anchor, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070f1a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Anchor className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg">Sierra Marine</span>
                <span className="text-cyan-300/60 text-[10px] tracking-widest uppercase">Marine Outfitting</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t.nav.services}</h4>
            <ul className="flex flex-col gap-2.5">
              {t.services.items.slice(0, 5).map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-slate-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t.contact.sectionTitle}</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-cyan-400/60 flex-shrink-0" />
                <span>+90 (216) 395 06 68</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-400/60 flex-shrink-0" />
                <span className="break-all">info@sierramarine.com.tr</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400/60 flex-shrink-0 mt-0.5" />
                <span>{t.contact.addressValue}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-start">
            &copy; {year} Sierra Marine Gemi Donatım Hizmetleri San. Tic. Ltd. Şti. {t.footer.rights}.
          </p>
          <button
            onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}
            className="text-cyan-400/70 hover:text-cyan-300 text-sm transition-colors"
          >
            {t.footer.privacy}
          </button>
        </div>
      </div>
    </footer>
  );
}
