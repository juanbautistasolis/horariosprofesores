import React from "react";
import Combobox from "react-widgets/Combobox";

import "react-widgets/styles.css";
import "../Style/configuracionseccion.css";
import "react-responsive-modal/styles.css";

const Especial = ({ setGrado, setSeccion, grado, seccion }) => {
  return (
    <div>
      <Combobox
        defaultValue="Grado"
        value={grado}
        onChange={(value) => setGrado(value)}
        data={["1", "2", "3", "4", "5", "6"]}
      />

      <div className="textConfig">Sección: </div>
      <Combobox
        defaultValue="Sección"
        value={seccion}
        onChange={(value) => setSeccion(value)}
        data={["1", "2", "3", "4"]}
      />
    </div>
  );
};

export default Especial;
