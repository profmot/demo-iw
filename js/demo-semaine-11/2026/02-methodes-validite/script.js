const formulaire = document.querySelector('#profil');
const sortie = document.querySelector('#sortie');

document.querySelector('#verifier').addEventListener('click', () => {
  sortie.textContent = `checkValidity(): ${formulaire.checkValidity()}`;
  formulaire.reportValidity();
});

formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  sortie.textContent = 'submit déclenché: le formulaire est valide.';
});
