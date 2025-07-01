// Componente para validar la existencia de un producto.

import { useState } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';

import { CrearProducto } from './CrearProducto';

export const ValidarProducto = () => {

  // Hooks para validar el producto.
  const[idProducto, setIdProducto] = useState('');

  // Funcíon para validar el cliente.
  const validar = async (e) => { 
    e.preventDefault(e);

    setIdProducto(e.target.value);

    // Validamos el ingreso de los datos.
    if (!idProducto){
      alert('Ingrese el código del producto');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/producto/${idProducto}`);
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      console.log(data);

      if (data.nombreProducto == undefined) {
        alert('Producto no registrado');
      } else {
        alert('Producto ' + data.nombreProducto + ' ya está registrado.');
      }  
    }  catch (err) {
      console.error("Error al validar el producto.", err);
    }

  }


  return (
    <section className='container-fluid'>
      <article className="row">
        <form className="col-4 col-md-4 formatoValidar">
          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="idProducto" className="form-label">Código:</label>
            <input type="text" className="form-control formatoInputCrear" id="idProducto" onChange = {(e) => setIdProducto(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {validar}>Validar</button>
          </div>
        </form>
      </article>

      <CrearProducto />
    </section>
  )
}
