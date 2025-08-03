// Componente para el registro de la información de los productos de la reserva.

import { useState, useRef } from 'react';

import '../Formatos/Crear.css';
import '../Formatos/ComponentesComunes.css';
import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/Eliminar.css';

export const InfoProductosReserva = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[idReserva, setIdReserva] = useState(0);
  const[idProducto, setIdProducto] = useState('');
  const[cantidad, setCantidad] = useState(0);

  // Variable para almacenar el mensaje enviado por el servidor.
  let mensaje = '';

  // Función para generar la lista de productos.
  const generarLista = (arreglo) => {

    console.log(arreglo);
    const cuerpoTabla = document.getElementById('cuerpoTabla');

    arreglo.forEach(item => {
      const nuevaFila = document.createElement('tr');
      nuevaFila.innerHTML = `<th scope="row">${item.idProducto}</th>
                              <td>${item.cantidad}</td>
                              <td><button type="button" class="btn btn-link btnEliminar">Borrar</button></td>
                              `;

      // Agregamos el evento al botón justo después de insertar la fila
      nuevaFila.querySelector('.btnEliminar').addEventListener('click', () => {
      nuevaFila.remove();
      });

      cuerpoTabla.appendChild(nuevaFila);
    })
  }

  // Función para agregar un producto.
  const agregarProducto = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!idReserva || !idProducto || !cantidad) {
      alert('Ingrese todos los datos del producto a registrar.');
      return;
    }

    // Creamos el objeto para el envío de los datos.
    let datosProducto = {
        'idReserva' : idReserva,
        'idProducto' : idProducto, 
        'cantidad' : cantidad
    }

    // Creamos un arreglo con los datos del producto.
    let arregloProducto = [];

    await fetch ('http://localhost:3001/reserva/productosReserva/', {
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
            <label htmlFor="idReserva" className="form-label">Código de la reserva:</label>
            <input type="number" className="form-control formatoInputCrear" id="idReserva" onChange = {(e) => setIdReserva(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="idProducto" className="form-label">Código del producto:</label>
            <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="cantidad" className="form-label">Cantidad:</label>
            <input type="number" className="form-control formatoInputCrear" id="cantidad" onChange = {(e) => setCantidad(e.target.value)} required></input>
          </div>

          <div className="col-md-12">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {agregarProducto}>Guardar</button>
          </div>
        </form>
      </article>

      <article className="row">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary table-hover formatoTabla" id='miTabla'>
            <thead>
              <tr className="table-primary">
                <th scope="col"> Código del producto </th>  
                <th scope="col"> Cantidad </th>
                <th scope="col"> Eliminar </th>
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
