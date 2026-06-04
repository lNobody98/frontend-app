// matriz.js — Modal Matriz de Responsabilidad RACI — Enrique Prada

function abrirMatriz() {
    document.getElementById("nos-modal-matriz").classList.add("nos-modal-visible");
    document.body.style.overflow = "hidden";
}

function cerrarMatriz() {
    document.getElementById("nos-modal-matriz").classList.remove("nos-modal-visible");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cerrarMatriz();
});

document.getElementById("nos-modal-matriz").addEventListener("click", function (e) {
    if (e.target === this) cerrarMatriz();
});
