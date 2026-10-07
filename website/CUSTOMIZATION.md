# 📋 Guide de Personnalisation

Ce guide vous aidera à adapter le site à votre identité visuelle et vos besoins.

## 🎨 Étape 1 : Respecter la palette WICC

La palette et les logos officiels sont déjà intégrés depuis le guide de marque WICC. Ne remplacez pas les couleurs validées par une autre palette sans nouvelle charte.

Couleurs de référence :

```css
:root {
  --color-primary: #4F9986;
  --color-primary-dark: #246B5E;
  --color-deep-teal: #164E45;
  --color-soft-mint: #EAF4F1;
  --color-warm-sand: #E7D8C5;
  --color-charcoal: #171A19;
}
```

Typographie : Montserrat pour les titres et Source Sans 3 pour le texte, avec les polices de repli prévues dans la feuille de style.

## 🖼️ Étape 2 : Respecter les logos officiels

Les fichiers `public/assets/images/wicc-logo-primary.svg` et `wicc-logo-icon.svg` sont les versions officielles fournies. Le logo principal reste inchangé dans l'en-tête ; l'icône sert de favicon. Gardez les proportions et l'espace libre autour du symbole. N'ajoutez ni ombre, ni dégradé, ni contour, et ne recolorez ou ne recadrez pas les marques. Le guide recommande un lockup horizontal pour le web, mais seul le logo principal vertical et l'icône ont été fournis : utiliser une version horizontale uniquement lorsque la version officielle sera disponible.

## 📝 Étape 3 : Remplir le contenu

### À modifier sur chaque page :

#### **index.html** (Accueil)
- [ ] Titre principal et sous-titre
- [ ] Description de la mission
- [ ] Texte des 3 cartes de la section mission
- [ ] Texte du CTA (Appel à l'action)

#### **about.html** (À propos)
- [ ] Paragraphe "Qui sommes-nous"
- [ ] Historique de l'association
- [ ] Noms et rôles des membres
- [ ] Photos des membres
- [ ] Statistiques clés

#### **activities.html** (Activités)
- [ ] Description des 4 projets principaux
- [ ] Événements à venir (dates, heures, lieux)
- [ ] Icônes personnalisées pour chaque projet

#### **contact.html** (Contact)
- [ ] Adresse complète
- [ ] Numéro de téléphone
- [ ] Adresses email
- [ ] Horaires d'ouverture
- [ ] Intégrer une carte Google Maps

## 🗺️ Étape 4 : Intégrer une carte Google Maps

Dans `public/contact.html`, remplacez la section carte :

```html
<iframe 
  width="100%" 
  height="400" 
  style="border:0; border-radius: 0.75rem;" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade" 
  src="https://www.google.com/maps/embed?pb=...">
</iframe>
```

1. Allez sur [Google Maps Embed](https://www.google.com/maps)
2. Cherchez votre adresse
3. Cliquez sur "Partager"
4. Sélectionnez l'onglet "Intégrer"
5. Copiez le code et collez-le

## 🌐 Étape 5 : Ajouter les coordonnées officielles

La page Contact n'affiche que les coordonnées confirmées. Ajoutez l'adresse e-mail ou le numéro de téléphone officiel de l'association après validation, puis créez les liens correspondants (`mailto:` ou `tel:`).

## 📱 Étape 6 : Ajouter les liens réseaux sociaux

Modifiez le footer pour ajouter des liens :

```html
<div class="footer-section">
  <h3>Suivez-nous</h3>
  <ul style="list-style: none; display: flex; gap: 1rem;">
    <li><a href="https://facebook.com/votreasso">Facebook</a></li>
    <li><a href="https://twitter.com/votreasso">Twitter</a></li>
    <li><a href="https://instagram.com/votreasso">Instagram</a></li>
  </ul>
</div>
```

## 🎯 Étape 7 : Ajouter un formulaire de contact (évolution future)

La page de contact affiche pour l'instant uniquement les coordonnées connues. Après avoir confirmé une adresse e-mail de contact, vous pourrez ajouter un formulaire relié à un service d'envoi.

**Pour l'améliorer, vous pouvez :**

### Option A : Utiliser Formspree (gratuit)
1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte
3. Remplacez dans le formulaire :

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
  <!-- Le reste du formulaire -->
</form>
```

### Option B : Utiliser Netlify Forms (si hébergé sur Netlify)
Ajoutez simplement l'attribut `netlify` au formulaire :

```html
<form name="contact" method="POST" netlify>
  <!-- Le reste du formulaire -->
</form>
```

## 🎬 Étape 8 : Ajouter des images et vidéos

### Créer une galerie simple

Ajoutez dans une section :

```html
<div class="grid grid-3">
  <img src="assets/images/photo1.jpg" alt="Description" style="width: 100%; border-radius: 0.75rem;">
  <img src="assets/images/photo2.jpg" alt="Description" style="width: 100%; border-radius: 0.75rem;">
  <img src="assets/images/photo3.jpg" alt="Description" style="width: 100%; border-radius: 0.75rem;">
</div>
```

### Intégrer une vidéo YouTube

```html
<div style="max-width: 600px; margin: 0 auto; margin-bottom: 2rem;">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" 
    allowfullscreen
    style="border-radius: 0.75rem;">
  </iframe>
</div>
```

## 🧪 Étape 9 : Tester le site

Avant la publication :

- [ ] Vérifier sur **mobile** (Chrome DevTools)
- [ ] Tester tous les **liens**
- [ ] Vérifier les **formulaires**
- [ ] Corriger les **fautes**
- [ ] Charger les **images**

## 🚀 Étape 10 : Déployer

### Déploiement gratuit sur **Netlify** :

1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte
3. Cliquez sur "New site from Git"
4. Connectez votre repo GitHub
5. Définissez le dossier de publication : `website/public`

Votre site sera en ligne automatiquement ! 🎉

### Alternative : **GitHub Pages**

Idéal si votre code est sur GitHub.

## 📚 Ressources utiles

- **Icônes SVG** : [fontawesome.com](https://fontawesome.com)
- **Images gratuites** : [unsplash.com](https://unsplash.com)
- **Palette de couleurs** : [coolors.co](https://coolors.co)
- **Typographie** : [fonts.google.com](https://fonts.google.com)

## ✨ Conseils d'optimisation

1. **Compresser les images** : [tinypng.com](https://tinypng.com)
2. **Vérifier l'accessibilité** : Utiliser WCAG 2.1
3. **Optimiser les performances** : Google PageSpeed Insights
4. **SEO** : Remplir les balises meta et alt

---

**Besoin d'aide ?** Consultez le README.md pour plus d'infos !
