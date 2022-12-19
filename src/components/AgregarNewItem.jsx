import React, { useState, useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import "../Style/AgregarNewItem.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AgregarNewItem = ({
  title,
  nuevoItem,
  data,
  inputs,
  // selectOptions,
  user,
}) => {
  const [newItem, setNewItem] = useState(nuevoItem);
  const { actions } = useContext(Context);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const agregar = (e) => {
    e.preventDefault();
    console.log("Este es el nuevo item: ",newItem)
    if(newItem.nombre == "" || newItem.tipo_usuario == "" || newItem.password == "" || newItem.docente_asignado == ""){
      Swal.fire('Todos los campos deben de estar llenos');
    }else{
      let idValue = actions.addItem(data, newItem);
      setNewItem(nuevoItem);
      console.log("Este es el user desde newitem: ", user);    
      newItem.tipo_usuario === "Docente Complementario"
        ? navigate("/horarioespecial", {
            state: {
              type: "Docente Complementario",
              name: newItem.nombre,
              profesor: false,
              id: idValue,
              materia: newItem.materia //Aca debería de ir newItem.materia
            },
          })
        : null;
    }
    
  };
  // const getValue = (type) => {
  //   console.log('her', type, nuevoItem);
  //   if (type === "text") {
  //     return nuevoItem.nombre;
  //   }
  //   if (data === "secciones/" && type === "select") {
  //     return nuevoItem.docente_asignado;
  //   }
  //   if (data === "usuarios/" && type === "select") {
  //     return nuevoItem.tipo_usuario;
  //   }
  //   if (data === "materias/" && type === "checkbox") {
  //     return nuevoItem.complementaria;
  //   }
  // };

  return (
    <div className="nuevo-item p-0 mb-2">
      <p className="title text-start p-3">{title}</p>
      <form className="form ps-3 pe-3">
        <div className="row w-100">
          {inputs.map((input, index) => {
            return (
              <Input
                key={index}
                type={input.type}
                label={input.label}
                name={input.nombre}
                handleChange={handleChange}
                // selectOptions={selectOptions}
                selectOptions={input.options}
                value={newItem[input.nombre]}
              />
            );
          })}
          <div className="form-input d-flex justify-content-end mt-3 col">
            <Button text="Agregar" handleButton={(e) => agregar(e)} />
          </div>
        </div>
        {/* <Button text="Agregar" handleButton={(e) => agregar(e)} /> */}
      </form>
    </div>
  );
};

export default AgregarNewItem;
