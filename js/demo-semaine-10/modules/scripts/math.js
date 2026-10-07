function moyenne(arr) {
  const total = arr.reduce((acc, val) => acc + val, 0);
  return total / arr.length;
}

function somme(arr) {
  message('Calcul de la somme...');
  return arr.reduce((acc, val) => acc + val, 0);
}

function message(message) {
  console.log('Message : ' + message);
}

export function addition(a, b) {
  message('Addition dans math.js : ' + (a + b));
  return a + b;
}

function soustraction(a, b) {
  console.log('Soustraction dans math.js : ' + (a - b));
  return a - b;
}

export const PI = 3.14159;

export default { moyenne, somme, addition, soustraction, PI };

//export { addition, PI, soustraction };
