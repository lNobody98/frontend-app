// ============================================================
// login.js — NXR TECH — Formulario de acceso del administrador
// Responsable: Christian Diaz
//
// Requiere usuarios.js y auth.js cargados antes que este archivo.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // Si ya hay una sesión activa, se salta el login directo al panel
    if (obtenerSesion()) {
        window.location.href = "panel.html";
        return;
    }

    const formulario = document.getElementById("form-login");
    const inputUsuario = document.getElementById("input-usuario");
    const inputContrasena = document.getElementById("input-contrasena");
    const mensajeError = document.getElementById("mensaje-error");
    const tarjeta = document.querySelector(".login-card");
    const botonOjo = document.getElementById("btn-mostrar-clave");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = inputUsuario.value.trim();
        const contrasena = inputContrasena.value.trim();

        if (usuario === "" || contrasena === "") {
            mostrarError("Completa usuario y contraseña.");
            return;
        }

        const accesoValido = iniciarSesion(usuario, contrasena);

        if (accesoValido) {
            window.location.href = "panel.html";
        } else {
            mostrarError("Usuario o contraseña incorrectos.");
        }
    });

    // Mostrar / ocultar contraseña
    botonOjo.addEventListener("click", () => {
        const esPassword = inputContrasena.type === "password";
        inputContrasena.type = esPassword ? "text" : "password";
        botonOjo.classList.toggle("fa-eye");
        botonOjo.classList.toggle("fa-eye-slash");
    });

    function mostrarError(texto) {
        mensajeError.textContent = texto;
        mensajeError.classList.add("visible");

        tarjeta.classList.remove("login-shake");
        // fuerza el reinicio de la animación
        void tarjeta.offsetWidth;
        tarjeta.classList.add("login-shake");
    }

});