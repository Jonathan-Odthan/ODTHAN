# ODTHAN — Site officiel (HTML / CSS / JS pur)

Site 100% statique. Aucun serveur, aucune base de données, aucune dépendance Node à faire tourner en production — uniquement des fichiers HTML, CSS et JavaScript.

## Structure

```
odthan-static/
├── index.html                  # Accueil
├── services.html
├── creation-entreprise.html
├── site-web.html
├── logo.html
├── identite-visuelle.html
├── a-propos.html
├── faq.html
├── contact.html
├── blog.html                   # Liste des articles
├── blog/
│   ├── comment-creer-une-entreprise-en-haiti.html
│   ├── pourquoi-avoir-un-logo-professionnel.html
│   ├── pourquoi-une-entreprise-a-besoin-dun-site-web.html
│   └── les-etapes-pour-lancer-une-entreprise-de-zero.html
├── legal/
│   ├── politique-de-confidentialite.html
│   ├── conditions-utilisation.html
│   └── mentions-legales.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── site.webmanifest
├── favicon.ico / favicon-16.png / favicon-32.png
├── css/styles.css
├── js/main.js
└── images/ (logo + favicons)
```

## Déployer sur GitHub Pages (gratuit)

1. Crée un dépôt GitHub (ex: `odthan-site`)
2. Mets tout le contenu de ce dossier à la racine du dépôt, puis :
   ```bash
   git init
   git add -A
   git commit -m "Site ODTHAN"
   git branch -M main
   git remote add origin https://github.com/<ton-compte>/odthan-site.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Source : branche `main`, dossier `/ (root)`** → Save
4. Ton site sera en ligne sur `https://<ton-compte>.github.io/odthan-site/`
5. (Optionnel) Pour un nom de domaine personnalisé (ex: `www.odthan.com`), ajoute un fichier `CNAME` à la racine contenant juste ton domaine, et configure les DNS chez ton registrar vers GitHub Pages.

Ça marche aussi tel quel sur **Netlify** ou **Vercel** : glisser-déposer ce dossier suffit, aucune configuration de build nécessaire (site déjà 100% statique).

## Formulaire de contact — activer l'envoi (Formspree)

Comme il n'y a pas de serveur, le formulaire de contact utilise **Formspree** (service gratuit qui reçoit les soumissions et te les envoie par email) :

1. Crée un compte gratuit sur [formspree.io](https://formspree.io)
2. Crée un nouveau formulaire, connecté à **odthanempire@gmail.com**
3. Formspree te donne une URL du type `https://formspree.io/f/xxxxxxx`
4. Ouvre `contact.html`, cherche la ligne :
   ```html
   <form id="contact-form" method="POST" action="https://formspree.io/f/VOTRE_ID_FORMSPREE" ...>
   ```
5. Remplace `VOTRE_ID_FORMSPREE` par ton vrai identifiant Formspree

Le formulaire fonctionne déjà pleinement côté design : validation des champs, message de succès/erreur, champ anti-spam caché (honeypot `_gotcha`, reconnu nativement par Formspree). Tant que l'ID Formspree n'est pas configuré, la soumission affichera un message d'erreur — c'est normal, il suffit de suivre les 5 étapes ci-dessus. En attendant, le bouton WhatsApp reste toujours disponible comme alternative directe.

**Alternative sans Formspree :** si tu préfères, tu peux aussi transformer le formulaire en simple lien `mailto:` (moins pro, pas de validation, mais zéro configuration) — dis-le-moi si tu veux cette version à la place.

## Informations déjà configurées

- **WhatsApp / téléphone :** 509 5556 1461
- **Email :** odthanempire@gmail.com
- **Facebook / Instagram :** liens en `#` en attendant que tu les ajoutes toi-même (cherche `href="#"` dans `js` non, dans les fichiers `.html` — en fait ils sont injectés automatiquement dans le footer de chaque page ; remplace `#` par tes vraies URLs directement dans chaque fichier `.html`, ou dis-moi les liens et je régénère tout le site en un coup)

## Google Analytics / Search Console

Le site n'a pas encore Google Analytics ni la balise de vérification Search Console (elles nécessitaient auparavant un `.env`, qui n'existe plus dans une version 100% statique). Si tu veux les ajouter :
- **Analytics :** colle le script `gtag.js` fourni par Google Analytics juste avant `</head>` dans chaque page (ou dis-moi ton ID `G-XXXXXXXXXX`, je le génère automatiquement dans toutes les pages)
- **Search Console :** ajoute la balise meta de vérification fournie par Google dans le `<head>` de `index.html`

## Modifier le contenu

Comme il n'y a pas de base de données, toute modification se fait directement dans les fichiers `.html` avec un éditeur de texte. Pour ajouter un article de blog, duplique un fichier existant dans `blog/`, modifie le contenu, et ajoute un lien vers lui dans `blog.html` et dans `sitemap.xml`.
