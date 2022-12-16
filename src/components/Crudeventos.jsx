import React, { useContext } from "react";
import AgregarNewItem from "./AgregarNewItem";
import { Context } from "../store/appContext";
import CustomTable from "./CustomTable";

const Crudeventos = () => {
  const { store } = useContext(Context);
  const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    return dd + "/" + mm + "/" + yyyy;
  };

  const nuevoItem = { nombre: "", descripcion: "", fecha: getDate() };
  const inputs = [
    {
      type: "text",
      label: "Nombre:",
      nombre: "nombre",
    },
    {
      type: "textarea",
      label: "Descripcion:",
      nombre: "descripcion",
    },
    {
      type: "fecha",
      label: "Fecha:",
      nombre: "fecha",
    },
  ];
  return (
    <div className="container vh-100 w-100">
      <h4 className="title">Eventos</h4>
      <div className="row">
        <div className="col-12">
          <AgregarNewItem
            title="Agregar evento"
            nuevoItem={nuevoItem}
            data="eventos/"
            inputs={inputs}
          />
        </div>
      </div>
      <div className="row">
        <CustomTable
          columns={["Nombre", "Descripcion", "Fecha"]}
          values={store.eventos}
          inputs={inputs}
          itemName="eventos"
        />
      </div>
    </div>
  );
};

export default Crudeventos;
