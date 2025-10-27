class Producto {
    id;
    nombre;
    descripcion;
    categoria;
    precio;
    imagen;
    cantidad;
    cantCritica;

    constructor(id, nombre, descripcion, categoria, precio, imagen, cantidad, cantCritica) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.cantCritica = cantCritica;
    }
}
