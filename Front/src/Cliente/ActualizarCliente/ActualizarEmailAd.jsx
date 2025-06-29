import { useState } from 'react';

import './FormatoActualizaciones.css';

export const ActualizarEmailAd = () => {

  // Hooks para validar los datos a actualizar.
  const[nit, setNit] = useState('');
  const[emailAdministrador, setEmailAdministrador] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron toddos los datos.
    if(!nit || !emailAdministrador) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosCliente = {
      'emailAdministrador' : emailAdministrador,
    }

    await fetch(`http://localhost:3001/actualizarClientes/actualizarEmailAdministrador/${nit}`, {
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
          <label htmlFor="emailAdministrador" className="form-label">Email administrador:</label>
          <input type="email" className="form-control formatoInput" id="emailAdministrador" onChange = {(e) => setEmailAdministrador(e.target.value)} required></input>
        </div>

         <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
