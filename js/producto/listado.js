let _listaActual = [];
let paginaActual = 1;
let ordenActivo  = "relevancia";

const POR_PAGINA = 12;



function renderizar(items) {
    _listaActual = items;
    paginaActual = 1;
    _pintar();
}



function irAPagina(n) {
    paginaActual = n;
    _pintar();
    document.getElementById("prod-busqueda").scrollIntoView({ behavior: "smooth", block: "start" });
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

    const totalPaginas = Math.ceil(lista.length / POR_PAGINA);
    const inicio       = (paginaActual - 1) * POR_PAGINA;
    const pagina       = lista.slice(inicio, inicio + POR_PAGINA);

    let html = pagina.map(item => `
        <div class="mc-producto">
            <div class="mc-producto-img-wrapper">
                <img src="${item.imagen}" alt="${item.nombre}" class="mc-producto-img">
                <span class="mc-tipo-badge mc-badge-${item.tipo.toLowerCase()}">${item.tipo}</span>
            </div>
            <div class="mc-producto-contenido">
                <h5 class="mc-producto-categoria">${item.subcategoria} · ${item.marca}</h5>
                <h3 class="mc-producto-titulo">${item.nombre}</h3>
                <p class="mc-producto-descripcion">${item.descripcion}</p>
                <span class="mc-producto-precio">${item.getPrecioTexto()}</span>
                <div class="mc-producto-botones">
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

renderizar(listaProductos);