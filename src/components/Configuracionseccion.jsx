import React, { useState, useEffect, useContext } from "react";
import "react-responsive-modal/styles.css";
import "../Style/configuracionseccion.css";
import "react-widgets/styles.css";
import { Modal } from "react-responsive-modal";
import { Context } from "../store/appContext";
import Combobox from "react-widgets/Combobox";
import Especial from "./Especial";
import Button from "./Button";
import CancelarButton from "./CancelarButton";

const Configuracionseccion = ({
  setFlag,
  setSeccionP,
  setearHorario,
  isAdmin,
  teacher,
}) => {
  const { store } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [grado, setGrado] = useState("");
  const [seccion, setSeccion] = useState("");
  let data = true;
  let materias = [];

  const getMaterias = () => {
    for (const [key, value] of Object.entries(store.materias)) {
      if (value.tipo_materia !== "Complementaria") {
        materias.push(value.nombre);
        continue;
      }
      console.log(key);
    }
  };

  const setModal = () => {
    console.log("Estoy en setear el modal");
    let secFinal = "";
    if (isAdmin) {
      secFinal = grado;
    } else {
      secFinal = grado + "-" + seccion;
    }
    console.log(secFinal);
    setSeccionP(secFinal);
    setearHorario(secFinal);
    setFlag(false);
    data = true;
  };

  const closeModal = () => {
    setFlag(false);
  };

  useEffect(() => {
    setOpen(true);
    if (data) {
      getMaterias();
      data = false;
    }
  });

  return (
    <div>
      {console.log("Administrador: ", isAdmin, " profesor: ", teacher)}
      {(!isAdmin && teacher === "Docente Complementario") ||
      (isAdmin && teacher === "Docente") ? (
        <Modal open={open} center>
          <div className="boxConfiguration">
            {/* <a
              className="btn-floating waves-effect waves-light red block close-btn"
              onClick={closeModal}
            >
              <i className="material-icons">cancel</i>
            </a> */}
            <h4 className="form-title m-0 pb-3 ps-3 pt-3 pe-3">
              Horario del profesor
            </h4>
            <div className="combobox">
              <div className="textConfig">Grado:</div>
              {teacher === "Docente" ? (
                <Combobox
                  defaultValue="Grado"
                  value={grado}
                  onChange={(value) => setGrado(value)}
                  data={materias}
                />
              ) : (
                <Especial
                  setGrado={setGrado}
                  setSeccion={setSeccion}
                  grado={grado}
                  seccion={seccion}
                />
              )}
            </div>
          </div>
          {/* <a className="btn-floating waves-effect waves-light green aceptar" onClick={setModal}>
              <i className="material-icons">send</i>
          </a> */}
          <div className="buttons-wrapper m-2 mt-3 d-flex justify-content-around">
            <CancelarButton text="Cancelar" handleButton={closeModal} />
            <Button text="Aceptar" handleButton={setModal} />
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Configuracionseccion;
