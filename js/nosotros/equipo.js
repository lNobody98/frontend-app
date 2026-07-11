// equipo.js — NXR TECH — CV Cards del equipo
// Responsable: Joel Saldaña

// Clase Integrante — Enrique Prada
class Integrante {

    constructor({ nombre, rol, foto, lenguajes, bd, infra, habilidades, certs, cv }) {
        this.nombre = nombre;
        this.rol = rol;
        this.foto = foto;
        this.lenguajes = lenguajes;
        this.bd = bd;
        this.infra = infra;
        this.habilidades = habilidades;
        this.certs = certs;
        this.cv = cv;
    }

    generarEtiquetas(arr, tipo) {
        if (!arr || arr.length === 0) return '<span class="nos-tag">—</span>';
        return arr.map(s => `<span class="nos-tag ${tipo}">${s}</span>`).join('');
    }

    generarTarjeta() {
        return `
            <div class="nos-cv-card">
                <div class="nos-cv-header">
                    <div class="nos-cv-foto-wrap">
                        <img src="${this.foto}" alt="${this.nombre}">
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
                        <div class="nos-cv-tags">${this.generarEtiquetas(this.lenguajes, 'nos-tag-lang')}</div>
                        <p class="nos-cv-sub">Base de Datos</p>
                        <div class="nos-cv-tags">${this.generarEtiquetas(this.bd, 'nos-tag-lang')}</div>
                        <p class="nos-cv-sub">Infraestructura y Redes</p>
                        <div class="nos-cv-tags">${this.generarEtiquetas(this.infra, 'nos-tag-lang')}</div>
                    </div>
                    <div>
                        <p class="nos-cv-bloque-titulo"><i class="fas fa-handshake"></i> Habilidades Blandas</p>
                        <div class="nos-cv-tags">${this.generarEtiquetas(this.habilidades, 'nos-tag-blanda')}</div>
                    </div>
                    <div>
                        <p class="nos-cv-bloque-titulo"><i class="fas fa-certificate"></i> Certificados</p>
                        <ul class="nos-cv-certs">
                            ${this.certs.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="nos-cv-footer">
                    <a href="${this.cv}" target="_blank" class="btn-primario">
                        Ver CV completo <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>`;
    }
}

// Array equipo[] — completar por cada integrante
const equipo = [

    // Enrique Prada
    new Integrante({
        nombre: "Ricardo Enrique Prada Guerra",
        rol: "Scrum Master",
        foto: "img/nosotros/equipo/enrique.jpg",
        lenguajes: ["Java", "TypeScript", "JavaScript", "Angular 11-16", "Spring Boot", "HTML5", "CSS3", "PHP"],
        bd: ["Oracle PL/SQL", "MongoDB", "MySQL", "SQL Server"],
        infra: ["Docker", "Apache Kafka", "RabbitMQ", "Spring LDAP", "CI/CD"],
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
        cv: "pdf/nosotros/enrique_prada_cv.pdf"
    }),

    // Maykol Calle
    new Integrante({
        nombre: "Maykol Adan Calle Paredes",
        rol: "Development Team",
        foto: "img/nosotros/equipo/maykol.jpg",
        lenguajes: ["HTML5", "CSS3", "JavaScript ES6+", "Bootstrap 5", "Git", "Python", "Java"],
        bd: ["MongoDB", "MySQL", "SQL Server", "PostgreSQL"],
        infra: ["Networking (TCP/IP)", "Supabase"],
        habilidades: [
            "Trabajo en equipo",
            "Resolución de problemas",
            "Comunicación efectiva",
            "Adaptabilidad",
            "Aprendizaje rápido",
            "Pensamiento analítico"
        ],
        certs: [
            "Redes y Comunicación de Datos I (UTP, 2025)",
            "Tutor STEM – Física (UTP, 2024)",
            "Tutor STEM – Matemática (UTP, 2024)",
            "Tutor STEM – Algorítmica (UTP, 2025)"
        ],
        cv: "pdf/nosotros/Maykol Adán Calle Paredes.pdf"
    }),

    // Christian Díaz
    new Integrante({
        nombre: "Christian Alexander Díaz García",
        rol: "Development Team",
        foto: "img/nosotros/equipo/christian.jpg",
        lenguajes: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Git", "Python", "Java"],
        bd: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"],
        infra: ["Networking (TCP/IP)", "Supabase"],
        habilidades: ["Trabajo en equipo", "Resolución de problemas", "Adaptabilidad", "Aprendizaje continuo", "Autodidacta"],
        certs: [
            "Certificado Python Básico (UNI, 2025)",
            "Certificado Ciberseguridad (Cisco – UTP, 2026)",
            "Certificado Excel Intermedio (CENAP, 2026)"
        ],
        cv: "pdf/nosotros/cv_christian_diaz.pdf"
    }),

    // Juan Morales
    new Integrante({
        nombre: "Juan José Morales Velásquez",
        rol: "Product Owner",
        foto: "img/nosotros/equipo/JuanJosé.jpg",
        lenguajes: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Git"],
        bd: ["MySQL", "PostgreSQL", "SQL Server"],
        infra: ["Linux (Bash/CLI)", "Windows Server", "Git", "GitHub", "Apache"],
        habilidades: ["Trabajo en equipo", "Resolución de problemas", "Comunicación efectiva"],
        certs: [
            "Cisco Networking Basics",
            "Fundamentos de Git y GitHub",
            "Introducción a Linux"
        ],
        cv: "pdf/nosotros/cv-Juan-Morales.pdf"
    }),

    // Joel Saldaña
    new Integrante({
        nombre: "Joel Anthony Saldaña Chávez",
        rol: "Development Team",
        foto: "img/nosotros/equipo/joel.png",
        lenguajes: ["HTML5", "CSS3", "JavaScript ES6+", "Java", "Python", "Bootstrap 5"],
        bd: ["PostgreSQL", "SQL Server", "MongoDB"],
        infra: ["Linux (Bash/CLI)", "Supabase", "Git", "Networking (TCP/IP)"],
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
        cv: "pdf/nosotros/cv_joel_saldana.pdf"
    }),

    // Xiomara Solís
    new Integrante({
        nombre: "Xiomara Yajhaira Solis Malpartida",
        rol: "Development Team",
        foto: "img/nosotros/equipo/xiomara.jpg",
        lenguajes: ["HTML5", "CSS3", "JavaScript", "Java"],
        bd: ["MongoDB", "MySQL", "SQL Server"],
        infra: ["Fundamentos de Redes", "Seguridad Informática", "Ciberseguridad"],
        habilidades: ["Trabajo en equipo", "Aprendizaje continuo", "Resolución de problemas"],
        certs: [
            "Introduction to Cybersecurity – Cisco Networking Academy",
            "Manejo de SAP R3",
            "Asistente en Gestión de Empresas",
            "Excel Intermedio",
            "Inglés Básico A2"
        ],
        cv: "pdf/nosotros/CV_Xiomara_Solis.pdf"
    })

];

// Render — Joel Saldaña
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.nos-cv-team-grid');
    if (!grid) return;
    grid.innerHTML = equipo.map(integrante => integrante.generarTarjeta()).join('');
});
