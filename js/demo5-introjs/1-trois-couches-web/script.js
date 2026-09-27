const bouton = document.querySelector('#action');
const carte = document.querySelector('#carte');
const message = document.querySelector('#message');

bouton.addEventListener('click', function () {
  carte.classList.toggle('active');
  message.textContent = carte.classList.contains('active')
    ? 'JavaScript vient de modifier le contenu et une classe CSS.'
    : 'HTML fournit cette structure et ce contenu.';
});
