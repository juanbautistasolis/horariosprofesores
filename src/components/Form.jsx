import React, { useState } from "react";
import "../Style/Form.css";

const Form = ({ title, setEmail, setPassword, handleLogin }) => {
  const [shown, setShown] = useState(false);

  const switchShown = (e) => {
    e.preventDefault();
    setShown(!shown);
  };

  return (
    <div className="form-container d-flex flex-column">
      <h3 className="form-title mb-5 mt-0">{title}</h3>
      <form className="form">
        <div className="mb-3">
          <label className="form-label d-none" htmlFor="input-email">
            Correo
          </label>
          <input
            id="input-email"
            className="form-control ps-3"
            type="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label d-none" htmlFor="input-password">
            Contraseña
          </label>
          <div className="input-wrapper d-flex align-items-center">
            <input
              id="input-password"
              className="form-control ps-3"
              type={shown ? "text" : "password"}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={switchShown}>
              {!shown ? (
                <i className="material-icons me-1">visibility</i>
              ) : (
                <i className="material-icons">visibility_off</i>
              )}
            </button>
          </div>
        </div>
        <button
          id="buttonLogin"
          className="form-button pt-2 pb-2"
          onClick={handleLogin}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Form;
