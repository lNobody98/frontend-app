// ============================================================
// matriz.js — Modal Matriz de Responsabilidad RACI
// Responsable: Maykol Calle
//
// ▶ MAYKOL CALLE — ESTE ARCHIVO ES EL QUE DEBES COPIAR
//
// ¿QUÉ HACE ESTE ARCHIVO?
// ─────────────────────────────────────────────────────────
// Controla la apertura y cierre del modal RACI que está en
// nosotros.html justo antes del <footer>.
//
// El modal tiene id="nos-modal-matriz" y por defecto está
// INVISIBLE (opacity:0 + pointer-events:none en el CSS).
// Este JS lo muestra/oculta agregando/quitando la clase
// CSS "nos-modal-visible".
//
// HAY 3 FORMAS DE CERRAR EL MODAL:
//   1. Botón ×  → onclick="cerrarMatriz()" en el HTML
//   2. Tecla Escape → listener en document keydown
//   3. Clic en el fondo oscuro (overlay) → listener en el div
//
// CÓMO SE LLAMA DESDE EL HTML:
//   <button onclick="abrirMatriz()">Ver Matriz RACI</button>
// ============================================================


// ── Referencia al elemento del modal ──────────────────────
// document.getElementById busca el div del modal por su id.
// Se guarda en una variable para no buscarlo cada vez.
const modalMatriz = document.getElementById("nos-modal-matriz");


// ============================================================
// FUNCIÓN abrirMatriz()
// Se llama con onclick="abrirMatriz()" en el botón del HTML.
//
// ¿QUÉ HACE?
//   1. Agrega la clase 'nos-modal-visible' al overlay → el CSS
//      cambia opacity:0 a opacity:1 (transición de 0.3s).
//   2. Bloquea el scroll del body con overflow:hidden para que
//      el fondo no se pueda desplazar mientras el modal está abierto.
// ============================================================
function abrirMatriz() {
    modalMatriz.classList.add("nos-modal-visible");
    document.body.style.overflow = "hidden";
}


// ============================================================
// FUNCIÓN cerrarMatriz()
// Se llama desde 3 lugares: botón ×, tecla Escape y clic en overlay.
//
// ¿QUÉ HACE?
//   1. Quita la clase 'nos-modal-visible' → el CSS vuelve a
//      opacity:0 (fade out con transición de 0.3s).
//   2. Restaura el scroll del body.
// ============================================================
function cerrarMatriz() {
    modalMatriz.classList.remove("nos-modal-visible");
    document.body.style.overflow = "";
}


// ============================================================
// CERRAR CON TECLA ESCAPE
// document.addEventListener escucha TODOS los teclazos.
// Solo actúa cuando la tecla presionada es "Escape".
// ============================================================
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cerrarMatriz();
});


// ============================================================
// CERRAR AL HACER CLIC EN EL FONDO OSCURO (overlay)
// El modal tiene dos capas:
//   - .nos-modal-overlay  → el fondo oscuro desenfocado (cubre toda la pantalla)
//   - .nos-modal-content  → la caja blanca con la tabla
//
// e.target es el elemento que recibió el clic.
// "this" es el overlay en sí.
// Si e.target === this significa que el usuario hizo clic
// en el fondo (overlay) y NO dentro de la caja blanca.
// En ese caso, cerramos el modal.
// ============================================================
modalMatriz.addEventListener("click", function (e) {
    if (e.target === this) cerrarMatriz();
});
