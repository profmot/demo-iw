import {
  getElement,
  getvaleurChamp,
  afficheMsgDansContenu,
} from './ui/screencontent.js';
import { setlocal } from './services/storage.js';

const elmBouton = getElement('monButton');

elmBouton.addEventListener('click', () => {
  const valTxt = getvaleurChamp('monText');
  afficheMsgDansContenu('monDiv', valTxt);
  setlocal(valTxt);
});
