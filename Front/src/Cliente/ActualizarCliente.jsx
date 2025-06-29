// Componente contenedor de los componentes para las actualizaciones.
import '../Formatos/ActualizarCliente.css';

import { ActualizarRazonSocial } from './ActualizarCliente/ActualizarRazonSocial';
import { ActualizarCiudad } from './ActualizarCliente/ActualizarCiudad';
import { ActualizarDireccion } from './ActualizarCliente/ActualizarDireccion';
import { ActualizarNumTelefonico } from './ActualizarCliente/ActualizarNumTelefonico';
import { ActualizarEmail } from './ActualizarCliente/ActualizarEmail';
import { ActualizarAdministrador } from './ActualizarCliente/ActualizarAdministrador';
import { ActualizarNumTelefonicoAd } from './ActualizarCliente/ActualizarNumTelefonicoAd';
import { ActualizarEmailAd } from './ActualizarCliente/ActualizarEmailAd';
import { ActualizarSector } from './ActualizarCliente/ActualizarSector';
import { ActualizarActividad } from './ActualizarCliente/ActualizarActividad';
import { ActualizarTamagno } from './ActualizarCliente/ActualizarTamagno';
import { ActualizarNumEmpleados } from './ActualizarCliente/ActualizarNumEmpleados';
import { ActualizarProducto } from './ActualizarCliente/ActualizarProducto';
import { ActualizarPeriodoPago } from './ActualizarCliente/ActualizarPeriodoPago';

export const ActualizarCliente = () => {
  return (
    <div className='contenedorActualizaciones'>
      <p> Ingrese los datos en el campo correspondiente </p>
      <section className='container-fluid formatoActualizar'>
        <ActualizarRazonSocial />
        <ActualizarCiudad />
        <ActualizarDireccion />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarNumTelefonico />
        <ActualizarEmail />
        <ActualizarAdministrador />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarNumTelefonicoAd />
        <ActualizarEmailAd />
        <ActualizarSector />
      </section>
      <section className="container-fluid formatoActualizar">
        <ActualizarActividad />
        <ActualizarTamagno />
        <ActualizarNumEmpleados />
      </section>
      <section className="container-fluid formatoActualizar">
        <ActualizarProducto />
        <ActualizarPeriodoPago />
      </section>
    </div>
    
  )
}

