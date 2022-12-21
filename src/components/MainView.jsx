import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Style/vistaprincipal.css";

const MainView = ({ children }) => {
  let navigate = useNavigate();
  // const location = useLocation();

  /*
  Arreglar el log out
  */

  return (
    <div className="firstComponent">
      <header className="d-flex justify-content-end align-items-center">
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/horaclass-ejbs.appspot.com/o/Escuela%20Juan%20Buaitsta.jpg?alt=media&token=1695e3a8-4118-4ff5-b238-0146a19a8e92"
          alt=""
        />
        {/* <div className="userRegister pe-4">{location.state?.name}</div> */}
        <div className="circle d-flex justify-content-center align-items-center me-2">
          <p className="m-0 text-center">{sessionStorage.getItem("Username")[0]}</p>
        </div>
        <div className="userRegister pe-4">
          {sessionStorage.getItem("Username")}
        </div>
        <i
          className="material-icons me-3 log-out-icon"
          onClick={() => navigate("/")}
        >
          logout
        </i>
      </header>
      <div className="aside">
        <div className="firstComponetAside">
          <div
            id="inicio"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => navigate("/inicio")}
          >
            <i className="small material-icons center">home</i>
            <p className="mb-0">Inicio</p>
          </div>
          <div
            id="inicio"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => navigate("/inicio")}
          >
            <i className="small material-icons center">home</i>
            <p className="mb-0">Inicio</p>
          </div>
          <div
            id="secciones"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => navigate("/inicio/secciones")}
          >
            <i className="small material-icons center">select_all</i>
            <p className="mb-0">Secciones</p>
          </div>
          <div
            id="usuarios"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => navigate("/inicio/usuarios")}
          >
            <i className="small material-icons center">person_pin</i>
            <p className="mb-0">Usuarios</p>
          </div>
          <div
            id="materias"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => navigate("/inicio/materias")}
          >
            <i className="small material-icons center">book</i>
            <p className="mb-0">Materias</p>
          </div>
          <div
            id="eventos"
            className="asideComponent d-flex flex-column justify-content-center align-items-center"
            onClick={() => navigate("/inicio/eventos")}
          >
            <i className="small material-icons center">event_available</i>
            <p className="mb-0">Eventos</p>
          </div>
        </div>
        <div className="secondComponentAside">{children}</div>
      </div>
    </div>
  );
};

export default MainView;
