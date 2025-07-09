import { useState } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarProducto = () => {

  // Hooks para capturar los datos.
  const[idProducto, setIdProducto] = useState('');
  const[nombreProducto, setNombreProducto] = useState('');
  const[descripcion, setDescripcion] = useState('');
  const[precio, setPrecio] = useState(0);
  const[existencias, setExistencias] = useState(0);
  const[categoria, setCategoria] = useState('');
  const[referencia, setReferencia] = useState('');
  const[imagen, setImagen] = useState(null);
  const[descuento, setDescuento] = useState(null);

  // Función para consultar un empleado.
  const consultar = async (e) => { 
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!idProducto){
      alert('Ingrese el código del producto');
      return;
    }

    await fetch(`http://localhost:3001/producto/${idProducto}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado){
        console.log(data);
        alert('Producto no registrado');
      } else { 
        setNombreProducto(data.nombreProducto);
        setDescripcion(data.descripcion);
        setPrecio(data.precio);
        setCategoria(data.categoria);
        setExistencias(data.existencias);
        setReferencia(data.referencia);
        setImagen(data.imagen);
        setDescuento(data.descuento);
      }
    })

  }
  return (
    <section className='container-fluid'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar">
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="idProducto" className="form-label">Código:</label>
            <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {consultar}>Consultar</button>
          </div>
        </form>
      </article>

      <article className="row">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary table-hover formatoTabla">
            <thead>
              <tr className="table-primary">
                <th scope="col"> Nombre </th>
                <th scope="col"> Categoría </th>
                <th scope="col"> Referencia </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"> {nombreProducto} </th>
                <th scope="col"> {categoria} </th>
                <th scope="col"> {referencia} </th>
              </tr>
            </tbody>
          </table>

          <table className="table table-bordered border-primary table-hover formatoTabla">
            <thead>
              <tr className="table-primary">
                <th scope="col"> Existencias </th>
                <th scope="col"> Precio </th>
                <th scope="col"> Descuento </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"> {existencias} </th>
                <th scope="col"> {precio} </th>
                <th scope="col"> {descuento} </th>
              </tr>
            </tbody>
          </table>

          <table className="table table-bordered border-primary table-hover">
            <thead>
              <tr className="table-primary">
                <th scope="col"> Descripción </th>
                <th scope="col"> Imagen </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"> {descripcion} </th>
                <th scope="col"> {imagen} </th>
              </tr>
            </tbody>
          </table>

        </div>
      </article>
    </section>
  )
}
