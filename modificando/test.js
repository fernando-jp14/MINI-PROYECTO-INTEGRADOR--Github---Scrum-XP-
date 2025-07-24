//aca hagan el test
// es guia modifiquen este archivo si lo necesitan
const { calcularExpresion } = require('../script');

function test(titulo, expresion, esperado) {
  const resultado = calcularExpresion(expresion);
  const ok = resultado === esperado ? "✅" : `❌ (esperado: ${esperado}, obtenido: ${resultado})`;
  console.log(`${ok} ${titulo}`);
}

// Casos de prueba
test("Suma y multiplicación", "2 + 3 * 4", 14);
test("Uso de paréntesis", "(2 + 3) * 4", 20);
test("Expresión inválida", "2 + * 3", "Error: Expresión inválida");
