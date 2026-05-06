// ============================================================
//  busqueda.js — NXR TECH
//  Lógica de filtrado y renderizado del catálogo
//  Requiere: producto.js y datos.js (cargados antes en el HTML)
// ============================================================


// ============================================================
//  ESTADO DEL FILTRO ACTIVO
// ============================================================
let filtroActivo = "todos";


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

    renderizar(resultado);
}


// ============================================================
//  RENDERIZAR CARDS EN EL DOM
// ============================================================
function renderizar(lista) {
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

    contenedor.innerHTML = lista.map(item => `
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
}


// ============================================================
//  INICIAR AL CARGAR LA PÁGINA
// ============================================================
filtrar();
