"use strict";

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

const translations = {
  el: {
    "a11y.skip": "Μετάβαση στο περιεχόμενο",
    "nav.services": "Υπηρεσίες", "nav.story": "Η ιστορία", "nav.leader": "Διοίκηση", "nav.process": "Διαδρομή", "nav.faq": "Συχνές ερωτήσεις", "nav.contact": "Ας μιλήσουμε",
    "hero.kicker": "ΠΟΛΛΟΙ ΤΟΜΕΙΣ. ΜΙΑ ΣΥΝΕΡΓΑΣΙΑ.", "hero.line1": "Έξι τομείς.", "hero.line2": "Ένας συνεργάτης.", "hero.line3": "Απεριόριστες δυνατότητες.",
    "hero.text": "Ενώνουμε έξι τομείς υπηρεσιών κάτω από μία κοινή φιλοσοφία. Ένα σημείο επαφής, καθαρά βήματα και άμεση επικοινωνία.",
    "hero.cta1": "Δείτε τις υπηρεσίες", "hero.cta2": "Συζητήστε το έργο σας", "hero.scroll": "ΚΥΛΗΣΤΕ ΚΑΙ ΔΕΙΤΕ ΤΙΣ ΥΠΗΡΕΣΙΕΣ",
    "badge.one": "Ένας συνεργάτης", "badge.two": "Έξι τομείς", "badge.three": "Απάντηση εντός μίας ημέρας",
    "services.kicker": "ΟΙ ΤΟΜΕΙΣ ΜΑΣ", "services.title": "Έξι τομείς. Κοινός ορίζοντας.", "services.text": "Διαφορετική εξειδίκευση, η ίδια προσοχή σε κάθε συνεργασία. Επιλέξτε τον τομέα που ταιριάζει στο έργο σας.",
    "svc.trade": "Εμπόριο & προμήθειες", "svc.tradeText": "Συντονισμός προμηθειών και προϊόντων με σταθερή ποιότητα, χρόνους και τιμές χωρίς εκπλήξεις.", "svc.tradePoint1": "Επιλογή προμηθευτών", "svc.tradePoint2": "Διαπραγμάτευση όρων", "svc.tradePoint3": "Παρακολούθηση παραδόσεων",
    "svc.consulting": "Επιχειρηματική συμβουλευτική", "svc.consultingText": "Στρατηγική σκέψη για τις αποφάσεις που διαμορφώνουν το αύριο της επιχείρησής σας.", "svc.consultingPoint1": "Ανάλυση αναγκών", "svc.consultingPoint2": "Σχέδιο δράσης", "svc.consultingPoint3": "Υποστήριξη υλοποίησης",
    "svc.people": "Εργασία & ανθρώπινο δυναμικό", "svc.peopleText": "Συνδέουμε τις δυνατότητες των ανθρώπων με τις πραγματικές ανάγκες των επιχειρήσεων.", "svc.peoplePoint1": "Ανάλυση θέσεων", "svc.peoplePoint2": "Αξιολόγηση υποψηφίων", "svc.peoplePoint3": "Υποστήριξη ένταξης",
    "svc.property": "Ακίνητα & χώροι", "svc.propertyText": "Φροντίδα και οργάνωση για τους χώρους που έχουν αξία για εσάς ή την επιχείρησή σας.", "svc.propertyPoint1": "Αξιολόγηση χώρου", "svc.propertyPoint2": "Συντονισμός συνεργείων", "svc.propertyPoint3": "Διαχείριση λειτουργίας",
    "svc.events": "Εκδηλώσεις & εμπειρίες", "svc.eventsText": "Από την πρώτη ιδέα έως τη φιλοξενία. Οργάνωση με προσωπικότητα και ακρίβεια.", "svc.eventsPoint1": "Σχεδιασμός εκδήλωσης", "svc.eventsPoint2": "Συντονισμός προμηθευτών", "svc.eventsPoint3": "Εκτέλεση και υποδοχή",
    "svc.special": "Προσωπικές & ειδικές υπηρεσίες", "svc.specialText": "Εξειδικευμένες δραστηριότητες με προσοχή στις ιδιαίτερες ανάγκες κάθε πελάτη.", "svc.specialPoint1": "Κατ' οίκον υπηρεσίες", "svc.specialPoint2": "Εξατομικευμένα αιτήματα", "svc.specialPoint3": "Διακριτικότητα",
    "story.kicker": "Η ΙΣΤΟΡΙΑ ΜΑΣ", "story.title": "Μια διαδρομή που κυλάει.", "story.subtitle": "Από την πρώτη ιδέα στη σημερινή δομή — μια ιστορία σε πέντε σταθμούς, με οδηγό την εξέλιξη.",
    "story.ch1Year": "Η αρχή", "story.ch1Title": "Μια ανάγκη που επαναλαμβανόταν", "story.ch1Text": "Οι πελάτες μας έβρισκαν κάθε υπηρεσία σε διαφορετικό προμηθευτή, με διαφορετικούς κανόνες. Αποφασίσαμε να το αλλάξουμε αυτό.",
    "story.ch2Year": "Η σύνδεση", "story.ch2Title": "Έξι τομείς, μία φιλοσοφία", "story.ch2Text": "Ενώσαμε έξι τομείς με διαφορετική εξειδίκευση αλλά κοινές αξίες: ακρίβεια, σεβασμό και συνέπεια.",
    "story.ch3Year": "Η εμπιστοσύνη", "story.ch3Title": "Άνθρωποι πρώτα", "story.ch3Text": "Κάθε συνεργασία ξεκινά από μια συζήτηση. Ακούμε πριν προτείνουμε και χτίζουμε σχέσεις που διαρκούν.",
    "story.ch4Year": "Η εξέλιξη", "story.ch4Title": "Προσαρμογή στο σήμερα", "story.ch4Text": "Η αγορά αλλάζει. Εξελίσσουμε τις υπηρεσίες μας ώστε να ανταποκρίνονται σε νέες ανάγκες με σύγχρονη σκέψη.",
    "story.ch5Year": "Το αύριο", "story.ch5Title": "Ένας κόσμος δυνατοτήτων", "story.ch5Text": "Συνεχίζουμε να μεγαλώνουμε, προσθέτοντας δυνατότητες και συνεργασίες — με οδηγό τον στόχο κάθε πελάτη.",
    "values.kicker": "ΓΙΑΤΙ ΕΜΑΣ", "values.title": "Σταθερές αξίες, καθαρή επικοινωνία.",
    "values.oneTitle": "Ένας συνεργάτης", "values.oneText": "Έξι τομείς κάτω από μία ενιαία φιλοσοφία και ένα σημείο επαφής για εσάς.",
    "values.twoTitle": "Προσοχή στη λεπτομέρεια", "values.twoText": "Ακούμε πρώτα, κατανοούμε τις ανάγκες σας και μετά προτείνουμε λύση.",
    "values.threeTitle": "Καθαρά βήματα", "values.threeText": "Ξεκάθαρος σχεδιασμός και ανοιχτή επικοινωνία σε κάθε στάδιο της συνεργασίας.",
    "leader.kicker": "ΔΙΟΙΚΗΣΗ", "leader.title": "Ποιος βρίσκεται πίσω από τη δομή.", "leader.text": "Η Workcenterresolve λειτουργεί με καθαρή ευθύνη και ένα σταθερό σημείο αναφοράς για κάθε συνεργασία.", "leader.role": "Διευθύνων Σύμβουλος (CEO)", "leader.name": "[Ονοματεπώνυμο CEO]", "leader.bio": "Ηγείται της στρατηγικής και της καθημερινής λειτουργίας της Workcenterresolve, με ευθύνη για την ποιότητα των συνεργασιών και την εξέλιξη των υπηρεσιών και των έξι τομέων.", "leader.focus1": "Στρατηγική & ανάπτυξη", "leader.focus2": "Σχέσεις με πελάτες", "leader.focus3": "Ποιότητα υπηρεσιών", "leader.cta": "Επικοινωνία με τη διοίκηση",
    "process.kicker": "ΑΠΟ ΤΗΝ ΙΔΕΑ ΣΤΗΝ ΠΡΑΞΗ", "process.title": "Κάθε συνεργασία έχει τη δική της διαδρομή.", "process.listen": "Ακούμε", "process.listenText": "Ξεκινάμε από εσάς. Κατανοούμε τον στόχο, τις ανάγκες και τις προτεραιότητές σας.", "process.design": "Σχεδιάζουμε", "process.designText": "Προσδιορίζουμε τον κατάλληλο τομέα, το αντικείμενο και τα βήματα της συνεργασίας.", "process.connect": "Συνδέουμε", "process.connectText": "Συντονίζουμε ανθρώπους, υπηρεσίες και δυνατότητες γύρω από τον κοινό στόχο.", "process.forward": "Προχωράμε", "process.forwardText": "Συμφωνούμε ξεκάθαρα το επόμενο βήμα και διατηρούμε ανοιχτή επικοινωνία.",
    "faq.kicker": "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ", "faq.title": "Όσα χρειάζεστε να γνωρίζετε.",
    "faq.q1": "Τι είναι η Workcenterresolve;", "faq.a1": "Μια ενιαία δομή που συγκεντρώνει έξι τομείς δραστηριότητας — εμπόριο, συμβουλευτική, ανθρώπινο δυναμικό, ακίνητα, εκδηλώσεις και ειδικές υπηρεσίες — κάτω από μία κοινή φιλοσοφία.",
    "faq.q2": "Πώς ξεκινάμε τη συνεργασία;", "faq.a2": "Συμπληρώνετε τη φόρμα επικοινωνίας ή μας τηλεφωνείτε. Συζητάμε τον στόχο σας και προτείνουμε τον κατάλληλο τομέα και τα επόμενα βήματα.",
    "faq.q3": "Δουλεύετε με ιδιώτες και επιχειρήσεις;", "faq.a3": "Ναι. Εξυπηρετούμε τόσο ιδιώτες όσο και επιχειρήσεις, με την ίδια προσοχή στη λεπτομέρεια.",
    "faq.q4": "Πόσο κοστίζουν οι υπηρεσίες;", "faq.a4": "Το κόστος εξαρτάται από το αντικείμενο και το εύρος της συνεργασίας. Μετά την πρώτη συζήτηση λαμβάνετε ξεκάθαρη ενημέρωση.",
    "faq.q5": "Σε ποιες περιοχές δραστηριοποιείστε;", "faq.a5": "Ξεκινάμε από την Ελλάδα, με δυνατότητα συνεργασίας και σε απομακρυσμένα έργα. Επικοινωνήστε μαζί μας για να το συζητήσουμε.",
    "contact.kicker": "Η ΕΠΟΜΕΝΗ ΣΥΝΔΕΣΗ", "contact.title": "Ο δικός σας στόχος.<br>Η επόμενή μας συζήτηση.", "contact.text": "Είτε αναζητάτε μια υπηρεσία, είτε θέλετε να συζητήσετε μια συνεργασία, η αρχή είναι απλή.",
    "contact.phone": "Τηλέφωνο", "contact.email": "Email", "contact.hours": "Απαντάμε συνήθως εντός μίας εργάσιμης ημέρας.",
    "contact.privacy": "Τα στοιχεία σας χρησιμοποιούνται αποκλειστικά για την απάντηση στο αίτημά σας. Δεν κοινοποιούνται σε τρίτους.",
    "form.name": "Ονοματεπώνυμο", "form.email": "Email", "form.phone": "Τηλέφωνο (προαιρετικό)", "form.area": "Τομέας ενδιαφέροντος", "form.choose": "Επιλέξτε τομέα", "form.message": "Πώς μπορούμε να σας βοηθήσουμε;", "form.consent": "Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου αποκλειστικά για την εξέταση και απάντηση στο αίτημά μου.", "form.submit": "Ας κάνουμε την αρχή", "form.note": "Η φόρμα ανοίγει το προεπιλεγμένο πρόγραμμα email της συσκευής σας. Δεν αποστέλλονται δεδομένα σε διακομιστή.",
    "form.errRequired": "Συμπληρώστε όλα τα υποχρεωτικά πεδία.", "form.errEmail": "Ελέγξτε τη διεύθυνση email.", "form.errConsent": "Απαιτείται η συγκατάθεσή σας για να προχωρήσουμε.", "form.errBlocked": "Το αίτημα απορρίφθηκε για λόγους ασφαλείας.", "form.ok": "Ανοίγει το πρόγραμμα email σας…",
    "footer.tag": "Έξι τομείς. Ένας συνεργάτης.", "footer.top": "Επιστροφή στην κορυφή ↑", "noscript": "Για πλήρη λειτουργία (γλώσσα, θέμα, φόρμα) χρειάζεται JavaScript. Η βασική πληροφόρηση είναι διαθέσιμη χωρίς αυτό."
  },
  en: {
    "a11y.skip": "Skip to content",
    "nav.services": "Services", "nav.story": "Our story", "nav.leader": "Leadership", "nav.process": "Journey", "nav.faq": "FAQ", "nav.contact": "Let's talk",
    "hero.kicker": "MANY FIELDS. ONE PARTNER.", "hero.line1": "Six fields.", "hero.line2": "One partner.", "hero.line3": "Endless possibilities.",
    "hero.text": "We bring six service fields together under one shared philosophy. One point of contact, clear steps and direct communication.",
    "hero.cta1": "See our services", "hero.cta2": "Discuss your project", "hero.scroll": "SCROLL TO SEE THE SERVICES",
    "badge.one": "One partner", "badge.two": "Six fields", "badge.three": "Reply within one business day",
    "services.kicker": "OUR FIELDS", "services.title": "Six fields. One horizon.", "services.text": "Different expertise, the same attention in every collaboration. Choose the field that fits your project.",
    "svc.trade": "Trade & supply", "svc.tradeText": "Coordinating supplies and products with steady quality, timing and prices without surprises.", "svc.tradePoint1": "Supplier selection", "svc.tradePoint2": "Negotiating terms", "svc.tradePoint3": "Delivery tracking",
    "svc.consulting": "Business consulting", "svc.consultingText": "Strategic thinking for the decisions that shape your company's tomorrow.", "svc.consultingPoint1": "Needs analysis", "svc.consultingPoint2": "Action plan", "svc.consultingPoint3": "Implementation support",
    "svc.people": "People & opportunities", "svc.peopleText": "Connecting people's potential with the real needs of businesses.", "svc.peoplePoint1": "Role analysis", "svc.peoplePoint2": "Candidate assessment", "svc.peoplePoint3": "Onboarding support",
    "svc.property": "Property & spaces", "svc.propertyText": "Care and coordination for the spaces that matter to you or your business.", "svc.propertyPoint1": "Space assessment", "svc.propertyPoint2": "Vendor coordination", "svc.propertyPoint3": "Operations management",
    "svc.events": "Events & experiences", "svc.eventsText": "From the first idea to hosting. Organisation with character and precision.", "svc.eventsPoint1": "Event planning", "svc.eventsPoint2": "Supplier coordination", "svc.eventsPoint3": "Delivery and hosting",
    "svc.special": "Personal & specialist services", "svc.specialText": "Specialised activities with attention to each client's unique needs.", "svc.specialPoint1": "At-home services", "svc.specialPoint2": "Tailored requests", "svc.specialPoint3": "Discretion",
    "story.kicker": "OUR STORY", "story.title": "A journey that rolls.", "story.subtitle": "From the first idea to today's structure — a story in five stops, guided by evolution.",
    "story.ch1Year": "The beginning", "story.ch1Title": "A need that kept repeating", "story.ch1Text": "Our clients found every service from a different supplier, with different rules. We decided to change that.",
    "story.ch2Year": "The connection", "story.ch2Title": "Six fields, one philosophy", "story.ch2Text": "We united six fields with different expertise but shared values: precision, respect and consistency.",
    "story.ch3Year": "The trust", "story.ch3Title": "People first", "story.ch3Text": "Every collaboration starts with a conversation. We listen before we propose and build relationships that last.",
    "story.ch4Year": "The evolution", "story.ch4Title": "Adapting to today", "story.ch4Text": "The market changes. We keep evolving our services to meet new needs with modern thinking.",
    "story.ch5Year": "Tomorrow", "story.ch5Title": "A world of possibilities", "story.ch5Text": "We keep growing, adding capabilities and partnerships — always guided by each client's goal.",
    "values.kicker": "WHY US", "values.title": "Steady values, clear communication.",
    "values.oneTitle": "One partner", "values.oneText": "Six fields under one shared philosophy and a single point of contact for you.",
    "values.twoTitle": "Attention to detail", "values.twoText": "We listen first, understand your needs, and then propose a solution.",
    "values.threeTitle": "Clear steps", "values.threeText": "Clear planning and open communication at every stage of the collaboration.",
    "leader.kicker": "LEADERSHIP", "leader.title": "Who stands behind the structure.", "leader.text": "Workcenterresolve operates with clear accountability and one steady point of reference for every collaboration.", "leader.role": "Chief Executive Officer (CEO)", "leader.name": "[CEO full name]", "leader.bio": "Leads the strategy and day-to-day operation of Workcenterresolve, accountable for the quality of collaborations and the evolution of services across all six fields.", "leader.focus1": "Strategy & growth", "leader.focus2": "Client relationships", "leader.focus3": "Service quality", "leader.cta": "Contact leadership",
    "process.kicker": "FROM IDEA TO ACTION", "process.title": "Every collaboration has its own journey.", "process.listen": "We listen", "process.listenText": "We start with you, your goal, needs and priorities.", "process.design": "We design", "process.designText": "We identify the right field, scope and next steps.", "process.connect": "We connect", "process.connectText": "We coordinate people, services and possibilities around the common goal.", "process.forward": "We move forward", "process.forwardText": "We agree on the next step and keep communication open.",
    "faq.kicker": "FREQUENTLY ASKED QUESTIONS", "faq.title": "Everything you need to know.",
    "faq.q1": "What is Workcenterresolve?", "faq.a1": "A single structure bringing together six areas of activity — trade, consulting, people, property, events and specialist services — under one shared philosophy.",
    "faq.q2": "How do we get started?", "faq.a2": "Fill in the contact form or call us. We discuss your goal and propose the right field and next steps.",
    "faq.q3": "Do you work with individuals and businesses?", "faq.a3": "Yes. We serve both individuals and businesses with the same attention to detail.",
    "faq.q4": "How much do services cost?", "faq.a4": "Cost depends on the scope and the type of collaboration. After the first conversation you receive clear information.",
    "faq.q5": "Where do you operate?", "faq.a5": "We start from Greece, with the option of remote collaboration for projects. Contact us to discuss it.",
    "contact.kicker": "THE NEXT CONNECTION", "contact.title": "Your goal.<br>Our next conversation.", "contact.text": "Whether you need a service or want to discuss a collaboration, the beginning is simple.",
    "contact.phone": "Phone", "contact.email": "Email", "contact.hours": "We usually reply within one business day.",
    "contact.privacy": "Your details are used only to respond to your request. They are not shared with third parties.",
    "form.name": "Full name", "form.email": "Email", "form.phone": "Phone (optional)", "form.area": "Field of interest", "form.choose": "Choose a field", "form.message": "How can we help?", "form.consent": "I agree that my details may be used only to review and respond to my request.", "form.submit": "Start the conversation", "form.note": "The form opens your device's default email app. No data is sent to a server.",
    "form.errRequired": "Please fill in all required fields.", "form.errEmail": "Please check your email address.", "form.errConsent": "Your consent is required to proceed.", "form.errBlocked": "The request was rejected for security reasons.", "form.ok": "Opening your email app…",
    "footer.tag": "Six fields. One partner.", "footer.top": "Back to top ↑", "noscript": "JavaScript is required for full functionality (language, theme, form). The core information is available without it."
  }
};

const CANONICAL_ORIGIN = "https://gochag421-beep.github.io";
const MAX_NAME = 80, MAX_EMAIL = 120, MAX_PHONE = 30, MAX_MSG = 1200;

let currentLang = "el";

function setLang(lang, { persist = true } = {}) {
  if (!translations[lang]) lang = "el";
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(translations[lang], key)) {
      el.textContent = translations[lang][key];
    }
  });
  // headings with intended <br> markup
  $$("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (Object.prototype.hasOwnProperty.call(translations[lang], key)) {
      const parts = String(translations[lang][key]).split("<br>");
      el.textContent = "";
      parts.forEach((part, i) => {
        if (i) el.appendChild(document.createElement("br"));
        el.appendChild(document.createTextNode(part));
      });
    }
  });
  $$("[data-lang-switch]").forEach(b => {
    const active = b.dataset.langSwitch === lang;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", String(active));
  });
  if (persist) { try { localStorage.setItem("wcr-lang", lang); } catch (e) {} }
  document.title = lang === "el"
    ? "Workcenterresolve — Έξι τομείς, ένας συνεργάτης"
    : "Workcenterresolve — Six fields, one partner";
}

$$("[data-lang-switch]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.langSwitch)));

let savedLang = "el";
try { savedLang = localStorage.getItem("wcr-lang") || "el"; } catch (e) {}
const urlLang = new URLSearchParams(location.search).get("lang");
setLang(translations[urlLang] ? urlLang : savedLang, { persist: false });

/* Theme */
const themeBtn = $("#themeBtn");
function applyTheme(theme) {
  const t = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("wcr-theme", t); } catch (e) {}
  const meta = $("meta[name='theme-color']");
  if (meta) meta.setAttribute("content", t === "light" ? "#f4f6fa" : "#0b1220");
  if (themeBtn) themeBtn.setAttribute("aria-pressed", t === "light" ? "true" : "false");
}
let savedTheme = "dark";
try { savedTheme = localStorage.getItem("wcr-theme") || "dark"; } catch (e) {}
applyTheme(savedTheme);
themeBtn?.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
});

/* Mobile menu */
const menuBtn = $("#menuBtn"), mobileMenu = $("#mobileMenu");
menuBtn?.addEventListener("click", () => {
  const open = !mobileMenu.classList.contains("open");
  mobileMenu.classList.toggle("open", open);
  menuBtn.classList.toggle("active", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  mobileMenu.setAttribute("aria-hidden", String(!open));
});
$$(".mobile-menu a").forEach(a => a.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  menuBtn.classList.remove("active");
  menuBtn.setAttribute("aria-expanded", "false");
}));

/* Year */
const yearEl = $("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* Reveal */
const revealEls = $$(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("in"));
}

/* To top */
const toTop = $("#toTop");
toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Rolling story */
const storySection = $("#story");
const storyTrack = $("#storyTrack");
const storyFill = $("#storyRailFill");
const storyLines = $$(".story-line");
let storyMaxRoll = 0;

const clamp01 = v => Math.min(1, Math.max(0, v));

function measureStory() {
  if (!storyTrack) return;
  const inner = storyTrack.parentElement;
  const cs = getComputedStyle(inner);
  const visible = inner.clientWidth - parseFloat(cs.paddingLeft || 0) - parseFloat(cs.paddingRight || 0);
  storyMaxRoll = Math.max(0, storyTrack.scrollWidth - visible);
}

function updateStory() {
  if (!storySection || !storyTrack) return;
  const total = storySection.offsetHeight - innerHeight;
  const progress = total > 0 ? clamp01(-storySection.getBoundingClientRect().top / total) : 0;
  if (reduceMotion) {
    storyTrack.style.transform = "none";
  } else {
    storyTrack.style.transform = `translate3d(${(-progress * storyMaxRoll).toFixed(1)}px,0,0) rotateY(${(cam.x * 2.5).toFixed(2)}deg)`;
  }
  if (storyFill) storyFill.style.height = `${(progress * 100).toFixed(1)}%`;
  const idx = Math.min(storyLines.length - 1, Math.round(progress * (storyLines.length - 1)));
  storyLines.forEach((line, i) => line.classList.toggle("active", i === idx));
}

/* 3D camera */
const scene = $(".scene");
const hub = $(".hub");
const cam = { tx: 0, ty: 0, x: 0, y: 0 };

if (!reduceMotion) {
  window.addEventListener("mousemove", (e) => {
    cam.tx = (e.clientX / innerWidth - .5) * 2;
    cam.ty = (e.clientY / innerHeight - .5) * 2;
  }, { passive: true });
  window.addEventListener("mouseout", (e) => { if (!e.relatedTarget) { cam.tx = 0; cam.ty = 0; } }, { passive: true });

  const sceneLayers = $$(".scene-layer");
  (function cameraLoop() {
    cam.x += (cam.tx - cam.x) * 0.07;
    cam.y += (cam.ty - cam.y) * 0.07;
    const y = scrollY;
    if (scene) scene.style.transform = `rotateY(${(-cam.x * 4).toFixed(2)}deg) rotateX(${(cam.y * 3).toFixed(2)}deg)`;
    sceneLayers.forEach((layer) => {
      const d = Number(layer.dataset.depth || 0.1);
      layer.style.transform = `translate3d(${(cam.x * 110 * d).toFixed(1)}px,${(-y * d * 0.4 + cam.y * 110 * d).toFixed(1)}px,${(-d * 240).toFixed(1)}px)`;
    });
    if (hub) hub.style.transform = `rotateY(${(cam.x * 16).toFixed(2)}deg) rotateX(${(-cam.y * 12).toFixed(2)}deg) translateZ(0)`;
    updateStory();
    requestAnimationFrame(cameraLoop);
  })();
}

const header = $(".site-header");
window.addEventListener("scroll", () => {
  const y = scrollY;
  if (!reduceMotion) {
    $$(".deity-card,.service-card").forEach((card) => {
      const depth = Number(card.dataset.depth || 1);
      const rect = card.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - innerHeight / 2;
      card.style.setProperty("--tilt", `${Math.max(-14, Math.min(14, -center * .01 * depth))}px`);
    });
  }
  const max = document.documentElement.scrollHeight - innerHeight;
  const bar = $("#progress");
  if (bar) bar.style.width = `${max ? (y / max) * 100 : 0}%`;
  if (toTop) { const show = y > 700; toTop.hidden = !show; toTop.classList.toggle("show", show); }
  if (header) header.classList.toggle("scrolled", y > 8);
  updateStory();
}, { passive: true });

measureStory();
updateStory();
window.addEventListener("resize", () => { measureStory(); updateStory(); }, { passive: true });
window.addEventListener("load", () => { measureStory(); updateStory(); });

/* Contact form — client-side hardening only; mailto (no server, no storage) */
/* Deliberate hardening:
   - no innerHTML anywhere in this file (no XSS sinks)
   - strict per-field length caps
   - control-char + CR/LF stripping to prevent mail-header injection
   - honeypot field and submission-timing check (bot mitigation)
   - URL-encoded mailto payload
   - no external requests / no credentials (see CSP) */
const form = $("#contactForm");
const formLoadedAt = Date.now();

function clean(v, max) {
  return String(v == null ? "" : v)
    .replace(/[\u0000-\u001F\u007F]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const t = translations[currentLang];
  const errEl = $("#formError");
  const setError = (msg) => {
    if (!errEl) return;
    errEl.textContent = msg;
    const first = form.querySelector("[required]:invalid, [name][aria-invalid='true']");
    if (first && first.focus) first.focus();
  };

  const fd = new FormData(form);

  // Honeypot
  if (String(fd.get("company") || "").trim() !== "") return setError(t["form.errBlocked"]);
  // Timing (submitted impossibly fast)
  if (Date.now() - formLoadedAt < 1500) return setError(t["form.errBlocked"]);

  const name = clean(fd.get("name"), MAX_NAME);
  const email = clean(fd.get("email"), MAX_EMAIL);
  const phone = clean(fd.get("phone"), MAX_PHONE);
  const area = clean(fd.get("area"), 60);
  const message = clean(fd.get("message"), MAX_MSG);
  const consent = fd.get("consent");

  if (!name || !email || !area || !message) return setError(t["form.errRequired"]);
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) return setError(t["form.errEmail"]);
  if (phone && !/^[0-9+()\-.\s]{6,30}$/.test(phone)) return setError(t["form.errRequired"]);
  if (!consent) return setError(t["form.errConsent"]);
  if (errEl) errEl.textContent = t["form.ok"];

  const subject = encodeURIComponent(`Workcenterresolve — ${area}`.slice(0, 120));
  const lines = [
    `${t["form.name"]}: ${name}`,
    `${t["form.email"]}: ${email}`,
    phone ? `${t["form.phone"]}: ${phone}` : null,
    `${t["form.area"]}: ${area}`,
    "",
    message
  ].filter(Boolean).join("\n");
  const body = encodeURIComponent(lines);

  window.location.href = `mailto:workcenterresolve@gmail.com?subject=${subject}&body=${body}`;
});

/* Single-open FAQ */
$$(".faq-item").forEach(item => item.addEventListener("toggle", () => {
  if (item.open) $$(".faq-item").forEach(o => { if (o !== item) o.open = false; });
}));
