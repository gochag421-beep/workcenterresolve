const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

const translations = {
  el: {
    "a11y.skip": "Μετάβαση στο περιεχόμενο",
    "nav.world": "Ο κόσμος μας", "nav.domains": "Δραστηριότητες", "nav.process": "Διαδρομή", "nav.faq": "Συχνές ερωτήσεις", "nav.contact": "Ας μιλήσουμε",
    "hero.kicker": "ΕΜΠΝΕΥΣΗ ΑΠΟ ΤΟ ΧΘΕΣ. ΟΡΑΜΑ ΓΙΑ ΤΟ ΑΥΡΙΟ.", "hero.line1": "Πολλοί κόσμοι.", "hero.line2": "Μία δύναμη.", "hero.line3": "Απεριόριστες δυνατότητες.",
    "hero.text": "Ενώνουμε ανθρώπους, επιχειρήσεις και ιδέες. Δημιουργούμε συνδέσεις που ανοίγουν νέους ορίζοντες.",
    "hero.cta1": "Ανακαλύψτε τον κόσμο μας", "hero.cta2": "Συζητήστε την ιδέα σας", "hero.scroll": "ΚΥΛΗΣΤΕ ΚΑΙ ΑΚΟΛΟΥΘΗΣΤΕ ΤΗ ΔΙΑΔΡΟΜΗ",
    "badge.one": "Ένας συνεργάτης", "badge.two": "Έξι τομείς", "badge.three": "Άμεση επικοινωνία",
    "world.kicker": "Ο ΚΟΣΜΟΣ ΜΑΣ", "world.title": "Η δύναμη βρίσκεται στη σύνδεση.", "world.text": "Στη μυθολογία, κάθε θεότητα εξέφραζε μια ξεχωριστή δύναμη. Μαζί, δημιουργούσαν έναν ολόκληρο κόσμο. Στη Workcenterresolve, διαφορετικοί τομείς συναντιούνται κάτω από μια κοινή φιλοσοφία.",
    "domains.kicker": "ΤΟΜΕΙΣ ΔΡΑΣΗΣ", "domains.title": "Έξι κόσμοι. Κοινός ορίζοντας.", "domains.text": "Διαφορετική εξειδίκευση. Η ίδια προσοχή σε κάθε συνεργασία.",
    "domain.trade": "Εμπόριο & προμήθειες", "domain.consulting": "Επιχειρηματική συμβουλευτική", "domain.people": "Εργασία & ανθρώπινο δυναμικό", "domain.property": "Ακίνητα & χώροι", "domain.events": "Εκδηλώσεις & εμπειρίες", "domain.special": "Προσωπικές & ειδικές υπηρεσίες",
    "domain.tradeText": "Ένα ευρύ φάσμα προϊόντων. Μία ενιαία προσέγγιση στις ανάγκες σας.", "domain.consultingText": "Στρατηγική σκέψη για τις αποφάσεις που διαμορφώνουν το αύριο.", "domain.peopleText": "Συνδέουμε τις δυνατότητες των ανθρώπων με τις ανάγκες των επιχειρήσεων.", "domain.propertyText": "Φροντίδα και οργάνωση για τους χώρους που έχουν αξία για εσάς.", "domain.eventsText": "Από την πρώτη ιδέα έως τη φιλοξενία. Στιγμές με προσωπικότητα.", "domain.specialText": "Εξειδικευμένες δραστηριότητες με προσοχή στις ιδιαίτερες ανάγκες σας.",
    "philosophy.kicker": "Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ", "philosophy.title": "Η σοφία να βλέπεις μπροστά.<br>Η τόλμη να προχωράς.", "philosophy.tag": "ΑΡΧΑΙΕΣ ΑΞΙΕΣ. ΣΥΓΧΡΟΝΗ ΣΚΕΨΗ.",
    "values.kicker": "ΓΙΑΤΙ ΕΜΑΣ", "values.title": "Σταθερές αξίες, καθαρή επικοινωνία.",
    "values.oneTitle": "Ένας συνεργάτης", "values.oneText": "Έξι διαφορετικοί τομείς κάτω από μία ενιαία φιλοσοφία και ένα σημείο επαφής.",
    "values.twoTitle": "Προσοχή στη λεπτομέρεια", "values.twoText": "Ακούμε πρώτα, κατανοούμε τις ανάγκες σας και μετά προτείνουμε λύση.",
    "values.threeTitle": "Καθαρά βήματα", "values.threeText": "Ξεκάθαρος σχεδιασμός και ανοιχτή επικοινωνία σε κάθε στάδιο της συνεργασίας.",
    "process.kicker": "ΑΠΟ ΤΗΝ ΙΔΕΑ ΣΤΗΝ ΠΡΑΞΗ", "process.title": "Κάθε συνεργασία έχει τη δική της διαδρομή.", "process.listen": "Ακούμε", "process.listenText": "Ξεκινάμε από εσάς. Κατανοούμε τον στόχο, τις ανάγκες και τις προτεραιότητές σας.", "process.design": "Σχεδιάζουμε", "process.designText": "Προσδιορίζουμε τον κατάλληλο τομέα, το αντικείμενο και τα βήματα της συνεργασίας.", "process.connect": "Συνδέουμε", "process.connectText": "Συντονίζουμε ανθρώπους, υπηρεσίες και δυνατότητες γύρω από τον κοινό στόχο.", "process.forward": "Προχωράμε", "process.forwardText": "Συμφωνούμε ξεκάθαρα το επόμενο βήμα και διατηρούμε ανοιχτή επικοινωνία.",
    "faq.kicker": "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ", "faq.title": "Όσα χρειάζεστε να γνωρίζετε.",
    "faq.q1": "Τι είναι η Workcenterresolve;", "faq.a1": "Μια ενιαία δομή που συγκεντρώνει έξι τομείς δραστηριότητας — εμπόριο, συμβουλευτική, ανθρώπινο δυναμικό, ακίνητα, εκδηλώσεις και ειδικές υπηρεσίες — κάτω από μία κοινή φιλοσοφία.",
    "faq.q2": "Πώς ξεκινάμε τη συνεργασία;", "faq.a2": "Συμπληρώνετε τη φόρμα επικοινωνίας ή μας τηλεφωνείτε. Συζητάμε τον στόχο σας και προτείνουμε τον κατάλληλο τομέα και τα επόμενα βήματα.",
    "faq.q3": "Δουλεύετε με ιδιώτες και επιχειρήσεις;", "faq.a3": "Ναι. Εξυπηρετούμε τόσο ιδιώτες όσο και επιχειρήσεις, με την ίδια προσοχή στη λεπτομέρεια.",
    "faq.q4": "Πόσο κοστίζουν οι υπηρεσίες;", "faq.a4": "Το κόστος εξαρτάται από το αντικείμενο και το εύρος της συνεργασίας. Μετά την πρώτη συζήτηση λαμβάνετε ξεκάθαρη ενημέρωση.",
    "faq.q5": "Σε ποιες περιοχές δραστηριοποιείστε;", "faq.a5": "Ξεκινάμε από την Ελλάδα, με δυνατότητα συνεργασίας και σε απομακρυσμένα έργα. Επικοινωνήστε μαζί μας για να το συζητήσουμε.",
    "contact.kicker": "Η ΕΠΟΜΕΝΗ ΣΥΝΔΕΣΗ", "contact.title": "Ο δικός σας στόχος.<br>Η επόμενή μας συζήτηση.", "contact.text": "Είτε αναζητάτε μια υπηρεσία, είτε θέλετε να συζητήσετε μια συνεργασία, η αρχή είναι απλή.",
    "contact.phone": "Τηλέφωνο", "contact.email": "Email", "contact.hours": "Απαντάμε συνήθως εντός μίας εργάσιμης ημέρας.",
    "form.name": "Ονοματεπώνυμο", "form.email": "Email", "form.area": "Τομέας ενδιαφέροντος", "form.choose": "Επιλέξτε τομέα", "form.message": "Πώς μπορούμε να σας βοηθήσουμε;", "form.consent": "Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου αποκλειστικά για την εξέταση και απάντηση στο αίτημά μου.", "form.submit": "Ας κάνουμε την αρχή", "form.note": "Η φόρμα ανοίγει το προεπιλεγμένο πρόγραμμα email της συσκευής σας. Δεν αποθηκεύει στοιχεία σε server.",
    "form.errRequired": "Συμπληρώστε όλα τα υποχρεωτικά πεδία.", "form.errEmail": "Ελέγξτε τη διεύθυνση email.", "form.errConsent": "Απαιτείται η συγκατάθεσή σας για να προχωρήσουμε.",
    "footer.tag": "Πολλοί κόσμοι. Μία δύναμη.", "footer.top": "Επιστροφή στην κορυφή ↑"
  },
  en: {
    "a11y.skip": "Skip to content",
    "nav.world": "Our world", "nav.domains": "Activities", "nav.process": "Journey", "nav.faq": "FAQ", "nav.contact": "Let's talk",
    "hero.kicker": "INSPIRED BY THE PAST. BUILT FOR TOMORROW.", "hero.line1": "Many worlds.", "hero.line2": "One force.", "hero.line3": "Endless possibilities.",
    "hero.text": "We connect people, businesses and ideas. We create connections that open new horizons.",
    "hero.cta1": "Discover our world", "hero.cta2": "Discuss your idea", "hero.scroll": "SCROLL AND FOLLOW THE JOURNEY",
    "badge.one": "One partner", "badge.two": "Six areas", "badge.three": "Direct contact",
    "world.kicker": "OUR WORLD", "world.title": "Strength lives in connection.", "world.text": "In mythology, every deity expressed a distinct power. Together, they formed an entire world. At Workcenterresolve, different fields meet under one shared philosophy.",
    "domains.kicker": "AREAS OF ACTIVITY", "domains.title": "Six worlds. One horizon.", "domains.text": "Different expertise. The same attention in every collaboration.",
    "domain.trade": "Trade & supply", "domain.consulting": "Business consulting", "domain.people": "People & opportunities", "domain.property": "Property & spaces", "domain.events": "Events & experiences", "domain.special": "Personal & specialist services",
    "domain.tradeText": "A broad range of products. One unified approach to your needs.", "domain.consultingText": "Strategic thinking for the decisions shaping tomorrow.", "domain.peopleText": "Connecting people's potential with business needs.", "domain.propertyText": "Care and coordination for the spaces that matter to you.", "domain.eventsText": "From the first idea to hosting. Experiences with character.", "domain.specialText": "Specialized activities with attention to unique needs.",
    "philosophy.kicker": "OUR PHILOSOPHY", "philosophy.title": "The wisdom to see ahead.<br>The courage to move forward.", "philosophy.tag": "ANCIENT VALUES. MODERN THINKING.",
    "values.kicker": "WHY US", "values.title": "Steady values, clear communication.",
    "values.oneTitle": "One partner", "values.oneText": "Six different fields under one shared philosophy and a single point of contact.",
    "values.twoTitle": "Attention to detail", "values.twoText": "We listen first, understand your needs, and then propose a solution.",
    "values.threeTitle": "Clear steps", "values.threeText": "Clear planning and open communication at every stage of the collaboration.",
    "process.kicker": "FROM IDEA TO ACTION", "process.title": "Every collaboration has its own journey.", "process.listen": "We listen", "process.listenText": "We start with you, your goal, needs and priorities.", "process.design": "We design", "process.designText": "We identify the right area, scope and next steps.", "process.connect": "We connect", "process.connectText": "We coordinate people, services and possibilities around the common goal.", "process.forward": "We move forward", "process.forwardText": "We agree on the next step and keep communication open.",
    "faq.kicker": "FREQUENTLY ASKED QUESTIONS", "faq.title": "Everything you need to know.",
    "faq.q1": "What is Workcenterresolve?", "faq.a1": "A single structure bringing together six areas of activity — trade, consulting, people, property, events and specialist services — under one shared philosophy.",
    "faq.q2": "How do we get started?", "faq.a2": "Fill in the contact form or call us. We discuss your goal and propose the right area and next steps.",
    "faq.q3": "Do you work with individuals and businesses?", "faq.a3": "Yes. We serve both individuals and businesses with the same attention to detail.",
    "faq.q4": "How much do services cost?", "faq.a4": "Cost depends on the scope and the type of collaboration. After the first conversation you receive clear information.",
    "faq.q5": "Where do you operate?", "faq.a5": "We start from Greece, with the option of remote collaboration for projects. Contact us to discuss it.",
    "contact.kicker": "THE NEXT CONNECTION", "contact.title": "Your goal.<br>Our next conversation.", "contact.text": "Whether you need a service or want to discuss a collaboration, the beginning is simple.",
    "contact.phone": "Phone", "contact.email": "Email", "contact.hours": "We usually reply within one business day.",
    "form.name": "Full name", "form.email": "Email", "form.area": "Area of interest", "form.choose": "Choose an area", "form.message": "How can we help?", "form.consent": "I agree that my details may be used only to review and respond to my request.", "form.submit": "Start the conversation", "form.note": "The form opens your device's default email app. No data is stored on a server.",
    "form.errRequired": "Please fill in all required fields.", "form.errEmail": "Please check your email address.", "form.errConsent": "Your consent is required to proceed.",
    "footer.tag": "Many worlds. One force.", "footer.top": "Back to top ↑"
  }
};

let currentLang = "el";

function setLang(lang) {
  if (!translations[lang]) lang = "el";
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  $$("[data-lang-switch]").forEach(b => {
    const active = b.dataset.langSwitch === lang;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", String(active));
  });
  try { localStorage.setItem("wcr-lang", lang); } catch (e) {}
  const subj = $("meta[name='og:title']");
  document.title = lang === "el"
    ? "Workcenterresolve — Ένας κόσμος δυνατοτήτων"
    : "Workcenterresolve — A world of possibilities";
}

$$("[data-lang-switch]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.langSwitch)));

let savedLang = "el";
try { savedLang = localStorage.getItem("wcr-lang") || "el"; } catch (e) {}
setLang(savedLang);

/* Theme */
const themeBtn = $("#themeBtn");
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("wcr-theme", theme); } catch (e) {}
  const meta = $("meta[name='theme-color']");
  if (meta) meta.setAttribute("content", theme === "light" ? "#f5f1e8" : "#080d17");
  if (themeBtn) themeBtn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
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

/* Reveal on scroll */
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
if (!reduceMotion) {
  const temple = $(".temple");
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / innerWidth - .5) * 12;
    const y = (e.clientY / innerHeight - .5) * 8;
    if (temple) temple.style.transform = `translate(-50%,-48%) rotateY(${-12 + x}deg) rotateX(${5 - y}deg)`;
  }, { passive: true });
}

window.addEventListener("scroll", () => {
  const y = scrollY;
  if (!reduceMotion) {
    $$(".deity-card").forEach((card) => {
      const depth = Number(card.dataset.depth || 1);
      const rect = card.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - innerHeight / 2;
      card.style.transform = `translate3d(${Math.max(-18, Math.min(18, -center * .012 * depth))}px,0,0)`;
    });
  }
  const max = document.documentElement.scrollHeight - innerHeight;
  const bar = $("#progress");
  if (bar) bar.style.width = `${max ? (y / max) * 100 : 0}%`;
  if (toTop) {
    const show = y > 700;
    toTop.hidden = !show;
    toTop.classList.toggle("show", show);
  }
}, { passive: true });

/* Contact form */
const form = $("#contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const t = translations[currentLang];
  const fd = new FormData(form);
  const errEl = $("#formError");
  const name = (fd.get("name") || "").toString().trim();
  const email = (fd.get("email") || "").toString().trim();
  const area = (fd.get("area") || "").toString();
  const message = (fd.get("message") || "").toString().trim();
  const consent = fd.get("consent");

  const setError = (msg) => { if (errEl) errEl.textContent = msg; };
  if (!name || !email || !area || !message) return setError(t["form.errRequired"]);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError(t["form.errEmail"]);
  if (!consent) return setError(t["form.errConsent"]);
  setError("");

  const subject = encodeURIComponent(`Workcenterresolve — ${area}`);
  const body = encodeURIComponent(
    `${t["form.name"]}: ${name}\n${t["form.email"]}: ${email}\n${t["form.area"]}: ${area}\n\n${t["form.message"]}\n${message}`
  );
  window.location.href = `mailto:workcenterresolve@gmail.com?subject=${subject}&body=${body}`;
});

/* Accordion: single-open behavior */
$$(".faq-item").forEach(item => item.addEventListener("toggle", () => {
  if (item.open) $$(".faq-item").forEach(o => { if (o !== item) o.open = false; });
}));
