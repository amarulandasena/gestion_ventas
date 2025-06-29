import { useState } from 'react';

import './FormatoActualizaciones.css';

export const ActualizarPeriodoPago = () => {

  // Hooks para validar los datos a actualizar.
  const[nit, setNit] = useState('');
  const[periodoPago, setPeriodoPago] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron toddos los datos.
    if(!nit || !periodoPago) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosCliente = {
      'periodoPago' : periodoPago
    }

    await fetch(`http://localhost:3001/actualizarClientes/actualizarPeriodoPago/${nit}`, {
      method : 'PUT',
      headers : { 
         'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosCliente),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
    })
  }

  return (
    <article className='col-4 col-md-4'>
      <form className="col-9 col-md-9 formatoActualizarCliente">
        <div className ="col-12 col-md-12">
          <label htmlFor="nit" className="form-label">Nit:</label>
          <input type="text" className="form-control formatoInput" id="nit" onChange = {(e) => setNit(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor = "periodoPago" className = "form-label">Periodo de pago:</label>
          <select className ="form-select formatoInput" id="periodoPago" onChange = {(e) => setPeriodoPago(e.target.value)} required>
            <option selected disabled value="">Seleccione el periodo de pago:</option>
            <option>30 días</option>
            <option>60 días</option>
            <option>90 días</option>
          </select>
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
