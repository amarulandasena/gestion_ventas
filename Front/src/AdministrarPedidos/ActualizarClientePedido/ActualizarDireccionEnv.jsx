import { useState, useRef } from 'react';

import './FormatoActualizacionesClientePedido.css';

export const ActualizarDireccionEnv = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para validar los datos a actualizar.
  const[idPedido, setIdPedido] = useState(0);
  const[direccionEnvio, setDireccionEnvio] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventeDefault();

    // Validamos que se ingresaron toddos los datos.
    if(!direccionEnvio || !idPedido) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosCliente = {
      'direccionEnvio' : direccionEnvio
    }

    await fetch(`http://localhost:3001/actualizarPedido/actualizarDirección/${idPedido}`, {
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
          <label htmlFor="idPedido" className="form-label">Código del pedido: </label>
          <input type="text" className="form-control formatoInputCrear" id="idPedido" onChange = {(e) => setIdPedido(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor="direccionEnvio" className="form-label">Dirección:</label>
          <input type="text" className="form-control formatoInputCrear" id="direccionEnvio" onChange = {(e) => setDireccionEnvio(e.target.value)} required />
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
