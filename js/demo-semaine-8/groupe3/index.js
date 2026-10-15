// // Selecteurs
// const monTitre = document.querySelector('h1');
// console.log(monTitre);

// const monP = document.querySelector('#deuxp');
// console.log(monP);

// const tousMesP = document.querySelectorAll('p');
// console.log(tousMesP);

// const monPAvecID = document.getElementById('deuxp');

// const mesPAvecClass = document.getElementsByClassName('class-p');
// console.log('mesP avec class', mesPAvecClass);

// const mesP = document.getElementsByTagName('p');
// console.log('mesP avec class', mesP);

// //traverse Parent enfants...
// const mesFruits = document.getElementById('fruits');

// console.log('parent de fruit', mesFruits.parentNode);
// console.log('les enfants du ul', mesFruits.children);
// console.log('le 3e enfant du ul', mesFruits.children[1]);
// console.log('le 1er enfant du ul', mesFruits.firstElementChild);

// console.log('le frere', mesFruits.children[1].previousElementSibling);

// //Contenu text

// (() => {
//   const monTitre = document.querySelector('p');

//   console.log(monTitre.innerText);
//   console.log(monTitre.textContent);

//   console.log(monTitre.innerHTML);
//   monTitre.innerText = `Mon meilleur  paragraphe!`;
//   //ne paS FAIRE CA
//   //monTitre.innerHTML = "<img src='Node.png' onerror='alert(\"oh ooooh...\")'>";

//   const monInput = document.getElementById('montext');
//   monInput.value = 'Allo!';
// })();

// (() => {
//   const monDiv = document.querySelector('div');
//   monDiv.style.padding = '12px';
//   console.log(getComputedStyle(monDiv).color);
//   console.log(monDiv.classList);
//   monDiv.classList.add('active');

//   monDiv.classList.remove('red');

//   monButton.onclick = () => {
//     monDiv.classList.toggle('active');
//   };
//   const monLien = document.getElementById('monLien');
//   monLien.setAttribute('href', 'http://www.google.ca');
//   monLien.setAttribute('target', '_blank');
//   console.log(monLien.getAttribute('href'));
//   console.log(monLien.hasAttribute('href'));
// })();

const monP = document.createElement('p');
monP.textContent = 'Du texte';
monP.classList.add('active');
//document.body.appendChild(monP);

document.body.append(monP);
//document.body.prepend(monP);
const monLien = document.getElementById('monLien');

//monLien.before(monP);
monLien.after(monP);

//cloner
const monUl = document.querySelector('ul');
const monClone = monUl.cloneNode(true);
document.body.prepend(monClone);

//remplacer
const nouvTitre = document.createElement('h2');
nouvTitre.innerText = 'titre2';
const vieuxtitre = document.querySelector('h1');

vieuxtitre.replaceWith(nouvTitre);
monClone.remove();
