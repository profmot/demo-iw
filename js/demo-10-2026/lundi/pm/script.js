async function chargerUsers() {
  try {
    const chargement = document.querySelector('#chargement');

    chargement.hidden = false;
    const laReponse = await fetch('https://randomuser.me/api/?results=5');

    if (!laReponse.ok) {
      throw new Error('erreur de reponse ' + laReponse.status);
    }
    const data = await laReponse.json();

    const divInfo = document.querySelector('#infoUser');
    const imgUser = document.querySelector('#imageUsr');

    divInfo.textContent =
      data.results[0].name.first + ' ' + data.results[0].name.last;
    imgUser.src = data.results[0].picture.medium;
    imgUser.hidden = false;

    chargement.hidden = true;
  } catch (e) {
    console.error(e.message);
  }
}

const monButton = document.querySelector('#btnFetch');

monButton.addEventListener('click', () => {
  chargerUsers();
  console.log('apresCharger');
});
