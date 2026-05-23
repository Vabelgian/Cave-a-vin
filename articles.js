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
        texte: "Voici le premier paragraphe de l'article. Remplace ce texte par le vrai contenu."
      },
      {
        type: "titre2",
        texte: "Un cépage, deux terroirs"
      },
      {
        type: "paragraphe",
        texte: "Deuxième section de l'article. Tu peux ajouter autant de blocs que tu veux."
      },
      {
        type: "citation",
        texte: "Le terroir ne ment jamais, il amplifie.",
        source: "André Ostertag, vigneron alsacien"
      },
      {
        type: "paragraphe",
        texte: "Suite de l'article après la citation."
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
