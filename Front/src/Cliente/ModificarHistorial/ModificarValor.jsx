import { useState } from 'react';

import './FormatoModificaciones.css';

export const ModificarValor = () => {

  // Hook para la modificación del pago.
  const [idPago, setIdPago] = useState(0);
  const [valor, setValor] = useState(0);

  // Función para modificar el valor del pago.
  const modificarValor = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!idPago || !valor) {
      alert('Ingrese el pago a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosPago = {
      'valor' : valor
    }

    await fetch(`http://localhost:3001/historial/actualizarValor/${idPago}`, {
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
    })
  }

  return (
    <article className='col-12 col-md-4'>
      <form className="col-9 col-md-9 formatoActualizarCliente">
        <div className ="col-12 col-md-12">
          <label htmlFor="idPago" className="form-label">Código del pago:</label>
          <input type="number" className="form-control formatoInput" id="idPago" onChange = {(e) => setIdPago(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor="valor" className="form-label">Valor:</label>
          <input type="number" className="form-control formatoInputCrear" id="valor" onChange = {(e) => setValor(e.target.value)} required />
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificarValor}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
