// Componente contenedor de los componentes para las actualizaciones.
import '../Formatos/ActualizarCliente.css';

import { ModificarNit } from './ModificarHistorial/ModificarNit';
import { ModificarHistorial } from './ModificarHistorial/ModificarHistorial';
import { ModificarValor } from './ModificarHistorial/ModificarValor';

export const ActualizarHistorial = () => {
  return (
    <div className='contenedorActualizaciones'>
      <p> Ingrese los datos en el campo correspondiente </p>
      <section className='container-fluid formatoActualizar'>
        <ModificarNit />
        <ModificarHistorial />
        <ModificarValor />
      </section>
    </div>
  )
}
