import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Style/vistaprincipal.css";
import Componente from "./Componente";
import Crudmaterias from "./Crudmaterias";
import Crudsecciones from "./Crudsecciones";
import Crudusuarios from "./Crudusuarios";
import Crudeventos from "./Crudeventos";

const Vistaprincipal = () => {
  const [state, setState] = useState(<Componente />);
  const location = useLocation();

  const changeComponent = (value) => {
    switch (value) {
      case 1:
        // setState(<Crudmaterias />);
        return;
      case 2:
        setState(<Crudsecciones />);
        break;
      case 3:
        setState(<Crudusuarios user={location.state.type} />);
        return;
      case 4:
        setState(<Crudmaterias />);
        break;
      case 5:
        setState(<Crudeventos />);
        break;
      case 6:
        // setState(<HorarioEspecial/>)
        return;
    }
  };
  return (
    <div className="firstComponent">
      <header>
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/horaclass-ejbs.appspot.com/o/Escuela%20Juan%20Buaitsta.jpg?alt=media&token=1695e3a8-4118-4ff5-b238-0146a19a8e92"
          alt=""
        />
        <div className="userRegister pe-4">{location.state?.name}</div>
      </header>
      <div className="aside">
        <div className="firstComponetAside">
          <div
            id="inicio"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => changeComponent(1)}
          >
            <i className="small material-icons center">home</i>
            <p className="mb-0">Inicio</p>
          </div>
          <div
            id="secciones"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => changeComponent(2)}
          >
            <i className="small material-icons center">select_all</i>
            <p className="mb-0">Secciones</p>
          </div>
          <div
            id="usuarios"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => changeComponent(3)}
          >
            <i className="small material-icons center">person_pin</i>
            <p className="mb-0">Usuarios</p>
          </div>
          <div
            id="materias"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => changeComponent(4)}
          >
            <i className="small material-icons center">book</i>
            <p className="mb-0">Materias</p>
          </div>
          <div
            id="eventos"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => changeComponent(5)}
          >
            <i className="small material-icons center">event_available</i>
            <p className="mb-0">Eventos</p>
          </div>
        </div>
        <div className="secondComponentAside">{state}</div>
      </div>
    </div>
  );
};

export default Vistaprincipal;
