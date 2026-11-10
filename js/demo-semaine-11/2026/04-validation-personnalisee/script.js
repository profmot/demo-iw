const formulaire = document.querySelector('#preferences');
const infolettre = document.querySelector('#infolettre');
const courriel = document.querySelector('#courriel');
const resultat = document.querySelector('#resultat');

function validerCourriel() {
  courriel.setCustomValidity('');

  if (infolettre.checked && courriel.value.trim() === '') {
    courriel.setCustomValidity(
      "Indiquez votre courriel pour recevoir l'infolettre."
    );
    return false;
  }

  return true;
}

infolettre.addEventListener('change', () => {
  if (!validerCourriel()) {
    courriel.reportValidity();
  }
});

courriel.addEventListener('input', validerCourriel);

formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  resultat.textContent = 'Préférences enregistrées.';
});
