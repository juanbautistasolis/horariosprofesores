import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import ModalForm from "./ModalForm";
import { Context } from "../store/appContext";
import "../Style/CustomTable.css";

const CustomTable = ({ columns, values, inputs, selectOptions, itemName }) => {
  const columnvalues = values ? Object.values(values) : [];
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState({});
  let navigate = useNavigate();

  const { actions } = useContext(Context);
  const ref = useRef(null);

  const handleEdit = (item) => {
    setEdit(item);
    setOpenModal((prev) => {
      return !prev;
    });
  };
  const handleDelete = (item) => {
    actions.deleteItem({ item, itemName });
  };

  const handleClick = (event) => {
    if (itemName == "usuarios") {
      navigate("/inicio/usuarios/horarioespecial", {
        state: {
          type: event.tipo_usuario,
          name: event.nombre,
          profesor: false,
          id: event.id,
          materia: event.materia, //Aca debería de ir newItem.materia
        },
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setEdit({
      ...edit,
      [name]: checked ? checked : value,
    });
  };

  const handleSave = () => {
    if (itemName === "secciones") {
      actions.updateSecciones({ edit, itemName });
    }
    if (itemName === "usuarios") {
      console.log("Entro a usuarios");
      actions.updateUsuarios({ edit, itemName });
    }
    if (itemName === "materias") {
      actions.updateMaterias({ edit, itemName });
    }
    if (itemName === "eventos") {
      actions.updateEventos({ edit, itemName });
    }
  };

  return (
    <div className="col-12" ref={ref}>
      <Modal
        container={ref.current}
        open={openModal}
        onclose={setOpenModal}
        closeIcon={null}
        center
      >
        <ModalForm
          handleChange={handleChange}
          item={edit}
          onSave={setOpenModal}
          inputs={inputs}
          selectOptions={selectOptions}
          handleSave={handleSave}
          selected={edit.docente_asignado}
          title={`Editar ${itemName}`}
        />
      </Modal>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((col, index) => {
                return (
                  <th className="column-text" key={index}>
                    {col}
                  </th>
                );
              })}
          </tr>
        </thead>

        <tbody>
          {columnvalues &&
            columnvalues.map((val) => {
              return (
                <tr className="thingsRow" key={val.id}>
                  {/* <div id="principalRow" onClick={() => handleClick(val)}> */}
                  <td className="row-text">{val.nombre}</td>
                  {val.descripcion ? (
                    <td className="row-text">{val.descripcion}</td>
                  ) : null}
                  {val.tipo_usuario ? (
                    <td className="row-text">{val.tipo_usuario}</td>
                  ) : null}
                  {val.docente_asignado ? (
                    <td className="row-text">{val.docente_asignado}</td>
                  ) : null}
                  {val.fecha ? <td className="row-text">{val.fecha}</td> : null}
                  {val.correo ? (
                    <td className="row-text">{val.correo}</td>
                  ) : null}
                  {val.tipo_materia ? (
                    <td className="row-text">{val.tipo_materia}</td>
                  ) : null}

                  {val.tipo_usuario ? <td className="">
                    <button
                      className="ver-horario-btn btn"
                      onClick={() => handleClick(val)}
                      disabled={
                        val.tipo_usuario?.toLowerCase() === "administrador"
                      }
                    >
                      Ver horario
                    </button>
                  </td> : null}
                  <td className="actions-buttons ver">
                    <button
                      className="edit-btn btn"
                      onClick={() => handleEdit(val)}
                    >
                      <i className="small material-icons center">
                        edit_outlined
                      </i>
                    </button>
                  </td>
                  <td className="actions-buttons">
                    <button
                      className="delete-btn btn"
                      onClick={() => handleDelete(val)}
                    >
                      <i className="small material-icons center">delete</i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
