// ============================================================
// auth.js — NXR TECH — Sesión del administrador
// Responsable: Christian Diaz
//
// Módulo reutilizable. Juan (gestion-catalogo.html) y Maykol
// (reportes.html) deben incluir este mismo archivo junto con
// usuarios.js para proteger sus páginas y mostrar los datos
// del admin logueado, igual que en panel.html.
//
// Requiere que usuarios.js esté cargado antes que este archivo.
// ============================================================

const CLAVE_SESION = "nxrAdminSesion";

// Intenta iniciar sesión. Devuelve true/false.
function iniciarSesion(usuario, contrasena) {
    const admin = usuariosAdmin.find(
        u => u.usuario === usuario && u.contrasena === contrasena
    );

    if (!admin) return false;

    const sesion = {
        usuario: admin.usuario,
        nombre: admin.nombre,
        correo: admin.correo,
        fechaAcceso: new Date().toLocaleString("es-PE")
    };

    // sessionStorage: la sesión dura mientras la pestaña esté abierta.
    sessionStorage.setItem(CLAVE_SESION, JSON.stringify(sesion));
    return true;
}

// Devuelve los datos del admin logueado, o null si no hay sesión.
function obtenerSesion() {
    const datos = sessionStorage.getItem(CLAVE_SESION);
    return datos ? JSON.parse(datos) : null;
}

// Cierra sesión y regresa al login.
// rutaLogin permite llamarla desde subcarpetas si hiciera falta.
function cerrarSesion(rutaLogin = "login.html") {
    sessionStorage.removeItem(CLAVE_SESION);
    window.location.href = rutaLogin;
}

// Llamar al inicio de cualquier página del panel (panel.html,
// gestion-catalogo.html, reportes.html) para bloquear el acceso
// a quien no inició sesión.
function protegerPagina(rutaLogin = "login.html") {
    if (!obtenerSesion()) {
        window.location.href = rutaLogin;
    }
}