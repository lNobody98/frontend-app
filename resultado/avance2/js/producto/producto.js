// ============================================================
//  producto.js — NXR TECH
//  RESPONSABLE: Enrique Prada
//
//  ── TIPO DE PROGRAMACIÓN ────────────────────────────────────
//  POO — Programación Orientada a Objetos (JavaScript ES6+)
//  Se utiliza class, constructor, herencia con extends y super().
//
//  ── QUÉ HACE ESTE ARCHIVO ───────────────────────────────────
//  Define el modelo del catálogo con una clase padre y dos hijas:
//
//  ItemCatalogo → clase base con los atributos comunes.
//  Producto     → clase hija para productos físicos.
//  Servicio     → clase hija para servicios ofrecidos por NXR TECH.
//
//  Esta separación evita forzar que un servicio tenga "marca".
//  Los productos tienen marca y stock; los servicios tienen
//  garantia y modalidad.
//
//  Debe cargarse ANTES que datos.js porque datos.js crea objetos
//  con new Producto(...) y new Servicio(...).
//
//  ── CONCEPTOS POO APLICADOS ─────────────────────────────────
//  - Clase padre          → ItemCatalogo
//  - Clases hijas         → Producto y Servicio
//  - Constructor          → inicializa atributos
//  - Herencia             → Producto/Servicio heredan de ItemCatalogo
//  - super()              → llama al constructor de la clase padre
//  - Polimorfismo         → getEtiquetaComercial() y getDetalleExtra()
//                           existen en ambas hijas, pero devuelven
//                           información distinta según el tipo.
//
//  ── ATRIBUTOS COMUNES ───────────────────────────────────────
//  id, nombre, tipo, subcategoria, precio, descripcion, imagen
//
//  ── ATRIBUTOS PROPIOS ───────────────────────────────────────
//  Producto: marca, stock
//  Servicio: garantia, modalidad
// ============================================================

class ItemCatalogo {

    constructor(id, nombre, tipo, subcategoria, precio, descripcion, imagen) {
        this.id           = id;
        this.nombre       = nombre;
        this.tipo         = tipo;
        this.subcategoria = subcategoria;
        this.precio       = precio;
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

    getEtiquetaComercial() {
        return "";
    }

    getDetalleExtra() {
        return "";
    }

    getGarantiaTexto() {
        return "";
    }

}


class Producto extends ItemCatalogo {

    constructor(id, nombre, subcategoria, precio, marca, stock, descripcion, imagen) {
        super(id, nombre, "Producto", subcategoria, precio, descripcion, imagen);
        this.marca = marca;
        this.stock = stock;
    }

    getEtiquetaComercial() {
        return this.marca;
    }

    getDetalleExtra() {
        return "Stock: " + this.stock + " unidades";
    }

}


class Servicio extends ItemCatalogo {

    constructor(id, nombre, subcategoria, precio, garantia, modalidad, descripcion, imagen) {
        super(id, nombre, "Servicio", subcategoria, precio, descripcion, imagen);
        this.garantia = garantia;
        this.modalidad = modalidad;
    }

    getEtiquetaComercial() {
        return "";
    }

    getGarantiaTexto() {
        return "Garantía: " + this.garantia;
    }

    getDetalleExtra() {
        return "Modalidad: " + this.modalidad;
    }

}
