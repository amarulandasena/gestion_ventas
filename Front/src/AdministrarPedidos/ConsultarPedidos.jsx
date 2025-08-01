import { useState, useRef } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarPedidos = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[idPedido, setIdPedido] = useState(0);
  const[nit, setNit] = useState('');
  const[numIdentificacion, setNumIdentificacion] = useState('');
  const[fechaPedido, setFechaPedido] = useState(null);
  const[direccionEnvio, setDireccionEnvio] = useState('');
  const[formaPago, setFormaPago] = useState('');
  const[estado, setEstado] = useState('');
  const[fechaEntrega, setFechaEntrega] = useState(null);
  const[comentarios, setComentarios] = useState('');

  // Función para consultar un cliente.
  const consultar = async (e) => {
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!idPedido){
      alert('Ingrese el código del pedido.');
      return;
    }

    // Función para generar la lista de pagos.
    const generarLista = (data) => {

      const cuerpoTabla = document.getElementById('cuerpoTabla');

      data.forEach((producto) => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `<th scope="row">${producto.idProducto}</th>
                               <td>${producto.nombreProducto}</td>
                               <td>${producto.cantidad}</td>
                               <td>${producto.precioUnitario}</td>`;
        cuerpoTabla.appendChild(nuevaFila);
      })

    }

    await fetch(`http://localhost:3001/pedido/${idPedido}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado){
        alert('Pedido no registrado');
      } else {
        setNit(data.nit);
        setNumIdentificacion(data.numIdentificacion);
        setFechaPedido(data.fechaPedido);
        setDireccionEnvio(data.direccionEnvio);
        setFormaPago(data.formaPago);
        setEstado(data.estado);
        setFechaEntrega(data.fechaEntrega);
        setComentarios(data.comentarios)
      }
    })

    await fetch(`http://localhost:3001/productosPedido/${idPedido}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado) {
        alert('Pedido no registra productos');
      } else {
        generarLista(data);
      }
    })

    limpiarFormulario.current.reset();
  }

  
  return (
    <section className='container-fluid'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>

          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="idPedido" className="form-label">Código del pedido:</label>
            <input type="number" className="form-control formatoInputCrear" id="idPedido" onChange = {(e) => setIdPedido(e.target.value)} required></input>
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
                <th scope="col"> Fecha del pedido </th>
                <th scope="col"> Dirección de envio </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"> {nit} </th>
                <th scope="col"> {numIdentificacion} </th>
                <th scope="col"> {fechaPedido} </th>
                <th scope="col"> {direccionEnvio} </th>
              </tr>
            </tbody>
          </table>

          <table className="table table-bordered border-primary table-hover" id='miTabla'>
             <thead>
              <tr className="table-primary">
                <th scope="col"> Forma de pago </th>
                <th scope="col"> Estado </th>
                <th scope="col"> Fecha de entrega </th>
                <th scope="col"> Comentarios </th>
              </tr>
             </thead>

             <tbody>
              <tr>
                <th scope="row"> {formaPago} </th>
                <th scope="col"> {estado} </th>
                <th scope="col"> {fechaEntrega} </th>
                <th scope="col"> {comentarios} </th>
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
                <th scope="col"> Nombre del producto </th>  
                <th scope="col"> Cantidad </th>
                <th scope="col"> Precio </th>
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
