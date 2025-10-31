// // 1 demo inport/export avec modules ES6
// import { addition, PI } from './math.js';
// console.log(addition(2, 3)); // 5
// console.log(PI); // 3.14159

// // 2 demo import/export fonctions nommées et par défaut
// import afficherStats, { moyenne, somme } from './stats.js';
// console.log(moyenne([10, 12, 14])); // utilise un export nommé
// afficherStats();

// function soustraction(a, b) {
//   console.log('Soustraction dans app.js : ' + (a - b));
//   return a - b;
// }
// // 3 demo renommer à l'import
// import { soustraction as moins } from './math.js';
// console.log(moins(10, 4)); // 6

// //4 demo import/export regroupé
// import * as MathsUtil from './index.js';
// console.log(MathsUtil.addition(7, 8)); // 15
// MathsUtil.ecrireMessage('Bonjour le monde !'); // Message : Bonjour le monde !

// //5 demo import dynamique
// let button = document.getElementById('button');

// button.addEventListener('click', async () => {
//   const { openModal } = await import('./modal.js');
//   openModal();
// });
// // //6
// // main.js
// import { count, inc } from './counter.js';
// inc();
// console.log(count); // 1 (valeur mise à jour)
