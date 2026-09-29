# Workcenterresolve

Στατικός ιστότοπος για τη **Workcenterresolve — Έξι τομείς, ένας συνεργάτης**.

Ενιαία παρουσίαση έξι τομέων δραστηριότητας κάτω από μία κοινή φιλοσοφία.
Χωρίς backend, χωρίς εξαρτήσεις, χωρίς τρίτα scripts — έτοιμο για GitHub Pages.

## Χαρακτηριστικά
- Δίγλωσσο περιβάλλον **Ελληνικά / Αγγλικά (EL/EN)** με αποθήκευση προτίμησης και `?lang=en`.
- **Φωτεινή / σκοτεινή προβολή** με αποθήκευση προτίμησης.
- Πλήρως **responsive** (κινητό, tablet, desktop) + mobile menu.
- **Προσβασιμότητα**: skip link, aria attributes, focus states, `prefers-reduced-motion`, σημασιολογικές ενότητες.
- Ενότητες: Hero, **Υπηρεσίες (6 τομείς)**, **Η ιστορία (rolling story)**, Αξίες, **Διοίκηση (CEO)**, Διαδρομή, Συχνές ερωτήσεις, Επικοινωνία.
- **3D φόντο βάθους** με parallax κινούμενης κάμερας (mouse-move σε X/Y/Z + scroll, τρία στρώματα βάθους).
- **3D κινούμενη κάμερα**: το ποντίκι γέρνει το φόντο, τον «κόμβο» των έξι τομέων και το rolling story.
- **Rolling story**: οριζόντια κύλιση πέντε σταθμών από το κάθετο scroll, με ράγα προόδου και ενεργό κεφάλαιο.
- Φόρμα επικοινωνίας που ανοίγει το πρόγραμμα email του χρήστη (`mailto`) — κανένα δεδομένο δεν αποστέλλεται ή αποθηκεύεται.

## Ασφάλεια
- **Content-Security-Policy** σε κάθε σελίδα: `default-src 'none'`, `script-src 'self'`, `style-src 'self'`,
  `form-action 'none'`, `object-src 'none'`, `frame-src 'none'`, `base-uri 'none'`, `upgrade-insecure-requests`.
- **Καμία εξωτερική εξάρτηση**: χωρίς CDN, web fonts, analytics ή trackers. Καμία εξερχόμενη κλήση.
- **Χωρίς XSS sinks**: το `app.js` δεν χρησιμοποιεί `innerHTML`, `eval` ή `document.write`.
  Οι μεταφράσεις εφαρμόζονται με `textContent`.
- **Θωράκιση φόρμας (client-side)**: honeypot πεδίο, έλεγχος χρόνου υποβολής,
  αυστηρά όρια μήκους ανά πεδίο, αφαίρεση control chars/CR-LF (προστασία από email header injection),
  URL-encoded mailto payload.
- `meta referrer = strict-origin-when-cross-origin`, δηλωμένο `security.txt`.
- Πολιτική αναφοράς ευπαθειών: `.well-known/security.txt`.

## SEO
- Πλήρες `<head>`: title, description, keywords, robots, canonical, `hreflang` (el/en/x-default).
- **Open Graph + Twitter Cards** με δηλωμένη εικόνα.
- **Structured data (JSON-LD)**: `Organization` + `WebSite` + `Service`/`OfferCatalog` + `FAQPage`.
- `robots.txt`, `sitemap.xml` (με hreflang alternates), `site.webmanifest`.

## Δομή αρχείων
```
index.html                 — κύρια σελίδα
404.html                   — σελίδα σφάλματος
assets/style.css           — όλη η σχεδίαση
assets/app.js              — γλώσσα, θέμα, μενού, 3D κάμερα, story, φόρμα
assets/favicon.svg         — εικονίδιο (κόμβος έξι τομέων)
assets/og.svg              — εικόνα κοινωνικών δικτύων
data/activities.json       — λίστα τομέων
robots.txt                 — οδηγίες crawlers
sitemap.xml                — χάρτης ιστοτόπου
site.webmanifest           — metadata εφαρμογής
.well-known/security.txt   — πολιτική ασφαλείας
.nojekyll                  — συμβατότητα με GitHub Pages
```

## Τοπική προβολή
```bash
python -m http.server 8080
```
Έπειτα άνοιξε: `http://localhost:8080`

## Δημοσίευση στο GitHub Pages
1. Ανέβασε όλα τα αρχεία στο repository (branch `main`).
2. **Settings → Pages → Deploy from a branch → `main` / `(root)` → Save**.

## Φόρμα επικοινωνίας
Ανοίγει το προεπιλεγμένο πρόγραμμα email με προετοιμασμένο μήνυμα προς `workcenterresolve@gmail.com`.
Δεν απαιτείται backend και δεν αποθηκεύονται δεδομένα.

## Διοίκηση
Η ενότητα «Διοίκηση» περιέχει θέση για το όνομα του CEO, το οποίο είναι **placeholder**
(`[Ονοματεπώνυμο CEO]` / `[CEO full name]`) στο `index.html`, στο `assets/app.js`
και στο JSON-LD. Αντικαταστήστε το με το πραγματικό όνομα.

## Επικοινωνία
- Τηλέφωνο: +30 693 201 3252
- Email: workcenterresolve@gmail.com
