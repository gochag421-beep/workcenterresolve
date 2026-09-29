# Workcenterresolve

Στατικός, φιλικός προς τον χρήστη ιστότοπος για τη **Workcenterresolve — Ένας κόσμος δυνατοτήτων**.

Έξι τομείς δραστηριότητας κάτω από μία κοινή φιλοσοφία. Χωρίς backend, χωρίς εξαρτήσεις — έτοιμο για GitHub Pages.

## Χαρακτηριστικά
- Δίγλωσσο περιβάλλον **Ελληνικά / Αγγλικά** (EL/EN) με αποθήκευση προτίμησης.
- **Φωτεινή / σκοτεινή προβολή** (light/dark) με αποθήκευση προτίμησης.
- Πλήρως **responsive** σχεδίαση (κινητό, tablet, desktop) + mobile menu.
- **Προσβασιμότητα**: skip link, aria attributes, focus states, `prefers-reduced-motion`.
- Ενότητες: Hero, Ο κόσμος μας, **Η ιστορία (rolling story)**, Τομείς, Αξίες, Διαδρομή, Συχνές ερωτήσεις, Επικοινωνία.
- **3D φόντο βάθους** με parallax κινούμενης κάμερας — συνδυασμός **mouse-move** (οριζόντια/κάθετη περιστροφή βάθους με easing) και scroll (τρία στρώματα βάθους).
- **3D κινούμενη κάμερα**: το ποντίκι μετακινεί τα στρώματα σε άξονες X/Y/Z και γέρνει ελαφρώς το rolling story (`rotateY`) και τον ναό του hero.
- **Rolling story**: οριζόντια «κύλιση» πέντε σταθμών οδηγούμενη από το κάθετο scroll, με ράγα προόδου και ενεργό κεφάλαιο.
- Φόρμα επικοινωνίας με **έλεγχο πεδίων** που ανοίγει το email του χρήστη (mailto) — δεν αποθηκεύει δεδομένα.
- Εφέ: scroll progress, reveal animations, parallax, «επιστροφή στην κορυφή».

## Δομή αρχείων
```
index.html          — κύρια σελίδα
404.html            — σελίδα σφάλματος για GitHub Pages
assets/style.css    — όλη η σχεδίαση
assets/app.js       — γλώσσα, θέμα, μενού, φόρμα, animations
assets/favicon.svg  — εικονίδιο
assets/og.svg       — εικόνα κοινωνικών δικτύων
data/activities.json— λίστα τομέων (χωρίς δημόσιους ΚΑΔ)
.nojekyll           — συμβατότητα με GitHub Pages
```

## Τοπική προβολή
Άνοιξε το `index.html` ή τρέξε απλό τοπικό server:

```bash
python -m http.server 8080
```

Έπειτα άνοιξε: `http://localhost:8080`

## Δημοσίευση στο GitHub Pages
1. Ανέβασε όλα τα αρχεία στο repository (branch `main`).
2. **Settings → Pages**.
3. Στο **Build and deployment** διάλεξε **Deploy from a branch**.
4. Branch: `main`, φάκελος: `/ (root)`.
5. **Save**. Το GitHub θα εμφανίσει το δημόσιο URL.

## Φόρμα επικοινωνίας
Η φόρμα ανοίγει το προεπιλεγμένο πρόγραμμα email και προετοιμάζει μήνυμα προς:

`workcenterresolve@gmail.com`

Δεν απαιτείται backend.

## Επικοινωνία
- Τηλέφωνο: +30 693 201 3252
- Email: workcenterresolve@gmail.com

## Σημείωση
Αυτόνομο στατικό πακέτο για φιλοξενία στο GitHub. Δεν εξαρτάται από ChatGPT Sites ή άλλο ιδιόκτητο runtime.
