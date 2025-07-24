// Función lógica separada
function calcularExpresion(expresion) {
  try {
    expresion = expresion.trim();

    // Validar que solo haya números, operadores, puntos, paréntesis y espacios
    if (!/^[\d+\-*/().\s]+$/.test(expresion)) {
      throw new Error("Expresión inválida");
    }

    // Validar operadores seguidos como ++, **, etc.
    if (/[*\/+\-]{2,}/.test(expresion.replace(/\s+/g, ''))) {
      throw new Error("Operadores inválidos seguidos");
    }

    // Validar paréntesis balanceados
    let balance = 0;
    for (let char of expresion) {
      if (char === '(') balance++;
      if (char === ')') balance--;
      if (balance < 0) throw new Error("Paréntesis desbalanceados");
    }
    if (balance !== 0) throw new Error("Paréntesis desbalanceados");

    // Calcular resultado
    const resultado = eval(expresion);

    if (isNaN(resultado)) {
      throw new Error("Resultado inválido");
    }

    return resultado;
  } catch (error) {
    return "Error: " + error.message;
  }
}


const input = document.getElementById("input-expresion");
const resultadoDiv = document.getElementById("resultado");
const respuestaContenedor = document.querySelector(".calculator__respuesta");
const btnCalcular = document.getElementById("btn-calcular");
const btnLimpiar = document.getElementById("btn-limpiar");

// Evento para calcular
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

// Evento para limpiar
btnLimpiar.addEventListener("click", () => {
  input.value = "";
  respuestaContenedor.style.display = "none";
  btnLimpiar.style.display = "none";
});

// Mostrar errores
function mostrarError(mensaje) {
  resultadoDiv.textContent = mensaje;
  respuestaContenedor.style.display = "block";
  mostrarBotonLimpiar();
}

// Mostrar botón limpiar
function mostrarBotonLimpiar() {
  btnLimpiar.style.display = "inline-block";
  btnLimpiar.disabled = false;
}
