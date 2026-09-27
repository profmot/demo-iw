let dateAffichee = new Date();

function afficherDate() {
  document.querySelector('#locale').textContent = dateAffichee.toLocaleString('fr-CA', {
    dateStyle: 'long',
    timeStyle: 'medium'
  });
  document.querySelector('#annee').textContent = dateAffichee.getFullYear();
  document.querySelector('#mois').textContent = `${dateAffichee.getMonth()} (janvier vaut 0)`;
  document.querySelector('#jourMois').textContent = dateAffichee.getDate();
  document.querySelector('#jourSemaine').textContent = `${dateAffichee.getDay()} (dimanche vaut 0)`;
  document.querySelector('#timestamp').textContent = dateAffichee.getTime();
}

document.querySelector('#actualiser').addEventListener('click', function () {
  dateAffichee = new Date();
  afficherDate();
});

document.querySelector('#ajouter').addEventListener('click', function () {
  dateAffichee.setDate(dateAffichee.getDate() + 7);
  afficherDate();
});

afficherDate();
