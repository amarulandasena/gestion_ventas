import { useState, useRef } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarReserva = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[idReserva, setIdReserva] = useState(0);
  const[nit, setNit] = useState('');
  const[numIdentificacion, setNumIdentificacion] = useState('');
  const[fechaReserva, setFechaReserva] = useState(null);
  const[fechaLimite, setFechaLimite] = useState(null);

  // Función para consultar una reserva.
  const consultar = async (e) => {
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!idReserva){
      alert('Ingrese el código de la reserva.');
      return;
    }

    // Función para generar la lista de productos.
    const generarLista = (data) => {

      const cuerpoTabla = document.getElementById('cuerpoTabla');

      data.forEach((producto) => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `<th scope="row">${producto.idProducto}</th>
                               <td>${producto.cantidad}</td>`;
        cuerpoTabla.appendChild(nuevaFila);
      })

    }

    await fetch(`http://localhost:3001/reserva/${idReserva}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado){
        alert('Reserva no registrada');
      } else {
        setNit(data.nit);
        setNumIdentificacion(data.numIdentificacion);
        setFechaReserva(data.fechaReserva);
        setFechaLimite(data.fechaLimite)
      }
    })

    await fetch(`http://localhost:3001/reserva/productosReserva/${idReserva}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado) {
        alert('Reserva no registra productos');
      } else {
        generarLista(data);
      }
    })
    
  }

  return (
    <section className='container-fluid piePagina1'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>

          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="idReserva" className="form-label">Código de la reserva:</label>
            <input type="number" className="form-control formatoInputCrear" id="idReserva" onChange = {(e) => setIdReserva(e.target.value)} required></input>
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {consultar}>Consultar</button>
          </div>
        </form>
      </article>

      <article className="row">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary table-hover formatoTabla" id='miTabla'>
            <thead>
              <tr className="table-primary">
                <th scope="col"> Nit </th>
                <th scope="col"> Número de identificación </th>
                <th scope="col"> Fecha de la reserva </th>
                <th scope="col"> Fecha límite </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"> {nit} </th>
                <th scope="col"> {numIdentificacion} </th>
                <th scope="col"> {fechaReserva} </th>
                <th scope="col"> {fechaLimite} </th>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <article className="row">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary table-hover formatoTabla" id='miTabla'>
            <thead>
              <tr className="table-primary">
                <th scope="col"> Código del producto </th>
                <th scope="col"> Cantidad </th> 
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
