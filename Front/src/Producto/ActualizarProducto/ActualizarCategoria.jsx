import { useState, useRef } from 'react';

import './FormatoActualizacionesProducto.css';

export const ActualizarCategoria = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para validar los datos a actualizar.
  const[idProducto, setIdProducto] = useState('');
  const[categoria, setCategoria] = useState('');

  // Función para modificar el dato.
  const modificar = async (e) => { 
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!idProducto || !categoria) {
      alert('Ingrese el dato a modificar.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosProducto = {
      'categoria' : categoria
    }

    await fetch(`http://localhost:3001/actualizarProductos/actualizarCategoria/${idProducto}`, {
      method : 'PUT',
      headers : { 
         'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosProducto),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
      limpiarFormulario.current.reset();
    })

  }

  return (
    <article className='col-12 col-md-4'>
      <form className="col-9 col-md-9 formatoActualizarCliente" ref={limpiarFormulario}>
        <div className ="col-12 col-md-12">
          <label htmlFor="idProducto" className="form-label">Código del producto:</label>
          <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-12">
          <label htmlFor = "categoria" className = "form-label">Categoría:</label>
          <select className ="form-select formatoInputCrear" id="categoria" onChange = {(e) => setCategoria(e.target.value)} required>
            <option selected disabled value="">Seleccione la categoría:</option>
            <option>Agua tónica limpiadora</option>
            <option>Cremas - mujer</option>
            <option>Colonia - niñas</option>              
            <option>Colonia - niños</option>
            <option>Desenredante - niñas</option>
            <option>Gel - reductor</option>
            <option>Perfumes - hombre</option>
            <option>Perfumes - mujer</option>
            <option>Shampoo - niños</option>
            <option>Shampoo - niñas</option>
            <option>Talco corporal - adultos</option> 
          </select>
        </div>

        <div className="col-12 col-md-12">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {modificar}>Modificar</button>
        </div>
      </form>
    </article>
  )
}
