// Lógica del DOM para la calculadora
// Este archivo debe ser incluido en el HTML después de script.js

document.getElementById("btn-calcular").addEventListener("click", () => {
  const input = document.getElementById("input-expresion").value;
  const resultado = calcularExpresion(input);
  document.getElementById("resultado").textContent = resultado;
});
