const form = document.querySelector('#formInscription');
const inputEmail = document.querySelector('[name="courriel"]');
const inputInfolettre = document.querySelector('[name="infolettre"]');
const casesCours = document.querySelectorAll('[name="cours"]');
const zoneHoraire = document.querySelector('#zoneHoraire');
const selectHoraire = document.querySelector('#horaire');
const btnSubmit = document.querySelector('#btnSubmit');
const btnExterne = document.querySelector('#btnExterne');
const message = document.querySelector('#message');

form.addEventListener('input', () => {
  btnSubmit.disabled = !form.checkValidity();
});

inputEmail.addEventListener('blur', () => {
  validerInfolettreEmail();
  btnSubmit.disabled = !inputEmail.reportValidity();
});

btnExterne.addEventListener('click', () => {
  form.reportValidity();
});

function validerInfolettreEmail() {
  inputEmail.setCustomValidity('');
  if (inputInfolettre.checked && inputEmail.value.trim() === '') {
    inputEmail.setCustomValidity(
      "Vous devez incrire une courriel pour recevoir l'infolettre"
    );
    return false;
  }
  return true;
}

inputInfolettre.addEventListener('change', () => {
  if (!validerInfolettreEmail()) {
    inputEmail.reportValidity();
  }
});

function mettreAjourHoraire() {
  const fd = new FormData(form);
  //console.log(fd.get('nom'));

  const mesCours = fd.getAll('cours');
  zoneHoraire.hidden = mesCours.length == 0;
  selectHoraire.disabled = mesCours.length == 0;
}

casesCours.forEach((caseCours) => {
  caseCours.addEventListener('change', mettreAjourHoraire);
});

async function envoyerDonnees() {
  const fd = new FormData(form);
  const inscription = {
    nom: fd.get('nom'),
    courriel: fd.get('courriel'),
    infolettre: fd.has('infolettre'),
    cours: fd.getAll('cours'),
    horaire: fd.get('horaire'),
  };

  try {
    message.textContent = 'Envoi en cours...';

    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inscription),
    });

    if (!reponse.ok) {
      throw new Error(`Erreur HTTP ${reponse.status}`);
    }

    const publication = await reponse.json();
    message.textContent = `Publication simulée: ${publication.id}`;
  } catch (erreur) {
    message.textContent = "Impossible d'envoyer le formulaire.";
    console.error(erreur);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  envoyerDonnees();
});
