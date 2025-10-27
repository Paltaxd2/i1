let usuEdit = []
usuEdit = JSON.parse(localStorage.getItem("usuarioEdit")) || [];

let telefono = usuEdit[0].telefono || "No Tiene Numero Telefonico";
document.getElementById("DetValRut").innerHTML = usuEdit[0].rut
document.getElementById("DetValNombre").innerHTML = usuEdit[0].nombre
document.getElementById("DetValCorreo").innerHTML = usuEdit[0].correo
document.getElementById("DetValTelefono").innerHTML = telefono
document.getElementById("DetValRegion").innerHTML = usuEdit[0].region
document.getElementById("DetValComuna").innerHTML = usuEdit[0].comuna
document.getElementById("DetValRol").innerHTML = usuEdit[0].rol

function btnActualizarUsuario() {
    location.href = '/editarUsuario'
}

function btnHistorialCompras() {
    // Direccion Historial
}