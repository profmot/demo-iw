document.querySelector('#journal').addEventListener('click', function () {
  console.log('Un message normal dans la console.');
  console.table([
    { nom: 'HTML', role: 'structure' },
    { nom: 'JavaScript', role: 'comportement' },
  ]);
});

document.querySelector('#avertissement').addEventListener('click', function () {
  console.warn('Ceci est un avertissement.');
});

document.querySelector('#erreur').addEventListener('click', function () {
  const valeur = null;
  valeur.toUpperCase();
});

document.querySelector('#pause').addEventListener('click', function () {
  const message = 'Partir le debugger';
  debugger;
  console.log(message);
});
