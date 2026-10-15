const btn = document.getElementById('btn');
const state = document.getElementById('state');
const out = document.getElementById('out');

// Helpers UI
function setLoading(on, msg = '') {
  btn.disabled = on;
  state.textContent = on ? msg || 'Chargement…' : 'Prêt.';
  state.className = on ? 'loading' : 'info';
}
function showError(message) {
  out.innerHTML = `<div class="error">${message}</div>`;
}
function showCard({ image, value, suit, deck_id, remaining }) {
  out.innerHTML = `
        <div class="ok">Carte pigée avec succès</div>
        <div class="card">
          <img src="${image}" alt="Carte pigée">
          <div class="kvs">
            <div><strong>Valeur :</strong> ${value}</div>
            <div><strong>Couleur :</strong> ${suit}</div>
            <div><strong>Deck ID :</strong> <code>${deck_id}</code></div>
            <div><strong>Cartes restantes :</strong> ${remaining}</div>
          </div>
        </div>
      `;
}

// Appels API
async function createDeck() {
  const url =
    'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Erreur réseau (shuffle): ${r.status}`);
  const data = await r.json();
  if (!data.success || !data.deck_id)
    throw new Error('Réponse invalide: deck_id manquant');
  return data.deck_id;
}

async function drawOne(deckId) {
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Erreur réseau (draw): ${r.status}`);
  const data = await r.json();
  if (!data.success || !Array.isArray(data.cards) || data.cards.length < 1) {
    throw new Error("Aucune carte retournée par l'API");
  }
  const c = data.cards[0];
  return {
    image: c.image,
    value: c.value,
    suit: c.suit,
    deck_id: data.deck_id,
    remaining: data.remaining,
  };
}

// Contrôleur
async function onDraw() {
  setLoading(true, 'Création du paquet…');
  try {
    // 1) Créer un paquet: obtenir deck_id
    const deckId = await createDeck();

    // 2) Piger une carte avec le deck_id
    setLoading(true, 'On pige une carte…');
    const card = await drawOne(deckId);

    // 3) Afficher résultat
    showCard(card);
    setLoading(false);
  } catch (err) {
    // Gérer proprement les erreurs (réseau / API / logique)
    console.error(err);
    showError(err.message || 'Une erreur est survenue.');
    setLoading(false);
  }
}

btn.addEventListener('click', onDraw);
