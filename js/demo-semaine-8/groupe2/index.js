// // QuerySelector/All
// (() => {
//   let monElement = document.querySelector('p');
//   let mesElement = document.querySelectorAll('p');
//   for (monelem of mesElement) {
//     console.log(monelem);
//   }
// })();

// // Autres selecteurs
// (() => {
//   let monElement = document.getElementById('id-parag');
//   console.log(monElement);
//   monElement = document.getElementsByClassName('class-parag');
//   console.log(monElement);
//   monElement = document.getElementsByTagName('p');
//   console.log(monElement);
//   monElement = document.getElementsByName('troisieme');
//   console.log(monElement);
//   let monDiv = document.querySelector('div');
//   console.log(monDiv.querySelector('p'));
// })();

// traversal
// (() => {
//   let mesFruits = document.getElementById('fruits');
//   console.log(mesFruits.parentNode); //parent
//   console.log(mesFruits.children); //les enfants
//   console.log(mesFruits.children.length); //les enfants
//   console.log(mesFruits.children[0].nextElementSibling);
//   console.log(mesFruits.firstElementChild);
// })();

//Contenu

(() => {
  const monTitre = document.getElementById('mon-titre');
  const monParag = document.getElementById('parag1');
  const monNom = document.getElementById('nom');

  if (monTitre && monParag && monNom) {
    console.log(monTitre.innerText);
    console.log(monParag.innerHTML);
    console.log(monNom.value);

    monTitre.innerText = 'Un Meilleur titre';
    monParag.innerHTML = 'allo <span style="color:red">mon ami</span>';
    monNom.value = 'tony';
    ///NE pas utiliser innerHTML XSS
    //    monParag.innerHTML = '<img src="rien.png" onerror="alert(\'ERROR!\')">';
  }

  //style et getComputedStyle
  console.log(getComputedStyle(monTitre).width);
  // style classlist

  console.log(monTitre.classList);
  let monButton = document.getElementById('monButton');
  monButton.onclick = () => {
    //   monTitre.classList.toggle('titre1');
    monTitre.classList.toggle('nonvisible');
    //monTitre.classList.remove('titre1');
  };
})();
