// Componente para validar la existencia de un cliente.

import { useState } from 'react';

export const ValidarCliente = () => {

  // Hook para validar el cliente.
  const[nit, setNit] = useState('');

  // Funcíon para validar el cliente.
  const validar = async (e) => {
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!nit){
      alert('Ingrese el nit del cliente');
      return;
    }

    await fetch(`http://localhost:3001/cliente/${nit}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })


  }

  return (
  <section className = "container-fluid">
    <article className = "row" >
      <div className="col-md-4">
        <label htmlFor="numeroIdentificacion" className="form-label">Número de identificación</label>
        <input type="text" className="form-control" id="numeroIdentificacion" onChange = {(e) => setNit(e.target.value)} required />
      </div>
    </article>
  </section>
  )
}
