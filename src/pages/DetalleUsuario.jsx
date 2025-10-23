
import { useEffect } from "react";

const DetalleUsuario = () => {
    useEffect(() => {
        if (!document.querySelector("script[src='/js/detalleUsuario.js']")){
            console.log("No esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/detalleUsuario.js"
            sc.async = true
            document.body.appendChild(sc)
        }
    })
    return (
        <div id="DetalleUsuario">
            <h1 id="TituloDet">Detalle Usuario</h1>
            <table id="TablaDetUsu">
                <tbody id="CuerpoTabDetUsu">

                    <tr>
                        <td><label id="DetRut">Rut</label></td>
                        <td><label id="DetValRut">Rut</label></td>
                    </tr>

                    <tr>
                        <td><label id="DetNombre">Nombre</label></td>
                        <td><label id="DetValNombre">Nombre</label></td>
                    </tr>

                    <tr>
                        <td><label id="DetCorreo">Correo</label></td>
                        <td><label id="DetValCorreo">Correo</label></td>

                    </tr>

                    <tr>
                        <td><label id="DetTelefono">Telefono</label></td>
                        <td><label id="DetValTelefono">Telefono</label></td>

                    </tr>

                    <tr>
                        <td><label id="DetRegion">Region</label></td>
                        <td><label id="DetValRegion">Region</label></td>
                    </tr>

                    <tr>
                        <td><label id="DetComuna">Comuna</label></td>
                        <td><label id="DetValComuna">Comuna</label></td>
                    </tr>

                    <tr>
                        <td><label id="DetRol">Rol</label></td>
                        <td><label id="DetValRol">Rol</label></td>
                    </tr>

                    <tr>
                        <td><input type="button" value="Actualizar Usuario" /></td>
                        <td><input type="button" value="Historial de Compras" /></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default DetalleUsuario;