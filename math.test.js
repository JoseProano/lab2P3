const { factorial, fibonacci } = require('./math');

describe('Función factorial', () => {
  test('factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial de 1 debe ser 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(200);
  });

  test('factorial de 10 debe ser 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });

  test('factorial de un número negativo debe lanzar error', () => {
    expect(() => factorial(-1)).toThrow('El factorial no está definido para números negativos');
  });

  test('factorial de un número negativo debe lanzar error específico', () => {
    expect(() => factorial(-5)).toThrow(Error);
  });
});

describe('Función fibonacci', () => {
  test('fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci de 1 debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci de 2 debe ser 1', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('fibonacci de 5 debe ser 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('fibonacci de 10 debe ser 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('fibonacci de 15 debe ser 610', () => {
    expect(fibonacci(15)).toBe(610);
  });

  test('fibonacci de un número negativo debe lanzar error', () => {
    expect(() => fibonacci(-1)).toThrow('La posición debe ser un número no negativo');
  });

  test('fibonacci de un número negativo debe lanzar error específico', () => {
    expect(() => fibonacci(-3)).toThrow(Error);
  });
});

describe('Pruebas de integración math', () => {
  test('factorial y fibonacci funcionan correctamente juntos', () => {
    expect(factorial(fibonacci(3))).toBe(2); // fibonacci(3) = 2, factorial(2) = 2
    expect(factorial(fibonacci(4))).toBe(6); // fibonacci(4) = 3, factorial(3) = 6
  });

  test('casos edge combinados', () => {
    expect(factorial(fibonacci(0))).toBe(1); // fibonacci(0) = 0, factorial(0) = 1
    expect(factorial(fibonacci(1))).toBe(1); // fibonacci(1) = 1, factorial(1) = 1
  });
});
