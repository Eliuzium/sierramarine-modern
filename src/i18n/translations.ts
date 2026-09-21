export type Lang = "tr" | "en" | "de" | "fa";

export const LANGS: { code: Lang; label: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "fa", label: "فارسی", flag: "🇮🇷", dir: "rtl" },
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
  fa: {
    nav: { home: "صفحه اصلی", about: "درباره ما", services: "خدمات", digital: "انتشارات دیجیتال", partners: "شرکا", contact: "تماس" },
    hero: {
      badge: "تجهیزات کشتی و راه‌حل‌های ناوبری",
      title: "راه‌حل‌های بی‌نقص دریانوردی",
      subtitle: "شریک متخصص شما در تجهیزات کشتی، انتشارات دیجیتال، تجهیزات ایمنی و آماده‌سازی بازرسی. به عنوان توزیع‌کننده Primar، خدمات جهانی برای تمام کشتی‌ها ارائه می‌دهیم.",
      cta: "خدمات ما",
      ctaSecondary: "تماس با ما",
    },
    stats: { years: "سال تجربه", clients: "مشتری راضی", products: "اقلام محصول", support: "پشتیبانی ۲۴/۷" },
    services: {
      sectionTitle: "تخصص‌های ما",
      sectionSubtitle: "تأمین تک‌منبعی برای تمام نیازهای کشتی‌های شما برای عملیات ایمن و بدون وقفه.",
      items: [
        {
          icon: "Ship",
          title: "تجهیزات کشتی",
          short: "راه‌حل‌های تجهیز برای کشتی‌های نو ساخت و موجود.",
          description: "ما تمام آنچه را که برای موتورخانه، عرشه، پل فرماندهی و مناطق مسکونی نیاز دارید تأمین می‌کنیم. محصولات دارای گواهی و مطابق با مقررات طبقه‌بندی.",
        },
        {
          icon: "ShieldCheck",
          title: "تجهیزات ایمنی",
          short: "تجهیزات ایمنی مطابق با SOLAS.",
          description: "جلیقه‌های نجات، قایق‌های نجات، سیستم‌های اطفاء حریق، تجهیزات حفاظت فردی. تمام تجهیزات دارای گواهی بین‌المللی هستند.",
        },
        {
          icon: "Monitor",
          title: "انتشارات دیجیتال و نقشه‌ها",
          short: "انتشارات ناوبری دیجیتال AVCS، ADP، ENP و خدمات نقشه.",
          description: "به‌روزترین محصولات ناوبری دیجیتال جهان با همکاری Elcome LLC. همیشه با آخرین به‌روزرسانی‌ها.",
        },
        {
          icon: "BookOpen",
          title: "نقشه‌ها و انتشارات چاپی",
          short: "نقشه‌های دریایی رسمی، دستورالعمل‌های ناوبری، انتشارات ITU و محصولات Witherby's.",
          description: "مواد چاپی رسمی از ITU، IMO و Witherby's، به‌علاوه انتشارات Admiralty از طریق توزیع‌کنندگی فرعی Elcome LLC. منبع کاملی برای کتابخانه کشتی شما.",
        },
        {
          icon: "ClipboardCheck",
          title: "آماده‌سازی بازرسی",
          short: "شناسایی کاستی‌ها و پشتیبانی تأمین پیش از بازرسی‌های طبقه‌بندی، پرچم و دولت بندری.",
          description: "ما پیش از بازرسی فهرست نیازها را تهیه می‌کنیم و به سرعت تجهیزات و انتشارات مفقود را تأمین می‌کنیم.",
        },
        {
          icon: "LayoutDashboard",
          title: "پشتیبانی مدیریت ناوگان",
          short: "پیگیری وضعیت انتشارات و تجهیزات کشتی‌ها، برنامه‌ریزی تمدید و گزارش‌دهی.",
          description: "با سیستم ردیابی دیجیتال ما، وضعیت به‌روز بودن کل ناوگان خود را در زمان واقعی مشاهده کنید و برای بازرسی‌ها آماده باشید.",
        },
      ],
    },
    digital: {
      sectionTitle: "راه‌حل‌های ناوبری دیجیتال",
      sectionSubtitle: "از طریق توزیع‌کنندگی فرعی با Elcome LLC، خدمات انتشارات دیجیتال Admiralty (ADP، ENP، AVCS) و P.O.D. (چاپ درخواستی) را ارائه می‌دهیم. به عنوان توزیع‌کننده Primar، خدمات ENC (نقشه‌های ناوبری الکترونیکی) را نیز ارائه می‌دهیم.",
      avcsTitle: "AVCS",
      avcsDesc: "سرویس نقشه‌های برداری Admiralty — سرویس نقشه برداری به‌روز در سراسر جهان. ارائه از طریق توزیع‌کنندگی فرعی Elcome LLC. دقیق‌ترین و به‌روزترین نقشه‌ها برای ناوبری ایمن.",
      adpTitle: "ADP",
      adpDesc: "انتشارات دیجیتال Admiralty — انتشارات ناوبری دیجیتال، نقشه‌ها و اسناد دریانوردی. از هدررفت کاغذ جلوگیری می‌کند و همیشه به‌روز است.",
      enpTitle: "ENP",
      enpDesc: "انتشارات الکترونیکی دریانوردی — انتشارات ناوبری الکترونیکی، مطابق با مقررات، با به‌روزرسانی‌های فوری که تضمین می‌کند کشتی شما همیشه مطابق مقررات باشد.",
      primarTitle: "Primar ENC",
      primarDesc: "توزیع‌کننده Primar — سرویس نقشه‌های ناوبری الکترونیکی (ENC). داده‌های به‌روز ENC برای تمام آب‌های جهان، سازگار با ECDIS، برآورده‌کننده الزامات IMO و SOLAS برای ناوبری ایمن.",
      authorized: "توزیع‌کننده و فروشنده مجاز",
      authorizedDesc: "Sierra Marine به عنوان توزیع‌کننده فرعی Elcome LLC، فروشنده مجاز انتشارات دیجیتال Admiralty و P.O.D. است. به عنوان توزیع‌کننده Primar، خدمات ENC را در سراسر جهان ارائه می‌دهیم. ما همچنین توزیع‌کننده دیجیتال و نسخه چاپی ITU، فروشنده انتشارات IMO و توزیع‌کننده Witherby's هستیم. ما به تمام کشتی‌ها در سراسر جهان خدمات ارائه می‌دهیم.",
    },
    about: {
      sectionTitle: "درباره ما",
      subtitle: "Sierra Marine – شریک قابل اعتماد شما در تجهیزات کشتی و راه‌حل‌های ناوبری.",
      companyName: "شرکت خدمات تجهیزات دریایی Sierra Marine",
      p1: "Sierra Marine یک شرکت تجهیزات کشتی و راه‌حل‌های ناوبری است که در سال ۲۰۲۳ تأسیس شد. تجربه طولانی‌مدت بنیان‌گذاران در صنعت دریانوردی، هم توانایی فنی و هم دیدگاه بخشی شرکت را تقویت می‌کند.",
      p2: "فعالیت‌های اصلی ما شامل تأمین تجهیزات، تجهیزات ایمنی، نقشه‌های دریایی چاپی و دیجیتال و انتشارات دریانوردی برای کشتی‌های تجاری و قایق‌های تفریحی است. هدف ما این است که بیشتر اقلام و اسناد مورد نیاز را از یک منبع واحد و قابل اعتماد ارائه دهیم.",
      p3: "ما انتشارات و مقررات صادر شده توسط ITU، IMO، Witherby's و مقامات ملی را به دقت پیگیری می‌کنیم و سبد خود را با آخرین الزامات هماهنگ نگه می‌داریم. انتشارات رسمی هیدروگرافیک و دریانوردی بخش مهمی از راه‌حل‌هایی است که به مشتریان خود ارائه می‌دهیم.",
      p4: "محدوده محصولات ما شامل مواد تجهیزات دریایی، تجهیزات ایمنی و اطفاء حریق، نقشه‌ها و انتشارات دریانوردی، تجهیزات پل فرماندهی، تجهیزات پزشکی، مواد شیمیایی و اقلام مختلف مرتبط با آماده‌سازی بازرسی است.",
      p5: "اولویت ما تحویل محصول صحیح در زمان مناسب با هزینه رقابتی و در انطباق کامل با مقررات است. ایجاد روابط بلندمدت، مبتنی بر اعتماد و راه‌حل‌محور با مشتریان، عنصر کلیدی فرهنگ شرکت ماست.",
      values: [
        { title: "محصول صحیح", desc: "محصولات و انتشارات مطابق و دارای گواهی." },
        { title: "زمان صحیح", desc: "تأمین سریع و تحویل به موقع." },
        { title: "هزینه رقابتی", desc: "راه‌حل‌هایی متناسب با بودجه شما با قیمت‌گذاری رقابتی." },
        { title: "قابلیت اعتماد", desc: "فرهنگ شراکی شفاف و بلندمدت." },
      ],
    },
    partners: { sectionTitle: "شرکای ما", sectionSubtitle: "توزیع‌کننده رسمی و فروشنده مجاز مقامات ملی و بین‌المللی. به عنوان توزیع‌کننده Primar، به کشتی‌ها در سراسر جهان خدمات ارائه می‌دهیم." },
    contact: {
      sectionTitle: "تماس",
      sectionSubtitle: "برای پیشنهادها، اطلاعات و هرگونه سوال با ما تماس بگیرید.",
      phone: "تلفن",
      address: "آدرس",
      email: "ایمیل",
      addressValue: "EVLİYA ÇELEBİ MAH. ŞAHAN SOKAK NO:2/A TUZLA / İSTANBUL – ترکیه",
      formTitle: "برای ما پیام بفرستید",
      name: "نام شما",
      emailLabel: "ایمیل",
      subject: "موضوع",
      message: "پیام شما",
      send: "ارسال",
      sending: "در حال ارسال...",
      success: "پیام شما دریافت شد. به زودی با شما تماس خواهیم گرفت.",
      error: "پیام ارسال نشد. لطفاً دوباره تلاش کنید.",
    },
    footer: { rights: "تمام حقوق محفوظ است.", privacy: "سیاست حریم خصوصی", tagline: "شریک قابل اعتماد شما برای تجهیزات کشتی، انتشارات دیجیتال و راه‌حل‌های ناوبری." },
  },
};
