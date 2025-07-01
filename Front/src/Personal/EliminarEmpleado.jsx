// Componente para eliminar un empleado registrado.

import { useState } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';
import '../Formatos/Eliminar.css';

export const EliminarEmpleado = () => {

  // Hooks para capturar los datos.
  const[numIdentificacion, setNumIdentificacion] = useState('');

  // Función para eliminar un cliente.
  const eliminar = async (e) => { 

    e.preventDefault();

    const confirmacion = window.confirm(`¿Desea eliminar el empleado con número de ${numIdentificacion}?`);

    if(confirmacion) {
      
      if (!numIdentificacion){
      alert('Ingrese el número de identificación del empleado');
      return;
      }

      await fetch(`http://localhost:3001/empleado/${numIdentificacion}`, {
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
      <p> Ingrese el número de identificación del empleado que desea eliminar </p>
      <article className="row">
        <form className="col-4 col-md-4 formatoValidar">
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="numIdentificacion" className="form-label">Id:</label>
            <input type="text" className="form-control formatoInputCrear" id="numIdentificacion" onChange = {(e) => setNumIdentificacion(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {eliminar}>Eliminar</button>
          </div>
        </form>
      </article>
    </section>
  )
}
