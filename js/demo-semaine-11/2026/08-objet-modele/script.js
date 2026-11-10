class Utilisateur {
  constructor({ email, password, remember }) {
    this.email = email.trim().toLowerCase();
    this.password = password;
    this.remember = remember === 'oui';
  }
}

const formulaire = document.querySelector('#compte');

formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  const donnees = Object.fromEntries(new FormData(formulaire));
  const utilisateur = new Utilisateur(donnees);
  document.querySelector('#sortie').textContent = JSON.stringify(
    utilisateur,
    null,
    2
  );
});
