const boutonExterne = document.querySelector('#externe');
const sortie = document.querySelector('#sortie');

boutonExterne.addEventListener('click', function () {
  sortie.textContent = 'Ce comportement vient du fichier externe script.js.';
});

console.log('2. Le fichier externe chargé avec defer est maintenant exécuté.');
