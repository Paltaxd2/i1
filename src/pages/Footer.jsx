const Footer = () => {
    return (
        <footer className="py-5 bg-dark text-light">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                    <a href="#">
                        <img src="img/logo.png" alt="Logo Irion Juguetería" style={{height: "60px"}}/>
                    </a>
                    <h5 className="mt-4">Horarios de Atención</h5>
                    <p>Lunes a Viernes: 11:00-19:00</p>
                    <p>Sábados: 11:00 - 14:30</p>
                    <h5 className="mt-4">Ubicación</h5>
                    <p>Avenida Libertador Bernardo O'Higgins 921, L134. Galería Santiago Centro, Metro U. de Chile.</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2380954554096!2d-70.65244042430949!3d-33.44310287339241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5810c327129%3A0x68851d80acfa3ecf!2sIRION%20Jugueter%C3%ADa!5e0!3m2!1ses-419!2scl!4v1757888148318!5m2!1ses-419!2scl" width="250" height="200" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="col-md-4 mb-4 mb-md-0">
                    <h5>Información</h5>
                    <ul className="list-unstyled">
                        <li><a href="contacto.html" className="text-light text-decoration-none">Contáctanos</a></li>
                        <li><a href="contacto.html" className="text-light text-decoration-none">Envíos y devoluciones</a></li>
                        <li><a href="#" className="text-light text-decoration-none">Políticas de privacidad</a></li>
                        <li><a href="#" className="text-light text-decoration-none">Términos y condiciones</a></li>
                        <li><a href="#" className="text-light text-decoration-none">Ubicación Tienda</a></li>
                    </ul>
                </div>

                <div className="col-md-4 mb-4 mb-md-0">
                    <h5>Servicio de Atención</h5>
                    <p>Consultas generales: <br/><a href="#" className="text-light text-decoration-none">Consultas@Level-Up.cl</a></p>
                    <p>Venta y Postventa: <br/><a href="#" className="text-light text-decoration-none">ventas@Level-Up.cl</a></p>
                </div>
            </div>

            <hr className="my-4"/>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="d-flex gap-3 mb-3 mb-md-0">
                    <a href="https://www.instagram.com/" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
                    <a href="https://x.com/?lang=es" className="text-light"><i className="bi bi-twitter fs-4"></i></a>
                    <a href="https://www.facebook.com/?locale=es_LA" className="text-light"><i className="bi bi-facebook fs-4"></i></a>
                    <a href="https://chat.whatsapp.com/F3I1sBXNfDSG6AJ3inXhCm" className="text-light"><i className="bi bi-whatsapp fs-4"></i></a>
                </div>
                <p className="mb-0 text-muted">© 2025 Level-Up Gamer. All Rights Reserved</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;