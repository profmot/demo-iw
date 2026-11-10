const champ = document.querySelector('#site');
const etats = document.querySelector('#etats');

champ.addEventListener('input', () => {
  etats.innerHTML = `
    <li>valid: ${champ.validity.valid}</li>
    <li>valueMissing: ${champ.validity.valueMissing}</li>
    <li>typeMismatch: ${champ.validity.typeMismatch}</li>
  `;
});

champ.dispatchEvent(new Event('input'));
