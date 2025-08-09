import { useState, useRef } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarPrecioCod = () => {

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
    if (!idProducto){
      alert('Ingrese el código del producto');
      return;
    }

    await fetch(`http://localhost:3001/precios/precioCodigo/${idProducto}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado){
        alert('Producto no registrado');
      } else { 
        setNombreProducto(data.nombreProducto);
        setPrecio(data.precio);
        
      }
      limpiarFormulario.current.reset();
    })
  }

  return (
    <section className='container-fluid piePagina1'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="idProducto" className="form-label">Código del producto:</label>
            <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
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
                <th scope="col"> Nombre </th>
                <th scope="col"> Precio </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="col"> {nombreProducto} </th>
                <th scope="col"> {precio} </th>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}
