const resultat = document.querySelector('#resultat');
const saluer = document.querySelector('#saluer');
const compter = document.querySelector('#compter');
let nombreClics = 0;

saluer.addEventListener('click', function () {
  resultat.textContent = 'Bonjour! JavaScript a réagi à votre clic.';
});

compter.addEventListener('click', function () {
  nombreClics += 1;
  resultat.textContent = `Nombre de clics : ${nombreClics}`;
});
