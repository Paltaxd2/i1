import { use, useEffect } from "react";

const ListadoProductoCritico = () => {
    useEffect(() => {
        if (!document.querySelector("script[src='/js/listProduCrit.js']")){
            console.log("ListaProduCritico no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/listProduCrit.js"
            sc.async = true
            document.body.appendChild(sc)
            sc.onload = () => {
                if(cargarLista){
                    window.cargarLista()
                }
            }
        } else {
            console.log("ListaProductoCritico ya esta cargada")
        }
    }, [])
    return (
        <main>
            <section>
                <h1 >Listado de Producto Crítico</h1>
                <div id="cargaListProduCritico" ></div>
            </section>
        </main>
    )
}

export default ListadoProductoCritico;