function afficher() {
  const maintenant = new Date();
  document.querySelector('#locale').textContent = maintenant.toString();
  document.querySelector('#utc').textContent = maintenant.toISOString();
}

document.querySelector('#actualiser').addEventListener('click', afficher);
afficher();
