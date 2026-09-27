const champ = document.querySelector('#texte');
const resultat = document.querySelector('#resultat');

document.querySelector('#analyser').addEventListener('click', function () {
  const texte = champ.value;
  const texteNettoye = texte.trim();

  resultat.textContent = `Texte original : "${texte}"
Longueur : ${texte.length}
Sans espaces externes : "${texteNettoye}"
En majuscules : ${texteNettoye.toUpperCase()}
Contient "JavaScript" : ${texte.includes('JavaScript')}
Première lettre : ${texteNettoye[0]}
Les 7 premiers caractères : ${texteNettoye.slice(0, 7)}`;
});
