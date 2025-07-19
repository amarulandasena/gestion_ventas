import { useState, useRef } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarCliente = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

  // Hooks para capturar los datos.
  const[nit, setNit] = useState('');
  const[razonSocial, setRazonSocial] = useState('');
  const[ciudad, setCiudad] = useState('');
  const[direccion, setDireccion] = useState('');
  const[numeroTelefonico, setNumeroTelefonico] = useState('');
  const[email, setEmail] = useState('');
  const[administrador, setAdministrador] = useState('');
  const[numeroAdministrador, setNumeroAdministrador] = useState('');
  const[emailAdministrador, setEmailAdministrador] = useState('');
  const[sector, setSector] = useState('');
  const[actividad, setActividad] = useState('');
  const[tamagno, setTamagno] = useState('');
  const[numEmpleados, setNumEmpleados] = useState(0);
  const[categoria, setCategoria] = useState('');
  const[periodoPago, setPeriodoPago] = useState('');

  // Función para consultar un cliente.
  const consultar = async (e) => {
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!nit){
      alert('Ingrese el nit del cliente');
      return;
    }

    await fetch(`http://localhost:3001/cliente/${nit}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado){
        alert('Cliente no registrado');
      } else {
        setRazonSocial(data.razonSocial);
        setCiudad(data.ciudad);
        setDireccion(data.direccion);
        setNumeroTelefonico(data.numTelefonico);
        setEmail(data.email);
        setAdministrador(data.administrador);
        setNumeroAdministrador(data.telAdministrador);
        setEmailAdministrador(data.emailAdministrador);
        setSector(data.sector);
        setActividad(data.actividad);
        setTamagno(data.tamagno);
        setNumEmpleados(data.numEmpleados);
        setCategoria(data.producto);
        setPeriodoPago(data.periodoPago);
      }
    })
    limpiarFormulario.current.reset();
  }

  return (
    <section className='container-fluid'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>

          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="nit" className="form-label">Nit:</label>
            <input type="text" className="form-control formatoInput" id="nit" onChange = {(e) => setNit(e.target.value)} required />
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
                  <th scope="col"> Nit </th>
                  <th scope="col"> Razón social </th>
                  <th scope="col"> Ciudad </th>
                  <th scope="col"> Dirección </th>
                  <th scope="col"> Número telefónico </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row"> {nit} </th>
                  <th scope="col"> {razonSocial} </th>
                  <th scope="col"> {ciudad} </th>
                  <th scope="col"> {direccion} </th>
                  <th scope="col"> {numeroTelefonico} </th>
                </tr>
              </tbody>
            </table>

            <table className="table table-bordered border-primary table-hover">
              <thead>
                <tr className="table-primary">
                  <th scope="col"> Email </th>
                  <th scope="col"> Administrador </th>
                  <th scope="col"> Número del administrador </th>
                  <th scope="col"> Email del administrador </th>
                  <th scope="col"> Sector </th>
                </tr>
              </thead>

              <tbody>
                  <tr>
                    <th scope="row"> {email} </th>
                    <th scope="col"> {administrador} </th>
                    <th scope="col"> {numeroAdministrador} </th>
                    <th scope="col"> {emailAdministrador} </th>
                    <th scope="col"> {sector} </th>
                  </tr>
              </tbody>
            </table>

            <table className="table table-bordered border-primary table-hover">
              <thead>
                <tr className="table-primary">
                  <th scope="col"> Actividad </th>
                  <th scope="col"> Tamaño </th>
                  <th scope="col"> Número de empleados </th>
                  <th scope="col"> Categoría </th>
                  <th scope="col"> Periodo de pago </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row"> {actividad} </th>
                  <th scope="col"> {tamagno} </th>
                  <th scope="col"> {numEmpleados} </th>
                  <th scope="col"> {categoria} </th>
                  <th scope="col"> {periodoPago} </th>
                </tr>
              </tbody>
            </table>
         </div>
      </article>
    </section>
  )
}
