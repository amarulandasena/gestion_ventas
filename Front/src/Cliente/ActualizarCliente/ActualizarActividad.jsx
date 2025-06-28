import { useState } from 'react';

import './ActualizarCliente.css';

export const ActualizarActividad = () => {

  // Hooks para validar los datos a actualizar.
  const[nit, setNit] = useState('');
  const[actividad, setActividad] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron toddos los datos.
    if(!nit || !actividad) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosCliente = {
      'actividad' : actividad
    }

    await fetch(`http://localhost:3001/actualizarClientes/actualizarActividad/${nit}`, {
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
          <input type="text" className="form-control" id="nit" onChange = {(e) => setNit(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor="actividad" className="form-label">Actividad:</label>
          <input type="text" className="form-control" id="actividad" onChange = {(e) => setActividad(e.target.value)} required></input>
        </div>

        <div className="col-12 col-md-12 formatoContenedorBoton">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>

      </form>
    </article>
  )
}
