const codePostal = document.querySelector('#codePostal');

codePostal.addEventListener('input', () => {
  if (codePostal.validity.patternMismatch) {
    codePostal.setCustomValidity('Format attendu: A1A 1A1.');
  } else {
    codePostal.setCustomValidity('');
  }
});

document.querySelector('#adresse').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Code postal valide!');
});
