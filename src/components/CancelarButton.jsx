import React from "react";
import "../Style/CancelarButton.css"

const CancelarButton = ({ text, handleButton }) => {
  return (
    <button className="cancelar-button ps-3 pe-3" onClick={handleButton}>
      {text}
    </button>
  );
};

export default CancelarButton;
