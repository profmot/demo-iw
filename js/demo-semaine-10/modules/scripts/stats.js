// demo reexport depuis un autre module
export { moyenne, somme } from './math.js';

//demo export par défaut
export default function afficherStats() {
  console.log('Affichage des statistiques...');
}
