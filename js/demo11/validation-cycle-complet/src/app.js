import { Utilisateur } from './model/Utilisateur.js';
const form = document.getElementById('formulaire');
const msg = document.getElementById('message');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) return;

  const raw = Object.fromEntries(new FormData(form));
  const user = new Utilisateur(raw);

  try {
    user.valider();
    localStorage.setItem('user', JSON.stringify(user));

    msg.innerText = 'Utilisateur enregistré avec succès.';
  } catch (err) {
    msg.innerText = `Erreur: ${err.message}`;
  }
});
