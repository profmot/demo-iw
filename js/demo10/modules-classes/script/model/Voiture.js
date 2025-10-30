import { Moteur } from './Moteur.js';
class Voiture {
  constructor(marque, modele, moteur) {
    this.marque = marque;
    this.modele = modele;
    this.moteur = new Moteur();
  }
  demarrer() {
    console.log(`La voiture ${this.marque} ${this.modele} démarre.`);
    this.moteur.demarrer();
  }
  arreter() {
    console.log(`La voiture ${this.marque} ${this.modele} s'arrête.`);
    this.moteur.arreter();
  }
}
export { Voiture };
