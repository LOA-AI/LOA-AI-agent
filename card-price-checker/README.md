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
- Plusieurs prix par carte : normale, holo, foil, 1ère édition, tendance Cardmarket, moyenne sur 30 jours…
- Tri par pertinence, prix décroissant ou croissant, ou nom
- **Ma liste** : suivez des cartes (☆) et gardez le prix relevé au moment de l'ajout (stockée dans le navigateur)
- Liens « Comparer aussi sur » vers TCGplayer, Cardmarket, eBay et PriceCharting
- Lien partageable : la recherche est enregistrée dans l'URL (`#jeu=mtg&q=black lotus`)
- Mode sombre automatique, adapté au mobile

## Lancer l'application

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
├── styles.css
└── js/
    ├── app.js        # interface : recherche, résultats, liste de suivi
    ├── games.js      # top 10 des jeux + liens vers les places de marché
    └── providers.js  # appels aux API de prix + normalisation des données
```

Pour ajouter une source de prix, écrivez une fonction dans `providers.js` qui renvoie des cartes
normalisées, enregistrez-la dans `PROVIDERS` et passez `live: true` pour ce jeu dans `games.js`.

> Les prix sont indicatifs. Les montants en USD et en EUR ne sont pas convertis : le tri utilise un taux indicatif.
