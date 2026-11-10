const formulaire = document.querySelector('#publication');
const bouton = formulaire.querySelector('button');
const sortie = document.querySelector('#sortie');

formulaire.addEventListener('submit', async (event) => {
  event.preventDefault();
  const donnees = Object.fromEntries(new FormData(formulaire));

  try {
    bouton.disabled = true;
    sortie.textContent = 'Envoi en cours...';
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donnees),
    });

    if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`);
    sortie.textContent = JSON.stringify(await reponse.json(), null, 2);
  } catch (erreur) {
    sortie.textContent = erreur.message;
  } finally {
    bouton.disabled = false;
  }
});
