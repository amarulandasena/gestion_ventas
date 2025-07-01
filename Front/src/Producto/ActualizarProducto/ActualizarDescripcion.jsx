import { useState } from 'react';

import './FormatoActualizacionesProducto.css';

export const ActualizarDescripcion = () => {

  // Hooks para validar los datos a actualizar.
  const[idProducto, setIdProducto] = useState('');
  const[descripcion, setDescripcion] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => { 
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!idProducto || !descripcion) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosProducto = {
      'descripcion' : descripcion
    }

    await fetch(`http://localhost:3001/actualizarProductos/actualizarDescripcion/${idProducto}`, {
      method : 'PUT',
      headers : { 
         'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosProducto),
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
          <label htmlFor="idProducto" className="form-label">Código del producto:</label>
          <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
        </div>

        <div className="form-floating col-12 col-md-12">
          <textarea className="form-control formatoInputCrear" placeholder="Leave a comment here" id="descripcion" onChange={(e) => setDescripcion(e.target.value)} required></textarea>
          <label htmlFor="descripcion">Descripción</label>
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
