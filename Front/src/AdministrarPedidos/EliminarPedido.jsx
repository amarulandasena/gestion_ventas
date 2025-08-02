// Componente para eliminar un pedido registrado.

import { useState, useRef } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';
import '../Formatos/Eliminar.css';

export const EliminarPedido = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hook para validar el pedido.
  const[idPedido, setIdPedido] = useState(0);

  // Función para eliminar un pedido.
  const eliminar = async (e) => {
    e.preventDefault();

    const confirmacion = window.confirm(`¿Desea eliminar el pedido con el código ${idPedido}?`);

    if(confirmacion) { 

      if (!idPedido){
      alert('Ingrese el código del pedido.');
      return;
      }

      await fetch(`http://localhost:3001/pedido/${idPedido}`, {
      method : 'DELETE',
      })
      .then((response) => response.json())
      .then((data) => {
      alert(data.message);
      })

      await fetch(`http://localhost:3001/productosPedido/${idPedido}`, {
      method : 'DELETE',
      })
      .then((response) => response.json())
      .then((data) => {
      alert(data.message);
      })
    } else {
      alert('Cancelado.')
    }
    limpiarFormulario.current.reset();

  }

  return (
     <section className='container-fluid formatoEliminar'>
      <p> Ingrese el código del pedido que desea eliminar </p>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>

          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="idPedido" className="form-label">Código del pedido:</label>
            <input type="number" className="form-control formatoInput" id="idPedido" onChange = {(e) => setIdPedido(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {eliminar}>Eliminar</button>
          </div>

        </form>
      </article>
     </section>
  )
}
