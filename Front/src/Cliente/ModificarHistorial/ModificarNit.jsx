import { useState, useRef } from 'react';

import './FormatoModificaciones.css';

export const ModificarNit = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para validar los datos a actualizar.
  const [idPago, setIdPago] = useState(0);
  const[nit1, setNit1] = useState('');

  // Función para modificar el nit del cliente.
  const modificarNit = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron toddos los datos.
    if(!idPago || !nit1) {
      alert('Ingrese el pago a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosPago = {
      'nit1' : nit1
    }

    await fetch(`http://localhost:3001/historial/actualizarNit/${idPago}`, {
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
          <label htmlFor="nit1" className="form-label">Nit:</label>
          <input type="text" className="form-control formatoInput" id="nit1" onChange = {(e) => setNit1(e.target.value)} required />
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificarNit}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
