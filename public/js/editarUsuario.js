// Script Validaciones Editar User
// Mensaje de Error
let mensajeError = "";

// Validaciones Registro Usuario
function validacionEditUser(usuarioGuardadoF, nombreF, contraseñaF, contraseñaConfirmF, correoF, correoConfirmF, numeroF, regionF, comunaF){
  mensajeError = "";
  let resultado = 0;
  if(valiNom(usuarioGuardadoF, nombreF) === false){
    resultado = 1;
  } else if(valiPass(contraseñaF) === false){
    resultado = 1;
  } else if(passConfi(contraseñaF, contraseñaConfirmF) === false){
    resultado = 1;
  } else if(valiCorre(correoF) === false){
    resultado = 1;
  } else if(correConfi(correoF, correoConfirmF) === false){
    resultado = 1;
  } else if(valiNum(numeroF) === false){
    resultado = 1;
  } else if(valRegiCom(regionF, comunaF) === false){
    resultado = 1;
  }
  if(resultado === 1){
    return mensajeError;
  } else{
    return "";
  }
}

// Nombre
function valiNom(usuarioGuardadoF, nombreF){
  let result = 0;

  usuarioGuardadoF.forEach(usu => {
    if (usu.nombre ===  nombreF) {
      mensajeError += "Ya hay un Usuario con este Nombre";
      result = 1;
    }
  });
  if(result === 0){
    return true;
  } else {
    return false;
  }
}


// Contraseña
function valiPass(contraseñaF){
  let valor = contraseñaF.length;
  if(valor < 4){
    mensajeError += "La contraseña es de minimo 4 caracteres";
    return false;
  } else if (contraseñaF === ""){
    return true;
  }else {
    return true;
  }
}

// Confirmar Password
function passConfi(contraseñaF, contraseñaConfirmF){
  if(contraseñaF === contraseñaConfirmF){
    return true;
  } else {
    mensajeError += "Ambas contraseñas deben ser iguales";
    return false;
  }
}

// Correo
function valiCorre(correoF){
  if(correoF === ""){
    return true;
  } else{
    let carFormado = "";
    let corteArroba = 0;

    let correLimp = correoF.trim();

    let larCorre = correLimp.length;

    for(let index = 0; index < larCorre; index++) {
        let caracter = correLimp.slice(index, index +1)
        if(caracter === "@"){
        carFormado += caracter;
        corteArroba = 1;
        } else if (corteArroba === 1){
        carFormado += caracter;
        }
    }
    if(carFormado === "@gmail.com" || carFormado === "@duoc.cl" || carFormado === "@profesor.duoc.cl") {
        console.log(carFormado);
        return true;
    } else {
        mensajeError += "Solo se permiten correos @gmail.com, @duoc.cl, @profesor.duoc.cl";
        return false;
    }
  }

}

// Confirmar Correo
function correConfi(correoF, correoConfirmF){
  if(correoF === correoConfirmF){
    return true;
  } else {
    document.getElementById("labelCorreoConfirm").innerHTML = "Ambos correos deben ser iguales";
    return false;
  }
}

// Numero
function valiNum(numeroF){
  if(numeroF.trim() === ""){
    return true;
  }else{
    let numStr = numeroF.trim();
    numStr = numStr.replace(',' ,'');
    numStr = numStr.replace('.', '');
    if(numStr.length !== 8){
      document.getElementById("labelTel").innerHTML = "Deben ser 8 Numeros";
      return false;
    } else {
      return true;
    }
  }
}

// Region y Comuna
function valRegiCom(regionF, comunaF){
  if(regionF !== "Nada" && comunaF !== "0"){
    return true;
  }else if(regionF !== "Nada" && comunaF === ""){
    alert("Si ingresas una Region , debes ingresar su Comuna")
    return false;
  } else {
    return true;
  }
}
// Fin Validaciones Editar User





let rolUser = "";

let region = "";
let comuna = "";

// Diccionario de Regiones y COmunas
let comuRegi = {
        "Metropolitana": [ "Santiago", "Las Condes", "Providencia", "Peñalolén", "Vitacura"],
        "Valparaiso": ["Valparaíso", "Viña del Mar", "Concepción", "Quilpué", "Limache"],
        "O Higgins": ["Rancagua", "San Fernando", "Pichilemu", "Colchagua", "Santa Cruz"],
        "Maule": ["Talca", "Curicó", "Linares", "Cauquenes", "Pelarco"],
        "Ñuble": ["Chillán", "Bulnes", "Yungay", "Chillán Viejo", "Yerbas Buenas"]
    };



document.getElementById('formulario-producto').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el recargo de la página
    guardarUsuario();
});

let nombre = "";
let rut = "";
let correo = "";
let correoConfirm = "";
let contraseña = "";
let contraseñaConfirm = "";
let numero = "";



// Tomar valor de Rol Usuario
function cambUser(valor){
    const valUser = valor.value;
    if(valUser !== "NoRol"){
        rolUser = valUser;
    }
}


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

function valorComuna(select){
    if(region !== "Nada"){
        const valCom = select.value;
        comuna = valCom;
        let numComuna = Number(comuna);
        if(numComuna >= 1 && numComuna <= 5){
            numComuna = numComuna - 1;
            comuna = comuRegi[region][numComuna];
        }
    }

    console.log(comuna);
}




function guardarUsuario(){

    // USuario a Editar
    let usuEdit = JSON.parse(localStorage.getItem("usuarioEdit"))
    let existe = 0;

    //Lista de Usuarios
    let usuarioGuardado = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Insercion de valores
    // Nombre
    const nombre1 = document.getElementById('txtNombre').value;
    nombre = usuEdit[0].nombre;

    // Rut
    const rut1 = document.getElementById('txtRut').value;
    rut = usuEdit[0].nombre;

    // Correo
    const correo1 = document.getElementById('txtCorreo').value;
    correo = usuEdit[0].rut;

    // Confirmar Correo
    const correoConfirm1 = document.getElementById('txtCorreoConfirm').value;
    correoConfirm = usuEdit[0].correo;
    
    // Contraseña
    const contraseña1 = document.getElementById('txtPass').value;
    contraseña = usuEdit[0].contraseña;
    
    // Confirmar Contraseña
    const contraseñaConfirm1 = document.getElementById('txtPassConfirm').value;
    contraseñaConfirm = usuEdit[0].contraseña;

    // Numero
    const numero1 = document.getElementById('numTel').value;
    numero = usuEdit[0].telefono;

    // Rol
    rolUser = usuEdit[0].rol;

    // Region y Comuna
    let regiEdit = usuEdit[0].region;
    let comuEdit = usuEdit[0].comuna;

    
    // Verifica que no se repita el Nombre con uno ya Existente
    usuarioGuardado.forEach(us => {
        if (us.nombre == nombre1) {
            Swal.fire({
                title: "El Usuario ya existe",
                text: "Ya hay un usuario con este Nombre",
                icon: "error"
              })
            existe = 1;
        }

        if(existe != 1){
        for (let i = 0; i < 10; i++) {
        // romper el ciclo en la 6ta iteracion
            if(i == 10){
                break;
            }
            // Nombre
            if(nombre1.trim() != "") {
                nombre = nombre1;
            }
            // Rut
            if(rut1.trim() != "") {
                rut = rut1;
            }
            // Correo
            if(correo1.trim() != "") {
                correo = correo1;
            }

            // Confirmar Correo
            if(correoConfirm1.trim() != ""){
                correoConfirm = correoConfirm1;
            }

            // Contraseña
            if(contraseña1.trim() != "") {
                contraseña = contraseña1;
            }
            // Confirmar Contraseña
            if(contraseñaConfirm1.trim() != ""){
                contraseñaConfirm = contraseñaConfirm1;
            }
            // Numero
            if(numero1.trim() != "") {
                numero = numero1;
            }
            if(region !== "" || region !== "Nada"){
                regiEdit = region;
                if(comuna !== "" || comuna !== "0"){
                comuEdit = comuna;
                }
            }
            }
        }
    });
    

    // Validacion
    let resultEva = validacionEditUser(usuarioGuardado, nombre, contraseña, contraseñaConfirm, correo, correoConfirm, numero, regiEdit, comuEdit);
    if(resultEva === ""){


    usuarioGuardado.forEach(us => {
        if(us.id === usuEdit[0].id){
            // Aplica los cambios
            usuarioGuardado[usuEdit[0].id].nombre = nombre;
            usuarioGuardado[usuEdit[0].id].rut = rut;
            usuarioGuardado[usuEdit[0].id].correo = correo;
            usuarioGuardado[usuEdit[0].id].contraseña = contraseña;
            usuarioGuardado[usuEdit[0].id].telefono = numero;
            usuarioGuardado[usuEdit[0].id].rol = rolUser;
            usuarioGuardado[usuEdit[0].id].region = regiEdit;
            usuarioGuardado[usuEdit[0].id].comuna = comuEdit;

            localStorage.setItem("usuarios", JSON.stringify(usuarioGuardado));

            Swal.fire({
                title: "Usuario actualizado con Exito",
                text: "",
                icon: "success"
            })
        }
    })

    region = "Nada";
    comuna = "";
    rolUser = "NoRol";
    } else {
        Swal.fire({
            title: "Error al Ingresar Datos",
            text: resultEva,
            icon: "error"
        })
    }

}