// ============================================================
// usuarios.js — NXR TECH — Cuentas de administrador (simuladas)
// Responsable: Christian Diaz
//
// No hay base de datos real (Avance 4: datos simulados en memoria
// o localStorage). Cada administrador tiene su propio usuario y
// contraseña, tal como pidió el profesor.
//
// NOTA para la sustentación: en un proyecto real estas contraseñas
// jamás irían en texto plano ni en el código fuente; aquí se
// simulan solo para efectos académicos.
// ============================================================

const usuariosAdmin = [
    {
        usuario: "cdiaz",
        contrasena: "1234",
        nombre: "Christian Díaz",
        correo: "christian.diaz@nxrtech.com"
    },
    {
        usuario: "jmorales",
        contrasena: "jm2026",
        nombre: "Juan Morales",
        correo: "juan.morales@nxrtech.com"
    },
    {
        usuario: "mcalle",
        contrasena: "mc2026",
        nombre: "Maykol Calle",
        correo: "maykol.calle@nxrtech.com"
    },
    {
        usuario: "jsalda",
        contrasena: "1806",
        nombre: "Joel Saldaña",
        correo: "Joel.saldaña@nxrtech.com"
    }
];

// Demo rápida para la sustentación:
// usuario: cdiaz    / contraseña: 1234
// usuario: jmorales / contraseña: jm2026
// usuario: mcalle   / contraseña: mc2026
// usuario: jsalda   / contraseña: 1806