// ============================================================
// carrito-compartido.js — Lógica global del Carrito NXR TECH
// ============================================================

// 1. Obtener carrito de localStorage
function obtenerCarrito() {
    const cart = localStorage.getItem("nxr_carrito");
    return cart ? JSON.parse(cart) : [];
}

// 2. Guardar carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem("nxr_carrito", JSON.stringify(carrito));
    actualizarContadorNavbar();
    // Disparar evento para actualizar la página del carrito si está abierta
    window.dispatchEvent(new Event("storage_carrito_actualizado"));
}

// 3. Obtener cantidad total de ítems en el carrito
function obtenerCantidadTotal() {
    const carrito = obtenerCarrito();
    return carrito.reduce((total, item) => total + item.cantidad, 0);
}

// 4. Actualizar el contador del Navbar
function actualizarContadorNavbar() {
    const contador = document.getElementById("nav-carrito-cant");
    if (contador) {
        const total = obtenerCantidadTotal();
        contador.textContent = total;
        contador.style.display = total > 0 ? "inline-block" : "none";
    }
}

// 5. Inyectar el botón del carrito en el navbar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) {
        const li = document.createElement("li");
        li.className = "nav-item-carrito";

        // Determinar si estamos en la página del carrito para marcarla como activa
        const esCarritoPage = window.location.pathname.endsWith("carrito.html") ||
            (window.location.pathname === "/" && window.location.hash === "#carrito");
        const estiloActivo = esCarritoPage ? 'style="color: var(--color-acento);"' : '';

        li.innerHTML = `
            <a href="carrito.html" class="nav-carrito-link" ${estiloActivo}>
                <i class="fa-solid fa-shopping-cart"></i>
                <span style="margin-left: 8px;">Carrito</span>
                <span id="nav-carrito-cant" class="nav-carrito-contador" style="display: none;">0</span>
            </a>
        `;

        // Insertar antes de "Contactos" (el li que contiene .nav-cta)
        const contactoBtn = navLinks.querySelector(".nav-cta");
        if (contactoBtn && contactoBtn.parentElement) {
            navLinks.insertBefore(li, contactoBtn.parentElement);
        } else {
            navLinks.appendChild(li);
        }
    }

    // Inicializar contador
    actualizarContadorNavbar();
});
