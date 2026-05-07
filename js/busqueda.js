// ============================================================
//  busqueda.js — NXR TECH
//  Lógica de filtrado y renderizado del catálogo
//  Requiere: producto.js y datos.js (cargados antes en el HTML)
// ============================================================


// ============================================================
//  ESTADO
// ============================================================
let filtroActivo      = "todos";
let paginaActual      = 1;
let resultadoFiltrado = [];

const POR_PAGINA = 12;


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
//  CAMBIAR FILTRO — estático (onclick en botones)
// ============================================================
function setFiltro(filtro, btn) {
    filtroActivo = filtro;

    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");

    filtrar();
}


// ============================================================
//  FILTRAR — dinámico (oninput en el buscador)
//  Solo calcula el array completo y delega en renderizar()
// ============================================================
function filtrar() {
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

    // Guardar resultado completo y reiniciar página antes de renderizar
    resultadoFiltrado = resultado;
    paginaActual      = 1;
    renderizar();
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
    const lista         = resultadoFiltrado;
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
