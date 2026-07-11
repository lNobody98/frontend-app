// catalogo.js — Clases del catálogo NXR TECH

class ItemCatalogo {

    constructor(
        id,
        nombre,
        tipo,
        subcategoria,
        precio,
        descripcion,
        imagen,
        estado = "ACTIVO"
    ) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.subcategoria = subcategoria;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.estado = estado;
    }

    getPrecioTexto() {
        if (this.precio === 0) {
            return "Gratis";
        }

        return "S/ " + this.precio.toLocaleString("es-PE") + ".00";
    }

    getDescuentoPorcentaje() {
        if (this.tipo === "Servicio") {
            return 0;
        }

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
        const descuento = this.getDescuentoPorcentaje();

        if (descuento === 0) {
            return this.precio;
        }

        return Math.round(this.precio * (1 - descuento / 100));
    }

    getPrecioConDescuentoTexto() {
        const precioConDescuento = this.getPrecioConDescuento();

        if (precioConDescuento === 0) {
            return "Gratis";
        }

        return "S/ " + precioConDescuento.toLocaleString("es-PE") + ".00";
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

    constructor(
        id,
        nombre,
        subcategoria,
        precio,
        marca,
        stock,
        descripcion,
        imagen,
        estado = "ACTIVO"
    ) {
        super(
            id,
            nombre,
            "Producto",
            subcategoria,
            precio,
            descripcion,
            imagen,
            estado
        );

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

    constructor(
        id,
        nombre,
        subcategoria,
        precio,
        garantia,
        modalidad,
        descripcion,
        imagen,
        estado = "ACTIVO"
    ) {
        super(
            id,
            nombre,
            "Servicio",
            subcategoria,
            precio,
            descripcion,
            imagen,
            estado
        );

        this.garantia = garantia;
        this.modalidad = modalidad;
    }

    getEtiquetaComercial() {
        return "";
    }

    getDetalleExtra() {
        return "Modalidad: " + this.modalidad;
    }

    getGarantiaTexto() {
        return "Garantía: " + this.garantia;
    }

}