# Site Web de l'Association

Un site web moderne, responsive et évolutif pour votre association.

## 🚀 Démarrage rapide

### Prérequis
- Un navigateur web moderne
- Un éditeur de code (VS Code, Sublime Text, etc.)

### Installation locale

1. **Naviguer vers le dossier du projet**
```bash
cd website
```

2. **Démarrer un serveur local**
```bash
python3 -m http.server 3000 --bind 127.0.0.1 --directory public
```

Puis ouvrez `http://localhost:3000` dans votre navigateur. Le serveur ne publie que le dossier `public/`, qui contient les pages et leurs ressources statiques.

## 📁 Structure du projet

```
website/
├── public/                 # Fichiers servis au navigateur
│   ├── index.html         # Page d'accueil
│   ├── about.html         # À propos
│   ├── activities.html    # Activités
│   ├── contact.html       # Contact
│   └── assets/
│       ├── css/styles.css # Styles et variables CSS
│       ├── js/main.js     # JavaScript principal
│       └── images/        # Logos WICC et images approuvées
```

## 🎨 Customisation de l'identité graphique

### Palette WICC

Les couleurs du site suivent le guide de marque WICC :

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

Conserver les proportions, les couleurs et l'espace libre autour des logos officiels.

### Logos

Les logos officiels WICC sont déjà dans `public/assets/images/`. Le logo principal est utilisé dans l'en-tête et l'icône officielle en favicon. Ne pas les étirer, recolorer, recadrer ou décorer avec des ombres et dégradés.

Le guide prévoit un lockup horizontal pour les en-têtes de sites ; seul le logo principal vertical et l'icône étaient fournis avec les ressources disponibles. Le logo principal est donc conservé sans modification jusqu'à réception de la variante horizontale approuvée.

## 📝 Contenu à personnaliser

### Pages principales
- **index.html** : Page d'accueil, mission et appel à l'action
- **about.html** : À propos et présentation de l'association
- **activities.html** : Initiatives et engagements climatiques
- **contact.html** : Localisation connue et coordonnées à compléter après confirmation

### Éléments à remplacer
1. Titre et descriptions de l'association
2. Informations de contact
3. Contenu des sections
4. Noms et rôles de l'équipe
5. Description des projets et activités
6. Événements et calendrier

## 🔧 Fonctionnalités actuelles

- ✅ Navigation responsive
- ✅ Menu mobile/hamburger
- ✅ Design responsive (fonctionne sur tous les appareils)
- ✅ Page de contact sans coordonnées inventées
- ✅ Style moderne et propre
- ✅ Facile à customiser
- ✅ Performance optimisée

## 🚀 Évolutions futures

Vous pouvez ajouter :
- [ ] Blog/Actualités
- [ ] Galerie photos
- [ ] Adhésion en ligne
- [ ] Système de newsletter
- [ ] Intégration réseaux sociaux
- [ ] Backend pour gérer les formulaires
- [ ] Système de commentaires
- [ ] Espace membre

## 💾 Conseils de maintenance

1. **Sauvegarder régulièrement** votre travail
2. **Tester sur mobiles** pendant le développement
3. **Vérifier les liens** avant de publier
4. **Garder le code organisé** avec commentaires
5. **Documenter les modifications**

## 🌐 Déploiement

Pour publier votre site, vous pouvez utiliser :
- **Netlify** (gratuit et facile)
- **GitHub Pages**
- **Un hébergeur web classique**

## 📱 Responsive Design

Le site est conçu pour fonctionner parfaitement sur :
- 📱 Téléphones (320px - 480px)
- 📱 Tablettes (481px - 1024px)
- 💻 Ordinateurs de bureau (1025px+)

## 🎯 Points clés

- **Logo** : Logos WICC officiels fournis et utilisés
- **Couleurs** : Palette définie selon le guide de marque WICC
- **Contenu** : À remplir avec vos informations
- **Flexibilité** : Structure prête pour l'évolution

## 📞 Support

Pour des questions sur le développement web :
- Consultez la documentation CSS
- Testez directement dans le navigateur
- Utilisez les outils de développement (F12)

---

**Prêt à démarrer !** 🎉

Complétez progressivement le contenu ; l'identité graphique et les logos suivent désormais le guide de marque WICC.
