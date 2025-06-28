// Componente contenedor de los componentes para las actualizaciones.
import './ActualizarCliente.css';

import { ActualizarRazonSocial } from './ActualizarRazonSocial';
import { ActualizarCiudad } from './ActualizarCiudad';
import { ActualizarDireccion } from './ActualizarDireccion';
import { ActualizarNumTelefonico } from './ActualizarNumTelefonico';
import { ActualizarEmail } from './ActualizarEmail';
import { ActualizarAdministrador } from './ActualizarAdministrador';
import { ActualizarNumTelefonicoAd } from './ActualizarNumTelefonicoAd';
import { ActualizarEmailAd } from './ActualizarEmailAd';
import { ActualizarSector } from './ActualizarSector';
import { ActualizarActividad } from './ActualizarActividad';
import { ActualizarTamagno } from './ActualizarTamagno';
import { ActualizarNumEmpleados } from './ActualizarNumEmpleados';
import { ActualizarProducto } from './ActualizarProducto';
import { ActualizarPeriodoPago } from './ActualizarPeriodoPago';

export const ActualizarCliente = () => {
  return (
    <div>
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

