// Componente para la barra de navegación de la aplicación.

import './BarraDeNavegacionApp.css';

import { Link } from 'react-router-dom';

import nombreEmpresa from '../Imagenes/logo_belcorp.png';

export const BarraDeNavegacionApp = ( { banderaBarra }) => {

  return (
    banderaBarra ? <div className="container-fluid">

      <nav className="navbar navbar-expand-xl barraNavegacion">
        <div className="container-fluid">
          <img src={nombreEmpresa} alt="logo-empresa" className="formatoLogoBarra" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Clientes
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/crearCliente" className="dropdown-item formatoMenu">Crear cliente</Link></li>
                  <li><Link to="actualizarCliente" className="dropdown-item formatoMenu">Modificar cliente</Link></li>
                  <li><Link to="/consultarCliente" className="dropdown-item formatoMenu">Consultar cliente</Link></li>
                  <li><Link to="/eliminarCliente" className="dropdown-item formatoMenu">Eliminar cliente</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Crear historial</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Modificar historial</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Consultar historial</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Personal
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/crearEmpleado" className="dropdown-item formatoMenu">Crear empleado</Link></li>
                  <li><Link to="/actualizarEmpleado" className="dropdown-item formatoMenu">Modificar empleado</Link></li>
                  <li><Link to="/consultarEmpleado" className="dropdown-item formatoMenu">Consultar empleado</Link></li>
                  <li><Link to="/eliminarEmpleado" className="dropdown-item formatoMenu">Eliminar empleado</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Administrar pedidos
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/" className="dropdown-item formatoMenu">Crear pedido</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Modificar pedido</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Consultar pedido</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Eliminar pedido</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gestionar pedidos
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/" className="dropdown-item formatoMenu">Rechazar pedido</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Reservar pedido</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Despachar pedido</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Comerciales
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/" className="dropdown-item formatoMenu">Consultar precios</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Administrar descuentos</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Administrar promociones</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Elaborar cotizaciones</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">Consultar cotizaciones</Link></li>
                  <li><Link to="/" className="dropdown-item formatoMenu">eliminar cotizaciones</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle formatoTituloMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/crearProducto" className="dropdown-item formatoMenu">Crear producto</Link></li>
                  <li><Link to="/actualizarProducto" className="dropdown-item formatoMenu">Modificar producto</Link></li>
                  <li><Link to="/consultarProducto" className="dropdown-item formatoMenu">Consultar producto</Link></li>
                  <li><Link to="/eliminarProducto" className="dropdown-item formatoMenu">Eliminar producto</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <Link to="/paginaPrincipal" className="nav-link active" aria-current="page">Inicio</Link>
              </li>
            </ul>
          </div>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 formatoMenu">
              <li className="nav-item dropdown">
                <Link to="/" className="nav-link active formatoMenu" aria-current="page">Cerrar Sesión</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div> : null
  )
}
