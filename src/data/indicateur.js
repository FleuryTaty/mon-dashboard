// indicateurs.js
// Les quatre cartes d'indicateurs clés (KPI).
// - "valeur" : un nombre brut. Le formatage (espaces, FCFA, %) se fait dans le composant.
// - "type" : "monnaie", "nombre" ou "pourcentage" (aide à choisir le format d'affichage).
// - "variation" : en pourcentage. Positive = vert, négative = rouge, zéro = gris neutre.
// Les quatre cartes couvrent volontairement les trois cas de variation.
// À tester : passe une variation de positive à négative, puis à 0.

export const indicateurs = [
  {
    id: "revenus",
    libelle: "Revenus",
    valeur: 4850000,
    type: "monnaie",
    variation: 12.5,
    periode: "30 derniers jours",
  },
  {
    id: "nouveaux-utilisateurs",
    libelle: "Nouveaux utilisateurs",
    valeur: 1240,
    type: "nombre",
    variation: 8.2,
    periode: "30 derniers jours",
  },
  {
    id: "commandes",
    libelle: "Commandes",
    valeur: 356,
    type: "nombre",
    variation: -3.1,
    periode: "30 derniers jours",
  },
  {
    id: "taux-de-conversion",
    libelle: "Taux de conversion",
    valeur: 3.4,
    type: "pourcentage",
    variation: 0,
    periode: "30 derniers jours",
  },
];
