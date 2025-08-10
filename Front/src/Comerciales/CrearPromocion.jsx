// Componente para el registro de una nueva promoción.

import { useState, useRef } from 'react';

import '../Formatos/Crear.css';
import '../Formatos/ComponentesComunes.css';

export const CrearPromocion = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[codigo, setCodigo] = useState('');
  const[numIdentificacion1, setNumIdentificacion1] = useState('');
  const[descripcion, setDescripcion] = useState('');
  const[descuento, setDescuento] = useState(0);
  const[fechaInicio, setFechaInicio] = useState(null);
  const[fechaFinal, setFechaFinal] = useState(null);
  const[tipoPromocion, setTipoPromocion] = useState('');

  // Variable para almacenar el mensaje enviado por el servidor.
  let mensaje = '';

  // Función para crear un empleado.
  const crearPromocion = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if (!codigo || !numIdentificacion1 || !descripcion || !descuento || !fechaInicio || !fechaFinal || !tipoPromocion ) {
        alert('Ingrese todos los datos de la promoción a registrar.');
        return;
    }

    // Creamos el objeto para el envío de los datos.
    let datosPromocion = {
      'codigo' : codigo,
      'numIdentificacion1' : numIdentificacion1,
      'descripcion' : descripcion,
      'descuento' : descuento,
      'fechaInicio' : fechaInicio,
      'fechaFinal' : fechaFinal,
      'tipoPromocion' : tipoPromocion
    }

    await fetch('http://localhost:3001/promociones/', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosPromocion),
    })
    .then((response) => response.json())
    .then((data) => {
      mensaje = data.message;
    });

    alert(mensaje);
    limpiarFormulario.current.reset();
  }

  return (
    <section className='container-fluid'>
      <article className='row formatoCrearCliente'>
        <p>Ingrese la información de la promoción</p>
        <form className="row g-3 needs-validation" ref={limpiarFormulario}>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="codigo" className="form-label">Código:</label>
            <input type="text" className="form-control formatoInputCrear" id="codigo" onChange = {(e) => setCodigo(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="numIdentificacion1" className="form-label">Número de identificación:</label>
            <input type="text" className="form-control formatoInputCrear" id="numIdentificacion1" onChange = {(e) => setNumIdentificacion1(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="descripcion" className="form-label">Descripción:</label>
            <input type="text" className="form-control formatoInputCrear" id="descripcion" onChange = {(e) => setDescripcion(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="descuento" className="form-label">Descuento:</label>
            <input type="number" className="form-control formatoInputCrear" id="descuento" onChange = {(e) => setDescuento(e.target.value)} required></input>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="fechaInicio" className="form-label">Fecha de inicio:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaInicio" onChange = {(e) => setFechaInicio(e.target.value)} required />
          </div>
          
          <div className ="col-md-12 col-lg-4">
            <label htmlFor="fechaFinal" className="form-label">Fecha de terminación:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaFinal" onChange = {(e) => setFechaFinal(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="tipoPromocion" className="form-label">Tipo:</label>
            <input type="text" className="form-control formatoInputCrear" id="tipoPromocion" onChange = {(e) => setTipoPromocion(e.target.value)} required />
          </div>

          <div className="col-md-12">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {crearPromocion}>Crear</button>
          </div>

        </form>
      </article>
    </section>
  )
}
