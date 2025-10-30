fetch('https://dummyjson.com/products?limit=5')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error('Erreur :', err);
  });

console.log('Après fetch');

async function chargerProduits() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=5');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Erreur :', err);
  }
}

chargerProduits();
console.log('Après chargerProduits');

console.log('Après chargerProduits');

console.log('Après chargerProduits');
console.log('Après chargerProduits');
