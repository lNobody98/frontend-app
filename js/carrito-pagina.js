// ============================================================
// carrito-pagina.js — Gestión de la interfaz en carrito.html
// ============================================================

let codigoDescuentoActivo = "";
let porcentajeDescuentoAdicional = 0; // Cupón promocional

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarritoPagina();

    // Escuchar actualizaciones del localStorage
    window.addEventListener("storage_carrito_actualizado", () => {
        renderizarCarritoPagina();
    });
});

// Renderiza la lista de productos del carrito y el resumen de totales
function renderizarCarritoPagina() {
    const contenedorLista = document.getElementById("carrito-items-lista");
    const resumenSubtotal = document.getElementById("resumen-subtotal");
    const resumenDescuento = document.getElementById("resumen-descuento");
    const resumenTotal = document.getElementById("resumen-total");
    const btnConfirmar = document.getElementById("btn-confirmar");

    if (!contenedorLista) return;

    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
        contenedorLista.innerHTML = `
            <div class="carrito-vacio-mensaje">
                <i class="fa-solid fa-cart-arrow-down"></i>
                <p>Tu carrito de compras está vacío.</p>
                <a href="catalogo.html" class="btn-primario">Explorar Catálogo</a>
            </div>
        `;

        resumenSubtotal.textContent = "S/ 0.00";
        resumenDescuento.textContent = "S/ 0.00";
        resumenTotal.textContent = "S/ 0.00";
        btnConfirmar.disabled = true;
        return;
    }

    btnConfirmar.disabled = false;

    let subtotalAcumulado = 0;

    let html = carrito.map(cartItem => {
        const item = listaCatalogo.find(p => p.id === cartItem.id);
        if (!item) return "";

        const precioOriginal = item.precio;

        // Cálculos para el resumen
        subtotalAcumulado += precioOriginal * cartItem.cantidad;

        return `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-img">
                <div class="cart-item-info">
                    <span class="cart-item-categoria">${item.subcategoria}</span>
                    <h3 class="cart-item-titulo">${item.nombre}</h3>
                    <div class="cart-item-precio-wrapper">
                        <span class="cart-item-precio-final">${item.getPrecioTexto()}</span>
                    </div>
                </div>
                <div class="cart-item-acciones">
                    <!-- Control de cantidad -->
                    <div class="cart-cant-control">
                        <button class="cart-cant-btn" onclick="actualizarCantidad(${item.id}, -1)">-</button>
                        <input type="text" class="cart-cant-input" value="${cartItem.cantidad}" readonly>
                        <button class="cart-cant-btn" onclick="actualizarCantidad(${item.id}, 1)">+</button>
                    </div>
                    <!-- Quitar item -->
                    <button class="btn-cart-quitar" onclick="quitarItemDelCarrito(${item.id})">
                        <i class="fa-solid fa-trash-can"></i> Quitar
                    </button>
                </div>
            </div>
        `;
    }).join("");

    contenedorLista.innerHTML = html;

    // Calcular descuento en base al código promocional activo
    let porcentajeDescuento = 0;
    if (codigoDescuentoActivo === "NXR2026") {
        porcentajeDescuento = 10;
    } else if (codigoDescuentoActivo === "FIESTRASPATRIAS" || codigoDescuentoActivo === "FIESTASPATRIAS") {
        porcentajeDescuento = 20;
    } else if (codigoDescuentoActivo === "INDEPENDENCIA") {
        porcentajeDescuento = 30;
    }

    const descuentoTotal = Math.round(subtotalAcumulado * (porcentajeDescuento / 100));
    const totalAPagar = subtotalAcumulado - descuentoTotal;

    // Actualizar campos del resumen
    resumenSubtotal.textContent = "S/ " + subtotalAcumulado.toLocaleString("es-PE") + ".00";
    resumenDescuento.textContent = (descuentoTotal > 0 ? "- S/ " : "S/ ") + descuentoTotal.toLocaleString("es-PE") + ".00";
    resumenTotal.textContent = "S/ " + totalAPagar.toLocaleString("es-PE") + ".00";
}

// Actualizar cantidad de un producto
function actualizarCantidad(id, cambio) {
    const carrito = obtenerCarrito();
    const item = carrito.find(item => item.id === id);
    if (!item) return;

    item.cantidad += cambio;

    // Evitar que la cantidad sea menor a 1
    if (item.cantidad < 1) {
        item.cantidad = 1;
        return;
    }

    guardarCarrito(carrito);
    renderizarCarritoPagina();
}

// Quitar un producto del carrito
function quitarItemDelCarrito(id) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito(carrito);
    renderizarCarritoPagina();
}

// Aplicar código promocional
function aplicarCodigoPromocional() {
    const input = document.getElementById("input-codigo-promocional");
    const mensaje = document.getElementById("promocode-mensaje");

    if (!input || !mensaje) return;

    const codigo = input.value.trim().toUpperCase();

    if (codigo === "") {
        mensaje.textContent = "Ingrese un código.";
        mensaje.className = "promocode-mensaje error";
        return;
    }

    // Código válido
    if (codigo === "NXR2026") {
        codigoDescuentoActivo = codigo;
        mensaje.textContent = `Código '${codigo}' aplicado. ¡10% de descuento en tu total!`;
        mensaje.className = "promocode-mensaje success";
        renderizarCarritoPagina();
    } else if (codigo === "FIESTRASPATRIAS" || codigo === "FIESTASPATRIAS") {
        codigoDescuentoActivo = codigo;
        mensaje.textContent = `Código '${codigo}' aplicado. ¡20% de descuento en tu total!`;
        mensaje.className = "promocode-mensaje success";
        renderizarCarritoPagina();
    } else if (codigo === "INDEPENDENCIA") {
        codigoDescuentoActivo = codigo;
        mensaje.textContent = `Código '${codigo}' aplicado. ¡30% de descuento en tu total!`;
        mensaje.className = "promocode-mensaje success";
        renderizarCarritoPagina();
    } else {
        codigoDescuentoActivo = "";
        mensaje.textContent = "Código inválido. Intente con NXR2026, FIESTRASPATRIAS o INDEPENDENCIA";
        mensaje.className = "promocode-mensaje error";
        renderizarCarritoPagina();
    }
}

// Confirmar pedido final
function confirmarPedidoFinal() {
    const carrito = obtenerCarrito();
    if (carrito.length === 0) return;

    const modalExito = document.getElementById("modal-pedido-exito");
    if (modalExito) {
        modalExito.classList.add("activo");
        document.body.style.overflow = "hidden"; // Desactivar scroll
    }
}

// Aceptar éxito de confirmación de pedido y limpiar el carrito
function cerrarModalExitoYLimpiar() {
    // Vaciar el carrito
    guardarCarrito([]);

    const modalExito = document.getElementById("modal-pedido-exito");
    if (modalExito) {
        modalExito.classList.remove("activo");
        document.body.style.overflow = ""; // Reactivar scroll
    }

    // Redirigir a inicio.html
    window.location.href = "inicio.html";
}
