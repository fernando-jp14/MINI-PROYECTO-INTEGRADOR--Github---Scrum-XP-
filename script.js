function calcularExpresion(expresion) {
  try {
   
    expresion = expresion.trim();
    
    if (!/^[\d+\-*/().\s]+$/.test(expresion)) {
      throw new Error("Expresión inválida");
    }

    if (/[*\/+\-]{2,}/.test(expresion.replace(/\s+/g, ''))) {
      throw new Error("Operadores inválidos seguidos");
    }

    let balance = 0;
    for (let char of expresion) {
      if (char === '(') balance++;
      if (char === ')') balance--;
      if (balance < 0) throw new Error("Paréntesis desbalanceados");
    }
    if (balance !== 0) throw new Error("Paréntesis desbalanceados");

    const resultado = eval(expresion);

    if (isNaN(resultado)) {
      throw new Error("Resultado inválido");
    }

    return resultado;
  } catch (error) {
    return "Error: " + error.message;
  }
}

// Exportar para Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calcularExpresion };
}
