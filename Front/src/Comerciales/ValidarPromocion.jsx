// Componente para validar la existencia de una promoción.

import { useState, useRef } from 'react';

import '../Formatos/ComponentesComunes.css';
import '../Formatos/Validar.css';

import { CrearPromocion } from './CrearPromocion';

export const ValidarPromocion = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hook para validar la promoción.
  const[codigo, setCodigo] = useState('');

  // Funcíon para validar la promción.
  const validar = async (e) => {
    e.preventDefault();
  

  setCodigo(e.target.value);

  // Validamos el ingreso de los datos.
    if (!codigo){
      alert('Ingrese el código de la promoción');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/promociones/${codigo}`);
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (data.codigo == undefined) {
        alert('Promoción no registrada');
      } else {
        alert('Promoción con código ' + data.codigo + ' ya está registrada.');
      }  
    }  catch (err) {
      console.error("Error al validar la promoción:", err);
    }

    limpiarFormulario.current.reset();

  }
  return (
    <section className='container-fluid'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>

          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="codigo" className="form-label">Código:</label>
            <input type="text" className="form-control formatoInput" id="codigo" onChange = {(e) => setCodigo(e.target.value)} required />
          </div>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {validar}>Validar</button>
          </div>

        </form>
      </article>

      < CrearPromocion />
    </section>
  )
}
