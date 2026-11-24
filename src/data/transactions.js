// transactions.js
// Les 10 dernières transactions, de la plus récente à la plus ancienne.
// - "montant" : nombre brut en FCFA (formatage dans le composant).
// - "date" : texte au format année-mois-jour (à afficher en français dans le composant).
// - "statut" : "payee", "en_attente" ou "echouee".
// Cas de test inclus volontairement :
//   * un montant très élevé (TX-2026-0147) et un très petit (TX-2026-0142) ;
//   * les trois statuts connus ;
//   * un statut inconnu ("annulee", TX-2026-0141) : le badge doit afficher
//     un affichage par défaut gris « Inconnu » sans provoquer d'erreur.
// À tester : vide le tableau (liste vide) pour voir le message « Aucune transaction ».

export const transactions = [
  {
    id: 1,
    reference: "TX-2026-0148",
    client: "Sandrine Moukoko",
    montant: 185000,
    date: "2026-11-24",
    statut: "payee",
  },
  {
    id: 2,
    reference: "TX-2026-0147",
    client: "Patrick Ngoma",
    montant: 2750000,
    date: "2026-11-23",
    statut: "payee",
  },
  {
    id: 3,
    reference: "TX-2026-0146",
    client: "Grâce Mabiala",
    montant: 45000,
    date: "2026-11-22",
    statut: "en_attente",
  },
  {
    id: 4,
    reference: "TX-2026-0145",
    client: "Fabrice Mpassi",
    montant: 320000,
    date: "2026-11-21",
    statut: "echouee",
  },
  {
    id: 5,
    reference: "TX-2026-0144",
    client: "Christelle Bouanga",
    montant: 98000,
    date: "2026-11-19",
    statut: "payee",
  },
  {
    id: 6,
    reference: "TX-2026-0143",
    client: "Rodrigue Tsiba",
    montant: 560000,
    date: "2026-11-17",
    statut: "en_attente",
  },
  {
    id: 7,
    reference: "TX-2026-0142",
    client: "Ornella Makosso",
    montant: 12500,
    date: "2026-11-15",
    statut: "payee",
  },
  {
    id: 8,
    reference: "TX-2026-0141",
    client: "Jean-Paul Itoua",
    montant: 410000,
    date: "2026-11-12",
    statut: "annulee",
  },
  {
    id: 9,
    reference: "TX-2026-0140",
    client: "Prisca Nzaou",
    montant: 275000,
    date: "2026-11-09",
    statut: "payee",
  },
  {
    id: 10,
    reference: "TX-2026-0139",
    client: "Aimé Kimbembe",
    montant: 150000,
    date: "2026-11-05",
    statut: "echouee",
  },
];
