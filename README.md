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

### Avance 3 — `nosotros.html` 🚧
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

## Estructura del Proyecto

```
frontend-app/
├── inicio.html              # Avance 1 — página principal
├── catalogo.html            # Avance 2 — catálogo de productos y servicios
├── nosotros.html            # Avance 3 — página institucional del equipo
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
├── info/                    # Indicaciones y ejemplos del profesor
├── img/                     # Imágenes del sitio y catálogo
├── video/                   # Video demostrativo
└── docs/                    # Mapa de sitio y wireframe (solo consulta)
```

---

## Flujo de Trabajo — Avance 3

1. Consulta `resultado/avance3/` para ver el código de referencia completo
2. Abre `nosotros.html` y busca el placeholder con tu nombre (borde punteado)
3. Elimina el placeholder y pega tu sección desde `resultado/avance3/nosotros.html`
4. Copia tu bloque CSS a `css/nosotros.css` en la sección marcada con tu nombre
5. Si tienes JS propio, completa tu archivo en `js/nosotros/`
6. Pull Request hacia `main` cuando tu sección esté lista

---

## Despliegue — GitHub Pages

El sitio se despliega automáticamente a GitHub Pages en cada push a `main`.

**URL:** https://nxr-tech.github.io/frontend-app/

| Página | URL directa |
|---|---|
| Inicio | `/frontend-app/inicio.html` |
| Catálogo | `/frontend-app/catalogo.html` |
| Nosotros | `/frontend-app/nosotros.html` |

> **Configuración inicial (solo una vez):** en GitHub → Settings → Pages → Source → seleccionar **GitHub Actions**.

---

## Páginas del Sitio

| Página | Descripción |
|---|---|
| Inicio | Hero, productos, video, testimonios, noticias, CTA |
| Catálogo | Catálogo completo, categorías, búsqueda, filtros, listado |
| Nosotros | Misión, visión, equipo, historia, valores, RACI |
| Contactos | Formulario, mapa, WhatsApp, soporte, FAQ |

---

*NXR TECH — Calidad y confianza en cada experiencia.*
