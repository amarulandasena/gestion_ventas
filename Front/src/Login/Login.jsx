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

  // Variables para redireccionar la navegación.
  const navegarPrincipal = useNavigate();
  const navegarInicio = useNavigate();

  // Hooks para validar el Login.
  const[numeroIdentificacion, setNumeroIdentificacion] = useState('');
  const[contrasegna, setContrasegna] = useState('');

  // Función para regresar a la página de inicio.
  const regresar = (e) => {
    e.preventDefault();

    navegarInicio('/');
  }

  // Función para ingresar a la aplicación.
  const ingresar = async (e) => {
  e.preventDefault();

  // Validamos que se hayan ingresado todos los datos.
  if(!numeroIdentificacion || !contrasegna) {
    alert('Ingrese su usuario y/o contraseña');
    return;
    }

  // Definimos el objeto para el envio de los datos.
  let datosUsuario = {
    'numIdentificacion' : numeroIdentificacion,
    'contrasegna' : contrasegna
  }

  await fetch ('http://localhost:3001/login', {
    method: 'POST',
    headers : {
      'Content-type' : 'application/json',
    },
    body : JSON.stringify(datosUsuario),
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.noEncontrado) {
      alert('Usuario no registrado')
    } else {
      alert('Bienvenido.')
      navegarPrincipal('/paginaPrincipal');
    }
  })
}

  return (
    <section className = "container formatoLogin">
      <div className = "row contenedorIngreso">
        <img src = {logoSoft}  alt = "logo A&D soft" className = "formatologo col-8 col-md-4" />

        <form className = "col-8 text-center needs-validation">
          <div className="mb-3 formatoLabelInput">
            <label htmlFor="numeroIdentificacion" className="form-label">Número de identificación:</label>
            <input type="text" className="form-control formatoInput" id="numeroIdentificacion" onChange = {(e) => setNumeroIdentificacion(e.target.value)} aria-describedby="emailHelp" placeholder="Sin puntos ni comas" required />
          </div>

          <div className="mb-3 formatoLabelInput">
            <label htmlFor="contrasegna" className="form-label">Contraseña:</label>
            <input type="password" className="form-control formatoInput" id="contrasegna" onChange = {(e) => setContrasegna(e.target.value)} placeholder="La asignada por los administradores" required />
          </div>

          <button type="button" className="btn btn-primary formatoBoton" onClick={regresar}>Cancelar</button>
          <button type="button" className="btn btn-primary formatoBoton" onClick={ingresar}>Ingresar</button>
           
        </form>
        <a href = "mailto:afmsamsung1981@gmail.com?subject=Recuperar contraseña&body=Número de identificación:    email:    celular:" className='formatoRecuperacion'> Olvidaste tu contraseña </a>
      </div>
    </section>
  )
}
