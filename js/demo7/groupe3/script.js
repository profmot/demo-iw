// console.log('ma valeur', 2 > 3);

// const note = 100;
// //SI
// if (note >= 60 && note <= 90) {
//   console.log('note de passage!');
// } else if (note > 90) {
//   console.log('Super note! bravo!');
// } else {
//   console.log('note en echec...');
// }
// console.log("c'etait votre resultat..");

// // Operateur ternaire

// const age = 45;
// const statut = age >= 18 ? 'Adulte' : 'Enfant';
// console.log('mon statut est: ', statut);

// // switch

// const jour = new Date().getDay(); //0 si dimanche, 1 lundi...

// switch (jour) {
//   case 0:
//   case 6:
//     console.log('on est la fin de semaine');
//     break;
//   default:
//     console.log("c'est la semaine");
// }

// let i = 0;
// /*
// while (i < 100) {
//   console.log('boucleWhile', i);
//   i += 35;
// }*/
// i = 105;
// do {
//   console.log('boucleWhile', i);
//   i += 35;
// } while (i < 100);

// for (let j = 0; j < 10; j++) {
//   console.log('for', j);
// }

// //Functions
// function addition(nb1, nb2 = 7) {
//   const somme = nb1 + nb2;
//   return somme;
// }

// const maSomme = addition(6, 8);
// console.log(maSomme);

// // rest parameter

// function somme(nb1, ...nbs) {
//   let total = nb1;
//   for (let i = 0; i < nbs.length; i++) {
//     total += nbs[i];
//   }
//   return total;
// }

// console.log(somme(1, 2, 5, 4, 8));

// let n = 5;
// function inc(x) {
//   return x++;
// }
// inc(n);
// console.log(n);

// function changerMarque(voiture, nouvMarque) {
//   voiture.marque = nouvMarque;
// }
// const auto = { marque: 'toyota', nbRoues: 4 };
// changerMarque(auto, 'Nissan');
// console.log(auto);

// const cube = function (x) {
//   return x * x * x;
// };

// console.log(cube(3));
// // fct flechées

// const double = (x) => x * 2;

// console.log(double(6));

// //fct ordre supp
// const afficherConsole = (msg) => {
//   console.log(msg);
// };
// const afficherAlert = (msg) => {
//   alert(msg);
// };

// function avecMessage(nom, fctAfficher) {
//   const monMessage = `Bonjour mon nom est ${nom}`;
//   fctAfficher(monMessage);
// }
// avecMessage('Marc-Olivier', afficherConsole);

// //fermeture
// function compteur(valDep = 0) {
//   let nbr = valDep;
//   return function () {
//     nbr++;
//     console.log('compteur', n);
//   };
// }

// const c = compteur(0);

// c();
// c();
// c();
// console.log(nbr);

// const voiture = {
//   marque: 'Toyota',
//   annee: 2023,
//   couleur: 'bleue',
//   vitesse: 100,
//   turbo: 20,
//   hautParleur: {
//     marque: 'bose',
//     noSerie: 'jfhjfhfjksdvkxj',
//   },
//   maxVitesse: function () {
//     return this.vitesse + this.turbo;
//   },
// };

// console.log(voiture.marque);
// console.log(voiture.hautParleur.marque);
// console.log(voiture['couleur']);
// console.log(voiture.maxVitesse());
// //const cle = prompt('que veux tu savoir');
// //console.log(voiture[cle]);

// class Auto {
//   constructor(marque, couleur, vitesse, turbo) {
//     this.marque = marque;
//     this.couleur = couleur;
//     this.vitesse = vitesse;
//     this.turbo = turbo;
//   }
//   calculervitesseMax() {
//     return this.vitesse + this.turbo;
//   }
// }

// const maVoiture1 = new Auto('Toyota', 'rouge', 100, 30);
// const maVoiture2 = new Auto('GM', 'rouge', 100, 30);
// console.log('voiture1', maVoiture1.marque);
// console.log('voiture2', maVoiture2.marque);
// maVoiture1.vitesse = 60;
// console.log(maVoiture1);

// class AutoElectrique extends Auto {
//   constructor(marque, couleur, vitesse, turbo, autonomie) {
//     super(marque, couleur, vitesse, turbo);
//     this.autonomie = autonomie;
//   }
// }

// const monAutoElec = new AutoElectrique('Chevrolet', 'blanc', 100, 30, 500);
// console.log('auoElectrique', monAutoElec);

// class compteur {
//   constructor() {
//     this.count = 0;
//   }
//   increment = () => {
//     console.log(this);
//     this.count++;
//     console.log(this.count);
//   };
// }

// const monCompteur = new compteur();
// monCompteur.increment();
// monCompteur.increment();

// document.getElementById('btn').addEventListener('click', monCompteur.increment);

// class fruit {
//   constructor(nom, niveauSucre) {
//     this.nom = nom;
//     this.niveauSucre = niveauSucre;
//   }
// }

// let fruits = [
//   new fruit('Pomme', 3),
//   new fruit('Banane', 2),
//   new fruit('Orange', 5),
// ];
// console.log(fruits[0]);

// console.log(fruits.length);
// fruits.push(new fruit('Melon', 8));

// console.log(fruits);

// fruits.splice(1, 2, new fruit('Fraise', 10));
// console.log('apres Splice', fruits);
// /*
// for (let k = 0; k < fruits.length; k++) {
//   console.log(fruits[k]);
// }
// */
// for (unFruit of fruits) {
//   console.log(unFruit);
// }

// //foreach
// fruits.forEach((unFruit) => {
//   console.log(`mon fruit: ${unFruit.nom} est niveau ${unFruit.niveauSucre}`);
// });

//map
// const tabNombre = [3, 5, 6, 8, 3, 2];

// console.log('avant Map', tabNombre);
// const nouveauTabnombre = tabNombre.map((nb) => nb * nb);

// console.log('apres Map', nouveauTabnombre);

// //filter

// const tabPair = tabNombre.filter((n) => n % 2 === 0);
// console.log('apres Filre', tabPair);

// const tabImpair = tabNombre.filter((n) => n % 2 !== 0);
// console.log('apres Filre', tabImpair);
// // find
// const divPar4 = tabNombre.find((n) => n % 4 === 0);
// console.log('find divisible par 4:', divPar4);

// Desctructuring:

// const couleur = ['Rouge', 'Vert', 'Bleu'];
// const [premiere, , troisieme] = couleur;
// console.log('premiere couleur: ', premiere);
// console.log('troisieme couleur: ', troisieme);

// const joueur = {
//   nom: 'Alex',
//   jeu: 'cartes',
//   score: 42,
//   anciennte: 2,
//   niveau: 5,
// };
// const { nom, score, jeu, patate = 'rouge' } = joueur;
// console.log(patate);
// function afficheScoreJoueur({ nom, score, jeu }) {
//   console.log(`${nom} a un score de ${score} au ${jeu}`);
// }

// afficheScoreJoueur(joueur);

// //inverser 2 variables
// let a = 1,
//   b = 2;

// [b, a] = [a, b];

//spread operator
const numInitial = [3, 5, 7];
const numTotal = [...numInitial, 8, 0];
console.log(numTotal);

const joueur = { nom: 'tommy', score: 67, jeu: 'COD' };

const joueurMAJ = { ...joueur, score: 98 };
console.log(joueurMAJ);

//setTimeout

setTimeout(() => console.log('Message apres 3 sec...'), 3000);

const intId = setInterval(
  () => console.log('Message toutes les 2 secondes'),
  2000
);

setTimeout(() => clearInterval(intId), 20000);
