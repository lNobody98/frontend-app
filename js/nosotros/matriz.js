// matriz.js — NXR TECH — Modal RACI
// Responsable: Maykol Calle

const modalMatriz = document.getElementById("nos-modal-matriz");

function abrirMatriz() {
    modalMatriz.classList.add("nos-modal-visible");
    document.body.style.overflow = "hidden";
}

function cerrarMatriz() {
    modalMatriz.classList.remove("nos-modal-visible");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cerrarMatriz();
});

modalMatriz.addEventListener("click", function (e) {
    if (e.target === this) cerrarMatriz();
});
