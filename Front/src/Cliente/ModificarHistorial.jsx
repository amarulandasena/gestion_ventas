import { useState } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Crear.css';
import '../Formatos/Eliminar.css';

export const ModificarHistorial = () => {

  // Hook para la modificación del pago.
  const [idPago, setIdPago] = useState(0);
  const[fechaPago, setFechaPago] = useState(null);

  // Función para modificar la fecha del pago.
  const modificarHistorial = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron toddos los datos.
    if(!idPago || !fechaPago) {
      alert('Ingrese el pago a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosPago = {
      'historial' : fechaPago
    }

    await fetch(`http://localhost:3001/historial/${idPago}`, {
      method : 'PUT',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosPago),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
    })
  }

  return ( 
    <section className='container-fluid formatoEliminar'>
      <article className='row formatoCrearCliente'>

        <form className="row g-3 needs-validation">

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="idPago" className="form-label">Código del pago:</label>
            <input type="number" className="form-control formatoInputCrear" id="idPago" onChange = {(e) => setIdPago(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="fechaPago" className="form-label">Fecha de pago:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaPago" onChange = {(e) => setFechaPago(e.target.value)} required />
          </div>

          <div className="col-md-12 col-lg-4">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificarHistorial}>Modificar</button>
          </div>
        </form>
      </article>
    </section>
  )
}
