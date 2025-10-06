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

//Functions
function addition(nb1, nb2 = 7) {
  const somme = nb1 + nb2;
  return somme;
}

const maSomme = addition(6, 8);
console.log(maSomme);

// rest parameter

function somme(nb1, ...nbs) {
  let total = nb1;
  for (let i = 0; i < nbs.length; i++) {
    total += nbs[i];
  }
  return total;
}

console.log(somme(1, 2, 5, 4, 8));

let n = 5;
function inc(x) {
  return x++;
}
inc(n);
console.log(n);

function changerMarque(voiture, nouvMarque) {
  voiture.marque = nouvMarque;
}
const auto = { marque: 'toyota', nbRoues: 4 };
changerMarque(auto, 'Nissan');
console.log(auto);

const cube = function (x) {
  return x * x * x;
};

console.log(cube(3));
// fct flechées

const double = (x) => x * 2;

console.log(double(6));

//fct ordre supp
const afficherConsole = (msg) => {
  console.log(msg);
};
const afficherAlert = (msg) => {
  alert(msg);
};

function avecMessage(nom, fctAfficher) {
  const monMessage = `Bonjour mon nom est ${nom}`;
  fctAfficher(monMessage);
}
avecMessage('Marc-Olivier', afficherConsole);

//fermeture
function compteur(valDep = 0) {
  let nbr = valDep;
  return function () {
    nbr++;
    console.log('compteur', n);
  };
}

const c = compteur(0);

c();
c();
c();
console.log(nbr);
