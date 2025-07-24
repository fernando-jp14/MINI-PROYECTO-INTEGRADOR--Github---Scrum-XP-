const input = document.getElementById("input-expresion");
const resultadoDiv = document.getElementById("resultado");
const respuestaContenedor = document.querySelector(".calculator__respuesta");
const btnCalcular = document.getElementById("btn-calcular");
const btnLimpiar = document.getElementById("btn-limpiar");
const btnHistorial = document.getElementById("btn-historial");

// Evento para calcular la expresión
btnCalcular.addEventListener("click", () => {
  const expresion = input.value.trim();

  if (expresion === "") {
    mostrarError("❌ Ingresa una expresión válida.");
    return;
  }

  // Validación simple (solo permite números, operadores y paréntesis)
  const esValida = /^[0-9+\-*/().\s]+$/.test(expresion);
  if (!esValida) {
    mostrarError("❌ Expresión inválida.");
    return;
  }

  try {
    const resultado = eval(expresion);
    resultadoDiv.textContent = resultado;
    respuestaContenedor.style.display = "block";

    // Mostrar y habilitar el botón limpiar
    btnLimpiar.style.display = "inline-block";
    btnLimpiar.disabled = false;

  } catch (e) {
    mostrarError("❌ Expresión inválida.");
  }
});

// Evento para limpiar
btnLimpiar.addEventListener("click", () => {
  input.value = "";
  respuestaContenedor.style.display = "none";
  btnLimpiar.style.display = "none";
});

// Evento para historial (a futuro)
btnHistorial.addEventListener("click", () => {
  alert("🔧 Historial aún no está implementado.");
});

// Función para mostrar errores
function mostrarError(mensaje) {
  resultadoDiv.textContent = mensaje;
  respuestaContenedor.style.display = "block";
  btnLimpiar.style.display = "none";
}

