import React from "react";
import { useNavigate } from "react-router";
import MainView from "../components/MainView";
import "../Style/Inicio.css";

const Inicio = () => {
    let navigate = useNavigate()

  return (
    <MainView>
      <div className="container-md inicio-wrapper">
        <div className="row g-0">
          <div className="col-12">
            <div className="title-inicio-wrapper d-flex align-items-center mt-4">
              <i className="material-icons calendar_month-icon me-3 mt-2">
                calendar_month
              </i>
              <h3 className="title-inicio">Gestión de Horarios</h3>
            </div>
          </div>
        </div>
        <div className="row g-0 d-flex">
          <div className="col col-sm-3 col-md-2">
            <button className="square mb-4" onClick={() => navigate("/inicio/secciones")}>
              <i className="small material-icons center square-icon">
                select_all
              </i>
              <p className="text"> Secciones</p>
            </button>
          </div>
          <div className="col col-sm-3 col-md-2">
            <button className="square mb-4" onClick={() => navigate("/inicio/usuarios")}>
              <i className="small material-icons center square-icon">
                person_pin
              </i>
              <p className="text"> Usuarios</p>
            </button>
          </div>
          <div className="col col-sm-3 col-md-2">
            <button className="square mb-4" onClick={() => navigate("/inicio/materias")}>
              <i className="small material-icons center square-icon">book</i>
              <p className="text"> Materias</p>
            </button>
          </div>
          <div className="col col-sm-3 col-md-2">
            <button className="square mb-4" onClick={() => navigate("/inicio/eventos")}>
              <i className="small material-icons center square-icon">
                event_available
              </i>
              <p className="text"> Eventos</p>
            </button>
          </div>
        </div>
      </div>
    </MainView>
  );
};

export default Inicio;
