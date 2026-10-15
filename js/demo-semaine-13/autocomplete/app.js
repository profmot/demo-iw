const VILLES = [
  'Montréal',
  'Mont-Royal',
  'Mont-Tremblant',
  'Mont-Saint-Hilaire',
  'Mont-Laurier',
  'Montmagny',
  'Mont-Joli',
  'Laval',
  'Lavaltrie',
  'L’Assomption',
  'La Prairie',
  'Lac-Mégantic',
  'Saint-Hyacinthe',
  'Saint-Jean-sur-Richelieu',
  'Saint-Jérôme',
  'Saint-Eustache',
  'Saint-Georges',
  'Saint-Lazare',
  'Saint-Lambert',
  'Saint-Sauveur',
];

const q = document.getElementById('q');
const list = document.getElementById('list');

// ------------------------------
// Debounce : attendre un peu avant d'exécuter
// (Empêche d'appeler update() à chaque touche)
function debounce(fn, delay = 250) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}
// ------------------------------

// Fonction principale (sera appelée *après* le debounce)
function update() {
  // 1) Lire la valeur du champ (input event)
  const v = q.value.trim().toLowerCase();

  // Si moins de 2 lettres : ne rien afficher
  if (v.length < 2) {
    list.hidden = true;
    list.innerHTML = '';
    return;
  }

  // 2) Filtrer la liste → garder ceux qui contiennent le texte
  const res = VILLES.filter((x) => x.toLowerCase().includes(v)).slice(0, 5); // on limite à 5 résultats

  // 3) Générer du HTML : afficher les suggestions
  list.innerHTML = res.map((x) => `<div class="item">${x}</div>`).join('');
  list.hidden = res.length === 0;

  // 4) Clic sur suggestion : remplir le champ et fermer la liste
  list.querySelectorAll('.item').forEach((el) => {
    el.onclick = () => {
      q.value = el.textContent;
      list.hidden = true;
    };
  });
}

// 5) debounce() : on appelle update *avec délai*
q.addEventListener('input', debounce(update, 250));

// Fermer la liste si on clique ailleurs
document.addEventListener('click', (e) => {
  if (!e.target.closest('#box')) list.hidden = true;
});
