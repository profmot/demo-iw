function getlocal(cle) {
  return localStorage.getItem(cle);
}

function setlocal(cle, valeur) {
  return localStorage.setItem(cle, valeur);
}

export { getlocal, setlocal };
