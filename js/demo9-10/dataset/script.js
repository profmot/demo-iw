const produits = document.getElementById('produits');
const panier = document.getElementById('panier');

produits.addEventListener('click', (event) => {
  // Vérifie si on a cliqué sur un bouton
  if (event.target.tagName === 'BUTTON') {
    // Récupère les données via dataset
    const id = event.target.dataset.id;
    const nom = event.target.dataset.nom;
    const prix = event.target.dataset.prix;

    // Crée un élément dans la liste
    const item = document.createElement('li');
    item.textContent = `${nom} — $${prix}`;

    panier.appendChild(item);

    console.log('ID:', id, 'Nom:', nom, 'Prix:', prix);
  }
});
