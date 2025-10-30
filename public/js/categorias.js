
let valCategoria = "Seleccione una Categoria";
let mensajeError = "";

function cambCategoria(valSelecCat) {

    const valCat = valSelecCat.value;

    if (valCat === "NoCategoria") {
        valCategoria = "Seleccione una Categoria"
    } else if (valCat === "1") {
        valCategoria = "Productos";
    } else if (valCat === "2") {
        valCategoria = "Consolas";
    } else if (valCat === "3") {
        valCategoria = "Accesorios";
    } else if (valCat === "4") {
        valCategoria = "Juegos de Mesa";
    } else if (valCat === "5") {
        valCategoria = "Gundam";
    }

    console.log(valCategoria);
    document.getElementById("tituloCategoria").innerHTML = valCategoria;

    listaFiltCategoria(valCategoria)
}

function listaFiltCategoria(valCate) {
    if (valCate !== "Seleccione una Categoria") {
        let stockGuardado = JSON.parse(localStorage.getItem("stockProductos"))
        if (!stockGuardado === null || stockGuardado.length === 0) {
            Swal.fire({
                title: "Error",
                text: "No hay Productos para Listar",
                icon: "error"
            })
        } else {
            stockFiltro = stockGuardado.filter(item => item.categoria === valCate) || []
            if (!stockFiltro === null || stockFiltro.length === 0) {
                Swal.fire({
                title: "Error",
                text: "No hay Productos con esta Categoria",
                icon: "error"
            })
            } else {
                document.getElementById("produCategoria").innerHTML = "Esta funcionando la Categoria"
            }
        }

    }
}

