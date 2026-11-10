export function afficherUsers(listeUsers, elementListe) {
  listeUsers.forEach((user) => {
    const monLi = document.createElement('li');
    monLi.textContent = user.prenom;
    elementListe.append(monLi);
  });
}
