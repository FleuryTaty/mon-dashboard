// activites.js
// Le fil d'activité récente (du plus récent au plus ancien).
// - "type" : "commande" (icône indigo), "paiement" (icône verte) ou "alerte" (icône ambre).
// - "anciennete" : texte déjà prêt à afficher, pas de calcul de date à faire.
// À tester : change le type d'un événement et vérifie que la couleur de l'icône change.

export const activitesRecentes = [
  {
    id: 1,
    type: "commande",
    texte: "Nouvelle commande de Sandrine Moukoko",
    anciennete: "il y a 5 minutes",
  },
  {
    id: 2,
    type: "paiement",
    texte: "Paiement de 185 000 FCFA confirmé",
    anciennete: "il y a 32 minutes",
  },
  {
    id: 3,
    type: "alerte",
    texte: "Taux d'échec de paiement supérieur à la normale",
    anciennete: "il y a 2 heures",
  },
  {
    id: 4,
    type: "commande",
    texte: "Nouvelle commande de Rodrigue Tsiba",
    anciennete: "il y a 5 heures",
  },
  {
    id: 5,
    type: "paiement",
    texte: "Paiement de 560 000 FCFA confirmé",
    anciennete: "hier à 18 h 40",
  },
];
