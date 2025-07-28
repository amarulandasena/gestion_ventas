// Componente para el registro de la información de los productos del pedido.

import { useState, useRef } from 'react';

import '../Formatos/Crear.css';
import '../Formatos/ComponentesComunes.css';
import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/Eliminar.css';

export const InfoProductosPedido = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[idPedido, setIdPedido] = useState(0);
  const[idProducto, setIdProducto] = useState('');
  const[nombreProducto, setNombreProducto] = useState('');
  const[cantidad, setCantidad] = useState(0);
  const[precio, setPrecio] = useState(0);

  // Variable para almacenar el mensaje enviado por el servidor.
  let mensaje = '';

  // Función para agregar un producto.
  const agregarProducto = async (e) => {
  e.preventDefault();

  // Validamos que se ingresaron todos los datos.
  if(!idPedido || !idProducto || !nombreProducto || !cantidad || !precio) {
      alert('Ingrese todos los datos del producto a registrar.');
      return;
  }

  // Creamos el objeto para el envío de los datos.
  let datosProducto = {
      'idPedido' : idPedido,
      'idProducto' : idProducto, 
      'nombreProducto' : nombreProducto, 
      'cantidad' : cantidad, 
      'precioUnitario' : precio
  }

  // Creamos un arreglo con los datos del producto.
  let arregloProducto = [];

  // Función para generar la lista de pagos.
  const generarLista = (arreglo) => {

    console.log(arreglo);
    const cuerpoTabla = document.getElementById('cuerpoTabla');

    arreglo.forEach(item => {
      const nuevaFila = document.createElement('tr');
      nuevaFila.innerHTML = `<th scope="row">${item.idProducto}</th>
                              <td>${item.nombreProducto}</td>
                              <td>${item.cantidad}</td>
                              <td>${item.precioUnitario}</td>`;
      cuerpoTabla.appendChild(nuevaFila);
    })

  }

  await fetch ('http://localhost:3001/productosPedido/', {
    method : 'POST',
    headers : {
    'Content-type' : 'application/json',
    },
    body : JSON.stringify(datosProducto),
  })
  .then((response) => response.json())
  .then((data) => {
      mensaje = data.message;
      if(data.noEncontrado) {
        alert(mensaje);
      } else {
        alert(mensaje);
        arregloProducto.push(datosProducto);
        generarLista(arregloProducto);
      }
  });
  
  limpiarFormulario.current.reset();

}  


  return (
    <section className='container-fluid'>
      <article className='row formatoCrearCliente'>

        <form className="row g-3 needs-validation" ref={limpiarFormulario}>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="idPedido" className="form-label">Código del pedido:</label>
            <input type="number" className="form-control formatoInputCrear" id="idPedido" onChange = {(e) => setIdPedido(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="idProducto" className="form-label">Código del producto:</label>
            <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="nombreProducto" className="form-label">Nombre del producto:</label>
            <input type="text" className="form-control formatoInputCrear" id="nombreProducto" onChange = {(e) => setNombreProducto(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="cantidad" className="form-label">Cantidad:</label>
            <input type="number" className="form-control formatoInputCrear" id="cantidad" onChange = {(e) => setCantidad(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="precio" className="form-label">Precio:</label>
            <input type="number" className="form-control formatoInputCrear" id="precio" onChange = {(e) => setPrecio(e.target.value)} required></input>
          </div>

          <div className="col-md-12">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {agregarProducto}>Guardar</button>
          </div>

        </form>
      </article>

      <article className="row">
        <div className="table-responsive ">

          <table className="table table-bordered border-primary table-hover formatoTabla">
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
