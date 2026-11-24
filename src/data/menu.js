// menu.js
// Éléments de la barre latérale.
// - "icone" : nom d'une icône de la bibliothèque lucide-react.
//   Vérifie les noms dans sa documentation : certains ont pu être renommés.
// - "actif" : un seul élément doit valoir true (celui affiché en indigo).
// À tester : change l'élément actif et vérifie que la mise en évidence se déplace.

export const elementsMenu = [
  {
    id: "tableau-de-bord",
    libelle: "Tableau de bord",
    icone: "LayoutDashboard",
    actif: true,
  },
  { id: "analytique", libelle: "Analytique", icone: "BarChart3", actif: false },
  {
    id: "transactions",
    libelle: "Transactions",
    icone: "CreditCard",
    actif: false,
  },
  { id: "clients", libelle: "Clients", icone: "Users", actif: false },
  { id: "produits", libelle: "Produits", icone: "Package", actif: false },
  { id: "messages", libelle: "Messages", icone: "MessageSquare", actif: false },
  { id: "rapports", libelle: "Rapports", icone: "FileText", actif: false },
  { id: "equipe", libelle: "Équipe", icone: "UserCog", actif: false },
  { id: "parametres", libelle: "Paramètres", icone: "Settings", actif: false },
  { id: "aide", libelle: "Aide", icone: "HelpCircle", actif: false },
];
