document.getElementById('formularioIniciSesion').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el recargo de la página
    inicioSesionUsuario();
});

let nombre = "";
let correo = "";
let contraseña = "";





function inicioSesionUsuario() {

    //Lista de Usuarios
    let usuarioGuardado = JSON.parse(localStorage.getItem("usuarios")) || [];

    nombre = document.getElementById('txtNomIniSesion').value;
    correo = document.getElementById('txtCorreoIniSesion').value;
    contraseña = document.getElementById('txtPassIniSesion').value;

    // Validacion
    let rolEncontrado = "";
    let nomEncontrado = "";
    let encontrado = false;
    usuarioGuardado.forEach(element => {
        if (element.nombre === nombre && element.contraseña === contraseña && element.correo === correo) {
            numUsu = nombre;
            rolEncontrado = element.rol;
            encontrado = true;
        }
    });
    region = "Nada";
    comuna = "";
    if (encontrado === true) {
        if (rolEncontrado === "Administrador") {
            encontrado = false;
            document.getElementById('txtNomIniSesion').value = "";
            document.getElementById('txtCorreoIniSesion').value = "";
            document.getElementById('txtPassIniSesion').value = "";
            // location.href='home administrador.html'
        } else if (rolEncontrado === "Vendedor") {
            encontrado = false;
            document.getElementById('txtNomIniSesion').value = "";
            document.getElementById('txtCorreoIniSesion').value = "";
            document.getElementById('txtPassIniSesion').value = "";
            // location.href='home.html'
        } else { //Rol Usuario por Descarte
            encontrado = false;
            document.getElementById('txtNomIniSesion').value = "";
            document.getElementById('txtCorreoIniSesion').value = "";
            document.getElementById('txtPassIniSesion').value = "";
            // location.href='home.html'
        }
    } else {
        Swal.fire({
            title: "Datos Incorrectos",
            text: "Ingrese bien los datos",
            icon: "error",
        })
    }
}