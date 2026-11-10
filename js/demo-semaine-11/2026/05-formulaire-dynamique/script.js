const typeClient = document.querySelector('#typeClient');
const zoneEntreprise = document.querySelector('#zoneEntreprise');
const telephones = document.querySelector('#telephones');
let compteur = 0;

typeClient.addEventListener('change', () => {
  zoneEntreprise.hidden = typeClient.value !== 'entreprise';
});

document.querySelector('#ajouter').addEventListener('click', () => {
  compteur += 1;
  const label = document.createElement('label');
  const input = document.createElement('input');
  label.htmlFor = `telephone-${compteur}`;
  label.textContent = `Téléphone ${compteur}`;
  input.id = `telephone-${compteur}`;
  input.name = 'telephones';
  telephones.append(label, input);
});
