// Componente para el registro de un nuevo producto.

import { useState } from 'react';

import '../Formatos/Crear.css';
import '../Formatos/ComponentesComunes.css';

export const CrearProducto = () => {

  // Hooks para capturar los datos.
  const[idProducto, setIdProducto] = useState('');
  const[nombreProducto, setNombreProducto] = useState('');
  const[descripcion, setDescripcion] = useState('');
  const[precio, setPrecio] = useState(0);
  const[existencias, setExistencias] = useState(0);
  const[categoria, setCategoria] = useState('');
  const[referencia, setReferencia] = useState('');

  // Variable para almacenar el mensaje enviado por el servidor.
  let mensaje = '';

  // Función para crear un producto.
  const crearProducto = async (e) => { 
    e.preventDefault(e);

    // Validamos que se ingresaron todos los datos.
    if (!idProducto || !nombreProducto || !descripcion || !precio || !existencias || !categoria || !referencia) {
        alert('Ingrese todos los datos del producto a registrar.');
        return;
    }

    // Creamos el objeto para el envío de los datos.
    let datosProducto = { 
      'idProducto' : idProducto,
      'nombreProducto' : nombreProducto,
      'descripcion' : descripcion,
      'precio' : precio,
      'existencias' : existencias,
      'categoria' : categoria,
      'referencia' : referencia
    }

    await fetch('http://localhost:3001/producto/', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosProducto),
    })
    .then((response) => response.json())
    .then((data) => {
      mensaje = data.message;
    });

    alert(mensaje);

  }
  return (
    <section className='container-fluid'>
      <article className='row formatoCrearCliente'>
        <form className="row g-3 needs-validation">

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="idProducto" className="form-label">Código del producto:</label>
            <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="nombreProducto" className="form-label">Nombre del producto:</label>
            <input type="text" className="form-control formatoInputCrear" id="nombreProducto" onChange = {(e) => setNombreProducto(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="precio" className="form-label">Precio:</label>
            <input type="number" className="form-control formatoInputCrear" id="precio" onChange = {(e) => setPrecio(e.target.value)} required></input>
          </div>
 
          <div className ="col-md-12 col-lg-4">
            <label htmlFor="existencias" className="form-label">Existencias:</label>
            <input type="number" className="form-control formatoInputCrear" id="existencias" onChange = {(e) => setExistencias(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor = "categoria" className = "form-label">Categoría:</label>
            <select className ="form-select formatoInputCrear" id="categoria" onChange = {(e) => setCategoria(e.target.value)} required>
              <option selected disabled value="">Seleccione la categoría:</option>
              <option>Perfumes- hombre</option>
              <option>Categoría dos</option>
              <option>Categoría tres</option>
              <option>Categoría cuatro</option>
            </select>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor = "referencia" className = "form-label">Referencia:</label>
            <select className ="form-select formatoInputCrear" id="referencia" onChange = {(e) => setReferencia(e.target.value)} required>
              <option selected disabled value="">Seleccione la referencia:</option>
              <option>100ml</option>
              <option>Referencia dos</option>
              <option>Referencia tres</option>
              <option>Referencia cuatro</option>
            </select>
          </div>

          <div className="form-floating col-md-8">
            <textarea className="form-control formatoInputCrear" placeholder="Leave a comment here" id="descripcion" onChange={(e) => setDescripcion(e.target.value)} required></textarea>
            <label htmlFor="descripcion">Descripción</label>
          </div>

          <div className="col-md-12">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {crearProducto}>Crear</button>
          </div>
          
        </form>
      </article>
    </section>
  )
}
