import { setlocal } from '../services/storage';

function getvaleurChamp(idChamp) {
  return document.getElementById(idChamp).value;
}

function afficheMsgDansContenu(idElement, unMessage) {
  document.getElementById(idElement).textContent = unMessage;
  setlocal(unMessage);
}

function getElement(idElement) {
  return document.getElementById(idElement);
}
export { getElement, getvaleurChamp, afficheMsgDansContenu };
