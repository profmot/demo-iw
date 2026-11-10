import afficherAlert from './message.js';
import * as mathematique from './math.js';
import { add, mult, PI, formatMessage } from './tous.js';

let resultat = mathematique.add(4, 10);

let resultatMult = mult(PI, 10);

document.querySelector('#resultat').textContent = resultatMult;
afficherAlert('Attention!!');
