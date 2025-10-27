import "../css/inicioSesion.css"
import { useEffect } from "react"


const InicioSesion = () => {
    useEffect(() => {
        // SweetAlert2
        if (!document.querySelector("script[src='https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js']")) {
            // Script 2
            console.log("Sweetalert2 no esta cargado 1")
            const sc = document.createElement("script")
            sc.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js"
            sc.async = true
            document.body.appendChild(sc)
        } else {
            console.log("Sweetalert2 Ya esta cargado")
        }

        // Archivos Js
        // Usuario.js
        if (!document.querySelector("script[src='/js/usuario.js']")) {
            // Carga 
            console.log("Usuario no esta cargado 2")
            const sc = document.createElement("script")
            sc.src = "/js/usuario.js"
            sc.async = true
            document.body.appendChild(sc)
        } else {
            console.log("Usuario Ya esta cargado")
        }

        // InicioSesion.js
        if (!document.querySelector("script[src='/js/inicioSesion.js']")){
            console.log("IncioSesion no esta cargado 3")
            const sc = document.createElement("script")
            sc.src = "/js/inicioSesion.js"
            document.body.appendChild(sc)
        } else {
            console.log("IncioSesion Ya esta cargado")
        }
    }, [])
    return (
        <>
            <header>
                <h1>Iniciar Sesion</h1>
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
                                        <input type="text" id="txtNombre" name="txtNombre" />
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelCorreo">Correo</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="email" id="txtCorreo" name="txtCorreo" />
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="2">
                                        <label id="labelPass">Contraseña</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="password" name="txtPass" id="txtPass" />
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
                                        <button type="submit">Iniciar Sesion</button>
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

export default InicioSesion;