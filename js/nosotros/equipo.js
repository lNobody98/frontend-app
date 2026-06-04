// ============================================================
// equipo.js — NXR TECH — CV Cards del equipo
// Responsable: Joel Saldaña
//
// ▶ JOEL: Este archivo genera las cards automáticamente.
//   Tu tarea es completar los objetos del array equipo[].
//   Referencia completa: resultado/avance3/js/nosotros/equipo.js
//
// INSTRUCCIONES:
//   1. Copia la clase Integrante desde resultado/avance3/js/nosotros/equipo.js
//   2. Copia la función renderEquipo() desde el mismo archivo
//   3. Rellena cada objeto del array equipo[] con datos reales
//   4. Cada compañero rellena SU objeto — nadie toca los demás
// ============================================================


// ============================================================
// ▶ JOEL: PASO 1 — Copia aquí la clase Integrante completa
// Desde: resultado/avance3/js/nosotros/equipo.js
// ============================================================

/* PEGA LA CLASE AQUÍ */


// ============================================================
// ▶ JOEL: PASO 2 — Completa el array con los 6 integrantes
// Cada compañero edita SOLO su objeto (el que tiene su nombre)
// ============================================================
const equipo = [

    // ── Enrique Prada ── (completa tú este también Joel, o pídele los datos)
    new Integrante({
        nombre:      "Ricardo Enrique Prada Guerra",
        rol:         "Scrum Master",
        foto:        "img/nosotros/equipo/enrique.jpg",
        skills:      { lenguajes: [], bd: [], infra: [] },
        habilidades: [],
        certs:       [],
        pdf:         "#",
        iniciales:   "EP",
        fotoClase:   "nos-foto-enrique"
    }),

    // ── TODO Maykol: rellena tu objeto ──
    new Integrante({
        nombre:      "Maykol Adan Calle Paredes",
        rol:         "Development Team",
        foto:        "img/nosotros/equipo/maykol.jpg",
        skills:      { lenguajes: [], bd: [], infra: [] },
        habilidades: [],
        certs:       [],
        pdf:         "#",
        iniciales:   "MC",
        fotoClase:   "nos-foto-maykol"
    }),

    // ── TODO Christian: rellena tu objeto ──
    new Integrante({
        nombre:      "Christian Alexander Díaz García",
        rol:         "Development Team",
        foto:        "img/nosotros/equipo/christian.jpg",
        skills:      { lenguajes: [], bd: [], infra: [] },
        habilidades: [],
        certs:       [],
        pdf:         "#",
        iniciales:   "CD",
        fotoClase:   "nos-foto-christian"
    }),

    // ── TODO Juan: rellena tu objeto ──
    new Integrante({
        nombre:      "Juan José Morales Velásquez",
        rol:         "Product Owner",
        foto:        "img/nosotros/equipo/juan.jpg",
        skills:      { lenguajes: [], bd: [], infra: [] },
        habilidades: [],
        certs:       [],
        pdf:         "#",
        iniciales:   "JM",
        fotoClase:   "nos-foto-juan"
    }),

    // ── TODO Joel: rellena TU objeto ──
    new Integrante({
        nombre:      "Joel Anthony Saldaña Chávez",
        rol:         "Development Team",
        foto:        "img/nosotros/equipo/joel.jpg",
        skills:      { lenguajes: [], bd: [], infra: [] },
        habilidades: [],
        certs:       [],
        pdf:         "#",
        iniciales:   "JS",
        fotoClase:   "nos-foto-joel"
    }),

    // ── TODO Xiomara: rellena tu objeto ──
    new Integrante({
        nombre:      "Xiomara Yajhaira Solís Malpartida",
        rol:         "Development Team",
        foto:        "img/nosotros/equipo/xiomara.jpg",
        skills:      { lenguajes: [], bd: [], infra: [] },
        habilidades: [],
        certs:       [],
        pdf:         "#",
        iniciales:   "XS",
        fotoClase:   "nos-foto-xiomara"
    })
];


// ============================================================
// ▶ JOEL: PASO 3 — Copia aquí el DOMContentLoaded con renderEquipo()
// Desde: resultado/avance3/js/nosotros/equipo.js
// ============================================================

/* PEGA EL LISTENER AQUÍ */
