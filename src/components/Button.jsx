import React from "react";
import "../Style/Button.css"

const Button = ({ text, handleButton }) => {
  return (
    <button id="formButton" className="custom-button ps-3 pe-3" onClick={handleButton}>
      {text}
    </button>
  );
};

export default Button;
