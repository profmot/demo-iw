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
