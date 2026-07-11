# NXR TECH

> Innovación Tecnológica Para Tu Futuro

NXR TECH es una tienda de soluciones tecnológicas completas: teléfonos, computadoras, accesorios y soporte técnico especializado.

**Sitio en línea:** https://nxr-tech.github.io/frontend-app/

---

## Tecnologías

- HTML5 · CSS3 · JavaScript ES6+ (Vanilla)
- Bootstrap 5 — carousel y navbar collapse
- Google Fonts — Poppins · Space Grotesk
- Font Awesome 6

---

## Avances del Proyecto

### Avance 1 — `inicio.html` ✅
Página principal del sitio. Cada integrante desarrolló su sección en una rama `feature/` independiente.

| Integrante | Sección |
|---|---|
| Enrique Prada | Navbar · Hero · Footer |
| Juan Morales | Video · Contador |
| Maykol Calle | Soluciones Tecnológicas |
| Joel Saldaña | Productos Destacados |
| Christian Diaz | Testimonios |
| Xiomara Solis | Noticias · CTA |

---

### Avance 2 — `catalogo.html` ✅
Página de catálogo completo con búsqueda, filtros y listado dinámico generado con JavaScript.

| Integrante | Sección | Archivo(s) |
|---|---|---|
| Christian Diaz | Navbar (fijo, con collapse móvil) | `catalogo.html` · `css/catalogo.css` |
| Juan Morales | Carousel / Portada (Bootstrap Carousel, 6 slides) | `catalogo.html` · `css/catalogo.css` |
| Xiomara Solis | Categorías (grid visual de 20 categorías) | `catalogo.html` · `css/catalogo.css` |
| Joel Saldaña | Búsqueda dinámica + Filtros sidebar | `js/catalogo/filtros.js` · `css/catalogo.css` |
| Maykol Calle | Lista de resultados + Paginación (generado con JS) | `js/catalogo/listado.js` · `css/catalogo.css` |
| Enrique Prada | Footer · Modelo de catálogo (POO) · Datos del catálogo | `js/catalogo/catalogo.js` · `js/catalogo/datos.js` |

**Guía de referencia completa:** `resultado/avance2/` — código terminado con comentarios para la sustentación.

**Temas de sustentación (Avance 2):**
- Objetos: ArrayList, Constructor, Métodos
- Estructuras de programación (if/else, for, map, filter, sort)
- Tipos de búsqueda (dinámica con `oninput` / estática con `onclick`)
- Lenguajes de programación (JavaScript ES6+)

---

### Avance 3 — `nosotros.html` ✅
Página institucional: misión/visión, objetivos, organigrama, equipo (CV cards con POO), gestión del proyecto y matriz RACI.

| Integrante | Sección | Archivo(s) |
|---|---|---|
| Christian Diaz | Navbar · Carousel banner · Información de la empresa | `nosotros.html` · `css/nosotros.css` |
| Juan Morales | Objetivos · Organigrama | `nosotros.html` · `css/nosotros.css` |
| Joel Saldaña | CV Cards del equipo (POO — clase `Integrante`) | `js/nosotros/equipo.js` · `css/nosotros.css` |
| Xiomara Solís | Gestión del Proyecto (herramientas + sprints) | `nosotros.html` · `css/nosotros.css` |
| Maykol Calle | Botón RACI + Modal Matriz de Responsabilidad | `js/nosotros/matriz.js` · `css/nosotros.css` |
| Enrique Prada | Navbar CSS · Estilos base + responsive · Footer | `nosotros.html` · `css/nosotros.css` |

**Guía de referencia completa:** `resultado/avance3/` — código terminado con comentarios para la sustentación.

**Temas de sustentación (Avance 3):**
- POO: clase `Integrante` con constructor, métodos y array `equipo[]`
- DOM: renderizado dinámico con `innerHTML` y `DOMContentLoaded`
- Eventos: modal con `addEventListener` (`keydown`, `click`)
- Patrón `e.target === this` para cerrar overlay con clic fuera

---

### Avance 4 (Final) — Carrito, Administración y Reportes 🚧
Último avance del proyecto. Se agregan las funcionalidades de cliente (contacto, carrito) y de administrador (login, gestión de catálogo, reportes), todo simulado con JavaScript sin base de datos real.

| Integrante | Parte | Página(s) | Usuario |
|---|---|---|---|
| Xiomara Solís | Contactos — formulario de opinión + Google Maps | `contactos.html` | Cliente |
| Christian Diaz | Login + Panel del administrador | `admin/login.html` · `admin/panel.html` | Administrador |
| Juan Morales | Gestión de catálogo (CRUD de productos/servicios) | `admin/gestion-catalogo.html` | Administrador |
| Joel Saldaña | Carrito de compras + modal de confirmación en catálogo | catálogo.html (modal) + página/modal propio | Cliente |
| Maykol Calle | Reportes — 2 gráficos (barras/circular) | `admin/reportes.html` | Administrador |
| Enrique Prada | Coordinación, arquitectura de páginas, wireframes guía y RACI | — | — |

**Wireframes guía (sin estilos, solo layout):** `ayuda/` — un boceto en escala de grises por pantalla nueva, para orientar el diseño sin imponer una implementación.

**Reglas clave del Avance 4:**
- El cliente **nunca** usa login — solo Contactos y Carrito, de acceso libre
- El administrador entra por `admin/login.html` y accede a `admin/panel.html`, donde se integran la gestión de catálogo y los reportes
- Eliminar un producto es opcional; se recomienda "dar de baja" (ocultar sin borrar)
- Descuentos de Fiestas Patrias: mínimo 3 tipos (ej. 10% / 20% / 30%)
- Exactamente 2 gráficos obligatorios (barras o circular) en Reportes
- JavaScript obligatorio para carrito y gráficos; sin base de datos — datos simulados en memoria o `localStorage`

---

## Estructura del Proyecto

```
frontend-app/
├── inicio.html              # Avance 1 — página principal
├── catalogo.html            # Avance 2 — catálogo de productos y servicios
├── nosotros.html            # Avance 3 — página institucional del equipo
├── contactos.html           # Avance 4 — formulario de contacto + mapa (Xiomara)
│
├── admin/                   # Avance 4 — subsistema del administrador
│   ├── login.html           # Acceso del administrador (Christian)
│   ├── panel.html           # Panel/dashboard del administrador (Christian)
│   ├── gestion-catalogo.html # CRUD de productos y servicios (Juan)
│   └── reportes.html        # Gráficos y reportes (Maykol)
│
├── css/
│   ├── base.css             # Variables globales y reset — NO MODIFICAR
│   ├── main.css             # Estilos de inicio.html
│   ├── inicio.css           # Estilos adicionales de inicio.html
│   ├── catalogo.css         # Estilos de catalogo.html
│   └── nosotros.css         # Estilos de nosotros.html
│
├── js/
│   ├── main.js              # Navbar scroll, menú móvil, animaciones
│   ├── catalogo/
│   │   ├── catalogo.js      # Modelo ItemCatalogo, Producto y Servicio — Enrique Prada
│   │   ├── datos.js         # Array listaCatalogo (120 ítems)
│   │   ├── listado.js       # Renderizado de cards y paginación — Maykol Calle
│   │   └── filtros.js       # Búsqueda y filtros — Joel Saldaña
│   └── nosotros/
│       ├── equipo.js        # Clase Integrante + array equipo[] — Joel Saldaña
│       └── matriz.js        # Modal Matriz RACI — Maykol Calle
│
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions — deploy automático a GitHub Pages
│
├── resultado/
│   ├── avance2/             # Código de referencia completo con comentarios
│   └── avance3/             # Código de referencia completo con comentarios
│
├── ayuda/                   # Wireframes guía del Avance 4 (escala de grises, sin estilos)
├── info/                    # Indicaciones y ejemplos del profesor
├── img/                     # Imágenes del sitio y catálogo
├── video/                   # Video demostrativo
└── docs/                    # Mapa de sitio y wireframe (solo consulta)
```

---

## Flujo de Trabajo — Avance 4

A diferencia de los avances anteriores, en este avance **no se entrega código de referencia para copiar y pegar**. Cada responsable recibe únicamente la especificación funcional (qué debe lograr la página) y un wireframe guía en `ayuda/` (solo layout, sin estilos ni código) — el diseño, las clases y la implementación quedan a criterio de cada integrante.

1. Revisa el wireframe de tu página en `ayuda/` y la historia de usuario asignada
2. Tu página ya existe vacía en la raíz o en `admin/` — empieza desde ahí
3. Crea tu propio CSS y JS en `css/` y `js/` (o subcarpeta si aplica)
4. Juan y Maykol: repliquen el navbar/menú del panel que define Christian en `admin/panel.html` dentro de sus propias páginas (`admin/gestion-catalogo.html` y `admin/reportes.html`) para que el panel se sienta consistente entre páginas
5. Pull Request hacia `main` cuando tu parte esté lista

---

## Despliegue — GitHub Pages

El sitio se despliega automáticamente a GitHub Pages en cada push a `main`.

**URL:** https://nxr-tech.github.io/frontend-app/

| Página | URL directa |
|---|---|
| Inicio | `/frontend-app/inicio.html` |
| Catálogo | `/frontend-app/catalogo.html` |
| Nosotros | `/frontend-app/nosotros.html` |
| Contactos | `/frontend-app/contactos.html` |
| Login (admin) | `/frontend-app/admin/login.html` |
| Panel (admin) | `/frontend-app/admin/panel.html` |
| Gestión de catálogo (admin) | `/frontend-app/admin/gestion-catalogo.html` |
| Reportes (admin) | `/frontend-app/admin/reportes.html` |

> **Configuración inicial (solo una vez):** en GitHub → Settings → Pages → Source → seleccionar **GitHub Actions**.

---

## Páginas del Sitio

| Página | Descripción |
|---|---|
| Inicio | Hero, productos, video, testimonios, noticias, CTA |
| Catálogo | Catálogo completo, categorías, búsqueda, filtros, listado, modal de carrito |
| Nosotros | Misión, visión, equipo, historia, valores, RACI |
| Contactos | Formulario de opinión + mapa de la sucursal (cliente) |
| Login (admin) | Acceso del administrador, validado con JavaScript |
| Panel (admin) | Dashboard del administrador, punto de entrada al sistema |
| Gestión de catálogo (admin) | CRUD de productos y servicios (añadir, modificar, buscar, dar de baja) |
| Reportes (admin) | 2 gráficos (barras/circular) sobre ventas y clientes |

---

*NXR TECH — Calidad y confianza en cada experiencia.*
