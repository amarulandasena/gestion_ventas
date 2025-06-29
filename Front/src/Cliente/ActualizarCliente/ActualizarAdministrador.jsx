import { useState } from 'react';

import './FormatoActualizaciones.css';

export const ActualizarAdministrador = () => {

  // Hooks para validar los datos a actualizar.
  const[nit, setNit] = useState('');
  const[administrador, setAdministrador] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron toddos los datos.
    if(!nit || !administrador) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosCliente = {
      'administrador' : administrador
    }

    await fetch(`http://localhost:3001/actualizarClientes/actualizarAdministrador/${nit}`, {
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
          <label htmlFor="administrador" className="form-label">Administrador:</label>
          <input type="text" className="form-control formatoInput" id="administrador" onChange = {(e) => setAdministrador(e.target.value)} required></input>
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
    
  )
}
