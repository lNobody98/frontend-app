// ============================================================
//  filtros.js — NXR TECH
//  RESPONSABLE: Joel Saldaña
//  Guía completa: resultado/avance2/js/producto/filtros.js
// ============================================================

// ✏️ JOEL SALDAÑA — coloca aquí tu código

let filtroActivo = "todos";
let precioMin = 0;
let precioMax = Infinity;
let iniciado = true;

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
            norm(item.nombre).includes(texto) ||
            norm(item.marca).includes(texto) ||
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
    selProd.value = "";
    selServ.value = "";
    selProd.disabled = (filtro === "Servicio");
    selServ.disabled = (filtro === "Producto");

    filtrar();
}


function setFiltroSelect(select) {
    const valor = select.value;
    const esProd = select.id === "selectProductos";
    const otherId = esProd ? "selectServicios" : "selectProductos";
    const mainBtnId = esProd ? "btn-productos" : "btn-servicios";
    const mainFiltro = esProd ? "Producto" : "Servicio";

    const otherSelect = document.getElementById(otherId);
    otherSelect.value = "";
    otherSelect.disabled = true;
    select.disabled = false;

    document.querySelectorAll(".js-filtro-btn").forEach(b => b.classList.remove("activo"));
    document.getElementById(mainBtnId).classList.add("activo");

    filtroActivo = valor || mainFiltro;
    filtrar();
}


function limpiarFiltros() {
    filtroActivo = "todos";
    precioMin = 0;
    precioMax = Infinity;
    ordenActivo = "relevancia";

    document.getElementById("inputBusqueda").value = "";
    document.getElementById("selectOrden").value = "relevancia";
    document.getElementById("sliderMin").value = 0;
    document.getElementById("sliderMax").value = SLIDER_MAX;
    actualizarSliderVisual();

    const selProd = document.getElementById("selectProductos");
    const selServ = document.getElementById("selectServicios");
    selProd.value = "";
    selServ.value = "";
    selProd.disabled = false;
    selServ.disabled = false;

    document.querySelectorAll(".js-filtro-btn").forEach(b => b.classList.remove("activo"));
    document.getElementById("btn-todos").classList.add("activo");

    filtrar();
}


function actualizarSliderVisual() {
    const min = parseInt(document.getElementById("sliderMin").value);
    const max = parseInt(document.getElementById("sliderMax").value);

    const leftPct = (min / SLIDER_MAX) * 100;
    const rightPct = (max / SLIDER_MAX) * 100;

    document.getElementById("sliderRange").style.left = leftPct + "%";
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