console.log('de fichier externe');
let maConstante;
let result = 4;
result = 'une chaine';

let monObjet = {
  nom: 'tremblay',
  age: 100,
};
let monTable = [1, 'allo', 3, 4];

console.log(monTable[1]);
console.log(monObjet.nom);

console.warn("je t'averti", result);
console.error('ma constante est :(', maConstante);

console.log(typeof result);

let nom = 'Marc-Olivier';

let maPhrase = `Bonjour les amis,
je m'appel ${nom} et j'ai ${monObjet.age} ans`;

console.log(maPhrase);

let var1 = '5';
let var2 = 1;

console.log(var1 - var2);

let maDate = new Date(2026, 0, 13, 13, 13);
console.log(maDate);
