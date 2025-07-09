// Componente para validar la existencia de un empleado.

import { useState } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';

import { CrearEmpleado } from './crearEmpleado';


export const ValidarEmpleado = () => {
  
  // Hook para validar el cliente.
  const[numIdentificacion, setNumIdentificacion] = useState('');

  // Funcíon para validar el cliente.
  const validar = async (e) => { 
    e.preventDefault(e);

    setNumIdentificacion(e.target.value);

    // Validamos el ingreso de los datos.
    if (!numIdentificacion){
      alert('Ingrese el número de identificación del empleado');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/empleado/${numIdentificacion}`);
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      console.log(data);

      if (data.nombres == undefined) {
        alert('Empleado no registrado');
      } else {
        alert('Empleado ' + data.nombres + ' ' + data.apellidos + ' ya está registrado.');
      }  
    }  catch (err) {
      console.error("Error al validar cliente:", err);
    }

  }


  return (
   <section className='container-fluid'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar">
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="numIdentificacion" className="form-label">Id:</label>
            <input type="text" className="form-control formatoInputCrear" id="numIdentificacion" onChange = {(e) => setNumIdentificacion(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {validar}>Validar</button>
          </div>
        </form>
      </article>

      <CrearEmpleado />
   </section> 
  )
}
