
let listaCatalogo = [];

const data = JSON.parse(localStorage.getItem("productos"));

if (data && data.length > 0) {

    listaCatalogo = data.map(item => {

        if (item.tipo === "Producto") {

            return new Producto(
                item.id,
                item.nombre,
                item.subcategoria,
                item.precio,
                item.marca,
                item.stock,
                item.descripcion,
                item.imagen,
                item.estado
            );

        } else {

            return new Servicio(
                item.id,
                item.nombre,
                item.subcategoria,
                item.precio,
                item.garantia,
                item.modalidad,
                item.descripcion,
                item.imagen,
                item.estado
            );

        }
    });

} else {

    listaCatalogo = [


    // ════════════════════════════════════════════════════════
    //  PRODUCTOS (60)
    // ════════════════════════════════════════════════════════

    // ── Teléfonos (6) ───────────────────────────────────────
    new Producto(1, "iPhone 16 Pro", "Teléfonos", 5499, "Apple", 15, "Pantalla Super Retina XDR 6.3\", chip A18 Pro, cámara 48 MP zoom 5x.", "img/catalogo/productos/p-01.jpg"),
    new Producto(2, "Samsung Galaxy S25 Ultra", "Teléfonos", 4899, "Samsung", 22, "Dynamic AMOLED 6.9\", S Pen integrado, cámara 200 MP.", "img/catalogo/productos/p-02.jpg"),
    new Producto(3, "Xiaomi 15 Pro", "Teléfonos", 3299, "Xiaomi", 29, "LTPO AMOLED 6.73\", Snapdragon 8 Elite, batería 6100 mAh carga 90W.", "img/catalogo/productos/p-03.jpg"),
    new Producto(4, "Google Pixel 9 Pro", "Teléfonos", 4199, "Google", 36, "Tensor G4, cámara 50 MP con IA avanzada, pantalla LTPO 6.3\".", "img/catalogo/productos/p-16.jpg"),
    new Producto(5, "OnePlus 13", "Teléfonos", 2999, "OnePlus", 43, "Snapdragon 8 Elite, carga Hasselblad 50 MP, batería 6000 mAh carga 100W.", "img/catalogo/productos/p-17.jpg"),
    new Producto(6, "Motorola Edge 50 Ultra", "Teléfonos", 2499, "Motorola", 50, "POLED 6.7\" 165 Hz, cámara 50 MP OIS, IP68, carga inalámbrica 50W.", "img/catalogo/productos/p-18.jpg"),

    // ── Laptops (8) ─────────────────────────────────────────
    new Producto(7, "MacBook Air M4", "Laptops", 5999, "Apple", 14, "Chip M4, 16 GB RAM, SSD 512 GB, pantalla Liquid Retina 13.6\".", "img/catalogo/productos/p-04.jpg"),
    new Producto(8, "Dell XPS 15", "Laptops", 7299, "Dell", 21, "Intel Core Ultra 9, 32 GB RAM, SSD 1 TB, pantalla OLED 3.5K.", "img/catalogo/productos/p-05.jpg"),
    new Producto(9, "ASUS ROG Zephyrus G16", "Laptops", 8499, "ASUS", 28, "Ryzen 9 + RTX 4090, 32 GB RAM, pantalla QHD+ 240 Hz.", "img/catalogo/productos/p-06.jpg"),
    new Producto(10, "HP Spectre x360 14", "Laptops", 6799, "HP", 35, "Intel Core Ultra 7, 16 GB RAM, OLED táctil 2.8K, diseño 2 en 1.", "img/catalogo/productos/p-19.jpg"),
    new Producto(11, "Lenovo ThinkPad X1 Carbon", "Laptops", 7499, "Lenovo", 42, "Intel Core Ultra 7, 32 GB RAM, SSD 1 TB, peso 1.12 kg, certificación MIL-SPEC.", "img/catalogo/productos/p-20.jpg"),
    new Producto(12, "Microsoft Surface Laptop 6", "Laptops", 5499, "Microsoft", 49, "Intel Core Ultra 5, 16 GB RAM, pantalla PixelSense 13.5\", autonomía 14 h.", "img/catalogo/productos/p-21.jpg"),
    new Producto(13, "Acer Swift 14 AI", "Laptops", 4299, "Acer", 13, "Intel Core Ultra 5, 16 GB RAM, OLED 14\" 2.8K, peso 1.36 kg.", "img/catalogo/productos/p-22.jpg"),
    new Producto(14, "Samsung Galaxy Book 5 Pro", "Laptops", 5999, "Samsung", 20, "Intel Core Ultra 7, AMOLED 16\" 3K, 16 GB RAM, S Pen incluido.", "img/catalogo/productos/p-23.jpg"),

    // ── Gaming (7) ──────────────────────────────────────────
    new Producto(15, "PlayStation 5 Pro", "Gaming", 3599, "Sony", 27, "Trazado de rayos 4K a 60 fps, SSD ultrarrápido, DualSense mejorado.", "img/catalogo/productos/p-07.jpg"),
    new Producto(16, "Xbox Series X", "Gaming", 2999, "Microsoft", 34, "4K 120 fps, 1 TB SSD NVMe, retrocompatibilidad total con Xbox One.", "img/catalogo/productos/p-08.jpg"),
    new Producto(17, "Razer Blade 16", "Gaming", 11999, "Razer", 41, "Intel i9 + RTX 4090, pantalla QHD+ OLED 240 Hz, teclado mecánico.", "img/catalogo/productos/p-09.jpg"),
    new Producto(18, "Nintendo Switch 2", "Gaming", 2299, "Nintendo", 48, "Pantalla LCD 7.9\", Joy-Con magnéticos, compatible con juegos de Switch 1.", "img/catalogo/productos/p-24.jpg"),
    new Producto(19, "Steam Deck OLED", "Gaming", 2199, "Valve", 12, "OLED 7.4\" HDR, AMD APU, 1 TB SSD, acceso completo a biblioteca Steam.", "img/catalogo/productos/p-25.jpg"),
    new Producto(20, "ASUS ROG Ally X", "Gaming", 2799, "ASUS", 19, "AMD Ryzen Z1 Extreme, pantalla 7\" 120 Hz FHD, 24 GB RAM LPDDR5.", "img/catalogo/productos/p-26.jpg"),
    new Producto(21, "Lenovo Legion Go", "Gaming", 2499, "Lenovo", 26, "AMD Ryzen Z1 Extreme, pantalla 8.8\" QHD+ 144 Hz, controles desmontables.", "img/catalogo/productos/p-27.jpg"),

    // ── Accesorios (7) ──────────────────────────────────────
    new Producto(22, "AirPods Pro 3", "Accesorios", 999, "Apple", 33, "Cancelación de ruido adaptativa, sonido espacial, batería total 30 h.", "img/catalogo/productos/p-10.jpg"),
    new Producto(23, "Logitech MX Master 3S", "Accesorios", 499, "Logitech", 40, "Mouse 8000 DPI, scroll MagSpeed silencioso, conexión multi-dispositivo.", "img/catalogo/productos/p-11.jpg"),
    new Producto(24, "Razer BlackWidow V4", "Accesorios", 799, "Razer", 47, "Teclado mecánico Green Switches, Chroma RGB, reposamuñecas magnético.", "img/catalogo/productos/p-12.jpg"),
    new Producto(25, "Sony WH-1000XM6", "Accesorios", 1199, "Sony", 11, "ANC líder en la industria, 30 h batería, plegable, estuche incluido.", "img/catalogo/productos/p-28.jpg"),
    new Producto(26, "Samsung Galaxy Buds 3 Pro", "Accesorios", 599, "Samsung", 18, "ANC adaptativo, sonido Dolby Atmos, IP57, 6 h + 18 h con estuche.", "img/catalogo/productos/p-29.jpg"),
    new Producto(27, "HyperX Cloud III", "Accesorios", 549, "HyperX", 25, "Auricular gaming, drivers 53 mm, micrófono con cancelación de ruido.", "img/catalogo/productos/p-30.jpg"),
    new Producto(28, "Corsair K100 RGB", "Accesorios", 899, "Corsair", 32, "Teclado mecánico OPX, 44 zonas RGB, rueda iCUE AXIS, aluminio.", "img/catalogo/productos/p-31.jpg"),

    // ── Componentes (8) ─────────────────────────────────────
    new Producto(29, "NVIDIA RTX 5090", "Componentes", 12999, "NVIDIA", 39, "32 GB GDDR7, ray tracing extremo, DLSS 4, la GPU más potente.", "img/catalogo/productos/p-13.jpg"),
    new Producto(30, "AMD Ryzen 9 9950X", "Componentes", 2499, "AMD", 46, "16 núcleos 32 hilos, 5.7 GHz boost, arquitectura Zen 5.", "img/catalogo/productos/p-14.jpg"),
    new Producto(31, "Samsung 990 Pro 2 TB", "Componentes", 899, "Samsung", 10, "SSD NVMe PCIe 5.0, lectura 7450 MB/s, para gaming y edición.", "img/catalogo/productos/p-15.jpg"),
    new Producto(32, "Intel Core Ultra 9 285K", "Componentes", 2199, "Intel", 17, "24 núcleos Arrow Lake, compatible LGA1851, TDP 125W.", "img/catalogo/productos/p-32.jpg"),
    new Producto(33, "Corsair Vengeance DDR5 64GB", "Componentes", 799, "Corsair", 24, "DDR5 6400 MHz CL32, kit 2×32 GB, compatible con Intel XMP 3.0.", "img/catalogo/productos/p-33.jpg"),
    new Producto(34, "ASUS ROG Strix B850-F", "Componentes", 1299, "ASUS", 31, "AM5, DDR5, PCIe 5.0, WiFi 7, iluminación Aura Sync RGB.", "img/catalogo/productos/p-34.jpg"),
    new Producto(35, "Cooler Master MasterLiquid ML360R", "Componentes", 699, "Cooler Master", 38, "Refrigeración líquida AIO 360mm, 3 ventiladores RGB, compatible AM5/LGA1851.", "img/catalogo/productos/p-35.jpg"),
    new Producto(36, "Seasonic Focus GX 1000W", "Componentes", 899, "Seasonic", 45, "Fuente 80 Plus Gold, cableado modular, certificada ATX 3.0, silenciosa.", "img/catalogo/productos/p-36.jpg"),

    // ── Monitores (6) ───────────────────────────────────────
    new Producto(37, "LG UltraGear 27\" 4K 144Hz", "Monitores", 2499, "LG", 9, "IPS Nano Color 4K, 144 Hz, 1ms GtG, HDMI 2.1, DisplayHDR 600.", "img/catalogo/productos/monitor.jpg"),
    new Producto(38, "Samsung Odyssey Neo G9", "Monitores", 6999, "Samsung", 16, "QLED curvo 49\", 240 Hz, 1ms, resolución 5120×1440, HDR2000.", "img/catalogo/productos/p-37.jpg"),
    new Producto(39, "Dell UltraSharp 32\" 4K", "Monitores", 3499, "Dell", 23, "IPS 4K 60 Hz, cobertura 98% DCI-P3, USB-C 90W, panel de colores profesional.", "img/catalogo/productos/p-38.jpg"),
    new Producto(40, "BenQ MOBIUZ EX321UX", "Monitores", 3299, "BenQ", 30, "IPS 4K 144 Hz, HDMI 2.1, FreeSync Premium Pro, parlantes 2.1 integrados.", "img/catalogo/productos/p-39.jpg"),
    new Producto(41, "ASUS ProArt PA32UCR-K", "Monitores", 8999, "ASUS", 37, "4K OLED 120 Hz, cobertura 99% DCI-P3, hardware calibration, Thunderbolt 4.", "img/catalogo/productos/p-40.jpg"),
    new Producto(42, "MSI MAG 341CQP", "Monitores", 2199, "MSI", 44, "VA curvo 34\" UWQHD, 165 Hz, 0.5ms MPRT, AMD FreeSync Premium.", "img/catalogo/productos/p-41.jpg"),

    // ── Tablets (6) ─────────────────────────────────────────
    new Producto(43, "iPad Pro M4 13\"", "Tablets", 5999, "Apple", 8, "Chip M4, pantalla OLED Ultra Retina XDR, Apple Pencil Pro, Face ID.", "img/catalogo/productos/tablet.jpg"),
    new Producto(44, "Samsung Galaxy Tab S10 Ultra", "Tablets", 4999, "Samsung", 15, "AMOLED 14.6\" 120 Hz, Snapdragon 8 Gen 3, S Pen incluido, IP68.", "img/catalogo/productos/p-42.jpg"),
    new Producto(45, "Microsoft Surface Pro 11", "Tablets", 5499, "Microsoft", 22, "Snapdragon X Elite, pantalla 13\" 120 Hz, teclado desmontable opcional.", "img/catalogo/productos/p-43.jpg"),
    new Producto(46, "Lenovo Tab P12 Pro", "Tablets", 2999, "Lenovo", 29, "AMOLED 12.6\" 120 Hz, Snapdragon 870, 8 GB RAM, Dolby Atmos quadrante.", "img/catalogo/productos/p-44.jpg"),
    new Producto(47, "Xiaomi Pad 7 Pro", "Tablets", 1899, "Xiaomi", 36, "IPS 144Hz 11.2\", Snapdragon 8s Gen 3, carga 67W, 8 GB RAM.", "img/catalogo/productos/p-45.jpg"),
    new Producto(48, "ASUS ROG Flow Z13", "Tablets", 6499, "ASUS", 43, "Intel Core i9 + RTX 4060, tablet gaming 13\", 165 Hz, XG Mobile compatible.", "img/catalogo/productos/p-46.jpg"),

    // ── Smart TV (6) ────────────────────────────────────────
    new Producto(49, "LG OLED C4 55\"", "Smart TV", 4299, "LG", 50, "OLED evo 4K 120 Hz, G-Sync, FreeSync, webOS 24, Dolby Vision IQ.", "img/catalogo/productos/smarttv.jpg"),
    new Producto(50, "Samsung Neo QLED QN90D 65\"", "Smart TV", 5999, "Samsung", 14, "Mini LED 4K 144 Hz, Tizen OS, Neural Quantum Processor 4K, HDR2000.", "img/catalogo/productos/p-47.jpg"),
    new Producto(51, "Sony Bravia XR A95L 65\"", "Smart TV", 7499, "Sony", 21, "QD-OLED 4K 120 Hz, Google TV, Cognitive Processor XR, Acoustic Surface.", "img/catalogo/productos/p-48.jpg"),
    new Producto(52, "TCL QLED C845 75\"", "Smart TV", 2999, "TCL", 28, "QLED 4K Mini LED 144 Hz, Google TV, Dolby Vision, altavoces ONKYO 2.1.", "img/catalogo/productos/p-49.jpg"),
    new Producto(53, "Hisense ULED U8N 65\"", "Smart TV", 3499, "Hisense", 35, "Mini LED 4K 144 Hz, IMAX Enhanced, Dolby Atmos, Google TV, 1500 nits.", "img/catalogo/productos/p-50.jpg"),
    new Producto(54, "LG QNED99 86\"", "Smart TV", 8999, "LG", 42, "QNED 8K 120 Hz, α9 Gen7 AI Processor, webOS 24, compatible con ATSC 3.0.", "img/catalogo/productos/p-51.jpg"),

    // ── Impresoras (2) ──────────────────────────────────────
    new Producto(55, "HP LaserJet Pro M404dn", "Impresoras", 1299, "HP", 49, "Láser monocromo, 40 ppm, dúplex automático, USB y red Ethernet.", "img/catalogo/productos/impresora.jpg"),
    new Producto(56, "Epson EcoTank ET-4850", "Impresoras", 999, "Epson", 13, "Inyección de tinta 4 en 1, depósito de tinta sin cartuchos, WiFi, ADF.", "img/catalogo/productos/p-52.jpg"),

    // ── Wearables (4) ───────────────────────────────────────
    new Producto(57, "Apple Watch Ultra 2", "Wearables", 3299, "Apple", 20, "Titanio, GPS de doble frecuencia, buceo 100 m, batería 60 h.", "img/catalogo/productos/wearable.jpg"),
    new Producto(58, "Samsung Galaxy Watch 7", "Wearables", 999, "Samsung", 27, "AMOLED 1.5\", BioActive Sensor 3-en-1, autonomía 40 h, WearOS.", "img/catalogo/productos/p-53.jpg"),
    new Producto(59, "Garmin Fénix 8", "Wearables", 3999, "Garmin", 34, "AMOLED 1.4\", GPS multibanda, 29 días de batería, altímetro barométrico.", "img/catalogo/productos/p-54.jpg"),
    new Producto(60, "Fitbit Charge 6", "Wearables", 599, "Google", 41, "ECG integrado, GPS, SpO2, Google Maps y Wallet, 7 días de batería.", "img/catalogo/productos/p-55.jpg"),

    // ════════════════════════════════════════════════════════
    //  SERVICIOS (60)
    // ════════════════════════════════════════════════════════

    // ── Soporte (6) ─────────────────────────────────────────
    new Servicio(61, "Soporte Técnico Básico", "Soporte", 150, "30 días", "Mixta", "Diagnóstico y resolución de problemas de software y hardware en el local.", "img/catalogo/servicios/s-01.jpg"),
    new Servicio(62, "Soporte Remoto 24/7", "Soporte", 199, "30 días", "Remota", "Asistencia técnica remota las 24 horas del día, los 7 días a la semana.", "img/catalogo/servicios/s-02.jpg"),
    new Servicio(63, "Diagnóstico Gratuito", "Soporte", 0, "Incluida", "Mixta", "Evaluación inicial completa de tu equipo sin costo. Solo pagas si reparas.", "img/catalogo/servicios/s-03.jpg"),
    new Servicio(64, "Soporte Premium Mensual", "Soporte", 299, "Mensual", "Mixta", "Plan mensual con prioridad de atención, visitas ilimitadas y descuentos.", "img/catalogo/servicios/s-16.jpg"),
    new Servicio(65, "Soporte Empresarial", "Soporte", 899, "Contractual", "Mixta", "Contrato corporativo para empresas: SLA 4 h, técnico asignado, informes.", "img/catalogo/servicios/s-17.jpg"),
    new Servicio(66, "Soporte en Domicilio", "Soporte", 180, "7 días", "Mixta", "Visita técnica a tu hogar u oficina para resolver problemas in situ.", "img/catalogo/servicios/s-18.jpg"),

    // ── Mantenimiento (6) ───────────────────────────────────
    new Servicio(67, "Limpieza Interna de Laptop", "Mantenimiento", 80, "30 días", "Presencial", "Limpieza profunda de componentes internos, pasta térmica y ventiladores.", "img/catalogo/servicios/s-04.jpg"),
    new Servicio(68, "Mantenimiento Preventivo", "Mantenimiento", 120, "30 días", "Presencial", "Revisión periódica completa: sistema, hardware, drivers y actualizaciones.", "img/catalogo/servicios/s-05.jpg"),
    new Servicio(69, "Cambio de Pasta Térmica", "Mantenimiento", 60, "30 días", "Presencial", "Reemplazo de pasta térmica para reducir temperaturas y mejorar rendimiento.", "img/catalogo/servicios/s-06.jpg"),
    new Servicio(70, "Revisión de Batería", "Mantenimiento", 70, "7 días", "Presencial", "Análisis de ciclos de carga y diagnóstico de batería en laptops y móviles.", "img/catalogo/servicios/s-19.jpg"),
    new Servicio(71, "Actualización de Firmware", "Mantenimiento", 90, "30 días", "Presencial", "Actualización de BIOS, firmware de SSD y drivers críticos de seguridad.", "img/catalogo/servicios/s-20.jpg"),
    new Servicio(72, "Mantenimiento PC Escritorio", "Mantenimiento", 100, "30 días", "Presencial", "Limpieza completa, revisión de conexiones y optimización de PC de escritorio.", "img/catalogo/servicios/s-21.jpg"),

    // ── Reparación (6) ──────────────────────────────────────
    new Servicio(73, "Cambio de Pantalla", "Reparación", 250, "3 meses", "Mixta", "Reemplazo de pantalla rota o con fallas para laptops y smartphones.", "img/catalogo/servicios/s-07.jpg"),
    new Servicio(74, "Reparación de Teclado", "Reparación", 180, "3 meses", "Mixta", "Reparación o sustitución de teclado dañado en laptops de cualquier marca.", "img/catalogo/servicios/s-08.jpg"),
    new Servicio(75, "Recuperación de Datos", "Reparación", 350, "Sin garantía", "Mixta", "Recuperamos archivos de discos dañados, formateados o con fallas críticas.", "img/catalogo/servicios/s-09.jpg"),
    new Servicio(76, "Cambio de Batería", "Reparación", 150, "6 meses", "Mixta", "Sustitución de batería degradada en laptops, smartphones y tablets.", "img/catalogo/servicios/s-22.jpg"),
    new Servicio(77, "Reparación de Puerto USB/C", "Reparación", 200, "3 meses", "Mixta", "Soldadura y reemplazo de puertos USB, USB-C y HDMI dañados.", "img/catalogo/servicios/s-23.jpg"),
    new Servicio(78, "Reparación de Placa Madre", "Reparación", 450, "6 meses", "Mixta", "Diagnóstico y reparación a nivel de componentes en placa madre.", "img/catalogo/servicios/s-24.jpg"),

    // ── Instalación (6) ─────────────────────────────────────
    new Servicio(79, "Instalación de Sistema Operativo", "Instalación", 90, "30 días", "Mixta", "Instalación y configuración de Windows, macOS o Linux con drivers.", "img/catalogo/servicios/s-10.jpg"),
    new Servicio(80, "Configuración de Red", "Instalación", 120, "30 días", "Mixta", "Configuración de redes LAN/WiFi, routers, switches y puntos de acceso.", "img/catalogo/servicios/s-11.jpg"),
    new Servicio(81, "Instalación de Software", "Instalación", 70, "30 días", "Remota", "Instalación de paquetes de software para trabajo o estudio.", "img/catalogo/servicios/s-12.jpg"),
    new Servicio(82, "Migración de Datos", "Instalación", 160, "30 días", "Mixta", "Traslado seguro de archivos, aplicaciones y configuraciones entre equipos.", "img/catalogo/servicios/s-25.jpg"),
    new Servicio(83, "Instalación de Antivirus", "Instalación", 80, "1 año", "Mixta", "Configuración de solución antivirus y antimalware con monitoreo activo.", "img/catalogo/servicios/s-26.jpg"),
    new Servicio(84, "Instalación de Cámaras IP", "Instalación", 350, "1 año", "Mixta", "Instalación y configuración de sistema de cámaras de seguridad IP.", "img/catalogo/servicios/s-27.jpg"),

    // ── Asesoría (6) ────────────────────────────────────────
    new Servicio(85, "Asesoría de Compra", "Asesoría", 50, "Sin garantía", "Mixta", "Te ayudamos a elegir el equipo ideal según tu presupuesto y necesidades.", "img/catalogo/servicios/s-13.jpg"),
    new Servicio(86, "Consultoría TI para Empresas", "Asesoría", 400, "30 días", "Mixta", "Evaluación y optimización de infraestructura tecnológica para empresas.", "img/catalogo/servicios/s-14.jpg"),
    new Servicio(87, "Capacitación Técnica", "Asesoría", 200, "Sin garantía", "Mixta", "Cursos básicos de uso, mantenimiento y seguridad informática.", "img/catalogo/servicios/s-15.jpg"),
    new Servicio(88, "Asesoría de Seguridad", "Asesoría", 180, "30 días", "Mixta", "Evaluación de riesgos y recomendaciones de seguridad para tu entorno digital.", "img/catalogo/servicios/s-28.jpg"),
    new Servicio(89, "Plan Tecnológico Empresarial", "Asesoría", 600, "30 días", "Mixta", "Diseño de hoja de ruta tecnológica alineada a los objetivos del negocio.", "img/catalogo/servicios/s-29.jpg"),
    new Servicio(90, "Evaluación de Hardware", "Asesoría", 120, "7 días", "Mixta", "Análisis del estado y vida útil de todos los equipos de tu empresa.", "img/catalogo/servicios/s-30.jpg"),

    // ── Ciberseguridad (6) ──────────────────────────────────
    new Servicio(91, "Análisis de Vulnerabilidades", "Ciberseguridad", 500, "30 días", "Mixta", "Escaneo completo de la red y sistemas en busca de vulnerabilidades activas.", "img/catalogo/servicios/ciberseg.jpg"),
    new Servicio(92, "Instalación de Firewall", "Ciberseguridad", 350, "1 año", "Mixta", "Configuración de firewall perimetral para protección avanzada de la red.", "img/catalogo/servicios/s-31.jpg"),
    new Servicio(93, "Auditoría de Seguridad", "Ciberseguridad", 800, "30 días", "Mixta", "Revisión integral de políticas, controles y accesos de seguridad informática.", "img/catalogo/servicios/s-32.jpg"),
    new Servicio(94, "Pen Testing Básico", "Ciberseguridad", 1200, "30 días", "Mixta", "Prueba de penetración ética para detectar brechas antes que los atacantes.", "img/catalogo/servicios/s-33.jpg"),
    new Servicio(95, "Configuración VPN Empresarial", "Ciberseguridad", 450, "1 año", "Remota", "Implementación de VPN segura para trabajo remoto con acceso cifrado.", "img/catalogo/servicios/s-34.jpg"),
    new Servicio(96, "Capacitación Anti-Phishing", "Ciberseguridad", 300, "Sin garantía", "Mixta", "Taller para equipos de trabajo sobre amenazas de phishing y buenas prácticas.", "img/catalogo/servicios/s-35.jpg"),

    // ── Diseño Digital (6) ──────────────────────────────────
    new Servicio(97, "Diseño de Logo", "Diseño Digital", 400, "30 días", "Mixta", "Creación de logotipo profesional con 3 propuestas y archivos editables.", "img/catalogo/servicios/diseno.jpg"),
    new Servicio(98, "Diseño Web Básico", "Diseño Digital", 800, "3 meses", "Remota", "Landing page de 1 página, responsive, con formulario de contacto.", "img/catalogo/servicios/s-36.jpg"),
    new Servicio(99, "Diseño de Presentaciones", "Diseño Digital", 250, "30 días", "Mixta", "Presentación corporativa en PowerPoint o Google Slides, máximo 20 diapositivas.", "img/catalogo/servicios/s-37.jpg"),
    new Servicio(100, "Diseño de Banners Digitales", "Diseño Digital", 180, "30 días", "Mixta", "Pack de 5 banners para redes sociales en formato estático o animado.", "img/catalogo/servicios/s-38.jpg"),
    new Servicio(101, "Identidad Visual Corporativa", "Diseño Digital", 1200, "3 meses", "Mixta", "Manual de marca completo: logo, colores, tipografías, aplicaciones.", "img/catalogo/servicios/s-39.jpg"),
    new Servicio(102, "Edición de Video Básica", "Diseño Digital", 350, "30 días", "Mixta", "Edición de video corporativo o publicitario de hasta 2 minutos.", "img/catalogo/servicios/s-40.jpg"),

    // ── Networking (6) ──────────────────────────────────────
    new Servicio(103, "Cableado Estructurado", "Networking", 1500, "1 año", "Presencial", "Instalación de cableado de red Cat6/Cat6A para oficinas y empresas.", "img/catalogo/servicios/networking.jpg"),
    new Servicio(104, "Configuración de Switches", "Networking", 400, "1 año", "Presencial", "Configuración de switches administrables con VLANs y QoS.", "img/catalogo/servicios/s-41.jpg"),
    new Servicio(105, "Monitoreo de Red", "Networking", 350, "Mensual", "Presencial", "Implementación de solución de monitoreo 24/7 con alertas y reportes.", "img/catalogo/servicios/s-42.jpg"),
    new Servicio(106, "WiFi Empresarial", "Networking", 800, "1 año", "Presencial", "Diseño e instalación de red WiFi empresarial con puntos de acceso gestionados.", "img/catalogo/servicios/s-43.jpg"),
    new Servicio(107, "Segmentación de Red", "Networking", 500, "1 año", "Presencial", "División de la red en segmentos seguros mediante VLANs y ACLs.", "img/catalogo/servicios/s-44.jpg"),
    new Servicio(108, "Auditoría de Red", "Networking", 600, "30 días", "Presencial", "Análisis completo del rendimiento, seguridad y topología de la red.", "img/catalogo/servicios/s-45.jpg"),

    // ── Cloud & Backup (6) ──────────────────────────────────
    new Servicio(109, "Migración a la Nube", "Cloud & Backup", 1200, "3 meses", "Remota", "Traslado de servidores y datos on-premise a plataformas cloud (AWS, Azure, GCP).", "img/catalogo/servicios/cloud.jpg"),
    new Servicio(110, "Backup Automático", "Cloud & Backup", 300, "Mensual", "Remota", "Configuración de copias de seguridad automáticas en la nube con retención 30 días.", "img/catalogo/servicios/s-46.jpg"),
    new Servicio(111, "Sincronización de Dispositivos", "Cloud & Backup", 180, "30 días", "Mixta", "Configuración de sincronización entre equipos y servicios en la nube.", "img/catalogo/servicios/s-47.jpg"),
    new Servicio(112, "Disaster Recovery", "Cloud & Backup", 1800, "1 año", "Mixta", "Plan de recuperación ante desastres con RTO y RPO definidos.", "img/catalogo/servicios/s-48.jpg"),
    new Servicio(113, "Almacenamiento en la Nube", "Cloud & Backup", 150, "Mensual", "Remota", "Configuración y gestión de almacenamiento en la nube para equipos de trabajo.", "img/catalogo/servicios/s-49.jpg"),
    new Servicio(114, "Monitoreo de Infraestructura", "Cloud & Backup", 500, "Mensual", "Mixta", "Supervisión continua de servidores y servicios cloud con alertas en tiempo real.", "img/catalogo/servicios/s-50.jpg"),

    // ── Desarrollo Web (6) ──────────────────────────────────
    new Servicio(115, "Landing Page", "Desarrollo Web", 600, "3 meses", "Mixta", "Página de aterrizaje optimizada para conversión, responsive y rápida.", "img/catalogo/servicios/desarrollo.jpg"),
    new Servicio(116, "Tienda Virtual Básica", "Desarrollo Web", 2500, "6 meses", "Mixta", "E-commerce con hasta 50 productos, carrito, pasarela de pago y panel admin.", "img/catalogo/servicios/s-51.jpg"),
    new Servicio(117, "Mantenimiento Web Mensual", "Desarrollo Web", 300, "Mensual", "Remota", "Actualizaciones, copias de seguridad, soporte y mejoras mensuales del sitio.", "img/catalogo/servicios/s-52.jpg"),
    new Servicio(118, "Web App Básica", "Desarrollo Web", 3500, "6 meses", "Remota", "Aplicación web a medida con base de datos, autenticación y panel de administración.", "img/catalogo/servicios/s-53.jpg"),
    new Servicio(119, "Optimización SEO", "Desarrollo Web", 400, "3 meses", "Remota", "Auditoría y optimización técnica y de contenido para mejora en buscadores.", "img/catalogo/servicios/s-54.jpg"),
    new Servicio(120, "Integración de Pasarela de Pago", "Desarrollo Web", 700, "3 meses", "Remota", "Integración de Culqi, Mercado Pago, PayPal o Stripe en sitios existentes.", "img/catalogo/servicios/s-55.jpg"),
];

localStorage.setItem("productos", JSON.stringify(listaCatalogo));
}
