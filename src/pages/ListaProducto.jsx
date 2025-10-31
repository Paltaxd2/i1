// import "../css/listaProductoEstilo.css"
import { useEffect } from "react";

const ListaProducto = () => {
    useEffect(() => {
        // SweetAlert2
        if (!document.querySelector("script[src='https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js']")) {
            // Script 2
            console.log("Swwetalert2 no esta cargado")
            const sc = document.createElement("script")
            sc.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js"
            sc.async = true
            document.body.appendChild(sc)
        } else {
            console.log("Swwetalert2 ya esta cargado")
        }

        // Scripts Producto
        // Producto
        if (!document.querySelector("script[src='/js/producto.js']")) {
            // Carga 
            console.log("Producto no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/producto.js"
            sc.async = true
            document.body.appendChild(sc)
        } else {
            console.log("Producto ya esta cargado")
        }

        // Lista Producto
        if (!document.querySelector("script[src='/js/listaProducto.js']")) {
            console.log("no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/listaProducto.js"
            sc.async = true
            document.body.appendChild(sc)
            sc.onload = () => {
                if (window.cargarLista) {
                    window.cargarLista()
                }
            }
        } else {
            console.log("Ya esta cargado")
        }
    }, [])

    return (
            
            <main id="mainListProdu">
                <h1 id="tituTabProdu">Tabla de Productos</h1>
                <section id="secTabProdu">
                    <div id="tablaProductos"></div>
                </section>
            </main>
    )
}

export default ListaProducto;