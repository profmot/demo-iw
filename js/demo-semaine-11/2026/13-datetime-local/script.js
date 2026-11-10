const champ = document.querySelector('#rendezVous');
const sortie = document.querySelector('#sortie');

function versChamp(date) {
  const decalage = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - decalage).toISOString().slice(0, 16);
}

function afficher() {
  if (!champ.value) {
    sortie.textContent = 'Choisissez une date.';
    return;
  }

  const date = new Date(champ.value);
  sortie.textContent = `Champ: ${champ.value}\nISO UTC: ${date.toISOString()}`;
}

champ.value = versChamp(new Date());
champ.addEventListener('input', afficher);
afficher();
