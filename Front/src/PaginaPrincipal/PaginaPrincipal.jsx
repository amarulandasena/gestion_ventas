// Componente para la página principal.

import { Link } from 'react-router-dom';

import './PaginaPrincipal.css';

import fundacionBelcorp3 from '../Imagenes/fundacionBelcorp3.jpeg';
import cyzone from '../Imagenes/cyzone.jpg';
import esika from '../Imagenes/esika.jpg';
import lbel1 from '../Imagenes/lbel1.jpg';
import colaborador1 from '../Imagenes/colaborador1.jpg';
import colaborador2 from '../Imagenes/colaborador2.jpg';
import colaborador3 from '../Imagenes/colaborador3.jpg';

export const PaginaPrincipal = () => {
  return (
    <section className = "container-fluid">
      <article className = "row">
        <div className = "col-12 col-xl-3 formatoPresentacionFundacion">
          <h1> POTENCIAMOS EL EMPRENDIMIENTO FEMENINO EN AMÉRICA LATINA. </h1>
          <img src = {fundacionBelcorp3} alt = "Fundación belcorp" id = "logoFundacion" />
        </div>
        <div className = "col-12 col-xl-8 formatoInfoFundacion">
          <h3> NUESTROS PROGRAMAS </h3>
          <p>
            Impulsamos el potencial de la mujer para transformar la sociedad. A través de programas que fortalecen su 
            liderazgo y capacidades emprendedoras, buscamos contribuir a su empoderamiento económico y a la construcción 
            de una sociedad más equitativa.
          </p>

          <h3> EMPRENDIENDO AVANZAMOS </h3>
          <p>
            El programa fortalece las habilidades blandas y competencias emprendedoras de los estudiantes, a través de 
            metodologías innovadoras y bajo un enfoque de igualdad de oportunidades, involucrando a actores clave de la 
            comunidad educativa. Trabajamos este programa de la mano de organizaciones aliadas a nivel regional.
          </p>

          <h3> MUJERES SIN LÍMITES </h3>
          <p>
            El programa fortalece el liderazgo y autoconfianza de mujeres emprendedoras y potencia sus habilidades en gestión 
            de negocios a través de sesiones de capacitación, mentoría y asesoría técnica.
          </p>
        </div>
      </article>

      <article className = "row formatoAccesosYproductos">
        <div className = "col-12 col-sm-3 col-xl-3" id = "accesosDirectos">
          <h3> ACCESOS DIRECTOS </h3>
          <ul>
            <li><Link to="/" className="dropdown-item formatoMenu">Consultar cliente</Link></li>
            <li><Link to="/" className="dropdown-item formatoMenu">Consultar empleado</Link></li>
            <li><Link to="/" className="dropdown-item formatoMenu">Crear pedido</Link></li>
            <li><Link to="/" className="dropdown-item formatoMenu">Consultar pedido</Link></li>
            <li><Link to="/" className="dropdown-item formatoMenu">Consultar precios</Link></li>
            <li><Link to="/" className="dropdown-item formatoMenu">Elaborar cotizaciones</Link></li>
            <li><Link to="/" className="dropdown-item formatoMenu">Consultar producto</Link></li>
          </ul>
        </div>

        <div className = "col-12 col-sm-9 col-xl-9 formatoFondoCatalogos">
          <h3> NUEVOS PRODUCTOS </h3>
          <div className = "distribucionCatalogos">
            <a href = "https://belcorp.esika.com/co/catalogo-virtual/" target = "_blank" rel="noreferrer">
              <img src = {esika} alt = "Esika" class = "formatoCatalogos" />
            </a>
            <a href = "https://lbel.tiendabelcorp.com.co/" target = "_blank" rel="noreferrer">
              <img src = {lbel1} alt = "Lbel" class = "formatoCatalogos" />
            </a>
            <a href = "https://cyzone.tiendabelcorp.com.co/" target = "_blank" rel="noreferrer">
              <img src = {cyzone} alt = "Cyzone" class = "formatoCatalogos" />
            </a>
          </div>
        </div>
      </article>

      <article className = "row formatoFamilia">
        <h3> NUESTRA FAMILIA BEL STAR </h3>
        <div className = "col-12 col-xl-2 text-center">
          <img src = {colaborador1} alt = "Marcos Resca" class = "formatoFotoColaborador rounded" />
          <p className = "text-center">Marcos Resca</p>
        </div>
        <p className = "col-12 col-xl-2">
          "El éxito es hacer cosas ordinarias extraordinariamente bien." Jim Rohn
        </p>

        <div className = "col-12 col-xl-2 text-center">
          <img src = {colaborador2} alt = "Veronica Melzi" class = "formatoFotoColaborador rounded" />
          <p className = "text-center">Veronica Melzi</p>
        </div>
        <p className = "col-12 col-xl-2">
          "No te lamentes por el pasado, ni te preocupes por el futuro, concéntrate en vivir el presente." Buddha
        </p>

        <div className = "col-12 col-xl-2 text-center">
          <img src = {colaborador3} alt = "Erika Herrero" class = "formatoFotoColaborador rounded" />
          <p className = "text-center">Érika Herrero</p>
        </div>
         <p className = "col-12 col-xl-2">
          "El mayor valor de la vida no es los que consigues, el mayor valor de la vida es en lo que te conviertes." Jim Rohn
        </p>
      </article>
    </section>
  )
}
