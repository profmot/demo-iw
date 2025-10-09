/*console.log(12 == '12');
console.log(12 === '12');
//not !
// ET &&
//OU ||
console.log(2 === 2 || 3 >= 4);

const note = 90;

if (note >= 90) {
  console.log("wow bravo c'est super");
} else if (note >= 60) {
  console.log('Succes!');
} else {
  console.log('Echec...');
}

//ternaire
const age = 10;

const statut = age >= 18 ? 'Adulte' : 'Enfant';
console.log('statut : ', statut);

//switch
const jour = 0; // new Date().getDay(); //0=dimanche, ...
switch (jour) {
  case 0:
  case 6:
    console.log('jour de fin de semaine');
    break;
  default:
    console.log('jour de semaine!');
}
//boucles
console.log('-----boucles----');
console.log('-----while----');
let i = 0;
while (i <= 100) {
  console.log('mon i', i);
  i += 35;
}
console.log('-----do while----');

do {
  console.log('mon i', i);
  i += 35;
} while (i <= 100);

console.log('-----for----');
for (let j = 0; j < 10; j++) {
  console.log('for j', j);
}*/
/*
function addition(nombre1, nombre2 = 0) {
  console.log(nombre2);
  return nombre1 + nombre2;
}

const somme1 = addition(20, 56);
const somme2 = addition(20);

console.log('somme1', somme1);
console.log('somme2', somme2);

// rest param
function somme(param1, ...param) {
  let total = param1;
  for (let n = 0; n < param.length; n++) {
    total += param[n];
  }
  return total;
}

console.log(somme(2, 3, 4, 6, 7, 8, 9, 9, 0, 1));

let m = 5;
function inc(x) {
  x++;
  console.log(x);
}
inc(m);
console.log(m);

const chien = { race: 'golden', nom: 'tichien' };
function renommeChien(unChien, nouveauNom) {
  unChien.nom = nouveauNom;
}
renommeChien(chien, 'moyenChien');
console.log(chien);
//expression fct

const cube = function (x) {
  return x * x * x;
};
console.log(cube(4));

const flechee1 = (param1, param2) => {
  param1 += 8;
  return param1 + param2;
};

const flechee2 = (para1) => {
  para1 += 1;
  return para1;
};

const flecheeCube = (x) => x * x * x;

console.log(flechee1(2, 3));

console.log(flecheeCube(2));
*/

/*
console.log('----callback-----');
const afficherConsole = (msg) => console.log(msg);
const afficherAlert = (msg) => alert(msg);

function creUnMsg(nom, afficher) {
  afficher(`Bonjour! je suis ${nom}`);
}

creUnMsg('Marc-Olivier', afficherConsole);

console.log('----fermeture-----');

function compteur(dep = 0) {
  let nb = dep;
  return function () {
    nb++;
    console.log('Comptés:', nb);
  };
}

const c = compteur(10);
c();
c();
c();

*/
//Objets tableaux

// const voiture = {
//   marque: 'Toyota',
//   annee: 2023,
//   couleur: 'bleu',
//   vitesse: 100,
//   turbo: 20,
//   hautParleur: {
//     noSerie: '344hfh43',
//     marque: 'bose',
//   },
//   calculVitesseMax: function () {
//     console.log(this);
//     return this.vitesse + this.turbo;
//   },
// };
// console.log('vitesseMaximum: ', voiture.calculVitesseMax());

// console.log('marque', voiture.marque);
// console.log('marque-speaker', voiture.hautParleur.marque);

// console.log('marque', voiture['marque']);
// console.log('marque-speaker', voiture['hautParleur'].marque);

// /*let question = prompt('que cherchez vous?');

// alert(voiture[question]);
// */

// class Automobile {
//   constructor(marque, couleur, vitesse, turbo) {
//     this.marque = marque;
//     this.couleur = couleur;
//     this.vitesse = vitesse;
//     this.turbo = turbo;
//     this.nbPassagers = 0;
//   }
// }

// let monAuto = new Automobile('Toyota', 'rouge', 100, 20);
// monAuto.couleur = 'Orange';
// console.log('monAuto', monAuto);

// class AutoElect extends Automobile {
//   constructor(marque, couleur, vitesse, turbo, grosseurPile) {
//     super(marque, couleur, vitesse, turbo);
//     this.grosseurPile = grosseurPile;
//   }
//   calculTempsRecharge = () => {
//     console.log('this', this);
//     console.log('temps de recharge', this.grosseurPile);
//   };
// }
// const monAutoelectrique = new AutoElect('Toyota', 'rouge', 100, 20, 6);
// console.log('1', monAutoelectrique.calculTempsRecharge());
// monAutoelectrique.marque = 'honda';

// document
//   .getElementById('btn')
//   .addEventListener('click', monAutoelectrique.calculTempsRecharge);

//Tableau

const fruits = ['Pomme', 'Poire', 'Melon'];

//console.log(fruits.length);
//console.log(fruits[0]);
fruits[0] = 'Banane';
//console.log(fruits[0]);
fruits.push('Fraises');
fruits.push('Bleuet');

const petitTableau = fruits.slice(1, 3);
//console.log('petitTableau', petitTableau);

fruits.splice(1, 2);
console.log(fruits);

// for (let fruit of fruits) {
//   console.log(fruit);
// }

//fruits.forEach((fruit) => console.log(fruit));

// const produits = [
//   { nom: 'tasse', prix: 2 },
//   { nom: 'télé', prix: 20 },
//   { nom: 'manteau', prix: 5 },
// ];

// const nomsDeProduit = produits.map((produit) => {
//   return { nom: produit.nom, prixtaxe: produit.prix * 1.15 };
// });
// console.log(produits);
// console.log(nomsDeProduit);

// const produitsAPetitPrix = produits.filter((produit) => {
//   return produit.prix < 10;
// });

// console.log(produitsAPetitPrix);

// const produitTasse = produits.find((produit) => {
//   return produit.nom === 'tasse';
// });

// console.log(produitTasse);

//Destructuring

// const joueur = {
//   nom: 'Tommy',
//   jeu: 'lesCartes',
//   score: '45',
//   rang: 2,
// };

// function afficheJoueurEtJeu({ nom, jeu }) {
//   console.log(`${nom} joue au jeu ${jeu}`);
// }

// afficheJoueurEtJeu(joueur);

// const { nom, jeu } = joueur;
// const tab = [1, 2, 43, 5, 7, 8, 9, 7];
// const [premierChiffe, , troisiemechiffre] = tab;

// let a = 3,
//   b = 9;
// [b, a] = [a, b];

// const joueurChrono = {
//   ...joueur,
//   tempsDejeu: 4,
//   jeu: 'baseball',
// };

// const tab2 = [...tab, 'allo'];

// console.log(tab2);
// console.log(joueurChrono);

//Gestion du temps

const idInterval = setInterval(() => {
  console.log('message à interval de 2 sec...', new Date().getTime());
}, 2000);

setTimeout(() => {
  clearInterval(idInterval);
  console.log('Message après 10 secondes...');
}, 10000);
