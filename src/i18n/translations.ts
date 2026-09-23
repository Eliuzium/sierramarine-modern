export type Lang = "tr" | "en" | "de" | "ar";

export const LANGS: { code: Lang; label: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "ar", label: "العربية", flag: "🇸🇦", dir: "rtl" },
];

export type Service = {
  icon: string;
  title: string;
  short: string;
  description: string;
};

export type Translation = {
  nav: { home: string; about: string; services: string; digital: string; partners: string; contact: string };
  hero: { badge: string; title: string; subtitle: string; cta: string; ctaSecondary: string };
  stats: { years: string; clients: string; products: string; support: string };
  services: { sectionTitle: string; sectionSubtitle: string; items: Service[] };
  digital: {
    sectionTitle: string;
    sectionSubtitle: string;
    avcsTitle: string;
    avcsDesc: string;
    adpTitle: string;
    adpDesc: string;
    enpTitle: string;
    enpDesc: string;
    primarTitle: string;
    primarDesc: string;
    authorized: string;
    authorizedDesc: string;
  };
  about: {
    sectionTitle: string;
    subtitle: string;
    companyName: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    values: { title: string; desc: string }[];
  };
  partners: { sectionTitle: string; sectionSubtitle: string };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    phone: string;
    address: string;
    email: string;
    addressValue: string;
    formTitle: string;
    name: string;
    emailLabel: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { rights: string; privacy: string; tagline: string };
};

export const translations: Record<Lang, Translation> = {
  tr: {
    nav: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetler", digital: "Dijital Yayınlar", partners: "İş Ortakları", contact: "İletişim" },
    hero: {
      badge: "Gemi Donatım & Seyir Çözümleri",
      title: "Denizciliğe Dair Kusursuz Çözümler",
      subtitle: "Gemi donatım, dijital yayınlar, emniyet ekipmanları ve survey hazırlığında uzman çözüm ortağınız. Primar distribütörü olarak tüm gemilere dünya çapında hizmet sunuyoruz.",
      cta: "Hizmetlerimiz",
      ctaSecondary: "İletişime Geç",
    },
    stats: { years: "Yıllık Tecrübe", clients: "Mutlu Müşteri", products: "Ürün Kalemi", support: "7/24 Destek" },
    services: {
      sectionTitle: "Uzmanlık Alanlarımız",
      sectionSubtitle: "Gemilerinizin güvenli ve kesintisiz operasyonu için ihtiyaç duyduğunuz her kalemden tek elden tedarik.",
      items: [
        {
          icon: "Ship",
          title: "Gemi Donatım",
          short: "Yeni inşa ve mevcut gemiler için donatım çözümleri.",
          description: "Makine dairesi, güverte, köprüüstü ve yaşam alanları için ihtiyacınız olan her türlü donanımı tek elden temin ediyoruz. Klas ve mevzuata uygun, sertifikalı ürünler.",
        },
        {
          icon: "ShieldCheck",
          title: "Emniyet Ekipmanları",
          short: "SOLAS uyumlu emniyet ekipmanları.",
          description: "Can yelekleri, can salları, yangın söndürme sistemleri, kişisel koruyucu donanımlar. Tüm ekipmanlar uluslararası sertifikalıdır.",
        },
        {
          icon: "Monitor",
          title: "Dijital Yayınlar & Haritalar",
          short: "AVCS, ADP, ENP dijital seyir yayınları ve harita servisleri.",
          description: "Elcome LLC iş birliğiyle dünyanın en güncel dijital seyir ürünleri. Her zaman en son güncellemelerle.",
        },
        {
          icon: "BookOpen",
          title: "Basılı Harita ve Yayınlar",
          short: "Resmi deniz haritaları, seyir talimatları, ITU yayınları ve Witherby's ürünleri.",
          description: "Elcome LLC (Admiralty distribütörü) alt distribütörlüğü ile ITU, IMO ve Witherby's resmi basılı materyalleri. Gemi kütüphaneniz için eksiksiz kaynak.",
        },
        {
          icon: "ClipboardCheck",
          title: "Survey Hazırlığı",
          short: "Klas, bayrak ve liman devleti kontrolleri öncesi eksikliklerin tespiti ve tedarik desteği.",
          description: "Survey öncesi ihtiyaç listesi hazırlıyor, eksik ekipman ve yayınları hızlıca tedarik ediyoruz.",
        },
        {
          icon: "LayoutDashboard",
          title: "Filo Yönetim Desteği",
          short: "Gemilerin yayın ve ekipman durumlarının takibi, yenileme planlaması ve raporlama.",
          description: "Dijital takip sistemi ile tüm filonuzun güncellik durumunu anlık izleyin, denetimlere hazır olun.",
        },
      ],
    },
    digital: {
      sectionTitle: "Dijital Seyir Çözümleri",
      sectionSubtitle: "Elcome LLC alt distribütörlüğü ile Admiralty Dijital Yayınları (ADP, ENP, AVCS) ve P.O.D. (Print on Demand) hizmetlerini sunuyoruz. Ayrıca Primar distribütörü olarak ENC (Elektronik Navigasyon Haritası) hizmetleri sağlıyoruz.",
      avcsTitle: "AVCS",
      avcsDesc: "Admiralty Vector Chart Service — Dünya çapında güncel vektör harita servisi. Elcome LLC alt distribütörlüğü ile sunulmaktadır. Güvenli seyir için en doğru ve güncel haritalar.",
      adpTitle: "ADP",
      adpDesc: "Admiralty Digital Publications — Dijital seyir yayınları, haritalar ve denizcilik dokümanları. Kağıt israfını önler, her zaman günceldir.",
      enpTitle: "ENP",
      enpDesc: "Electronic Nautical Publications — Elektronik seyir yayınları, mevzuata uygun, anlık güncellemelerle geminizin her zaman uyumlu olmasını sağlar.",
      primarTitle: "Primar ENC",
      primarDesc: "Primar Distribütörü — Elektronik Navigasyon Haritaları (ENC) servisi. Tüm dünya denizlerinde güncel ENC verisi ile ECDIS uyumlu, IMO ve SOLAS gerekliliklerine uygun seyir desteği.",
      authorized: "Yetkili Distribütör & Reseller",
      authorizedDesc: "Sierra Marine, Elcome LLC alt distribütörü olarak Admiralty Dijital yayınları ve P.O.D. için reseller yetkili satıcısıdır. Primar distribütörü olarak ENC hizmetleri sunmaktadır. Ayrıca ITU Dijital ve Hardcopy distribütörü, IMO Yayınları reseller'ı ve Witherby's distribütörüdür. Tüm gemilere dünya çapında hizmet veriyoruz.",
    },
    about: {
      sectionTitle: "Hakkımızda",
      subtitle: "Sierra Marine, gemi donatım ve seyir çözümlerinde güvenilir ortağınız.",
      companyName: "Sierra Marine Gemi Donatım Hizmetleri San. Tic. Ltd. Şti.",
      p1: "Sierra Marine, 2023 yılında kurulmuş, kısa sürede denizcilik sektöründe bilinirliğini artırmış bir gemi donatım ve seyir çözümleri markasıdır. Kurucularının denizcilik alanındaki uzun yıllara dayanan tecrübesi, şirketin hem teknik yeterliliğini hem de sektörel bakış açısını güçlendirmektedir.",
      p2: "Faaliyetlerimizin merkezinde, ticari gemiler ve yatlar için gerekli olan donatım, emniyet ekipmanları, basılı ve dijital seyir haritaları ile notik yayınların temini yer almaktadır. Gemilerin klas ve mevzuata uygun şekilde işletilmesi için ihtiyaç duyulan ürün ve dokümanların büyük bölümünü tek elden sağlayabilecek bir yapı oluşturmayı hedefliyoruz.",
      p3: "Sierra Marine; ITU, IMO, Witherby's gibi ulusal/uluslararası otoritelerin yayınlarını takip ederek, güncel düzenlemelere uygun ürün ve yayınları stoklarında bulundurmayı esas alır. Seyir Hidrografi ve Oşinografi Dairesi Başkanlığı ve diğer resmi kurumların yayınları, müşterilerimize sunduğumuz portföyün önemli bir parçasını oluşturmaktadır.",
      p4: "Ürün gamımız; gemi donatım malzemeleri, emniyet ve yangınla mücadele ekipmanları, notik harita ve yayınlar, köprüüstü ekipmanları, medikal malzemeler, kimyasallar ve survey hazırlığına yönelik çeşitli kalemleri kapsamaktadır. Amaç, bir geminin güvenli ve kesintisiz operasyonu için ihtiyaç duyduğu her kalemde güvenilir bir tedarikçi olmaktır.",
      p5: "Tüm bu süreçlerde önceliğimiz; doğru ürünü, doğru zamanda, uygun maliyetle ve mevzuata uygun şekilde sunmaktır. Müşterilerimizle uzun vadeli iş birlikleri kurmayı, güvene dayalı, şeffaf ve çözüm odaklı bir yaklaşım sürdürmeyi şirket kültürümüzün temel unsuru olarak benimsiyoruz.",
      values: [
        { title: "Doğru Ürün", desc: "Mevzuata uygun, sertifikalı ürün ve yayınlar." },
        { title: "Doğru Zaman", desc: "Hızlı tedarik ve zamanında teslimat." },
        { title: "Uygun Maliyet", desc: "Rekabetçi fiyatlandırma ile bütçenize uygun çözümler." },
        { title: "Güvenilirlik", desc: "Şeffaf ve uzun vadeli iş birliği kültürü." },
      ],
    },
    partners: { sectionTitle: "İş Ortaklarımız", sectionSubtitle: "Ulusal ve uluslararası otoritelerin resmi distribütörü ve yetkili satıcısıyız. Primar distribütörü olarak dünya çapında hizmet sunuyoruz." },
    contact: {
      sectionTitle: "İletişim",
      sectionSubtitle: "Teklif, bilgi ve tüm sorularınız için bizimle iletişime geçin.",
      phone: "Telefon",
      address: "Adres",
      email: "E-posta",
      addressValue: "EVLİYA ÇELEBİ MAHALLESİ ŞAHAN SOKAK NO:2/A TUZLA / İSTANBUL",
      formTitle: "Bize Yazın",
      name: "Adınız",
      emailLabel: "E-posta",
      subject: "Konu",
      message: "Mesajınız",
      send: "Gönder",
      sending: "Gönderiliyor...",
      success: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
      error: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
    },
    footer: { rights: "Tüm hakları saklıdır.", privacy: "Gizlilik Sözleşmesi", tagline: "Gemi donatım, dijital yayınlar ve seyir çözümlerinde güvenilir ortağınız." },
  },
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", digital: "Digital Publications", partners: "Partners", contact: "Contact" },
    hero: {
      badge: "Marine Outfitting & Navigation Solutions",
      title: "Perfect Maritime Solutions",
      subtitle: "Your expert partner for marine outfitting, digital publications, safety equipment, and survey preparation. As a Primar distributor, we provide worldwide services to all vessels.",
      cta: "Our Services",
      ctaSecondary: "Contact Us",
    },
    stats: { years: "Years of Experience", clients: "Happy Clients", products: "Product Items", support: "24/7 Support" },
    services: {
      sectionTitle: "Our Expertise",
      sectionSubtitle: "Single-source supply for everything your vessels need for safe and uninterrupted operations.",
      items: [
        {
          icon: "Ship",
          title: "Marine Outfitting",
          short: "Outfitting solutions for new builds and existing vessels.",
          description: "We supply everything you need for the engine room, deck, bridge and accommodation areas. Class-compliant, certified products.",
        },
        {
          icon: "ShieldCheck",
          title: "Safety Equipment",
          short: "SOLAS-compliant safety equipment.",
          description: "Life jackets, life rafts, fire-fighting systems, personal protective equipment. All equipment is internationally certified.",
        },
        {
          icon: "Monitor",
          title: "Digital Publications & Charts",
          short: "AVCS, ADP, ENP digital navigation publications and chart services.",
          description: "The world's most up-to-date digital navigation products in partnership with Elcome LLC. Always with the latest updates.",
        },
        {
          icon: "BookOpen",
          title: "Printed Charts & Publications",
          short: "Official nautical charts, navigation instructions, ITU publications and Witherby's products.",
          description: "Official printed materials from ITU, IMO and Witherby's, plus Admiralty publications via our Elcome LLC sub-distributorship. A complete resource for your ship's library.",
        },
        {
          icon: "ClipboardCheck",
          title: "Survey Preparation",
          short: "Identification of deficiencies and supply support before class, flag and port state inspections.",
          description: "We prepare a needs list before surveys and quickly supply missing equipment and publications.",
        },
        {
          icon: "LayoutDashboard",
          title: "Fleet Management Support",
          short: "Tracking of vessel publication and equipment status, renewal planning and reporting.",
          description: "Monitor your entire fleet's currency status in real time with our digital tracking system and be ready for inspections.",
        },
      ],
    },
    digital: {
      sectionTitle: "Digital Navigation Solutions",
      sectionSubtitle: "Through our sub-distributorship with Elcome LLC, we offer Admiralty Digital Publications (ADP, ENP, AVCS) and P.O.D. (Print on Demand) services. As a Primar distributor, we also provide ENC (Electronic Navigational Chart) services.",
      avcsTitle: "AVCS",
      avcsDesc: "Admiralty Vector Chart Service — Up-to-date vector chart service worldwide. Offered through Elcome LLC sub-distributorship. The most accurate and current charts for safe navigation.",
      adpTitle: "ADP",
      adpDesc: "Admiralty Digital Publications — Digital navigation publications, charts and maritime documents. Eliminates paper waste, always up to date.",
      enpTitle: "ENP",
      enpDesc: "Electronic Nautical Publications — Electronic navigation publications, compliant with regulations, ensuring your vessel is always compliant with instant updates.",
      primarTitle: "Primar ENC",
      primarDesc: "Primar Distributor — Electronic Navigational Chart (ENC) service. Up-to-date ENC data for all world waters, ECDIS-compatible, meeting IMO and SOLAS requirements for safe navigation.",
      authorized: "Authorized Distributor & Reseller",
      authorizedDesc: "Sierra Marine is an authorized reseller for Admiralty Digital Publications and P.O.D. as a sub-distributor of Elcome LLC. As a Primar distributor, we provide ENC services worldwide. We are also the ITU Digital and Hardcopy distributor, IMO Publications reseller, and Witherby's distributor. We serve all vessels globally.",
    },
    about: {
      sectionTitle: "About Us",
      subtitle: "Sierra Marine – Your reliable partner in marine outfitting and navigation solutions.",
      companyName: "Sierra Marine Marine Outfitting Services Inc.",
      p1: "Sierra Marine is a marine outfitting and navigation solutions company established in 2023. The founders' long-standing experience in the maritime industry strengthens both the technical competence and the sectoral perspective of the company.",
      p2: "Our core activities include the supply of outfitting items, safety equipment, paper and digital charts and nautical publications for commercial vessels and yachts. Our goal is to provide most of the required items and documentation from a single, reliable source.",
      p3: "We closely follow publications and regulations issued by ITU, IMO, Witherby's and national authorities, and keep our portfolio aligned with the latest requirements. Official hydrographic and nautical publications form an important part of the solutions we offer to our clients.",
      p4: "Our product range covers marine outfitting materials, safety and fire-fighting equipment, nautical charts and publications, bridge equipment, medical supplies, chemicals and various items related to survey preparation.",
      p5: "Our priority is to deliver the right product, at the right time, at a competitive cost and in full compliance with regulations. Building long-term, trust-based and solution-oriented relationships with our customers is a key element of our company culture.",
      values: [
        { title: "Right Product", desc: "Compliant, certified products and publications." },
        { title: "Right Time", desc: "Fast supply and on-time delivery." },
        { title: "Competitive Cost", desc: "Solutions that fit your budget with competitive pricing." },
        { title: "Reliability", desc: "Transparent and long-term partnership culture." },
      ],
    },
    partners: { sectionTitle: "Our Partners", sectionSubtitle: "Official distributor and authorized reseller of national and international authorities. As a Primar distributor, we serve vessels worldwide." },
    contact: {
      sectionTitle: "Contact",
      sectionSubtitle: "Get in touch with us for quotes, information and any questions.",
      phone: "Phone",
      address: "Address",
      email: "Email",
      addressValue: "EVLİYA ÇELEBİ MAH. ŞAHAN SOKAK NO:2/A TUZLA / İSTANBUL – TURKEY",
      formTitle: "Send Us a Message",
      name: "Your Name",
      emailLabel: "Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send",
      sending: "Sending...",
      success: "Your message has been received. We will get back to you shortly.",
      error: "Message could not be sent. Please try again.",
    },
    footer: { rights: "All rights reserved.", privacy: "Privacy Policy", tagline: "Your trusted partner for marine outfitting, digital publications and navigation solutions." },
  },
  de: {
    nav: { home: "Startseite", about: "Über uns", services: "Leistungen", digital: "Digitale Publikationen", partners: "Partner", contact: "Kontakt" },
    hero: {
      badge: "Schiffsausrüstung & Navigationslösungen",
      title: "Perfekte maritime Lösungen",
      subtitle: "Ihr kompetenter Partner für Schiffsausrüstung, digitale Publikationen, Sicherheitsausrüstung und Inspektionsvorbereitung. Als Primar-Distributor bieten wir weltweite Dienste für alle Schiffe.",
      cta: "Unsere Leistungen",
      ctaSecondary: "Kontakt aufnehmen",
    },
    stats: { years: "Jahre Erfahrung", clients: "Zufriedene Kunden", products: "Produktartikel", support: "24/7 Support" },
    services: {
      sectionTitle: "Unsere Fachgebiete",
      sectionSubtitle: "Einzelquelle für alles, was Ihre Schiffe für einen sicheren und unterbrechungsfreien Betrieb benötigen.",
      items: [
        {
          icon: "Ship",
          title: "Schiffsausrüstung",
          short: "Ausrüstungslösungen für Neubauten und bestehende Schiffe.",
          description: "Wir liefern alles, was Sie für Maschinenraum, Deck, Brücke und Wohnbereiche benötigen. Klassifikationskonforme, zertifizierte Produkte.",
        },
        {
          icon: "ShieldCheck",
          title: "Sicherheitsausrüstung",
          short: "SOLAS-konforme Sicherheitsausrüstung.",
          description: "Rettungswesten, Rettungsflöße, Feuerlöschanlagen, persönliche Schutzausrüstung. Alle Ausrüstungsteile sind international zertifiziert.",
        },
        {
          icon: "Monitor",
          title: "Digitale Publikationen & Karten",
          short: "AVCS, ADP, ENP digitale Navigationspublikationen und Kartendienste.",
          description: "Die aktuellsten digitalen Navigationsprodukte weltweit in Partnerschaft mit Elcome LLC. Immer mit den neuesten Updates.",
        },
        {
          icon: "BookOpen",
          title: "Gedruckte Karten & Publikationen",
          short: "Offizielle Seekarten, Navigationsanweisungen, ITU-Publikationen und Witherby's-Produkte.",
          description: "Offizielle gedruckte Materialien von ITU, IMO und Witherby's, sowie Admiralty-Publikationen über unsere Elcome LLC Sub-Distributorenschaft. Eine vollständige Ressource für Ihre Schiffsbibliothek.",
        },
        {
          icon: "ClipboardCheck",
          title: "Inspektionsvorbereitung",
          short: "Ermittlung von Mängeln und Beschaffungsunterstützung vor Klassifikations-, Flaggen- und Hafenstaatskontrollen.",
          description: "Wir erstellen eine Bedarfsliste vor Inspektionen und beschaffen schnell fehlende Ausrüstung und Publikationen.",
        },
        {
          icon: "LayoutDashboard",
          title: "Flottenmanagement-Unterstützung",
          short: "Verfolgung des Status von Publikationen und Ausrüstung der Schiffe, Erneuerungsplanung und Berichterstattung.",
          description: "Überwachen Sie den Aktualitätsstatus Ihrer gesamten Flotte in Echtzeit mit unserem digitalen Verfolgungssystem und seien Sie auf Inspektionen vorbereitet.",
        },
      ],
    },
    digital: {
      sectionTitle: "Digitale Navigationslösungen",
      sectionSubtitle: "Durch unsere Sub-Distributorenschaft mit Elcome LLC bieten wir Admiralty Digital Publications (ADP, ENP, AVCS) und P.O.D. (Print on Demand) Dienste an. Als Primar-Distributor bieten wir außerdem ENC (Elektronische Navigationskarten) Dienste an.",
      avcsTitle: "AVCS",
      avcsDesc: "Admiralty Vector Chart Service — Weltweit aktueller Vektorkartendienst. Angeboten über Elcome LLC Sub-Distributorenschaft. Die genauesten und aktuellsten Karten für sichere Navigation.",
      adpTitle: "ADP",
      adpDesc: "Admiralty Digital Publications — Digitale Navigationspublikationen, Karten und maritime Dokumente. Verhindert Papierverschwendung, immer aktuell.",
      enpTitle: "ENP",
      enpDesc: "Electronic Nautical Publications — Elektronische Navigationspublikationen, vorschriftenkonform, mit sofortigen Updates, die sicherstellen, dass Ihr Schiff immer konform ist.",
      primarTitle: "Primar ENC",
      primarDesc: "Primar-Distributor — Elektronische Navigationskarten (ENC) Dienst. Aktuelle ENC-Daten für alle Gewässer der Welt, ECDIS-kompatibel, erfüllt IMO- und SOLAS-Anforderungen für sichere Navigation.",
      authorized: "Autorisierter Distributor & Reseller",
      authorizedDesc: "Sierra Marine ist autorisierter Reseller für Admiralty Digital Publications und P.O.D. als Sub-Distributor von Elcome LLC. Als Primar-Distributor bieten wir weltweite ENC-Dienste an. Wir sind außerdem ITU Digital- und Hardcopy-Distributor, IMO-Publikationen-Reseller und Witherby's-Distributor. Wir bedienen alle Schiffe weltweit.",
    },
    about: {
      sectionTitle: "Über uns",
      subtitle: "Sierra Marine – Ihr zuverlässiger Partner für Schiffsausrüstung und Navigationslösungen.",
      companyName: "Sierra Marine Marine Outfitting Services GmbH",
      p1: "Sierra Marine ist ein Unternehmen für Schiffsausrüstung und Navigationslösungen, das 2023 gegründet wurde. Die langjährige Erfahrung der Gründer in der Schifffahrtsindustrie stärkt sowohl die technische Kompetenz als auch die sektorale Perspektive des Unternehmens.",
      p2: "Zu unseren Kernaktivitäten gehören die Lieferung von Ausrüstung, Sicherheitsausrüstung, gedruckten und digitalen Seekarten und nautischen Publikationen für Handelsschiffe und Yachten. Unser Ziel ist es, die meisten der benötigten Artikel und Dokumente aus einer einzigen, zuverlässigen Quelle bereitzustellen.",
      p3: "Wir verfolgen aufmerksam die Publikationen und Vorschriften von ITU, IMO, Witherby's und nationalen Behörden und halten unser Portfolio auf dem neuesten Stand. Offizielle hydrografische und nautische Publikationen bilden einen wichtigen Teil der Lösungen, die wir unseren Kunden anbieten.",
      p4: "Unser Produktsortiment umfasst Schiffsausrüstungsmaterialien, Sicherheits- und Brandbekämpfungsausrüstung, Seekarten und Publikationen, Brückenausrüstung, medizinische Versorgung, Chemikalien und verschiedene Artikel zur Inspektionsvorbereitung.",
      p5: "Unsere Priorität ist es, das richtige Produkt zur richtigen Zeit zu wettbewerbsfähigen Kosten und in voller Übereinstimmung mit den Vorschriften zu liefern. Der Aufbau langfristiger, vertrauensbasierter und lösungsorientierter Beziehungen zu unseren Kunden ist ein wesentliches Element unserer Unternehmenskultur.",
      values: [
        { title: "Richtiges Produkt", desc: "Konforme, zertifizierte Produkte und Publikationen." },
        { title: "Richtige Zeit", desc: "Schnelle Beschaffung und pünktliche Lieferung." },
        { title: "Wettbewerbsfähige Kosten", desc: "Lösungen, die zu Ihrem Budget passen." },
        { title: "Zuverlässigkeit", desc: "Transparente und langfristige Partnerschaftskultur." },
      ],
    },
    partners: { sectionTitle: "Unsere Partner", sectionSubtitle: "Offizieller Distributor und autorisierter Reseller nationaler und internationaler Behörden. Als Primar-Distributor bedienen wir Schiffe weltweit." },
    contact: {
      sectionTitle: "Kontakt",
      sectionSubtitle: "Kontaktieren Sie uns für Angebote, Informationen und alle Fragen.",
      phone: "Telefon",
      address: "Adresse",
      email: "E-Mail",
      addressValue: "EVLİYA ÇELEBİ MAH. ŞAHAN SOKAK NO:2/A TUZLA / İSTANBUL – TÜRKEI",
      formTitle: "Schreiben Sie uns",
      name: "Ihr Name",
      emailLabel: "E-Mail",
      subject: "Betreff",
      message: "Ihre Nachricht",
      send: "Senden",
      sending: "Wird gesendet...",
      success: "Ihre Nachricht wurde empfangen. Wir werden uns in Kürze bei Ihnen melden.",
      error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    },
    footer: { rights: "Alle Rechte vorbehalten.", privacy: "Datenschutzerklärung", tagline: "Ihr vertrauenswürdiger Partner für Schiffsausrüstung, digitale Publikationen und Navigationslösungen." },
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", services: "الخدمات", digital: "المنشورات الرقمية", partners: "الشركاء", contact: "اتصل بنا" },
    hero: {
      badge: "تجهيز السفن وحلول الملاحة",
      title: "حلول بحرية مثالية",
      subtitle: "شريكك الخبير في تجهيز السفن، والمنشورات الرقمية، ومعدات السلامة، وإعداد المسوحات. بصفتنا موزعين معتمدين لشركة Primar، نقدم خدمات عالمية لجميع السفن.",
      cta: "خدماتنا",
      ctaSecondary: "اتصل بنا",
    },
    stats: { years: "سنوات الخبرة", clients: "عملاء سعداء", products: "عنصر منتج", support: "دعم على مدار الساعة" },
    services: {
      sectionTitle: "خبراتنا",
      sectionSubtitle: "توريد من مصدر واحد لكل ما تحتاجه سفنك لعمليات آمنة ودون انقطاع.",
      items: [
        {
          icon: "Ship",
          title: "تجهيز السفن",
          short: "حلول التجهيز للسفن الجديدة والموجودة.",
          description: "نحن نورد كل ما تحتاجه لغرفة المحركات، سطح السفينة، جسر القيادة، وأماكن الإقامة. منتجات معتمدة ومتوافقة مع التصنيفات.",
        },
        {
          icon: "ShieldCheck",
          title: "معدات السلامة",
          short: "معدات سلامة متوافقة مع اتفاقية سولاس (SOLAS).",
          description: "سترات النجاة، طوافات النجاة، أنظمة مكافحة الحريق، ومعدات الحماية الشخصية. جميع المعدات حاصلة على شهادات دولية.",
        },
        {
          icon: "Monitor",
          title: "المنشورات والخرائط الرقمية",
          short: "منشورات الملاحة الرقمية AVCS, ADP, ENP وخدمات الخرائط.",
          description: "أحدث منتجات الملاحة الرقمية في العالم بالشراكة مع Elcome LLC. دائماً مع أحدث التحديثات.",
        },
        {
          icon: "BookOpen",
          title: "الخرائط والمنشورات المطبوعة",
          short: "الخرائط البحرية الرسمية، إرشادات الملاحة، منشورات الاتحاد الدولي للاتصالات ITU ومنتجات Witherby's.",
          description: "المواد المطبوعة الرسمية من ITU، IMO و Witherby's، بالإضافة إلى منشورات Admiralty عبر وكالتنا الفرعية لشركة Elcome LLC. مصدر كامل لمكتبة سفينتك.",
        },
        {
          icon: "ClipboardCheck",
          title: "إعداد المسوحات (Survey)",
          short: "تحديد أوجه القصور ودعم التوريد قبل عمليات التفتيش الخاصة بالهيئة المصنفة، العلم، ودولة الميناء.",
          description: "نحن نعد قائمة الاحتياجات قبل المسوحات ونورد المعدات والمنشورات المفقودة بسرعة.",
        },
        {
          icon: "LayoutDashboard",
          title: "دعم إدارة الأسطول",
          short: "تتبع حالة منشورات ومعدات السفن، تخطيط التجديد وإعداد التقارير.",
          description: "راقب حالة تحديث أسطولك بالكامل في الوقت الفعلي من خلال نظام التتبع الرقمي الخاص بنا وكن مستعداً عمليات التفتيش.",
        },
      ],
    },
    digital: {
      sectionTitle: "حلول الملاحة الرقمية",
      sectionSubtitle: "من خلال شراكتنا الفرعية مع Elcome LLC، نقدم منشورات Admiralty الرقمية (ADP، ENP، AVCS) وخدمات الطباعة حسب الطلب (P.O.D.). بصفتنا موزعين لـ Primar، نقدم أيضاً خدمات الخرائط البحرية الإلكترونية (ENC).",
      avcsTitle: "AVCS",
      avcsDesc: "خدمة الخرائط المتجهة Admiralty — خدمة خرائط متجهة محدثة في جميع أنحاء العالم. تُقدم من خلال التوزيع الفرعي لـ Elcome LLC. الخرائط الأكثر دقة وحداثة للملاحة الآمنة.",
      adpTitle: "ADP",
      adpDesc: "المنشورات الرقمية Admiralty — منشورات الملاحة الرقمية، والخرائط والوثائق البحرية. تمنع هدر الورق وتكون محدثة دائمجاً.",
      enpTitle: "ENP",
      enpDesc: "المنشورات البحرية الإلكترونية — منشورات ملاحة إلكترونية متوافقة مع اللوائح، مما يضمن أن سفينتك متوافقة دائماً مع التحديثات الفورية.",
      primarTitle: "Primar ENC",
      primarDesc: "موزع Primar — خدمة الخرائط البحرية الإلكترونية (ENC). بيانات ENC محدثة لجميع مياه العالم، متوافقة مع نظام ECDIS، وتلبي متطلبات المنظمة البحرية الدولية (IMO) واتفاقية (SOLAS) للملاحة الآمنة.",
      authorized: "موزع وبائع معتمد",
      authorizedDesc: "Sierra Marine هي بائع معتمد لمنشورات Admiralty الرقمية و P.O.D. كوزع فرعي لشركة Elcome LLC. بصفتنا موزعين لـ Primar، نقدم خدمات ENC في جميع أنحاء العالم. نحن أيضاً موزعون لمنتجات ITU الرقمية والمطبوعة، وموزعون لمنشورات IMO، وموزعون لشركة Witherby's. نحن نخدم جميع السفن على مستوى العالم.",
    },
    about: {
      sectionTitle: "من نحن",
      subtitle: "Sierra Marine – شريكك الموثوق به في تجهيز السفن وحلول الملاحة.",
      companyName: "شركة Sierra Marine لخدمات تجهيز السفن المحدودة",
      p1: "تأسست Sierra Marine في عام 2023، وهي علامة تجارية لحلول تجهيز السفن والملاحة عززت مكانتها في قطاع البحريات في وقت قصير. خبرة المؤسسين الطويلة في المجال البحري تقوي الكفاءة التقنية والمنظور القطاعي للشركة.",
      p2: "في صميم أنشطتنا توريد معدات التجهيز، ومعدات السلامة، والخرائط البحرية الورقية والرقمية، والمنشورات الملاحية للسفن التجارية واليخوت. هدفنا هو توفير غالبية المنتجات والوثائق اللازمة من مصدر واحد موثوق.",
      p3: "نحن نتابع عن كثب المنشورات واللوائح الصادرة عن ITU و IMO و Witherby's والجهات الوطنية، ونسعى لإبقاء منتجاتنا مطابقة لأحدث المتطلبات. تشكل المنشورات الهيدروغرافية والملاحية الرسمية جزءاً هاماً من المحفظة التي نقدمها لعملائنا.",
      p4: "تغطي مجموعة منتجاتنا مواد تجهيز السفن، ومعدات السلامة ومكافحة الحريق، والخرائط والمنشورات الملاحية، ومعدات جسر القيادة، والمستلزمات الطبية، والمواد الكيميائية، ومختلف العناصر المتعلقة بإعداد المسوحات.",
      p5: "أولويتنا هي تقديم المنتج المناسب، في الوقت المناسب، بتكلفة تنافسية وبما يتوافق تماماً مع اللوائح. بناء علاقات طويلة الأجل وقائمة على الثقة وموجهة نحو الحلول مع عملائنا هو العنصر الأساسي في ثقافة شركتنا.",
      values: [
        { title: "المنتج المناسب", desc: "منتجات ومنشورات معتمدة ومتوافقة مع اللوائح." },
        { title: "الوقت المناسب", desc: "توريد سريع وتسليم في الموعد المحدد." },
        { title: "تكلفة تنافسية", desc: "حلول تناسب ميزانيتك بأسعار تنافسية." },
        { title: "الموثوقية", desc: "ثقافة شراكة شفافة وطويلة الأجل." },
      ],
    },
    partners: { sectionTitle: "شركاؤنا", sectionSubtitle: "موزعون رسميون وبائعون معتمدون للهيئات الوطنية والدولية. بصفتنا موزعين لـ Primar، نحن نخدم السفن في جميع أنحاء العالم." },
    contact: {
      sectionTitle: "اتصل بنا",
      sectionSubtitle: "تواصل معنا للحصول على عروض الأسعار والمعلومات وأي استفسارات.",
      phone: "الهاتف",
      address: "العنوان",
      email: "البريد الإلكتروني",
      addressValue: "EVLİYA ÇELEBİ MAH. ŞAHAN SOKAK NO:2/A TUZLA / İSTANBUL – TURKEY",
      formTitle: "أرسل لنا رسالة",
      name: "اسمك",
      emailLabel: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "رسالتك",
      send: "إرسال",
      sending: "جاري الإرسال...",
      success: "تم استلام رسالتك. سنقوم بالرد عليك في أقرب وقت ممكن.",
      error: "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    },
    footer: { rights: "جميع الحقوق محفوظة.", privacy: "سياسة الخصوصية", tagline: "شريكك الموثوق لتجهيز السفن والمنشورات الرقمية وحلول الملاحة." },
  },
};
