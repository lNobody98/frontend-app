/*==========================================================
                CONTACTOS
    Responsable: Xiomara Solis
==========================================================*/

const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function (e) {

    // Evita que el formulario recargue la página
    e.preventDefault();

    // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación
    if (nombre === "" || correo === "" || mensaje === "") {

        alert("Por favor complete los campos obligatorios.");

        return;

    }

    // Simulación del envío
    alert("¡Gracias por contactarnos! Su mensaje fue enviado correctamente.");

    // Limpiar formulario
    formulario.reset();

});