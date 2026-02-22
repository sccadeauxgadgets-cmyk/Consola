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
  };
}

export const fallbackData: ConsolaData = {
  history: {
    founded: "1945",
    description: "Une entreprise familiale perpétuant le savoir-faire de la menuiserie traditionnelle et moderne depuis plus de 75 ans."
  },
  services: [
    {
      title: "Menuiserie Extérieure",
      description: "Fenêtres, portes et volets en Bois, Aluminium et PVC alliant performance thermique et esthétique.",
      items: ["Fenêtres & Portes-fenêtres", "Portes d'entrée", "Volets battants & roulants"]
    },
    {
      title: "Aménagement Intérieur",
      description: "Créations sur-mesure pour sublimer votre habitat : escaliers, dressings et cuisines.",
      items: ["Escaliers", "Dressings & Placards", "Cuisines sur-mesure"]
    },
    {
      title: "Patrimoine & Monuments",
      description: "Spécialiste de la restauration de menuiseries anciennes et monuments historiques.",
      items: ["Restauration à l'identique", "Respect des techniques anciennes", "Accompagnement ABF"]
    }
  ],
  certifications: ["RGE", "Qualibat", "Menuiserie de France"],
  values: ["Excellence", "Transmission", "Innovation", "Proximité"],
  contact: {
    address: "Zone Artisanale, 12345 Ville",
    phone: "01 02 03 04 05",
    email: "contact@consolamenuiserie.fr"
  }
};
