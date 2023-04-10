import './ListaOpciones.css'

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => {
    //      return <option></option>
    //} )
    const equipos = [
        'Programación',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Móvil',
        'Innovación y  Gestión'
    ]

    //Para saber cual va a ser el valor seleccionado de las option creadas.
    const manejarCambio = (e) => {
        //Recibe el actualizarEquipo() desde Formulario.js .
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        {/* {siguientes dos lineas, los atributos son para que las option se deba seleccionar alguna sin que tome la de Seleccionar equipo} */}
        <select value={props.valor} onChange={manejarCambio} >
            <option value="" disable defaultValue="" hidden >Seleccionar equipo</option>
            { equipos.map( (equipo, index) => {
                return <option key={index} value={equipo} >{equipo}</option>
            } ) }
        </select>
    </div>
}

export default ListaOpciones;