function cargaProdCompra() {

}

function valiCompra(nrTarje, tipTarje) {
    if (nrTarje !== "12345678" || tipTarje !== "BancoEstado") {
        Swal.fire({
            title: "Error",
            text: "No a sido posible realizar la compra\nPor favor verifique sus datos y recuerde\nSolo admitimos BancoEstado",
            icon: "error"
        })
    } else {
        Swal.fire({
                title: "COMPRA EXITOSA!",
                text: "Compra realizada con Exito",
                icon: "success"
            })
    }
}