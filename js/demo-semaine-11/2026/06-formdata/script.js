const formulaire = document.querySelector('#preferences');
const sortie = document.querySelector('#sortie');

formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  const donnees = new FormData(formulaire);

  sortie.textContent = JSON.stringify(
    {
      nom: donnees.get('nom'),
      technologies: donnees.getAll('technologies'),
    },
    null,
    2
  );
});
