
function mostrarVistaPrevia(event) {
    const archivo = event.target.files[0];
    const vistaPrevia = document.getElementById('vista-previa');

    if (archivo) {
        const lector = new FileReader();

        lector.onload = function (e) {
            vistaPrevia.src = e.target.result;
            vistaPrevia.style.display = 'block';
        };

        lector.readAsDataURL(archivo);
    }
};



document.getElementById('formulario-producto').addEventListener('submit', function (e) {
    e.preventDefault();
    agregarProductoR();
});

// Categoria
let valCategoria = "";
function camCate(valSelecCat) {
    const valCat = valSelecCat.value;
    if (valCat !== "NoCategoria") {
        if (valCat === "1") {
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
    }

    console.log(valCategoria);
}

// Agregar productos
function agregarProductoR() {

    let stockGuardado = JSON.parse(localStorage.getItem("stockProductos")) || [];

    let nombre = document.getElementById('txtNombre').value;
    let descripcion = document.getElementById('txtDescripcion').value;

    let precioStr = document.getElementById('numPrecio').value;
    let precio = Number(precioStr.replace('.', ''));

    let imagen = "img/" + document.getElementById('imgImagen').files[0].name || '';
    let cantidad = document.getElementById('numCantidad').value;

    let cantCritica = document.getElementById("numCantCrit").value;

    let id = stockGuardado.length > 0 ? stockGuardado[stockGuardado.length - 1].id + 1 : 1;

    let existe = 0;
    stockGuardado.forEach(produ => {
        if (produ.nombre == nombre) {
            existe = 1;
        }
    });
    if (existe === 1) {
        Swal.fire({
            title: "Error",
            text: "Ya hay un Producto con este Nombre",
            icon: "error"
        })
        existe = 0;
    } else if (valCategoria === "") {
        Swal.fire({
            title: "Error",
            text: "Debe seleccionar una categoria",
            icon: "error"
        })
    } else {
        let nuevoProducto = new Producto(id, nombre, descripcion, valCategoria, precio, imagen, cantidad, cantCritica);

        stockGuardado.push(nuevoProducto);
        localStorage.setItem("stockProductos", JSON.stringify(stockGuardado));
        Swal.fire({
            title: "Producto Creado con Exito",
            text: "",
            icon: "success"
        })

        valCategoria = ""
        document.getElementById("selCat").selectedIndex = 0;

        nombre = "";
        document.getElementById('txtNombre').value = "";
        descripcion = "";
        document.getElementById('txtDescripcion').value = "";
        precioStr = "";
        document.getElementById('numPrecio').value = "";
        imagen = "";
        document.getElementById('imgImagen').files[0].name = "";
        cantidad = "";
        document.getElementById('numCantidad').value = "";
    }
};