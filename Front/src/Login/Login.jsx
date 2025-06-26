// Componente para la página de inicio.

import { Link } from 'react-router-dom';

import './Login.css'

import nombreEmpresa from '../Imagenes/nombreEmpresa.png';
import zapatos from '../Imagenes/zapatos.jpeg';
import camiseta_1 from '../Imagenes/camiseta_1.png';
import bolsoDama_1 from '../Imagenes/bolsoDama_1.jpg';
import bolsoDeportivo_1 from '../Imagenes/bolsoDeportivo_1.jpg';


export const Login = ( ) => {
  return (
    <div className="container-fluid">

      <nav className="navbar navbar-expand-xl barraNavegacion">
        <div class="container-fluid">

          <img src={nombreEmpresa} alt="logo-empresa" className="formatoLogoBarra" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categoría Uno
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría uno-uno</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría uno-dos</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría uno-tres</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría uno-cuatro</Link></li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categoría Dos
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría dos-uno</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría dos-dos</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría dos-tres</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría dos-cuatro</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría dos-cinco</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría dos-seis</Link></li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categoría Tres
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría tres-uno</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría tres-dos</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría tres-tres</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría tres-cuatro</Link></li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categoría Cuatro
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría cuatro-uno</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría cuatro-dos</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría cuatro-tres</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Categoría cuatro-cuatro</Link></li>
                </ul>
              </li>
            </ul>

            <button type="button" class="btn btn-primary iniciarSesion">Iniciar Sesión</button>
            
            <i class="bi bi-facebook"></i>

            <i class="bi bi-instagram"></i>

            <i class="bi bi-whatsapp"></i>
          </div>
        </div>
      </nav>  

      <section id="carouselExampleCaptions" className="carousel carousel-dark slide carrusel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <i className="bi bi-card-image formatoLogoCarrusel"></i>
            <div className="carousel-caption d-none d-md-block formatoTextoCarrusel">
              <h5>NUEVA COLECCIÓN</h5>
              <p>Click aquí y conoce nuestros nuevos productos.</p>
            </div>
          </div>
          <div className="carousel-item">
            <i class="bi bi-card-image formatoLogoCarrusel"></i>
            <div className="carousel-caption d-none d-md-block formatoTextoCarrusel">
              <h5>50% DE DESCUENTO</h5>
              <p>En referencias seleccionadas.</p>
            </div>
            
          </div>
          <div className="carousel-item">
            <i class="bi bi-card-image formatoLogoCarrusel"></i>
            <i class="bi bi-card-image formatoLogoCarrusel"></i>
            <i class="bi bi-card-image formatoLogoCarrusel"></i>
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
      </section>  

      <section className = "container-fluid carrusel">
        <div className="row formatoProductos">
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src={zapatos} alt="zapatos" className="" />
                <p className="card-text formatoTextoCarrusel">Sneaker Lace up $180.000</p>  
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src={camiseta_1} alt="camiseta para dama" className="" />
                <p className="card-text formatoTextoCarrusel">Camiseta para dama $100.000</p>  
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src={bolsoDama_1} alt="Bolso para dama" className="" />
                <p className="card-text formatoTextoCarrusel">Bolso para dama $140.000</p>  
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-3 mb-sm-0">
            <p className="formatoTextoCarrusel textoPara">PARA ELLAS</p> 
          </div>
        </div>
      </section>

      <section className = "container-fluid carrusel">
        <div className="row formatoProductos">
          <div className="col-sm-3 mb-3 mb-sm-0">
            <p className="formatoTextoCarrusel textoPara">PARA ELLOS</p> 
          </div>

          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src={zapatos} alt="zapatos" className="" />
                <p className="card-text formatoTextoCarrusel">Black men shoes $180.000</p>  
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src={camiseta_1} alt="camiseta para caballero" className="" />
                <p className="card-text formatoTextoCarrusel">T-shirt hombre $180.000</p>  
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src={bolsoDeportivo_1} alt="Bolso deportivo" className="" />
                <p className="card-text formatoTextoCarrusel">Bolso deportivo $150.000</p>  
              </div>
            </div>
          </div>
        </div>

       

      </section>
    </div>
  )
}
