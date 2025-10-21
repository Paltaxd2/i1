// Coidgo traido de Script Validaciones.js

// Mensaje de Error
let mensajeError = "";

// Validaciones Registro Usuario
function validacioneRegistroUsuario(usuarioGuardadoF, nombreF, rutF, contraseñaF, contraseñaConfirmF, correoF, correoConfirmF, numeroF, regionF, comunaF) {
    mensajeError = "";
    let resultado = 0;
    if (valiNom(usuarioGuardadoF, nombreF) === false) {
        resultado = 1;
    } else if (validarRut(rutF) === false) {
        resultado = 1;
    } else if (valiPass(contraseñaF) === false) {
        resultado = 1;
    } else if (passConfi(contraseñaF, contraseñaConfirmF) === false) {
        resultado = 1;
    } else if (valiCorre(correoF) === false) {
        resultado = 1;
    } else if (correConfi(correoF, correoConfirmF) === false) {
        resultado = 1;
    } else if (valiNum(numeroF) === false) {
        resultado = 1;
    } else if (valRegiCom(regionF, comunaF) === false) {
        resultado = 1;
    }
    if (resultado === 1) {
        return mensajeError;
    } else {
        return "";
    }
}

// Nombre
function valiNom(usuarioGuardadoF, nombreF) {
    let result = 0;

    usuarioGuardadoF.forEach(produ => {
        if (produ.nombre === nombreF) {
            mensajeError += "Ya hay un Usuario con este Nombre";
            result = 1;
        }
    });
    if (result === 0) {
        return true;
    } else {
        return false;
    }
}

// Rut
function validarRut(rutF) {
    var largo = rutF.length;
    if (largo != 9 && largo != 10) {
        mensajeError += "El RUT esta mal Ingresado\nRecuerde no usar . ni ,";
        return false;
    }

    if (largo == 9) { rutF = "0" + rutF; }
    var factor = 3;
    var suma = 0;
    for (let index = 0; index < 8; index++) {
        var caracter = rutF.slice(index, index + 1);
        suma += (caracter * factor);
        factor--;
        if (factor == 1) { factor = 7; }
    }

    var resto = suma % 11;
    var dv = 11 - resto;
    if (dv == 11) {
        dv = 0;
    }
    if (dv > 9) {
        dv = "K";
    }
    var dvUsuario = rutF.slice(9, 10).toUpperCase();
    if (dv == dvUsuario) {
        return true;
    } else {
        mensajeError += "RUT no valido";
        return false;
    }
}


// Contraseña
function valiPass(contraseñaF) {
    let valor = contraseñaF.length;
    if (valor < 4) {
        mensajeError += "La contraseña es de minimo 4 caracteres";
        return false;
    } else {
        return true;
    }
}

// Confirmar Password
function passConfi(contraseñaF, contraseñaConfirmF) {
    if (contraseñaF === contraseñaConfirmF) {
        return true;
    } else {
        mensajeError += "Ambas contraseñas deben ser iguales";
        return false;
    }
}

// Correo
function valiCorre(correoF) {
    let carFormado = "";
    let corteArroba = 0;

    let correLimp = correoF.trim();

    let larCorre = correLimp.length;

    for (let index = 0; index < larCorre; index++) {

        let caracter = correLimp.slice(index, index + 1)
        if (caracter === "@") {
            carFormado += caracter;
            corteArroba = 1;
        } else if (corteArroba === 1) {
            carFormado += caracter;
        }
    }
    if (carFormado === "@gmail.com" || carFormado === "@duoc.cl" || carFormado === "@profesor.duoc.cl") {
        console.log(carFormado);
        return true;
    } else {
        mensajeError += "Solo se permiten correos @gmail.com, @duoc.cl, @profesor.duoc.cl";
        return false;
    }

}

// Confirmar Correo
function correConfi(correoF, correoConfirmF) {
    if (correoF === correoConfirmF) {
        return true;
    } else {
        mensajeError += "Ambos correos deben ser iguales";
        return false;
    }
}

// Numero
function valiNum(numeroF) {
    if (numeroF === "") {
        return true;
    } else {
        let numStr = numeroF.trim()
        numStr = numStr.replace(',', '')
        numStr = numStr.replace('.', '')
        if (numStr.length !== 8) {
            mensajeError += "Deben ser 8 Numeros";
            return false;
        } else {
            return true;
        }
    }
}

// Region y Comuna
function valRegiCom(regionF, comunaF) {
    if (regionF === "Sin Region" || region === "" || comunaF === "") {
        mensajeError += "Debe ingresar una Region y una Comuna"
        return false;
    } else {
        return true;
    }
}
// Fin Codigo traido de Script Validaciones.js



let region = "";
let comuna = "";

// Diccionario de Regiones y COmunas
let comuRegi = {
    "Sin Region": ["Falta Region"],
    "Metropolitana": ["Santiago", "Las Condes", "Providencia", "Peñalolén", "Vitacura"],
    "Valparaiso": ["Valparaíso", "Viña del Mar", "Concepción", "Quilpué", "Limache"],
    "O Higgins": ["Rancagua", "San Fernando", "Pichilemu", "Colchagua", "Santa Cruz"],
    "Maule": ["Talca", "Curicó", "Linares", "Cauquenes", "Pelarco"],
    "Ñuble": ["Chillán", "Bulnes", "Yungay", "Chillán Viejo", "Yerbas Buenas"]
};



document.getElementById('formulario-producto').addEventListener('submit', function (e) {
    e.preventDefault();
    guardarUsuario();
});

let nombre = "";
let correo = "";
let correoConfirm = "";
let contraseña = "";
let contraseñaConfirm = "";
let numero = "";


/*
function cambioComuna(select){

    const valRegi = select.value;
    if(valRegi !== "Sin Region"){
    region = valRegi;
    console.log(region);
    
    document.getElementById("txtComuna1").innerHTML = comuRegi[valRegi][0];
    document.getElementById("txtComuna2").innerHTML = comuRegi[valRegi][1];
    document.getElementById("txtComuna3").innerHTML = comuRegi[valRegi][2];
    document.getElementById("txtComuna4").innerHTML = comuRegi[valRegi][3];
    document.getElementById("txtComuna5").innerHTML = comuRegi[valRegi][4];
    
    }
}
    */


function cambioComuna(select) {
    const valRegi = select.value;

    region = valRegi;
    console.log(region);

    const selComuna = document.getElementById("selComuna");
    selComuna.innerHTML = "";


    comuRegi[valRegi].forEach((comunaNombre, i) => {
        const option = document.createElement("option");
        option.value = i + 1;
        option.text = comunaNombre;
        selComuna.appendChild(option);
    });
    comuna = "";

}



function valorComuna(select) {
    if (region !== "Sin Region") {
        const valCom = select.value;
        comuna = valCom;
        let numComuna = Number(comuna);
        if (numComuna >= 1 && numComuna <= 5) {
            numComuna = numComuna - 1;
            comuna = comuRegi[region][numComuna];
        }
    }
}




function guardarUsuario() {

    //Lista de Usuarios
    let usuarioGuardado = JSON.parse(localStorage.getItem("usuarios")) || [];

    nombre = document.getElementById('txtNombre').value;
    rut = document.getElementById('txtRut').value;
    correo = document.getElementById('txtCorreo').value;
    correoConfirm = document.getElementById('txtCorreoConfirm').value;
    contraseña = document.getElementById('txtPass').value;
    contraseñaConfirm = document.getElementById('txtPassConfirm').value;
    numero = document.getElementById('numTel').value;

    const id = usuarioGuardado.length > 0 ? usuarioGuardado[usuarioGuardado.length - 1].id + 1 : 1;

    // Validacion
    let resultadoValidacion = "";
    resultadoValidacion = validacioneRegistroUsuario(usuarioGuardado, nombre, rut, contraseña, contraseñaConfirm, correo, correoConfirm, numero, region, comuna);
    if (resultadoValidacion === "") {
        let nuevaUsuario = new Usuario(id, rut, nombre, correo, contraseña, numero, region, comuna, "Usuario")
        usuarioGuardado.push(nuevaUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarioGuardado));

        console.log("El Usuario Es : " + nombre + ' ' + correo + ' ' + correoConfirm + ' ' + contraseña + ' ' + contraseñaConfirm + ' ' + numero + ' ' + region + ' ' + comuna)
        region = "Sin Region";
        comuna = "";

        document.getElementById('txtNombre').value = "";
        document.getElementById('txtRut').value = "";
        document.getElementById('txtCorreo').value = "";
        document.getElementById('txtCorreoConfirm').value = "";
        document.getElementById('txtPass').value = "";
        document.getElementById('txtPassConfirm').value = "";
        document.getElementById('numTel').value = "";

        document.getElementById("selRegion").selectedIndex = 0;

        // location.href = 'home.html'
    } else {
        Swal.fire({
            title: "Datos Incorrectos",
            text: resultadoValidacion,
            icon: "error",
        })
    }

}