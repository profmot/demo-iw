import * as moduleMath from './math.js';
import messageAlerte, { formaterMessage as formaterModule } from './message.js';

import { add, formaterMessage } from './export.js';

const divResultat = document.querySelector('#resultat');
divResultat.textContent = moduleMath.mult(moduleMath.PI, 10);

messageAlerte(formaterModule('Allo les amis'));
