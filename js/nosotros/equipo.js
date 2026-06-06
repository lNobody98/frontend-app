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
        this.nombre = nombre;
        this.rol = rol;
        this.foto = foto;
        this.skills = skills;       // objeto con 3 sub-arrays
        this.habilidades = habilidades;  // array de strings
        this.certs = certs;        // array de strings
        this.pdf = pdf;
        this.iniciales = iniciales;
        this.fotoClase = fotoClase;
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
// ▶ JOEL: PASO 2 — Completa el array con los 6 integrantes
// Cada compañero edita SOLO su objeto (el que tiene su nombre)
// ============================================================
const equipo = [

    // ── Enrique Prada (completo — sirve como referencia) ──
    new Integrante({
        nombre: "Ricardo Enrique Prada Guerra",
        rol: "Scrum Master",
        foto: "img/nosotros/equipo/enrique.jpg",
        skills: {
            lenguajes: ["Java", "TypeScript", "JavaScript", "Angular 11-16", "Spring Boot", "HTML5", "CSS3", "PHP"],
            bd: ["Oracle PL/SQL", "MongoDB", "MySQL", "SQL Server"],
            infra: ["Docker", "Apache Kafka", "RabbitMQ", "Spring LDAP", "CI/CD"]
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
        pdf: "pdf/nosotros/enrique_prada_cv.pdf",
        iniciales: "EP",
        fotoClase: "nos-foto-enrique"
    }),

   // ── Maykol Calle ──────────────────────────────────────
    // TODO Maykol: reemplaza los [...] con tus datos reales
    new Integrante({
        nombre: "Maykol Adan Calle Paredes",
        rol: "Development Team",
        foto: "img/nosotros/equipo/maykol.jpg",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript ES6+", "Bootstrap 5", "Git", "Python", "Java"],
            bd: ["MongoDB", "MySQL", "SQL Server", "PostgreSQL"],
            infra: ["Networking (TCP/IP)","Supabase"]
        },
        habilidades: [
    "Trabajo en equipo",
    "Resolución de problemas",
    "Comunicación efectiva",
    "Adaptabilidad",
    "Aprendizaje rápido",
    "Pensamiento analítico"
],

        certs: ["Redes y Comunicación de Datos I (UTP, 2025)",],
        pdf:"pdf/nosotros/Maykol Adán Calle Paredes.pdf",
        iniciales: "MC",
        fotoClase: "nos-foto-maykol"
    }),

    // ── TODO Christian: rellena tu objeto ──
    new Integrante({
        nombre: "Christian Alexander Díaz García",
        rol: "Development Team",
        foto: "../../img/nosotros/equipo/christian.jpg",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Git",],
            bd: ["[Base de datos]"],
            infra: ["[Redes]"]
        },
        habilidades: ["[Habilidad 1]", "[Habilidad 2]", "[Habilidad 3]"],
        certs: ["[Certificado placeholder]"],
        pdf: "#",
        iniciales: "CD",
        fotoClase: "nos-foto-christian"
    }),

    // ── TODO Juan: rellena tu objeto ──
    new Integrante({
        nombre: "Juan José Morales Velásquez",
        rol: "Product Owner",
        foto: "../../img/nosotros/equipo/juan.jpg",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Git"],
            bd: ["[Base de datos]"],
            infra: ["[Redes]"]
        },
        habilidades: ["[Habilidad 1]", "[Habilidad 2]", "[Habilidad 3]"],
        certs: ["[Certificado placeholder]"],
        pdf: "#",
        iniciales: "JM",
        fotoClase: "nos-foto-juan"
    }),


    // ── TODO Joel: rellena TU objeto ──
    new Integrante({
        nombre: "Joel Anthony Saldaña Chávez",
        rol: "Development Team",
        foto: "img/nosotros/equipo/joel.png",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript ES6+", "Java", "Python", "Bootstrap 5"],
            bd: ["PostgreSQL", "SQL Server", "MongoDB"],
            infra: ["Linux (Bash/CLI)", "Supabase", "Git", "Networking (TCP/IP)"]
        },
        habilidades: [
            "Adaptabilidad",
            "Trabajo en equipo",
            "Orientación a resultados",
            "Resolución de problemas",
            "Autodidacta",
            "Aprendizaje Continuo"
        ],
        certs: [
            "Redes y Comunicación de Datos I (UTP, 2025)",
            "Sistemas Operativos: Linux, Virtualización y Criptografía (UTP, 2025)",
            "Python Básico (UNI, 2026)",
            "Línea de Comandos (Bash) y Scripting (Codédex, 2026)",
            "Excel Intermedio (UTP, 2025)",
            "Inglés Básico/Intermedio - Lectura Técnica (UTP, 2025)"
        ],
        pdf: "pdf/nosotros/cv_joel_saldana.pdf",
        iniciales: "JS",
        fotoClase: "nos-foto-joel"
    }),

    // ── TODO Xiomara: rellena tu objeto ──
new Integrante({
        nombre: "Xiomara Yajhaira Solis Malpartida",
        rol: "Development Team",
        foto: "img/nosotros/equipo/xiomara.jpg",
        skills: {
            lenguajes: ["HTML5", "CSS3", "JavaScript","Java"],
            bd: ["MongoDB", "MySQL", "SQL Server"],
            infra: [ "Fundamentos de Redes",
            "Seguridad Informática",
            "Ciberseguridad"]
        },
        habilidades: [ "Trabajo en equipo","Aprendizaje continuo","Resolución de problemas"],
        certs: ["Introduction to Cybersecurity - Cisco Networking Academy","Manejo de SAP R3","Asistente en Gestión de Empresas","Excel Intermedio","Inglés Básico A2"],
        pdf: "pdf/nosotros/CV_Xiomara_Solis.pdf",
        iniciales: "XS",
        fotoClase: "nos-foto-xiomara"
    })

];


// ============================================================
// ▶ JOEL: PASO 3 — Copia aquí el DOMContentLoaded con renderEquipo()
// Desde: resultado/avance3/js/nosotros/equipo.js
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.nos-cv-team-grid');
    if (!grid) return;

    // .map() recorre cada Integrante y llama a renderCard()
    // .join('') une todos los strings HTML en uno solo
    grid.innerHTML = equipo.map(integrante => integrante.renderCard()).join('');
});

