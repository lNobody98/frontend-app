// ============================================================
//  Producto.js — NXR TECH
//  Definición de la clase Producto (POO)
// ============================================================

class Producto {

    constructor(id, nombre, tipo, subcategoria, precio, marca, descripcion, imagen) {
        this.id           = id;
        this.nombre       = nombre;
        this.tipo         = tipo;           // "Producto" | "Servicio"
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
