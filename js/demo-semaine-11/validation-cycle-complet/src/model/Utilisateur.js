class Utilisateur {
  constructor({ email, password, remember }) {
    this.email = String(email).trim().toLowerCase();
    this.password = String(password);
    this.remember = Boolean(remember);
  }
  valider() {
    if (!this.email.includes('@')) throw new Error('Courriel invalide');
    if (this.password.length < 8) throw new Error('Mot de passe trop court');
  }
}
export { Utilisateur };
