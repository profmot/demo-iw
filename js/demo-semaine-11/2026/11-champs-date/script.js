const champs = document.querySelectorAll('input');
const sortie = document.querySelector('#sortie');

function afficherValeurs() {
  sortie.textContent = Array.from(champs)
    .map((champ) => `${champ.type}: ${champ.value || 'vide'}`)
    .join('\n');
}

champs.forEach((champ) => champ.addEventListener('input', afficherValeurs));
afficherValeurs();
