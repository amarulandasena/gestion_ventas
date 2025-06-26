import './Login.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logoSoft from '../Imagenes/logoSoft.jpg';

export const Login = ( {funcion, funcion1}) => {

   // Ocultamos la barra de navegación.
    useEffect(() => {
      funcion(false);
      return() => funcion(true);
    },[funcion]);

    // Ocultamos el pie de página.
    useEffect(() => {
      funcion1(false);
      return() => funcion1(true);
    },[funcion1]);

    // Hooks para validar el Login.
    const[numeroIdentificacion, setNumeroIdentificacion] = useState('');
    const[contrasegna, setContrasegna] = useState('');

  return (
    <section className = "container formatoLogin">
      <div className = "row contenedorIngreso">
        <img src = {logoSoft}  alt = "logo A&D soft" className = "formatologo col-8 col-md-4" />

         <form className = "text-center needs-validation">
            <div className="mb-3">
              <label htmlFor="numeroIdentificacion" className="form-label">Número de identificación:</label>
              <input type="text" className="form-control formatoInput" id="numeroIdentificacion" onChange = {(e) => setNumeroIdentificacion(e.target.value)} aria-describedby="emailHelp" placeholder="Sin puntos ni comas" required />
            </div>

            <div className="mb-3">
              <label htmlFor="contrasegna" className="form-label">Contraseña:</label>
              <input type="password" className="form-control formatoInput" id="contrasegna" onChange = {(e) => setContrasegna(e.target.value)} placeholder="La asignada por los administradores" required />
            </div>

            <button type="submit" className="btn btn-primary formatoBoton">Ingresar</button>
         </form>
      </div>

    </section>
  )
}
