// Componente para actualizar datos de los clientes.

import { useState, useRef } from 'react';

import './FormatoActualizaciones.css';

export const ActualizarRazonSocial = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para validar los datos a actualizar.
  const[nit, setNit] = useState('');
  const[razonSocial, setRazonSocial] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron toddos los datos.
    if(!nit || !razonSocial) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosCliente = {
      'razonSocial' : razonSocial
    }

    await fetch(`http://localhost:3001/actualizarClientes/actualizarRazonSocial/${nit}`, {
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
      limpiarFormulario.current.reset();
    })
  }

  return (

    <article className='col-12 col-md-4'>
      <form className="col-9 col-md-9 formatoActualizarCliente" ref={limpiarFormulario}>
        <div className ="col-12 col-md-12">
          <label htmlFor="nit" className="form-label">Nit:</label>
          <input type="text" className="form-control formatoInput" id="nit" onChange = {(e) => setNit(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor="razonSocial" className="form-label">Razón social:</label>
          <input type="text" className="form-control formatoInput" id="razonSocial" onChange = {(e) => setRazonSocial(e.target.value)} required></input>
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>

  )
}
