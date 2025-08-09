import { useState, useRef } from 'react';

import './FormatoActualizacionesProducto.css';

export const ActualizarDescuento = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para validar los datos a actualizar.
  const[idProducto, setIdProducto] = useState('');
  const[descuento, setDescuento] = useState(0);

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!idProducto || !descuento) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosProducto = {
      'descuento' : descuento
    }

    await fetch(`http://localhost:3001/actualizarProductos/actualizarDescuento/${idProducto}`, {
      method : 'PUT',
      headers : { 
         'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosProducto),
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
          <label htmlFor="idProducto" className="form-label">Código del producto:</label>
          <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor="descuento" className="form-label">Descuento:</label>
          <input type="number" className="form-control formatoInputCrear" id="descuento" onChange = {(e) => setDescuento(e.target.value)} required></input>
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
