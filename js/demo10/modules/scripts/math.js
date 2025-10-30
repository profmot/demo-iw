export function moyenne(arr) {
  const total = arr.reduce((acc, val) => acc + val, 0);
  return total / arr.length;
}

export function somme(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

export function addition(a, b) {
  return a + b;
}

export function soustraction(a, b) {
  console.log('Soustraction dans math.js : ' + (a - b));
  return a - b;
}

export const PI = 3.14159;
