function moyenne(arr) {
  const total = arr.reduce((acc, val) => acc + val, 0);
  return total / arr.length;
}

function somme(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  console.log('Soustraction dans math.js : ' + (a - b));
  return a - b;
}

const PI = 3.14159;

//export default { moyenne, somme, addition, soustraction, PI };

export { moyenne, somme, addition, soustraction, PI };
