// filtros.js — Búsqueda dinámica y filtros dependientes — Joel Saldaña

let iniciado = true;

const SUBCATEGORIAS = {
    Producto: [
        "Teléfonos",
        "Laptops",
        "Gaming",
        "Accesorios",
        "Componentes",
        "Monitores",
        "Tablets",
        "Smart TV",
        "Impresoras",
        "Wearables"
    ],
    Servicio: [
        "Soporte",
        "Mantenimiento",
        "Reparación",
        "Instalación",
        "Asesoría",
        "Ciberseguridad",
        "Diseño Digital",
        "Networking",
        "Cloud & Backup",
        "Desarrollo Web"
    ]
};


function norm(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


function actualizarSubcategorias(debeScrollear = true) {
    const tipo = document.getElementById("selectTipo").value;
    const selectSubcategoria = document.getElementById("selectSubcategoria");

    if (tipo === "todos") {
        selectSubcategoria.disabled = true;
        selectSubcategoria.innerHTML = '<option value="">Selecciona productos o servicios</option>';
    } else {
        const opciones = SUBCATEGORIAS[tipo]
            .map(subcategoria => `<option value="${subcategoria}">${subcategoria}</option>`)
            .join("");

        selectSubcategoria.disabled = false;
        selectSubcategoria.innerHTML = `<option value="">Todas las subcategorías</option>${opciones}`;
    }

    filtrar(debeScrollear);
}


function filtrar(debeScrollear = true) {
    const texto = norm(document.getElementById("inputBusqueda").value.trim());
    const tipo = document.getElementById("selectTipo").value;
    const subcategoria = document.getElementById("selectSubcategoria").value;

    const resultado = listaCatalogo.filter(item => {
        const coincideTexto = !texto ||
            norm(item.nombre).includes(texto)                 ||
            norm(item.getEtiquetaComercial()).includes(texto) ||
            norm(item.descripcion).includes(texto);

        const coincideTipo = tipo === "todos" || item.tipo === tipo;
        const coincideSubcategoria = !subcategoria || item.subcategoria === subcategoria;

        return coincideTexto && coincideTipo && coincideSubcategoria;
    });

    renderizar(resultado);

    if (iniciado && debeScrollear) {
        document.getElementById("catalogo-busqueda").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    iniciado = true;
}


function limpiarFiltros() {
    iniciado = false;
    ordenActivo = "relevancia";

    document.getElementById("inputBusqueda").value = "";
    document.getElementById("selectTipo").value = "todos";
    document.getElementById("selectOrden").value = "relevancia";

    actualizarSubcategorias(false);
}
