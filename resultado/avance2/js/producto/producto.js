// ============================================================
//  producto.js — NXR TECH
//  RESPONSABLE: Enrique Prada
//
//  ── TIPO DE PROGRAMACIÓN ────────────────────────────────────
//  POO — Programación Orientada a Objetos (JavaScript ES6+)
//  Se utiliza la sintaxis `class` de ES6 para definir la plantilla
//  base de cada ítem del catálogo. Cada objeto del array en
//  datos.js es una instancia creada con `new Producto(...)`.
//
//  ── QUÉ HACE ESTE ARCHIVO ───────────────────────────────────
//  Define la clase Producto: el molde (blueprint) que describe
//  qué atributos y qué métodos tiene cada ítem del catálogo.
//  Por convención en e-commerce, "Producto" abarca tanto bienes
//  físicos como servicios — la propiedad `tipo` los distingue.
//  Debe cargarse ANTES que datos.js en el HTML porque datos.js
//  usa `new Producto(...)` y necesita que la clase ya exista.
//
//  ── LENGUAJE ────────────────────────────────────────────────
//  JavaScript ES6+  — sintaxis: class, constructor, this, métodos
//
//  ── CONCEPTOS POO APLICADOS ─────────────────────────────────
//  - Clase (class)        → plantilla que define la estructura
//  - Constructor          → inicializa los atributos al crear el objeto
//  - Atributos (this.x)   → datos que almacena cada instancia
//  - Métodos              → funciones que pertenecen a la clase
//  - Instanciación        → crear un objeto con `new Producto(...)`
//  - Encapsulamiento      → los atributos y métodos están dentro de la clase
//
//  ── ATRIBUTOS DEL CONSTRUCTOR ───────────────────────────────
//  - id           → número único e irrepetible del ítem
//  - nombre       → nombre comercial  (ej: "iPhone 16 Pro")
//  - tipo         → "Producto" | "Servicio"  — controla los filtros
//  - subcategoria → categoría específica     (ej: "Teléfonos", "Soporte")
//  - precio       → número entero en soles. Usar 0 para mostrar "Gratis"
//  - marca        → fabricante o proveedor   (ej: "Apple", "Samsung")
//  - descripcion  → texto corto para la card (máx. 2 líneas recomendado)
//  - imagen       → ruta relativa a la imagen
//
//  ── MÉTODOS ─────────────────────────────────────────────────
//  - getPrecioTexto() → retorna el precio formateado: "S/ 5,499.00"
//                       o "Gratis" si precio === 0.
//                       Usa condicional if/else (estructura de control).
//                       Llamado por listado.js al generar cada card.
//  - getTipo()        → retorna "Producto" o "Servicio"
//  - getSubcategoria()→ retorna la subcategoría del ítem
//
//  ── ESTRUCTURA DE CONTROL USADA ─────────────────────────────
//  getPrecioTexto(): condicional if/else para decidir entre
//  mostrar "Gratis" o el precio formateado con toLocaleString().
// ============================================================

class Producto {

    constructor(id, nombre, tipo, subcategoria, precio, marca, descripcion, imagen) {
        this.id           = id;
        this.nombre       = nombre;
        this.tipo         = tipo;
        this.subcategoria = subcategoria;
        this.precio       = precio;
        this.marca        = marca;
        this.descripcion  = descripcion;
        this.imagen       = imagen;
    }

    getPrecioTexto() {
        if (this.precio === 0) return "Gratis";
        return "S/ " + this.precio.toLocaleString("es-PE") + ".00";
    }

    getTipo() {
        return this.tipo;
    }

    getSubcategoria() {
        return this.subcategoria;
    }

}
