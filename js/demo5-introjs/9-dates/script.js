const maintenant = new Date();

console.log(maintenant);

const anniversaire = new Date(2000, 4, 15);
const rendezVous = new Date(2026, 8, 30, 13, 45);

const premierJanvier = new Date(2026, 0, 1);
const premierDecembre = new Date(2026, 11, 1);

const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());

date.getDate(); // jour du mois: 1 à 31
date.getDay(); // jour de la semaine: 0 à 6

// Modifier une date
const livraison = new Date(2026, 8, 30);

livraison.setDate(livraison.getDate() + 7);
livraison.setHours(9, 30);

console.log(livraison);

//
