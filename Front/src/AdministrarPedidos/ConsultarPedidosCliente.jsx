import { useState, useRef } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarPedidosCliente = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[nit, setNit] = useState('');

  // Función para consultar los pedidos.
  const consultarPedidos = async (e) => {
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!nit){
      alert('Ingrese el nit del cliente');
      return;
    }

    // Función para generar la lista de pagos.
    const generarLista = (data) => {

      const cuerpoTabla = document.getElementById('cuerpoTabla');

      data.forEach((pedido) => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `<th scope="row">${pedido.idPedido}</th>
                               <td>${pedido.fechaPedido}</td>`;
        cuerpoTabla.appendChild(nuevaFila);
      })

    }

    await fetch(`http://localhost:3001/pedido/consultarPedidos/${nit}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado) {
        console.log(data);
        alert('Cliente no registrado');
      } else {
        console.log(data);
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
            <label htmlFor="nit" className="form-label">Nit:</label>
            <input type="text" className="form-control formatoInputCrear" id="nit" onChange = {(e) => setNit(e.target.value)} required />
          </div>

          <div className="col-md-12 col-lg-4">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {consultarPedidos}>Consultar</button>
          </div>
        </form>
      </article>

      <article className="row">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary table-hover formatoTabla" id='miTabla'>
            <thead>
              <tr className="table-primary">
                <th scope="col"> Código del pedido </th>
                <th scope="col"> Fecha del pedido </th>
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
