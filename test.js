//aca hagan el test
// es guia modifiquen este archivo si lo necesitan

const { calcularExpresion } = require('./script');

function test(titulo, expresion, esperado) {
  const resultado = calcularExpresion(expresion);
  const ok = resultado === esperado ? "✅" : `❌ (esperado: ${esperado}, obtenido: ${resultado})`;
  console.log(`${ok} ${titulo}`);
}

// Casos de prueba
test("Exponente", "2 ** 3", 8); // Esta prueba fallará con el código actual
test("Suma y multiplicación", "2 + 3 * 4", 14);
test("Uso de paréntesis", "(2 + 3) * 4", 20);
test("Expresión vacía", "", "Error: Expresión inválida");
test("Operadores seguidos (+*)", "2 + * 3", "Error: Operadores inválidos seguidos");
test("Operadores seguidos (++)", "2 ++ 3", "Error: Operadores inválidos seguidos");
test("Paréntesis desbalanceados (faltante)", "(2 + 3 * 4", "Error: Paréntesis desbalanceados");
test("Paréntesis desbalanceados (extra)", "2 + 3) * 4", "Error: Paréntesis desbalanceados");
test("División por cero", "10 / 0", Infinity);
test("Expresión con espacios", "  2 + 2  ", 4);
test("Expresión inválida (letras)", "2 + a", "Error: Expresión inválida");
