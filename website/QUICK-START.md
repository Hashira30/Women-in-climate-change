# 🚀 Quick Start - Démarrage rapide

## En 3 minutes, votre site est prêt !

### 1️⃣ Démarrer le serveur

```bash
cd /Users/hashira/Desktop/Association/website
python3 -m http.server 3000 --bind 127.0.0.1 --directory public
```

Puis ouvrez : **http://localhost:3000** dans votre navigateur

### 2️⃣ Voir le site en action

- ✅ Page d'accueil
- ✅ Page À propos
- ✅ Page Activités
- ✅ Page Contact
- ✅ Navigation responsive
- ✅ Menu mobile

### 3️⃣ Commencer à personnaliser

**Immédiatement :**
1. Modifiez `public/index.html` - Changez les textes
2. Consultez `public/assets/css/styles.css` - La palette WICC du guide est déjà appliquée
3. Testez dans le navigateur (rechargez la page)

**Très bientôt :**
- Lisez [CUSTOMIZATION.md](./CUSTOMIZATION.md) pour respecter la palette et les règles d'usage des logos
- Lisez [README.md](./README.md) pour la structure complète
- Lisez [BEST-PRACTICES.md](./BEST-PRACTICES.md) pour les conseils

## 📁 Structure rapide

```
website/
├── public/                 # Le site (ce qu'on voit)
│   ├── index.html         # Accueil
│   ├── about.html         # À propos
│   ├── activities.html    # Activités
│   ├── contact.html       # Contact
│   └── assets/
│       ├── css/styles.css # Styles et identité WICC
│       ├── js/main.js     # Navigation mobile
│       └── images/        # Logos WICC officiels
└── 📖 Docs (lisez-moi!)
    ├── README.md
    ├── CUSTOMIZATION.md
    ├── BEST-PRACTICES.md
    └── TEMPLATE-COMPONENTS.html
```

## 🎨 Tâches prioritaires

Pour avoir un site fonctionnel rapidement :

- [ ] Compléter l'histoire, les activités et les coordonnées de l'association
- [x] Intégrer les logos officiels fournis
- [ ] Tester sur mobile

## 🔑 Fichiers à modifier en priorité

### Pour changer le contenu
1. `public/index.html` - Textes de la page d'accueil
2. `public/about.html` - Informations sur l'association
3. `public/contact.html` - Coordonnées

### Pour le design
1. `public/assets/css/styles.css` - Couleurs, espacements, polices

### Pour la navigation
1. Tous les fichiers HTML - Mettre à jour les noms et textes

## 💡 Conseils

✅ **Modifiez un élément à la fois et testez**

✅ **Gardez le fichier CSS organisé** (les variables sont en haut)

✅ **Tous les fichiers CSS et JS sont commentés** pour vous guider

✅ **Le site est responsive par défaut** (aucune configuration nécessaire)

## 🆘 Problèmes courants

### Les images ne s'affichent pas
→ Vérifiez le chemin : `assets/images/votre-image.png`

### Le CSS ne s'applique pas
→ Rechargez la page (Ctrl+F5 ou Cmd+Shift+R)

### La navigation mobile ne fonctionne pas
→ Vérifiez que `public/assets/js/main.js` est correctement inclus

### La page de contact n'a pas encore de formulaire
→ Les coordonnées seront ajoutées lorsqu'elles seront confirmées ; un formulaire pourra être intégré ensuite (voir CUSTOMIZATION.md).

## 📚 À lire dans l'ordre

1. **QUICK-START.md** ← Vous êtes ici ! 👈
2. **README.md** - Vue d'ensemble du projet
3. **CUSTOMIZATION.md** - Comment adapter le site
4. **BEST-PRACTICES.md** - Conseils pour réussir

## 🎯 Prochaines étapes

**Demain :** Compléter les informations éditoriales
**Cette semaine :** Ajouter des photos documentaires approuvées
**Mois 1 :** Tester et ajuster selon vos besoins
**Mois 2 :** Lancer et partager !

## 🎉 Vous êtes prêt !

Commencez par modifier `public/index.html` et voyez les changements en live.

Le site évoluera avec vous progressivement.

---

**Besoin d'aide ?** Consultez les fichiers .md ou les commentaires dans le code HTML/CSS !
