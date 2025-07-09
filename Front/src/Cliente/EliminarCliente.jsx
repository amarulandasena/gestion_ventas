// Componente para eliminar un cliente registrado.

import { useState } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';
import '../Formatos/Eliminar.css';

export const EliminarCliente = () => {
  

  // Hook para validar el cliente.
  const[nit, setNit] = useState('');

  // Función para eliminar un cliente.
  const eliminar = async (e) => {
    e.preventDefault();

    const confirmacion = window.confirm(`¿Desea eliminar el cliente con número de ${nit}?`);

    if(confirmacion) {
      
      if (!nit){
      alert('Ingrese el nit del cliente');
      return;
      }

      await fetch(`http://localhost:3001/cliente/${nit}`, {
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
      <p> Ingrese el número de identificación del cliente que desea eliminar </p>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar">
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="nit" className="form-label">Nit:</label>
            <input type="text" className="form-control formatoInput" id="nit" onChange = {(e) => setNit(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {eliminar}>Eliminar</button>
          </div>
        </form>
      </article>
    </section>
  )
}
