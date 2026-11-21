/* Noctiluque — base de symboles oniriques.
   Chaque entrée croise quatre lectures :
   j = archétypes (C. G. Jung et psychologie analytique)
   f = psychanalyse (S. Freud et successeurs)
   s = psychologie & science du rêve (études de contenu, neurosciences)
   t = traditions et cultures (clés des songes, mythes)
   q = question à se poser
   Clés : "mot" (mot exact + pluriel s/x), "racine*" (préfixe), "deux mots" (expression). */
(function () {
  const CATS = {
    T: "Rêves typiques",
    N: "Nature & éléments",
    A: "Animaux",
    P: "Personnes",
    C: "Corps",
    L: "Lieux",
    O: "Objets & véhicules",
    G: "Gestes & actions"
  };
  const L = [];
  const S = (c, n, k, j, f, s, t, q) => L.push({ c, n, k, j, f, s, t, q });

  /* ---------- Rêves typiques ---------- */
  S("T", "Poursuite", "poursuiv*|pourchass*|traque*|fuir|fuyais|fuyait|fuyant|fuite|me courait apres|me suivait|me suivaient|suivi par|suivie par|a mes trousses",
    "Ce qui te poursuit est souvent une part de toi que tu évites : l'Ombre, chez Jung. Se retourner pour faire face au poursuivant transforme souvent le rêve.",
    "Le poursuivant figure un désir ou une peur refoulés qui cherchent à revenir à la conscience.",
    "C'est le thème le plus répandu : environ 8 personnes sur 10 l'ont déjà rêvé (Nielsen et al., 2003). La théorie de la simulation de la menace (Revonsuo, 2000) y voit un entraînement du cerveau à la fuite et à la vigilance.",
    "Le Talmud dit que « les rêves suivent la bouche » : le sens que tu donnes à la fuite compte autant que la fuite elle-même. Les clés des songes y lisent une situation à affronter plutôt qu'un malheur.",
    "Qu'est-ce que j'évite en ce moment, et que se passerait-il si je me retournais ?");
  S("T", "Chute", "tomber|tombais|tombait|je tombe|tombe dans|tombe du|tombe de|chute*|chutais|precipice*|falaise*|dans le vide",
    "La chute signale une perte d'appui : une attitude trop « haute » (orgueil, idéal, contrôle) que la psyché ramène au sol.",
    "Freud y lisait parfois l'abandon à une tentation, la « chute » morale, ou le souvenir d'être lâché enfant.",
    "Un des trois thèmes les plus fréquents. Il est souvent lié à la secousse d'endormissement (myoclonie hypnique) : le corps sursaute et le cerveau fabrique une histoire de chute.",
    "Une croyance populaire dit qu'on meurt si l'on touche le sol en rêve. C'est faux : beaucoup de rêveurs atterrissent sans dommage.",
    "Où ai-je le sentiment de perdre pied ou le contrôle en ce moment ?");
  S("T", "Voler dans les airs", "voler dans|volais|je vole|je volais|flott*|levit*|planer|planais|planait|dans les airs|envol*|au-dessus des toits",
    "Le vol exprime le désir de liberté et de hauteur de vue. Euphorique, c'est une expansion ; angoissant, il peut signaler un détachement excessif du réel.",
    "Freud associait le vol aux jeux d'enfance (être balancé, porté) et au plaisir corporel.",
    "Les rêves de vol sont plus fréquents chez les rêveurs lucides, et voler est souvent la première chose qu'on fait une fois lucide.",
    "Dans le chamanisme, le vol onirique est un voyage de l'âme. Chez Artémidore (IIe siècle), voler annonçait voyages et élévation sociale.",
    "De quoi ai-je envie de me libérer, ou au-dessus de quoi ai-je besoin de prendre de la hauteur ?");
  S("T", "Dents", "dent*|machoire*|dentiste*",
    "Les dents symbolisent la capacité à « mordre » dans la vie, l'assurance et l'image donnée aux autres. Les perdre évoque l'impuissance, ou une transition comme la chute des dents de lait.",
    "Freud y voyait des contenus liés à la sexualité et à la castration. Cette lecture est aujourd'hui très discutée.",
    "Une étude (Rozen & Soffer-Dudek, 2018) relie ces rêves surtout à des sensations dentaires réelles au réveil (serrement, bruxisme), plus qu'à l'anxiété générale. Vérifie si tu serres les dents la nuit.",
    "Artémidore voyait dans les dents les membres de la maisonnée. Dans la tradition chinoise du Duc de Zhou, les perdre concerne souvent la santé des proches.",
    "Est-ce que je sens mon assurance ou mon image s'effriter ? Et est-ce que je serre la mâchoire en dormant ?");
  S("T", "Nudité", "nu|nue|nus|nues|tout nu|toute nue|deshabill*|sans vetements|en sous-vetements|en culotte|en slip",
    "Être nu, c'est être vu sans masque (sans la persona). Ce rêve parle d'authenticité et de vulnérabilité.",
    "Freud classait ce rêve parmi les « rêves typiques » : le souvenir du plaisir enfantin d'être nu, mêlé à la gêne apprise. Souvent, les autres ne remarquent rien.",
    "Rêve fréquent en situation d'exposition sociale : nouveau poste, prise de parole, rencontre. Le décalage entre ta gêne et l'indifférence des autres est très typique.",
    "Dans plusieurs traditions, la nudité en rêve annonce un dévoilement : une vérité qui va se montrer.",
    "Dans quelle situation ai-je peur d'être vu(e) tel(le) que je suis ?");
  S("T", "Examen", "examen*|exam|exams|partiel*|bac|baccalaureat|interro*|concours|epreuve*|copie blanche|reviser|revisais",
    "L'examen symbolise un moment où l'on se sent évalué. La psyché se demande si l'on est « prêt » pour une étape.",
    "Freud remarque qu'on rêve surtout d'examens déjà réussis : le rêve rassure (« tu as déjà surmonté ça »).",
    "Chez des étudiants en médecine (Arnulf et al., 2014), ceux qui avaient rêvé de l'examen la veille ont obtenu de meilleurs résultats. Le rêve semble aider à se préparer.",
    "Rêve typique moderne, absent des clés des songes anciennes : il prend la place des rêves d'épreuve initiatique et de jugement.",
    "Par qui ou par quoi est-ce que je me sens jugé(e) en ce moment ?");
  S("T", "Retard", "retard*|en retard|rate le|rate la|rater|manque le train|manque l'avion|trop tard|course contre",
    "Le retard exprime la peur de manquer une occasion, ou le sentiment de ne pas vivre à son propre rythme.",
    "Une forme d'angoisse liée à l'obligation et à l'exigence intérieure (le surmoi).",
    "« Arriver en retard » fait partie des thèmes les plus fréquents (Nielsen et al., 2003), surtout en période de surcharge.",
    "Les clés des songes populaires y lisent un changement de plan à accepter plutôt qu'un échec.",
    "Ai-je l'impression de passer à côté de quelque chose d'important ?");
  S("T", "Être perdu", "perdu|perdue|me perdre|me perdais|egare*|plus retrouver|cherchais mon chemin|sans savoir ou",
    "Se perdre signale une transition : l'ancienne carte ne marche plus et la nouvelle n'est pas encore dessinée.",
    "Peut rejouer l'angoisse de séparation de l'enfance.",
    "Les lieux du rêve changent sans cesse, car le cerveau recompose des fragments de lieux connus. Se perdre est l'expérience naturelle de ce paysage instable.",
    "Le chemin perdu est un motif universel des contes : il précède souvent la rencontre d'un guide.",
    "Dans quel domaine ai-je perdu mes repères ?");
  S("T", "Paralysie", "paralys*|bloque|bloquee|immobil*|pas bouger|impossible de bouger|fige|figee|crier sans|aucun son|jambes lourdes|sans pouvoir avancer|n'avancais pas|ne pouvais pas courir",
    "L'impuissance à agir traduit un conflit intérieur : une part de toi veut avancer, une autre te retient.",
    "Freud y voyait la mise en scène d'un conflit de volonté : vouloir et ne pas vouloir à la fois.",
    "En sommeil paradoxal, les muscles sont réellement paralysés (atonie). Le cerveau peut percevoir ce blocage et l'intégrer au rêve. La paralysie du sommeil au réveil est fréquente et sans danger.",
    "Beaucoup de cultures ont expliqué la paralysie du sommeil par une présence posée sur la poitrine : la « vieille sorcière » à Terre-Neuve, le kanashibari au Japon, le cauchemar (la « mare ») en Europe.",
    "Qu'est-ce qui me retient d'agir dans ma vie éveillée ?");
  S("T", "Mort", "mort|morte|morts|mourir|meurs|meurt|mourais|mourait|decede*|deces|cadavre*|funerailles|enterrement*|cercueil*",
    "La mort onirique annonce rarement une mort réelle : c'est le symbole d'une fin et d'une transformation, comme l'arcane XIII du tarot.",
    "Rêver la mort d'un proche peut exprimer, selon Freud, un ancien désir d'éloignement de l'enfance. Il insiste : ce n'est pas un souhait actuel.",
    "Rêver de proches décédés comme s'ils vivaient est très fréquent après un deuil. Ces rêves sont le plus souvent vécus comme réconfortants et aident à traverser la perte.",
    "Dans les clés des songes traditionnelles, rêver de sa propre mort annonce une longue vie ou un renouveau.",
    "Qu'est-ce qui se termine dans ma vie, et qu'est-ce qui pourrait naître à la place ?");
  S("T", "Attaque & combat", "attaqu*|agress*|frapp*|tuer|tue|tuait|meurtr*|assassin*|poignard*|bagarre*|combat*|violence*|se battre|me battais",
    "L'agresseur incarne souvent une énergie à intégrer : la colère, l'affirmation de soi. Ce qu'on ne s'autorise pas revient sous forme de menace.",
    "Agressivité refoulée, tournée vers l'extérieur ou retournée contre soi.",
    "Les études de contenu (Hall & Van de Castle, 1966) montrent que l'agression est l'interaction la plus courante en rêve, devant l'amitié. Cela rejoint la simulation des menaces.",
    "Vaincre un adversaire en rêve est presque partout lu comme un présage favorable.",
    "Envers qui ou quoi ai-je de la colère que je n'exprime pas ?");
  S("T", "Sexualité", "sexe|sexuel*|faire l'amour|coucher avec|embrass*|erotique*|desir|amant*|maitresse",
    "L'union en rêve symbolise souvent une intégration : s'unir à une qualité que l'autre représente (l'anima ou l'animus).",
    "Pour Freud, le rêve accomplit un désir, souvent sexuel et déguisé. Ici, il apparaît à visage découvert.",
    "Un des thèmes les plus fréquents (Nielsen et al., 2003). Rêver d'un partenaire inattendu ne révèle pas une attirance cachée.",
    "Artémidore consacrait un livre entier aux rêves sexuels, qu'il lisait souvent comme des présages sociaux ou financiers.",
    "Quelle qualité de cette personne aimerais-je développer en moi ?");
  S("T", "Naissance & grossesse", "enceinte|grossesse|accouch*|naissance|naitre|nouveau-ne|nourrisson*|bebe*",
    "Un projet, une idée, une part nouvelle de soi est en gestation. Le bébé reprend l'archétype de l'enfant divin : potentiel et renouveau.",
    "Désir d'enfant, ou retour des questions enfantines sur l'origine.",
    "Très fréquent pendant la grossesse (rêves plus vifs, plus de cauchemars au troisième trimestre), mais aussi chez tout le monde en période de création.",
    "Dans de nombreuses traditions, une naissance en rêve annonce prospérité et bonne nouvelle.",
    "Qu'est-ce qui est en train de naître dans ma vie ?");
  S("T", "Mariage", "mariage*|marier|mariee|epous*|robe de mariee|alliance*|noce*",
    "Le mariage est l'archétype de l'union des contraires (la conjunctio de Jung) : réconcilier deux parts de soi.",
    "Accomplissement d'un désir d'union, ou angoisse face à l'engagement.",
    "Fréquent avant un engagement réel, quel qu'il soit : contrat, déménagement, nouvelle relation.",
    "Les clés des songes anciennes lisaient le mariage comme un changement d'état, parfois une fin. On y voit surtout un engagement.",
    "À quoi ou à qui suis-je en train de m'engager ?");
  S("T", "Infidélité", "tromp*|infidel*|adultere|cocu|jaloux|jalouse|jalousie",
    "La trahison rêvée parle souvent d'un sentiment d'être délaissé(e), ou de se trahir soi-même.",
    "Projection : on prête à l'autre un désir qu'on a soi-même, ou une peur d'abandon.",
    "Ces rêves influencent l'humeur envers le partenaire le lendemain (Selterman et al., 2014), sans rien prédire d'une infidélité réelle.",
    "Les traditions populaires disent souvent l'inverse : rêver d'être trompé(e) annoncerait la fidélité.",
    "Où est-ce que je me sens moins important(e) ou moins regardé(e) ?");
  S("T", "Catastrophe", "catastroph*|apocalyp*|fin du monde|tsunami*|seisme*|tremblement de terre|explos*|bombe*|guerre*|effondr*|meteorite*",
    "La fin du monde annonce la fin d'un monde intérieur : un bouleversement profond, souvent nécessaire.",
    "Projection d'une angoisse débordante, ou d'une colère destructrice inavouée.",
    "Les crises collectives augmentent nettement ces rêves : on l'a mesuré pendant la pandémie de Covid-19, partout dans le monde.",
    "Les grands récits de déluge et d'apocalypse sont, dans plusieurs cultures, présentés comme des visions reçues en songe.",
    "Qu'est-ce qui s'effondre ou change radicalement autour de moi ?");
  S("T", "Toilettes", "toilette*|wc|urin*|pipi|caca|chasse d'eau",
    "Se libérer de ce qui n'est plus utile. Ne pas trouver de toilettes propres parle du manque d'espace pour soi.",
    "Freud rapprochait ces rêves des stades de l'enfance et de la question du contrôle.",
    "Souvent déclenché par un vrai besoin d'uriner : le cerveau incorpore les signaux du corps dans le rêve.",
    "Dans certaines clés des songes, les excréments symbolisent l'argent qui arrive.",
    "De quoi ai-je besoin de me débarrasser ? Où manque-t-il d'intimité dans ma vie ?");
  S("T", "Téléphone & écrans", "telephone*|portable|smartphone|appeler|appel*|numero*|message*|sms|ecran*",
    "Le téléphone qui ne marche pas exprime une difficulté de communication, un lien qu'on n'arrive pas à établir.",
    "Désir de contact avec une personne précise.",
    "Lire un écran ou composer un numéro est souvent impossible en rêve, car les zones du langage et de la logique sont moins actives en sommeil paradoxal (Hartmann). C'est un bon test de réalité pour devenir lucide.",
    "Motif moderne, qui prolonge les messagers et les lettres des clés des songes anciennes.",
    "Avec qui ai-je du mal à me faire entendre ?");
  S("T", "Pièce cachée", "piece secrete|pieces secretes|piece cachee|porte secrete|nouvelle piece|pieces inconnues|pieces que je ne connaissais|passage secret",
    "Découvrir des pièces inconnues dans sa maison : des potentiels de toi encore inexplorés. C'est l'un des rêves les plus encourageants.",
    "Désir de découverte et curiosité, souvent liés au désir chez Freud.",
    "Rêve fréquent en période de croissance personnelle, souvent rapporté avec émerveillement.",
    "Les demeures aux pièces innombrables sont, dans de nombreuses traditions, une image de l'âme.",
    "Quelle capacité ou quel désir suis-je en train de découvrir ?");
  S("T", "Tâche impossible", "n'arrivais pas|n'arrive pas|impossible de|recommenc*|encore et encore|sans y arriver",
    "Le rêve met en scène une impasse : la même stratégie ne fonctionne plus.",
    "La compulsion de répétition : on rejoue ce qui n'a pas été résolu.",
    "« Essayer encore et encore de faire quelque chose » est l'un des thèmes les plus courants (Nielsen et al., 2003). Le cortex préfrontal, moins actif, rend les tâches planifiées difficiles en rêve.",
    "C'est le motif des épreuves sans fin : le tonneau des Danaïdes, le rocher de Sisyphe.",
    "Quelle tâche ai-je l'impression de refaire sans avancer ?");

  /* ---------- Nature & éléments ---------- */
  S("N", "Eau", "eau|eaux|aquatique*",
    "L'eau est le grand symbole de l'inconscient et des émotions. Son état compte : claire ou trouble, calme ou agitée.",
    "Freud liait l'eau à la naissance et au liquide amniotique.",
    "Dement et Wolpert (1958) ont aspergé d'eau des dormeurs en sommeil paradoxal : beaucoup ont rêvé de pluie ou de fuite d'eau. Le corps et l'humeur colorent l'eau du rêve.",
    "Presque toutes les traditions lient l'eau à la purification (baptême, ablutions, Gange). La tradition attribuée à Ibn Sirin associe l'eau claire à la connaissance.",
    "L'eau était-elle claire ou trouble, calme ou agitée ? Et mes émotions en ce moment ?");
  S("N", "Mer & océan", "mer|ocean*|vague*|maree*",
    "L'immensité de la mer figure l'inconscient collectif. Les vagues sont des émotions qui montent.",
    "La mer est souvent lue comme un symbole maternel, enveloppant.",
    "Les vagues géantes sont un motif typique des périodes de stress. On s'y noie rarement : on assiste, impuissant, à leur montée.",
    "Traverser la mer marque un grand passage de vie dans de nombreux mythes, de l'Odyssée à la traversée de la mer Rouge.",
    "Qu'est-ce qui monte en moi comme une vague ?");
  S("N", "Inondation & noyade", "inond*|noy*|deluge*|submerg*|deborde*|crue*",
    "Être submergé : les émotions débordent les digues de la conscience.",
    "Retour d'affects refoulés qui envahissent le moi.",
    "Fréquent chez les personnes épuisées ou anxieuses : c'est un signal de surcharge plus qu'un présage.",
    "Le déluge est un mythe presque universel (Gilgamesh, Noé, Manu) de purification et de recommencement.",
    "Par quoi suis-je submergé(e) en ce moment ?");
  S("N", "Rivière", "riviere*|fleuve*|ruisseau*|courant*",
    "Le cours de la vie. Traverser une rivière, c'est franchir un seuil ; suivre le courant, c'est lâcher prise.",
    "",
    "Les paysages d'eau courante reviennent souvent en période de transition (déménagement, changement de travail).",
    "Le Styx grec sépare les vivants des morts ; le Gange purifie. La rivière est presque partout une frontière sacrée.",
    "Quel passage suis-je en train de traverser ?");
  S("N", "Pluie", "pluie*|pleuv*|pleuvait|averse*|bruine",
    "La pluie lave et féconde : une tristesse qui libère, ou un renouveau après la sécheresse.",
    "",
    "La pluie fait partie des stimuli extérieurs les plus souvent incorporés au rêve (bruit, humidité, froid).",
    "Dans les cultures agricoles, la pluie en rêve est un signe de bénédiction et de fertilité.",
    "Ai-je besoin de pleurer ou de laisser quelque chose se laver ?");
  S("N", "Orage & tempête", "orage*|tempete*|eclair*|tonnerre|ouragan*|tornade*|cyclone*",
    "La tempête traduit une tension qui doit éclater : un conflit, une colère, une crise qui clarifie.",
    "Décharge d'une tension accumulée.",
    "Les rêves d'orage suivent souvent des journées de tension relationnelle (hypothèse de continuité, Domhoff).",
    "La foudre est l'arme des dieux du ciel (Zeus, Thor, Indra) : force qui détruit et révèle.",
    "Quelle tension cherche à éclater dans ma vie ?");
  S("N", "Feu", "feu|feux|flamme*|brul*|incendi*|braise*",
    "Le feu est passion, colère ou transformation : il détruit la forme ancienne pour en libérer une nouvelle (l'alchimie de Jung).",
    "Symbole classique du désir et de la passion.",
    "Rêver d'incendie revient souvent en période de colère ou de forte excitation.",
    "Prométhée vole le feu aux dieux ; Agni, dans l'Inde védique, porte les offrandes ; le phénix renaît de ses cendres.",
    "Qu'est-ce qui brûle en moi : une passion, une colère, un besoin de changement ?");
  S("N", "Forêt", "foret*|bois sombre|jungle*|sous-bois",
    "La forêt est l'inconnu, l'inconscient vivant où l'on se perd pour se trouver.",
    "",
    "Les paysages naturels sont plus fréquents dans les rêves des personnes qui passent du temps dehors : le rêve reprend la vie éveillée.",
    "Dante commence la Divine Comédie dans une « forêt obscure ». Les contes (Petit Poucet, Chaperon rouge) y placent l'épreuve initiatique.",
    "Dans quel territoire inconnu suis-je en train d'avancer ?");
  S("N", "Arbre", "arbre*|racine*|branche*|tronc*|feuillage",
    "L'arbre représente la croissance du Soi : racines (histoire, famille), tronc (identité), branches (projets).",
    "",
    "Son état reflète souvent l'image que l'on a de son énergie : arbre en fleurs, arbre mort, arbre déraciné.",
    "Yggdrasil relie les mondes nordiques ; l'arbre de vie et l'arbre de la connaissance ouvrent la Genèse ; le Bouddha s'éveille sous un figuier.",
    "Dans quel état est mon « arbre » en ce moment : racines, tronc, branches ?");
  S("N", "Fleurs & jardin", "fleur*|jardin*|rose|roses|bouquet*|potager*",
    "Le jardin est l'espace intérieur que l'on cultive. Les fleurs signalent un épanouissement.",
    "Les fleurs sont, chez Freud, un symbole fréquent de féminité et de séduction.",
    "Les rêves de jardin sont souvent rapportés comme apaisants et coïncident avec des périodes de récupération.",
    "Le lotus naît de la boue dans la tradition bouddhiste ; la rose est la fleur des mystiques.",
    "Qu'est-ce que je cultive en ce moment, et qu'est-ce qui fleurit ?");
  S("N", "Montagne", "montagne*|sommet*|grimp*|escalad*|colline*|altitude",
    "La montagne est un objectif, une ascension intérieure. Atteindre le sommet, c'est gagner une vue d'ensemble.",
    "",
    "Grimper avec difficulté reflète souvent l'effort fourni pour un projet en cours.",
    "Le Sinaï, l'Olympe, le mont Meru : la montagne est le lieu où le ciel touche la terre.",
    "Quel sommet suis-je en train de gravir, et à quel point de la pente suis-je ?");
  S("N", "Neige & glace", "neige*|glace*|gele|gelee|givre*|hiver|banquise*",
    "La glace fige ce qui coule : des émotions gelées, une relation refroidie. La neige peut aussi être pureté et silence.",
    "",
    "Le froid ressenti en dormant (couverture qui glisse) peut suffire à faire rêver de neige.",
    "Dante place au fond de l'Enfer un lac gelé : la glace y est l'image du cœur fermé.",
    "Quelle émotion ai-je mise au congélateur ?");
  S("N", "Désert", "desert*|aride|dunes",
    "Le désert est le vide fertile : solitude, dépouillement, mais aussi lieu de révélation.",
    "",
    "Fréquent en période d'isolement ou de manque affectif.",
    "Les prophètes et les Pères du désert s'y retirent pour entendre l'essentiel.",
    "De quoi ai-je soif en ce moment ?");
  S("N", "Lune", "lune|lunaire|clair de lune",
    "La lune est le féminin, l'intuition, les cycles. Elle éclaire la nuit sans l'abolir.",
    "",
    "Les études ne montrent pas d'effet clair de la pleine lune sur le contenu des rêves, mais certaines suggèrent un sommeil un peu plus court autour de la pleine lune.",
    "Séléné, Artémis, Chang'e : la lune est presque partout une figure féminine liée au temps et aux marées.",
    "Quel cycle est en train de se terminer ou de recommencer pour moi ?");
  S("N", "Soleil", "soleil|ensoleill*|lever du soleil|aube|coucher de soleil",
    "Le soleil est la conscience, la clarté, l'énergie du moi. Un lever de soleil annonce un renouveau.",
    "Figure paternelle chez Freud.",
    "Les rêves lumineux et ensoleillés sont associés à une humeur positive au réveil.",
    "Râ, Apollon, Amaterasu : le soleil est la divinité de la vie et de la vérité.",
    "Qu'est-ce qui s'éclaire pour moi en ce moment ?");
  S("N", "Ciel & étoiles", "ciel|cieux|etoile*|cosmos|galaxie*|planete*|univers",
    "Le ciel étoilé ouvre sur le transcendant : idéaux, destin, sentiment d'appartenance à plus grand que soi.",
    "",
    "Ces rêves sont souvent vécus avec émerveillement : la recherche les classe parmi les rêves « transcendants » (Kuiken).",
    "Les Rois mages suivent une étoile. Dans de nombreuses cultures, les défunts deviennent des étoiles.",
    "Quel idéal ou quelle direction m'appelle ?");
  S("N", "Obscurité", "obscur*|tenebre*|sombre|penombre|dans le noir|noir complet",
    "L'obscurité est le non-connu : l'inconscient, ce que l'on ne veut pas voir encore.",
    "",
    "Les rêves sombres sont plus fréquents en période d'humeur basse. Les interrupteurs qui ne marchent pas sont typiques des rêves (LaBerge).",
    "Nyx, la Nuit primordiale, est mère des songes dans la mythologie grecque.",
    "Qu'est-ce que je n'arrive pas encore à voir clairement ?");
  S("N", "Lumière", "lumiere*|lumineu*|brill*|eclat*|halo*|rayon*",
    "Une lumière en rêve signale une prise de conscience, une guidance, parfois une expérience numineuse.",
    "",
    "LaBerge a observé que l'intensité lumineuse est difficile à changer en rêve : allumer un interrupteur échoue souvent. C'est un test de réalité utile.",
    "L'illumination du Bouddha, la lumière divine des mystiques : la lumière est presque partout synonyme de sagesse.",
    "Qu'est-ce qui vient de s'éclairer dans ma compréhension ?");
  S("N", "Grotte & tunnel", "grotte*|caverne*|souterrain*|tunnel*",
    "Descendre sous terre, c'est explorer l'inconscient profond. Le tunnel est un passage vers une autre étape.",
    "Symbole du ventre maternel.",
    "Le tunnel est aussi un motif fréquent des récits d'expériences de mort imminente.",
    "La caverne de Platon : sortir de la grotte, c'est passer de l'illusion à la vérité.",
    "Vers quoi ce passage me conduit-il ?");

  /* ---------- Animaux ---------- */
  S("A", "Serpent", "serpent*|vipere*|cobra*|couleuvre*|python*|reptile*",
    "Le serpent est ambivalent : danger, mais aussi guérison et transformation (il mue). C'est une énergie instinctive puissante qui demande à être reconnue.",
    "Symbole phallique classique chez Freud.",
    "La peur des serpents serait en partie innée : selon la théorie de la détection des serpents (Isbell), notre système visuel a évolué pour les repérer vite. Le chimiste Kekulé a dit avoir trouvé la forme du benzène en rêvant d'un serpent qui se mord la queue.",
    "Le caducée d'Asclépios guérit ; la kundalini s'éveille comme un serpent ; dans l'Éden, il apporte la connaissance.",
    "Quelle énergie en moi est en train de muer ?");
  S("A", "Chien", "chien*|chiot*|toutou",
    "Le chien est loyauté, instinct apprivoisé, amitié. Un chien menaçant peut signaler un instinct trahi ou négligé.",
    "",
    "Les animaux sont bien plus présents dans les rêves d'enfants que d'adultes (Van de Castle). Le chien reprend souvent un lien affectif réel.",
    "Anubis, à tête de chien, guide les morts en Égypte ; Cerbère garde les Enfers : le chien est un gardien de seuil.",
    "À qui ou à quoi suis-je fidèle, et qui m'est fidèle ?");
  S("A", "Chat", "chat|chats|chaton*|felin*|minou",
    "Le chat est indépendance, intuition, féminité mystérieuse. Il voit dans le noir.",
    "",
    "Le chat de compagnie apparaît souvent tel qu'il est dans la vie réelle : le rêve prolonge le quotidien.",
    "Bastet, déesse-chatte d'Égypte, protège le foyer. En Europe, le chat noir a longtemps été lié à la sorcellerie.",
    "Où ai-je besoin de plus d'indépendance ou de faire confiance à mon intuition ?");
  S("A", "Araignée", "araignee*|toile d'araignee|tarentule*",
    "L'araignée tisse : patience, création, mais aussi piège et emprise. Elle peut représenter une figure envahissante.",
    "Freud et Abraham y voyaient la figure d'une mère jugée dévorante.",
    "Comme pour le serpent, la peur des araignées s'apprend très facilement (« peur préparée », Öhman & Mineka).",
    "La légende ojibwée de la femme-araignée Asibikaashi est à l'origine du capteur de rêves. Anansi, en Afrique de l'Ouest, est le maître des histoires.",
    "Dans quelle toile suis-je pris(e), ou qu'est-ce que je tisse patiemment ?");
  S("A", "Loup", "loup*|louve*",
    "Le loup est l'instinct sauvage, la faim, la meute. Menaçant, il figure une peur ou une avidité ; allié, une force libre.",
    "L'Homme aux loups, célèbre cas de Freud, rêvait de loups blancs perchés dans un arbre.",
    "Le loup est une figure de menace typique des contes : il entre facilement dans les rêves dès l'enfance.",
    "Une louve allaite Romulus et Rémus ; Fenrir menace les dieux nordiques.",
    "Quelle part sauvage de moi demande à être reconnue ?");
  S("A", "Oiseau", "oiseau*|corbeau*|colombe*|aigle*|hibou*|chouette*|pigeon*",
    "L'oiseau est l'esprit, la pensée, la liberté. Son espèce affine le sens : aigle (vision), colombe (paix), corbeau (messager).",
    "",
    "Les oiseaux en cage ou blessés apparaissent souvent quand on se sent limité dans sa liberté.",
    "L'âme (ba) est un oiseau dans l'Égypte ancienne ; la chouette accompagne Athéna, déesse de la sagesse.",
    "Quel message ou quelle liberté cet oiseau m'apporte-t-il ?");
  S("A", "Cheval", "cheval|chevaux|jument*|poney*|galop*",
    "Le cheval est l'énergie vitale maîtrisée : la relation entre l'instinct (le cheval) et la volonté (le cavalier).",
    "Freud lisait le cheval comme figure paternelle (le petit Hans).",
    "Monter un cheval qui s'emballe traduit souvent une situation qui va plus vite que soi.",
    "Pégase porte les poètes ; le cheval est un guide des âmes dans de nombreuses traditions.",
    "Qui tient les rênes en ce moment : moi ou mes élans ?");
  S("A", "Poisson", "poisson*|carpe*",
    "Le poisson est un contenu de l'inconscient qui remonte à la surface : une intuition, une idée.",
    "",
    "Attraper un poisson est souvent vécu comme une petite victoire, une idée « pêchée ».",
    "Ichthys, le poisson des premiers chrétiens ; Matsya, avatar-poisson de Vishnou qui sauve l'humanité du déluge.",
    "Quelle idée ou quelle intuition vient de remonter ?");
  S("A", "Insectes", "insecte*|fourmi*|cafard*|mouche*|abeille*|guepe*|ver de terre|asticot*",
    "Les insectes figurent de petits tracas qui envahissent, ou au contraire un travail collectif (abeilles, fourmis).",
    "",
    "Les insectes sur la peau peuvent venir de sensations réelles (démangeaisons, chaleur).",
    "L'abeille est sacrée dans plusieurs traditions ; le scarabée est en Égypte un symbole de renaissance.",
    "Quels petits soucis grouillent dans mon esprit ?");
  S("A", "Rats & souris", "rat|rats|souris|rongeur*",
    "Les rongeurs rongent : petites inquiétudes, sentiment de trahison, ou au contraire débrouillardise.",
    "",
    "Animal de dégoût fréquent dans les cauchemars ; le dégoût est l'une des émotions les plus marquantes en rêve.",
    "Le rat ouvre le zodiaque chinois ; la souris porte Ganesh, qui lève les obstacles.",
    "Qu'est-ce qui me ronge ?");
  S("A", "Fauve", "lion*|tigre*|panthere*|leopard*|fauve*|jaguar*",
    "Le fauve est la puissance, le courage, la colère. Le fuir, c'est fuir sa propre force.",
    "",
    "Les grands prédateurs sont des figures de menace typiques, surtout dans les rêves d'enfants.",
    "Le lion est roi et solaire ; Sekhmet, déesse-lionne, est à la fois destruction et guérison.",
    "Ai-je peur de ma propre force ?");
  S("A", "Ours", "ours|ourse*|ourson*",
    "L'ours est force protectrice et maternelle, mais aussi besoin de retraite (hibernation).",
    "",
    "Figure de menace classique, mais souvent rapportée comme protectrice quand elle est apaisée.",
    "Artémis était honorée sous forme d'ourse ; de nombreux peuples d'Amérique et de Sibérie le vénèrent comme un ancêtre.",
    "Ai-je besoin de me protéger, ou de me retirer pour récupérer ?");
  S("A", "Papillon", "papillon*|chenille*|cocon*",
    "Le papillon est la métamorphose achevée : l'âme qui se libère de sa forme ancienne.",
    "",
    "Souvent rapporté dans des rêves positifs, en période de changement de vie.",
    "Psyché signifie à la fois « âme » et « papillon » en grec. Zhuangzi a rêvé qu'il était un papillon, puis s'est demandé s'il n'était pas un papillon rêvant d'être Zhuangzi.",
    "Quelle métamorphose est en cours pour moi ?");
  S("A", "Requin & crocodile", "requin*|crocodile*|alligator*|caiman*",
    "Prédateurs surgis des profondeurs : une menace qui vient de l'inconscient, ou une relation dévorante.",
    "",
    "Figures typiques des cauchemars aquatiques ; elles suivent souvent des films ou des images vues dans la semaine.",
    "Sobek, dieu-crocodile égyptien, était à la fois redouté et protecteur du Nil.",
    "Quelle menace cachée sous la surface est-ce que je pressens ?");
  S("A", "Monstre", "monstre*|creature*|demon*|diable*|zombie*|vampire*|dragon*",
    "Le monstre est l'Ombre dans sa forme la plus brute. Le dragon garde souvent un trésor : derrière la peur se cache une richesse.",
    "Retour du refoulé sous une forme effrayante.",
    "Les créatures monstrueuses sont fréquentes dans les cauchemars de l'enfance et diminuent avec l'âge. Les faire face en rêve lucide réduit souvent les cauchemars.",
    "Saint Georges, Persée, Siegfried : vaincre le dragon est l'épreuve du héros.",
    "Quel trésor pourrait se cacher derrière ce qui me fait peur ?");
  S("A", "Fantôme & présence", "fantome*|spectre*|revenant*|hante*|apparition*|presence",
    "Un fantôme est un passé non résolu qui revient hanter le présent : une relation, un souvenir, une culpabilité.",
    "",
    "La sensation de présence est très courante pendant la paralysie du sommeil. Elle s'explique par l'état de transition entre rêve et éveil.",
    "Dans de nombreuses cultures, les ancêtres visitent les vivants en songe pour transmettre un message.",
    "Qu'est-ce qui, de mon passé, demande encore mon attention ?");

  /* ---------- Personnes ---------- */
  S("P", "Mère", "mere|maman|ma mere",
    "La mère est l'archétype de la Grande Mère : protection, nourriture, mais aussi étouffement. Elle peut représenter ta propre façon de prendre soin.",
    "Freud place la relation à la mère au cœur du développement psychique.",
    "Les parents font partie des personnages les plus fréquents dans les rêves, toute la vie (Hall & Van de Castle).",
    "Déméter, Isis, la Vierge, Pachamama : la figure maternelle est partout nourricière et sacrée.",
    "Comment est-ce que je prends soin de moi en ce moment ?");
  S("P", "Père", "pere|papa",
    "Le père est l'archétype de l'autorité, de la loi et de la direction. Il peut représenter ton juge intérieur.",
    "La figure du père incarne le surmoi : la loi, l'interdit, l'exigence.",
    "Les rêves de parents reviennent souvent lors des grands choix de vie et des changements de rôle (devenir parent soi-même).",
    "Zeus, Odin, le Père céleste : la figure paternelle règne et ordonne.",
    "Quelle règle ou quelle exigence suis-je en train de m'imposer ?");
  S("P", "Enfant & enfance", "enfant*|petit garcon|petite fille|gamin*|quand j'etais petit|quand j'etais petite",
    "L'enfant figure le potentiel, la spontanéité, mais aussi la vulnérabilité de l'enfant intérieur.",
    "Pour Freud, le rêve puise largement dans les souvenirs et les désirs de l'enfance.",
    "Rêver de son enfance revient souvent quand on traverse une situation qui réveille d'anciennes émotions.",
    "L'enfant divin (Jung et Kerényi) : Krishna, Horus, l'enfant de la crèche. Il annonce un avenir.",
    "De quoi mon enfant intérieur a-t-il besoin aujourd'hui ?");
  S("P", "Frère & sœur", "frere*|soeur*",
    "Frères et sœurs figurent souvent des parts de soi : rivalité, complicité, comparaison.",
    "La rivalité fraternelle est une source fréquente de rêves selon Freud.",
    "Le rêve reprend souvent des tensions ou des complicités récentes, selon l'hypothèse de continuité.",
    "Caïn et Abel, Romulus et Rémus, Isis et Osiris : les fratries mythiques racontent rivalité et alliance.",
    "Quel aspect de moi cette personne me renvoie-t-elle ?");
  S("P", "Ex-partenaire", "ex|mon ex|ex-copain|ex-copine|ex-mari|ex-femme|ancien copain|ancienne copine|ancien mari|ancienne femme",
    "L'ex représente rarement un désir de retour : il incarne une période de ta vie, une façon d'aimer, une blessure ou une leçon.",
    "Retour d'un désir ou d'un conflit non résolu.",
    "Ces rêves sont très fréquents, même des années après, souvent déclenchés par une situation qui rappelle cette relation (dynamique, stress, nouveau couple).",
    "Les clés des songes y voient le retour d'une affaire ancienne qu'il faut clore.",
    "Qu'est-ce que cette relation m'a appris qui me sert aujourd'hui ?");
  S("P", "Partenaire", "copain|copine|mon mari|ma femme|conjoint*|compagnon|compagne|amoureux|amoureuse|cheri|cherie",
    "Le partenaire en rêve reflète la relation telle que tu la vis intérieurement, et parfois ta propre anima ou ton propre animus.",
    "",
    "Les rêves du partenaire influencent l'humeur et les comportements du lendemain dans le couple (Selterman et al., 2014).",
    "Les clés des songes lisaient l'harmonie du couple rêvé comme le reflet du foyer.",
    "Comment est-ce que je vis notre relation en ce moment ?");
  S("P", "Inconnu(e)", "inconnu*|etranger|etrangere|etrangers|silhouette*|sans visage|personne que je ne connais",
    "Un inconnu du même sexe que toi incarne souvent l'Ombre ; du sexe opposé, l'anima ou l'animus. C'est une part de toi à rencontrer.",
    "",
    "Une grande partie des personnages de rêve sont des inconnus (Hall & Van de Castle). Les hommes rêvent davantage d'inconnus masculins agressifs.",
    "L'étranger qui frappe à la porte est, dans de nombreux mythes, un dieu déguisé qu'il faut accueillir.",
    "Si cette personne était une part de moi, laquelle serait-elle ?");
  S("P", "Grands-parents & ancêtres", "grand-mere|grand-pere|grands-parents|mamie|mami|papy|papi|aieul*|ancetre*|defunt*",
    "Les ancêtres représentent la sagesse, la transmission, la lignée. Ils sont souvent l'archétype du Vieux Sage ou de la Grand-Mère.",
    "",
    "Les rêves de grands-parents décédés sont fréquents et souvent vécus comme des visites réconfortantes.",
    "De nombreuses cultures (Afrique, Asie, peuples autochtones) considèrent ces rêves comme de vrais messages des ancêtres.",
    "Quelle sagesse de ma famille ai-je besoin d'entendre ?");
  S("P", "Célébrité", "celebrit*|star|stars|acteur*|actrice*|chanteur|chanteuse|president*|roi|reine|prince|princesse",
    "Une célébrité incarne une qualité que tu admires ou projettes : talent, pouvoir, reconnaissance.",
    "Désir de reconnaissance ou d'être aimé(e) par une figure idéalisée.",
    "Les personnes vues dans les médias entrent facilement dans les rêves (résidus diurnes, effet de décalage de 5 à 7 jours).",
    "Rêver d'un roi annonçait, chez Artémidore, une rencontre avec le pouvoir.",
    "Quelle qualité de cette personne ai-je envie d'oser en moi ?");
  S("P", "Ami(e)", "ami|amie|amis|amies|copains|copines|pote|potes|meilleur ami|meilleure amie",
    "Un ami en rêve représente souvent la qualité qu'il incarne pour toi.",
    "",
    "Les interactions amicales sont fréquentes dans les rêves, et notamment chez les femmes selon les normes de Hall & Van de Castle.",
    "L'ami fidèle est le compagnon du héros dans toutes les épopées : Gilgamesh et Enkidu, Achille et Patrocle.",
    "Qu'est-ce que cet(te) ami(e) représente pour moi en ce moment ?");
  S("P", "Travail & collègues", "patron*|chef|boss|collegue*|manager|directeur*|directrice*",
    "Le chef figure l'autorité, la pression ou la reconnaissance attendue. Les collègues représentent souvent des rôles intérieurs.",
    "",
    "Les rêves de travail augmentent avec le stress professionnel et sont un des premiers signes d'épuisement.",
    "",
    "Quelle pression professionnelle ou quel besoin de reconnaissance est-ce que je ressens ?");
  S("P", "Professeur", "professeur*|prof|profs|instituteur*|institutrice*|enseignant*|maitresse d'ecole",
    "Le professeur est l'archétype du Vieux Sage : celui qui sait, guide ou juge.",
    "",
    "« École, professeurs, études » fait partie des thèmes les plus fréquents chez les adultes (Nielsen et al., 2003).",
    "Le maître spirituel visite le disciple en songe dans de nombreuses traditions (soufisme, bouddhisme tibétain).",
    "Qu'ai-je encore à apprendre en ce moment ?");
  S("P", "Police & arrestation", "police*|policier*|gendarme*|arrest*|menott*|tribunal|juge|proces",
    "La police représente la loi intérieure : culpabilité, peur d'être pris(e) en faute, besoin d'ordre.",
    "Instance du surmoi qui punit.",
    "Rêver d'être arrêté(e) est fréquent quand on enfreint ses propres règles (une promesse, un régime, une limite).",
    "",
    "De quoi est-ce que je me sens coupable ?");
  S("P", "Foule", "foule*|public|spectateur*|tout le monde me regard*",
    "La foule est le regard collectif : peur du jugement, ou désir d'appartenance.",
    "",
    "Être observé(e) par une foule est un scénario typique d'anxiété sociale.",
    "",
    "Quel regard des autres pèse sur moi en ce moment ?");

  /* ---------- Corps ---------- */
  S("C", "Cheveux", "cheveu*|chauve|coiff*|perruque*",
    "Les cheveux sont la force et la séduction. Les perdre ou les couper : une perte de pouvoir, ou un nouveau départ.",
    "",
    "Les rêves de cheveux qui tombent accompagnent souvent les inquiétudes sur l'image et le vieillissement.",
    "Samson perd sa force avec sa chevelure ; dans plusieurs traditions, se couper les cheveux marque un deuil ou une consécration.",
    "Où est-ce que je sens mon pouvoir de séduction ou ma force changer ?");
  S("C", "Yeux", "oeil|yeux|aveugle*",
    "Les yeux sont la conscience et la lucidité. Être aveugle en rêve : refuser de voir quelque chose.",
    "",
    "La vision est le sens dominant du rêve ; une vue brouillée est fréquente et reflète l'état du cerveau en sommeil paradoxal.",
    "L'œil d'Horus protège et guérit en Égypte.",
    "Qu'est-ce que je refuse de voir ?");
  S("C", "Mains", "main|mains|doigt*",
    "Les mains sont l'action, la création, la relation. Des mains abîmées : un sentiment d'impuissance.",
    "",
    "Regarder ses mains et compter ses doigts est le test de réalité le plus connu pour devenir lucide : en rêve, leur nombre change souvent.",
    "La main de Fatma (khamsa) protège dans le monde méditerranéen.",
    "Qu'est-ce que je suis en train de créer ou de lâcher ?");
  S("C", "Pieds & chaussures", "pied|pieds|chaussure*|basket*|talons|pieds nus",
    "Les pieds sont l'ancrage et la direction. Perdre ses chaussures : ne plus savoir où l'on va, ou perdre son rôle social.",
    "",
    "Les rêves de chaussures perdues ou dépareillées reviennent souvent lors des changements de statut.",
    "La pantoufle de Cendrillon révèle l'identité véritable.",
    "Ai-je les pieds sur terre, et dans quelle direction je marche ?");
  S("C", "Sang & blessure", "sang|saign*|blessur*|blesse|blessee|plaie*|cicatrice*",
    "Le sang est la force vitale. Une blessure en rêve figure une blessure émotionnelle à soigner.",
    "",
    "Les rêves de blessure apparaissent souvent après un conflit ou une perte d'énergie.",
    "Le sang scelle les alliances dans de nombreuses traditions.",
    "Où ai-je été blessé(e), et comment puis-je en prendre soin ?");
  S("C", "Maladie", "malad*|fievre|vomi*|virus|infection*|cancer",
    "La maladie en rêve signale un déséquilibre : quelque chose qui « ne passe pas ».",
    "",
    "Le corps peut s'inviter dans les rêves au début d'une vraie maladie (fièvre, rêves étranges). Les rêves sous fièvre sont plus bizarres et négatifs.",
    "Dans les temples d'Asclépios, on dormait pour recevoir en songe le remède à sa maladie (incubation).",
    "Qu'est-ce qui ne passe pas en ce moment ?");
  S("C", "Voix & cri", "voix|crier|criais|cri|cris|hurl*|muet|muette|sans voix",
    "Ne pas réussir à crier : une parole retenue, une difficulté à se faire entendre ou à demander de l'aide.",
    "",
    "Le cri muet est très typique, lié à la paralysie musculaire du sommeil paradoxal.",
    "",
    "Qu'est-ce que je n'arrive pas à dire ?");

  /* ---------- Lieux ---------- */
  S("L", "Maison", "maison*|appartement*|chez moi|logement",
    "La maison représente la psyché. Les étages figurent les niveaux de conscience : grenier pour l'esprit, cave pour l'inconscient. Jung a bâti cette idée sur l'un de ses propres rêves (1909).",
    "La maison est, chez Freud, un symbole du corps.",
    "La maison est le décor de rêve le plus fréquent ; elle mélange souvent plusieurs lieux connus.",
    "Dans de nombreuses traditions, l'état de la maison rêvée reflète celui de la famille.",
    "Dans quelle pièce de « ma maison » étais-je, et dans quel état était-elle ?");
  S("L", "Maison d'enfance", "maison d'enfance|maison de mon enfance|ancienne maison|ancien appartement|chez mes parents|chez mes grands-parents",
    "Revenir dans la maison d'enfance, c'est revisiter les fondations de sa personnalité.",
    "Retour aux désirs et aux conflits infantiles.",
    "Très fréquent : beaucoup d'adultes rêvent encore principalement de la maison de leur enfance comme décor.",
    "",
    "Quelle émotion de mon enfance est réveillée en ce moment ?");
  S("L", "Cave & grenier", "cave|caves|sous-sol*|grenier*",
    "La cave est l'inconscient, le passé enfoui ; le grenier les souvenirs et la pensée. Y descendre ou y monter, c'est explorer.",
    "",
    "Ces lieux sont souvent le cadre de rêves d'angoisse, à cause de leur obscurité.",
    "",
    "Qu'ai-je rangé loin des regards ?");
  S("L", "École", "ecole*|college|lycee*|universite*|fac|salle de classe|classe|cour de recreation",
    "L'école est le lieu de l'apprentissage et de l'évaluation : une leçon de vie en cours.",
    "",
    "Les adultes continuent de rêver d'école des décennies plus tard, surtout en période d'évaluation (travail, couple).",
    "",
    "Quelle leçon la vie est-elle en train de m'enseigner ?");
  S("L", "Hôpital & soins", "hopital*|clinique*|urgences|medecin*|docteur*|chirurg*|infirmi*",
    "L'hôpital est le lieu de la guérison : une part de toi a besoin de soin ou est en train de guérir.",
    "",
    "Les rêves d'hôpital suivent souvent une inquiétude de santé, la sienne ou celle d'un proche.",
    "Les sanctuaires d'Asclépios étaient de véritables hôpitaux du rêve.",
    "De quoi ai-je besoin de guérir ?");
  S("L", "Escaliers & échelle", "escalier*|marches|echelle*",
    "Monter : progresser, s'élever. Descendre : aller vers l'inconscient, ou une régression.",
    "Freud voyait dans l'escalier une métaphore de l'acte sexuel (rythme, essoufflement).",
    "Les escaliers sans fin ou qui se dérobent sont typiques des rêves d'anxiété.",
    "Jacob voit en songe une échelle reliant la terre au ciel (Genèse 28).",
    "Suis-je en train de monter ou de descendre en ce moment ?");
  S("L", "Ascenseur", "ascenseur*",
    "L'ascenseur est un changement rapide de niveau, sans effort : statut, humeur, situation.",
    "",
    "L'ascenseur qui tombe ou qui ne s'arrête plus est un motif typique de perte de contrôle.",
    "",
    "Qu'est-ce qui change trop vite pour moi ?");
  S("L", "Pont", "pont|ponts|passerelle*",
    "Le pont relie deux rives : une transition, une décision, une réconciliation.",
    "",
    "Un pont fragile ou effondré accompagne souvent l'hésitation devant un choix.",
    "Le pont Chinvat du zoroastrisme, le Bifröst nordique : le pont relie les mondes.",
    "Entre quelles deux rives suis-je en train de passer ?");
  S("L", "Porte", "porte|portes|portail*|serrure*|seuil*",
    "La porte est une opportunité ou une limite. Ouverte : une possibilité ; fermée : un obstacle ou une protection.",
    "",
    "Les portes qui ne ferment pas sont un motif fréquent des rêves d'insécurité.",
    "Janus, dieu romain des portes, regarde à la fois le passé et l'avenir.",
    "Quelle porte s'ouvre ou se ferme dans ma vie ?");
  S("L", "Labyrinthe & couloirs", "labyrinthe*|couloir*|dedale*|corridor*",
    "Le labyrinthe est la recherche du centre de soi. Les couloirs sans fin : une transition qui dure.",
    "",
    "Les couloirs interminables sont un décor typique des rêves d'anxiété et de recherche.",
    "Thésée vainc le Minotaure grâce au fil d'Ariane ; les cathédrales gothiques ont des labyrinthes de méditation.",
    "Quel est le fil d'Ariane qui pourrait me guider ?");
  S("L", "Lieu sacré", "eglise*|temple*|cathedrale*|chapelle*|mosquee*|synagogue*|sanctuaire*",
    "Le lieu sacré est le centre spirituel : quête de sens, besoin de recueillement, rapport aux valeurs.",
    "",
    "Les rêves spirituels sont plus fréquents chez les personnes pratiquantes, mais pas seulement : ils accompagnent les questions de sens.",
    "Dans de nombreuses traditions, les rêves reçus dans un sanctuaire avaient valeur d'oracle.",
    "Qu'est-ce qui est sacré pour moi en ce moment ?");
  S("L", "Ville & rues", "ville*|rue|rues|ruelle*|immeuble*|gratte-ciel|quartier*",
    "La ville est la vie sociale, la collectivité. Une ville inconnue : un nouveau chapitre de vie.",
    "",
    "Les villes de rêve sont souvent des collages de plusieurs lieux réels.",
    "La Jérusalem céleste figure la cité idéale de l'âme.",
    "Comment est-ce que je me sens dans ma vie sociale ?");
  S("L", "Route & chemin", "route*|chemin|chemins|carrefour*|autoroute*|sentier*|croisement*",
    "La route est le chemin de vie. Un carrefour : un choix à faire.",
    "",
    "Les choix de chemin en rêve accompagnent souvent les décisions réelles en suspens.",
    "Hécate garde les carrefours ; le Tao signifie la Voie.",
    "Quel choix est en train de se présenter à moi ?");
  S("L", "Plage & île", "plage*|ile|iles|rivage*|sable fin",
    "La plage est la frontière entre le conscient (la terre) et l'inconscient (la mer). L'île est l'isolement, ou un refuge.",
    "",
    "Décor fréquent des rêves de repos, et des rêves qui suivent des vacances.",
    "Ulysse cherche son île, Ithaque, pendant vingt ans.",
    "Ai-je besoin de repos, ou est-ce que je m'isole ?");
  S("L", "Prison & enfermement", "prison*|enferm*|cellule*|captif*|captive*|cage*|piege*|prisonnier*",
    "L'enfermement traduit une situation où tu te sens coincé(e) : relation, travail, habitude, ou croyance sur toi-même.",
    "",
    "Les rêves d'enfermement augmentent en période de contrainte (on l'a vu pendant les confinements).",
    "",
    "Qu'est-ce qui m'enferme, et qui en a la clé ?");
  S("L", "Lieu de travail", "bureau|bureaux|travail|boulot|entreprise|usine|reunion*",
    "Le travail représente ton rôle social et ton sentiment d'utilité.",
    "",
    "Les rêves de travail augmentent avec la charge et le stress : c'est la continuité directe de la vie éveillée.",
    "",
    "Quelle place mon travail prend-il dans ma tête ?");
  S("L", "Château", "chateau*|palais|donjon*|forteresse*",
    "Le château est le Soi protégé, ou une grandeur inaccessible. On y cherche souvent un trésor ou une personne.",
    "",
    "",
    "Le château du Graal n'apparaît qu'à celui qui pose la bonne question.",
    "Qu'est-ce que je protège, ou qu'est-ce que je cherche à atteindre ?");
  S("L", "Cimetière", "cimetiere*|tombes|tombeau*|pierre tombale|sepulture*",
    "Le cimetière est le lieu du passé à honorer et à laisser reposer.",
    "",
    "Souvent rêvé en période de deuil ou d'anniversaire d'un décès.",
    "Dans de nombreuses cultures, visiter les morts en rêve est une manière de les honorer.",
    "Qu'est-ce que je dois laisser reposer ?");

  /* ---------- Objets & véhicules ---------- */
  S("O", "Voiture", "voiture*|conduire|conduis*|volant|frein*|accident*",
    "La voiture est la façon dont tu mènes ta vie. Qui conduit ? Si ce n'est pas toi, qui a pris le contrôle ?",
    "",
    "Les freins qui lâchent sont un motif classique de perte de contrôle.",
    "",
    "Qui conduit ma vie en ce moment ?");
  S("O", "Train & métro", "train|trains|gare|gares|metro|wagon*|tgv|rer",
    "Le train est le chemin tracé, collectif : un parcours de vie déjà décidé. Le rater, c'est craindre de manquer une occasion.",
    "",
    "Les rêves de transport raté sont parmi les plus fréquents en période de transition.",
    "",
    "Suis-je sur les bons rails, ou sur ceux qu'on a choisis pour moi ?");
  S("O", "Avion", "avion*|aeroport*|decoll*|atterri*|pilote*",
    "L'avion est l'ambition, le grand projet, le changement de perspective.",
    "",
    "Les rêves d'accident d'avion accompagnent souvent la peur qu'un projet échoue.",
    "",
    "Quel projet est en train de décoller ?");
  S("O", "Bateau", "bateau*|navire*|barque*|voilier*|naufrage*|paquebot*",
    "Le bateau te porte sur l'eau des émotions. Un naufrage : un échec ou une crise émotionnelle.",
    "",
    "",
    "L'arche de Noé sauve la vie ; Charon fait passer les âmes en barque.",
    "Qu'est-ce qui me porte en ce moment dans mes émotions ?");
  S("O", "Bus & tram", "bus|autobus|tram|tramway|autocar",
    "Le bus est le trajet partagé : tu avances avec d'autres, au rythme du groupe.",
    "",
    "",
    "",
    "Est-ce que j'avance à mon rythme ou à celui des autres ?");
  S("O", "Clé", "cle|cles|clef|clefs|cadenas",
    "La clé ouvre ce qui était fermé : une solution, un accès, un secret.",
    "Symbole sexuel classique chez Freud (la clé et la serrure).",
    "",
    "Saint Pierre détient les clés du paradis ; dans de nombreux contes, la clé interdite révèle un secret (Barbe-Bleue).",
    "Quelle porte ai-je désormais la capacité d'ouvrir ?");
  S("O", "Argent & trésor", "argent|billets|euros|tresor*|riche|riches|richesse*|fortune*|portefeuille*|monnaie",
    "L'argent représente la valeur, l'énergie, l'estime de soi. Le trésor est le Soi caché, difficile à atteindre.",
    "Freud associait l'argent aux excréments et à l'avarice infantile.",
    "Les rêves d'argent perdu reviennent en période d'insécurité financière (continuité).",
    "Pharaon rêve de sept vaches grasses et sept maigres : Joseph y lit les années d'abondance et de famine.",
    "Quelle valeur est-ce que je m'accorde ?");
  S("O", "Miroir", "miroir*|reflet*",
    "Le miroir montre l'image de soi. Un reflet différent : une part de soi méconnue.",
    "Lien avec le narcissisme.",
    "Les reflets en rêve sont souvent déformés : beaucoup de rêveurs lucides le rapportent.",
    "Narcisse se noie dans son reflet ; le miroir de Blanche-Neige ne ment pas.",
    "Comment est-ce que je me vois en ce moment ?");
  S("O", "Valise & bagages", "valise*|bagage*|sac|sacs|sac a dos",
    "Les bagages sont ce que l'on porte avec soi : responsabilités, souvenirs, poids émotionnel.",
    "",
    "Perdre ses bagages est un rêve fréquent avant un changement important.",
    "",
    "Qu'est-ce que je porte qui ne m'appartient plus ?");
  S("O", "Livre & lettre", "livre|livres|lettre*|lire|lisais|cahier*|ecriture*",
    "Le livre est la connaissance, l'histoire de ta vie ; la lettre, un message attendu.",
    "",
    "Lire est difficile en rêve : le texte change souvent quand on le relit (Hartmann, LaBerge). C'est un excellent test de réalité.",
    "Le Talmud dit qu'« un rêve non interprété est comme une lettre non lue ».",
    "Quel message est-ce que j'attends ?");
  S("O", "Arme", "arme|armes|pistolet*|fusil*|couteau*|epee*|revolver*|fusillade*",
    "L'arme est la force d'affirmation, la capacité à trancher ou à se défendre.",
    "Symbole phallique et agressif chez Freud.",
    "Les armes apparaissent surtout dans les rêves de menace ; dans les rêves masculins, plus souvent (Hall & Van de Castle).",
    "Excalibur ne se donne qu'au roi légitime : l'arme juste demande d'être prêt.",
    "Contre quoi ai-je besoin de me défendre, ou que dois-je trancher ?");
  S("O", "Bijoux & bague", "bague*|bijou*|collier*|diamant*|perle*",
    "Le bijou est une valeur précieuse de soi. La bague, un engagement.",
    "",
    "Perdre une bague en rêve accompagne souvent un doute sur un engagement.",
    "L'anneau est symbole d'alliance et de cycle éternel dans de nombreuses traditions.",
    "Qu'est-ce que je considère comme précieux ?");
  S("O", "Vêtements", "vetement*|habit|habits|robe|robes|manteau*|costume*|uniforme*|deguis*",
    "Les vêtements sont la persona : l'image sociale. Changer de tenue, c'est changer de rôle.",
    "",
    "Être mal habillé(e) est un thème proche des rêves de nudité : peur du jugement.",
    "La tunique de Joseph le désigne comme le préféré.",
    "Quel rôle suis-je en train de jouer ?");
  S("O", "Horloge & temps", "horloge*|pendule*|sablier*|montre|montres",
    "L'horloge est le temps qui passe : urgence, échéance, peur de vieillir.",
    "",
    "L'heure affichée change souvent quand on la relit en rêve : c'est un test de réalité classique.",
    "Chronos dévore ses enfants : le temps qui consume tout.",
    "Quelle échéance me met la pression ?");
  S("O", "Nourriture", "manger|mangeais|mangeait|nourriture|repas|festin*|gateau*|pain|fruit*|cuisin*|restaurant*",
    "La nourriture est ce qui te nourrit affectivement ou intellectuellement. La faim : un manque.",
    "Satisfaction d'un besoin oral.",
    "Les personnes au régime rêvent plus souvent de nourriture : le rêve compense la privation.",
    "Le festin est partout un symbole d'abondance et de communion.",
    "De quoi ai-je faim en ce moment, au sens large ?");
  S("O", "Cadeau", "cadeau*|offrir|offert|offerte|paquet*",
    "Le cadeau est un don de l'inconscient : un talent, une idée, une reconnaissance.",
    "",
    "",
    "Les Rois mages offrent or, encens et myrrhe : le cadeau honore ce qui naît.",
    "Quel don ai-je reçu sans l'avoir encore ouvert ?");

  /* ---------- Gestes & actions ---------- */
  S("G", "Nager & plonger", "nag*|plong*",
    "Nager, c'est savoir évoluer dans ses émotions. Plonger : explorer les profondeurs de soi.",
    "",
    "Respirer sous l'eau est fréquent en rêve et souvent vécu comme libérateur.",
    "",
    "Comment est-ce que je navigue dans mes émotions ?");
  S("G", "Courir", "courir|courais|courait|courions|couru",
    "Courir, c'est fuir ou poursuivre. La direction compte : vers quoi ou loin de quoi ?",
    "",
    "Courir sans avancer est typique : la commande motrice existe dans le cerveau, mais le corps ne bouge pas.",
    "",
    "Vers quoi ou loin de quoi est-ce que je cours ?");
  S("G", "Se cacher", "cach*|planqu*|dissimul*",
    "Se cacher, c'est protéger une part de soi, ou éviter une confrontation.",
    "",
    "Scénario typique des rêves de menace (Revonsuo).",
    "Adam et Ève se cachent après avoir mangé le fruit : la honte et la conscience de soi.",
    "Qu'est-ce que je cache, et de qui ?");
  S("G", "Danser & chanter", "danser|dansais|dansait|danse|chanter|chantais|chanson*|musique*|concert*",
    "Danser et chanter expriment la joie, l'harmonie avec soi, le corps libéré.",
    "",
    "La musique en rêve est plus fréquente chez les musiciens ; Paul McCartney dit avoir entendu la mélodie de « Yesterday » en rêve.",
    "Shiva Nataraja danse la création et la destruction du monde.",
    "Où ai-je envie de m'exprimer plus librement ?");
  S("G", "Pleurer", "pleur*|larme*|sanglot*",
    "Pleurer en rêve libère souvent une émotion retenue dans la journée.",
    "",
    "Le sommeil paradoxal participe à la régulation émotionnelle : Walker parle de « thérapie de nuit ».",
    "",
    "Quelle émotion ai-je retenue récemment ?");
  S("G", "Rire", "rire|riais|riait|rigol*|fou rire",
    "Le rire libère une tension, ou signale une situation absurde à prendre avec légèreté.",
    "",
    "Les émotions positives sont plus rares que les négatives en rêve (Hall & Van de Castle) : un rêve joyeux mérite d'être noté.",
    "",
    "Qu'est-ce que je pourrais prendre plus légèrement ?");
  S("G", "Voyager", "voyag*|vacances|aventure*|a l'etranger|pays lointain",
    "Le voyage est le chemin de transformation : quitter le connu pour se découvrir.",
    "",
    "Les rêves de voyage reflètent souvent un besoin de changement ou de repos.",
    "L'Odyssée : le voyage du retour vers soi.",
    "De quel changement ai-je besoin ?");
  S("G", "Chercher", "cherch*|fouill*",
    "Chercher en rêve, c'est être en quête : d'une réponse, d'une personne, d'une part de soi perdue.",
    "",
    "Les quêtes sans fin sont typiques des rêves d'anxiété et de transition.",
    "La quête du Graal : ce qu'on cherche transforme celui qui cherche.",
    "Que suis-je vraiment en train de chercher ?");
  S("G", "Déménager", "demenag*|cartons|nouvelle maison|nouvel appartement",
    "Déménager, c'est changer d'état intérieur : une nouvelle étape de vie, une identité qui évolue.",
    "",
    "",
    "L'Exode : quitter une terre pour une autre, promesse de liberté.",
    "Quelle nouvelle étape suis-je en train d'aborder ?");

  /* Compilation des clés */
  const norm = (s) => s.toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae")
    .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’`]/g, "'");
  const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  for (const e of L) {
    e.id = slug(e.n);
    e.cat = CATS[e.c];
    e.K = e.k.split("|").map((raw) => {
      let k = norm(raw.trim());
      const prefix = k.endsWith("*");
      if (prefix) k = k.slice(0, -1);
      if (/[ ']/.test(k)) {
        k = k.replace(/[^a-z0-9-]+/g, " ").trim();
        return { t: "p", v: " " + k + (prefix ? "" : " ") };
      }
      return { t: prefix ? "s" : "w", v: k };
    });
  }

  /* Lexique émotionnel */
  const EMO = {
    peur: { n: "Peur", k: "peur*|angoiss*|terrifi*|terreur*|effray*|panique*|cauchemar*|horreur*|horrible*|stress*|anxi*|inquiet*|flipp*|frayeur*|epouvant*|crainte*|menac*" },
    joie: { n: "Joie", k: "joie*|heureu*|content|contente|bonheur|euphori*|genial*|merveilleu*|amour|ador*|fete*|rire|riais|rigol*" },
    tristesse: { n: "Tristesse", k: "trist*|pleur*|larme*|chagrin*|deprim*|seul|seule|solitude|melancol*|nostalg*|regret*|manque|abandon*" },
    colere: { n: "Colère", k: "colere*|enerv*|furieu*|rage*|agace*|frustr*|injust*|deteste*|haine*|hurl*" },
    honte: { n: "Honte", k: "honte*|humili*|ridicule*|embarrass*|coupab*|gene|genee|genant*" },
    serenite: { n: "Sérénité", k: "calme*|paisib*|serein*|apais*|doux|douce|tranquill*|repos*|securite|rassur*|soulag*" },
    emerveillement: { n: "Émerveillement", k: "emerveill*|fascin*|magique*|sublime*|incroyable*|splendide*|majestueu*|magnifique*|beau|belle" },
    confusion: { n: "Confusion", k: "bizarre*|etrange*|confus*|incomprehens*|absurde*|flou|floue|sais pas|aucun sens" }
  };
  for (const id in EMO) {
    EMO[id].K = EMO[id].k.split("|").map((raw) => {
      let k = norm(raw);
      const prefix = k.endsWith("*");
      if (prefix) k = k.slice(0, -1);
      if (k.includes(" ")) return { t: "p", v: " " + k + " " };
      return { t: prefix ? "s" : "w", v: k };
    });
  }

  window.ONIRO = { SYMBOLS: L, CATS, EMO, norm };
})();
