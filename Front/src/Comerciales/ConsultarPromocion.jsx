import { useState, useRef } from "react";

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarPromocion = () => {

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

  // Función para consultar un cliente.
  const consultar = async (e) => {
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!codigo){
      alert('Ingrese el código de la promoción');
      return;
    }

    await fetch(`http://localhost:3001/promociones/${codigo}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado){
        alert('Promoción no registrada');
      } else {
        setNumIdentificacion1(data.numIdentificacion1);
        setDescripcion(data.descripcion);
        setDescuento(data.descuento);
        setFechaInicio(data.fechaInicio);
        setFechaFinal(data.fechaFinal);
        setTipoPromocion(data.tipoPromocion);
      }
    })
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
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {consultar}>Consultar</button>
          </div>
        </form>
      </article>

      <article className="row">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary table-hover formatoTabla" id='miTabla'>
            <thead>
              <tr className="table-primary">
                <th scope="col"> Código </th>
                <th scope="col"> Número de identificación </th>
                <th scope="col"> Descripción </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"> {codigo} </th>
                <th scope="col"> {numIdentificacion1} </th>
                <th scope="col"> {descripcion} </th>
              </tr>
            </tbody>
          </table>
          
          <table className="table table-bordered border-primary table-hover formatoTabla" id='miTabla'>
            <thead>
              <tr className="table-primary">
                <th scope="col"> Descuento </th>
                <th scope="col"> Fecha de inicio</th>
                <th scope="col"> Fecha de terminación </th>
                <th scope="col"> Tipo de promoción </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"> {descuento} </th>
                <th scope="col"> {fechaInicio} </th>
                <th scope="col"> {fechaFinal} </th>
                <th scope="col"> {tipoPromocion} </th>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}
