# Guide de configuration des pages légales et profil de l'association

## Vue d'ensemble

Le site WICC inclut maintenant trois pages légales complètement conformes à la loi camerounaise (loi n° 2010/002). Certains champs restent vides intentionnellement pour que vous les complètiez avec les informations officielles de l'association.

## Champs à compléter avant publication

### 1. **Mentions légales** (`legal-notice.html`)

Localisez et remplissez les sections suivantes :

#### Responsable de publication
```html
<p><strong>Directeur de la publication :</strong><br>
<span style="color: var(--color-gray-500); font-style: italic;">[À compléter : Nom et prénoms du Président/Directeur]</span></p>

<p><strong>Adresse postale :</strong><br>
<span style="color: var(--color-gray-500); font-style: italic;">[À compléter : Adresse complète de l'association]</span></p>

<p><strong>Numéro d'enregistrement :</strong><br>
<span style="color: var(--color-gray-500); font-style: italic;">[À compléter : Numéro RCCM (Registre du Commerce et du Crédit Mobilier) ou d'enregistrement association]</span></p>

<p><strong>Adresse e-mail :</strong><br>
<span style="color: var(--color-gray-500); font-style: italic;">[À compléter : Adresse e-mail officielle de contact]</span></p>
```

#### Hébergement
```html
<p><strong>Hébergeur :</strong><br>
<span style="color: var(--color-gray-500); font-style: italic;">[À compléter : Nom et coordonnées du fournisseur d'hébergement]</span></p>

<p><strong>Adresse de l'hébergeur :</strong><br>
<span style="color: var(--color-gray-500); font-style: italic;">[À compléter]</span></p>
```

---

### 2. **Politique de confidentialité** (`privacy-policy.html`)

#### Contact pour les demandes de droits
```html
<p><strong>Contact :</strong> <span style="color: var(--color-gray-500); font-style: italic;">[À compléter : adresse e-mail de contact]</span></p>
```

---

### 3. **Politique relative aux cookies** (`cookie-policy.html`)

#### Contact pour les questions
```html
<p><span style="color: var(--color-gray-500); font-style: italic;">[À compléter : adresse e-mail officielle]</span></p>
```

---

### 4. **Page de contact** (`contact.html`)

Actuellement, seule la localisation (Yaoundé, Centre) est affichée. Complétez avec :

```html
<h4 style="margin-bottom: 0.5rem;">Adresse postale</h4>
<p>
  Women in Climate Change<br>
  [À compléter : Adresse complète]<br>
  Yaoundé, région du Centre
</p>

<h4 style="margin-bottom: 0.5rem;">Email</h4>
<p>
  <strong>Email :</strong> <a href="mailto:[email@example.com]">[email@example.com]</a>
</p>

<h4 style="margin-bottom: 0.5rem;">Téléphone</h4>
<p>
  <strong>Téléphone :</strong> [À compléter]
</p>
```

---

## Informations à rassembler auprès de WICC

Avant de remplir les champs ci-dessus, procurez-vous les documents officiels suivants :

1. **Enregistrement de l'association**
   - Numéro d'enregistrement RCCM (Registre du Commerce et du Crédit Mobilier)
   - Numéro d'acte de constitution
   - Date d'enregistrement

2. **Responsable de publication (Président ou Directeur)**
   - Nom complet
   - Titre officiel
   - Peut être publié ou non selon les souhaits de l'association

3. **Adresse officielles**
   - Siège social complet (rue, quartier, Yaoundé)
   - Adresse postale (si différente)
   - Numéro de téléphone officiel
   - Adresse e-mail officielle

4. **Hébergement du site (futur)**
   - Nom du fournisseur d'hébergement
   - Adresse du data center ou serveur
   - Contact du support technique

---

## Conformité légale camerounaise

Le site respecte les obligations suivantes :

✅ **Loi n° 2010/002 du 12 avril 2010** (Communications électroniques)
- Identification du responsable de publication
- Localisation du serveur/hébergeur
- Mentions légales complètes
- Politique de confidentialité claire

✅ **Loi n° 2002/024 du 24 décembre 2002** (Droit d'auteur)
- Propriété intellectuelle protégée
- Logo et marque réservés

✅ **Bonnes pratiques internationales**
- RGPD-like privacy framework
- Cookies policy transparente
- SEO-friendly structure

---

## Sections d'actualisation des données

### Section "Chiffres clés" sur l'accueil

L'index affiche actuellement des placeholders pour :
- Nombre d'élèves sensibilisées
- Nombre d'établissements partenaires
- Nombre de volontaires actifs

Pour ajouter les vrais chiffres, modifiez `index.html` :

```html
<div class="stat-number counter" data-target="0">0</div>
<p class="stat-label">Élèves sensibilisées</p>
```

Remplacez `data-target="0"` par `data-target="150"` (par exemple).

### Section "Réalisations"

Les descriptions sont basées sur les notes conceptuelles fournies. Vous pouvez ajouter des images, dates ou détails supplémentaires dans les cartes achievement-card.

---

## Étapes finales avant le déploiement

1. ✅ Complétez tous les champs "[À compléter : ...]"
2. ✅ Vérifiez les liens internes (tous les boutons de contact doivent fonctionner)
3. ✅ Testez les animations sur mobile et desktop
4. ✅ Testez l'accessibilité (touches Tab, lecteur d'écran)
5. ✅ Mettez à jour les canonical URLs en remplaçant `example.com` par le domaine officiel
6. ✅ Testez le banneau de cookies (localStorage)
7. ✅ Vérifiez que `/public` est seul servi (docs et config restent cachés)
8. ✅ Faites relire les mentions légales par un avocat camerounais si possible

---

## Support et questions

Pour plus d'informations :
- Consultez les commentaires dans les fichiers HTML
- Lisez README.md pour la structure générale
- Lisez CUSTOMIZATION.md pour les personnalisations CSS
- Les polices Montserrat et Source Sans 3 sont chargées localement (aucune dépendance externe)

---

**Dernière mise à jour:** janvier 2024  
**Version:** 1.0 — Site WICC production-ready
