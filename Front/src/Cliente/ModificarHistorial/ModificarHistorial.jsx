import { useState, useRef } from 'react';

import './FormatoModificaciones.css';

export const ModificarHistorial = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hook para la modificación del pago.
  const [idPago, setIdPago] = useState(0);
  const[fechaPago, setFechaPago] = useState(null);

  // Función para modificar la fecha del pago.
  const modificarHistorial = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!idPago || !fechaPago) {
      alert('Ingrese el pago a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosPago = {
      'historial' : fechaPago
    }

    await fetch(`http://localhost:3001/historial/actualizarFecha/${idPago}`, {
      method : 'PUT',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosPago),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
      limpiarFormulario.current.reset();
    })
  }

  return ( 
    <article className='col-12 col-md-4'>
      <form className="col-9 col-md-9 formatoActualizarCliente" ref={limpiarFormulario}>
        <div className ="col-12 col-md-12">
          <label htmlFor="idPago" className="form-label">Código del pago:</label>
          <input type="number" className="form-control formatoInput" id="idPago" onChange = {(e) => setIdPago(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor="fechaPago" className="form-label">Fecha de pago:</label>
          <input type="date" className="form-control formatoInputCrear" id="fechaPago" onChange = {(e) => setFechaPago(e.target.value)} required />
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificarHistorial}>Modificar</button>
        </div>
      </form>
    </article>

    
  )
}
