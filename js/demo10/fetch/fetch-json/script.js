document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnCharger');
  const liste = document.getElementById('liste');

  btn.addEventListener('click', async () => {
    try {
      // Affiche un message temporaire pendant le chargement
      liste.innerHTML = '<li>Chargement...</li>';

      // Fait la requête vers le fichier JSON local
      const response = await fetch('data.json');

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      // Convertit la réponse en objet JS
      const data = await response.json();

      // Vide la liste avant d’ajouter les nouveaux éléments
      liste.innerHTML = '';

      // Parcourt les étudiants et affiche dans la page
      for (const etu of data.etudiants) {
        const li = document.createElement('li');
        li.textContent = `${etu.nom} - ${etu.age} ans - ${etu.ville}`;
        liste.appendChild(li);
      }
    } catch (err) {
      liste.innerHTML = `<li style="color:red">Erreur : ${err.message}</li>`;
    }
  });
});
