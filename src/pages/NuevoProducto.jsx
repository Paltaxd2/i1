import "../css/nuevoProductoEstilo.css"
import { use, useEffect } from "react";

// SI

const NuevoProducto = () => {
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

        // Nuevo Producto
        if (!document.querySelector("script[src='/js/nuevoProducto.js']")) {
            console.log("no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/nuevoProducto.js"
            sc.async = true
            document.body.appendChild(sc)
            sc.onload = () => {
                if (window.mostrarVistaPrevia) {
                    console.log("mostrarVistaPrevia esta cargado")
                }
            }
        }
    })
    return (
        <>
            <header>
                <h1>Crear Producto</h1>
            </header>
            <main>
                <section>
                    <form id="formulario-producto">
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <label id="labelNombre">Nombre del Producto:</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" id="txtNombre" name="txtNombre" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label id="labelDescripcion">Descripción del Producto:</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <textarea id="txtDescripcion" name="txtDescripcion" required></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label id="labelPrecio">Precio del Producto ($):</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="number" id="numPrecio" name="numPrecio" step="0.01" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label id="labelImagen">Imagen del Producto:</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="file" id="imgImagen" name="imgImagen" required accept="image/*" onChange={(e) => window.mostrarVistaPrevia && window.mostrarVistaPrevia(e)} />
                                        <img id="vista-previa" alt="Vista previa de imagen" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <label id="labelCantidad">Cantidad del Producto:</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="number" id="numCantidad" name="numCantidad" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="submit">Guardar Producto</button>
                                    </td>
                                    <td>
                                        <button type="reset">Limpiar Formulario</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </section>
            </main>
        </>
    )
}

export default NuevoProducto;