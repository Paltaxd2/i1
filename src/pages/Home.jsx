import '../css/home.css'
import { useEffect } from "react";
const Home = () => {
    return (
        <>
        <main className="container py-5">
        <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
                <h1>LEVEL-UP GAMER</h1>
                <p>Conviértete en el héroe de tu propia historia y únete a nuestra comunidad de jugadores. ¡Explora, juega y gana con nosotros!</p>
                <a href="somos.html" className="btn btn-light">
                    Quienes somos 👥
                </a>
            </div>
            <div className="col-md-6 bg-light border border-2 border-dashed">
                <img src="img/foto_tienda.jpg" className="img-fluid" alt="Imagen de la tienda"/>
            </div>
        </div>
    </main>

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="carousel-img-container">
                    <img src="img/banner1.jpg" className="d-block w-100" alt="Primer banner"/>
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <h5>deep rock galactic</h5>
                    <p>nuevo juego de mesa</p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-img-container">
                    <img src="img/banner_2.jpeg" className="d-block w-100" alt="Segundo banner"/>
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <h5>steam deck</h5>
                    <p>nueva consola</p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-img-container">
                    <img src="img/banner3.jpg" className="d-block w-100" alt="Tercer banner"/>
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <h5>GeForce RTX 5090e</h5>
                    <p>nueva targeta grafica</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <br/>
    <br/>

    <div> 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            <div className="col">
                <a href="detalle_catan.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/catan.jpg" className="card-img-top" alt="Juego de Mesa Catan"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Catán</p>
                            <p className="card-text text-muted">Juego de Mesa Básico</p>
                            <p className="card-text">$29.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="col">
                <a href="detalle_Carcassonne.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/Carcassonne.jpg" className="card-img-top" alt="Juego de Mesa Carcassonne"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Carcassonne</p>
                            <p className="card-text text-muted">Juego de Mesa Básico 2da Edición</p>
                            <p className="card-text">$26.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="col">
                <a href="detalle_play5.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/play5.jpg" className="card-img-top" alt="Consola PS5 Slim Digital"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Play 5 (PS5 Slim Digital)</p>
                            <p className="card-text text-muted">Consola PS5 Slim Digital</p>
                            <p className="card-text">$589.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="col">
                <a href="detalle_control_xbox.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/Control_Xbox.jpg" className="card-img-top" alt="Control de Xbox"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Control Xbox</p>
                            <p className="card-text text-muted">Control Inalámbrico</p>
                            <p className="card-text">$59.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="col">
                <a href="detalle_Mouse_Logitech.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/mouse_Logitech_G502_HERO.jpg" className="card-img-top" alt="Mouse Logitech G502"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Mouse Logitech G502 Hero</p>
                            <p className="card-text text-muted">Mouse Gamer Logitech G502 HERO</p>
                            <p className="card-text">$48.280 CLP</p>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="col">
                <a href="detalle_ASUS_ROG.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/laptop.jpg" className="card-img-top" alt="Laptop ASUS ROG Strix G15 G513RC"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">ASUS ROG Strix G15 G513RC</p>
                            <p className="card-text text-muted">Laptop Gamer</p>
                            <p className="card-text">$849.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="col">
                <a href="detalle_silla_omen.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/silla_omen.jpg" className="card-img-top" alt="Silla Gamer Omen"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Silla Gamer Omen</p>
                            <p className="card-text text-muted">Silla Gamer Omen</p>
                            <p className="card-text">$249.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="col">
                <a href="detalle_Steam_Deck.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/Steam-Deck-2.jpg" className="card-img-top" alt="Consola Portátil Steam Deck"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Steam Deck</p>
                            <p className="card-text text-muted">Consola Portátil</p>
                            <p className="card-text">$499.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col">
                <a href="detalle_Deep_Rock.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/deep_rocket" className="card-img-top" alt="Deep Rock Galactic juego de mesa"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Deep Rock Galactic (juego de mesa)</p>
                            <p className="card-text text-muted">Juego de mesa</p>
                            <p className="card-text">$39.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col">
                <a href="detalle_Exploding_Kittens.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/gato_bomba.jpeg" className="card-img-top" alt="Exploding Kittens juego de mesa"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Exploding Kittens (juego de mesa)</p>
                            <p className="card-text text-muted">Juego de mesa</p>
                            <p className="card-text">$20.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col">
                <a href="detalle_gundam.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/gundam.jpg" className="card-img-top" alt="Gundam Barbatos model kit"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Gundam Barbatos model kit</p>
                            <p className="card-text text-muted">Model kit</p>
                            <p className="card-text">$39.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="col">
                <a href="detalle_pokemon.html" className="text-decoration-none text-dark">
                    <div className="card h-100">
                        <img src="img/pokemon.jpg" className="card-img-top" alt="Pokémon Espada y Escudo"/>
                        <div className="card-body text-center">
                            <p className="card-title fw-bold">Pokémon Espada y Escudo (juego)</p>
                            <p className="card-text text-muted">Juego de Nintendo Switch</p>
                            <p className="card-text">$39.990 CLP</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home;