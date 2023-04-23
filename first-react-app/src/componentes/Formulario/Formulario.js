import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState(""); //Si quisieramos que al cargar inicie con algun valor ya definido, lo colocamos dentro de useState('').

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  //Destructurar un poco para no usar tantos props.
  const { registrarColaborador, crearEquipo } = props;

  //Recibir datos del formulario.
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Se evito recargar la pagina");
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo
      // O simplificado:
      // nombre,
      // puesto,
      // foto,
      // equipo
    }
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        {/* para evitar q la pagina se actualice */}
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        {/*    <Boton texto='Crear' />  Esta es una forma de hacerlo  */}
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        {/* para evitar q la pagina se actualice */}
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en Hex"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
