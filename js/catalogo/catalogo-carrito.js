// ============================================================
// catalogo-carrito.js — Modal de confirmación en el catálogo
// ============================================================

// Elementos del Modal
let modalBackdrop = null;
let modalImg = null;
let modalTitulo = null;
let modalPrecio = null;
let modalBotonAceptar = null;

// Inicializar elementos al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    // Inyectar el HTML del modal al final del body si no existe
    if (!document.getElementById("modal-confirmacion-carrito")) {
        const modalContainer = document.createElement("div");
        modalContainer.id = "modal-confirmacion-carrito";
        modalContainer.className = "modal-carrito-backdrop";
        modalContainer.innerHTML = `
            <div class="modal-carrito-content">
                <p class="modal-carrito-sub">Confirmar selección</p>
                <h3 id="modal-c-titulo" class="modal-carrito-titulo-prod">Nombre del producto</h3>
                <img id="modal-c-img" src="" alt="" class="modal-carrito-img">
                <span id="modal-c-precio" class="modal-carrito-precio">S/ 0.00</span>
                <p class="modal-carrito-pregunta">¿Deseas agregar este producto a tu carrito de compras?</p>
                <div class="modal-carrito-botones">
                    <button class="btn-modal-cancelar" onclick="cerrarModalCarrito()">Cancelar</button>
                    <button id="modal-c-btn-aceptar" class="btn-modal-agregar">Sí, agregar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modalContainer);
    }

    modalBackdrop = document.getElementById("modal-confirmacion-carrito");
    modalImg = document.getElementById("modal-c-img");
    modalTitulo = document.getElementById("modal-c-titulo");
    modalPrecio = document.getElementById("modal-c-precio");
    modalBotonAceptar = document.getElementById("modal-c-btn-aceptar");
});

// Función para abrir el modal de confirmación
function confirmarAgregarAlCarrito(id) {
    if (typeof listaCatalogo === "undefined") {
        console.error("La lista de catálogo no está disponible.");
        return;
    }

    // Buscar el producto en la base de datos
    const item = listaCatalogo.find(p => p.id === id);
    if (!item) {
        console.error(`Producto con ID ${id} no encontrado.`);
        return;
    }

    // Cargar información del producto en el modal
    modalTitulo.textContent = item.nombre;
    modalImg.src = item.imagen;
    modalImg.alt = item.nombre;

    // Mostrar precio original sin descuento
    modalPrecio.textContent = item.getPrecioTexto();

    // Asignar evento al botón de confirmar
    modalBotonAceptar.onclick = () => {
        agregarProductoAlCarrito(id);
        cerrarModalCarrito();
    };

    // Mostrar el modal
    modalBackdrop.classList.add("modal-activo");
    document.body.style.overflow = "hidden"; // Bloquear scroll de la página principal
}

// Función para cerrar el modal
function cerrarModalCarrito() {
    if (modalBackdrop) {
        modalBackdrop.classList.remove("modal-activo");
        document.body.style.overflow = ""; // Restaurar scroll
    }
}

// Función para registrar el producto en localStorage
function agregarProductoAlCarrito(id) {
    const carrito = obtenerCarrito();
    const itemExistente = carrito.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({ id: id, cantidad: 1 });
    }

    guardarCarrito(carrito);
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
        cerrarModalCarrito();
    }
});
