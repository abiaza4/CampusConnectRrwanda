export type Language = "en" | "rw" | "fr" | "sw" | "ar";

export const languages: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "rw", label: "Kinyarwanda", native: "Kinyarwanda" },
  { code: "fr", label: "French", native: "Français" },
  { code: "sw", label: "Swahili", native: "Kiswahili" },
  { code: "ar", label: "Arabic", native: "العربية" },
];

type Translations = Record<string, Record<Language, string>>;

export const translations: Translations = {
  "nav.home": { en: "Home", rw: "Ahabanza", fr: "Accueil", sw: "Nyumbani", ar: "الرئيسية" },
  "nav.universities": { en: "Universities", rw: "Amashuri Makuru", fr: "Universités", sw: "Vyuo", ar: "الجامعات" },
  "nav.study-guide": { en: "Study Guide", rw: "Ubuyobozi bw'Amasomo", fr: "Guide d'Études", sw: "Mwongozo wa Masomo", ar: "دليل الدراسة" },
  "nav.scholarships": { en: "Scholarships", rw: "Imyanya y'Amahugurwa", fr: "Bourses", sw: "Udhamini", ar: "المنح الدراسية" },
  "nav.compare": { en: "Compare", rw: "Gereranya", fr: "Comparer", sw: "Linganisha", ar: "مقارنة" },
  "nav.events": { en: "Events", rw: "Ibikorwa", fr: "Événements", sw: "Matukio", ar: "الأحداث" },
  "nav.equivalence": { en: "Equivalence", rw: "Ingano y'Amasomo", fr: "Équivalence", sw: "Usawa", ar: "المعادلة" },
  "nav.blog": { en: "Blog", rw: "Blog", fr: "Blog", sw: "Blogu", ar: "المدونة" },
  "nav.about": { en: "About", rw: "Ibyerekeye", fr: "À Propos", sw: "Kuhusu", ar: "حول" },
  "nav.visa-guide": { en: "Visa Guide", rw: "Ubuyobozi bwa Viza", fr: "Guide Visa", sw: "Mwongozo wa Viza", ar: "دليل التأشيرة" },
  "nav.important-info": { en: "Important Info", rw: "Amakuru Y'ingenzi", fr: "Infos Importantes", sw: "Taarifa Muhimu", ar: "معلومات هامة" },
  "nav.cost-calculator": { en: "Cost Calculator", rw: "Ibara ry'Igiciro", fr: "Calculateur de Coût", sw: "Kikokotoo cha Gharama", ar: "حاسبة التكاليف" },
  "nav.currency-converter": { en: "Currency Converter", rw: "Ihindura ry'Ifaranga", fr: "Convertisseur de Devises", sw: "Kibadilisha Fedha", ar: "محول العملات" },
  "nav.faq": { en: "FAQ", rw: "Ibibazo", fr: "FAQ", sw: "Maswali", ar: "الأسئلة الشائعة" },
  "nav.team": { en: "Our Team", rw: "Itsinda Ryacu", fr: "Notre Équipe", sw: "Timu Yetu", ar: "فريقنا" },
  "hero.search-placeholder": { en: "Search universities...", rw: "Shakisha amashuri makuru...", fr: "Rechercher des universités...", sw: "Tafuta vyuo...", ar: "ابحث عن الجامعات..." },
  "hero.subtitle": { en: "Discover accredited universities, scholarships, and study opportunities in Rwanda.", rw: "Shakisha amashuri makuru yemewe, amahugurwa, n'iby'ubushakashatsi mu Rwanda.", fr: "Découvrez les universités accréditées, les bourses et les opportunités d'études au Rwanda.", sw: "Gundua vyuo vilivyoidhinishwa, udhamini, na fursa za masomo nchini Rwanda.", ar: "اكتشف الجامعات المعتمدة والمنح الدراسية وفرص الدراسة في رواندا." },
  "offline.title": { en: "You are offline", rw: "Nta murongo", fr: "Vous êtes hors ligne", sw: "Hauna mtandao", ar: "أنت غير متصل" },
  "offline.message": { en: "Cached content is still available.", rw: "Ibirimo byabitswe biragihari.", fr: "Le contenu mis en cache est toujours disponible.", sw: "Maudhui yaliyohifadhiwa bado yanapatikana.", ar: "المحتوى المخزن لا يزال متاحًا." },
  "currency.converter": { en: "Currency Converter", rw: "Ihindura ry'Ifaranga", fr: "Convertisseur de Devises", sw: "Kibadilisha Fedha", ar: "محول العملات" },
  "currency.from": { en: "From", rw: "Kuva", fr: "De", sw: "Kutoka", ar: "من" },
  "currency.to": { en: "To", rw: "Kugeza", fr: "À", sw: "Kwa", ar: "إلى" },
  "currency.amount": { en: "Amount", rw: "Ingano", fr: "Montant", sw: "Kiasi", ar: "المبلغ" },
  "currency.result": { en: "Result", rw: "Igisubizo", fr: "Résultat", sw: "Matokeo", ar: "النتيجة" },
  "currency.convert": { en: "Convert", rw: "Hindura", fr: "Convertir", sw: "Badilisha", ar: "تحويل" },
  "currency.live-rates": { en: "Live Exchange Rates", rw: "Ivunjisha ry'Ifaranga", fr: "Taux de Change en Direct", sw: "Viwango vya Ubadilishaji wa Moja kwa Moja", ar: "أسعار الصرف الحية" },
  "currency.offline-rates": { en: "Offline — showing cached rates", rw: "Nta murongo — igiciro cyabitswe", fr: "Hors ligne — taux mis en cache", sw: "Nje ya mtandao — viwango vilivyohifadhiwa", ar: "غير متصل — أسعار مخزنة" },
  "general.loading": { en: "Loading...", rw: "Irabika...", fr: "Chargement...", sw: "Inapakia...", ar: "جارٍ التحميل..." },
};
