import React, { useContext } from "react";
import AgregarNewItem from "./AgregarNewItem";
import { Context } from "../store/appContext";
import CustomTable from "./CustomTable";

const Crudusuarios = ({ user }) => {
  const { store } = useContext(Context);
  const nuevoItem = {
    nombre: "",
    tipo_usuario: "",
    horario: "",
    correo: "",
    password: "",
    materia: "",
  };
  const options = [
    { nombre: "Administrador" },
    { nombre: "Docente" },
    { nombre: "Docente Complementario" },
  ];

  let materias = [];
  for (const [key, value] of Object.entries(store.materias)) {
    if (value.tipo_materia === "Complementaria") {
      console.log(key)
      materias.push(value)
    }
  }
  console.log(materias);

  const inputs = [
    {
      type: "text",
      label: "Nombre:",
      nombre: "nombre",
    },
    {
      type: "email",
      label: "Correo:",
      nombre: "correo",
    },
    {
      type: "password",
      label: "Contraseña:",
      nombre: "password",
    },
    {
      type: "select",
      label: "Tipo de usuario:",
      nombre: "tipo_usuario",
      options: options,
    },
    {
      type: "select",
      label: "Materia:",
      nombre: "materia",
      options: materias,
    },
  ];

  return (
    <div className="container vh-100 w-100">
      <h4 className="title">Usuarios</h4>
      <div className="row">
        <AgregarNewItem
          title="Agregar usuario"
          nuevoItem={nuevoItem}
          data="usuarios/"
          inputs={inputs}
          selectOptions={options}
          user={user}
        />
      </div>
      <div className="row">
        <CustomTable
          columns={["Nombre", "Tipo", "Correo"]}
          values={store.usuarios}
          inputs={inputs}
          selectOptions={options}
          itemName="usuarios"
        />
      </div>
    </div>
  );
};

export default Crudusuarios;
