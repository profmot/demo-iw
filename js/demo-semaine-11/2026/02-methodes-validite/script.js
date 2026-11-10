const formulaire = document.querySelector('#profil');
const sortie = document.querySelector('#sortie');

document.querySelector('#check').addEventListener('click', () => {
  sortie.textContent = `checkValidity(): ${formulaire.checkValidity()}`;
});

document.querySelector('#report').addEventListener('click', () => {
  sortie.textContent = `reportValidity(): ${formulaire.reportValidity()}`;
});

formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  sortie.textContent = 'submit déclenché: le formulaire est valide.';
});
