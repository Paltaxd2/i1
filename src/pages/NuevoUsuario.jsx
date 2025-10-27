import "../css/nuevoUsuarioEstilo.css"
import { useEffect } from "react"

const NuevoUsuario = () => {
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

        // Archivos Js
        // Usuario.js
        if (!document.querySelector("script[src='/js/usuario.js']")) {
            // Carga 
            console.log("no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/usuario.js"
            sc.async = true
            document.body.appendChild(sc)
        }

        // NuevoUsuario.js
        if (!document.querySelector("script[src='/js/nuevoUsuario.js']")) {
            console.log("NuevoUsuario no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/nuevoUsuario.js"
            sc.async = true
            document.body.appendChild(sc)
        } else {
            console.log("NuevoUsuario ya esta cargado")
        }
    }, [])
    return (
        <>
            <header>
                <h1>Nuevo Usuario</h1>
            </header>
            <main>
                <section>
                    <form id="formulario-producto">
                        <table>
                            <tbody>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelRut">Rut</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" id="txtRut" name="txtRut" maxLength={10} required/>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelNombre">Nombre Completo</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" id="txtNombre" name="txtNombre" maxLength={50} required/>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelCorreo">Correo</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="email" id="txtCorreo" name="txtCorreo" maxLength={100} required/>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelCorreoConfirm">Confirmar Correo</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="email" id="txtCorreoConfirm" name="txtCorreoConfirm" required/>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelPass">Contraseña</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="password" name="txtPass" id="txtPass" maxLength={10} required/>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelPassConfirm">Confirmar Contraseña</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="password" name="txtPassConfirm" id="txtPassConfirm" required/>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelTel">Numero Telefonico (Opcional)</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>+ 56 9</p>
                                    </td>
                                    <td>
                                        <input type="text" name="numTel" id="numTel" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        Rol :
                                        <select name="selRol" id="selRol" onChange={(e => window.cambUser && window.cambUser(e.target))}>
                                            <option value="NoRol">Seleccione un rol</option>
                                            <option value="1">Usuario</option>
                                            <option value="2">Vendedor</option>
                                            <option value="3">Administrador</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Region :
                                        <select name="selRegion" id="selRegion" onChange={(e) => window.cambioComuna && window.cambioComuna(e.target)}>
                                            <option value="Sin Region">Seleccione una Region</option>
                                            <option value="Metropolitana">Metropolitana</option>
                                            <option value="Valparaiso">Valparaiso</option>
                                            <option value="O Higgins">O´Higgins</option>
                                            <option value="Maule">Maule</option>
                                            <option value="Ñuble">Ñuble</option>
                                            Metropolitana, Valparaiso, O´Higgins, Maule, Ñuble
                                        </select>
                                    </td>
                                    <td>
                                        Comuna :
                                        <select name="selComuna" id="selComuna" onChange={(e) => window.valorComuna && window.valorComuna(e.target)}>
                                            <option value="1">Falta Region</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="submit">Crear Usuario</button>
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

export default NuevoUsuario;