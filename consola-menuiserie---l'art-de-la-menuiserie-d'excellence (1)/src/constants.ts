export interface ConsolaData {
  history: {
    founded: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
    items: string[];
  }[];
  certifications: string[];
  values: string[];
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
}

export const CONSOLA_CONTENT: ConsolaData = {
  history: {
    founded: "1945",
    description: "Fondée au lendemain de la guerre, la Menuiserie Consola incarne l'excellence du savoir-faire artisanal français. Depuis trois générations, notre famille perpétue la passion du bois, en alliant les gestes ancestraux aux exigences de performance moderne. Spécialistes reconnus de la restauration du patrimoine et des monuments historiques, nous mettons cette même rigueur au service de vos projets contemporains."
  },
  services: [
    {
      title: "Menuiseries Extérieures",
      description: "Conception et pose de fermetures haute performance en Bois, Aluminium et PVC. Nous privilégions l'esthétique sans compromis sur l'isolation thermique et phonique.",
      items: [
        "Fenêtres et Portes-fenêtres sur-mesure",
        "Portes d'entrée de prestige",
        "Volets battants bois traditionnels",
        "Solutions mixtes Bois-Alu"
      ]
    },
    {
      title: "Aménagement Intérieur",
      description: "Création d'espaces de vie uniques et fonctionnels. Chaque pièce est dessinée et fabriquée dans nos ateliers pour s'adapter parfaitement à votre intérieur.",
      items: [
        "Escaliers monumentaux et contemporains",
        "Bibliothèques et Dressings intégrés",
        "Cuisines artisanales haut de gamme",
        "Parquets et boiseries fines"
      ]
    },
    {
      title: "Patrimoine & Monuments",
      description: "Partenaire privilégié des Architectes des Bâtiments de France (ABF). Nous restaurons et reproduisons à l'identique les menuiseries de notre patrimoine historique.",
      items: [
        "Restauration de menuiseries classées",
        "Copie à l'identique de profils anciens",
        "Ferronneries et quincailleries d'époque",
        "Respect des normes Monuments Historiques"
      ]
    }
  ],
  certifications: [
    "Qualibat 3511 (Menuiserie Technicité confirmée)",
    "Qualibat 4322 (Fabrication et pose de menuiseries bois)",
    "RGE Eco Artisan",
    "Menuiserie de France"
  ],
  values: [
    "Excellence Artisanale",
    "Transmission du Savoir",
    "Innovation Durable",
    "Respect du Patrimoine"
  ],
  contact: {
    address: "Zone Artisanale, 12345 Ville-sur-Bois",
    phone: "01 45 67 89 10",
    email: "contact@consolamenuiserie.fr",
    hours: "Lun - Ven : 8h00 - 18h00"
  }
};
