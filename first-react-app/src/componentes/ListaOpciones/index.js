import './ListaOpciones.css'

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => {
    //      return <option></option>
    //} )
    

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
            { props.equipos.map( (equipo, index) => <option key={index} value={equipo} >{equipo}</option>) }
        </select>
    </div>
}

export default ListaOpciones;