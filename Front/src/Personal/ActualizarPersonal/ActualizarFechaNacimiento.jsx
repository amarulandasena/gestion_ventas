import { useState } from 'react';

import './FormatoActualizacionesPersonal.css';

export const ActualizarFechaNacimiento = () => {

  // Hooks para validar los datos a actualizar.
  const[numIdentificacion, setNumIdentificacion] = useState('');
  const[fechaNacimiento, setFechaNacimiento] = useState(null);

  // Función para modificar el dato.
  const modificar = async (e) => { 
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!numIdentificacion || !fechaNacimiento) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    
    // Instanciamos el objeto para enviar los datos.
    let datosEmpleado = {
      'fechaNacimiento' : fechaNacimiento
    }

    await fetch(`http://localhost:3001/actualizarEmpleados/actualizarFechaNacimiento/${numIdentificacion}`, {
      method : 'PUT',
      headers : { 
         'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosEmpleado),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
    })
  }
  return (
    <article className='col-4 col-md-4'>
      <form className="col-9 col-md-9 formatoActualizarCliente">
        <div className ="col-12 col-md-12">
          <label htmlFor="numeroIdentificacion" className="form-label">Número de identificación:</label>
          <input type="text" className="form-control formatoInput" id="numeroIdentificacion" onChange = {(e) => setNumIdentificacion(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento:</label>
          <input type="date" className="form-control formatoInput" id="fechaNacimiento" onChange = {(e) => setFechaNacimiento(e.target.value)} required />
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
