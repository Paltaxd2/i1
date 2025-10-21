import '../css/listaUsuarioEstilo.css'
import { useEffect } from 'react';

const Listausuario = () => {
    useEffect(() => {
        if(!document.querySelector("script[src='https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js']"))  {
            // Script 2
            console.log("no esta cargado")
            const sc = document.createElement("script")
            sc.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js"
            sc.async = true
            document.body.appendChild(sc)
        } 

        // Verificar si estan los 3 Scripts
        if (!document.querySelector("script[src='/js/usuario.js']")) {
            // Carga los 3 Scripts
            console.log("no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/usuario.js"
            sc.async = true
            document.body.appendChild(sc)
        } 

        if (!document.querySelector("script[src='/js/listaUsuario.js']")) {
            // Script 3
            console.log("no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/listaUsuario.js"
            sc.async = true
            document.body.appendChild(sc)
            sc.onload = () => {
                if (window.cargarLista()) {
                    window.cargarLista()
                }
            }
        } else {
            console.log("Esta todo cargado...")
        }
    })
    return (
        <>
            <h1 id='Titulo'>Tabla de Usuarios</h1>
            <main>
                <section>
                    <div id="tablaUsuarios"></div>
                </section>
            </main>
        </>
    )
}

export default Listausuario;