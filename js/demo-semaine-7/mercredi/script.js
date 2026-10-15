//Exercice 1:
const nombre = 99;

if (nombre > 0 && nombre < 100) {
  console.log('ex1: ', 'Valide!');
} else {
  console.log('ex1: ', 'Invalide!');
}

//Exercice 2
/*const mot = prompt('Entrez un nom');
const longueurMot = mot.length;

switch (longueurMot) {
  case 1:
    console.log('ex2', ' 1 caractère');
    break;
  case 2:
  case 3:
  case 4:
    console.log('ex2', ' 2 à 4 caractères');
    break;
  case 5:
    console.log('ex2', ' 5 caractères');
    break;
  default:
    console.log('ex2', 'Plus que  5 caractères');

    break;
}*/

//Exercice 3
/*Exercice en classe - Multiples
Avec une boucle for, affichez dans la console tous les multiples de 10 entre 0 et 500 inclus.

Ajoutez ensuite une condition pour ne pas afficher 0.*/
/*
for (let multiple = 0; multiple <= 500; multiple += 10) {
  if (multiple !== 0) {
    console.log('ex3', multiple);
  }
}

function test(a, b = a) {
  return a + b;
}
console.log('test', test(3));
*/
//Exercice 4
/*function calculerAge(anneNaissance) {
  const anneeActuelle = new Date().getFullYear();
  return anneeActuelle - anneNaissance;
}*/
const calculerAge = (anneNaissance) => new Date().getFullYear() - anneNaissance;

console.log(`Votre âge approx est de ${calculerAge(1981)} ans`);

function appliquerOperation(nombre, operation) {
  return operation(nombre);
}

const carre = (nombre) => nombre * nombre;
const additionner = (nombre) => nombre + nombre;

console.log('callback', appliquerOperation(4, carre)); // 16

console.log('callback', appliquerOperation(4, additionner)); // 8

function creerCompteur() {
  let valeur = 0;

  return function () {
    valeur++;
    return valeur;
  };
}

const compteur = creerCompteur();

console.log(compteur()); // 1
console.log(compteur()); // 2
console.log(compteur()); // 3
/*Exercice en classe - Objet personnel
Créez un objet moi avec prenom, nom, age et jeuVideo.

Ajoutez une méthode resume() qui retourne une phrase 
complète avec ces informations.*/

const moi = {
  prenom: 'Marc-Olivier',
  nom: 'Tremblay',
  age: 81,
  jeuVideo: 'pong',
  resume() {
    return `${this.prenom} ${this.nom} a ${this.age} ans 
et aime jouer à ${this.jeuVideo}`;
  },
};
console.log('ex6', moi.resume());
