const a = document.querySelector('#a');
const b = document.querySelector('#b');
const operateur = document.querySelector('#operateur');
const resultat = document.querySelector('#resultat');

document.querySelector('#calculer').addEventListener('click', function () {
  const nombreA = Number(a.value);
  const nombreB = Number(b.value);
  let reponse;

  if (operateur.value === '+') reponse = nombreA + nombreB;
  if (operateur.value === '-') reponse = nombreA - nombreB;
  if (operateur.value === '*') reponse = nombreA * nombreB;
  if (operateur.value === '/') reponse = nombreA / nombreB;
  if (operateur.value === '%') reponse = nombreA % nombreB;

  resultat.textContent = `${nombreA} ${operateur.value} ${nombreB} = ${reponse}`;
});

let score = 5;
score += 2;
console.log('score += 2 donne', score);
