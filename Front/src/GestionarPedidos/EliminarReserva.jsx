import { useState, useRef } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';
import '../Formatos/Eliminar.css';

export const EliminarReserva = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[idReserva, setIdReserva] = useState(0);

  // Función para eliminar una reserva.
  const eliminar = async (e) => {
    e.preventDefault();

    const confirmacion = window.confirm(`¿Desea eliminar la reserva con el código ${idReserva}?`);

    if(confirmacion) { 

      if (!idReserva){
      alert('Ingrese el código de la reserva.');
      return;
      }

      await fetch(`http://localhost:3001/reserva/${idReserva}`, {
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
      <p> Ingrese el código de la reserva que desea eliminar </p>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>

          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="idReserva" className="form-label">Código de la reserva:</label>
            <input type="number" className="form-control formatoInput" id="idReserva" onChange = {(e) => setIdReserva(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {eliminar}>Eliminar</button>
          </div>
        </form>
      </article>
    </section>
  )
}
