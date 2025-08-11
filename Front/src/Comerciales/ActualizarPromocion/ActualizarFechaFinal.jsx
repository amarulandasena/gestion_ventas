import { useState, useRef } from 'react';

import './FormatoActualizaciones.css';

export const ActualizarFechaFinal = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para validar los datos a actualizar.
  const[codigo, setCodigo] = useState('');
  const[fechaFinal, setFechaFinal] = useState(null);

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!codigo || !fechaFinal) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosPromocion = {
      'fechaFinal' : fechaFinal
    }

    await fetch(`http://localhost:3001/actualizarPromociones/actualizarFechaFinal/${codigo}`, {
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
          <label htmlFor="fechaFinal" className="form-label">Fecha de terminación:</label>
          <input type="date" className="form-control formatoInputCrear" id="fechaFinal" onChange = {(e) => setFechaFinal(e.target.value)} required />
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
