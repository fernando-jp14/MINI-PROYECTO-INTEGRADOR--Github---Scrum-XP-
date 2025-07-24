function calcularExpresion(expresion) {
  try {
    if (!/^[\d+\-*/().\s]+$/.test(expresion)) {
      throw new Error("Expresión inválida");
    }
    const resultado = eval(expresion);
    if (isNaN(resultado)) {
      throw new Error("Resultado inválido");
    }
    return resultado;
  } catch (error) {
    return "Error: " + error.message;
  }
}

// Exportar la función para Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calcularExpresion };
}

