import { useState, useRef } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';
import '../Formatos/Crear.css';
import '../Formatos/Eliminar.css';

export const ConsultarHistorial = () => {

  // Variable para limpiar los campos del formulario.
    const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[nit1, setNit1] = useState('');

  // Función para consultar el historial.
  const consultarHistorial = async (e) => {
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!nit1){
      alert('Ingrese el nit del cliente');
      return;
    }

    // Función para generar la lista de pagos.
    const generarLista = (data) => {

      const cuerpoTabla = document.getElementById('cuerpoTabla');

      data.forEach((pago) => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `<th scope="row">${pago.idPago}</th>
                               <td>${pago.historial}</td>
                               <td>${pago.valor}</td>`;
        cuerpoTabla.appendChild(nuevaFila);
      })

    }

    await fetch(`http://localhost:3001/historial/${nit1}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado) {
        alert('Cliente no registrado');
      } else {
        generarLista(data);
      }
      limpiarFormulario.current.reset();
    })
  }

  return (
    <section className='container-fluid piePagina'>
      <article className="row">

        <form className="row g-3 needs-validation" ref={limpiarFormulario}>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="nit1" className="form-label">Nit:</label>
            <input type="text" className="form-control formatoInputCrear" id="nit1" onChange = {(e) => setNit1(e.target.value)} required />
          </div>

          <div className="col-md-12 col-lg-4">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {consultarHistorial}>Consultar</button>
          </div>
        </form>
      </article>

      <article className="row">
        <div className="table-responsive ">

          <table className="table table-bordered border-primary table-hover formatoTabla" id='miTabla'>
            <thead>
              <tr className="table-primary">
                <th scope="col"> Código del pago </th>
                <th scope="col"> Fecha del pago </th>  
                <th scope="col"> Valor </th> 
              </tr>
            </thead>

            <tbody id = "cuerpoTabla">
              
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}
