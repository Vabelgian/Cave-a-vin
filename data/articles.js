const ARTICLES = [
  {
    id: "pinot-gris-alsace-italie",
    titre: "Pourquoi le Pinot Gris italien et alsacien sont opposés",
    categorie: "comparaisons",
    categorieLabel: "Comparaisons",
    tags: ["Pinot Gris", "Pinot Grigio", "Alsace", "Italie", "Cépages"],
    image: "images/articles/pinot-gris.jpg",
    imageAlt: "Grappes de Pinot Gris en vigne",
    intro: "Même cépage, deux identités radicalement différentes. L'un est vif, léger et passe-partout. L'autre est ample, opulent, presque huileux.",
    lecture: 8,
    date: "2025-01-15",
    featured: true,
    contenu: [
      {
        type: "paragraphe",
        texte: "Sur une carte des vins, ils portent des noms différents. Pinot Gris côté alsacien, Pinot Grigio côté italien. Pourtant, il s'agit du même cépage, issu de la même mutation génétique du Pinot Noir, reconnaissable à ses baies d'un gris rosé caractéristique. Alors pourquoi le résultat dans le verre est-il aussi radicalement différent ? La réponse tient en deux mots : climat et intention."
      },
      {
        type: "titre2",
        texte: "L'Alsace : quand le cépage s'exprime sans retenue"
      },
      {
        type: "paragraphe",
        texte: "L'Alsace bénéficie d'un climat semi-continental, l'un des plus secs de France grâce à la protection des Vosges. Les raisins atteignent une maturité élevée, accumulant sucres et arômes au fil d'un été long et chaud. Le résultat ? Un vin riche, ample, à la texture presque huileuse."
      },
      {
        type: "paragraphe",
        texte: "Au nez, on trouve des fruits mûrs — poire confite, pêche, abricot — parfois accompagnés de notes fumées ou épicées qui font la signature du cépage. En bouche, même les vins étiquetés « secs » peuvent donner une sensation de douceur : c'est le sucre résiduel, légalement toléré en Alsace, qui arrondit l'ensemble. L'alcool est souvent présent, 13,5° à 14° n'est pas rare."
      },
      {
        type: "encadre",
        titre: "Le sucre résiduel en Alsace",
        texte: "Contrairement à ce qu'on pourrait croire, un Pinot Gris alsacien « sec » peut contenir jusqu'à 9 g/L de sucre résiduel. Ce n'est pas une erreur — c'est une tradition. Les producteurs alsaciens jouent souvent sur cette frontière entre sec et demi-sec pour apporter rondeur et complexité."
      },
      {
        type: "paragraphe",
        texte: "C'est un vin de table au sens noble du terme : il tient la longueur d'un repas, s'accorde avec la volaille à la crème, les champignons, le foie gras, les fromages à pâte molle. Un vin de gastronomie, taillé pour accompagner."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "La Vénétie : la fraîcheur comme philosophie"
      },
      {
        type: "paragraphe",
        texte: "En Italie du Nord — et particulièrement en Vénétie, région du Pinot Grigio des Tre Venezie — le contexte est tout autre. Le climat est tempéré, influencé à la fois par les Alpes au nord et par l'Adriatique à l'est. Les vendanges sont souvent plus précoces, les raisins moins chargés en sucre, l'acidité plus présente."
      },
      {
        type: "paragraphe",
        texte: "Le Pinot Grigio qui en résulte est léger, sec, vif. Les arômes sont discrets — agrumes, pomme verte, fleurs blanches — et la bouche est fluide, rafraîchissante, sans aspérité. Peu ou pas de sucre résiduel. L'alcool reste modéré. C'est un vin qui ne demande pas d'attention particulière, et c'est précisément sa force."
      },
      {
        type: "citation",
        texte: "Le Pinot Grigio ne cherche pas à impressionner. Il cherche à désaltérer — et il y excelle.",
        source: "Un sommelier vénitien, en aparté"
      },
      {
        type: "paragraphe",
        texte: "Son terrain de jeu ? L'apéritif, les salades, les poissons grillés, les antipasti. Des situations où l'on veut un vin présent sans qu'il prenne toute la place. Un vin de plaisir immédiat, sans cérémonie."
      },
      {
        type: "titre2",
        texte: "La vraie différence en une phrase"
      },
      {
        type: "paragraphe",
        texte: "Alsace, c'est puissance, complexité et texture. Vénétie, c'est fraîcheur, simplicité et buvabilité. Ni l'un ni l'autre n'est supérieur — ils répondent simplement à des moments différents. La prochaine fois que vous hésitez entre les deux sur une carte, posez-vous une seule question : est-ce que je veux être accompagné ou désaltéré ?"
      },
      {
        type: "encadre",
        titre: "Comment les distinguer à l'aveugle ?",
        texte: "Couleur : le Pinot Gris alsacien tire souvent vers le doré, parfois cuivré. Le Pinot Grigio italien est pâle, presque translucide. Nez : si vous sentez la poire mûre et le miel, vous êtes en Alsace. Des agrumes et des fleurs blanches ? Direction la Vénétie. Bouche : la texture huileuse et le léger moelleux trahissent presque toujours le style alsacien."
      }
    ]
  },

  {
    id: "chardonnay-styles",
    titre: "Le Chardonnay sans masque : nu, boisé ou oxydatif ?",
    categorie: "cepages",
    categorieLabel: "Cépages",
    tags: ["Chardonnay", "Bourgogne", "Jura", "Vinification"],
    image: "images/articles/chardonnay.jpg",
    imageAlt: "Grappes de Chardonnay dorées en lumière d'automne",
    intro: "Des Côtes du Jura aux grandes Bourgognes, ce cépage caméléon révèle la philosophie du vigneron plus que tout autre.",
    lecture: 6,
    date: "2025-01-08",
    featured: false,
    contenu: [
      {
        type: "titre2",
        texte: "Le cépage caméléon"
      },
      {
        type: "paragraphe",
        texte: "Il existe des cépages qui parlent avant même que le vigneron ouvre la bouche. Le Sauvignon Blanc, par exemple, arrive au pressoir avec ses opinions bien arrêtées : buis, pamplemousse, herbe coupée. Difficile de le faire taire. Le Chardonnay, lui, est d'une autre nature. Jeune et non travaillé, il est presque discret — pomme jaune, agrumes légers, une trame florale timide. Une page relativement blanche."
      },
      {
        type: "paragraphe",
        texte: "C'est précisément cette neutralité de départ qui en fait le cépage le plus révélateur qui soit. Sans signature aromatique imposante à l'origine, il devient le miroir parfait de deux choses : le sol sur lequel il pousse, et l'homme qui le vinifie. Entre un Chablis tendu comme une lame de rasoir et un Meursault opulent et beurré, la différence tient autant au calcaire kimméridgien qu'aux choix faits en cave. Le Chardonnay ne ment pas — il amplifie."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Nu : la pureté du terroir"
      },
      {
        type: "paragraphe",
        texte: "Premier style, radical dans sa philosophie : s'effacer. Ici, le vigneron se veut simple passeur — son rôle est de ne pas interférer entre le sol et le verre. L'élevage se fait en cuve inox ou en vieux foudres neutres qui ne laissent aucune empreinte boisée. Pas de fût neuf, pas de bâtonnage appuyé. Le vin est livré à lui-même."
      },
      {
        type: "paragraphe",
        texte: "Le résultat est tranchant, minéral, salivant. L'acidité est le moteur, la tension la signature. À Chablis — surtout sur les cuvées sans passage en bois — le calcaire kimméridgien s'exprime avec une clarté presque clinique : coquille d'huître, citron frais, pierre mouillée. Certains Mâconnais et quelques vignerons du style « ouillé » au Jura (floral et vif) appartiennent à cette même famille."
      },
      {
        type: "encadre",
        titre: "Qu'est-ce que le kimméridgien ?",
        texte: "Le kimméridgien est un calcaire marin datant du Jurassique, truffé de micro-fossiles d'huîtres. C'est la roche mère des grands Chablis. Beaucoup attribuent à ce sol la minéralité iodée caractéristique du style — une théorie débattue entre scientifiques, mais que chaque amateur de Chablis ressent dans son verre."
      },
      {
        type: "titre2",
        texte: "Boisé : l'art de l'élevage"
      },
      {
        type: "paragraphe",
        texte: "Le bois n'est pas un gros mot — à condition de savoir s'en servir. Dans la grande tradition de la Côte de Beaune, le Chardonnay passe en pièce bourguignonne (228 litres), avec un pourcentage variable de fûts neufs selon l'ambition du domaine. Le bois apporte de la texture, du gras, et une palette aromatique nouvelle : brioche, beurre frais, noisette grillée, épices douces. Le bâtonnage — ce geste consistant à remettre les lies en suspension — nourrit le vin, lui donne de la rondeur et de la longueur."
      },
      {
        type: "paragraphe",
        texte: "Meursault, Puligny-Montrachet, Corton-Charlemagne : ces noms sont les bastions de ce style. C'est un travail d'orfèvre, où le bois est utilisé comme exhausteur de relief, non comme cache-misère. La nuance est capitale. Car le piège existe, et il a un nom : le « jus de planche ». Dans les années 1990-2000, le Nouveau Monde — et certains producteurs bourguignons — ont poussé le curseur trop loin. Des vins bodybuildés, vanillés à l'excès, où le bois écrase tout. Une mode dont on revient aujourd'hui massivement."
      },
      {
        type: "citation",
        texte: "Un grand Meursault, ce n'est pas un vin boisé. C'est un vin où le bois a disparu pour ne laisser que la texture.",
        source: "Un vigneron de la Côte de Beaune"
      },
      {
        type: "titre2",
        texte: "Oxydatif : le temps et le mystère"
      },
      {
        type: "paragraphe",
        texte: "C'est le style qui bouscule, qui divise, qui fascine. Au Jura, certains vignerons pratiquent l'élevage dit « sous voile » : le fût n'est pas complètement rempli, et une fine pellicule de levures se forme à la surface du vin. Ce voile de levures — le même que pour le Vin Jaune — protège le vin d'une oxydation brutale tout en développant des arômes que la vinification conventionnelle ne peut pas produire."
      },
      {
        type: "paragraphe",
        texte: "On bascule alors dans un autre univers aromatique : noix fraîche, amande, curry, céleri, pomme blette, cire d'abeille. C'est clivant — les non-initiés sont souvent déstabilisés au premier nez. Mais ceux qui y entrent n'en reviennent pas vraiment. La complexité est d'une autre dimension, le temps y joue un rôle presque mystique. Le vigneron ne guide plus le vin : il lui fait confiance, et attend."
      },
      {
        type: "encadre",
        titre: "Ouillé ou non ouillé ?",
        texte: "Au Jura, les étiquettes portent parfois ces mentions. « Ouillé » signifie que le fût est maintenu plein (pas de contact avec l'air) — c'est le style tendu et floral. « Non ouillé » ou « traditionnel » signifie que le voile se développe — c'est le style oxydatif. Deux Chardonnays du même village, du même millésime, peuvent ainsi être radicalement opposés selon ce seul choix."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Alors, quelle vérité pour le Chardonnay ?"
      },
      {
        type: "paragraphe",
        texte: "Il n'y en a pas une. C'est précisément ce qui rend ce cépage si précieux — et parfois si déstabilisant pour qui s'y aventure sans boussole. Le Chardonnay est une passerelle culturelle autant qu'un cépage : il dit quelque chose de l'endroit, de l'époque, et de l'homme qui l'a fait."
      },
      {
        type: "paragraphe",
        texte: "Aujourd'hui, la tendance mondiale va clairement vers moins de bois neuf et plus de fraîcheur. Même en Bourgogne, les grandes maisons réduisent leur part de fûts neufs. Le Jura, longtemps confidentiel, connaît un engouement historique pour ses profils oxydatifs singuliers. Et Chablis n'a jamais été aussi populaire qu'en ce moment où le monde entier réclame de la tension et de la minéralité. Le retour au nu, en somme. La boucle est bouclée."
      }
    ]
  },

  {
    id: "napa-vs-bourgogne",
    titre: "Napa contre Bourgogne : même cépage, deux civilisations",
    categorie: "regions",
    categorieLabel: "Régions",
    tags: ["Napa Valley", "Bourgogne", "Cabernet Sauvignon", "Pinot Noir", "Terroir"],
    image: "images/articles/napa-bourgogne.jpg",
    imageAlt: "Paysage viticole de Bourgogne en automne",
    intro: "Le Cabernet Sauvignon californien et le Pinot Noir bourguignon incarnent deux conceptions opposées du grand vin.",
    lecture: 9,
    date: "2024-12-20",
    featured: false,
    contenu: [
      {
        type: "paragraphe",
        texte: "Peu de confrontations résument aussi bien le monde du vin que celle de Napa et de la Bourgogne. D'un côté, la Californie : le soleil, la maturité, l'opulence, la réussite moderne. De l'autre, la Bourgogne : la nuance, la tension, le détail, des siècles de hiérarchie des terroirs. Deux régions iconiques, deux vins rouges de prestige, deux bouteilles capables d'atteindre des prix délirants. Et pourtant, deux visions du grand vin qui n'ont presque rien en commun."
      },
      {
        type: "paragraphe",
        texte: "Le grand vin n'est pas une vérité universelle. Napa et la Bourgogne en sont la preuve la plus éloquente : il existe plusieurs façons d'atteindre la grandeur."
      },
      {
        type: "titre2",
        texte: "Le cépage comme révélateur culturel"
      },
      {
        type: "paragraphe",
        texte: "À Napa, c'est le Cabernet Sauvignon qui règne. Et le choix n'est pas anodin. Le Cabernet, c'est la structure, les tannins, la puissance, la concentration — une aptitude naturelle au vieillissement qui correspond parfaitement au climat chaud de la vallée, et à une certaine idée américaine du vin d'exception. Fruit noir mûr, chêne neuf, volume en bouche, texture presque crémeuse : l'esthétique est celle de l'impact et de la richesse assumée."
      },
      {
        type: "paragraphe",
        texte: "En Bourgogne, c'est le Pinot Noir. Un choix radicalement différent, presque inverse. Le Pinot est délicat, capricieux, peu coloré, d'une sensibilité extrême au climat. Là où le Cabernet construit un monument, le Pinot Noir esquisse une aquarelle. On ne cherche pas ici la domination du vin — on cherche l'émotion, le détail, la vibration, la lecture d'un lieu précis. Le cépage n'est qu'un vecteur transparent au service du terroir."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Le climat : la générosité contre la tension"
      },
      {
        type: "paragraphe",
        texte: "À Napa, le soleil est presque une garantie. La maturité vient naturellement, les raisins accumulent sucres et concentration sans effort. Il en résulte des vins à l'alcool élevé, expressifs dès leur jeunesse — cassis, mûre, chocolat, vanille — avec une texture dense qui impressionne immédiatement. C'est l'ère des vins aux \"broad shoulders\", celle des notes Parker et du goût international des années 1990-2000."
      },
      {
        type: "paragraphe",
        texte: "En Bourgogne, tout est plus fragile. Le gel, la pluie, la grêle, les millésimes irréguliers : chaque grande année ressemble à une victoire fragile. Mais c'est précisément cette difficulté qui crée la finesse, l'acidité, la précision aromatique. Le climat bourguignon oblige à l'humilité — et récompense par une profondeur que le soleil californien ne peut pas fabriquer."
      },
      {
        type: "encadre",
        titre: "Le jugement de Paris, 1976",
        texte: "Lors de cette dégustation historique organisée à Paris, des vins californiens — dont un Cabernet de Stag's Leap Wine Cellars — ont devancé les grands crus bourguignons et bordelais à l'aveugle. Un choc pour le monde du vin européen, et la naissance du mythe Napa sur la scène internationale."
      },
      {
        type: "titre2",
        texte: "Deux visions du terroir"
      },
      {
        type: "paragraphe",
        texte: "C'est sans doute le cœur intellectuel de la différence. En Bourgogne, le terroir est roi — et cette royauté est millénaire. Quelques mètres de différence entre deux parcelles peuvent changer radicalement un vin. Les « climats » bourguignons, inscrits au patrimoine mondial de l'UNESCO, incarnent cette obsession : chaque lieu a une identité, une hiérarchie (village, premier cru, grand cru), une mémoire. Le vigneron cherche souvent à s'effacer, à intervenir le moins possible, à laisser parler la roche."
      },
      {
        type: "paragraphe",
        texte: "Napa croit aussi au terroir — mais avec une approche plus moderne. La sélection parcellaire existe, la précision technique est réelle, la maîtrise œnologique est souvent impressionnante. Mais le vin est pensé comme une œuvre cohérente, un assemblage optimisé, une signature stylistique. Là où la Bourgogne adore les différences et les aspérités d'un lieu, Napa recherche l'harmonie et l'impact. Le terroir est interprété, mis en scène."
      },
      {
        type: "titre2",
        texte: "Deux modèles de prestige"
      },
      {
        type: "paragraphe",
        texte: "À Napa, le prestige s'est construit vite et fort. Les « cult wines » — Screaming Eagle, Harlan Estate, Opus One — incarnent une logique de rareté, de puissance et de réputation critique. Les prix atteignent des sommets sur la seule base de notes spectaculaires et d'une image de réussite à l'américaine. C'est un prestige moderne, construit en quelques décennies, fondé sur la cohérence stylistique et l'exclusivité."
      },
      {
        type: "paragraphe",
        texte: "En Bourgogne, le prestige est hérité. Le Domaine de la Romanée-Conti, Leroy, Armand Rousseau : ces noms ne se sont pas imposés par le marketing, mais par des siècles de transmission, de terroir et de rareté foncière. On ne crée pas un mythe bourguignon — on en hérite, et on tâche de ne pas le trahir. Napa construit des icônes. La Bourgogne hérite de mythes."
      },
      {
        type: "citation",
        texte: "Le Cabernet de Napa impressionne souvent immédiatement. Le Pinot bourguignon, lui, s'insinue lentement dans la mémoire.",
        source: ""
      },
      {
        type: "titre2",
        texte: "Plaisir immédiat ou contemplation ?"
      },
      {
        type: "paragraphe",
        texte: "Un grand Napa est souvent spectaculaire jeune. Expressif, accessible rapidement, impressionnant dès la première gorgée — il séduit par l'évidence. C'est un vin qui n'exige pas d'effort, qui livre tout d'emblée. Un grand Bourgogne, lui, peut être déroutant au début : subtil, presque fermé, d'une discrétion qui ressemble parfois à une déception. Puis quelque chose se passe. Un arôme, une texture, une longueur que l'on n'attendait plus. La Bourgogne séduit par la nuance — et par la surprise."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Deux définitions du grand vin"
      },
      {
        type: "paragraphe",
        texte: "Il serait tentant de trancher. Mais ce serait passer à côté du sujet. Napa et la Bourgogne ne s'opposent pas — ils se complètent, en révélant que la grandeur d'un vin n'a pas de définition universelle. Napa, c'est la maîtrise, la générosité, la puissance, l'ambition moderne. La Bourgogne, c'est la fragilité, le terroir, le détail, la profondeur culturelle."
      },
      {
        type: "paragraphe",
        texte: "Entre Napa et la Bourgogne, le vin cesse d'être une boisson pour devenir une manière de voir le monde. Deux émotions différentes. Deux langages. Et la preuve, s'il en fallait une, que les plus grandes bouteilles ne sont jamais que le reflet d'une civilisation."
      }
    ]
  },

  {
    id: "elevage-barrique",
    titre: "Le bois, ennemi ou allié ? L'élevage en barrique décortiqué",
    categorie: "vinification",
    categorieLabel: "Vinification",
    tags: ["Barrique", "Élevage", "Chêne", "Vinification"],
    image: "images/articles/barrique.jpg",
    imageAlt: "Fûts de chêne alignés dans une cave",
    intro: "Pourquoi certains vins sentent la vanille et la noix de coco ? Tout se joue dans le choix du bois, la chauffe, et la durée.",
    lecture: 7,
    date: "2024-12-10",
    featured: false,
    contenu: [
      {
        type: "paragraphe",
        texte: "Une gorgée de vin, et soudain, des notes gourmandes de vanille, de brioche grillée ou de noix de coco envahissent le palais. Pourtant, il n'y a pas un gramme de fruit exotique dans la cuve. D'où viennent ces arômes ? De la barrique de chêne."
      },
      {
        type: "paragraphe",
        texte: "Longtemps considéré comme un simple contenant pour le transport, le bois est devenu un outil d'orfèvre entre les mains du vigneron. Mais attention : mal maîtrisé, il peut masquer le terroir et écraser le fruit. Alors, allié ou ennemi ? La réponse tient dans trois variables — l'origine du bois, la chauffe, et le temps."
      },
      {
        type: "titre2",
        texte: "La chimie naturelle du chêne"
      },
      {
        type: "paragraphe",
        texte: "Pour comprendre la vanille et la noix de coco, il faut s'arrêter un instant sur la matière elle-même. Le chêne n'est pas neutre — il est riche en composés organiques qui se dissolvent progressivement dans l'alcool pendant l'élevage."
      },
      {
        type: "paragraphe",
        texte: "La vanilline, d'abord. C'est le composé le plus célèbre, et il porte bien son nom : le bois de chêne contient naturellement cette molécule, la même que dans les gousses de vanille. Elle se libère lentement dans le vin, apportant cette rondeur aromatique reconnaissable entre toutes. Les lactones du chêne, ensuite — des molécules qui donnent ces notes de noix de coco, de céleri ou de bois frais que l'on retrouve si souvent dans les vins élevés en fût."
      },
      {
        type: "encadre",
        titre: "Chêne français ou chêne américain ?",
        texte: "Le choix de l'origine du bois change tout. Le chêne américain (Quercus alba) est beaucoup plus riche en lactones que le chêne français (Quercus robur / petraea). Un vin élevé en fûts américains affichera un nez de noix de coco et de vanille exubérant et texturé. Le chêne français, lui, mise sur la subtilité : épices douces, tanins soyeux, touche boisée plus discrète. C'est pourquoi la Rioja espagnole, grande amatrice de chêne américain, s'exprime si différemment d'un Meursault bourguignon."
      },
      {
        type: "titre2",
        texte: "Le secret du tonnelier : la chauffe"
      },
      {
        type: "paragraphe",
        texte: "Une barrique ne serait rien sans le feu. Lors de la fabrication, le tonnelier chauffe l'intérieur du fût pour courber les douelles — mais cette étape, que l'on appelle le bousinage, est aussi ce qui va libérer les arômes du bois. C'est là que se joue une grande partie de la personnalité future du vin."
      },
      {
        type: "paragraphe",
        texte: "Une chauffe légère préserve le côté boisé frais et apporte de la structure sans trop marquer aromatiquement. Une chauffe moyenne, c'est là que la vanilline explose — accompagnée de pain grillé, d'amande et de caramel. Une chauffe forte pousse les sucres du bois jusqu'à la caramélisation maximale : on bascule alors sur des notes de café, de fumé, de cacao, de tabac. L'art du vigneron consiste à choisir le niveau de chauffe qui soulignera son cépage sans le maquiller."
      },
      {
        type: "citation",
        texte: "La barrique est un instrument de musique. Tout dépend de la façon dont on en joue.",
        source: "Un tonnelier de la Côte-d'Or"
      },
      {
        type: "titre2",
        texte: "Le facteur temps : neuf, usagé, longue durée"
      },
      {
        type: "paragraphe",
        texte: "Le temps passe, le bois s'estompe. C'est une règle d'or en œnologie. Un fût neuf est un volcan d'arômes — il donne un maximum de vanille, de noix de coco et de tanins au vin. C'est puissant, parfois trop. Un fût d'un ou deux vins a déjà « infusé » : il transmet ses arômes de manière beaucoup plus diffuse et discrète, en apportant surtout la micro-oxygénation sans écraser le fruit."
      },
      {
        type: "paragraphe",
        texte: "La durée d'élevage joue un rôle tout aussi décisif. Un passage de six mois apportera une touche de complexité et d'arrondi. Un élevage de 18 à 24 mois — courant sur les grands crus de Bourgogne — transformera profondément la structure du vin. Ce n'est plus seulement une question d'arômes : c'est la micro-oxygénation lente à travers les pores du bois qui stabilise les tanins et construit la longueur."
      },
      {
        type: "encadre",
        titre: "Le bâtonnage : nourrir le vin",
        texte: "Pendant l'élevage en fût, les lies (résidus de levures mortes) se déposent au fond de la barrique. Le bâtonnage consiste à les remettre en suspension régulièrement à l'aide d'un bâton. Ces lies nourrissent le vin, lui apportent du gras, de la rondeur et une texture crémeuse. C'est une technique courante sur les grands Chardonnays de Bourgogne."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Allié ou ennemi ? La réponse du vigneron moderne"
      },
      {
        type: "paragraphe",
        texte: "Le bois est un allié redoutable — à une condition : qu'il reste au service du fruit, jamais au-dessus. C'est là que se situe la ligne de crête. Pendant les années 1990-2000, la mode des vins ultra-boisés a produit des vins que l'on surnommait « jus de planche » : la vanille et le chêne neuf y recouvraient tout, gommant le terroir et le cépage sous une couche d'arômes artificiellement gourmands."
      },
      {
        type: "paragraphe",
        texte: "Aujourd'hui, le balancier est revenu. Les vignerons cherchent l'équilibre, réduisent la proportion de fûts neufs, raccourcissent les élevages ou se tournent vers de grands foudres neutres. Le bois ne doit pas être un cache-misère — il doit être un révélateur de potentiel. Quand le mariage est réussi, la vanille et la noix de coco ne sont pas des intrus dans le verre. Elles sont les notes de tête d'une symphonie plus complexe."
      }
    ]
  },

  {
    id: "millesimes-climat",
    titre: "Millésimes et caprices du ciel : lire une année viticole",
    categorie: "climat",
    categorieLabel: "Climat",
    tags: ["Millésime", "Météo", "Vendanges", "Terroir"],
    image: "images/articles/millesimes.jpg",
    imageAlt: "Vignes sous un ciel d'orage estival",
    intro: "Sécheresse, grêle, printemps précoce. Comprendre pourquoi le même domaine peut donner un chef-d'œuvre une année et un vin ordinaire l'année suivante.",
    lecture: 5,
    date: "2024-11-28",
    featured: false,
    contenu: [
      {
        type: "paragraphe",
        texte: "Deux bouteilles issues du même hectare de vigne, travaillées par le même vigneron, avec le même savoir-faire. Pourtant, l'une offre un nectar légendaire et l'autre un vin simplement correct. Comment est-ce possible ? La réponse tient en un mot : le millésime. En viticulture, le climat n'est pas un détail météo — c'est le scénariste en chef de l'année."
      },
      {
        type: "titre2",
        texte: "Le printemps précoce : le piège du démarrage en fanfare"
      },
      {
        type: "paragraphe",
        texte: "Tout commence au sortir de l'hiver. Avec le réchauffement climatique, les printemps sont de plus en plus précoces. La vigne se réveille trop tôt, les bourgeons sortent — et se retrouvent sans défense face au pire cauchemar du vigneron : les gelées tardives d'avril."
      },
      {
        type: "paragraphe",
        texte: "Si le gel frappe les jeunes bourgeons, la récolte est amputée avant même d'avoir commencé. Le millésime se jouera alors sur de très faibles rendements. Ce qui peut parfois concentrer les arômes de façon spectaculaire sur les grappes rescapées — ou donner des vins déséquilibrés si la vigne a trop souffert. En 2017, la Bourgogne et la Loire ont ainsi perdu jusqu'à 50 % de leur récolte en quelques nuits de gel. Certains domaines en ont tiré des cuvées d'une concentration rare. D'autres n'ont tout simplement rien mis en bouteille."
      },
      {
        type: "encadre",
        titre: "Comment se protège-t-on du gel ?",
        texte: "Les vignerons disposent de plusieurs armes : les bougies antigel (des milliers de petites flammes allumées dans les rangs la nuit), les tours à vent (qui brassent l'air pour éviter les poches de froid au sol), ou encore l'aspersion d'eau sur les bourgeons — qui, en gelant, forme une couche protectrice isolante. Une lutte de chaque instant, menée parfois toute la nuit."
      },
      {
        type: "titre2",
        texte: "La grêle : le traumatisme en quelques minutes"
      },
      {
        type: "paragraphe",
        texte: "C'est l'événement le plus redouté, car le plus imprévisible. En l'espace de dix minutes, un orage de grêle peut hacher les feuilles et détruire les baies d'un domaine entier — tandis que la parcelle voisine, à deux cents mètres, reste intacte. La grêle ne négocie pas."
      },
      {
        type: "paragraphe",
        texte: "Si elle frappe tôt en saison, la vigne peut parfois s'en remettre. Mais si elle intervient juste avant les vendanges, c'est la catastrophe : les grains blessés favorisent l'apparition de botrytis non désiré et de pourriture. Le vigneron doit alors effectuer un tri d'orfèvre à la récolte, grappe par grappe. C'est là que se fait souvent la différence entre un domaine qui sauve son année en sortant un petit miracle de précision, et un autre qui subit le millésime sans pouvoir réagir."
      },
      {
        type: "titre2",
        texte: "Sécheresse ou pluie : la quête de la maturité parfaite"
      },
      {
        type: "paragraphe",
        texte: "Le cœur du millésime se dessine en juillet et août, autour de la véraison — ce moment où le grain change de couleur, ramollit, et commence à se gorger de sucre. C'est là que le climat devient décisif."
      },
      {
        type: "paragraphe",
        texte: "Trop de sécheresse, et contrairement à ce qu'on pourrait croire, la vigne ne prospère pas. En cas de canicule extrême, elle se met en mode survie et bloque sa maturité. Les sucres grimpent en flèche — ce qui donnera beaucoup d'alcool — mais la maturité phénolique, celle des tanins et des arômes dans la peau, ne suit pas. On obtient des vins chauds, lourds, déséquilibrés."
      },
      {
        type: "paragraphe",
        texte: "Trop de pluie, à l'inverse, gonfle les grains d'eau et dilue les arômes. L'acidité chute, le vin sera jugé maigre ou dilué. Le millésime d'anthologie naît d'un été contrasté : de belles journées ensoleillées, des nuits fraîches pour préserver l'acidité, et juste ce qu'il faut de pluie au bon moment pour désaltérer la plante sans noyer la concentration."
      },
      {
        type: "citation",
        texte: "Un grand millésime, c'est rarement une année parfaite. C'est une année où les contrastes ont été au rendez-vous.",
        source: "Un vigneron de la Côte-Rôtie"
      },
      {
        type: "titre2",
        texte: "La date des vendanges : la décision de l'année"
      },
      {
        type: "paragraphe",
        texte: "Face à tous ces caprices, le vigneron doit prendre chaque année ce qui est probablement la décision la plus importante de son métier : quand vendanger ? Ramasser une semaine trop tôt par crainte d'une pluie annoncée peut donner un vin aux tanins verts et à l'acidité agressive. Attendre trois jours de trop peut faire basculer le vin dans la lourdeur et la surmaturité. Un chef-d'œuvre est souvent une question d'heures."
      },
      {
        type: "encadre",
        titre: "La maturité phénolique vs la maturité en sucre",
        texte: "Un raisin peut être mûr en sucre (et donc en alcool potentiel) sans être mûr phénoliquement — c'est-à-dire que les tanins dans la peau sont encore durs et herbacés. Les vignerons expérimentés goûtent les pépins : quand ils ne laissent plus d'amertume verte, la maturité est là. Un indicateur que les analyses en laboratoire ne remplacent pas complètement."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Le millésime, empreinte du temps"
      },
      {
        type: "paragraphe",
        texte: "C'est ce qui fait la beauté profonde du vin : rien n'est jamais figé, rien n'est jamais reproductible à l'identique. Un grand millésime n'est pas seulement une année où la météo a été parfaite. C'est une année où le vigneron a su lire les caprices du ciel, s'adapter en temps réel, et en tirer la quintessence de sa vigne. La météo propose. Le vigneron dispose."
      },
      {
        type: "paragraphe",
        texte: "C'est aussi pourquoi le millésime inscrit sur une étiquette n'est pas une simple formalité administrative. C'est une signature climatique, une empreinte du temps — un raccourci vers une année entière de risques, de décisions et d'incertitudes que chaque gorgée raconte à sa manière."
      }
    ]
  },

  {
    id: "cisterciens-bourgogne",
    titre: "Les moines cisterciens, premiers grands vignerons de Bourgogne",
    categorie: "histoire",
    categorieLabel: "Histoire",
    tags: ["Cisterciens", "Moyen Âge", "Bourgogne", "Clos", "Histoire"],
    image: "images/articles/cisterciens.jpg",
    imageAlt: "Abbaye cistercienne entourée de vignes",
    intro: "Avant les appellations et les négociants, des religieux ont patiemment cartographié les parcelles et inventé la notion de climat.",
    lecture: 10,
    date: "2024-11-15",
    featured: false,
    contenu: [
      {
        type: "paragraphe",
        texte: "Quand on regarde la carte des vins de la Côte de Nuits ou de la Côte de Beaune, on fait face à un véritable puzzle : des centaines de petites parcelles aux noms poétiques — Les Amoureuses, Le Montrachet, Les Saint-Georges — qui donnent des vins radicalement différents à quelques mètres d'intervalle. Ce découpage d'orfèvre n'est pas le fruit du hasard moderne. On le doit à la patience infinie et à la rigueur quasi scientifique d'un ordre religieux né au XIe siècle : les moines cisterciens."
      },
      {
        type: "titre2",
        texte: "Ora et Labora : prier et travailler la terre"
      },
      {
        type: "paragraphe",
        texte: "En 1098, une poignée de moines quitte l'abbaye de Molesme pour s'installer à Cîteaux, au sud de Dijon, et fonder un ordre nouveau. Leur ambition : revenir à la pauvreté, à l'isolement et au travail manuel. Ora et labora — prie et travaille. Très vite, l'abbaye reçoit des dons de terres, notamment des parcelles de vignes sur la Côte. Et les moines s'y mettent avec une rigueur qui va changer le visage du vignoble pour toujours."
      },
      {
        type: "paragraphe",
        texte: "Pourquoi des religieux se sont-ils investis dans la vigne avec autant de ferveur ? D'abord par nécessité liturgique : il faut du vin, symbole du sang du Christ, pour célébrer la messe chaque jour. Ensuite par hospitalité et commerce : le vin sert à accueillir pèlerins et hôtes de marque, et le surplus devient une source de revenus majeure pour financer la construction des abbayes. La vigne n'est pas un luxe — c'est une obligation."
      },
      {
        type: "encadre",
        titre: "L'ordre de Cîteaux en quelques dates",
        texte: "1098 : fondation de l'abbaye de Cîteaux par Robert de Molesme. 1112 : arrivée de Bernard de Clairvaux, qui va propulser l'ordre à l'échelle européenne. XIIe-XIIIe siècles : apogée de l'influence cistercienne sur le vignoble bourguignon. 1789 : la Révolution française confisque les biens du clergé — les vignes cisterciennes sont dispersées et vendues à des particuliers, donnant naissance à la mosaïque de propriétaires que l'on connaît aujourd'hui."
      },
      {
        type: "titre2",
        texte: "L'invention du Climat : goûter le sol"
      },
      {
        type: "paragraphe",
        texte: "N'ayant pas de distractions mondaines, et disposant de siècles devant eux, les cisterciens sont devenus des observateurs hors pair. Ils ont compris avant tout le monde qu'un cépage — le Pinot Noir ou le Chardonnay — changeait radicalement de visage selon l'endroit précis où il était planté. Pas d'une région à l'autre : d'une parcelle à l'autre."
      },
      {
        type: "paragraphe",
        texte: "Pour cartographier ce mystère, ils ont appliqué une méthode empirique d'une rigueur remarquable. Ils isolaient chaque parcelle pour la vinifier séparément. Ils observaient l'exposition au soleil, la façon dont l'eau s'égouttait sur les pentes, la nature des sols — calcaires ici, argileux là. La légende raconte même qu'ils goûtaient la terre pour en évaluer les nuances salines ou ferreuses. Pendant des siècles, année après année, ils ont ainsi bâti une cartographie sensorielle d'une précision inégalée."
      },
      {
        type: "paragraphe",
        texte: "C'est de cette démarche qu'est née la notion de Climat en Bourgogne : une parcelle de vigne précisément délimitée, bénéficiant de conditions géologiques et climatiques particulières, et produisant un vin à l'identité reproductible d'une année sur l'autre. Un concept si juste qu'il structure encore aujourd'hui l'ensemble de l'appellation bourguignonne."
      },
      {
        type: "titre2",
        texte: "Le Clos de Vougeot : le laboratoire à ciel ouvert"
      },
      {
        type: "paragraphe",
        texte: "Le symbole absolu de ce travail de titan reste le Clos de Vougeot. Dès le XIIe siècle, les moines de Cîteaux achètent et regroupent patiemment des dizaines de parcelles sur ce coteau privilégié. Pour sanctuariser ce terroir et le protéger des vols et des animaux, ils l'entourent d'un mur de pierre de trois kilomètres de long — le fameux clos, qui donne son nom au domaine."
      },
      {
        type: "paragraphe",
        texte: "À l'intérieur de ces 50 hectares, les cisterciens ont très tôt repéré trois zones de qualité distinctes. En haut du coteau : un sol mince, calcaire, parfaitement drainé, donnant leur cuvée la plus précieuse — celle réservée au pape. Au milieu : un sol légèrement plus profond, destiné aux ducs et aux rois. En bas : une terre plus riche et argileuse où l'eau stagne, produisant un vin plus commun, réservé aux moines et aux passants."
      },
      {
        type: "encadre",
        titre: "Un découpage toujours valide 800 ans plus tard",
        texte: "Cette hiérarchie cistercienne coïncide presque exactement avec les classifications actuelles. Le haut du Clos de Vougeot correspond aux parcelles les plus cotées du Grand Cru. Le bas, autrefois réservé aux passants, produit aujourd'hui encore des vins jugés moins complexes par les critiques. La géologie ne ment pas — et les moines l'avaient compris avant tout le monde."
      },
      {
        type: "citation",
        texte: "Les cisterciens n'ont pas inventé le vin de Bourgogne. Ils ont inventé l'idée que chaque parcelle méritait d'être écoutée.",
        source: ""
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Un héritage inscrit à l'UNESCO"
      },
      {
        type: "paragraphe",
        texte: "Lorsque vous ouvrez une bouteille de Bourgogne aujourd'hui, vous buvez le résultat de neuf cents ans d'archives, d'observations et de sélections cisterciennes. Ce sont eux qui ont banni les cépages médiocres — le Gamay notamment, jugé trop productif et trop vulgaire — pour imposer le Pinot Noir et le Chardonnay. Ce sont eux qui ont tracé les frontières des terroirs que l'on admire et que l'on dispute encore aujourd'hui."
      },
      {
        type: "paragraphe",
        texte: "Un travail si unique, si patient, si précis, qu'il a conduit en 2015 à l'inscription des Climats du vignoble de Bourgogne au patrimoine mondial de l'UNESCO. Une reconnaissance tardive — mais méritée — pour des vignerons en robe qui n'ont jamais signé une seule étiquette."
      }
    ]
  },

  {
    id: "dose-verre-restaurant",
    titre: "Pourquoi verse-t-on si peu dans les grands restaurants ?",
    categorie: "curiosites",
    categorieLabel: "Curiosités",
    tags: ["Service", "Dégustation", "Arômes", "Température"],
    image: "images/articles/verre-restaurant.jpg",
    imageAlt: "Verre de dégustation partiellement rempli sur nappe blanche",
    intro: "La portion de 7 cl a une raison d'être scientifique et sensorielle. Une plongée dans la physique du verre et l'évolution de l'arôme en coupe.",
    lecture: 4,
    date: "2024-10-30",
    featured: false,
    contenu: [
      {
        type: "paragraphe",
        texte: "Tout amateur de vin a déjà vécu ce moment. Un serveur approche, incline la bouteille avec soin… et verse à peine quelques centimètres dans un immense verre. Réaction instinctive : c'est ridicule. Je vais finir ça en deux gorgées. Pourquoi un contenant aussi grand pour si peu de liquide ?"
      },
      {
        type: "paragraphe",
        texte: "Puis on renverse la perspective. Dans la haute gastronomie, ce vide n'est pas un manque. C'est un outil — peut-être le plus important de la table."
      },
      {
        type: "titre2",
        texte: "Le grand verre n'est pas fait pour contenir : il est fait pour libérer"
      },
      {
        type: "paragraphe",
        texte: "Le verre à vin moderne n'est pas un récipient. C'est une chambre aromatique. Quand le vin y est versé, il s'oxygène immédiatement. Les composés aromatiques volatils se libèrent, montent dans le ballon, se concentrent dans l'espace vide au-dessus du liquide. Ce vide n'est pas du vide : c'est une zone de concentration olfactive, un amplificateur invisible."
      },
      {
        type: "paragraphe",
        texte: "Dans un grand verre, l'espace vide fait partie intégrante de la dégustation. C'est lui qui permet au nez de plonger dans le ballon et de capter les arômes avant même que le vin touche les lèvres. Remplir le verre jusqu'en haut, c'est supprimer cet espace — et avec lui, l'essentiel du spectacle."
      },
      {
        type: "titre2",
        texte: "La science des arômes : le nez avant la bouche"
      },
      {
        type: "paragraphe",
        texte: "Ce que beaucoup ignorent : la majorité de ce qu'on appelle le « goût » vient en réalité de l'olfaction. Les papilles détectent le sucré, l'acide, l'amer, le salé et l'umami. Tout le reste — la fraise, la réglisse, le sous-bois, la truffe — passe par le nez, soit directement, soit par rétro-olfaction (les arômes qui remontent en bouche vers les fosses nasales après la gorgée)."
      },
      {
        type: "paragraphe",
        texte: "Un verre trop rempli étouffe littéralement le vin. Moins de surface de contact avec l'air, moins de rotation possible lors de l'agitation, arômes comprimés, alcool parfois plus agressif à l'attaque. Le vin est là — mais il ne peut pas s'exprimer."
      },
      {
        type: "encadre",
        titre: "La rétro-olfaction : le secret du palais",
        texte: "Lorsque vous avalez une gorgée de vin, les molécules aromatiques remontent par le fond de la gorge vers vos récepteurs olfactifs. C'est ce phénomène, la rétro-olfaction, qui explique pourquoi un vin « explose » en bouche bien après la première impression. Un grand verre, en permettant une bonne oxygénation, multiplie ces molécules disponibles et enrichit cette expérience."
      },
      {
        type: "titre2",
        texte: "Les fameux 7 cl : une mesure pensée, pas arbitrary"
      },
      {
        type: "paragraphe",
        texte: "Sept centilitres, c'est la portion courante dans les grandes tables. Elle correspond à la quantité idéale pour traverser toutes les étapes d'une dégustation attentive : le premier nez à froid, l'agitation pour libérer les arômes, le nez après ouverture, la mise en bouche, et l'observation de l'évolution dans le verre sur plusieurs minutes."
      },
      {
        type: "paragraphe",
        texte: "C'est aussi une question de température. Un verre trop rempli chauffe plus vite — la chaleur de la main remonte plus rapidement dans le liquide. Or un vin servi trop chaud perd sa fraîcheur, ses arômes deviennent lourds, et l'alcool prend le dessus. Le petit service permet des resservices fréquents, garantissant que chaque gorgée est à la bonne température."
      },
      {
        type: "titre2",
        texte: "La physique du verre : un instrument, pas un récipient"
      },
      {
        type: "paragraphe",
        texte: "Les grandes maisons de verrerie — Riedel, Zalto, Josephinenhütte — ont consacré des décennies à affiner la géométrie du verre à vin. Le diamètre du buvant oriente les molécules aromatiques vers les récepteurs olfactifs. La largeur du ballon détermine la surface d'évaporation. La courbure du bord influence l'angle d'entrée du vin sur la langue, modifiant la perception de l'acidité ou de la douceur."
      },
      {
        type: "citation",
        texte: "Un verre gastronomique est moins un récipient qu'un instrument acoustique pour les arômes.",
        source: ""
      },
      {
        type: "titre2",
        texte: "Le vin change pendant qu'on le boit"
      },
      {
        type: "paragraphe",
        texte: "C'est peut-être la partie la plus fascinante — et la plus mal connue. Dans un grand restaurant, le vin est censé évoluer dans le verre au fil du repas. Un grand Pinot Noir peut passer, en vingt minutes, du fruit frais aux épices, puis au sous-bois et au cuir. Ce n'est pas une illusion : c'est la chimie réelle du vin au contact de l'air."
      },
      {
        type: "paragraphe",
        texte: "Si le verre est trop rempli, cette évolution devient difficile à observer et à apprécier. Le vin se fatigue plus vite, le palais aussi. Le petit service, au contraire, permet de recommencer la dégustation à chaque resservice — un nouveau nez, une nouvelle première gorgée, une nouvelle séquence aromatique."
      },
      {
        type: "titre2",
        texte: "Quand le minimalisme devient caricatural"
      },
      {
        type: "paragraphe",
        texte: "Il faut le dire aussi : il y a une frontière entre précision sensorielle et snobisme. Certains établissements ont poussé le concept trop loin — des services si minimes qu'ils semblent davantage une démonstration de style qu'une attention au client. Le convive repart avec l'impression d'avoir payé très cher pour regarder son verre plutôt que pour boire."
      },
      {
        type: "paragraphe",
        texte: "La haute gastronomie à son meilleur sait doser : suffisamment peu pour préserver la fraîcheur et l'évolution, suffisamment pour que le plaisir ne soit pas sacrifié à l'esthétique. La précision n'exclut pas la générosité."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Le vide fait partie du vin"
      },
      {
        type: "paragraphe",
        texte: "Dans le vin, l'absence a parfois autant d'importance que la matière. Un grand verre à moitié vide n'est pas un verre à moitié plein — c'est un espace de respiration, d'évolution, de surprise. On ne sert pas seulement du vin. On sert de l'espace pour qu'il respire, évolue, et raconte quelque chose."
      },
      {
        type: "paragraphe",
        texte: "Le paradoxe du grand restaurant est peut-être là : pour mieux goûter le vin, il faut parfois accepter qu'il y en ait moins dans le verre."
      }
    ]
  },

  {
    id: "naturel-biodynamique-conventionnel",
    titre: "Naturel, biodynamique, conventionnel : derrière les étiquettes",
    categorie: "styles",
    categorieLabel: "Styles de vins",
    tags: ["Vin naturel", "Biodynamie", "Agriculture biologique", "Vinification"],
    image: "images/articles/vin-naturel.jpg",
    imageAlt: "Verre de vin rouge ambré en lumière dorée",
    intro: "Ces termes fleurissent sur les cartes des restaurants. Mais que recouvrent-ils vraiment — sans idéologie ?",
    lecture: 8,
    date: "2024-10-15",
    featured: false,
    contenu: [
      {
        type: "paragraphe",
        texte: "Les cartes des vins ont appris une nouvelle langue. « Vin nature », « sans sulfites ajoutés », « biodynamie », « levures indigènes », « non filtré », « agriculture raisonnée » — autant de termes qui peuplent aujourd'hui les tables des restaurants et les rayons des cavistes. Le consommateur moyen ne sait pas toujours ce qu'ils signifient. Et il associe parfois automatiquement « naturel » à « meilleur » — ou au contraire à « bizarre »."
      },
      {
        type: "paragraphe",
        texte: "Commander une bouteille demande parfois autant un dictionnaire qu'un tire-bouchon. Alors, mettons les mots à leur place — sans militantisme ni guerre de chapelles."
      },
      {
        type: "titre2",
        texte: "Conventionnel : le grand mal aimé"
      },
      {
        type: "paragraphe",
        texte: "Le mot est souvent prononcé avec une légère condescendance. Pourtant, il désigne simplement la viticulture majoritaire : l'utilisation de produits phytosanitaires de synthèse — fongicides, insecticides, herbicides — pour protéger la vigne des maladies et des ravageurs, avec une approche visant la stabilité et le rendement."
      },
      {
        type: "paragraphe",
        texte: "Il faut être honnête : le conventionnel va du productivisme industriel le plus cynique jusqu'à des domaines extrêmement sérieux et qualitatifs. Beaucoup des plus grands vins du XXe siècle ont été produits en viticulture conventionnelle. L'étiquette ne dit rien de la qualité — elle dit quelque chose des méthodes."
      },
      {
        type: "titre2",
        texte: "Bio : une agriculture avant d'être un goût"
      },
      {
        type: "paragraphe",
        texte: "Point essentiel, souvent mal compris : le bio concerne d'abord la culture de la vigne, pas directement le style du vin. L'agriculture biologique interdit les herbicides et pesticides de synthèse, et encadre strictement les traitements chimiques. Elle autorise encore le cuivre et le soufre — deux produits naturels mais non sans impact sur l'environnement à fortes doses."
      },
      {
        type: "encadre",
        titre: "Un vin bio peut avoir un goût totalement classique",
        texte: "C'est le malentendu le plus fréquent. La certification bio atteste d'un mode de culture — elle ne garantit ni un style particulier, ni une absence d'interventions en cave. Un vigneron bio peut tout à fait utiliser des levures sélectionnées, filtrer son vin et ajouter des sulfites dans les limites autorisées. Bio ne signifie pas nature."
      },
      {
        type: "titre2",
        texte: "Biodynamie : entre agriculture et vision cosmique"
      },
      {
        type: "paragraphe",
        texte: "C'est la partie la plus délicate — et la plus fascinante. La biodynamie, formalisée par Rudolf Steiner au début du XXe siècle, considère le domaine comme un organisme vivant autonome. Elle intègre les cycles lunaires et cosmiques dans le calendrier du vigneron : certains jours sont plus favorables pour tailler, vendanger ou mettre en bouteille. Elle utilise des préparations spécifiques, dont la célèbre préparation 500 — de la bouse de vache maturée dans une corne de vache enterrée, puis diluée et dynamisée avant d'être répandue sur les sols."
      },
      {
        type: "paragraphe",
        texte: "Sur ce point, deux camps s'affrontent. Certains vignerons observent des effets réels — une meilleure vitalité des sols, une expression plus nette du terroir. Les scientifiques restent globalement sceptiques sur les fondements théoriques. Mais un point fait consensus : la biodynamie pousse à une attention extrême au vignoble, à une observation constante, à une présence quasi quotidienne. Et ça, personne ne le conteste."
      },
      {
        type: "encadre",
        titre: "Quelques grands domaines convertis à la biodynamie",
        texte: "Le Domaine de la Romanée-Conti, le Domaine Zind-Humbrecht en Alsace, ou encore Château Pontet-Canet à Pauillac ont adopté la biodynamie et figurent parmi les références absolues de leurs appellations. Coïncidence ou causalité ? Le débat reste ouvert — mais il est difficile de les accuser de produire de mauvais vins."
      },
      {
        type: "titre2",
        texte: "Vin nature : le terme le plus flou"
      },
      {
        type: "paragraphe",
        texte: "Longtemps sans définition légale universelle stricte, le vin nature cherche à minimiser toute intervention, à la vigne comme en cave. Concrètement : des levures indigènes (celles naturellement présentes sur le raisin et dans le chai, opposées aux levures sélectionnées industriellement), peu ou pas de sulfites ajoutés, peu de filtration. Le vin est livré à lui-même, pour le meilleur et parfois pour le pire."
      },
      {
        type: "titre3",
        texte: "Deux termes à démystifier"
      },
      {
        type: "paragraphe",
        texte: "Les sulfites d'abord — ils sont souvent présentés comme le grand méchant de l'étiquette. Mais ils existent naturellement dans tout vin, en petites quantités, comme sous-produit de la fermentation. Les sulfites ajoutés protègent le vin de l'oxydation et le stabilisent microbiologiquement. Ils ne sont pas « le mal » — leur usage excessif, en revanche, peut alourdir le vin et provoquer des maux de tête chez les personnes sensibles. La filtration ensuite : retirer les particules et levures avant mise en bouteille donne un vin plus stable et plus limpide, mais certains pensent qu'elle appauvrit la texture et le potentiel aromatique."
      },
      {
        type: "titre2",
        texte: "Pourquoi certains vins nature sentent bizarre"
      },
      {
        type: "paragraphe",
        texte: "Question légitime, réponse honnête. Sans sulfites pour protéger le vin, sans levures sélectionnées pour maîtriser la fermentation, des micro-organismes indésirables peuvent prendre le dessus. Les Brettanomyces — appelées « brett » — donnent des arômes de cuir, d'étable, d'animal. L'acidité volatile produit des notes de vinaigre ou de dissolvant. La réduction crée des arômes d'œuf ou d'allumette."
      },
      {
        type: "paragraphe",
        texte: "Dans le vin nature, la frontière entre personnalité et défaut devient parfois subjective. Certains amateurs considèrent un léger brett comme une signature rustique séduisante. D'autres y voient un vin mal fait. Les deux ont techniquement raison — c'est une question de seuil et de tolérance. Ce qui n'est pas acceptable, en revanche, c'est de vendre un défaut comme une philosophie."
      },
      {
        type: "titre2",
        texte: "Le vrai sujet : combien intervenir, et pourquoi ?"
      },
      {
        type: "paragraphe",
        texte: "Au fond, tous les vignerons interviennent. La vigne ne se cultive pas seule, le vin ne se fait pas sans décisions humaines. La vraie question n'est pas « intervenir ou non » — c'est « combien, pourquoi, et avec quel objectif ». Un vigneron conventionnel soucieux de son terroir peut produire un vin plus expressif qu'un vigneron nature qui laisse ses cuves dériver. L'étiquette ne remplace ni le talent, ni l'attention, ni l'honnêteté."
      },
      {
        type: "citation",
        texte: "Une étiquette ne remplace ni le talent du vigneron, ni le plaisir dans le verre.",
        source: ""
      },
      {
        type: "titre2",
        texte: "Le piège du marketing vert"
      },
      {
        type: "paragraphe",
        texte: "Certains termes rassurent commercialement bien plus qu'ils ne décrivent réellement une pratique. « Raisonné », « de la terre », « respectueux », « vivant » — des mots qui évoquent la vertu sans aucun cadre légal contraignant. Le consommateur associe parfois automatiquement « naturel » à « authentique » et « conventionnel » à « industriel ». La réalité est infiniment plus nuancée : il existe de grands vins dans chaque approche, et des vins médiocres aussi."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Au-delà des slogans"
      },
      {
        type: "paragraphe",
        texte: "Entre conventionnel, bio, biodynamie et nature, il existe moins une hiérarchie morale qu'une multitude de façons de penser la vigne et le vin. Le vin est probablement trop vivant, trop complexe et trop humain pour entrer parfaitement dans une case."
      },
      {
        type: "paragraphe",
        texte: "Derrière ces mots souvent brandis comme des étendards se cache surtout une question vieille comme le vin lui-même : jusqu'où l'homme doit-il intervenir dans ce que produit la nature ? Chaque vigneron y répond à sa manière, avec ses convictions, ses sols et ses millésimes. C'est peut-être ça, finalement, qui rend le vin si difficile à résumer — et si impossible à réduire à une étiquette."
      }
    ]
  },

  {
    id: "rioja-ribera-del-duero",
    titre: "Rioja contre Ribera del Duero : deux Espagnes, deux âmes",
    categorie: "comparaisons",
    categorieLabel: "Comparaisons",
    tags: ["Rioja", "Ribera del Duero", "Tempranillo", "Espagne"],
    image: "images/articles/espagne-vins.jpg",
    imageAlt: "Vignoble espagnol sous ciel bleu intense",
    intro: "La Rioja vieillit doucement dans ses barriques américaines. La Ribera joue la puissance et la densité. Le Tempranillo, deux vies radicalement différentes.",
    lecture: 7,
    date: "2024-09-20",
    featured: false,
    contenu: [
      {
        type: "paragraphe",
        texte: "Deux grandes régions, un seul cépage. Le Tempranillo est la colonne vertébrale de la Rioja comme de la Ribera del Duero — et pourtant, ce qu'il donne dans le verre est presque opposé d'une région à l'autre. C'est justement ça qui est fascinant : même matière première, expressions radicalement différentes. Deux visions de l'Espagne viticole, deux manières d'atteindre la grandeur."
      },
      {
        type: "titre2",
        texte: "La Rioja : l'élégance comme tradition"
      },
      {
        type: "paragraphe",
        texte: "Historiquement, la Rioja est la région la plus célèbre d'Espagne. Située dans le nord du pays, elle bénéficie d'une influence atlantique plus marquée que ses rivales — des étés plus tempérés, des nuits plus fraîches, une acidité naturellement plus présente dans les raisins. Le style classique du Rioja repose sur l'équilibre, la fraîcheur et la complexité tertiaire apportée par l'élevage."
      },
      {
        type: "paragraphe",
        texte: "Car c'est là la grande signature du Rioja traditionnel : le temps passé en barrique, souvent américaine, puis en bouteille avant commercialisation. Résultat dans le verre — fruits rouges mûrs, cuir, tabac, vanille, noix de coco, herbes sèches. Une texture satinée, des tannins polis, un alcool rarement démonstratif. Certains grands Riojas old school, ultra évolués, flirtent avec une élégance presque bourguignonne."
      },
      {
        type: "encadre",
        titre: "Les trois sous-régions de la Rioja",
        texte: "La Rioja Alta, plus fraîche et élevée, produit les styles les plus classiques et élégants — c'est souvent là que naissent les grandes cuvées de garde. La Rioja Alavesa, en altitude, mise sur la finesse et la tension. La Rioja Oriental, plus au sud et plus chaude, donne des vins plus solaires, plus concentrés, parfois moins complexes. Trois terroirs, trois tempéraments sous un même nom."
      },
      {
        type: "encadre",
        titre: "Les producteurs emblématiques",
        texte: "López de Heredia, La Rioja Alta, Marqués de Murrieta, CVNE — ces maisons incarnent la tradition riojana dans ce qu'elle a de plus noble : des vins qui n'ont pas peur du temps, qui arrivent sur le marché déjà évolués, et qui continuent de se développer des décennies en cave."
      },
      {
        type: "titre2",
        texte: "La Ribera del Duero : la puissance comme signature"
      },
      {
        type: "paragraphe",
        texte: "La Ribera del Duero est une autre Espagne. Plus extrême climatiquement — très chaud le jour, très froid la nuit, altitude élevée sur le plateau castillan. Le Tempranillo y porte d'autres noms : Tinto Fino, Tinta del País. Et il s'exprime différemment. Plus sombre, plus dense, plus concentré, plus tannique. La matière prime sur la finesse, l'impact sur l'élégance."
      },
      {
        type: "paragraphe",
        texte: "Le profil aromatique bascule vers la mûre, la prune noire, l'espresso, le cacao, le graphite, le fumé. L'élevage fait souvent appel au chêne français moderne plutôt qu'à l'américain, ce qui donne des vins plus serrés, moins vanillés. Sur les cuvées les plus ambitieuses, on s'approche parfois d'un registre international — quelque chose entre Bordeaux moderne et Napa dans les millésimes solaires."
      },
      {
        type: "encadre",
        titre: "Les producteurs emblématiques",
        texte: "Vega Sicilia est la référence absolue — son Unico figure parmi les plus grands vins d'Espagne toutes régions confondues. Pesquera, Emilio Moro et Aalto incarnent des styles différents mais tous centrés sur cette même densité caractéristique de la région."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "La vraie différence dans le verre"
      },
      {
        type: "paragraphe",
        texte: "Si l'on caricature un peu : la Rioja, c'est une veste en tweed, une bibliothèque, un cigare, la tradition. La Ribera del Duero, c'est un costume moderne, du muscle, de la densité, de l'impact. D'un côté, une texture souple, une acidité visible, un élevage intégré, une complexité aromatique qui se déroule lentement. De l'autre, de la matière, de la concentration, du fruit noir, des tannins qui tiennent, une puissance qui ne se cache pas."
      },
      {
        type: "citation",
        texte: "Là où un Rioja classique joue la finesse et l'évolution, un Ribera cherche l'impact et la profondeur. Deux façons d'avoir raison.",
        source: ""
      },
      {
        type: "titre2",
        texte: "Des frontières de moins en moins rigides"
      },
      {
        type: "paragraphe",
        texte: "Comme souvent dans le monde du vin, la réalité s'est complexifiée. Certains Riojas sont devenus très modernes, puissants, extraits — s'éloignant du style classique qui faisait leur réputation. Certains Ribera cherchent aujourd'hui plus de fraîcheur, plus de finesse, moins de bois neuf. Les nouvelles générations de vignerons brouillent les pistes, parfois au risque de perdre ce qui rendait chaque région unique."
      },
      {
        type: "paragraphe",
        texte: "Mais au fond, le contraste reste entier. Et c'est une chance : dans un monde viticole qui tend à s'homogénéiser, avoir deux régions partageant le même cépage et donnant des vins aussi distincts est un rappel de ce qui rend le vin irréductible à une formule. Le Tempranillo n'est pas un style — c'est une passerelle entre deux civilisations viticoles."
      }
    ]
  },

  {
    id: "georgie-berceau-vin",
    titre: "La Géorgie, berceau du vin : 8 000 ans de kvevri et d'ambre",
    categorie: "regions",
    categorieLabel: "Régions",
    tags: ["Géorgie", "Kvevri", "Vin orange", "Histoire", "Caucase"],
    image: "images/articles/georgie-vin.jpg",
    imageAlt: "Amphores kvevri enterrées dans un domaine géorgien",
    intro: "Avant la France, avant Rome, il y avait le Caucase. Les amphores enterrées, les macérations longues : redécouvrir la source même de la viticulture.",
    lecture: 11,
    date: "2024-09-05",
    featured: false,
    contenu: [
      {
        type: "paragraphe",
        texte: "Avant la France. Avant Rome. Avant la Grèce antique. Il y avait le Caucase. Dans les contreforts des montagnes qui séparent aujourd'hui la Géorgie de l'Arménie et de l'Azerbaïdjan, des traces de vinification remontant à 8 000 ans ont été retrouvées — des résidus de raisin fermenté dans des jarres en argile enfouies dans le sol. C'est là, selon toute probabilité, que l'humanité a fait du vin pour la première fois."
      },
      {
        type: "paragraphe",
        texte: "La Géorgie n'est pas une région viticole parmi d'autres. C'est la source. Et elle produit encore aujourd'hui des vins d'une singularité absolue, selon des méthodes que le reste du monde commence seulement à redécouvrir."
      },
      {
        type: "titre2",
        texte: "Le kvevri : une technologie vieille de huit millénaires"
      },
      {
        type: "paragraphe",
        texte: "Le kvevri est une jarre en argile cuite, en forme d'œuf, dont la taille peut varier d'une centaine de litres à plusieurs tonnes. On l'enduit de cire d'abeille à l'intérieur pour l'imperméabiliser, puis on l'enterre dans le sol jusqu'à l'ouverture — parfois dans la cave, parfois directement dans la vigne. Et c'est là que le vin fermente et vieillit."
      },
      {
        type: "paragraphe",
        texte: "L'enfouissement n'est pas un détail esthétique. Le sol maintient une température stable tout au long de l'année — idéale pour une fermentation lente et une conservation naturelle. Pas de bois, pas d'inox, pas de contrôle électronique de température. La terre fait le travail. C'est une technologie d'une efficacité remarquable, développée empiriquement sur des millénaires, et inscrite au patrimoine immatériel de l'UNESCO depuis 2013."
      },
      {
        type: "encadre",
        titre: "Le kvevri et l'amphore : deux traditions, une idée",
        texte: "Le kvevri géorgien est souvent rapproché de l'amphore méditerranéenne utilisée dans l'Antiquité romaine et grecque. Même principe — une jarre en argile, enterrée ou semi-enterrée, pour fermenter et conserver le vin. La différence tient surtout à la forme (l'amphore a des anses et une base pointue), à l'utilisation (l'amphore servait surtout au transport), et à la continuité : là où l'amphore a disparu de la production courante, le kvevri est resté vivant en Géorgie sans interruption."
      },
      {
        type: "titre2",
        texte: "Les vins orange : quand la peau blanche macère"
      },
      {
        type: "paragraphe",
        texte: "La Géorgie est aussi le berceau d'un style de vin qui fascine et déroute : le vin orange, ou vin de macération. En Occident, les vins blancs sont produits en pressant rapidement le raisin et en séparant le jus de la peau. En Géorgie, la tradition veut que l'on vinifie les blancs comme des rouges — en laissant le jus en contact prolongé avec les peaux, les pépins et parfois les rafles, pendant des semaines, des mois, parfois plus d'un an."
      },
      {
        type: "paragraphe",
        texte: "Le résultat est spectaculaire à voir : une couleur ambrée, dorée, parfois cuivrée, qui a donné son nom au style. Et en bouche, c'est une expérience à part entière — des tannins inhabituels pour un blanc, une texture dense, une palette aromatique qui va de l'abricot sec à la noix, du thé noir au miel, des épices orientales à la cire d'abeille. Déroutant au premier contact. Inoubliable après."
      },
      {
        type: "citation",
        texte: "Le vin orange géorgien ne ressemble à rien d'autre. C'est un blanc qui a la structure d'un rouge et l'âme d'un vieux sage.",
        source: "Un importateur parisien de vins caucasiens"
      },
      {
        type: "titre2",
        texte: "Les cépages autochtones : un patrimoine génétique unique"
      },
      {
        type: "paragraphe",
        texte: "La Géorgie compte plus de 500 cépages autochtones recensés — un chiffre vertigineux qui dit quelque chose de la richesse génétique préservée dans ce pays pendant des millénaires. Certains sont quasi inconnus hors des frontières. D'autres commencent à faire leur chemin sur les cartes des meilleurs restaurants du monde."
      },
      {
        type: "paragraphe",
        texte: "La Rkatsiteli est la plus plantée des blancs. Elle donne des vins d'une acidité vive et d'une grande droiture, souvent vinifiée en kvevri pour produire ces célèbres ambrés aux tannins délicats. La Mtsvane lui est souvent assemblée, apportant de la rondeur et du parfum. Pour les rouges, la Saperavi est la reine — une variété à pulpe rouge (rare dans le monde du vin) qui donne des vins d'une couleur quasi noire, tanniques, concentrés, capables de vieillir remarquablement."
      },
      {
        type: "encadre",
        titre: "La Saperavi : le cépage à pulpe rouge",
        texte: "La quasi-totalité des cépages rouges dans le monde ont une pulpe blanche — seule la peau est colorée. La Saperavi est une exception : sa pulpe est elle-même rouge foncé, ce qui donne au vin une profondeur de couleur exceptionnelle et une richesse en anthocyanes (pigments antioxydants) hors norme. Un vin de Saperavi tache les dents, les lèvres, la nappe. Et il vieillit souvent 20 à 30 ans sans effort."
      },
      {
        type: "titre2",
        texte: "La Kakhétie : le cœur du vignoble géorgien"
      },
      {
        type: "paragraphe",
        texte: "La région de Kakhétie, dans l'est du pays, au pied du Grand Caucase, concentre l'essentiel de la production viticole géorgienne. C'est là que la tradition du kvevri est la plus vivante, là que les vins orange sont les plus typés, là que les grandes familles vigneronnes transmettent leur savoir de génération en génération. La vallée de l'Alazani, bordée de montagnes enneigées, offre un cadre de vignoble parmi les plus dramatiques au monde."
      },
      {
        type: "paragraphe",
        texte: "D'autres régions émergent progressivement : la Kartlie, plus centrale, ou la Racha-Léchkhoumi en montagne, qui produit des vins demi-doux naturels d'une finesse rare à partir du cépage Alexandrouli. La Géorgie viticole est vaste, diverse, encore largement à explorer."
      },
      {
        type: "separateur"
      },
      {
        type: "titre2",
        texte: "Pourquoi le monde redécouvre la Géorgie maintenant"
      },
      {
        type: "paragraphe",
        texte: "Le retour d'intérêt pour les vins géorgiens n'est pas un hasard. Il coïncide avec deux mouvements profonds du monde du vin contemporain : la quête d'authenticité et de singularité, d'une part — la lassitude des vins formatés, internationaux, prévisibles. Et l'essor des vins naturels, d'autre part — le kvevri et la macération sur peaux répondent parfaitement à cette philosophie de non-intervention, de respect du fruit, de fermentation spontanée."
      },
      {
        type: "paragraphe",
        texte: "Les meilleurs sommeliers du monde font désormais de la place à la Rkatsiteli ambrée et à la Saperavi dans leurs sélections. Des importateurs spécialisés ont ouvert la route. Et les vignerons géorgiens eux-mêmes, longtemps cantonnés à un marché local et russe, découvrent que leur tradition la plus ancienne est aussi leur argument le plus moderne."
      },
      {
        type: "paragraphe",
        texte: "8 000 ans d'histoire, et le sentiment que le vin géorgien n'en est qu'au début de sa reconnaissance internationale. C'est peut-être ça, la définition d'un terroir vivant."
      }
    ]
  }
];


// ── HELPERS ──────────────────────────────────────────────────────────────────

// Récupérer tous les articles (triés du plus récent au plus ancien)
function getArticles() {
  return [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Récupérer l'article mis en avant
function getFeaturedArticle() {
  return ARTICLES.find(a => a.featured) || ARTICLES[0];
}

// Récupérer les articles de la grille (tout sauf le featured)
function getGridArticles(categorie = "all") {
  const featured = getFeaturedArticle();
  let articles = ARTICLES.filter(a => a.id !== featured.id);
  if (categorie !== "all") {
    articles = articles.filter(a => a.categorie === categorie);
  }
  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Récupérer un article par son id
function getArticleById(id) {
  return ARTICLES.find(a => a.id === id) || null;
}

// Formater une date en français
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
