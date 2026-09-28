const prenom = 'Marc';
const cours = 'Interface Web';
const message = 'Bonjour ' + prenom + ', bienvenue dans le cours!';

//literals
const nom = 'Marc';
const prix = 12;
const quantite = 3;

const accueil = `Bonjour ${nom}!`;
const total = `Le total est de ${prix * quantite} $.`;

console.log(accueil);
console.log(total);

const adresse = `Collège Montmorency
475, boulevard de l'Avenir
Laval`;

const adresse = 'Collège Montmorency\nLaval';

// Longueur et accès aux caractères
const cours = 'Interface Web';

console.log(cours.length); // 13
console.log(cours[0]); // "I"
console.log(cours.charAt(0)); // "I"

// recherche
const phrase = 'JavaScript rend une page Web interactive';

console.log(phrase.includes('Web')); // true
console.log(phrase.startsWith('JavaScript')); // true
console.log(phrase.indexOf('page')); // 20
console.log(phrase.lastIndexOf('a')); // dernière position de "a"

// Extraire une partie

const cours = 'Interface Web';

console.log(cours.slice(0, 9)); // "Interface"
console.log(cours.substring(10)); // "Web"

//Transformer une chaîne

const texte = '  Bonjour JavaScript  ';

console.log(texte.trim());
console.log(texte.toUpperCase());
console.log(texte.toLowerCase());
console.log(texte.replace('JavaScript', 'le Web'));

// nouvelle chaine
const nom = 'Marco';
const majuscules = nom.toUpperCase();

console.log(nom); // "Marco"
console.log(majuscules); // "MARCO"
