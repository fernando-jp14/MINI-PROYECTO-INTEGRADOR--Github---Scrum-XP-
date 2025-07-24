// Lógica del DOM para la calculadora
// Este archivo debe ser incluido en el HTML después de script.js


document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btn-calcular");
  const input = document.getElementById("input-expresion");
  const resultado = document.getElementById("resultado");

  btn.addEventListener("click", () => {
    const expresion = input.value.trim(); 

    if (expresion === "") {
      resultado.textContent = "Error: Ingrese una expresión";
      resultado.style.color = "red";
      return;
    }

    const respuesta = calcularExpresion(expresion);

    resultado.textContent = respuesta;

    resultado.style.color = respuesta.toString().startsWith("Error") ? "red" : "green";
  });
});