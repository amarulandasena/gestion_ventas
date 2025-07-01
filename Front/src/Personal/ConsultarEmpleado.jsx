import { useState } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarEmpleado = () => {

  // Hooks para capturar los datos.
  const[numIdentificacion, setNumIdentificacion] = useState('');
  const[nombres, setNombres] = useState('');
  const[apellidos, setApellidos] = useState('');
  const[fechaNacimiento, setFechaNacimiento] = useState(null);
  const[direccion, setDireccion] = useState(''); 
  const[numtelefonico, setNumTelefonico] = useState(''); 
  const[numcelular, setNumCelular] = useState(''); 
  const[email, setEmail] = useState(''); 
  const[contacto, setContacto] = useState(''); 
  const[numContacto, setNumContacto] = useState('');
  const[cargo, setCargo] = useState(''); 
  const[fechaIngreso, setFechaIngreso] = useState(null);
  const[status, setStatus] = useState(0);
  const[contrasegna, setContrasegna] = useState('');

  // Función para consultar un empleado.
  const consultar = async (e) => { 
    e.preventDefault();

    // Validamos el ingreso de los datos.
    if (!numIdentificacion){
      alert('Ingrese el Número de identificación del empleado');
      return;
    }

    await fetch(`http://localhost:3001/empleado/${numIdentificacion}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado){
        console.log(data);
        alert('Empleado no registrado');
      } else { 
        setNombres(data.nombres);
        setApellidos(data.apellidos);
        setFechaNacimiento(data.fechaNacimiento);
        setDireccion(data.direccion);
        setNumTelefonico(data.numtelefonico);
        setNumCelular(data.numcelular);
        setEmail(data.email);
        setContacto(data.contacto);
        setNumContacto(data.numContacto);
        setCargo(data.cargo);
        setFechaIngreso(data.fechaIngreso);
      }
    })
  }

  return (
    <section className='container-fluid'>
      <article className="row">
        <form className="col-4 col-md-4 formatoValidar">

          <div className ="col-6 col-md-6 formatoLabelInput">
            <label htmlFor="numIdentificacion" className="form-label">Id:</label>
            <input type="text" className="form-control formatoInputCrear" id="numIdentificacion" onChange = {(e) => setNumIdentificacion(e.target.value)} required />
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
                <th scope="col"> Número de identificación </th>
                <th scope="col"> Nombres </th>
                <th scope="col"> Apellidos </th>
                <th scope="col"> Fecha de nacimiento </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"> {numIdentificacion} </th>
                <th scope="col"> {nombres} </th>
                <th scope="col"> {apellidos} </th>
                <th scope="col"> {fechaNacimiento} </th>
              </tr>
            </tbody>
          </table>

          <table className="table table-bordered border-primary table-hover">
            <thead>
              <tr className="table-primary">
                <th scope="col"> Dirección </th>
                <th scope="col"> Número telefónico </th>
                <th scope="col"> Número celular </th>
                <th scope="col"> Email </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row"> {direccion} </th>
                <th scope="col"> {numtelefonico} </th>
                <th scope="col"> {numcelular} </th>
                <th scope="col"> {email} </th>
              </tr>
            </tbody>
          </table>

          <table className="table table-bordered border-primary table-hover">
            <thead>
              <tr className="table-primary">
                <th scope="col"> Contacto </th>
                <th scope="col"> Número de contacto </th>
                <th scope="col"> Cargo </th>
                <th scope="col"> Fecha de ingreso </th>
              </tr>
            </thead>

            <tbody>
            <tr>
              <th scope="row"> {contacto} </th>
              <th scope="col"> {numContacto} </th>
              <th scope="col"> {cargo} </th>
              <th scope="col"> {fechaIngreso} </th>
            </tr>
          </tbody>
          </table>

          

        </div>
      </article>
    </section>
  )
}
