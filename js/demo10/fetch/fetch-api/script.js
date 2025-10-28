document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnCharger');
  const zone = document.getElementById('resultats');

  btn.addEventListener('click', async () => {
    zone.innerHTML = '<p>⏳ Chargement en cours...</p>';

    try {
      const response = await fetch('https://dummyjson.com/products?limit=5');

      // Vérifie le statut HTTP
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
      }

      const data = await response.json();
      afficherProduits(data.products);
    } catch (err) {
      zone.innerHTML = `<p class="erreur">❌ Erreur : ${err.message}</p>`;
    }
  });

  function afficherProduits(produits) {
    zone.innerHTML = ''; // vide la zone

    const liste = document.createElement('ul');

    for (const prod of produits) {
      const li = document.createElement('li');
      li.textContent = `${prod.title} — ${prod.price}$ — ${prod.category}`;
      liste.appendChild(li);
    }

    zone.appendChild(liste);
  }
});
