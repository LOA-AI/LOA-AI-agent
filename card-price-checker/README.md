# 🃏 Cote des Cartes

Application web pour **vérifier le prix des cartes à collectionner** : Pokémon, Magic: The Gathering
et les autres jeux du top 10 des plus collectionnés.

## Jeux pris en charge

| #  | Jeu                   | Prix                                                       |
|----|-----------------------|------------------------------------------------------------|
| 1  | Pokémon               | En direct : TCGplayer + Cardmarket, via pokemontcg.io      |
| 2  | Magic: The Gathering  | En direct : TCGplayer + Cardmarket, via Scryfall           |
| 3  | Yu-Gi-Oh!             | En direct : TCGplayer, Cardmarket, eBay…, via YGOPRODeck   |
| 4  | Cartes de sport       | Liens vers les ventes eBay réalisées et PriceCharting      |
| 5  | Disney Lorcana        | En direct : TCGplayer, via Lorcast                         |
| 6  | One Piece Card Game   | Liens TCGplayer / Cardmarket / eBay / PriceCharting        |
| 7  | Dragon Ball Super     | Liens TCGplayer / Cardmarket / eBay / PriceCharting        |
| 8  | Digimon Card Game     | Liens TCGplayer / Cardmarket / eBay / PriceCharting        |
| 9  | Flesh and Blood       | Liens TCGplayer / Cardmarket / eBay / PriceCharting        |
| 10 | Star Wars: Unlimited  | Liens TCGplayer / Cardmarket / eBay / PriceCharting        |

Il n'existe pas d'API de prix publique et gratuite pour les jeux 4 et 6 à 10. L'application ouvre donc
directement la recherche correspondante sur chaque place de marché.

## Fonctionnalités

- Recherche par nom de carte, avec image, édition, numéro et rareté
- **Recherche par photo** (📷) : prenez la carte en photo, le nom est lu automatiquement et la recherche se lance. La lecture se fait dans le navigateur (Tesseract.js), la photo n'est envoyée nulle part
- Plusieurs prix par carte : normale, holo, foil, 1ère édition, tendance Cardmarket, moyenne sur 30 jours…
- Tri par pertinence, prix décroissant ou croissant, ou nom
- **Ma liste** : suivez des cartes (☆) et gardez le prix relevé au moment de l'ajout (stockée dans le navigateur)
- Liens « Comparer aussi sur » vers TCGplayer, Cardmarket, eBay et PriceCharting
- Lien partageable : la recherche est enregistrée dans l'URL (`#jeu=mtg&q=black lotus`)
- Mode sombre automatique, adapté au mobile

## Installer sur iPhone (ou Android) comme une application

L'application est une PWA : une fois en ligne sur une adresse `https://`, elle s'installe sur l'écran
d'accueil avec son icône et s'ouvre en plein écran, comme une application classique.

1. **Mettre le dossier en ligne** (gratuit), par exemple :
   - Netlify : créez un compte sur netlify.com, puis glissez le dossier `card-price-checker` sur
     https://app.netlify.com/drop ;
   - ou GitHub Pages, Vercel, Cloudflare Pages… (n'importe quel hébergement de fichiers statiques).
2. **Sur l'iPhone**, ouvrez l'adresse obtenue dans **Safari**.
3. Touchez **Partager** (le carré avec la flèche vers le haut), puis **Sur l'écran d'accueil**, puis **Ajouter**.

Le bouton 📷 Photo ouvre alors directement l'appareil photo. L'interface reste disponible hors connexion,
mais les prix nécessitent internet.

## Installer sur ordinateur (le plus simple)

Téléchargez le fichier [`dist/cote-des-cartes.html`](dist/cote-des-cartes.html) et ouvrez-le par double-clic :
toute l'application tient dans ce seul fichier, sans installation ni serveur. Une connexion internet reste
nécessaire pour récupérer les prix.

Après une modification du code, régénérez ce fichier avec `python3 build_single_file.py`.

## Lancer l'application depuis les sources

Aucune installation ni compilation : ce sont des fichiers statiques (HTML, CSS, JavaScript).

```bash
cd card-price-checker
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Il faut passer par un petit serveur local, car le navigateur bloque les modules JavaScript ouverts en
`file://`. Le dossier peut aussi être publié tel quel sur GitHub Pages, Netlify ou Vercel.

## Structure

```
card-price-checker/
├── index.html
├── manifest.webmanifest  # nom, icônes et couleurs de l'application installée
├── sw.js                 # service worker (cache de l'interface)
├── icons/
├── styles.css
└── js/
    ├── app.js        # interface : recherche, résultats, liste de suivi
    ├── games.js      # top 10 des jeux + liens vers les places de marché
    └── providers.js  # appels aux API de prix + normalisation des données
```

Pour ajouter une source de prix, écrivez une fonction dans `providers.js` qui renvoie des cartes
normalisées, enregistrez-la dans `PROVIDERS` et passez `live: true` pour ce jeu dans `games.js`.

> Les prix sont indicatifs. Les montants en USD et en EUR ne sont pas convertis : le tri utilise un taux indicatif.
