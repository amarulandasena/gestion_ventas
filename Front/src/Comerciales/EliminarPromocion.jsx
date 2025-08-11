// Componente para eliminar una promoción registrada.

import { useState, useRef } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';
import '../Formatos/Eliminar.css';

export const EliminarPromocion = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hook para validar el cliente.
  const[codigo, setCodigo] = useState('');

  // Función para eliminar un cliente.
  const eliminar = async (e) => {
    e.preventDefault();

    const confirmacion = window.confirm(`¿Desea eliminar la promoción con número de código ${codigo}?`);

    if(confirmacion) { 
      if (!codigo){
      alert('Ingrese el código de la promoción');
      return;
      }

      await fetch(`http://localhost:3001/promociones/${codigo}`, {
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
      <p> Ingrese el código de la promoción que desea eliminar </p>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="codigo" className="form-label">Código:</label>
            <input type="text" className="form-control formatoInputCrear" id="codigo" onChange = {(e) => setCodigo(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {eliminar}>Eliminar</button>
          </div>
        </form>
      </article>
     </section>
  )
}
