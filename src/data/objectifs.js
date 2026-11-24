// objectif.js
// L'objectif de ventes du mois, en FCFA.
// Avec les valeurs actuelles : 4 680 000 sur 6 500 000, soit 72 % (barre ambre).
// Règle des couleurs : moins de 50 % = rouge, de 50 à 99 % = ambre, 100 % et plus = vert.
// Cas limites à tester en changeant "atteint" :
//   * 0         -> 0 % (rouge, barre vide)
//   * 6500000   -> exactement 100 % (vert, message de félicitations)
//   * 7800000   -> 120 % (vert ; la barre ne doit pas dépasser son cadre,
//                  mais le texte affiche la vraie valeur)

export const objectifMensuel = {
  libelle: "Objectif de ventes de novembre",
  cible: 6500000,
  atteint: 4680000,
};
