import { useEffect } from "react";

const NavBar = () => {
    useEffect(() => {
        
        if(!document.querySelector("script[src='https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js']"))  {
            // Script 2
            console.log("sweetalert2 no esta cargado")
            const sc = document.createElement("script")
            sc.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.22.5/dist/sweetalert2.all.min.js"
            sc.async = true
            document.body.appendChild(sc)
        } else {
            console.log("sweetalert2 ya esta cargado")
        }
        
        if(!document.querySelector("script[src='/js/productos.js']"))  {
            // Script 3
            console.log("productos no esta cargado")
            const sc = document.createElement("script")
            sc.src = "/js/productos.js"
            sc.async = true
            document.body.appendChild(sc)
            sc.onload = () => {
                if(window.buscarEnTiempoReal){
                    console.log("buscarEnTiempoReal esta cargado")
                }
            }
        } else {
            console.log("productos ya esta cargado")
        }

        if(!document.querySelector("script[src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js']"))  {
            // Script 4
            console.log("bootstrap no esta cargado")
            const sc = document.createElement("script")
            sc.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            sc.async = true
            document.body.appendChild(sc)
        } else {
            console.log("bootstrap ya esta cargado")
        }

        if(!document.querySelector("link[href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css']")){
            // Bootstrap CSS
            console.log("bootstrap css no esta cargado")
            const link = document.createElement("link")
            link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            link.rel = "stylesheet"
            document.head.appendChild(link)
        } else {
            console.log("bootstrap css ya esta cargado")
        }


    }, [])
    return(
        <header className="border-bottom sticky-top bg-white">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid py-2 px-3">
                <a className="navbar-brand d-flex align-items-center me-auto me-lg-0" href="#">
                    <img src="img/logo.png" alt="Logo Level-Up Gamer" style={{height: "50px", marginRight: "15px"}}/>
                    <div className="fw-bold fs-5 d-none d-sm-block ">LEVEL-UP GAMER</div>
                </a>
                
                <div className="d-flex align-items-center ms-auto order-lg-2">
                    <form className="d-flex d-none d-md-flex position-relative" role="search">
                        <input 
                            id="search-input" 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Buscar..." 
                            aria-label="Buscar"
                            onInput={(e) => window.buscarEnTiempoReal && window.buscarEnTiempoReal(e)}
                        />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                        <div id="sugerencias-container" className="list-group position-absolute w-100 mt-5 border shadow" style={{zIndex: "1050", display: "none"}}>
                            </div>
                    </form>
                    <a className="text-success text-decoration-none ms-3" href="/inicioSesion">Iniciar sesión</a>
                    <a className="text-success text-decoration-none ms-3" href="/registroUsuario">Registrar sesión</a>
                    <a href="/listaProducto">Lista</a>

                    <a className="text-success text-decoration-none ms-3" href="carrito.html" id="carrito-link">
                        (<span id="cantidad-carrito">0</span>)
                    </a>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-end order-lg-1" id="navbarNav">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="home.html">Home</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><h6 className="dropdown-header">Productos</h6></li>
                                <li><a className="dropdown-item" href="#">consolas</a></li>
                                <li><a className="dropdown-item" href="#">accesorios</a></li>
                                <li><a className="dropdown-item" href="#">juegos de mesa</a></li>
                                <li><a className="dropdown-item" href="#">gundam</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="productos.html">Ver todo</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link text-dark fw-bold" href="contacto.html">Contacto</a></li>
                        <li className="nav-item d-md-none"><a className="nav-link text-primary" href="/inicioSesion">Iniciar sesión</a></li>
                        <li className="nav-item d-md-none"><a className="nav-link text-primary" href="carrito.html">🛒 Carrito</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default NavBar;