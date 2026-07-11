// ============================================================
// panel.js — NXR TECH — Dashboard del administrador
// Responsable: Christian Diaz
//
// Requiere usuarios.js y auth.js cargados antes que este archivo.
// Requiere catalogo.js y datos.js para el total real de productos
// (si no están cargados, la tarjeta simplemente muestra "—").
// ============================================================

// Bloquea la página antes de pintar nada si no hay sesión activa
protegerPagina();

document.addEventListener("DOMContentLoaded", () => {

    const sesion = obtenerSesion();
    if (!sesion) return;

    // --- Datos del administrador logueado ---
    const primerNombre = sesion.nombre.split(" ")[0];
    const iniciales = sesion.nombre
        .split(" ")
        .map(palabra => palabra[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

    document.getElementById("panel-avatar-iniciales").textContent = iniciales;
    document.getElementById("panel-nombre-admin").textContent = sesion.nombre;

    // Los elementos de aquí en adelante solo existen en panel.html.
    // Este script también se carga en gestion-catalogo.html (topbar
    // compartido), por eso se verifica cada elemento antes de usarlo.
    const bienvenida = document.getElementById("panel-bienvenida");
    if (bienvenida) bienvenida.textContent = "Bienvenido, " + primerNombre;

    // --- Tarjeta: Total de productos (dato real del catálogo) ---
    const statProductos = document.getElementById("stat-total-productos");
    if (statProductos) {
        statProductos.textContent =
            typeof listaCatalogo !== "undefined" ? listaCatalogo.length : "—";
    }

    // --- Tarjeta: Pedidos del día ---
    // Simulado: el carrito de Joel aún no genera pedidos reales.
    // Cuando exista, reemplazar esto por el conteo real.
    const statPedidos = document.getElementById("stat-pedidos-dia");
    if (statPedidos) statPedidos.textContent = "12";

    // --- Tarjeta: Visitas ---
    // Simulado con localStorage: suma 1 cada vez que se abre el panel.
    // Maykol puede reemplazar esta lógica cuando conecte los reportes reales.
    const statVisitas = document.getElementById("stat-visitas");
    if (statVisitas) {
        const visitasPrevias = parseInt(localStorage.getItem("nxrVisitasPanel") || "0", 10);
        const visitasActuales = visitasPrevias + 1;
        localStorage.setItem("nxrVisitasPanel", visitasActuales);
        statVisitas.textContent = visitasActuales;
    }

    // --- Cerrar sesión (botón superior) ---
    const btnSalir = document.getElementById("btn-cerrar-sesion-top");
    if (btnSalir) btnSalir.addEventListener("click", () => cerrarSesion());
});