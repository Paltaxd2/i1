import "../css/listaProductoEstilo.css"
import { useEffect } from "react";

const ListaProducto = () => {
    useEffect(() => {
        // SweetAlert2
        if (!document.querySelector("script[src='https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js']")) {
            // Script 2
            console.log("no esta cargado")
            const sc = document.createElement("script")
            sc.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js"
            sc.async = true
            document.body.appendChild(sc)
        }

        // Scripts Producto
        // Producto
        if (!document.querySelector("script[src='/js/producto.js']")) {
            // Carga 
            console.log("no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/producto.js"
            sc.async = true
            document.body.appendChild(sc)
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
        }
    })

    return (
        <>
            <header>
                <h1 className="display-1">Tabla de Productos</h1>
            </header>
            <main>
                <section onLoad={() => window.cargarLista()}>
                    <div id="tablaProductos"></div>
                </section>
            </main>
        </>
    )
}

export default ListaProducto;