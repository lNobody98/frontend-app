// ============================================================
// equipo.js — NXR TECH — Integrantes del equipo
// Autor: Enrique Prada (coordinador)
//
// ▶ JOEL SALDAÑA — ESTE ARCHIVO ES EL QUE DEBES COMPLETAR
//
// ¿QUÉ HACE ESTE ARCHIVO?
// ─────────────────────────────────────────────────────────
// En lugar de escribir 6 bloques HTML idénticos a mano,
// usamos Programación Orientada a Objetos (POO):
//
//   1. Clase Integrante → el "molde" (blueprint) de cada persona
//   2. Array equipo[]   → lista de los 6 integrantes
//   3. renderEquipo()   → genera el HTML automáticamente
//
// FLUJO:
//   Datos (equipo.js)  →  renderCard()  →  innerHTML del grid HTML
//
// PARA AGREGAR O EDITAR UN INTEGRANTE:
//   Solo modifica su objeto dentro del array equipo[].
//   No toques el HTML, no toques renderCard().
// ============================================================


// ============================================================
// CLASE Integrante
// Cada integrante del equipo es una instancia (objeto) de esta clase.
// Los atributos son las "columnas" del CV de cada persona.
// ============================================================
class Integrante {

    /**
     * @param {string} nombre      - Nombre completo
     * @param {string} rol         - Rol Scrum (Scrum Master, Development Team…)
     * @param {string} iniciales   - 2 letras para el fallback del avatar (ej: "EP")
     * @param {string} fotoClase   - Clase CSS individual (nos-foto-enrique, etc.)
     * @param {string} foto        - Ruta a la foto (img/nosotros/equipo/nombre.jpg)
     * @param {Object} skills      - { lenguajes: [], bd: [], infra: [] }
     * @param {string[]} habilidades - Habilidades blandas (mínimo 3)
     * @param {string[]} certs     - Lista de certificados
     * @param {string} pdf         - Ruta al CV en PDF (o '#' si aún no está)
     */
    constructor({ nombre, rol, foto, skills, habilidades, certs, pdf, iniciales, fotoClase }) {
        this.nombre      = nombre;
        this.rol         = rol;
        this.foto        = foto;
        this.skills      = skills;       // objeto con 3 sub-arrays
        this.habilidades = habilidades;  // array de strings
        this.certs       = certs;        // array de strings
        this.pdf         = pdf;
        this.iniciales   = iniciales;
        this.fotoClase   = fotoClase;
    }

    // ─────────────────────────────────────────────────────────
    // MÉTODO PRIVADO: convierte un array de strings en tags HTML
    // Ejemplo: ["Java", "CSS"] → '<span class="nos-tag nos-tag-lang">Java</span>...'
    // ─────────────────────────────────────────────────────────
    _tags(arr, tipo) {
        if (!arr || arr.length === 0) return '<span class="nos-tag">—</span>';
        return arr.map(s => `<span class="nos-tag ${tipo}">${s}</span>`).join('');
    }

    // ─────────────────────────────────────────────────────────
    // MÉTODO PRINCIPAL: genera el HTML completo de la card
    // Se llama automáticamente por renderEquipo() para cada objeto
    // del array equipo[].
    // ─────────────────────────────────────────────────────────
    renderCard() {
        const enlacePDF = this.pdf !== '#'
            ? `href="${this.pdf}" target="_blank"`
            : `href="#"`;

        return `
            <div class="nos-cv-card">
                <div class="nos-cv-header">
                    <div class="nos-cv-foto-wrap ${this.fotoClase}">
                        <img src="${this.foto}" alt="${this.nombre}"
                             onerror="this.style.display='none'">
                        ${this.iniciales}
                    </div>
                    <div class="nos-cv-identidad">
                        <h3>${this.nombre}</h3>
                        <span class="nos-cv-rol">${this.rol}</span>
                    </div>
                </div>
                <div class="nos-cv-body">
                    <div>
                        <p class="nos-cv-bloque-titulo"><i class="fas fa-code"></i> Capacidad de Programación</p>
                        <p class="nos-cv-sub">Lenguajes y Frameworks</p>
                        <div class="nos-cv-tags">${this._tags(this.skills.lenguajes, 'nos-tag-lang')}</div>
                        <p class="nos-cv-sub">Base de Datos</p>
                        <div class="nos-cv-tags">${this._tags(this.skills.bd, 'nos-tag-lang')}</div>
                        <p class="nos-cv-sub">Infraestructura y Redes</p>
                        <div class="nos-cv-tags">${this._tags(this.skills.infra, 'nos-tag-lang')}</div>
                    </div>
                    <div>
                        <p class="nos-cv-bloque-titulo"><i class="fas fa-handshake"></i> Habilidades Blandas</p>
                        <div class="nos-cv-tags">${this._tags(this.habilidades, 'nos-tag-blanda')}</div>
                    </div>
                    <div>
                        <p class="nos-cv-bloque-titulo"><i class="fas fa-certificate"></i> Certificados</p>
                        <ul class="nos-cv-certs">
                            ${this.certs.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="nos-cv-footer">
                    <a ${enlacePDF} class="btn-primario">
                        Ver CV completo <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>`;
    }
}


// ============================================================
// ARRAY equipo[]
// Aquí están los 6 objetos Integrante.
// ▶ JOEL: cada compañero debe rellenar SU objeto con datos reales.
//   El objeto de Enrique es la referencia — cópialo y adapta.
// ============================================================
const equipo = [

    // ── Enrique Prada (completo — sirve como referencia) ──
    new Integrante({
        nombre:     "Ricardo Enrique Prada Guerra",
        rol:        "Scrum Master",
        foto:       "../../img/nosotros/equipo/enrique.jpg",
        skills: {
            lenguajes: ["Java", "TypeScript", "JavaScript", "Angular 11-16", "Spring Boot", "HTML5", "CSS3", "PHP"],
            bd:        ["Oracle PL/SQL", "MongoDB", "MySQL", "SQL Server"],
            infra:     ["Docker", "Apache Kafka", "RabbitMQ", "Spring LDAP", "CI/CD"]
        },
        habilidades: [
            "Aprendizaje continuo",
            "Orientación a resultados",
            "Trabajo en equipo",
            "Proactividad",
            "Análisis de requerimientos"
        ],
        certs: [
            "Scrum Developer Professional – SDPC (Certiprof, Feb 2025)",
            "ITIL V4 (New Horizons, Nov 2023)",
            "Angular Avanzado (Platzi, Nov 2025)",
            "Angular &amp; Spring 5 Full Stack (Udemy, Nov 2020)",
            "Microservicios con Spring Boot (Udemy, Nov 2020)",
            "Tutor STEM – Física (UTP, 2024)",
            "Tutor STEM – Matemática (UTP, 2024)",
            "Tutor STEM – Algorítmica (UTP, 2025)",
            "Excel Intermedio (UTP, 2025)",
            "Introducción a Ciberseguridad (Cisco – UTP, 2026)",
            "Endpoint Security (Cisco – UTP, 2026)",
            "Network Defense y Cyber Threat Management (Cisco – UTP, 2026)"
        ],
        pdf:        "../../pdf/nosotros/enrique_prada_cv.pdf",
        iniciales:  "EP",
        fotoClase:  "nos-foto-enrique"
    }),

    // ── Maykol Calle ──────────────────────────────────────
    // TODO Maykol: reemplaza los [...] con tus datos reales
    new Integrante({
        nombre:     "Maykol Adan Calle Paredes",
        rol:        "Development Team",
        foto:       "../../img/nosotros/equipo/maykol.jpg",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript ES6+", "Bootstrap 5", "Git"],
            bd:        ["[Base de datos]"],
            infra:     ["[Redes]"]
        },
        habilidades: ["[Habilidad 1]", "[Habilidad 2]", "[Habilidad 3]"],
        certs:       ["[Certificado placeholder]"],
        pdf:         "#",
        iniciales:   "MC",
        fotoClase:   "nos-foto-maykol"
    }),

    // ── Christian Díaz ────────────────────────────────────
    // TODO Christian: reemplaza los [...] con tus datos reales
    new Integrante({
        nombre:     "Christian Alexander Díaz García",
        rol:        "Development Team",
        foto:       "../../img/nosotros/equipo/christian.jpg",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Git"],
            bd:        ["[Base de datos]"],
            infra:     ["[Redes]"]
        },
        habilidades: ["[Habilidad 1]", "[Habilidad 2]", "[Habilidad 3]"],
        certs:       ["[Certificado placeholder]"],
        pdf:         "#",
        iniciales:   "CD",
        fotoClase:   "nos-foto-christian"
    }),

    // ── Juan Morales ──────────────────────────────────────
    // TODO Juan: reemplaza los [...] con tus datos reales
    new Integrante({
        nombre:     "Juan José Morales Velásquez",
        rol:        "Product Owner",
        foto:       "../../img/nosotros/equipo/juan.jpg",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Git"],
            bd:        ["[Base de datos]"],
            infra:     ["[Redes]"]
        },
        habilidades: ["[Habilidad 1]", "[Habilidad 2]", "[Habilidad 3]"],
        certs:       ["[Certificado placeholder]"],
        pdf:         "#",
        iniciales:   "JM",
        fotoClase:   "nos-foto-juan"
    }),

    // ── Joel Saldaña ──────────────────────────────────────
    // TODO Joel: reemplaza los [...] con tus datos reales
    new Integrante({
        nombre:     "Joel Anthony Saldaña Chávez",
        rol:        "Development Team",
        foto:       "../../img/nosotros/equipo/joel.jpg",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript ES6+", "Git"],
            bd:        ["[Base de datos]"],
            infra:     ["[Redes]"]
        },
        habilidades: ["[Habilidad 1]", "[Habilidad 2]", "[Habilidad 3]"],
        certs:       ["[Certificado placeholder]"],
        pdf:         "#",
        iniciales:   "JS",
        fotoClase:   "nos-foto-joel"
    }),

    // ── Xiomara Solís ─────────────────────────────────────
    // TODO Xiomara: reemplaza los [...] con tus datos reales
    new Integrante({
        nombre:     "Xiomara Yajhaira Solís Malpartida",
        rol:        "Development Team",
        foto:       "../../img/nosotros/equipo/xiomara.jpg",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Git"],
            bd:        ["[Base de datos]"],
            infra:     ["[Redes]"]
        },
        habilidades: ["[Habilidad 1]", "[Habilidad 2]", "[Habilidad 3]"],
        certs:       ["[Certificado placeholder]"],
        pdf:         "#",
        iniciales:   "XS",
        fotoClase:   "nos-foto-xiomara"
    })
];


// ============================================================
// FUNCIÓN renderEquipo()
// Recorre el array equipo[] y llama a renderCard() en cada objeto.
// El resultado (HTML como string) se inyecta en el grid del HTML.
//
// ¿POR QUÉ DOMContentLoaded?
// Porque el script se ejecuta antes de que el HTML esté listo.
// El evento espera a que toda la página cargue antes de buscar
// el elemento '.nos-cv-team-grid'.
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.nos-cv-team-grid');
    if (!grid) return;

    // .map() recorre cada Integrante y llama a renderCard()
    // .join('') une todos los strings HTML en uno solo
    grid.innerHTML = equipo.map(integrante => integrante.renderCard()).join('');
});
