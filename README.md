# Noctiluque — journal et interprétation de rêves

Application web installable (PWA) pour raconter ses rêves à voix haute ou au clavier et en obtenir une interprétation détaillée. **Tout reste sur l'appareil.**

## Fonctionnalités

- **Raconter** : grande lune à toucher pour dicter (reconnaissance vocale du navigateur), chronomètre, saisie libre, clarté du rêve (Flou, Clair, Vif, Lucide) et émotions au réveil.
- **Interpréter** : 110 symboles et rêves typiques, chacun lu sous quatre angles :
  - archétypes (Jung),
  - science du rêve (Hall & Van de Castle, Revonsuo, Nielsen, Domhoff, Walker, Schredl…),
  - psychanalyse (Freud),
  - traditions (Artémidore, Talmud, tradition chinoise, mythologies…).
  
  L'analyse comprend une lecture d'ensemble, le climat émotionnel, des questions et des pistes concrètes (réécriture des cauchemars, rêve lucide, incubation).
- **Journal** : recherche, symboles récurrents, émotions de tes nuits, échos entre les rêves.
- **Dictionnaire** des symboles, filtrable par catégorie.
- **Ce soir** : phase de la lune, série de nuits, conseil du jour.

## Confidentialité

- Aucun serveur, aucun compte, aucun traqueur, aucune IA distante : l'analyse est faite en JavaScript dans le navigateur.
- Les rêves sont stockés dans le `localStorage` de l'appareil.
- **Chiffrement optionnel** par code secret : AES-256-GCM, avec une clé dérivée par PBKDF2 (310 000 itérations). Le journal se reverrouille après 5 minutes en arrière-plan.
- Une politique de sécurité (CSP) interdit à la page d'envoyer des données vers un autre site (`connect-src 'self'`, `form-action 'none'`).
- Seule exception, signalée dans l'app : la **dictée vocale** passe par le moteur du navigateur ou du téléphone, qui peut traiter la voix chez Apple ou Google. Elle est désactivée tant que l'utilisateur ne l'a pas acceptée.
- Les polices viennent de Google Fonts. Pour qu'aucune requête externe ne parte, supprime les trois balises `fonts.googleapis.com` dans `index.html` : l'app utilisera alors les polices du système.

## Lancer l'app

Les fichiers sont statiques et ne demandent aucune compilation.

- En local : `python3 -m http.server 8000`, puis ouvre http://localhost:8000
- Sur ton téléphone : publie le dossier sur un hébergement statique en HTTPS (GitHub Pages, Netlify…). Ouvre-le ensuite dans Safari ou Chrome et choisis « Ajouter à l'écran d'accueil ». L'app fonctionne alors hors ligne.

Le HTTPS est nécessaire pour le chiffrement et la dictée.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Interface, moteur d'analyse, stockage chiffré, dictée |
| `symboles.js` | Base de symboles, lexique des émotions |
| `sw.js` | Cache hors ligne |
| `manifest.webmanifest`, `icon*` | Installation sur l'écran d'accueil |

*Les interprétations sont des pistes de réflexion, pas des prédictions ni un avis médical.*
