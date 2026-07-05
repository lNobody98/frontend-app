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
        contrasena: "12346",
        nombre: "Christian Díaz",
        correo: "christian.diaz@nxrtech.com",
        rol: "Administrador"
    },
    {
        usuario: "jmorales",
        contrasena: "jm2026",
        nombre: "Juan Morales",
        correo: "juan.morales@nxrtech.com",
        rol: "Administrador"
    },
    {
        usuario: "mcalle",
        contrasena: "mc2026",
        nombre: "Maykol Calle",
        correo: "maykol.calle@nxrtech.com",
        rol: "Administrador"
    }
];

// Demo rápida para la sustentación:
// usuario: cdiaz    / contraseña: cd2026
// usuario: jmorales / contraseña: jm2026
// usuario: mcalle   / contraseña: mc2026