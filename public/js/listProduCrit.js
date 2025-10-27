var stockGuardado = JSON.parse(localStorage.getItem("stockProductos"))


function cargarLista() {
    console.log("Entrando a la funcion")
    if (!stockGuardado || stockGuardado.length === 0) {
        // Estas 2 lineas se aseguran de limpiar la lista
        var tabla = "<table>"
        tabla += "</table>"

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
                location.href = '/nuevoProducto'
            }
        });
    } else {
        console.log("Entrando")
        stockCritico = stockGuardado.filter(item =>  parseInt(item.cantidad) < parseInt(item.cantCritica)) || []
        console.log(stockCritico)
        if (!stockCritico || stockCritico.length === 0) {
            Swal.fire({
                title: "No hay Productos Criticos para Listar",
                text: "Todo bien por ahora!",
                icon: "info",
                showCancelButton: true,
                cancelButtonText: "Ok"
            })
        } else {
            var tabla = "<table>"
            tabla += "<thead>"
            tabla += "<t>"
            tabla += "<th scope=col>Id</th> <th scope=col>Nombre</th> <th scope=col>Descripcion</th> <th scope=col>Precio</th> <th scope=col>Cantidad</th> <th scope=col>Cantidad Critica</th> <th scope=col>Categoria</th>  <th scope=col>Imagen</th> "
            tabla += "</tr>"
            tabla += "</thead>"
            tabla += "<tbody>"
            stockCritico.forEach(item => {
                tabla += "<tr>"
                tabla += "<th scope=row>" + item.id + "</th>"
                tabla += "<td>" + item.nombre + "</td>"
                tabla += "<td>" + item.descripcion + "</td>"
                tabla += "<td>" + item.precio + "</td>"
                tabla += "<td>" + item.cantidad + "</td>"
                tabla += "<td>" + item.cantCritica + "</td>"
                tabla += "<td>" + item.categoria + "</td>"
                tabla += "<td> <img src='" + item.imagen + "' width=150px height=100px></td>"
                tabla += "</tr>"
            })
            tabla += "</tbody>"
            tabla += "</table>"
            document.getElementById("cargaListProduCritico").innerHTML = tabla
        }
    }
}