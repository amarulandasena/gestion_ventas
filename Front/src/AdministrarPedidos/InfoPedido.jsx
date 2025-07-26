// Componente para el registro de la información del pedido.

import { useState, useRef } from 'react';

import '../Formatos/Crear.css';
import '../Formatos/ComponentesComunes.css';

export const InfoPedido = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[nit, setNit] = useState('');
  const[numIdentificacion, setNumIdentificacion] = useState('');
  const[fechaPedido, setFechaPedido] = useState(null);
  const[direccionEnvio, setDireccionEnvio] = useState('');
  const[formaPago, setFormaPago] = useState('');
  const[estado, setEstado] = useState('');
  const[fechaEntrega, setFechaEntrega] = useState(null);
  const[comentarios, setComentarios] = useState('');

  // Variable para almacenar el mensaje enviado por el servidor.
  let mensaje = '';
  let codigo = '';

  // Función para crear un pedido.
  const infoPedido = async (e) => {
    e.preventDefault();

    // Validamos que se ingresaron todos los datos.
    if(!nit || !numIdentificacion || !fechaPedido || !direccionEnvio || !formaPago || !estado || !fechaEntrega || !comentarios){
      alert('Ingrese todos los datos del pedido a registrar.');
        return;
    }

    // Creamos el objeto para el envío de los datos.
    let datosPedido = {
      'nit' : nit,
      'numIdentificacion' : numIdentificacion,
      'fechaPedido' : fechaPedido,
      'direccionEnvio' : direccionEnvio,
      'formaPago' : formaPago,
      'estado' : estado,
      'fechaEntrega' : fechaEntrega,
      'comentarios' : comentarios
    }

    await fetch('http://localhost:3001/pedido/', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(datosPedido),
    })
    .then((response) => response.json())
    .then((data) => {
      mensaje = data.message;
      codigo = data.id.idPedido;
        if(data.noCreado) {
          console.log(data);
          alert(mensaje);
        } else {
          console.log(data);
          alert(mensaje + ' con el código ' + codigo);
        }
    });
    limpiarFormulario.current.reset();
  }

  return (
    <section className='container-fluid'>
      <article className='row formatoCrearCliente'>
        <form className="row g-3 needs-validation" ref={limpiarFormulario}>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="nit" className="form-label">Nit:</label>
            <input type="text" className="form-control formatoInputCrear" id="nit" onChange = {(e) => setNit(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="numIdentificacion" className="form-label">Número de identificación:</label>
            <input type="text" className="form-control formatoInputCrear" id="numIdentificacion" onChange = {(e) => setNumIdentificacion(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="fechaPedido" className="form-label">Fecha:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaPedido" onChange = {(e) => setFechaPedido(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="direccionEnvio" className="form-label">Dirección:</label>
            <input type="text" className="form-control formatoInputCrear" id="direccionEnvio" onChange = {(e) => setDireccionEnvio(e.target.value)} required />
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor = "formaPago" className = "form-label">Forma de pago:</label>
            <select className ="form-select formatoInputCrear" id="formaPago" onChange = {(e) => setFormaPago(e.target.value)} required>
              <option selected disabled value="">Seleccione la forma de pago:</option>
              <option>Contado</option>
              <option>30 días</option>
              <option>60 días</option>
              <option>90 días</option>
            </select>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor = "estado" className = "form-label">Estado:</label>
            <select className ="form-select formatoInputCrear" id="estado" onChange = {(e) => setEstado(e.target.value)} required>
              <option selected disabled value="">Seleccione el estado:</option>
              <option>Creado</option>
            </select>
          </div>

          <div className ="col-md-12 col-lg-4">
            <label htmlFor="fechaEntrega" className="form-label">Fecha entrega:</label>
            <input type="date" className="form-control formatoInputCrear" id="fechaEntrega" onChange = {(e) => setFechaEntrega(e.target.value)} required />
          </div>

          <div className="form-floating col-12 col-md-12 col-lg-12">
            <textarea className="form-control formatoInputCrear formatoComentarios" placeholder="Leave a comment here" id="comentarios" onChange={(e) => setComentarios(e.target.value)} required></textarea>
            <label htmlFor="comentarios">Comentarios</label>
          </div>

          <div className="col-md-12">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {infoPedido}>Crear</button>
          </div>
            
        </form>
      </article>
    </section>
    
  )
}
