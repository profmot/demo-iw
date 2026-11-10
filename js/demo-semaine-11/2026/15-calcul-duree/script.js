const formulaire = document.querySelector('#calcul');
const sortie = document.querySelector('#sortie');
document.querySelector('#debut').value = '2026-11-09T10:00';
document.querySelector('#fin').value = '2026-11-09T11:15';

formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  const debut = new Date(document.querySelector('#debut').value);
  const fin = new Date(document.querySelector('#fin').value);
  const dureeMs = fin - debut;

  if (dureeMs < 0) {
    sortie.textContent = 'La fin doit arriver après le début.';
    return;
  }

  const minutes = Math.round(dureeMs / 60000);
  const heures = Math.floor(minutes / 60);
  const reste = minutes % 60;
  sortie.textContent = `Durée: ${heures} h ${reste} min (${minutes} minutes)`;
});
