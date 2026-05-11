// ============================================================
//  listado.js — NXR TECH
//  RESPONSABLE: Maykol Calle
//
//  ── TIPO DE PROGRAMACIÓN ────────────────────────────────────
//  Programación funcional / imperativa — funciones reutilizables
//  con estado compartido a través de variables globales de módulo.
//  No define clases, pero usa los objetos del catálogo definidos en
//  producto.js para llamar sus métodos: getPrecioTexto(),
//  getEtiquetaComercial() y getDetalleExtra().
//
//  ── LENGUAJE ────────────────────────────────────────────────
//  JavaScript ES6+  — const/let, arrow functions, template literals,
//  Array.map(), Array.sort(), Array.slice(), spread operator [...],
//  Math.ceil(), String.localeCompare()
//
//  ── ESTRUCTURAS DE PROGRAMACIÓN USADAS ─────────────────────
//  - if / else          → en _pintar(): detecta lista vacía para
//                         mostrar el mensaje "sin resultados"
//  - switch / case      → en sortLista(): decide el criterio de
//                         ordenamiento según ordenActivo
//  - for (clásico)      → en _pintar(): genera los botones de
//                         paginación numerados (i = 1..totalPaginas)
//  - Array.map()        → en _pintar(): convierte cada objeto del catálogo
//                         en un string HTML de card (bucle implícito)
//  - Array.sort()       → en sortLista(): ordena la copia del array
//  - Array.slice()      → en _pintar(): recorta la página actual
//  - Spread [...lista]  → en sortLista(): crea copia para no mutar
//                         el array original _listaActual
//  - Operador ternario  → en _pintar(): plural de "resultado/s" y
//                         en la paginación para disabled/activo
//
//  ── QUÉ HACE ESTE ARCHIVO ───────────────────────────────────
//  Recibe el array filtrado de filtros.js, lo ordena, lo pagina
//  y genera el HTML de las cards que se inyectan en #prod-lista.
//  También genera la barra de paginación y actualiza el contador.
//
//  FLUJO:
//  filtros.js llama renderizar(array)
//  → _pintar() ordena → pagina → genera HTML → inyecta en el DOM
//
//  ── VARIABLES GLOBALES (accesibles desde filtros.js) ────────
//  Declaradas con `let`/`const` fuera de funciones → scope global
//  del navegador. filtros.js puede leer y escribir estas variables
//  directamente porque ambos scripts viven en el mismo HTML.
//
//  - _listaActual  → copia del array recibido en renderizar()
//                    (prefijo _ = uso interno, no llamar desde fuera)
//  - paginaActual  → página visible actualmente (empieza en 1)
//  - ordenActivo   → criterio de orden actual. Valores:
//                    "relevancia" | "precio-asc" | "precio-desc"
//                    "nombre-az"  | "nombre-za"
//                    ⚠️ filtros.js la modifica en limpiarFiltros()
//  - POR_PAGINA    → en MAYÚSCULAS (convención: constante que nunca
//                    cambia en runtime, no es sintaxis del lenguaje)
//
//  ── FUNCIONES PÚBLICAS (llamadas desde HTML o filtros.js) ───
//  renderizar(items)
//  → Punto de entrada. Recibe array filtrado, lo guarda en
//    _listaActual, resetea a página 1 y llama _pintar().
//    Llamada por filtros.js cada vez que cambia un filtro.
//
//  irAPagina(n)
//  → Cambia paginaActual a n y redibuja las cards.
//    Llamada via onclick desde los botones de paginación generados
//    dinámicamente por _pintar().
//
//  setOrden(select)
//  → Lee el valor del <select> de orden, actualiza ordenActivo,
//    resetea a página 1 y redibuja.
//    Llamada via onchange="#selectOrden" en el HTML.
//
//  ── CONVENCIÓN PREFIJO _ (guión bajo) ──────────────────────
//  En JavaScript no existe la palabra `private` para funciones
//  fuera de una clase. Por convención, el prefijo _ indica que
//  esa función o variable es de USO INTERNO — no debe llamarse
//  desde el HTML ni desde otros archivos.
//
//  Sin _ → PÚBLICA:   renderizar(), irAPagina(), setOrden()
//           Se llaman desde el HTML (onclick, onchange) o
//           desde filtros.js.
//
//  Con _ → PRIVADA:   _pintar(), _listaActual
//           Solo se usan dentro de listado.js.
//           El _ es una señal para el equipo: "no la toques
//           desde fuera, puede romper el estado interno."
//
//  ── FUNCIÓN PRIVADA (solo para uso interno) ─────────────────
//  sortLista(lista)
//  → Crea una copia del array y lo ordena según ordenActivo.
//    Usa switch/case para elegir el comparador de sort().
//    No modifica el array original (inmutabilidad).
//
//  _pintar()
//  → Función privada central (prefijo _ = interna).
//    1. Ordena con sortLista()
//    2. Calcula páginas y recorta el slice de la página actual
//    3. Genera el HTML de cada card con Array.map()
//       (llama item.getPrecioTexto() — método POO de producto.js)
//    4. Si totalPaginas > 1, añade botones de paginación
//    5. Inyecta todo en contenedor.innerHTML
//
//  ── DEPENDENCIAS (cargar antes en el HTML) ──────────────────
//  - producto.js → clases ItemCatalogo, Producto y Servicio
//                  (para getPrecioTexto(), getEtiquetaComercial()
//                  y getDetalleExtra())
//  - datos.js    → array listaProductos (no usado directamente,
//                  pero lo necesita filtros.js para llamar renderizar)
// ============================================================

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
                <h5 class="mc-producto-categoria">${item.subcategoria} · ${item.getEtiquetaComercial()}</h5>
                <h3 class="mc-producto-titulo">${item.nombre}</h3>
                <p class="mc-producto-extra">${item.getDetalleExtra()}</p>
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
