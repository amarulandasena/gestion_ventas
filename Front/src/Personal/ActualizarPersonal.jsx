// Componente contenedor de los componentes para las actualizaciones.
import '../Formatos/ActualizarCliente.css';

import { ActualizarApellidos } from './ActualizarPersonal/ActualizarApellidos';
import { ActualizarCargo } from './ActualizarPersonal/ActualizarCargo';
import { ActualizarContacto } from './ActualizarPersonal/ActualizarContacto';
import { ActualizarContrasegna } from './ActualizarPersonal/ActualizarContrasegna';
import { ActualizarDireccion } from './ActualizarPersonal/ActualizarDireccion';
import { ActualizarEmail } from './ActualizarPersonal/ActualizarEmail';
import { ActualizarFechaDeIngreso } from './ActualizarPersonal/ActualizarFechaDeIngreso';
import { ActualizarFechaNacimiento } from './ActualizarPersonal/ActualizarFechaNacimiento';
import { ActualizarNombres } from './ActualizarPersonal/ActualizarNombres';
import { ActualizarNumeroCelular } from './ActualizarPersonal/ActualizarNumeroCelular';
import { ActualizarNumeroContacto } from './ActualizarPersonal/ActualizarNumeroContacto';
import { ActualizarNumeroTelefonico } from './ActualizarPersonal/ActualizarNumeroTelefonico';



export const ActualizarPersonal = () => {
  return (
    <div className='contenedorActualizaciones'>

      <p> Ingrese los datos en el campo correspondiente </p>
      <section className='container-fluid formatoActualizar'>
        <ActualizarNombres />
        <ActualizarApellidos />
        <ActualizarFechaNacimiento />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarDireccion />
        <ActualizarNumeroTelefonico />
        <ActualizarNumeroCelular />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarEmail />
        <ActualizarContacto />
        <ActualizarNumeroContacto />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarCargo />
        <ActualizarFechaDeIngreso />
        <ActualizarContrasegna />
      </section>
    </div>
  )
}
