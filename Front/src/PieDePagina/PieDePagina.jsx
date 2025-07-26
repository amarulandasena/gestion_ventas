import './PieDePagina.css';

export const PieDePagina = ( { banderaPie }) => {
  return (
    banderaPie ? <footer className = "container-fluid margenSuperior">
      <div className = "row pieDePagina">
        <p className = "col-12 col-md-6">Todos los derechos reservados<br />
                                          Sabaneta, Antioquia, 2025 <br />
                                          A&D Soft</p>

        <p className = "col-12 col-md-6">Calle 50 No. 80 - 12. <br />
                                         Medellín, Antioquia, Colombia. <br />
                                         Sede principal: 3001234567</p>
        
      </div>   
    </footer> : null
  )
}
