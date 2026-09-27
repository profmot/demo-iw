const nomJoueur = 'Alex';
let score = 0;

const sortieNom = document.querySelector('#joueur');
const sortieScore = document.querySelector('#score');

sortieNom.textContent = nomJoueur;

document.querySelector('#ajouter').addEventListener('click', function () {
  score += 1;
  sortieScore.textContent = score;
});

document.querySelector('#reinitialiser').addEventListener('click', function () {
  score = 0;
  sortieScore.textContent = score;
});
