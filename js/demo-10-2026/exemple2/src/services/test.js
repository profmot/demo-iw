import { chargerUsers } from './api.js';

export async function faireUnTest() {
  let maListe = await chargerUsers();
  console.log(maListe);
}
