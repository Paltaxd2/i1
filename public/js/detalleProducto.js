let produEdit = []
produEdit = JSON.parse(localStorage.getItem("productoEdit")) || [];

document.getElementById("DetValNombre").innerHTML = produEdit[0].nombre
document.getElementById("DetValDescripcion").innerHTML = produEdit[0].descripcion
document.getElementById("DetValCategoria").innerHTML = produEdit[0].categoria
document.getElementById("DetValPrecio").innerHTML = produEdit[0].precio
document.getElementById("DetValCantidad").innerHTML = produEdit[0].cantidad
document.getElementById("DetValCantCritica").innerHTML = produEdit[0].cantCritica

function btnActualizarProducto() {
    location.href = "/editarProducto"
}