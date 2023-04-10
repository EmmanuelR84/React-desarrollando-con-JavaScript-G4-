import './Boton.css';

const Boton = (props) => {
//  return <button className='boton' >{ props.texto }</button> .Esta es una forma
    return <button className='boton' >{ props.children }</button>
}

export default Boton;