import { useState, useRef } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarPrecioNom = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[idProducto, setIdProducto] = useState('');
  const[nombreProducto, setNombreProducto] = useState('');
  const[precio, setPrecio] = useState(0);

  // Función para consultar un producto.
  const consultar = async (e) => {
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!nombreProducto){
      alert('Ingrese el nombre del producto');
      return;
    }

    // Función para generar la lista de pagos.
    const generarLista = (data) => {

      const cuerpoTabla = document.getElementById('cuerpoTabla');

      data.forEach((producto) => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `<th scope="row">${producto.idProducto}</th>
                               <td>${producto.nombreProducto}</td>
                               <td>${producto.precio}</td>`;
        cuerpoTabla.appendChild(nuevaFila);
      })

    }

    await fetch(`http://localhost:3001/precios/preciosNombre/${nombreProducto}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado){
        alert('Producto no registrado');
      } else { 
        generarLista(data); 
      }
      limpiarFormulario.current.reset();
    })

  }

  return (
    <section className='container-fluid piePagina1'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="nombreProducto" className="form-label">Nombre del producto:</label>
            <input type="text" className="form-control formatoInputCrear" id="nombreProducto" onChange = {(e) => setNombreProducto(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {consultar}>Consultar</button>
          </div>
        </form>
      </article>

      <article className="row piePagina2">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary table-hover formatoTabla" id='miTabla'>
            <thead>
              <tr className="table-primary">
                <th scope="col"> Código </th>
                <th scope="col"> Nombre </th>
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
