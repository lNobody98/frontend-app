let _listaActual = [];
let paginaActual = 1;
let ordenActivo  = "relevancia";

const POR_PAGINA = 12;

function esc(texto) {
    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}



function renderizar(items) {
    _listaActual = items;
    paginaActual = 1;
    _pintar();
}



function irAPagina(n) {
    paginaActual = n;
    _pintar();
    document.getElementById("catalogo-busqueda").scrollIntoView({ behavior: "smooth", block: "start" });
}



function setOrden(select) {
    ordenActivo  = select.value;
    paginaActual = 1;
    _pintar();
}



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



function _pintar() {
    const lista         = sortLista(_listaActual);
    const contenedor    = document.getElementById("catalogo-lista");
    const sinResultados = document.getElementById("catalogo-sin-resultados");
    const contador      = document.getElementById("catalogo-contador");
    const sufijo        = lista.length !== 1 ? "s" : "";

    contador.textContent = lista.length + " resultado" + sufijo + " encontrado" + sufijo;

    if (lista.length === 0) {
        contenedor.innerHTML = "";
        sinResultados.style.display = "block";
        return;
    }

    sinResultados.style.display = "none";

    const totalPaginas = Math.ceil(lista.length / POR_PAGINA);
    const inicio       = (paginaActual - 1) * POR_PAGINA;
    const pagina       = lista.slice(inicio, inicio + POR_PAGINA);

    let html = pagina.map(item => `
        <div class="mc-item">
            <div class="mc-item-img-wrapper">
                <img src="${item.imagen}" alt="${esc(item.nombre)}" class="mc-item-img">
                <span class="mc-tipo-badge mc-badge-${item.tipo.toLowerCase()}">${item.tipo}</span>
            </div>
            <div class="mc-item-contenido">
                <h5 class="mc-item-categoria">${esc(item.subcategoria)}${item.getEtiquetaComercial() ? " · " + esc(item.getEtiquetaComercial()) : ""}</h5>
                <h3 class="mc-item-titulo">${esc(item.nombre)}</h3>
                <p class="mc-item-extra">${esc(item.getDetalleExtra())}</p>
                ${item.getGarantiaTexto() ? `<p class="mc-item-garantia">${esc(item.getGarantiaTexto())}</p>` : ""}
                <p class="mc-item-descripcion">${esc(item.descripcion)}</p>
                <span class="mc-item-precio">${item.getPrecioTexto()}</span>
                <div class="mc-item-botones">
                    <button class="btn-primario">Consultar</button>
                    <button class="btn-secundario">Ver más</button>
                </div>
            </div>
        </div>
    `).join("");

    if (totalPaginas > 1) {
        html += '<div class="mc-paginacion">';
        html += `<button class="mc-pag-btn" ${paginaActual === 1 ? "disabled" : ""} onclick="irAPagina(${paginaActual - 1})">&#8592; Anterior</button>`;
        for (let i = 1; i <= totalPaginas; i++) {
            html += `<button class="mc-pag-btn ${i === paginaActual ? "mc-pag-activo" : ""}" onclick="irAPagina(${i})">${i}</button>`;
        }
        html += `<button class="mc-pag-btn" ${paginaActual === totalPaginas ? "disabled" : ""} onclick="irAPagina(${paginaActual + 1})">Siguiente &#8594;</button>`;
        html += '</div>';
    }

    contenedor.innerHTML = html;
}

renderizar(listaCatalogo.filter(item => item.estado !== "INACTIVO"));