// Componente para validar la existencia de un cliente.

import { useState, useRef } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';

import { CrearCliente } from './CrearCliente';

export const ValidarCliente = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

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
        alert('Cliente no registrado');
      } else {
        alert('Cliente ' + data.razonSocial + ' ya está registrado.');
      }  
    }  catch (err) {
      console.error("Error al validar cliente:", err);
    }

    limpiarFormulario.current.reset();
  }

  return (
    <section className='container-fluid'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="nit" className="form-label">Nit:</label>
            <input type="text" className="form-control formatoInput" id="nit" onChange = {(e) => setNit(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {validar}>Validar</button>
          </div>
        
        </form>
      </article>
      
      < CrearCliente  />
    </section>
  )
}
