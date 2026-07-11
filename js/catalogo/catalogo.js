// catalogo.js — Clases del catálogo NXR TECH — Enrique Prada

class ItemCatalogo {

    constructor(id, nombre, tipo, subcategoria, precio, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.subcategoria = subcategoria;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    getPrecioTexto() {
        if (this.precio === 0) return "Gratis";
        return "S/ " + this.precio.toLocaleString("es-PE") + ".00";
    }

    getDescuentoPorcentaje() {
        if (this.tipo === "Servicio") return 0;
        switch (this.subcategoria) {
            case "Laptops":
            case "Componentes":
                return 10;
            case "Teléfonos":
            case "Tablets":
                return 20;
            case "Accesorios":
            case "Wearables":
                return 30;
            default:
                return 0;
        }
    }

    getPrecioConDescuento() {
        const desc = this.getDescuentoPorcentaje();
        if (desc === 0) return this.precio;
        return Math.round(this.precio * (1 - desc / 100));
    }

    getPrecioConDescuentoTexto() {
        const precioDesc = this.getPrecioConDescuento();
        if (precioDesc === 0) return "Gratis";
        return "S/ " + precioDesc.toLocaleString("es-PE") + ".00";
    }

    getTipo() { return this.tipo; }
    getSubcategoria() { return this.subcategoria; }
    getEtiquetaComercial() { return ""; }
    getDetalleExtra() { return ""; }
    getGarantiaTexto() { return ""; }

}


class Producto extends ItemCatalogo {

    constructor(id, nombre, subcategoria, precio, marca, stock, descripcion, imagen) {
        super(id, nombre, "Producto", subcategoria, precio, descripcion, imagen);
        this.marca = marca;
        this.stock = stock;
    }

    getEtiquetaComercial() { return this.marca; }
    getDetalleExtra() { return "Stock: " + this.stock + " unidades"; }

}


class Servicio extends ItemCatalogo {

    constructor(id, nombre, subcategoria, precio, garantia, modalidad, descripcion, imagen) {
        super(id, nombre, "Servicio", subcategoria, precio, descripcion, imagen);
        this.garantia = garantia;
        this.modalidad = modalidad;
    }

    getEtiquetaComercial() { return ""; }
    getDetalleExtra() { return "Modalidad: " + this.modalidad; }
    getGarantiaTexto() { return "Garantía: " + this.garantia; }

}
