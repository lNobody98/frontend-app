
let _listaActual = [];
let paginaActual = 1;
let ordenActivo  = "relevancia";

const POR_PAGINA = 12;


// ============================================================
//  renderizar(items) — PUNTO DE ENTRADA
//  filtros.js llama esta función cada vez que el usuario filtra.
//  Guarda el array, vuelve a página 1 y redibuja las cards.
// ============================================================
function renderizar(items) {
    _listaActual = items;
    paginaActual = 1;
    _pintar();
}


// ============================================================
//  irAPagina(n) — PAGINACIÓN
//  Cambia a la página n y hace scroll suave a la sección.
//  Llamada via onclick desde los botones que genera _pintar().
// ============================================================
function irAPagina(n) {
    paginaActual = n;
    _pintar();
    document.getElementById("prod-busqueda").scrollIntoView({ behavior: "smooth", block: "start" });
}


// ============================================================
//  setOrden(select) — ORDENAMIENTO
//  Lee el valor del <select id="selectOrden">, actualiza
//  ordenActivo y redibuja. Llamada via onchange en el HTML.
// ============================================================
function setOrden(select) {
    ordenActivo  = select.value;
    paginaActual = 1;
    _pintar();
}


// ============================================================
//  sortLista(lista) — FUNCIÓN PRIVADA DE APOYO
//  Crea una copia del array con spread [...lista] para no mutar
//  _listaActual y la ordena según ordenActivo usando switch/case.
//  Cada case retorna la copia ordenada con Array.sort().
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
//  _pintar() — FUNCIÓN PRIVADA CENTRAL (prefijo _ = interna)
//  1. Ordena la lista con sortLista()
//  2. Actualiza el contador de resultados (operador ternario)
//  3. Si lista vacía: muestra #prod-sin-resultados (if/else)
//  4. Calcula totalPaginas con Math.ceil() y recorta el slice
//  5. Genera el HTML de cada card con Array.map() y template literals
//     — llama item.getPrecioTexto() (método POO de producto.js)
//  6. Si hay más de 1 página: genera botones con bucle for clásico
//  7. Inyecta el HTML final en contenedor.innerHTML (DOM)
// ============================================================
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

    // map() devuelve un array de strings HTML, uno por card.
    // join("") los fusiona en un solo string sin separadores.
    // Sin join("") el innerHTML tendría comas entre cada card.
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
