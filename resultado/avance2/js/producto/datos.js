// ============================================================
//  datos.js — NXR TECH
//  RESPONSABLE: Juan Morales  (array de Productos — 60 ítems)
//               Xiomara Solis (array de Servicios  — 60 ítems)
//
//  ── TIPO DE DATO ────────────────────────────────────────────
//  ArrayList — array de objetos en JavaScript.
//  Cada elemento es una instancia de la clase Producto (POO),
//  creada con el operador `new` y el constructor de la clase.
//  El array se llama listaProductos y contiene 120 instancias.
//
//  ── QUÉ HACE ESTE ARCHIVO ───────────────────────────────────
//  Define el array global listaProductos con los 120 ítems del
//  catálogo: 60 Productos + 60 Servicios, agrupados en
//  10 subcategorías cada uno. Por convención en e-commerce,
//  "Producto" abarca ambos — la propiedad `tipo` los distingue.
//  filtros.js y listado.js consumen este array para filtrar y
//  renderizar el catálogo dinámicamente.
//
//  ── LENGUAJE ────────────────────────────────────────────────
//  JavaScript ES6+ — operador new, template literals, array literal
//
//  ── CONCEPTOS APLICADOS ─────────────────────────────────────
//  - ArrayList (array)     → estructura de datos que agrupa objetos
//  - Constructor           → new Producto(...) crea cada instancia
//  - Instanciación (POO)   → cada línea del array instancia la clase
//
//  VARIABLE GLOBAL EXPORTADA:
//  - listaProductos  → array accesible desde cualquier JS cargado
//                      después de este archivo en el HTML.
//
//  CÓMO AGREGAR UN NUEVO ÍTEM:
//  Copia una línea existente y ajusta los 8 argumentos:
//
//    new Producto(
//      id,           → número único (sigue la secuencia, nunca repetir)
//      nombre,       → nombre comercial  (ej: "MacBook Pro M4")
//      tipo,         → "Producto" | "Servicio"  ← EXACTAMENTE así, con mayúscula
//      subcategoria, → ver lista de subcategorías válidas más abajo
//      precio,       → entero en soles (ej: 3499). Usar 0 para "Gratis"
//      marca,        → fabricante o proveedor  (ej: "Apple", "NXR TECH")
//      descripcion,  → texto corto para la card (máx. 2 líneas recomendado)
//      imagen        → ruta relativa a la imagen.
//    )
//
//  ⚠️  LA RUTA DE IMAGEN DEPENDE DE DÓNDE ESTÁ ESTE ARCHIVO:
//
//      Este archivo está en:
//        resultado/avance2/js/producto/datos.js
//      Las imágenes están en:
//        img/catalogo/  (carpeta raíz del proyecto)
//      Por eso la ruta sube 4 niveles con "../../":
//        "../../img/catalogo/productos/p-XX.jpg"
//        "../../img/catalogo/servicios/s-XX.jpg"
//
//      En el archivo principal  js/producto/datos.js  la ruta es:
//        "img/catalogo/productos/p-XX.jpg"   (sin los "../../")
//      porque ese archivo está en la raíz del proyecto.
//
//  SUBCATEGORÍAS VÁLIDAS:
//  El valor debe coincidir EXACTAMENTE (mayúsculas y tildes incluidas)
//  con las opciones del <select> en productos.html. Si no coincide,
//  el filtro por subcategoría no mostrará ese ítem.
//
//  Tipo "Producto":
//    "Teléfonos"   | "Laptops"       | "Gaming"      | "Accesorios"
//    "Componentes" | "Monitores"     | "Tablets"     | "Smart TV"
//    "Impresoras"  | "Wearables"
//
//  Tipo "Servicio":
//    "Soporte"         | "Mantenimiento"  | "Reparación"      | "Instalación"
//    "Asesoría"        | "Ciberseguridad" | "Diseño Digital"  | "Networking"
//    "Cloud & Backup"  | "Desarrollo Web"
//
//  DEPENDENCIAS (este archivo debe cargarse DESPUÉS de producto.js):
//  - producto.js → define ItemCatalogo, Producto y Servicio
// ============================================================

const listaProductos = [

    // ════════════════════════════════════════════════════════
    //  PRODUCTOS (60)
    // ════════════════════════════════════════════════════════

    // ── Teléfonos (6) ───────────────────────────────────────
    new Producto(1,  "iPhone 16 Pro",              "Producto","Teléfonos",  5499,"Apple",    "Pantalla Super Retina XDR 6.3\", chip A18 Pro, cámara 48 MP zoom 5x.",              "../../img/catalogo/productos/p-01.jpg"),
    new Producto(2,  "Samsung Galaxy S25 Ultra",   "Producto","Teléfonos",  4899,"Samsung",  "Dynamic AMOLED 6.9\", S Pen integrado, cámara 200 MP.",                             "../../img/catalogo/productos/p-02.jpg"),
    new Producto(3,  "Xiaomi 15 Pro",              "Producto","Teléfonos",  3299,"Xiaomi",   "LTPO AMOLED 6.73\", Snapdragon 8 Elite, batería 6100 mAh carga 90W.",               "../../img/catalogo/productos/p-03.jpg"),
    new Producto(4,  "Google Pixel 9 Pro",         "Producto","Teléfonos",  4199,"Google",   "Tensor G4, cámara 50 MP con IA avanzada, pantalla LTPO 6.3\".",                     "../../img/catalogo/productos/p-16.jpg"),
    new Producto(5,  "OnePlus 13",                 "Producto","Teléfonos",  2999,"OnePlus",  "Snapdragon 8 Elite, carga Hasselblad 50 MP, batería 6000 mAh carga 100W.",          "../../img/catalogo/productos/p-17.jpg"),
    new Producto(6,  "Motorola Edge 50 Ultra",     "Producto","Teléfonos",  2499,"Motorola", "POLED 6.7\" 165 Hz, cámara 50 MP OIS, IP68, carga inalámbrica 50W.",               "../../img/catalogo/productos/p-18.jpg"),

    // ── Laptops (8) ─────────────────────────────────────────
    new Producto(7,  "MacBook Air M4",             "Producto","Laptops",    5999,"Apple",    "Chip M4, 16 GB RAM, SSD 512 GB, pantalla Liquid Retina 13.6\".",                    "../../img/catalogo/productos/p-04.jpg"),
    new Producto(8,  "Dell XPS 15",                "Producto","Laptops",    7299,"Dell",     "Intel Core Ultra 9, 32 GB RAM, SSD 1 TB, pantalla OLED 3.5K.",                     "../../img/catalogo/productos/p-05.jpg"),
    new Producto(9,  "ASUS ROG Zephyrus G16",      "Producto","Laptops",    8499,"ASUS",     "Ryzen 9 + RTX 4090, 32 GB RAM, pantalla QHD+ 240 Hz.",                             "../../img/catalogo/productos/p-06.jpg"),
    new Producto(10, "HP Spectre x360 14",         "Producto","Laptops",    6799,"HP",       "Intel Core Ultra 7, 16 GB RAM, OLED táctil 2.8K, diseño 2 en 1.",                  "../../img/catalogo/productos/p-19.jpg"),
    new Producto(11, "Lenovo ThinkPad X1 Carbon",  "Producto","Laptops",    7499,"Lenovo",   "Intel Core Ultra 7, 32 GB RAM, SSD 1 TB, peso 1.12 kg, certificación MIL-SPEC.",   "../../img/catalogo/productos/p-20.jpg"),
    new Producto(12, "Microsoft Surface Laptop 6", "Producto","Laptops",    5499,"Microsoft","Intel Core Ultra 5, 16 GB RAM, pantalla PixelSense 13.5\", autonomía 14 h.",       "../../img/catalogo/productos/p-21.jpg"),
    new Producto(13, "Acer Swift 14 AI",           "Producto","Laptops",    4299,"Acer",     "Intel Core Ultra 5, 16 GB RAM, OLED 14\" 2.8K, peso 1.36 kg.",                     "../../img/catalogo/productos/p-22.jpg"),
    new Producto(14, "Samsung Galaxy Book 5 Pro",  "Producto","Laptops",    5999,"Samsung",  "Intel Core Ultra 7, AMOLED 16\" 3K, 16 GB RAM, S Pen incluido.",                   "../../img/catalogo/productos/p-23.jpg"),

    // ── Gaming (7) ──────────────────────────────────────────
    new Producto(15, "PlayStation 5 Pro",          "Producto","Gaming",     3599,"Sony",     "Trazado de rayos 4K a 60 fps, SSD ultrarrápido, DualSense mejorado.",               "../../img/catalogo/productos/p-07.jpg"),
    new Producto(16, "Xbox Series X",              "Producto","Gaming",     2999,"Microsoft","4K 120 fps, 1 TB SSD NVMe, retrocompatibilidad total con Xbox One.",                "../../img/catalogo/productos/p-08.jpg"),
    new Producto(17, "Razer Blade 16",             "Producto","Gaming",    11999,"Razer",    "Intel i9 + RTX 4090, pantalla QHD+ OLED 240 Hz, teclado mecánico.",                "../../img/catalogo/productos/p-09.jpg"),
    new Producto(18, "Nintendo Switch 2",          "Producto","Gaming",     2299,"Nintendo", "Pantalla LCD 7.9\", Joy-Con magnéticos, compatible con juegos de Switch 1.",        "../../img/catalogo/productos/p-24.jpg"),
    new Producto(19, "Steam Deck OLED",            "Producto","Gaming",     2199,"Valve",    "OLED 7.4\" HDR, AMD APU, 1 TB SSD, acceso completo a biblioteca Steam.",            "../../img/catalogo/productos/p-25.jpg"),
    new Producto(20, "ASUS ROG Ally X",            "Producto","Gaming",     2799,"ASUS",     "AMD Ryzen Z1 Extreme, pantalla 7\" 120 Hz FHD, 24 GB RAM LPDDR5.",                 "../../img/catalogo/productos/p-26.jpg"),
    new Producto(21, "Lenovo Legion Go",           "Producto","Gaming",     2499,"Lenovo",   "AMD Ryzen Z1 Extreme, pantalla 8.8\" QHD+ 144 Hz, controles desmontables.",        "../../img/catalogo/productos/p-27.jpg"),

    // ── Accesorios (7) ──────────────────────────────────────
    new Producto(22, "AirPods Pro 3",              "Producto","Accesorios",   999,"Apple",   "Cancelación de ruido adaptativa, sonido espacial, batería total 30 h.",             "../../img/catalogo/productos/p-10.jpg"),
    new Producto(23, "Logitech MX Master 3S",      "Producto","Accesorios",   499,"Logitech","Mouse 8000 DPI, scroll MagSpeed silencioso, conexión multi-dispositivo.",           "../../img/catalogo/productos/p-11.jpg"),
    new Producto(24, "Razer BlackWidow V4",        "Producto","Accesorios",   799,"Razer",   "Teclado mecánico Green Switches, Chroma RGB, reposamuñecas magnético.",             "../../img/catalogo/productos/p-12.jpg"),
    new Producto(25, "Sony WH-1000XM6",            "Producto","Accesorios",  1199,"Sony",    "ANC líder en la industria, 30 h batería, plegable, estuche incluido.",              "../../img/catalogo/productos/p-28.jpg"),
    new Producto(26, "Samsung Galaxy Buds 3 Pro",  "Producto","Accesorios",   599,"Samsung", "ANC adaptativo, sonido Dolby Atmos, IP57, 6 h + 18 h con estuche.",                "../../img/catalogo/productos/p-29.jpg"),
    new Producto(27, "HyperX Cloud III",           "Producto","Accesorios",   549,"HyperX",  "Auricular gaming, drivers 53 mm, micrófono con cancelación de ruido.",              "../../img/catalogo/productos/p-30.jpg"),
    new Producto(28, "Corsair K100 RGB",           "Producto","Accesorios",   899,"Corsair", "Teclado mecánico OPX, 44 zonas RGB, rueda iCUE AXIS, aluminio.",                   "../../img/catalogo/productos/p-31.jpg"),

    // ── Componentes (8) ─────────────────────────────────────
    new Producto(29, "NVIDIA RTX 5090",            "Producto","Componentes",12999,"NVIDIA",  "32 GB GDDR7, ray tracing extremo, DLSS 4, la GPU más potente.",                    "../../img/catalogo/productos/p-13.jpg"),
    new Producto(30, "AMD Ryzen 9 9950X",          "Producto","Componentes", 2499,"AMD",     "16 núcleos 32 hilos, 5.7 GHz boost, arquitectura Zen 5.",                          "../../img/catalogo/productos/p-14.jpg"),
    new Producto(31, "Samsung 990 Pro 2 TB",       "Producto","Componentes",  899,"Samsung", "SSD NVMe PCIe 5.0, lectura 7450 MB/s, para gaming y edición.",                    "../../img/catalogo/productos/p-15.jpg"),
    new Producto(32, "Intel Core Ultra 9 285K",    "Producto","Componentes", 2199,"Intel",   "24 núcleos Arrow Lake, compatible LGA1851, TDP 125W.",                             "../../img/catalogo/productos/p-32.jpg"),
    new Producto(33, "Corsair Vengeance DDR5 64GB","Producto","Componentes",  799,"Corsair", "DDR5 6400 MHz CL32, kit 2×32 GB, compatible con Intel XMP 3.0.",                   "../../img/catalogo/productos/p-33.jpg"),
    new Producto(34, "ASUS ROG Strix B850-F",      "Producto","Componentes", 1299,"ASUS",    "AM5, DDR5, PCIe 5.0, WiFi 7, iluminación Aura Sync RGB.",                          "../../img/catalogo/productos/p-34.jpg"),
    new Producto(35, "Cooler Master MasterLiquid ML360R","Producto","Componentes",699,"Cooler Master","Refrigeración líquida AIO 360mm, 3 ventiladores RGB, compatible AM5/LGA1851.", "../../img/catalogo/productos/p-35.jpg"),
    new Producto(36, "Seasonic Focus GX 1000W",    "Producto","Componentes",  899,"Seasonic","Fuente 80 Plus Gold, cableado modular, certificada ATX 3.0, silenciosa.",          "../../img/catalogo/productos/p-36.jpg"),

    // ── Monitores (6) ───────────────────────────────────────
    new Producto(37, "LG UltraGear 27\" 4K 144Hz","Producto","Monitores",  2499,"LG",       "IPS Nano Color 4K, 144 Hz, 1ms GtG, HDMI 2.1, DisplayHDR 600.",                    "../../img/catalogo/productos/monitor.jpg"),
    new Producto(38, "Samsung Odyssey Neo G9",     "Producto","Monitores",  6999,"Samsung",  "QLED curvo 49\", 240 Hz, 1ms, resolución 5120×1440, HDR2000.",                     "../../img/catalogo/productos/p-37.jpg"),
    new Producto(39, "Dell UltraSharp 32\" 4K",   "Producto","Monitores",  3499,"Dell",     "IPS 4K 60 Hz, cobertura 98% DCI-P3, USB-C 90W, panel de colores profesional.",     "../../img/catalogo/productos/p-38.jpg"),
    new Producto(40, "BenQ MOBIUZ EX321UX",       "Producto","Monitores",  3299,"BenQ",     "IPS 4K 144 Hz, HDMI 2.1, FreeSync Premium Pro, parlantes 2.1 integrados.",         "../../img/catalogo/productos/p-39.jpg"),
    new Producto(41, "ASUS ProArt PA32UCR-K",     "Producto","Monitores",  8999,"ASUS",     "4K OLED 120 Hz, cobertura 99% DCI-P3, hardware calibration, Thunderbolt 4.",       "../../img/catalogo/productos/p-40.jpg"),
    new Producto(42, "MSI MAG 341CQP",            "Producto","Monitores",  2199,"MSI",      "VA curvo 34\" UWQHD, 165 Hz, 0.5ms MPRT, AMD FreeSync Premium.",                   "../../img/catalogo/productos/p-41.jpg"),

    // ── Tablets (6) ─────────────────────────────────────────
    new Producto(43, "iPad Pro M4 13\"",           "Producto","Tablets",    5999,"Apple",    "Chip M4, pantalla OLED Ultra Retina XDR, Apple Pencil Pro, Face ID.",               "../../img/catalogo/productos/tablet.jpg"),
    new Producto(44, "Samsung Galaxy Tab S10 Ultra","Producto","Tablets",   4999,"Samsung",  "AMOLED 14.6\" 120 Hz, Snapdragon 8 Gen 3, S Pen incluido, IP68.",                  "../../img/catalogo/productos/p-42.jpg"),
    new Producto(45, "Microsoft Surface Pro 11",   "Producto","Tablets",    5499,"Microsoft","Snapdragon X Elite, pantalla 13\" 120 Hz, teclado desmontable opcional.",           "../../img/catalogo/productos/p-43.jpg"),
    new Producto(46, "Lenovo Tab P12 Pro",         "Producto","Tablets",    2999,"Lenovo",   "AMOLED 12.6\" 120 Hz, Snapdragon 870, 8 GB RAM, Dolby Atmos quadrante.",           "../../img/catalogo/productos/p-44.jpg"),
    new Producto(47, "Xiaomi Pad 7 Pro",           "Producto","Tablets",    1899,"Xiaomi",   "IPS 144Hz 11.2\", Snapdragon 8s Gen 3, carga 67W, 8 GB RAM.",                     "../../img/catalogo/productos/p-45.jpg"),
    new Producto(48, "ASUS ROG Flow Z13",          "Producto","Tablets",    6499,"ASUS",     "Intel Core i9 + RTX 4060, tablet gaming 13\", 165 Hz, XG Mobile compatible.",      "../../img/catalogo/productos/p-46.jpg"),

    // ── Smart TV (6) ────────────────────────────────────────
    new Producto(49, "LG OLED C4 55\"",           "Producto","Smart TV",   4299,"LG",       "OLED evo 4K 120 Hz, G-Sync, FreeSync, webOS 24, Dolby Vision IQ.",                 "../../img/catalogo/productos/smarttv.jpg"),
    new Producto(50, "Samsung Neo QLED QN90D 65\"","Producto","Smart TV",   5999,"Samsung",  "Mini LED 4K 144 Hz, Tizen OS, Neural Quantum Processor 4K, HDR2000.",              "../../img/catalogo/productos/p-47.jpg"),
    new Producto(51, "Sony Bravia XR A95L 65\"",  "Producto","Smart TV",   7499,"Sony",     "QD-OLED 4K 120 Hz, Google TV, Cognitive Processor XR, Acoustic Surface.",         "../../img/catalogo/productos/p-48.jpg"),
    new Producto(52, "TCL QLED C845 75\"",        "Producto","Smart TV",   2999,"TCL",      "QLED 4K Mini LED 144 Hz, Google TV, Dolby Vision, altavoces ONKYO 2.1.",           "../../img/catalogo/productos/p-49.jpg"),
    new Producto(53, "Hisense ULED U8N 65\"",     "Producto","Smart TV",   3499,"Hisense",  "Mini LED 4K 144 Hz, IMAX Enhanced, Dolby Atmos, Google TV, 1500 nits.",            "../../img/catalogo/productos/p-50.jpg"),
    new Producto(54, "LG QNED99 86\"",            "Producto","Smart TV",   8999,"LG",       "QNED 8K 120 Hz, α9 Gen7 AI Processor, webOS 24, compatible con ATSC 3.0.",         "../../img/catalogo/productos/p-51.jpg"),

    // ── Impresoras (2) ──────────────────────────────────────
    new Producto(55, "HP LaserJet Pro M404dn",    "Producto","Impresoras",  1299,"HP",       "Láser monocromo, 40 ppm, dúplex automático, USB y red Ethernet.",                  "../../img/catalogo/productos/impresora.jpg"),
    new Producto(56, "Epson EcoTank ET-4850",     "Producto","Impresoras",   999,"Epson",    "Inyección de tinta 4 en 1, depósito de tinta sin cartuchos, WiFi, ADF.",           "../../img/catalogo/productos/p-52.jpg"),

    // ── Wearables (4) ───────────────────────────────────────
    new Producto(57, "Apple Watch Ultra 2",       "Producto","Wearables",   3299,"Apple",    "Titanio, GPS de doble frecuencia, buceo 100 m, batería 60 h.",                     "../../img/catalogo/productos/wearable.jpg"),
    new Producto(58, "Samsung Galaxy Watch 7",    "Producto","Wearables",    999,"Samsung",  "AMOLED 1.5\", BioActive Sensor 3-en-1, autonomía 40 h, WearOS.",                  "../../img/catalogo/productos/p-53.jpg"),
    new Producto(59, "Garmin Fénix 8",            "Producto","Wearables",   3999,"Garmin",   "AMOLED 1.4\", GPS multibanda, 29 días de batería, altímetro barométrico.",         "../../img/catalogo/productos/p-54.jpg"),
    new Producto(60, "Fitbit Charge 6",           "Producto","Wearables",    599,"Google",   "ECG integrado, GPS, SpO2, Google Maps y Wallet, 7 días de batería.",               "../../img/catalogo/productos/p-55.jpg"),

    // ════════════════════════════════════════════════════════
    //  SERVICIOS (60)
    // ════════════════════════════════════════════════════════

    // ── Soporte (6) ─────────────────────────────────────────
    new Producto(61,  "Soporte Técnico Básico",      "Servicio","Soporte",  150,"NXR TECH","Diagnóstico y resolución de problemas de software y hardware en el local.",         "../../img/catalogo/servicios/s-01.jpg"),
    new Producto(62,  "Soporte Remoto 24/7",          "Servicio","Soporte",  199,"NXR TECH","Asistencia técnica remota las 24 horas del día, los 7 días a la semana.",           "../../img/catalogo/servicios/s-02.jpg"),
    new Producto(63,  "Diagnóstico Gratuito",         "Servicio","Soporte",    0,"NXR TECH","Evaluación inicial completa de tu equipo sin costo. Solo pagas si reparas.",        "../../img/catalogo/servicios/s-03.jpg"),
    new Producto(64,  "Soporte Premium Mensual",      "Servicio","Soporte",  299,"NXR TECH","Plan mensual con prioridad de atención, visitas ilimitadas y descuentos.",          "../../img/catalogo/servicios/s-16.jpg"),
    new Producto(65,  "Soporte Empresarial",          "Servicio","Soporte",  899,"NXR TECH","Contrato corporativo para empresas: SLA 4 h, técnico asignado, informes.",          "../../img/catalogo/servicios/s-17.jpg"),
    new Producto(66,  "Soporte en Domicilio",         "Servicio","Soporte",  180,"NXR TECH","Visita técnica a tu hogar u oficina para resolver problemas in situ.",               "../../img/catalogo/servicios/s-18.jpg"),

    // ── Mantenimiento (6) ───────────────────────────────────
    new Producto(67,  "Limpieza Interna de Laptop",   "Servicio","Mantenimiento",  80,"NXR TECH","Limpieza profunda de componentes internos, pasta térmica y ventiladores.",     "../../img/catalogo/servicios/s-04.jpg"),
    new Producto(68,  "Mantenimiento Preventivo",     "Servicio","Mantenimiento", 120,"NXR TECH","Revisión periódica completa: sistema, hardware, drivers y actualizaciones.",   "../../img/catalogo/servicios/s-05.jpg"),
    new Producto(69,  "Cambio de Pasta Térmica",      "Servicio","Mantenimiento",  60,"NXR TECH","Reemplazo de pasta térmica para reducir temperaturas y mejorar rendimiento.",  "../../img/catalogo/servicios/s-06.jpg"),
    new Producto(70,  "Revisión de Batería",          "Servicio","Mantenimiento",  70,"NXR TECH","Análisis de ciclos de carga y diagnóstico de batería en laptops y móviles.",   "../../img/catalogo/servicios/s-19.jpg"),
    new Producto(71,  "Actualización de Firmware",    "Servicio","Mantenimiento",  90,"NXR TECH","Actualización de BIOS, firmware de SSD y drivers críticos de seguridad.",      "../../img/catalogo/servicios/s-20.jpg"),
    new Producto(72,  "Mantenimiento PC Escritorio",  "Servicio","Mantenimiento", 100,"NXR TECH","Limpieza completa, revisión de conexiones y optimización de PC de escritorio.", "../../img/catalogo/servicios/s-21.jpg"),

    // ── Reparación (6) ──────────────────────────────────────
    new Producto(73,  "Cambio de Pantalla",           "Servicio","Reparación",  250,"NXR TECH","Reemplazo de pantalla rota o con fallas para laptops y smartphones.",            "../../img/catalogo/servicios/s-07.jpg"),
    new Producto(74,  "Reparación de Teclado",        "Servicio","Reparación",  180,"NXR TECH","Reparación o sustitución de teclado dañado en laptops de cualquier marca.",      "../../img/catalogo/servicios/s-08.jpg"),
    new Producto(75,  "Recuperación de Datos",        "Servicio","Reparación",  350,"NXR TECH","Recuperamos archivos de discos dañados, formateados o con fallas críticas.",     "../../img/catalogo/servicios/s-09.jpg"),
    new Producto(76,  "Cambio de Batería",            "Servicio","Reparación",  150,"NXR TECH","Sustitución de batería degradada en laptops, smartphones y tablets.",             "../../img/catalogo/servicios/s-22.jpg"),
    new Producto(77,  "Reparación de Puerto USB/C",   "Servicio","Reparación",  200,"NXR TECH","Soldadura y reemplazo de puertos USB, USB-C y HDMI dañados.",                    "../../img/catalogo/servicios/s-23.jpg"),
    new Producto(78,  "Reparación de Placa Madre",    "Servicio","Reparación",  450,"NXR TECH","Diagnóstico y reparación a nivel de componentes en placa madre.",                 "../../img/catalogo/servicios/s-24.jpg"),

    // ── Instalación (6) ─────────────────────────────────────
    new Producto(79,  "Instalación de Sistema Operativo","Servicio","Instalación",  90,"NXR TECH","Instalación y configuración de Windows, macOS o Linux con drivers.",          "../../img/catalogo/servicios/s-10.jpg"),
    new Producto(80,  "Configuración de Red",         "Servicio","Instalación",  120,"NXR TECH","Configuración de redes LAN/WiFi, routers, switches y puntos de acceso.",        "../../img/catalogo/servicios/s-11.jpg"),
    new Producto(81,  "Instalación de Software",      "Servicio","Instalación",   70,"NXR TECH","Instalación de paquetes de software para trabajo o estudio.",                   "../../img/catalogo/servicios/s-12.jpg"),
    new Producto(82,  "Migración de Datos",           "Servicio","Instalación",  160,"NXR TECH","Traslado seguro de archivos, aplicaciones y configuraciones entre equipos.",    "../../img/catalogo/servicios/s-25.jpg"),
    new Producto(83,  "Instalación de Antivirus",     "Servicio","Instalación",   80,"NXR TECH","Configuración de solución antivirus y antimalware con monitoreo activo.",        "../../img/catalogo/servicios/s-26.jpg"),
    new Producto(84,  "Instalación de Cámaras IP",    "Servicio","Instalación",  350,"NXR TECH","Instalación y configuración de sistema de cámaras de seguridad IP.",            "../../img/catalogo/servicios/s-27.jpg"),

    // ── Asesoría (6) ────────────────────────────────────────
    new Producto(85,  "Asesoría de Compra",           "Servicio","Asesoría",   50,"NXR TECH","Te ayudamos a elegir el equipo ideal según tu presupuesto y necesidades.",         "../../img/catalogo/servicios/s-13.jpg"),
    new Producto(86,  "Consultoría TI para Empresas", "Servicio","Asesoría",  400,"NXR TECH","Evaluación y optimización de infraestructura tecnológica para empresas.",          "../../img/catalogo/servicios/s-14.jpg"),
    new Producto(87,  "Capacitación Técnica",         "Servicio","Asesoría",  200,"NXR TECH","Cursos básicos de uso, mantenimiento y seguridad informática.",                    "../../img/catalogo/servicios/s-15.jpg"),
    new Producto(88,  "Asesoría de Seguridad",        "Servicio","Asesoría",  180,"NXR TECH","Evaluación de riesgos y recomendaciones de seguridad para tu entorno digital.",    "../../img/catalogo/servicios/s-28.jpg"),
    new Producto(89,  "Plan Tecnológico Empresarial", "Servicio","Asesoría",  600,"NXR TECH","Diseño de hoja de ruta tecnológica alineada a los objetivos del negocio.",         "../../img/catalogo/servicios/s-29.jpg"),
    new Producto(90,  "Evaluación de Hardware",       "Servicio","Asesoría",  120,"NXR TECH","Análisis del estado y vida útil de todos los equipos de tu empresa.",              "../../img/catalogo/servicios/s-30.jpg"),

    // ── Ciberseguridad (6) ──────────────────────────────────
    new Producto(91,  "Análisis de Vulnerabilidades", "Servicio","Ciberseguridad",  500,"NXR TECH","Escaneo completo de la red y sistemas en busca de vulnerabilidades activas.",   "../../img/catalogo/servicios/ciberseg.jpg"),
    new Producto(92,  "Instalación de Firewall",      "Servicio","Ciberseguridad",  350,"NXR TECH","Configuración de firewall perimetral para protección avanzada de la red.",      "../../img/catalogo/servicios/s-31.jpg"),
    new Producto(93,  "Auditoría de Seguridad",       "Servicio","Ciberseguridad",  800,"NXR TECH","Revisión integral de políticas, controles y accesos de seguridad informática.",  "../../img/catalogo/servicios/s-32.jpg"),
    new Producto(94,  "Pen Testing Básico",           "Servicio","Ciberseguridad", 1200,"NXR TECH","Prueba de penetración ética para detectar brechas antes que los atacantes.",     "../../img/catalogo/servicios/s-33.jpg"),
    new Producto(95,  "Configuración VPN Empresarial","Servicio","Ciberseguridad",  450,"NXR TECH","Implementación de VPN segura para trabajo remoto con acceso cifrado.",           "../../img/catalogo/servicios/s-34.jpg"),
    new Producto(96,  "Capacitación Anti-Phishing",   "Servicio","Ciberseguridad",  300,"NXR TECH","Taller para equipos de trabajo sobre amenazas de phishing y buenas prácticas.",  "../../img/catalogo/servicios/s-35.jpg"),

    // ── Diseño Digital (6) ──────────────────────────────────
    new Producto(97,  "Diseño de Logo",               "Servicio","Diseño Digital",  400,"NXR TECH","Creación de logotipo profesional con 3 propuestas y archivos editables.",        "../../img/catalogo/servicios/diseno.jpg"),
    new Producto(98,  "Diseño Web Básico",             "Servicio","Diseño Digital",  800,"NXR TECH","Landing page de 1 página, responsive, con formulario de contacto.",              "../../img/catalogo/servicios/s-36.jpg"),
    new Producto(99,  "Diseño de Presentaciones",      "Servicio","Diseño Digital",  250,"NXR TECH","Presentación corporativa en PowerPoint o Google Slides, máximo 20 diapositivas.", "../../img/catalogo/servicios/s-37.jpg"),
    new Producto(100, "Diseño de Banners Digitales",   "Servicio","Diseño Digital",  180,"NXR TECH","Pack de 5 banners para redes sociales en formato estático o animado.",           "../../img/catalogo/servicios/s-38.jpg"),
    new Producto(101, "Identidad Visual Corporativa",  "Servicio","Diseño Digital", 1200,"NXR TECH","Manual de marca completo: logo, colores, tipografías, aplicaciones.",             "../../img/catalogo/servicios/s-39.jpg"),
    new Producto(102, "Edición de Video Básica",       "Servicio","Diseño Digital",  350,"NXR TECH","Edición de video corporativo o publicitario de hasta 2 minutos.",                "../../img/catalogo/servicios/s-40.jpg"),

    // ── Networking (6) ──────────────────────────────────────
    new Producto(103, "Cableado Estructurado",         "Servicio","Networking",  1500,"NXR TECH","Instalación de cableado de red Cat6/Cat6A para oficinas y empresas.",             "../../img/catalogo/servicios/networking.jpg"),
    new Producto(104, "Configuración de Switches",     "Servicio","Networking",   400,"NXR TECH","Configuración de switches administrables con VLANs y QoS.",                       "../../img/catalogo/servicios/s-41.jpg"),
    new Producto(105, "Monitoreo de Red",              "Servicio","Networking",   350,"NXR TECH","Implementación de solución de monitoreo 24/7 con alertas y reportes.",             "../../img/catalogo/servicios/s-42.jpg"),
    new Producto(106, "WiFi Empresarial",              "Servicio","Networking",   800,"NXR TECH","Diseño e instalación de red WiFi empresarial con puntos de acceso gestionados.",   "../../img/catalogo/servicios/s-43.jpg"),
    new Producto(107, "Segmentación de Red",           "Servicio","Networking",   500,"NXR TECH","División de la red en segmentos seguros mediante VLANs y ACLs.",                  "../../img/catalogo/servicios/s-44.jpg"),
    new Producto(108, "Auditoría de Red",              "Servicio","Networking",   600,"NXR TECH","Análisis completo del rendimiento, seguridad y topología de la red.",              "../../img/catalogo/servicios/s-45.jpg"),

    // ── Cloud & Backup (6) ──────────────────────────────────
    new Producto(109, "Migración a la Nube",           "Servicio","Cloud & Backup", 1200,"NXR TECH","Traslado de servidores y datos on-premise a plataformas cloud (AWS, Azure, GCP).", "../../img/catalogo/servicios/cloud.jpg"),
    new Producto(110, "Backup Automático",             "Servicio","Cloud & Backup",  300,"NXR TECH","Configuración de copias de seguridad automáticas en la nube con retención 30 días.", "../../img/catalogo/servicios/s-46.jpg"),
    new Producto(111, "Sincronización de Dispositivos","Servicio","Cloud & Backup",  180,"NXR TECH","Configuración de sincronización entre equipos y servicios en la nube.",           "../../img/catalogo/servicios/s-47.jpg"),
    new Producto(112, "Disaster Recovery",             "Servicio","Cloud & Backup", 1800,"NXR TECH","Plan de recuperación ante desastres con RTO y RPO definidos.",                   "../../img/catalogo/servicios/s-48.jpg"),
    new Producto(113, "Almacenamiento en la Nube",     "Servicio","Cloud & Backup",  150,"NXR TECH","Configuración y gestión de almacenamiento en la nube para equipos de trabajo.",  "../../img/catalogo/servicios/s-49.jpg"),
    new Producto(114, "Monitoreo de Infraestructura",  "Servicio","Cloud & Backup",  500,"NXR TECH","Supervisión continua de servidores y servicios cloud con alertas en tiempo real.", "../../img/catalogo/servicios/s-50.jpg"),

    // ── Desarrollo Web (6) ──────────────────────────────────
    new Producto(115, "Landing Page",                  "Servicio","Desarrollo Web",  600,"NXR TECH","Página de aterrizaje optimizada para conversión, responsive y rápida.",           "../../img/catalogo/servicios/desarrollo.jpg"),
    new Producto(116, "Tienda Virtual Básica",         "Servicio","Desarrollo Web", 2500,"NXR TECH","E-commerce con hasta 50 productos, carrito, pasarela de pago y panel admin.",     "../../img/catalogo/servicios/s-51.jpg"),
    new Producto(117, "Mantenimiento Web Mensual",     "Servicio","Desarrollo Web",  300,"NXR TECH","Actualizaciones, copias de seguridad, soporte y mejoras mensuales del sitio.",   "../../img/catalogo/servicios/s-52.jpg"),
    new Producto(118, "Web App Básica",                "Servicio","Desarrollo Web", 3500,"NXR TECH","Aplicación web a medida con base de datos, autenticación y panel de administración.", "../../img/catalogo/servicios/s-53.jpg"),
    new Producto(119, "Optimización SEO",              "Servicio","Desarrollo Web",  400,"NXR TECH","Auditoría y optimización técnica y de contenido para mejora en buscadores.",      "../../img/catalogo/servicios/s-54.jpg"),
    new Producto(120, "Integración de Pasarela de Pago","Servicio","Desarrollo Web", 700,"NXR TECH","Integración de Culqi, Mercado Pago, PayPal o Stripe en sitios existentes.",        "../../img/catalogo/servicios/s-55.jpg"),
];
