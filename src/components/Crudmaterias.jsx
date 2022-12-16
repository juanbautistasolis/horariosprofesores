import React, { useContext } from "react";
import "../Style/Crudmaterias.css";
import AgregarNewItem from "./AgregarNewItem";
import { Context } from "../store/appContext";
import CustomTable from "./CustomTable";

const Crudmaterias = () => {
  const { store } = useContext(Context);
  const nuevoItem = { nombre: "", tipo_materia: "" };
  const options = [{ nombre: "Básica" }, { nombre: "Complementaria" }];
  const inputs = [
    {
      type: "text",
      label: "Nombre:",
      nombre: "nombre",
    },
    {
      type: "select",
      label: "Tipo de materia:",
      nombre: "tipo_materia",
      options: options,
    },
  ];

  return (
    <div className="container vh-100 w-100">
      <h4 className="title">Materias</h4>
      <div className="row">
        <div className="col-12">
          <AgregarNewItem
            title="Agregar materia"
            nuevoItem={nuevoItem}
            data="materias/"
            inputs={inputs}
            selectOptions={options}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <CustomTable
            columns={["Nombre", "Tipo de materia"]}
            values={store.materias}
            inputs={inputs}
            selectOptions={options}
            itemName="materias"
          />
        </div>
      </div>
    </div>
  );
};

export default Crudmaterias;
