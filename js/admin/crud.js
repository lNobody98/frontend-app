let imagenTemporal = "";
let imagenEdicion = "";
let modalCatalogo;

//Lista//
function mostrarLista(lista = listaCatalogo) {

    const tbody = document.getElementById("listaCatalogo");

    tbody.innerHTML = "";

    lista.forEach(item => {

        let rutaImagen = item.imagen;

        if (!rutaImagen.startsWith("data:image")) {
            rutaImagen = "../" + rutaImagen;

        }

        tbody.innerHTML += `
            <tr>

                <td>
                    <img src="${rutaImagen}" width="70">
                </td>

                <td>${item.id}</td>

                <td>${item.nombre}</td>

                <td>${item.tipo}</td>

                <td>${item.subcategoria}</td>

                <td>${item.getPrecioTexto()}</td>

                <td>${item.estado}</td>

                <td>

    <button class="btn btn-primary btn-sm"
        onclick="editarItem(${item.id})">
        Editar
    </button>

   ${
    item.estado === "ACTIVO"
    ?
    `<button class="btn btn-danger btn-sm"
        onclick="cambiarEstado(${item.id})">
        Dar de baja
    </button>`
    :
    `<button class="btn btn-success btn-sm"
        onclick="cambiarEstado(${item.id})">
        Activar
    </button>`
}

                </td>

            </tr>
        `;

    });

    document.getElementById("lblCantidad").textContent =
        `${lista.length} registros`;


}
//crear objeto//
function crearObjeto() {

    const id = document.getElementById("itemID").value;

    const tipo = document.getElementById("tipo").value;

    const nombre = document.getElementById("nombre").value.trim();

    const subcategoria = document.getElementById("subcategoria").value;

    const precio = Number(document.getElementById("precio").value);

    const descripcion = document.getElementById("descripcion").value.trim();

    const estado = "ACTIVO";

    let imagen;

    if (imagenTemporal !== "") {
        imagen = imagenTemporal;
    } else {
        imagen = imagenEdicion;
    }

    if (!imagen) {
        imagen = "img/sin-imagen.png";
    }


    if (tipo === "Producto") {

        const marca = document.getElementById("marca").value.trim();

        const stock = Number(document.getElementById("stock").value);

        return new Producto(

            id === "" ? generarID() : Number(id),

            nombre,

            subcategoria,

            precio,

            marca,

            stock,

            descripcion,

            imagen,

            estado

        );

    }


    const garantia = document.getElementById("garantia").value.trim();

    const modalidad = document.getElementById("modalidad").value;

    return new Servicio(

        id === "" ? generarID() : Number(id),

        nombre,

        subcategoria,

        precio,

        garantia,

        modalidad,

        descripcion,

        imagen,

        estado

    );

}
//id//
function generarID() {

    if (listaCatalogo.length === 0)
        return 1;

    return Math.max(...listaCatalogo.map(item => item.id)) + 1;

}
//guardar objeto//
function guardarItem() {

    const nombre = document.getElementById("nombre").value.trim();
    const precio = document.getElementById("precio").value;

    if (!nombre) {
        alert("El nombre es obligatorio.");
        return;
    }

    if (precio === "" || Number(precio) < 0) {
        alert("Ingrese un precio válido.");
        return;
    }

    const item = crearObjeto();

    const indice = listaCatalogo.findIndex(x => x.id === item.id);

    const anterior = indice >= 0 ? listaCatalogo[indice] : null;

    if (indice >= 0) {

        listaCatalogo[indice] = item;

    } else {

        listaCatalogo.push(item);

    }

    try {

        localStorage.setItem(
            "productos",
            JSON.stringify(listaCatalogo)
        );

    } catch (e) {

        if (anterior) {
            listaCatalogo[indice] = anterior;
        } else {
            listaCatalogo.pop();
        }

        alert("No se pudo guardar: la imagen pesa demasiado. Pruebe con una imagen más liviana.");

        return;

    }

    if (anterior) {
        alert("✅ Producto/Servicio modificado correctamente.");
    } else {
        alert("✅ Producto/Servicio agregado correctamente.");
    }

    mostrarLista();

    modalCatalogo.hide();

}
//modal registrar//
function abrirModalRegistrar() {

    document.getElementById("tituloModal").textContent = "Nuevo Registro";

    document.getElementById("itemID").value = "";

    document.getElementById("nombre").value = "";

    document.getElementById("precio").value = "";

    document.getElementById("descripcion").value = "";

    document.getElementById("marca").value = "";

    document.getElementById("stock").value = "";

    document.getElementById("garantia").value = "";

    document.getElementById("preview").src = "../img/sin-imagen.png";

    modalCatalogo.show();

    imagenTemporal = "";
    imagenEdicion = "";

}
//cargar categoria//
function cambiarFormulario() {

    const tipo = document.getElementById("tipo").value;

    if (tipo === "Producto") {

        document.getElementById("panelProducto").style.display = "block";
        document.getElementById("panelServicio").style.display = "none";

    } else {

        document.getElementById("panelProducto").style.display = "none";
        document.getElementById("panelServicio").style.display = "block";

    }

 

}

//imagen previsualizada y guardada//
function mostrarPreview() {

    const archivo =
        document.getElementById("imagen").files[0];

    if (!archivo)
        return;

    const lector = new FileReader();

    lector.onload = function (e) {

        imagenTemporal = e.target.result;

        document.getElementById("preview").src =
            imagenTemporal;

    };

    lector.readAsDataURL(archivo);

}

//editar producto//
function editarItem(id) {

    const item = listaCatalogo.find(x => x.id === Number(id));
    if (!item) return;
    imagenEdicion = item.imagen;
    imagenTemporal = "";

    document.getElementById("itemID").value = item.id;
    document.getElementById("nombre").value = item.nombre;
    document.getElementById("subcategoria").value = item.subcategoria;
    document.getElementById("precio").value = item.precio;
    document.getElementById("descripcion").value = item.descripcion;
    document.getElementById("tipo").value = item.tipo;

    document.getElementById("tituloModal").textContent =
        item.tipo === "Producto" ? "Editar Producto" : "Editar Servicio";

    let img = item.imagen;

    if (!img.startsWith("data:image")) {
        img = "../" + img;
    }


    document.getElementById("preview").src = img;

    if (item.tipo === "Producto") {

        document.getElementById("marca").value = item.marca || "";
        document.getElementById("stock").value = item.stock || "";

        document.getElementById("panelProducto").style.display = "block";
        document.getElementById("panelServicio").style.display = "none";

    } else {

        document.getElementById("garantia").value = item.garantia || "";
        document.getElementById("modalidad").value = item.modalidad || "";

        document.getElementById("panelProducto").style.display = "none";
        document.getElementById("panelServicio").style.display = "block";
    }

    modalCatalogo.show();
}
// búsqueda por nombre
function buscar() {

    const texto = document.getElementById("txtBuscar").value.trim().toLowerCase();

    if (texto === "") {
        mostrarLista(listaCatalogo);
        return;
    }

    const resultado = listaCatalogo.filter(item => {

        const nombre = item.nombre?.toLowerCase() || "";
        const marca = item.marca?.toLowerCase() || "";
        const descripcion = item.descripcion?.toLowerCase() || "";
        const categoria = item.subcategoria?.toLowerCase() || "";
        const tipo = item.tipo?.toLowerCase() || "";

        return (
            nombre.includes(texto) ||
            marca.includes(texto) ||
            descripcion.includes(texto) ||
            categoria.includes(texto) ||
            tipo.includes(texto)
        );

    });

    mostrarLista(resultado);
}
// dar de baja //
function cambiarEstado(id) {

    const item = listaCatalogo.find(x => x.id === id);

    if (!item) return;

    const accion = item.estado === "ACTIVO" ? "dar de baja" : "activar";

    const confirmar = confirm(
        `¿Está seguro que desea ${accion} "${item.nombre}"?`
    );

    if (!confirmar) {
        return;
    }

    item.estado =
        item.estado === "ACTIVO"
            ? "INACTIVO"
            : "ACTIVO";

    try {

        localStorage.setItem(
            "productos",
            JSON.stringify(listaCatalogo)
        );

    } catch (e) {

        item.estado =
            item.estado === "ACTIVO"
                ? "INACTIVO"
                : "ACTIVO";

        alert("No se pudo guardar el cambio de estado.");

        return;

    }

    mostrarLista();

}
//al final//
window.addEventListener("DOMContentLoaded", () => {

    modalCatalogo = new bootstrap.Modal(
        document.getElementById("modalCatalogo")
    );

    document
        .getElementById("tipo")
        .addEventListener("change", cambiarFormulario);

    document
        .getElementById("imagen")
        .addEventListener("change", mostrarPreview);
    document
        .getElementById("txtBuscar")
        .addEventListener("input", buscar);

    mostrarLista();
    cambiarFormulario();

});