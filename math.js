function factorial(n) {
  if (n < 0) {
    throw new Error('El factorial no está definido para números negativos');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n < 0) {
    throw new Error('La posición debe ser un número no negativo');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = {
  factorial,
  fibonacci
};
