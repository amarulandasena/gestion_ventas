// Componente para el registro de un nuevo empleado.

import { useState, useRef } from 'react';

import '../Formatos/Crear.css';
import '../Formatos/ComponentesComunes.css';

export const CrearEmpleado = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[numIdentificacion, setNumIdentificacion] = useState('');
  const[nombres, setNombres] = useState('');
  const[apellidos, setApellidos] = useState('');
  const[fechaNacimiento, setFechaNacimiento] = useState(null);
  const[direccion, setDireccion] = useState(''); 
  const[numtelefonico, setNumTelefonico] = useState(''); 
  const[numcelular, setNumCelular] = useState(''); 
  const[email, setEmail] = useState(''); 
  const[contacto, setContacto] = useState(''); 
  const[numContacto, setNumContacto] = useState('');
  const[cargo, setCargo] = useState(''); 
  const[fechaIngreso, setFechaIngreso] = useState(null);
  const[status, setStatus] = useState(0);
  const[contrasegna, setContrasegna] = useState('');

  // Variable para almacenar el mensaje enviado por el servidor.
  let mensaje = '';

  // Función para crear un empleado.
  const crearEmpleado = async (e) => { 
    e.preventDefault(e);

    // Validamos que se ingresaron todos los datos.
    if (!numIdentificacion || !nombres || !apellidos || !fechaNacimiento || !direccion || !numtelefonico || !numcelular || !email 
        ||!contacto ||!numContacto ||!cargo ||!fechaIngreso || !status || !contrasegna) {
        alert('Ingrese todos los datos del empleado a registrar.');
        return;
    }

    // Creamos el objeto para el envío de los datos.
    let datosEmpleado = {
      'numIdentificacion' : numIdentificacion,
      'nombres' : nombres, 
      'apellidos' : apellidos,
      'fechaNacimiento' : fechaNacimiento, 
      'direccion' : direccion, 
      'numtelefonico' : numtelefonico, 
      'numcelular' : numcelular, 
      'email' : email, 
      'contacto' : contacto, 
      'numContacto' : numContacto, 
      'cargo' : cargo, 
      'fechaIngreso' : fechaIngreso, 
      'status' : status, 
      'contrasegna' : contrasegna
    }

    await fetch('http://localhost:3001/empleado/', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosEmpleado),
    })
    .then((response) => response.json())
    .then((data) => {
      mensaje = data.message;
    });

    alert(mensaje);
    limpiarFormulario.current.reset();
  }


  return (
    
    <section className='container-fluid'>
      <article className='row formatoCrearCliente'>

        <form className="row g-3 needs-validation" ref={limpiarFormulario}>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="numIdentificacion" className="form-label">Número de identificación:</label>
            <input type="text" className="form-control formatoInputCrear" id="numIdentificacion" onChange = {(e) => setNumIdentificacion(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="nombres" className="form-label">Nombres:</label>
            <input type="text" className="form-control formatoInputCrear" id="nombres" onChange = {(e) => setNombres(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="apellidos" className="form-label">Apellidos:</label>
            <input type="text" className="form-control formatoInputCrear" id="apellidos" onChange = {(e) => setApellidos(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaNacimiento" onChange = {(e) => setFechaNacimiento(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="direccion" className="form-label">Dirección:</label>
            <input type="text" className="form-control formatoInputCrear" id="direccion" onChange = {(e) => setDireccion(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="numTelefonico" className="form-label">Número telefónico:</label>
            <input type="text" className="form-control formatoInputCrear" id="numTelefonico" onChange = {(e) => setNumTelefonico(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="numCelular" className="form-label">Número celular:</label>
            <input type="text" className="form-control formatoInputCrear" id="numCelular" onChange = {(e) => setNumCelular(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control formatoInputCrear" id="email" onChange = {(e) => setEmail(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="contacto" className="form-label">Contacto:</label>
            <input type="text" className="form-control formatoInputCrear" id="contacto" onChange = {(e) => setContacto(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="numContacto" className="form-label">Número de contacto:</label>
            <input type="text" className="form-control formatoInputCrear" id="numContacto" onChange = {(e) => setNumContacto(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="cargo" className="form-label">Cargo:</label>
            <input type="text" className="form-control formatoInputCrear" id="cargo" onChange = {(e) => setCargo(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="fechaIngreso" className="form-label">Fecha de ingreso:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaIngreso" onChange = {(e) => setFechaIngreso(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="status" className="form-label">Status:</label>
            <input type="number" className="form-control formatoInputCrear" id="status" onChange = {(e) => setStatus(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="contrasegna" className="form-label">Contraseña:</label>
            <input type="password" className="form-control formatoInputCrear" id="contrasegna" onChange = {(e) => setContrasegna(e.target.value)} required />
          </div>

          <div className="col-md-12">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {crearEmpleado}>Crear</button>
          </div>

          
        </form>
      </article>
    </section>
  )
}
