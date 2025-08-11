// Componente contenedor de los componentes para las actualizaciones.
import '../Formatos/ActualizarCliente.css';

import { ActualizarDescripcion } from './ActualizarPromocion/ActualizarDescripcion';
import { ActualizarDescuento } from './ActualizarPromocion/ActualizarDescuento';
import { ActualizarFechaFinal } from './ActualizarPromocion/ActualizarFechaFinal';
import { ActualizarFechaInicio } from './ActualizarPromocion/ActualizarFechaInicio';
import { ActualizarNumIdentificacion } from './ActualizarPromocion/ActualizarNumIdentificacion';
import { ActualizarTipo } from './ActualizarPromocion/ActualizarTipo';

export const ActualizarPromocion = () => {
  return (
    <div className='contenedorActualizaciones'>
      <p> Ingrese los datos en el campo correspondiente </p>
      <section className='container-fluid formatoActualizar'>
        <ActualizarNumIdentificacion />
        <ActualizarDescripcion />
        <ActualizarDescuento />
      </section>
      <section className='container-fluid formatoActualizar'>
        <ActualizarFechaInicio />
        <ActualizarFechaFinal />
        <ActualizarTipo />
      </section>
    </div>
  )
}
