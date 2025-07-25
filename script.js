// Función lógica separada
// Función principal
function calcularExpresion(expresion) {
  try {
    expresion = expresion.trim();

    if (!esExpresionValida(expresion)) {
      throw new Error("Expresión inválida");
    }

    if (operadoresSeguidosInvalidos(expresion)) {
      throw new Error("Operadores inválidos seguidos");
    }

    if (!parentesisBalanceados(expresion)) {
      throw new Error("Paréntesis desbalanceados");
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

// --- Funciones auxiliares de validación ---

function esExpresionValida(expresion) {
  // Solo números, operadores, puntos, paréntesis y espacios
  return /^[\d+\-*/().\s]+$/.test(expresion);
}

function operadoresSeguidosInvalidos(expresion) {
  const exprSinEspacios = expresion.replace(/\s+/g, '');

  // Buscar todos los operadores de 2 o más caracteres
  const operadores = exprSinEspacios.match(/[*\/+\-]{2,}/g);

  if (!operadores) return false;

  return operadores.some(op => op !== '**');
}


function parentesisBalanceados(expresion) {
  let balance = 0;
  for (let char of expresion) {
    if (char === '(') balance++;
    if (char === ')') balance--;
    if (balance < 0) return false;
  }
  return balance === 0;
}

// Exportar para Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calcularExpresion };
}

// Código del navegador
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const input = document.getElementById("input-expresion");
  const resultadoDiv = document.getElementById("resultado");
  const respuestaContenedor = document.querySelector(".calculator__respuesta");
  const btnCalcular = document.getElementById("btn-calcular");
  const btnLimpiar = document.getElementById("btn-limpiar");

  btnCalcular.addEventListener("click", () => {
    const expresion = input.value.trim();

    if (expresion === "") {
      mostrarError("❌ Ingresa una expresión válida.");
      return;
    }

    const resultado = calcularExpresion(expresion);

    if (typeof resultado === "string" && resultado.startsWith("Error")) {
      mostrarError("❌ " + resultado.replace("Error: ", ""));
    } else {
      resultadoDiv.textContent = resultado;
      respuestaContenedor.style.display = "block";
      mostrarBotonLimpiar();
    }
  });

  btnLimpiar.addEventListener("click", () => {
    input.value = "";
    respuestaContenedor.style.display = "none";
    btnLimpiar.style.display = "none";
  });

  function mostrarError(mensaje) {
    resultadoDiv.textContent = mensaje;
    respuestaContenedor.style.display = "block";
    mostrarBotonLimpiar();
  }

  function mostrarBotonLimpiar() {
    btnLimpiar.style.display = "inline-block";
    btnLimpiar.disabled = false;
  }
}

