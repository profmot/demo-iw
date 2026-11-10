const form = document.querySelector('#formInscription');
const inputEmail = document.querySelector('[name="courriel"]');
const inputInfolettre = document.querySelector('[name="infolettre"]');
const casesCours = document.querySelectorAll('[name="cours"]');
const zoneHoraire = document.querySelector('#zoneHoraire');
const selectHoraire = document.querySelector('#horaire');
const btnSubmit = document.querySelector('#btnSubmit');
const btnExterne = document.querySelector('#btnExterne');
const message = document.querySelector('#message');

btnExterne.addEventListener('click', (e) => {
  form.reportValidity();
});

form.addEventListener('input', () => {
  btnSubmit.disabled = !form.checkValidity();
});
inputEmail.addEventListener('blur', (e) => {
  inputEmail.reportValidity();
});
inputEmail.addEventListener('input', () => {
  console.table({
    valid: inputEmail.validity.valid,
    valueMissing: inputEmail.validity.valueMissing,
    typeMismatch: inputEmail.validity.typeMismatch,
  });
});

function validerCourriel() {
  inputEmail.setCustomValidity('');

  if (inputInfolettre.checked && inputEmail.value.trim() === '') {
    inputEmail.setCustomValidity(
      "Indiquez votre courriel pour recevoir l'infolettre."
    );
    return false;
  }

  return true;
}

inputInfolettre.addEventListener('change', () => {
  if (!validerCourriel()) {
    //inputEmail.reportValidity();
  }

  btnSubmit.disabled = !form.checkValidity();
});

inputEmail.addEventListener('input', () => {
  validerCourriel();
  btnSubmit.disabled = !form.checkValidity();
});

function mettreAJourHoraire() {
  const coursChoisi = [...casesCours].some((caseCours) => {
    return caseCours.checked;
  });

  zoneHoraire.hidden = !coursChoisi;
  selectHoraire.disabled = !coursChoisi;

  if (!coursChoisi) {
    selectHoraire.value = '';
  }

  btnSubmit.disabled = !form.checkValidity();
}

casesCours.forEach((caseCours) => {
  caseCours.addEventListener('change', mettreAJourHoraire);
});
