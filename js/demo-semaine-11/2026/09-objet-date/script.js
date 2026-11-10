const sortie = document.querySelector('#sortie');

document.querySelector('#maintenant').addEventListener('click', () => {
  const maintenant = new Date();
  const dateLocale = new Date('2026-11-09T10:30');
  const dateUTC = new Date('2026-11-09T15:30Z');

  sortie.textContent = [
    `Maintenant: ${maintenant}`,
    `Date locale: ${dateLocale}`,
    `Date UTC: ${dateUTC}`,
    `Timestamp: ${maintenant.getTime()}`,
  ].join('\n\n');
});
