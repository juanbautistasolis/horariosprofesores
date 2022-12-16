import React, { useState } from "react";
import { memo } from "react";
import "../Style/Input.css";

const Input = ({ type, label, name, handleChange, value, selectOptions }) => {
  const [shown, setShown] = useState(false);

  const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    return dd + "/" + mm + "/" + yyyy;
  };

  const switchShown = (e) => {
    e.preventDefault();
    setShown(!shown);
  };

  if (type === "text") {
    return (
      <div className="form-input align-items-center col-md-6 col">
        <label className="form-label" htmlFor={`input-${label}`}>
          {label}
        </label>
        <input
          id={`input-${label}`}
          className="form-control ps-1"
          type="text"
          name={name}
          onChange={handleChange}
          value={value}
        />
      </div>
    );
  }
  if (type === "email") {
    return (
      <div className="form-input align-items-center col-md-6 col">
        <label className="form-label pe-3" htmlFor={`input-${label}`}>
          {label}
        </label>
        <input
          id={`input-${label}`}
          className="form-control ps-1"
          type="email"
          name={name}
          onChange={handleChange}
          value={value}
        />
      </div>
    );
  }
  //Fix this
  if (type === "password") {
    return (
      <div className="form-input align-items-center col-md-6 col">
        <label className="form-label pe-3" htmlFor={`input-${label}`}>
          {label}
        </label>
        <div className="input-wrapper d-flex align-items-center">
          <input
            id={`input-${label}`}
            className="form-control ps-1"
            // type="password"
            type={shown ? "text" : "password"}
            name={name}
            onChange={handleChange}
            value={value}
          />
          <button onClick={switchShown}>
            {!shown ? (
              <i className="material-icons">visibility</i>
            ) : (
              <i className="material-icons">visibility_off</i>
            )}
          </button>
        </div>
      </div>
    );
  }
  if (type === "select") {
    return (
      <div className="form-input align-items-center col-md-6 col">
        <label htmlFor={`input-${label}`} className="form-label">
          {label}
        </label>
        <select
          id={`input-${label}`}
          className="form-select"
          aria-label="Default select example"
          onChange={handleChange}
          name={name}
          value={value}
        >
          <option defaultValue>Seleccionar</option>
          {selectOptions.map((option, index) => {
            return (
              <option key={index} value={option.nombre}>
                {option.nombre}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div className="form-input align-items-center col-md-6 col">
        <label htmlFor={`input-${label}`} className="form-label pe-3">
          {label}
        </label>
        <textarea
          id={`input-${label}`}
          className="form-control textarea"
          name={name}
          placeholder="Descripción del evento"
          onChange={handleChange}
          value={value}
          // id="floatingTextarea"
        />
      </div>
    );
  }
  if (type === "fecha") {
    return (
      <div className="form-input align-items-center col">
        <label htmlFor={`input-${label}`} className="form-label">
          {`${label} ${getDate()}`}
        </label>
      </div>
    );
  }
  return null;
};

export default memo(Input);
