import React, { useState, useContext } from "react";
//import Swal from "sweetalert2";
//import { ref, remove, update } from "firebase/database";
//import { db } from "../config/firebase-config";
// import "../Style/Table.css";
//import EditarModal from "./EditarModal";
import { Modal } from "react-responsive-modal";
import Input from "./Input";
import { Context } from "../store/appContext";
//import { memo } from "react";

const Table = ({ columns, values, inputs, itemName }) => {
  const { store, actions } = useContext(Context);
  const [openModal, setOpenModal] = useState(false);
  const columnvalues = values ? Object.values(values) : [];
  const [item, setItem] = useState({});
  console.log(store, item)
  const handleDelete = (item) => {
    actions.deleteItem({ item, itemName });
  };

  let itemToEdit = {};
  const handleEdit = (item) => {
    console.log(item);
    setItem(item);
    itemToEdit = item;

    setOpenModal((prev) => {
      return !prev;
    });
  };

  const onCloseModal = () => setOpenModal(false);

  const EditarModal = ({ editFor, item }) => {
    const [seccion, setSeccion] = useState({});

    const handleChange = (e) => {
      const { name, value, checked } = e.target;
      print(checked)
      setSeccion()
      setItem({
        ...seccion,
        [name]: value,
      });
    };
    const saveItem = () => {
      console.log("saved! ", item);
      setOpenModal((prev) => {
        return !prev;
      });
    };

    if (editFor === "secciones") {
      return (
        <Modal
          classNames={"test"}
          open={openModal}
          onClose={onCloseModal}
          center
        >
          <h2>Simple centered modal</h2>
          <div className="form-input d-flex align-items-center">
            <label className="form-label pe-3" htmlFor={`input-nombre`}>
              Nombre:
            </label>
            <Input
              id={`input-nombre`}
              className="form-control ps-3"
              type="text"
              name={"nombre"}
              onChange={handleChange}
              value={seccion.nombre}
            />
          </div>
          <button onClick={() => saveItem()}>Guardar</button>
        </Modal>
      );
    }

    const handleInput = (e) => {
      const { name, value, checked } = e.target;
      print(checked)
      
      itemToEdit = { ...itemToEdit, [name]: value };

      setItem({
        ...itemToEdit,
        [name]: value,
      });
    };

    return (
      <>
        <Modal
          classNames={"test"}
          open={openModal}
          onClose={onCloseModal}
          center
        >
          <h2>Simple centered modal</h2>
          {inputs.map((input, index) => {
            console.log("input to edit", itemToEdit.name);
            return (
              <Input
                key={index}
                type={input.type}
                label={input.label}
                name="nombre"
                // name={input.name}
                handleChange={handleInput}
                value={item.nombre}
                // value={columnvalues[index]?.nombre}
              />
            );
          })}
          <button onClick={() => saveItem()}>Guardar</button>
        </Modal>
      </>
    );
  };

  return (
    <div className="col-12">
      {/* <EditarModal editFor="secciones" openModal={openModal} /> */}
      <EditarModal editFor="secciones" openModal={openModal} />
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((col, index) => {
                return <th key={index}>{col}</th>;
              })}
          </tr>
        </thead>

        <tbody>
          {columnvalues &&
            columnvalues.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.nombre}</td>
                  {val.descripcion ? <td>{val.descripcion}</td> : null}
                  <td className="actions-buttons">
                    <button
                      className="edit-btn btn"
                      // onClick={setOpenModal}
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

export default Table;
