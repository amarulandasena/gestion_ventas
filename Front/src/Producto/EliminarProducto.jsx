// Componente para eliminar un producto registrado.

import { useState } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';
import '../Formatos/Eliminar.css';

export const EliminarProducto = () => {

  // Hooks para capturar los datos.
  const[idProducto, setIdProducto] = useState('');

  // Función para eliminar un cliente.
  const eliminar = async (e) => { 
    e.preventDefault();

    const confirmacion = window.confirm(`¿Desea eliminar el producto con código número ${idProducto}?`);

    if(confirmacion) {
      
      if (!idProducto){
      alert('Ingrese el código del producto');
      return;
      }

      await fetch(`http://localhost:3001/producto/${idProducto}`, {
      method : 'DELETE',
      })
      .then((response) => response.json())
      .then((data) => {
      alert(data.message);
      })
      
    } else {
      alert('Cancelado.')
    }

  }

  return (
    <section className='container-fluid formatoEliminar'>
      <p> Ingrese el código del producto que desea eliminar </p>
      <article className="row">
        <form className="col-4 col-md-4 formatoValidar">
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="idProducto" className="form-label">Código:</label>
            <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {eliminar}>Eliminar</button>
          </div>
        </form>
      </article>
    </section>
  )
}
