import React from "react";
import Input from "./Input";
import "../Style/ModalForm.css";

const ModalForm = ({
  handleChange,
  item,
  onSave,
  inputs,
  selected,
  handleSave,
  title,
}) => {
  const saveItem = () => {
    console.log("saved!");
    onSave();
    handleSave();
  };
  return (
    <div className="form-wraper">
      <div className="row">
        <div className="col-12">
          <h4 className="form-title m-0 pb-3 ps-3 pt-3">{title}</h4>
        </div>
      </div>
      <div className="modal-form pb-3 ps-3 pt-3 pe-3 row">
        {inputs.map((input, index) => {
          let val = input.type === "select" ? selected : item.nombre;

          if (input.type === "textarea") {
            val = item.descripcion;
          }

          return (
            <Input
              key={index}
              type={input.type}
              label={input.label}
              name={input.nombre}
              handleChange={handleChange}
              value={val}
              selectOptions={input.options}
            />
          );
        })}
      </div>
      <div className="buttons d-flex justify-content-end">
        <button className="cancelar-button me-3" onClick={() => onSave()}>
          Cancelar
        </button>
        <button className="custom-button" onClick={() => saveItem()}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
