import { useState } from 'react';

import './ActualizarCliente.css';

export const ActualizarProducto = () => {

  // Hooks para validar los datos a actualizar.
  const[nit, setNit] = useState('');
  const[categoria, setCategoria] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron toddos los datos.
    if(!nit || !categoria) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosCliente = {
      'producto' : categoria,
    }

    await fetch(`http://localhost:3001/actualizarClientes/actualizarProducto/${nit}`, {
      method : 'PUT',
      headers : { 
         'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosCliente),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
    })
  }


  return (
    <article className='col-4 col-md-4'>
      <form className="col-9 col-md-9 formatoActualizarCliente">
        <div className ="col-12 col-md-12">
          <label htmlFor="nit" className="form-label">Nit:</label>
          <input type="text" className="form-control" id="nit" onChange = {(e) => setNit(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor = "producto" className = "form-label">Producto:</label>
          <select className ="form-select" id="producto" onChange = {(e) => setCategoria(e.target.value)} required>
            <option selected disabled value="">Seleccione la categoría:</option>
            <option>Categoría uno</option>
            <option>Categoría dos</option>
            <option>Categoría tres</option>
            <option>Categoría cuatro</option>
          </select>
        </div>

        <div className="col-12 col-md-12 formatoContenedorBoton">
          <button className="btn btn-primary formatoBoton formatoBoton1" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
