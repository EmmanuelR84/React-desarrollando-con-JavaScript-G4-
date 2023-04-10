import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header/Header";
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  // Ternario --> condicion ? seMuestra : noSeMuestra
  // (b) otra forma mas resumida
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div >
      <Header />
      { mostrarFormulario === true ? <Formulario /> : <></> } {/* <></> seria como un div vacio, de esta forma no se muestra en el inspector */ }
      {/** (b) mostrarFormulario && <Formulario /> */}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
