const date = new Date('2026-11-09T14:35:20');

document.querySelector('#sortie').textContent = [
  `getFullYear(): ${date.getFullYear()}`,
  `getMonth(): ${date.getMonth()} (novembre vaut 10)`,
  `getDate(): ${date.getDate()}`,
  `getHours(): ${date.getHours()}`,
  `getMinutes(): ${date.getMinutes()}`,
  `toISOString(): ${date.toISOString()}`,
].join('\n');
