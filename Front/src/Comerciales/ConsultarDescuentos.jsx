import { useRef } from "react"

import '../Formatos/Consultar.css';
import '../Formatos/Validar.css';
import '../Formatos/ComponentesComunes.css';

export const ConsultarDescuentos = () => {

  // Variable para limpiar los campos del formulario.
  const limpiarFormulario = useRef(null);

   // Función para consultar los descuentos.
   const consultar = async (e) => {
    e.preventDefault();

    // Función para generar la lista de pagos.
    const generarLista = (data) => {

      const cuerpoTabla = document.getElementById('cuerpoTabla');

      data.forEach((desc) => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `<th scope="row">${desc.idProducto}</th>
                               <td>${desc.nombreProducto}</td>
                               <td>${desc.precio}</td>
                               <td>${desc.descuento}</td>`;
        cuerpoTabla.appendChild(nuevaFila);
      })

    }

    await fetch(`http://localhost:3001/promociones/descuentos`)
    .then((response) => response.json())
    .then((data) => {
      if(data.noEncontrado){
        alert('No hay productos con descuento.');
      } else { 
        generarLista(data); 
      }
      limpiarFormulario.current.reset();
    })
   }

  return (
    <section className='container-fluid piePagina1'>
      <article className="row">
        <form className="col-12 col-md-6 col-lg-4 formatoValidar" ref={limpiarFormulario}>

          <div className="col-6 col-md-6">
            <button className="btn btn-primary formatoBoton" type="submit" onClick = {consultar}>Consultar</button>
          </div>

        </form>
      </article>

      <article className="row piePagina2">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary table-hover formatoTabla" id='miTabla'>
            <thead>
              <tr className="table-primary">
                <th scope="col"> Código </th>
                <th scope="col"> Nombre </th>
                <th scope="col"> Precio normal </th>
                <th scope="col"> Descuento a aplicar </th>
              </tr>
            </thead>

            <tbody id = "cuerpoTabla">

            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}
