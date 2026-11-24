// ventes-mensuelles.js
// Les ventes des 12 mois de 2026, en FCFA, pour le graphique en barres.
// - Octobre est le meilleur mois (barre la plus haute, à mettre en indigo foncé).
// - Novembre est le mois en cours.
// - Décembre vaut 0 car le mois n'a pas commencé : c'est un cas à tester
//   (la barre doit disparaître sans erreur).
// À tester : double la valeur d'un mois, ajoute un 13e mois, ou retires-en un.

export const ventesMensuelles = [
  { mois: "Janv.", montant: 3200000 },
  { mois: "Févr.", montant: 3650000 },
  { mois: "Mars", montant: 4100000 },
  { mois: "Avr.", montant: 3900000 },
  { mois: "Mai", montant: 4550000 },
  { mois: "Juin", montant: 4300000 },
  { mois: "Juil.", montant: 5100000 },
  { mois: "Août", montant: 4750000 },
  { mois: "Sept.", montant: 5400000 },
  { mois: "Oct.", montant: 6100000 },
  { mois: "Nov.", montant: 4680000 },
  { mois: "Déc.", montant: 0 },
];
