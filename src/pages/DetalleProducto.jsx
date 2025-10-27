
import { useState, useEffect } from "react";

const DetalleProducto = () => {
    useEffect(() => {
        if (!document.querySelector("script[src='/js/detalleProducto.js']")) {
            console.log("Detalle Producto No esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/detalleProducto.js"
            sc.async = true
            document.body.appendChild(sc)
            onload = () => {
                if (btnActualizarProducto) {
                    console.log("Actualizar Producto Funciona")
                }
            }
        } else {
            console.log("detalleProducto ya esta Cargado")
        }
    }, [])
    return (
        <div>
            <h1>Detalle Producto</h1>
            <table id="TablaDetUsu">
                <tbody id="CuerpoTabDetUsu">

                    <tr>
                        <td><label id="DetNombre">Nombre</label></td>
                        <td><label id="DetValNombre">Nombre</label></td>
                    </tr>

                    <tr>
                        <td><label id="DetDescripcion">Descripcion</label></td>
                        <td><label id="DetValDescripcion">Descripcion</label></td>
                    </tr>

                    <tr>
                        <td><label id="DetCategoria">Categoria</label></td>
                        <td><label id="DetValCategoria">Categoria</label></td>
                    </tr>

                    <tr>
                        <td><label id="DetPrecio">Precio</label></td>
                        <td><label id="DetValPrecio">Precio</label></td>

                    </tr>

                    <tr>
                        <td><label id="DetCantidad">Cantidad</label></td>
                        <td><label id="DetValCantidad">Cantidad</label></td>
                    </tr>

                    <tr>
                        <td><label id="DetCantCritica">Cantidad</label></td>
                        <td><label id="DetValCantCritica">Cantidad</label></td>
                    </tr>

                    <tr>
                        <td colSpan={2}><input type="button" value="Actualizar Producto" onClick={() => btnActualizarProducto()} /></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default DetalleProducto;