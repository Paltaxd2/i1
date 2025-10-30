

const Compra = () => {
    return (
        <main>
            <section>
                <h1>Apartado de compra</h1>
                <h2>Usted Lleva los guientes Productos</h2>
                <div>
                    <div id="cargaProduCompra"></div>
                </div>
                <div>
                    <label id="labNroTarjeta">Numero de Tarjeta</label>
                    <input type="text" name="nroTarjeta" id="nroTarjeta" placeholder="Ingrese su Numero de tarjeta aqui" required />

                    <label id="labTipBanco">Tipo de Banco</label>
                    <input type="text" name="tipBanco" id="tipBanco" placeholder="Ingrese el tipo de banco" required />

                    <input type="button" value="Comprar" onClick={() => (e.target)}/>
                </div>
            </section>
        </main>
    )
}

export default Compra;