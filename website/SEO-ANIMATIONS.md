# SEO & Animations — Guide technique

## Optimisations SEO implémentées

### 1. Métadonnées et Open Graph

Chaque page inclut :
- `<title>` descriptif et unique
- `<meta name="description">` (120-160 caractères)
- `<meta name="keywords">` pour le contexte
- `<meta name="author">` pour l'identité
- `<meta property="og:*">` pour les réseaux sociaux (titre, description, type, locale)
- `<link rel="canonical">` pour éviter les doublons (à mettre à jour avec le domaine réel)

**Exemple** (index.html) :
```html
<meta name="description" content="Women in Climate Change (WICC), une association de jeunes femmes engagées dans la lutte contre le changement climatique à Yaoundé...">
<meta property="og:title" content="Women in Climate Change — Femmes engagées, planète sauvée">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_CM">
```

### 2. Structure sémantique

- Utilisation des balises HTML5 appropriées : `<main>`, `<nav>`, `<footer>`, `<section>`
- Hiérarchie correcte des titres (h1 → h2 → h3)
- Pas de sauts de niveaux de titre
- Attributs `aria-*` pour l'accessibilité

### 3. URL canoniques

Toutes les pages incluent une canonical URL :
```html
<link rel="canonical" href="https://example.com/page.html">
```

⚠️ **À faire avant le déploiement :**  
Remplacer `example.com` par le domaine officiel de WICC (par exemple `wicc-cameroon.cm`).

### 4. Favicon et branding

- Favicon configuré avec le logo icon SVG
- `<meta name="theme-color">` avec la couleur primaire (#164E45)
- Cohérence visuelle sur tous les onglets du navigateur

### 5. Hiérarchie du contenu (H1 unique)

Chaque page n'a qu'un seul h1 :
- **index.html** : "Women in Climate Change"
- **about.html** : "À propos de Women in Climate Change"
- **activities.html** : "Nos engagements"
- **contact.html** : "Nous contacter"
- **Pages légales** : "Mentions légales", "Politique de confidentialité", etc.

### 6. Mots-clés pertinents

Les pages ciblent des termes de recherche naturels :
- "climat", "environnement", "femmes", "Yaoundé"
- "association climatique", "développement durable"
- "éducation environnementale"
- "action climatique femmes"

### 7. Temps de chargement optimisé

✅ Pas d'images externes volumineux  
✅ CSS minifié localement  
✅ JavaScript léger et asynchrone (defer)  
✅ Polices de caractères locales (Montserrat, Source Sans 3)  
✅ Aucun CDN externe = moins d'appels réseau  

### 8. Mobile-first responsive design

- Breakpoint : 768px
- Testé sur 390px (mobile), 768px (tablet), 1200px (desktop)
- Navigation mobile (hamburger) pour <768px
- Aucun scroll horizontal

### 9. Vitesse de navigation (Core Web Vitals)

Pour améliorer le LCP (Largest Contentful Paint) :
- Les images critiques sont minimales
- CSS est inline ou peu chargé
- Les animations utilisent CSS (plus rapide que JS)

---

## Animations implémentées

### 1. Architecture CSS

Toutes les animations sont définies avec variables CSS pour la maintenabilité :
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
```

### 2. Animations au chargement

#### Fade-in-up (héro section)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Appliquée au h1, tagline et boutons du héro avec délais (`animation-delay`).

#### Entrée en cascade
```html
<h1 class="fade-in-up">Women in Climate Change</h1>
<p class="hero-tagline fade-in-up" style="animation-delay: 0.2s;">...</p>
<div class="hero-buttons fade-in-up" style="animation-delay: 0.6s;">...</div>
```

### 3. Shapes flottantes (héro)

Deux cercles SVG animés pour ajouter du dynamisme :
```css
.shape {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

Ils disparaissent sur mobile (`display: none`).

### 4. Animations au scroll (Intersection Observer)

#### Fade-in-on-scroll
Les cartes de réalisation (`achievement-card`) et autres éléments s'animent quand ils deviennent visibles :

```javascript
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeInUp var(--transition-slow) ease-out forwards`;
      observer.unobserve(entry.target);
    }
  });
};
```

**Éléments affectés :**
- Cards de réalisations (1, 2, 3, 4 avec délais 0s, 0.1s, 0.2s, 0.3s)
- Cartes de statistiques (hover uniquement)

### 5. Hover effects

#### Cards (mission, réalisations)
```css
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}
```

#### Cartes de statistiques
```css
.stat-card:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-xl);
}
```

#### Achievement cards
```css
.achievement-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
  transform: translateX(8px);
}
```

### 6. Compteur animé (statistiques)

Les nombres augmentent progressivement de 0 à une cible :
```javascript
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'), 10);
  const duration = 2000;
  let current = 0;
  const increment = target / (duration / 50);

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      setTimeout(updateCounter, 50);
    } else {
      element.textContent = target;
    }
  };
  updateCounter();
}
```

Utilisé sur la section chiffres clés :
```html
<div class="stat-number counter" data-target="0">0</div>
```

### 7. Banneau de cookies

Le cookie banner glisse du bas (`slideInUp`) :
```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cookie-banner {
  animation: slideInUp var(--transition-base) ease-out;
}
```

Il se ferme avec une animation inverse après 10 secondes ou au clic du bouton.

### 8. Accessibilité des animations

✅ Respecte les préférences utilisateur `prefers-reduced-motion`  
✅ Animations rapides (150-350ms) = pas de gêne visuelle  
✅ Pas d'animations clignotantes ou stroboscopiques  
✅ Contraste suffisant pour le texte animé  

---

## Performance des animations

### Optimisations appliquées

1. **CSS-only transitions** (pas d'animations JS sauf compteur et scroll)
   - Plus rapide et fluide
   - Pas d'impact sur la batterie mobile

2. **GPU acceleration**
   ```css
   transform: translateY(-8px);  /* Utilise GPU */
   /* Au lieu de : top: -8px; */
   ```

3. **Lazy loading des animations au scroll**
   - Utilise IntersectionObserver
   - Les éléments ne s'animent que si visibles
   - Économise les ressources

4. **Débounce et throttle**
   - Scroll events limitées automatiquement par Intersection Observer
   - Pas de fuites mémoire

### Test de performance recommandé

```bash
# Utiliser Lighthouse (Chrome DevTools)
# Cible : 90+ pour Performance, 95+ pour Accessibility, 100 pour SEO
```

---

## Structure des fichiers d'animation

```
public/
├── assets/
│   ├── css/
│   │   └── styles.css          (↓ 550+ lignes incluant animations)
│   └── js/
│       ├── main.js             (Navigation, forms)
│       └── animations.js       (Scroll, compteur, cookies) ← NOUVEAU
```

---

## Utilisation avancée

### Ajouter une nouvelle animation

1. Définir `@keyframes` dans `styles.css`
2. Créer une classe `.fade-in-on-scroll` ou ajouter `animation-delay`
3. Ajouter la classe à l'HTML
4. (Optionnel) Gérer au scroll dans `animations.js`

### Exemple : Ajouter une slide-in-right

```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right {
  animation: slideInRight var(--transition-slow) ease-out;
}
```

```html
<div class="card slide-in-right">...</div>
```

---

## Cas d'usage future

Si vous ajoutez du contenu dynamique (photos, galerie) :

1. **Lazy loading d'images**
   ```html
   <img src="image.jpg" loading="lazy" alt="...">
   ```

2. **Animations sur les images au scroll**
   ```javascript
   observer.observe(document.querySelector('.gallery-item'));
   ```

3. **Transition page-to-page** (avec HTMX ou autre)
   ```css
   .fade-in-on-page-load {
     animation: fadeIn var(--transition-base) ease-out;
   }
   ```

---

## Validation SEO avant déploiement

Utilisez ces outils gratuits :

- **Google Search Console** : Indexation et erreurs
- **Lighthouse** : Performance et SEO (90+)
- **Mobile-Friendly Test** : Responsive design
- **WAVE** : Accessibilité
- **Schema.org Validator** : Données structurées (optionnel)

### Checklist finale

- [ ] Canonical URLs pointent vers le bon domaine
- [ ] Balises hreflang si contenu multilingue futur
- [ ] Sitemap.xml (généré automatiquement ou manuel)
- [ ] robots.txt pour exclure docs/ et /admin
- [ ] Pas d'erreurs 404 sur les liens internes
- [ ] Animations smooth sur tous les navigateurs
- [ ] Images optimisées (< 100KB pour thumbnails)
- [ ] Polices préchargées si possible
- [ ] CSP (Content Security Policy) configurée si applicable

---

**Dernière mise à jour:** janvier 2024  
**Version:** 1.0 — Production ready  
**Contact:** Voir legal-notice.html pour les coordonnées de l'association
