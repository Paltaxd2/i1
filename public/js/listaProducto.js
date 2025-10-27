var stockGuardado = JSON.parse(localStorage.getItem("stockProductos"))
    

function cargarLista() {
    if(!stockGuardado || stockGuardado.length === 0){
        // Estas 2 lineas se aseguran de limpiar la lista
        var tabla = "<table>"
        tabla += "</table>"
        document.getElementById("tablaProductos").innerHTML = tabla
        
        Swal.fire({
        title: "No hay Productos para Listar",
        text: "Quiere agregar Productos?",
        icon: "error",
        confirmButtonText: "SI",
        showCancelButton: true,
        cancelButtonText: "NO"
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            location.href='/nuevoProducto'
        }
    });
    } else {
        var tabla = "<table>"
        tabla += "<thead>"
        tabla += "<t>"
        tabla += "<th scope=col>Id</th> <th scope=col>Nombre</th> <th scope=col>Descripcion</th> <th scope=col>Precio</th> <th scope=col>Cantidad</th>  <th scope=col>Cantidad Critica</th> <th scope=col>Categoria</th> <th scope=col>Imagen</th> <th scope=col>Detalle</th> <th scope=col>Eliminar</th>"
        tabla +="</tr>"
        tabla += "</thead>"
        tabla += "<tbody>"
        stockGuardado.forEach(item => {
            tabla += "<tr>"
            tabla += "<th scope=row>" + item.id + "</th>"
            tabla += "<td>" + item.nombre + "</td>"
            tabla += "<td>" + item.descripcion + "</td>"
            tabla += "<td>" + item.precio + "</td>"
            tabla += "<td>" + item.cantidad + "</td>"
            tabla += "<td>" + item.cantCritica + "</td>"
            tabla += "<td>" + item.categoria + "</td>"
            tabla += "<td> <img src='" + item.imagen + "' width=150px height=100px></td>"
            tabla += "<td> <input type='button' value='Descripcion Producto' onclick='btnResp(" + item.id + ", " + 1 + ")'> </td>"
            tabla += "<td> <input type='button' value='Eliminar Producto' onclick='btnResp(" + item.id + ", " + 2 + ")'> </td>"
            tabla += "</tr>"
        })
        tabla += "</tbody>"
        tabla += "</table>"
        tabla += "<input type='button' value='Nuevo Producto' onclick='opLista( " + 0 + ")'>"
        tabla += "<input type='button' value='Listado Productos Criticos' onclick='opLista( " + 1 + ")'>"
        tabla += "<input type='button' value='Reportes' onclick='opLista( " + 2 + ")'>"
        document.getElementById("tablaProductos").innerHTML = tabla
    }
}

function opLista(val){
    if(val === 0){
        location.href='/nuevoProducto'
    } else if(val === 1){
        location.href='/listProduCritico'
    } else if(val === 2){
        // location.href='/reportes'
    }
}

// Funcion llamada en editProdu
function eliminar(posiProduElim) {
    console.log(posiProduElim)
    if (confirm("¿Desea Eliminar al Usuario?")) {
        stockGuardado.splice(posiProduElim, 1)
        localStorage.setItem("stockProductos", JSON.stringify(stockGuardado))
    }
}

// editProdu llama a Eliminar
function btnResp(posiProducto, val){
    let posicionProducto = 0;
    let countPosi = 0;
    stockGuardado.forEach(item => {
        if(item.id === posiProducto){
            let objetoProduEdit = new Object({id: item.id, nombre: item.nombre, descripcion: item.descripcion, categoria: item.categoria, precio: item.precio, imagen: item.imagen, cantidad: item.cantidad, posicion: countPosi, cantCritica: item.cantCritica})
            posicionProducto = countPosi;
            let listProduEdit = [
                objetoProduEdit
            ]
            localStorage.setItem("productoEdit", JSON.stringify(listProduEdit));
        }
        countPosi ++;
    })
    countPosi = 0;
    if(val === 1){
        location.href='/detalleProducto'
    }else if(val === 2){
        eliminar(posicionProducto)
        cargarLista()
    }
}