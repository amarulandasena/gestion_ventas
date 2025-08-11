import { useState, useRef } from 'react';

import './FormatoActualizaciones.css';

export const ActualizarDescripcion = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para validar los datos a actualizar.
  const[codigo, setCodigo] = useState('');
  const[descripcion, setDescripcion] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!codigo || !descripcion) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosPromocion = {
      'descripcion' : descripcion
    }

    await fetch(`http://localhost:3001/actualizarPromociones/actualizarDescripcion/${codigo}`, {
      method : 'PUT',
      headers : { 
         'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosPromocion),
    })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      limpiarFormulario.current.reset();
    })
  }

  return (
    <article className='col-12 col-md-4'>
      <form className="col-9 col-md-9 formatoActualizarCliente" ref={limpiarFormulario}>
        <div className ="col-12 col-md-12">
          <label htmlFor="codigo" className="form-label">Código:</label>
          <input type="text" className="form-control formatoInput" id="codigo" onChange = {(e) => setCodigo(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor="descripcion" className="form-label">Descripción:</label>
          <input type="text" className="form-control formatoInput" id="descripcion" onChange = {(e) => setDescripcion(e.target.value)} required />
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
