import React from "react";
import "../Style/componente.css";

const Componente = () => {
  return (
    <div className="container vh-100 w-100">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <p className="pcomponent">
            Selecciona una opción para acceder al sistema
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <i className=" material-icons center elemento">error_outline</i>
        </div>
      </div>
    </div>
  );
};

export default Componente;
