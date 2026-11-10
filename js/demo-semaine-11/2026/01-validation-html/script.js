const formulaire = document.querySelector('#inscription');
const resultat = document.querySelector('#resultat');

formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  resultat.textContent = 'Le formulaire a franchi la validation HTML.';
});
