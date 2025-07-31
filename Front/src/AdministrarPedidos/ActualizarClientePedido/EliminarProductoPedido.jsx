import { useState, useRef } from 'react';

import './FormatoActualizacionesClientePedido.css';

export const EliminarProductoPedido = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para validar los datos a actualizar.
  const[idPedido, setIdPedido] = useState(0);
  const[idProducto, setIdProducto] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!idProducto || !idPedido) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosProducto = {
      'idProducto' : idProducto,
    }

    const confirmacion = window.confirm(`¿Desea eliminar el producto con código número ${idProducto}?`);

    if(confirmacion) {

      await fetch(`http://localhost:3001/actualizarProductoPedido/eliminarProducto/${idPedido}`, {
      method : 'DELETE',
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
      
    } else {
      alert('Cancelado.')
    }
    limpiarFormulario.current.reset();
  }

  return (
    <article className='col-12 col-md-4'>
      <form className="col-9 col-md-9 formatoActualizarCliente" ref={limpiarFormulario}>
        <div className ="col-12 col-md-12">
          <label htmlFor="idPedido" className="form-label">Código del pedido: </label>
          <input type="text" className="form-control formatoInputCrear" id="idPedido" onChange = {(e) => setIdPedido(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor="idProducto" className="form-label">Código del producto:</label>
          <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Eliminar</button>
        </div>
      </form>
    </article>
  )
}
