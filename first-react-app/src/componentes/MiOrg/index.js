import './MiOrg.css';

const MiOrg = (props) => {
    // Estado - hooks
    // useState
    // usar la funcion useState()
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)

    // const [mostrar, actualizarMostrar] = useState();

    // const manejarClick = () => {
    //     console.log('Mostrar/Ocultar elemento');
    // }

    return <section className="orgSection" >
        <h3 className='title'>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg;