const select = document.querySelector('#locale');
const sortie = document.querySelector('#sortie');
const date = new Date('2026-12-07T17:00:00');

function afficher() {
  sortie.textContent = new Intl.DateTimeFormat(select.value, {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date);
}

select.addEventListener('change', afficher);
afficher();
