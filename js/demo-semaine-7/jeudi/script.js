setTimeout(() => {
  console.log('Bonjour après 2 secondes');
}, 2000);

const intervalId = setInterval(() => {
  console.log('Encore là?');
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log('10 secondes');
}, 10000);
