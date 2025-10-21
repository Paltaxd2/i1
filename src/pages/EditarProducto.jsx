import "../css/editarProductoEstilo.css"
import { useEffect } from "react";

const EditarProducto = () => {
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

        // Editar Producto
        if (!document.querySelector("script[src='/js/editarProducto.js']")) {
            console.log("no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/editarProducto.js"
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
                <h1>Editar Producto</h1>
            </header>
            <section>
                <h2>Solo ingrese valores en los campos que desea cambiar</h2>
                <form id="formulario-producto">
                    <table>
                        <tbody>
                            <tr>
                                <td colspan="2">
                                    <label for="txtNombre">Nombre del Producto:</label>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="text" id="txtNombre" name="txtNombre" />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <label for="txtDescripcion">Descripción del Producto:</label>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <textarea id="txtDescripcion" name="txtDescripcion"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <label for="numPrecio">Precio del Producto ($):</label>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="number" id="numPrecio" name="numPrecio" step="0.01" />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <label for="imgImagen">Imagen del Producto:</label>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="file" id="imgImagen" name="imgImagen" accept="image/*" onChange={(e) => window.mostrarVistaPrevia && window.mostrarVistaPrevia(e)} />
                                    <img id="vista-previa" alt="Vista previa de imagen" />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <label for="numCantidad">Cantidad del Producto:</label>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input type="number" id="numCantidad" name="numCantidad" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="submit">Guardar Cambios</button>
                                </td>
                                <td>
                                    <button type="reset">Limpiar Formulario</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </section>
        </>
    )
}

export default EditarProducto;