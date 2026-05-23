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
        type: "paragraphe",
        texte: "Contenu de l'article à remplir."
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
        texte: "Contenu de l'article à remplir."
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
        texte: "Contenu de l'article à remplir."
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
        texte: "Contenu de l'article à remplir."
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
        texte: "Contenu de l'article à remplir."
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
        texte: "Contenu de l'article à remplir."
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
        texte: "Contenu de l'article à remplir."
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
        texte: "Contenu de l'article à remplir."
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
        texte: "Contenu de l'article à remplir."
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
