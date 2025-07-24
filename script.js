const input = document.getElementById("input-expresion");
const resultadoDiv = document.getElementById("resultado");
const respuestaContenedor = document.querySelector(".calculator__respuesta");
const btnCalcular = document.getElementById("btn-calcular");
const btnLimpiar = document.getElementById("btn-limpiar");

// Evento para calcular la expresión
btnCalcular.addEventListener("click", () => {
  const expresion = input.value.trim();

  if (expresion === "") {
    mostrarError("❌ Ingresa una expresión válida.");
    return;
  }

  const esValida = /^[0-9+\-*/().\s]+$/.test(expresion);
  if (!esValida) {
    mostrarError("❌ Expresión inválida.");
    return;
  }

  try {
    const resultado = eval(expresion);
    resultadoDiv.textContent = resultado;
    respuestaContenedor.style.display = "block";
    mostrarBotonLimpiar();
  } catch (e) {
    mostrarError("❌ Error al calcular la expresión.");
  }
});

// Evento para limpiar
btnLimpiar.addEventListener("click", () => {
  input.value = "";
  respuestaContenedor.style.display = "none";
  btnLimpiar.style.display = "none";
});

// Función para mostrar errores
function mostrarError(mensaje) {
  resultadoDiv.textContent = mensaje;
  respuestaContenedor.style.display = "block";
  mostrarBotonLimpiar();
}

// Mostrar el botón limpiar
function mostrarBotonLimpiar() {
  btnLimpiar.style.display = "inline-block";
  btnLimpiar.disabled = false;
}
