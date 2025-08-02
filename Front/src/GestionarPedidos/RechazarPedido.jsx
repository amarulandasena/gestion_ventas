import { useState, useRef } from "react"

import './GestionarPedidos.css';

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const RechazarPedido = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  const[idPedido, setIdPedido] = useState(0);
  const[estado, setEstado] = useState('');

  const rechazar = async (e) => {
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!idPedido || !estado){
      alert('Ingrese el código del pedido y/o el nuevo estado.');
      return;
    }

    // Instanciamos el objeto para enviar los datos.
    let datosPedido = {
      'estado' : estado
    }

    await fetch(`http://localhost:3001/pedido/${idPedido}`, {
      method : 'PUT',
      headers : { 
         'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosPedido),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
      limpiarFormulario.current.reset();
    })
  }

  return (
    <article className='container-fluid'>
      <form className="col-12 col-md-12 col-lg-12 formatoActualizarCliente piePagina" ref={limpiarFormulario}>
        <p>Ingrese la información del pedido a cancelar o rechazar.</p>

        <div className ="col-12 col-md-4 col-lg-4">
          <label htmlFor="idPedido" className="form-label">Código del pedido: </label>
          <input type="number" className="form-control formatoInputCrear" id="idPedido" onChange = {(e) => setIdPedido(e.target.value)} required />
        </div>

        <div className ="col-12 col-md-4 col-lg-4">
          <label htmlFor = "estado" className = "form-label">Estado:</label>
          <select className ="form-select formatoInputCrear" id="estado" onChange = {(e) => setEstado(e.target.value)} required>
            <option selected disabled value="">Seleccione el estado:</option>
            <option>Cancelado</option>
          </select>
        </div>

        <div className="col-12 col-md-4 col-lg-4">
          <button className="btn btn-primary formatoBoton" type="submit" onClick = {rechazar}>Rechazar</button>
        </div>
      </form>
    </article>
  )
}
