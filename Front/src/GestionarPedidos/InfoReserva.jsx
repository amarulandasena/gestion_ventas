// Componente para el registro de la información de la reserva.

import { useState, useRef } from 'react';

import '../Formatos/Crear.css';
import '../Formatos/ComponentesComunes.css';

export const InfoReserva = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[nit, setNit] = useState('');
  const[numIdentificacion, setNumIdentificacion] = useState('');
  const[fechaReserva, setFechaReserva] = useState(null);
  const[fechaLimite, setFechaLimite] = useState(null);

  // Variable para almacenar el mensaje enviado por el servidor.
  let mensaje = '';
  let codigo = '';

  // Función para crear una reserva.
  const infoReserva = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!nit || !numIdentificacion || !fechaReserva || !fechaLimite){
      alert('Ingrese todos los datos de la reserva a registrar.');
      return;
    }

    // Creamos el objeto para el envío de los datos.
    let datosReserva = {
      'nit' : nit,
      'numIdentificacion' : numIdentificacion,
      'fechaReserva' : fechaReserva,
      'fechaLimite' : fechaLimite
    }

    await fetch('http://localhost:3001/reserva/', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosReserva),
    })
    .then((response) => response.json())
    .then((data) => {
      mensaje = data.message;
      codigo = data.id.idReserva;
        if(data.noCreado) {
          alert(mensaje);
        } else {
          alert(mensaje + ' con el código ' + codigo);
        }
    });

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
            <label htmlFor="numIdentificacion" className="form-label">Número de identificación:</label>
            <input type="text" className="form-control formatoInputCrear" id="numIdentificacion" onChange = {(e) => setNumIdentificacion(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="fechaReserva" className="form-label">Fecha de reserva:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaReserva" onChange = {(e) => setFechaReserva(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="fechaLimite" className="form-label">Fecha límite:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaLimite" onChange = {(e) => setFechaLimite(e.target.value)} required />
          </div>

          <div className="col-md-12">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {infoReserva}>Reservar</button>
          </div>
        </form>
      </article>
    </section>
  )
}
