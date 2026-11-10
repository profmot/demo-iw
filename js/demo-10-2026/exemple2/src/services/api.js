export async function chargerUsers() {
  const reponse = await fetch('/js/demo-10-2026/exemple2/data/users.json');
  return await reponse.json();
}
