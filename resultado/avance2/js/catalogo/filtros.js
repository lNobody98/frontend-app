// ============================================================
//  filtros.js — NXR TECH
//  RESPONSABLE: Joel Saldaña
//
//  ── TIPO DE BÚSQUEDA/FILTRADO ──────────────────────────────
//  Este archivo implementa búsqueda y filtros DINÁMICOS.
//
//  1. BÚSQUEDA DINÁMICA POR TEXTO
//     El campo #inputBusqueda tiene oninput="filtrar()".
//     Cada vez que el usuario escribe o borra una letra, se
//     vuelve a filtrar el catálogo sin presionar botón.
//
//     La búsqueda por texto solo compara estos atributos:
//     - nombre
//     - marca / etiqueta comercial
//     - descripción
//
//     No busca por garantía, stock, modalidad, imagen, id ni precio.
//     Esos campos se usan para mostrar información en la card o para
//     otros comportamientos del catálogo.
//
//  2. FILTROS DINÁMICOS DEPENDIENTES
//     #selectTipo usa onchange="actualizarSubcategorias()".
//     #selectSubcategoria usa onchange="filtrar()".
//
//     Si Tipo = Todos:
//     - el select de subcategoría queda desactivado
//     - se filtra sobre todo el catálogo
//
//     Si Tipo = Producto:
//     - se cargan solo subcategorías de productos
//
//     Si Tipo = Servicio:
//     - se cargan solo subcategorías de servicios
//
//  ── TIPO DE PROGRAMACIÓN ────────────────────────────────────
//  Programación funcional / imperativa con JavaScript.
//  Se usan funciones reutilizables y métodos de arreglo:
//  filter(), map(), includes(), normalize().
//
//  ── LENGUAJE ────────────────────────────────────────────────
//  JavaScript ES6+:
//  - const / let
//  - arrow functions
//  - template literals
//  - Array.filter()
//  - Array.map()
//  - String.includes()
//  - String.normalize("NFD")
//
//  ── ESTRUCTURAS DE PROGRAMACIÓN USADAS ─────────────────────
//  - if / else
//    En actualizarSubcategorias() decide si desactiva o activa el
//    segundo select según el tipo seleccionado.
//
//  - Operadores lógicos
//    En filtrar() combina condiciones:
//    coincideTexto && coincideTipo && coincideSubcategoria.
//
//  - Array.filter()
//    Recorre listaCatalogo y devuelve solo los ítems que cumplen
//    los criterios activos. Es una estructura repetitiva implícita.
//
//  - Array.map()
//    Recorre el arreglo de subcategorías para construir las opciones
//    HTML del segundo select.
//
//  ── QUÉ HACE ESTE ARCHIVO ───────────────────────────────────
//  Controla la búsqueda y los filtros del catálogo.
//  Toma listaCatalogo desde datos.js, aplica condiciones y entrega
//  el resultado a renderizar() de listado.js.
//
//  FLUJO:
//  usuario escribe/cambia select → filtros.js filtra listaCatalogo
//  → llama renderizar(array) → listado.js pinta las cards.
//
//  ── VARIABLES / CONSTANTES ─────────────────────────────────
//  - iniciado:
//    flag booleano para controlar el scroll automático hacia la
//    sección del catálogo.
//
//  - SUBCATEGORIAS:
//    objeto literal con dos arreglos: Producto y Servicio.
//    Permite llenar dinámicamente #selectSubcategoria según el
//    valor de #selectTipo.
//
//  ── FUNCIONES ───────────────────────────────────────────────
//  norm(texto)
//  → Convierte texto a minúsculas y elimina tildes.
//    Ejemplo: "Teléfonos" y "telefonos" se comparan igual.
//
//  actualizarSubcategorias(debeScrollear)
//  → Lee #selectTipo.
//    Si el valor es "todos", desactiva #selectSubcategoria.
//    Si el valor es Producto/Servicio, llena el select con las
//    subcategorías correspondientes y luego llama filtrar().
//
//  filtrar(debeScrollear)
//  → Función central.
//    Lee el texto, tipo y subcategoría.
//    Aplica filter() sobre listaCatalogo y valida:
//    1. coincideTexto
//    2. coincideTipo
//    3. coincideSubcategoria
//    Después llama renderizar(resultado).
//
//  limpiarFiltros()
//  → Borra el input, vuelve Tipo a "Todos", resetea el orden a
//    "relevancia", desactiva subcategoría y muestra los 120 ítems.
//
//  ── IDs DEL HTML QUE MANIPULA ESTE ARCHIVO ──────────────────
//  - #inputBusqueda       → campo de texto (oninput → filtrar())
//  - #selectTipo          → filtro principal Todos/Productos/Servicios
//  - #selectSubcategoria  → filtro dependiente de subcategoría
//  - #selectOrden         → ordenamiento controlado por listado.js
//  - #catalogo-busqueda   → sección usada para scroll automático
//
//  ── DEPENDENCIAS (cargar antes en el HTML) ──────────────────
//  - catalogo.js → clases ItemCatalogo, Producto y Servicio
//  - datos.js    → array listaCatalogo
//  - listado.js  → renderizar(), ordenActivo
// ============================================================

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
