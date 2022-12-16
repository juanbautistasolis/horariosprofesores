import React, { useContext } from "react";
import AgregarNewItem from "./AgregarNewItem";
import { Context } from "../store/appContext";
import CustomTable from "./CustomTable";

const Crudsecciones = () => {
  const { store } = useContext(Context);
  const docentesToAssign = Object.values(store.usuarios).filter(
    (docente) => docente.tipo_usuario === "Docente"
  );
  
  const nuevoItem = { nombre: "", docente_asignado: "" };
  const inputs = [
    {
      type: "text",
      label: "Nombre:",
      nombre: "nombre",
    },
    // este select
    {
      type: "select",
      label: "Docente asginado:",
      nombre: "docente_asignado",
      options: docentesToAssign
    },
  ];

  return (
    <div className="container vh-100 w-100">
      <h4 className="title">Secciones</h4>
      <div className="row">
        <div className="col-12">
          <AgregarNewItem
            title="Agregar sección"
            nuevoItem={nuevoItem}
            data="secciones/"
            inputs={inputs}
            selectOptions={docentesToAssign}
          />
        </div>
      </div>
      <div className="row">
        <CustomTable
          columns={["Nombre", "Docente asignado"]}
          values={store.secciones}
          inputs={inputs}
          selectOptions={docentesToAssign}
          itemName="secciones"
        />
      </div>
    </div>
  );
};

export default Crudsecciones;
