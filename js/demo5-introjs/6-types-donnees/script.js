console.log(typeof 'Bonjour'); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof { nom: 'Alice' }); // "object"

let nom;
console.log(nom); // undefined: aucune valeur attribuée

let utilisateurSelectionne = null;
console.log(utilisateurSelectionne); // null: absence volontaire
// Attention aux conversions implicites:

console.log('5' + 1); // "51"
console.log('5' - 1); // 4
console.log(5 == '5'); // true
console.log(5 === '5'); // false

const quantite = Number('5');
const message = String(42);
const estActif = Boolean(1);

console.log(quantite); // 5
console.log(message); // "42"
console.log(estActif); // true

// NaN
const resultat = Number('bonjour');

console.log(resultat); // NaN
console.log(Number.isNaN(resultat)); // true
