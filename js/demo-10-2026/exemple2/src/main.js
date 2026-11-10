import { chargerUsers } from './services/api.js';
import { afficherUsers } from './ui/liste.js';
import { faireUnTest } from './services/test.js';

const monBtn = document.querySelector('#chargerbtn');

monBtn.addEventListener('click', async () => {
  let listeUsers = await chargerUsers();
  afficherUsers(listeUsers, document.querySelector('#liste'));
});

faireUnTest();
