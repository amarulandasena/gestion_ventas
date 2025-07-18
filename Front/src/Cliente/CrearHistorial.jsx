// Componente para el registro de los pagos hechos por los clientes.

import { useState } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Crear.css';
import '../Formatos/Eliminar.css';

export const CrearHistorial = () => {

  // Hook para el registro del pago del cliente.
  const[nit, setNit] = useState('');
  const[fechaPago, setFechaPago] = useState(null);
  const[valor, setValor] = useState(0);

  // Variable para almacenar el mensaje enviado por el servidor.
  let mensaje = '';

  // Función para ingresar el pago del cliente.
  const crearHistorial = async(e) => {
    e.preventDefault();

    if(!nit || !fechaPago || !valor) {
      alert('Ingrese todos los datos del pago a registrar.');
      return;
    }

    // Creamos el objeto para el envío de los datos.
    let datosPago = {
      'nit1' : nit,
      'historial' : fechaPago,
      'valor' : valor
    }

    await fetch('http://localhost:3001/historial/', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosPago),
    })
    .then((response) => response.json())
    .then((data) => {
      mensaje = data.message;
    })

    alert(mensaje);
  }

  return (
    <section className='container-fluid formatoEliminar'>
      <article className='row formatoCrearCliente'>
        
        <form className="row g-3 needs-validation">

          <div className ="col-md-12 col-lg-3">
            <label htmlFor="nit" className="form-label">Nit:</label>
            <input type="text" className="form-control formatoInputCrear" id="nit" onChange = {(e) => setNit(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-3">
            <label htmlFor="fechaPago" className="form-label">Fecha de pago:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaPago" onChange = {(e) => setFechaPago(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-3">
            <label htmlFor="valor" className="form-label">Valor:</label>
            <input type="number" className="form-control formatoInputCrear" id="valor" onChange = {(e) => setValor(e.target.value)} required />
          </div>

          <div className="col-md-12 col-lg-3">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {crearHistorial}>Registrar</button>
          </div>
        </form>
      </article>
    </section>
  )
}

