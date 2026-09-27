const valeurs = [
  { valeur: 'Bonjour', precision: 'chaîne de caractères' },
  { valeur: 42, precision: 'nombre' },
  { valeur: true, precision: 'booléen' },
  { valeur: undefined, precision: 'valeur non définie' },
  { valeur: null, precision: 'absence volontaire; typeof est un cas historique' },
  { valeur: [1, 2, 3], precision: 'tableau reconnu avec Array.isArray()' },
  { valeur: { nom: 'Alex' }, precision: 'objet' }
];

const corps = document.querySelector('#types');

for (const entree of valeurs) {
  const ligne = document.createElement('tr');
  const representation = JSON.stringify(entree.valeur) ?? String(entree.valeur);
  ligne.innerHTML = `<td><code>${representation}</code></td><td><code>${typeof entree.valeur}</code></td><td>${entree.precision}</td>`;
  corps.append(ligne);
}

const nombre = Number('5');
document.querySelector('#conversion').textContent = `Number("5") produit ${nombre}, de type ${typeof nombre}.`;
