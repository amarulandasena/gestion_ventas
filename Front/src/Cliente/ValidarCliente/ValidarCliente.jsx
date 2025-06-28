// Componente para validar la existencia de un cliente.

import { useState } from 'react';

import './ValidarCliente.css';

import { CrearCliente } from '../CrearCliente/CrearCliente';

export const ValidarCliente = () => {

  // Hook para validar el cliente.
  const[nit, setNit] = useState('');

  // Funcíon para validar el cliente.
  const validar = async (e) => {
    e.preventDefault();

    setNit(e.target.value);

    // Validamos el ingreso de los datos.
    if (!nit){
      alert('Ingrese el nit del cliente');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/cliente/${nit}`);
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      console.log(data);

      if (data.razonSocial == undefined) {
        alert('Cliente no registrado')
      } else {
        alert('Cliente ' + data.razonSocial + ' ya está registrado.')
      }  
    }  catch (err) {
      console.error("Error al validar cliente:", err);
    }
  }

  return (
    <section className='container-fluid '>
      <article className="row formatoValidar" >
        <form className="col-4 col-md-4 formatoValidarInput">
          <div className ="col-6 col-md-6">
            <label htmlFor="nit" className="form-label">Nit:</label>
            <input type="text" className="form-control" id="nit" onChange = {(e) => setNit(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6 formatoBotonValidar">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {validar}>Validar</button>
          </div>
        
        </form>
      </article>
      
      < CrearCliente  />
    </section>
  )
}
