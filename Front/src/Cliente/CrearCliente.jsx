// Componente para el registro de un nuevo cliente

import { useState, useRef } from 'react';

import '../Formatos/Crear.css';
import '../Formatos/ComponentesComunes.css';

export const CrearCliente = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[nit, setNit] = useState('');
  const[razonSocial, setRazonSocial] = useState('');
  const[ciudad, setCiudad] = useState('');
  const[direccion, setDireccion] = useState('');
  const[numeroTelefonico, setNumeroTelefonico] = useState('');
  const[email, setEmail] = useState('');
  const[administrador, setAdministrador] = useState('');
  const[numeroAdministrador, setNumeroAdministrador] = useState('');
  const[emailAdministrador, setEmailAdministrador] = useState('');
  const[sector, setSector] = useState('');
  const[actividad, setActividad] = useState('');
  const[tamagno, setTamagno] = useState('');
  const[numEmpleados, setNumEmpleados] = useState(0);
  const[categoria, setCategoria] = useState('');
  const[periodoPago, setPeriodoPago] = useState('');

  // Variable para almacenar el mensaje enviado por el servidor.
  let mensaje = '';

  // Función para crear un usuario.
  const crearCliente = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if (!nit || !razonSocial || !ciudad || !direccion || !numeroTelefonico || !email || !administrador || !numeroAdministrador || !emailAdministrador 
      ||!sector ||!actividad ||!tamagno || !numEmpleados || !categoria || !periodoPago) {
        alert('Ingrese todos los datos del cliente a registrar.');
        return;
    }

    // Creamos el objeto para el envío de los datos.
    let datosCliente = {
      'nit' : nit,
      'razonSocial' : razonSocial,
      'ciudad' : ciudad,
      'direccion' : direccion,
      'numTelefonico' : numeroTelefonico,
      'email' : email,
      'administrador' : administrador,
      'telAdministrador' : numeroAdministrador,
      'emailAdministrador' : emailAdministrador,
      'sector' : sector,
      'actividad' : actividad,
      'tamagno' : tamagno,
      'numEmpleados' : numEmpleados,
      'producto' : categoria,
      'periodoPago' : periodoPago
    }

    await fetch('http://localhost:3001/cliente/', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosCliente),
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
            <label htmlFor="nit" className="form-label">Nit:</label>
            <input type="text" className="form-control formatoInputCrear" id="nit" onChange = {(e) => setNit(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="razonSocial" className="form-label">Razón social:</label>
            <input type="text" className="form-control formatoInputCrear" id="razonSocial" onChange = {(e) => setRazonSocial(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="ciudad" className="form-label">Ciudad:</label>
            <input type="text" className="form-control formatoInputCrear" id="ciudad" onChange = {(e) => setCiudad(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="direccion" className="form-label">Dirección:</label>
            <input type="text" className="form-control formatoInputCrear" id="direccion" onChange = {(e) => setDireccion(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="numeroTelefonico" className="form-label">Número telefónico:</label>
            <input type="text" className="form-control formatoInputCrear" id="numeroTelefonico" onChange = {(e) => setNumeroTelefonico(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control formatoInputCrear" id="email" onChange = {(e) => setEmail(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="administrador" className="form-label">Administrador:</label>
            <input type="text" className="form-control formatoInputCrear" id="administrador" onChange = {(e) => setAdministrador(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="numeroAdministrador" className="form-label">Número telefónico administrador:</label>
            <input type="text" className="form-control formatoInputCrear" id="numeroAdministrador" onChange = {(e) => setNumeroAdministrador(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="emailAdministrador" className="form-label">Email administrador:</label>
            <input type="email" className="form-control formatoInputCrear" id="emailAdministrador" onChange = {(e) => setEmailAdministrador(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor = "sector" className = "form-label">Sector:</label>
            <select className ="form-select formatoInputCrear" id="sector" onChange = {(e) => setSector(e.target.value)} required>
              <option selected disabled value="">Seleccione el sector:</option>
              <option>Primario</option>
              <option>Secundario</option>
              <option>Terciario</option>
              <option>Cuaternario</option>
            </select>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="actividad" className="form-label">Actividad:</label>
            <input type="text" className="form-control formatoInputCrear" id="actividad" onChange = {(e) => setActividad(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor = "tamagno" className = "form-label">Tamaño:</label>
            <select className ="form-select formatoInputCrear" id="tamagno" onChange = {(e) => setTamagno(e.target.value)} required>
              <option selected disabled value="">Seleccione el tamaño:</option>
              <option>Micro</option>
              <option>Pequeña</option>
              <option>Mediana</option>
              <option>Famiempresa</option>
            </select>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="numEmpleados" className="form-label">Número de empleados:</label>
            <input type="number" className="form-control formatoInputCrear" id="numEmpleados" onChange = {(e) => setNumEmpleados(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor = "producto" className = "form-label">Producto:</label>
            <select className ="form-select formatoInputCrear" id="producto" onChange = {(e) => setCategoria(e.target.value)} required>
              <option selected disabled value="">Seleccione la categoría:</option>
              <option>Categoría uno</option>
              <option>Categoría dos</option>
              <option>Categoría tres</option>
              <option>Categoría cuatro</option>
            </select>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor = "periodoPago" className = "form-label">Periodo de pago:</label>
            <select className ="form-select formatoInputCrear" id="periodoPago" onChange = {(e) => setPeriodoPago(e.target.value)} required>
              <option selected disabled value="">Seleccione el periodo de pago:</option>
              <option>30 días</option>
              <option>60 días</option>
              <option>90 días</option>
            </select>
          </div>

          <div className="col-md-12">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {crearCliente}>Crear</button>
          </div>


        </form>
      </article>

    </section>
  )
}
