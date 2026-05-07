// ============================================================
//  busqueda.js — NXR TECH
//  Lógica de filtrado y renderizado del catálogo
//  Requiere: producto.js y datos.js (cargados antes en el HTML)
// ============================================================


// ============================================================
//  ESTADO
// ============================================================
let filtroActivo      = "todos";
let ordenActivo       = "relevancia";
let precioMin         = 0;
let precioMax         = Infinity;
let paginaActual      = 1;
let resultadoFiltrado = [];
let iniciado          = false;   // evita scroll en la carga inicial

const POR_PAGINA  = 12;
const SLIDER_MAX  = 10000;


// ============================================================
//  NORMALIZAR TEXTO (quita tildes y pone minúsculas)
// ============================================================
function norm(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");
}


// ============================================================
//  CAMBIAR FILTRO — botones principales (Todos / Productos / Servicios)
// ============================================================
function setFiltro(filtro, btn) {
    filtroActivo = filtro;

    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");

    // Resetear y deshabilitar el select que no corresponde al filtro activo
    const selProd = document.getElementById("selectProductos");
    const selServ = document.getElementById("selectServicios");

    selProd.value = "";
    selServ.value = "";

    selProd.disabled = (filtro === "Servicio");
    selServ.disabled = (filtro === "Producto");

    filtrar();
}


// ============================================================
//  CAMBIAR FILTRO — selects de subcategoría (onchange)
// ============================================================
function setFiltroSelect(select) {
    const valor    = select.value;
    const esProd   = select.id === "selectProductos";
    const otherId  = esProd ? "selectServicios" : "selectProductos";
    const mainBtnId = esProd ? "btn-productos"  : "btn-servicios";
    const mainFiltro = esProd ? "Producto"       : "Servicio";

    // Resetear el otro select y mantenerlo deshabilitado (contexto activo)
    const otherSelect = document.getElementById(otherId);
    otherSelect.value    = "";
    otherSelect.disabled = true;
    select.disabled      = false;

    // El botón principal del grupo sigue activo como contexto
    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("activo"));
    document.getElementById(mainBtnId).classList.add("activo");

    // Si hay subcategoría elegida filtra por ella; si se limpió el select
    // retrocede al filtro por tipo (Producto o Servicio)
    filtroActivo = valor || mainFiltro;

    filtrar();
}


// ============================================================
//  LIMPIAR TODOS LOS FILTROS
// ============================================================
function limpiarFiltros() {
    filtroActivo = "todos";
    ordenActivo  = "relevancia";
    precioMin    = 0;
    precioMax    = Infinity;

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

    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("activo"));
    document.getElementById("btn-todos").classList.add("activo");

    filtrar();
}


// ============================================================
//  SLIDER DE PRECIO
// ============================================================
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

    // Evitar que se crucen
    if (fuente === "min" && min > max) { sliderMinEl.value = max; min = max; }
    if (fuente === "max" && max < min) { sliderMaxEl.value = min; max = min; }

    actualizarSliderVisual();

    precioMin = min;
    precioMax = max >= SLIDER_MAX ? Infinity : max;
    filtrar(false); // no scrollear — el usuario ya está en la sección
}


// ============================================================
//  FILTRAR — dinámico (oninput en el buscador)
//  Solo calcula el array completo y delega en renderizar()
// ============================================================
function filtrar(debeScrollear = true) {
    let resultado = listaProductos;

    // 1. Filtro por categoría (botón estático)
    if (filtroActivo === "Producto" || filtroActivo === "Servicio") {
        resultado = resultado.filter(item => item.tipo === filtroActivo);
    } else if (filtroActivo !== "todos") {
        resultado = resultado.filter(item => item.subcategoria === filtroActivo);
    }

    // 2. Búsqueda por nombre (input dinámico)
    const texto = norm(document.getElementById("inputBusqueda").value);
    if (texto) {
        resultado = resultado.filter(item => norm(item.nombre).includes(texto));
    }

    // 3. Rango de precio
    if (precioMin > 0 || precioMax < Infinity) {
        resultado = resultado.filter(item => item.precio >= precioMin && item.precio <= precioMax);
    }

    // Guardar resultado completo y reiniciar página antes de renderizar
    resultadoFiltrado = resultado;
    paginaActual      = 1;
    renderizar();

    if (iniciado && debeScrollear) {
        document.getElementById("prod-busqueda").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    iniciado = true;
}


// ============================================================
//  CAMBIAR ORDEN
// ============================================================
function setOrden(select) {
    ordenActivo  = select.value;
    paginaActual = 1;
    renderizar();
}


// ============================================================
//  ORDENAR LISTA (no muta resultadoFiltrado)
// ============================================================
function sortLista(lista) {
    const copia = [...lista];
    switch (ordenActivo) {
        case "precio-asc":  return copia.sort((a, b) => a.precio - b.precio);
        case "precio-desc": return copia.sort((a, b) => b.precio - a.precio);
        case "nombre-az":   return copia.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
        case "nombre-za":   return copia.sort((a, b) => b.nombre.localeCompare(a.nombre, "es"));
        default:            return copia;
    }
}


// ============================================================
//  CAMBIAR PÁGINA
// ============================================================
function irAPagina(n) {
    paginaActual = n;
    renderizar();
    document.getElementById("prod-busqueda").scrollIntoView({ behavior: "smooth", block: "start" });
}


// ============================================================
//  RENDERIZAR CARDS EN EL DOM
// ============================================================
function renderizar() {
    const lista         = sortLista(resultadoFiltrado);
    const contenedor    = document.getElementById("prod-lista");
    const sinResultados = document.getElementById("prod-sin-resultados");
    const contador      = document.getElementById("prod-contador");
    const sufijo        = lista.length !== 1 ? "s" : "";

    contador.textContent = lista.length + " resultado" + sufijo + " encontrado" + sufijo;

    if (lista.length === 0) {
        contenedor.innerHTML = "";
        sinResultados.style.display = "block";
        return;
    }

    sinResultados.style.display = "none";

    // Recorte de página (independiente del filtrado)
    const totalPaginas = Math.ceil(lista.length / POR_PAGINA);
    const inicio       = (paginaActual - 1) * POR_PAGINA;
    const pagina       = lista.slice(inicio, inicio + POR_PAGINA);

    // Cards
    let html = pagina.map(item => `
        <div class="js-producto">
            <div class="js-producto-img-wrapper">
                <img src="${item.imagen}" alt="${item.nombre}" class="js-producto-img">
                <span class="prod-tipo-badge prod-badge-${item.tipo.toLowerCase()}">${item.tipo}</span>
            </div>
            <div class="js-producto-contenido">
                <h5 class="js-producto-categoria">${item.subcategoria} · ${item.marca}</h5>
                <h3 class="js-producto-titulo">${item.nombre}</h3>
                <p class="js-producto-descripcion">${item.descripcion}</p>
                <span class="js-producto-precio">${item.getPrecioTexto()}</span>
                <div class="js-producto-botones">
                    <button class="btn-primario">Consultar</button>
                    <button class="btn-secundario">Ver más</button>
                </div>
            </div>
        </div>
    `).join("");

    // Paginación (solo aparece si hay más de una página)
    if (totalPaginas > 1) {
        html += '<div class="prod-paginacion">';
        html += `<button class="pag-btn" ${paginaActual === 1 ? "disabled" : ""} onclick="irAPagina(${paginaActual - 1})">&#8592; Anterior</button>`;
        for (let i = 1; i <= totalPaginas; i++) {
            html += `<button class="pag-btn ${i === paginaActual ? "pag-activo" : ""}" onclick="irAPagina(${i})">${i}</button>`;
        }
        html += `<button class="pag-btn" ${paginaActual === totalPaginas ? "disabled" : ""} onclick="irAPagina(${paginaActual + 1})">Siguiente &#8594;</button>`;
        html += '</div>';
    }

    contenedor.innerHTML = html;
}


// ============================================================
//  INICIAR AL CARGAR LA PÁGINA
// ============================================================
filtrar();
