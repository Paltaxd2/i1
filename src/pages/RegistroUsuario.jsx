import '../css/registroUsuarioEstilo.css'
import { useEffect } from 'react';

const RegistroUsuario = () => {
    useEffect(() => {
        // SweetAlert2
        if (!document.querySelector("script[src='https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js']")) {
            // Script 2
            console.log("weetalert2 no esta cargado")
            const sc = document.createElement("script")
            sc.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js"
            sc.async = true
            document.body.appendChild(sc)
        } else {
            console.log("Sweetalert2 ya esta cargado")
        }

        // Archivos Js
        // Usuario.js
        if (!document.querySelector("script[src='/js/usuario.js']")) {
            // Carga 
            console.log("Usuario no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/usuario.js"
            sc.async = true
            document.body.appendChild(sc)
        } else {
            console.log("Usuario ya esta cargado")
        }

        // RegistroUsuario.js
        if (!document.querySelector("script[src='/js/registroUsuario.js']")) {
            console.log("RegistroUsuario no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/registroUsuario.js"
            sc.async = true
            document.body.appendChild(sc)
            sc.onload = () => {
                if (window.cambioComuna) {
                    console.log("cambioComuna esta cargado")
                }
                if (window.valorComuna) {
                    console.log("valorComuna esta cargado")
                }
                /*
                if (window.guardarUsuario) {
                    console.log("guardarUsuario esta cargado")
                }
                */ 
                // No ejecutar ya que el programa 
                // intenta validar todo apenas se carga la pagina
            }
        } else {
            console.log("RegistroUsuario ya esta cargado")
        }
    }, [])


    return (
        <>
            <header>
                <h1>Registrar Usuario</h1>
            </header>
            <main>
                <section>
                    <form id="formulario-producto">
                        <table>
                            <tbody>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelNombre">Nombre Completo</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" id="txtNombre" name="txtNombre" required maxLength={50} />
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelRut">RUT</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" id="txtRut" name="txtRut" required maxLength={10} />
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelCorreo">Correo</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="email" id="txtCorreo" name="txtCorreo" required maxLength={100} />
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelCorreoConfirm">Confirmar Correo</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="email" id="txtCorreoConfirm" name="txtCorreoConfirm" required />
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelPass">Contraseña</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="password" name="txtPass" id="txtPass" required maxLength={10} />
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelPassConfirm">Confirmar Contraseña</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="password" name="txtPassConfirm" id="txtPassConfirm" required />
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
                                        <button type="submit">Registrarse</button>
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

export default RegistroUsuario;