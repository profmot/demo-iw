const message = document.querySelector('#profil');
const image = document.querySelector('#portrait');
const monBtn = document.querySelector('#btnphoto');

const btnanimaux = document.querySelector('#btnanimaux');

async function getAnimo() {
  const reponse = await fetch('./animaux.json');
  const data = await reponse.json();
  console.log(data);
}
btnanimaux.addEventListener('click', () => {
  getAnimo();
});

async function chargerProfil() {
  message.hidden = false;
  try {
    const reponse = await fetch('https://randomuser.me/api/');
    if (!reponse.ok) {
      throw new Error('Erreur http' + reponse.status);
    }
    const data = await reponse.json();
    const personne = data.results[0];
    image.src = personne.picture.large;
    image.alt = personne.name.first + ' ' + personne.name.last;
    image.hidden = false;
    message.hidden = true;
    console.log(data);
  } catch (e) {
    console.error(e.message);
  }
}

monBtn.addEventListener('click', () => {
  chargerProfil();
});

/*<button id="btnphoto"></button>
    <p id="profil">Chargement du profil...</p>
    <img id="portrait" width="128" height="128" hidden />
*/

/*async function chargerUtilisateurs() {
  try {
    const response = await fetch('https://coursinfo.ca/420-3E5/users');
    if (!response.ok) {
      throw new Error('erreur...');
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error('une erreur est survenue');
  }
}

chargerUtilisateurs();*/
