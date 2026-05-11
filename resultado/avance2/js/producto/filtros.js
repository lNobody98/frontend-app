// ============================================================
//  filtros.js — NXR TECH
//  RESPONSABLE: Joel Saldaña
//
//  ── TIPO DE BÚSQUEDA ────────────────────────────────────────
//  Este archivo implementa DOS tipos de búsqueda/filtrado:
//
//  1. BÚSQUEDA DINÁMICA (en tiempo real)
//     El campo #inputBusqueda tiene oninput="filtrar()".
//     Cada tecla que escribe el usuario dispara filtrar() al instante
//     sin necesidad de presionar ningún botón.
//     Busca simultáneamente en: nombre, marca, detalle extra,
//     garantía y descripción del ítem.
//
//  2. FILTROS ESTÁTICOS (requieren acción del usuario)
//     Los botones "Todos / Productos / Servicios" (onclick),
//     los selects de subcategoría (onchange) y los sliders de
//     precio (onchange) se activan solo cuando el usuario hace
//     clic o cambia el valor — no se auto-disparan.
//
//  ── TIPO DE PROGRAMACIÓN ────────────────────────────────────
//  Programación funcional / imperativa — funciones reutilizables,
//  sin clases. Se apoya en los métodos de array de JavaScript:
//  filter(), includes(), normalize() (NFD), toLocaleString().
//
//  ── LENGUAJE ────────────────────────────────────────────────
//  JavaScript ES6+  — arrow functions, const/let, template literals,
//  Array.filter(), String.normalize("NFD"), String.includes()
//
//  ── ESTRUCTURAS DE PROGRAMACIÓN USADAS ─────────────────────
//  - if / else if / else  → en filtrar(): decide qué criterio aplicar
//                           según el valor de filtroActivo
//  - Operador ternario    → en actualizarSliderVisual() y en
//                           limpiarFiltros() para textos condicionales
//  - Array.filter()       → itera el array y retiene solo los ítems
//                           que cumplen la condición (bucle implícito)
//  - String.includes()    → comprueba si el texto de búsqueda aparece
//                           dentro del nombre, etiqueta comercial,
//                           detalle extra o descripción del ítem
//  - querySelectorAll + forEach → recorre los botones para quitar/poner
//                                 la clase CSS "activo"
//
//  ── QUÉ HACE ESTE ARCHIVO ───────────────────────────────────
//  Controla toda la lógica de búsqueda y filtrado del catálogo.
//  Toma el array completo de datos.js, aplica los filtros activos
//  y pasa el resultado a renderizar() de listado.js para pintarlo.
//  Se auto-ejecuta al cargar la página mostrando todos los ítems.
//
//  FLUJO:
//  usuario interactúa → filtros.js filtra listaProductos
//  → llama renderizar(array) → listado.js pinta las cards
//
//  ── VARIABLES GLOBALES ──────────────────────────────────────
//  Las variables declaradas con `let` fuera de cualquier función
//  son GLOBALES AL ARCHIVO. Como todos los scripts se cargan en
//  el mismo HTML, comparten el mismo scope global del navegador.
//  Eso permite que filtros.js lea/escriba `ordenActivo` que está
//  declarado en listado.js — ambos están en la misma "ventana".
//
//  - filtroActivo → filtro de categoría activo. Valores:
//                   "todos" | "Producto" | "Servicio" | subcategoría
//  - precioMin    → precio mínimo del slider (0 = sin límite inferior)
//  - precioMax    → precio máximo del slider (Infinity = sin límite)
//  - iniciado     → flag booleano: evita scroll automático en la carga
//                   inicial. Pasa a true después del primer filtrar().
//  - SLIDER_MAX   → constante en MAYÚSCULAS (convención del equipo:
//                   MAYÚSCULAS = valor que nunca debe cambiar en runtime.
//                   No es una regla del lenguaje, es un acuerdo de código)
//
//  ── FUNCIONES ───────────────────────────────────────────────
//  norm(texto)
//  → Normaliza texto a minúsculas sin tildes para que la búsqueda
//    no distinga entre "Teléfono" y "telefono".
//    Usa String.normalize("NFD") + replace con regex Unicode.
//    Usada internamente en filtrar().
//
//  filtrar(debeScrollear)
//  → Función central. Aplica en cadena:
//    1° filtro de categoría (if/else sobre filtroActivo)
//    2° filtro de texto (includes sobre nombre+etiqueta+extra+descripcion)
//    3° filtro de precio (rango precioMin–precioMax)
//    Llama renderizar() con el array resultante.
//
//  setFiltro(filtro, btn)
//  → Activa filtro por tipo al hacer clic en los botones
//    "Todos / Productos / Servicios". Marca el botón activo con
//    la clase CSS "activo" y resetea los selects.
//    Llamado via onclick en el HTML.
//
//  setFiltroSelect(select)
//  → Activa filtro por subcategoría desde los <select>.
//    Al seleccionar en uno, deshabilita el del otro tipo.
//    Llamado via onchange en el HTML.
//
//  limpiarFiltros()
//  → Restablece todos los filtros, sliders, selects y búsqueda
//    a su estado inicial y muestra los 120 ítems.
//    Llamado via onclick en el botón "Limpiar" del sidebar.
//
//  actualizarSliderVisual()
//  → Actualiza la barra coloreada del slider y los textos
//    S/. mínimo / S/. máximo mostrados debajo.
//    Llamado via oninput de los inputs range.
//
//  updateSlider(fuente)
//  → Lee ambos sliders, evita que mínimo supere al máximo,
//    actualiza precioMin/precioMax y llama filtrar().
//    "fuente" indica qué slider movió el usuario: "min" o "max".
//    Llamado via onchange de los inputs range.
//
//  ── IDs DEL HTML QUE MANIPULA ESTE ARCHIVO ──────────────────
//  - #inputBusqueda    → campo de texto (búsqueda dinámica)
//  - #btn-todos        → botón "Todos (120)" (filtro estático)
//  - #btn-productos    → botón "Productos"   (filtro estático)
//  - #btn-servicios    → botón "Servicios"   (filtro estático)
//  - #selectProductos  → subcategorías de productos
//  - #selectServicios  → subcategorías de servicios
//  - #selectOrden      → orden (lee variable ordenActivo de listado.js)
//  - #sliderMin        → input range precio mínimo
//  - #sliderMax        → input range precio máximo
//  - #sliderRange      → div visual de la barra del slider
//  - #displayMin       → span precio mínimo actual
//  - #displayMax       → span precio máximo actual
//
//  ── DEPENDENCIAS (cargar antes en el HTML) ──────────────────
//  - producto.js → clases ItemCatalogo, Producto y Servicio
//  - datos.js    → array listaProductos
//  - listado.js  → función renderizar()
// ============================================================

let filtroActivo = "todos";
let precioMin    = 0;
let precioMax    = Infinity;
let iniciado     = true;

const SLIDER_MAX = 10000;


function norm(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");
}


function filtrar(debeScrollear = true) {
    let resultado = listaProductos;

    if (filtroActivo === "Producto" || filtroActivo === "Servicio") {
        resultado = resultado.filter(item => item.tipo === filtroActivo);
    } else if (filtroActivo !== "todos") {
        resultado = resultado.filter(item => item.subcategoria === filtroActivo);
    }

    const texto = norm(document.getElementById("inputBusqueda").value);
    if (texto) {
        resultado = resultado.filter(item =>
            norm(item.nombre).includes(texto)      ||
            norm(item.getEtiquetaComercial()).includes(texto) ||
            norm(item.getDetalleExtra()).includes(texto)      ||
            norm(item.getGarantiaTexto()).includes(texto)     ||
            norm(item.descripcion).includes(texto)
        );
    }

    if (precioMin > 0 || precioMax < Infinity) {
        resultado = resultado.filter(item => item.precio >= precioMin && item.precio <= precioMax);
    }

    renderizar(resultado);

    if (iniciado && debeScrollear) {
        document.getElementById("prod-busqueda").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    iniciado = true;
}


function setFiltro(filtro, btn) {
    filtroActivo = filtro;

    document.querySelectorAll(".js-filtro-btn").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");

    const selProd = document.getElementById("selectProductos");
    const selServ = document.getElementById("selectServicios");
    selProd.value    = "";
    selServ.value    = "";
    selProd.disabled = (filtro === "Servicio");
    selServ.disabled = (filtro === "Producto");

    filtrar();
}


function setFiltroSelect(select) {
    const valor      = select.value;
    const esProd     = select.id === "selectProductos";
    const otherId    = esProd ? "selectServicios" : "selectProductos";
    const mainBtnId  = esProd ? "btn-productos"   : "btn-servicios";
    const mainFiltro = esProd ? "Producto"         : "Servicio";

    const otherSelect = document.getElementById(otherId);
    otherSelect.value    = "";
    otherSelect.disabled = true;
    select.disabled      = false;

    document.querySelectorAll(".js-filtro-btn").forEach(b => b.classList.remove("activo"));
    document.getElementById(mainBtnId).classList.add("activo");

    filtroActivo = valor || mainFiltro;
    filtrar();
}


function limpiarFiltros() {
    filtroActivo = "todos";
    precioMin    = 0;
    precioMax    = Infinity;
    ordenActivo  = "relevancia";

    document.getElementById("inputBusqueda").value = "";
    document.getElementById("selectOrden").value   = "relevancia";
    document.getElementById("sliderMin").value     = 0;
    document.getElementById("sliderMax").value     = SLIDER_MAX;
    actualizarSliderVisual();

    const selProd = document.getElementById("selectProductos");
    const selServ = document.getElementById("selectServicios");
    selProd.value    = "";
    selServ.value    = "";
    selProd.disabled = false;
    selServ.disabled = false;

    document.querySelectorAll(".js-filtro-btn").forEach(b => b.classList.remove("activo"));
    document.getElementById("btn-todos").classList.add("activo");

    filtrar();
}


function actualizarSliderVisual() {
    const min = parseInt(document.getElementById("sliderMin").value);
    const max = parseInt(document.getElementById("sliderMax").value);

    const leftPct  = (min / SLIDER_MAX) * 100;
    const rightPct = (max / SLIDER_MAX) * 100;

    document.getElementById("sliderRange").style.left  = leftPct  + "%";
    document.getElementById("sliderRange").style.width = (rightPct - leftPct) + "%";

    document.getElementById("displayMin").textContent = "S/. " + min.toLocaleString("es-PE");
    document.getElementById("displayMax").textContent =
        max >= SLIDER_MAX
            ? "S/. " + SLIDER_MAX.toLocaleString("es-PE") + "+"
            : "S/. " + max.toLocaleString("es-PE");
}

function updateSlider(fuente) {
    const sliderMinEl = document.getElementById("sliderMin");
    const sliderMaxEl = document.getElementById("sliderMax");
    let min = parseInt(sliderMinEl.value);
    let max = parseInt(sliderMaxEl.value);

    if (fuente === "min" && min > max) { sliderMinEl.value = max; min = max; }
    if (fuente === "max" && max < min) { sliderMaxEl.value = min; max = min; }

    actualizarSliderVisual();

    precioMin = min;
    precioMax = max >= SLIDER_MAX ? Infinity : max;
    filtrar(false);
}


// La carga inicial la dispara listado.js con renderizar(listaProductos).
