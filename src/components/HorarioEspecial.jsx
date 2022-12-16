import React, { useState, useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/horarioEspecial.css";
import Configuracionseccion from "./Configuracionseccion";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Button from "./Button";

//Necesito el nombre y el tipo de usuario (administrador o profesor especial)
// const HorarioEspecial = ({ valor }) => {
const HorarioEspecial = () => {
  const [leccion, setLeccion] = useState("");
  const [flag, setFlag] = useState(false);
  const [seccion, setSeccionP] = useState("");
  let idValue = "";
  let isWrite = true;
  const location = useLocation();
  let isAdmin = location.state.profesor;
  let typeTeacher = location.state.type;
  const { actions, store } = useContext(Context);
  let materias = [];

  const navigate = useNavigate();
  const pdfRef = useRef();

  const mostrarValores = () => {
    if (Object.entries(store.usuarios).length > 0) {
      for (const [key, value] of Object.entries(store.usuarios)) {
        if (key === location.state.id) {
          for (const [ke, val] of Object.entries(value.horario)) {
            console.log(ke);
            document.getElementById(val.celda).textContent = val.seccion;
          }
        }
      }
    }
  };

  const getMaterias = () => {
    for (const [key, value] of Object.entries(store.materias)) {
      if (value.tipo_materia !== "Complementaria") {
        materias.push(value.nombre);
        continue;
      }
      console.log(key);
    }
  };

  const verifySeccion = (seccion) => {
    for (const [key, value] of Object.entries(store.secciones)) {
      console.log(key);
      if (value.nombre === seccion) {
        return verifyTeacher(value.docente_asignado);
      }
    }
    return "False";
  };

  const verifyTeacher = (nombre) => {
    for (const [key, value] of Object.entries(store.usuarios)) {
      if (value.nombre === nombre) {
        for (const [ke, val] of Object.entries(value.horario)) {
          console.log(ke);
          if (val.celda === leccion && val.seccion !== "") {
            return "True";
          }
        }
        return key;
      }
    }
  };

  const handleClick = (event) => {
    getMaterias();
    idValue = event.currentTarget.id;
    let materiaDocente = document.getElementById(idValue).innerText;
    if (
      materias.indexOf(materiaDocente) !== -1 ||
      materiaDocente === "" ||
      !isAdmin
    ) {
      setLeccion(idValue);
      setFlag(true);
    } else {
      if (location.state.type !== "Docente Complementario") {
        Swal.fire(
          "No se pueden editar las materias complementarias por un docente"
        );
      } else {
        Swal.fire("El docente complementario no puede editar su horario");
      }
    }
  };

  const setearHorario = (valorSeccion) => {
    let teacherAsignar = verifySeccion(valorSeccion);
    if (!isAdmin) {
      if (teacherAsignar === "True") {
        Swal.fire("La sección indicada ya se le asigno materia en ese horario");

        document.getElementById(leccion).textContent = valorSeccion;
      } else if (teacherAsignar === "False") {
        Swal.fire("La sección indicada aún no a sido registrada");
      } else {
        actions.addHorario(
          typeTeacher,
          location.state.id,
          valorSeccion,
          location.state.materia,
          leccion,
          teacherAsignar
        );
      }
    } else {
      actions.addHorario(
        typeTeacher,
        location.state.id,
        valorSeccion,
        location.state.materia,
        leccion
        //verifySeccion(valorSeccion)
      );
      document.getElementById(leccion).textContent = valorSeccion;
    }
  };

  useEffect(() => {
    if (isWrite) {
      mostrarValores();
      isWrite = false;
    }
  });

  const handleDownloadPdf = async () => {
    const element = pdfRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Horario.pdf");
  };
  console.log(location.state.type);
  return (
    <div className="principalHorario">
      <div className="nombrehorario ps-2 p-2 d-flex">
        <button className="go-back-arrow" onClick={() => navigate(-1)}>
          <i className="material-icons me-3">arrow_back</i>
        </button>
        {/* <h5>{location.state.name}</h5> */}
        <h5 className="m-auto">
          {location.state.type.toLowerCase() === "docente complementario"
            ? location.state.type
            : null}
        </h5>
      </div>
      <div className="head-wrapper">
        <div className="row">
          <div className="col col-md-4 mb-3 mt-3">
            <h5 className="m-0 ms-md-2 head-text text-start">
              {location.state.name}
            </h5>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <h5 className="m-auto head-text text-start">
              {location.state.materia}
            </h5>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <Button
              text="Descargar Horario PDF"
              handleButton={handleDownloadPdf}
            />
            <div className="btn-wrapper d-flex justify-content-end me-3"></div>
          </div>
        </div>
      </div>
      {/* <div className="btn-wrapper d-flex justify-content-end me-3">
        <Button text="Descargar Horario PDF" handleButton={handleDownloadPdf} />
      </div> */}
      <div ref={pdfRef} className="horario-wrapper">
        <div className="tituloHorario">Horario por la mañana</div>
        <div className="filas">
          <div className="dias principal">Hora</div>
          <div className="dias principal">Lunes</div>
          <div className="dias principal">Martes</div>
          <div className="dias principal">Miercoles</div>
          <div className="dias principal">Jueves</div>
          <div className="dias principal">Viernes</div>
        </div>
        <div className="filas">
          <div className="principal">7:00 - 7:40</div>
          <div id="l1m" className="secundaria" onClick={handleClick}></div>
          <div id="k1m" className="secundaria" onClick={handleClick}></div>
          <div id="m1m" className="secundaria" onClick={handleClick}></div>
          <div id="j1m" className="secundaria" onClick={handleClick}></div>
          <div id="v1m" className="secundaria" onClick={handleClick}></div>
        </div>
        <div className="filas">
          <div className="principal">7:40 - 8:20</div>
          <div id="l2m" className="secundaria" onClick={handleClick}></div>
          <div id="k2m" className="secundaria" onClick={handleClick}></div>
          <div id="m2m" className="secundaria" onClick={handleClick}></div>
          <div id="j2m" className="secundaria" onClick={handleClick}></div>
          <div id="v2m" className="secundaria" onClick={handleClick}></div>
        </div>
        <div className="filas">
          <div className="principal">8:20 - 8:25</div>
          <div className="receso"></div>
          <div className="receso"></div>
          <div className="receso">Receso</div>
          <div className="receso"></div>
          <div className="rfinal"></div>
        </div>
        <div className="filas">
          <div className="principal">8:25 - 9:05</div>
          <div id="l3m" className="secundaria" onClick={handleClick}></div>
          <div id="k3m" className="secundaria" onClick={handleClick}></div>
          <div id="m3m" className="secundaria" onClick={handleClick}></div>
          <div id="j3m" className="secundaria" onClick={handleClick}></div>
          <div id="v3m" className="secundaria" onClick={handleClick}></div>
        </div>
        <div className="filas">
          <div className="principal">9:05 - 9:45</div>
          <div id="l4m" className="secundaria" onClick={handleClick}></div>
          <div id="k4m" className="secundaria" onClick={handleClick}></div>
          <div id="m4m" className="secundaria" onClick={handleClick}></div>
          <div id="j4m" className="secundaria" onClick={handleClick}></div>
          <div id="v4m" className="secundaria" onClick={handleClick}></div>
        </div>
        <div className="filas">
          <div className="principal">9:45 - 10:05</div>
          <div className="receso"></div>
          <div className="receso"></div>
          <div className="receso">Receso</div>
          <div className="receso"></div>
          <div className="rfinal"></div>
        </div>
        <div className="filas">
          <div className="principal">10:05 - 10:45</div>
          <div id="l5m" className="secundaria" onClick={handleClick}></div>
          <div id="k5m" className="secundaria" onClick={handleClick}></div>
          <div id="m5m" className="secundaria" onClick={handleClick}></div>
          <div id="j5m" className="secundaria" onClick={handleClick}></div>
          <div id="v5m" className="secundaria" onClick={handleClick}></div>
        </div>
        <div className="filas">
          <div className="principal">10:45 - 11:25</div>
          <div id="l6m" className="secundaria" onClick={handleClick}></div>
          <div id="k6m" className="secundaria" onClick={handleClick}></div>
          <div id="m6m" className="secundaria" onClick={handleClick}></div>
          <div id="j6m" className="secundaria" onClick={handleClick}></div>
          <div id="v6m" className="secundaria" onClick={handleClick}></div>
        </div>
        <div className="filas">
          <div className="principal">11:25 - 11:30</div>
          <div className="receso"></div>
          <div className="receso"></div>
          <div className="receso">Receso</div>
          <div className="receso"></div>
          <div className="rfinal"></div>
        </div>
        <div className="filas">
          <div className="principal">11:30 - 12:10</div>
          <div id="l7m" className="secundaria" onClick={handleClick}></div>
          <div id="k7m" className="secundaria" onClick={handleClick}></div>
          <div id="m7m" className="secundaria" onClick={handleClick}></div>
          <div id="j7m" className="secundaria" onClick={handleClick}></div>
          <div id="v7m" className="secundaria" onClick={handleClick}></div>
        </div>
        {typeTeacher !== "Docente" ? (
          <div>
            <div className="tituloHorario">Horario por la Tarde</div>

            <div className="filas">
              <div className="dias principal">Hora</div>
              <div className="dias principal">Lunes</div>
              <div className="dias principal">Martes</div>
              <div className="dias principal">Miercoles</div>
              <div className="dias principal">Jueves</div>
              <div className="dias principal">Viernes</div>
            </div>

            <div className="filas">
              <div className="principal">7:00 - 7:40</div>
              <div id="l1t" className="secundaria" onClick={handleClick}></div>
              <div id="k1t" className="secundaria" onClick={handleClick}></div>
              <div id="m1t" className="secundaria" onClick={handleClick}></div>
              <div id="j1t" className="secundaria" onClick={handleClick}></div>
              <div id="v1t" className="secundaria" onClick={handleClick}></div>
            </div>

            <div className="filas">
              <div className="principal">7:40 - 8:20</div>
              <div id="l2t" className="secundaria" onClick={handleClick}></div>
              <div id="k2t" className="secundaria" onClick={handleClick}></div>
              <div id="m2t" className="secundaria" onClick={handleClick}></div>
              <div id="j2t" className="secundaria" onClick={handleClick}></div>
              <div id="v2t" className="secundaria" onClick={handleClick}></div>
            </div>

            <div className="filas">
              <div className="principal">8:20 - 8:25</div>
              <div className="receso"></div>
              <div className="receso"></div>
              <div className="receso">Receso</div>
              <div className="receso"></div>
              <div className="rfinal"></div>
            </div>

            <div className="filas">
              <div className="principal">8:25 - 9:05</div>
              <div id="l3t" className="secundaria" onClick={handleClick}></div>
              <div id="k3t" className="secundaria" onClick={handleClick}></div>
              <div id="m3t" className="secundaria" onClick={handleClick}></div>
              <div id="j3t" className="secundaria" onClick={handleClick}></div>
              <div id="v3t" className="secundaria" onClick={handleClick}></div>
            </div>

            <div className="filas">
              <div className="principal">9:05 - 9:45</div>
              <div id="l4t" className="secundaria" onClick={handleClick}></div>
              <div id="k4t" className="secundaria" onClick={handleClick}></div>
              <div id="m4t" className="secundaria" onClick={handleClick}></div>
              <div id="j4t" className="secundaria" onClick={handleClick}></div>
              <div id="v4t" className="secundaria" onClick={handleClick}></div>
            </div>

            <div className="filas">
              <div className="principal">9:45 - 10:05</div>
              <div className="receso"></div>
              <div className="receso"></div>
              <div className="receso">Receso</div>
              <div className="receso"></div>
              <div className="rfinal"></div>
            </div>

            <div className="filas">
              <div className="principal">10:05 - 10:45</div>
              <div id="l5t" className="secundaria" onClick={handleClick}></div>
              <div id="k5t" className="secundaria" onClick={handleClick}></div>
              <div id="m5t" className="secundaria" onClick={handleClick}></div>
              <div id="j5t" className="secundaria" onClick={handleClick}></div>
              <div id="v5t" className="secundaria" onClick={handleClick}></div>
            </div>

            <div className="filas">
              <div className="principal">10:45 - 11:25</div>
              <div id="l6t" className="secundaria" onClick={handleClick}></div>
              <div id="k6t" className="secundaria" onClick={handleClick}></div>
              <div id="m6t" className="secundaria" onClick={handleClick}></div>
              <div id="j6t" className="secundaria" onClick={handleClick}></div>
              <div id="v6t" className="secundaria" onClick={handleClick}></div>
            </div>

            <div className="filas">
              <div className="principal">11:25 - 11:30</div>
              <div className="receso"></div>
              <div className="receso"></div>
              <div className="receso">Receso</div>
              <div className="receso"></div>
              <div className="rfinal"></div>
            </div>

            <div className="filas">
              <div className="principal">11:30 - 12:10</div>
              <div id="l7t" className="secundaria" onClick={handleClick}></div>
              <div id="k7t" className="secundaria" onClick={handleClick}></div>
              <div id="m7t" className="secundaria" onClick={handleClick}></div>
              <div id="j7t" className="secundaria" onClick={handleClick}></div>
              <div id="v7t" className="secundaria" onClick={handleClick}></div>
            </div>
          </div>
        ) : null}
        {flag ? (
          <Configuracionseccion
            setFlag={setFlag}
            setSeccionP={setSeccionP}
            setearHorario={setearHorario}
            seccion={seccion}
            isAdmin={isAdmin}
            teacher={typeTeacher}
          />
        ) : null}
      </div>
    </div>
  );
};

export default HorarioEspecial;
