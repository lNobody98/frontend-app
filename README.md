# NXR TECH

> Innovación Tecnológica Para Tu Futuro

NXR TECH es una tienda de soluciones tecnológicas completas: teléfonos, computadoras, accesorios y soporte técnico especializado.

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

### Avance 2 — `catalogo.html` 🚧
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

## Estructura del Proyecto

```
frontend-app/
├── inicio.html              # Avance 1 — página principal
├── catalogo.html            # Avance 2 — catálogo de productos y servicios
│
├── css/
│   ├── base.css             # Variables globales y reset — NO MODIFICAR
│   ├── main.css             # Estilos de inicio.html
│   └── catalogo.css         # Estilos de catalogo.html
│
├── js/
│   ├── main.js              # Navbar scroll, menú móvil, animaciones
│   └── catalogo/
│       ├── catalogo.js      # Modelo ItemCatalogo, Producto y Servicio — Enrique Prada
│       ├── datos.js         # Array listaCatalogo (120 ítems)
│       ├── listado.js       # Renderizado de cards y paginación — Maykol Calle
│       └── filtros.js       # Búsqueda y filtros — Joel Saldaña
│
├── resultado/
│   └── avance2/             # Código de referencia completo con comentarios
│
├── info/
│   └── avance2/             # Indicaciones y ejemplos del profesor
│
├── img/                     # Imágenes del sitio y catálogo
├── video/                   # Video demostrativo
└── docs/                    # Mapa de sitio y wireframe (solo consulta)
```

---

## Flujo de Trabajo — Avance 2

1. Consulta `resultado/avance2/` para ver el código de referencia completo
2. Cada integrante trabaja en `catalogo.html`, `css/catalogo.css` y su archivo JS
3. Los placeholders en el HTML indican dónde va cada sección — eliminarlos al empezar
4. Pull Request hacia `main` cuando la sección esté lista

---

## Páginas del Sitio

| Página | Descripción |
|---|---|
| Inicio | Hero, productos, video, testimonios, noticias, CTA |
| Catálogo | Catálogo completo, categorías, búsqueda, filtros, listado |
| Nosotros | Misión, visión, equipo, historia, valores |
| Contactos | Formulario, mapa, WhatsApp, soporte, FAQ |

---

*NXR TECH — Calidad y confianza en cada experiencia.*
