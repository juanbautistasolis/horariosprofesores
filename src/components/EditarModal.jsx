import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Input from "./Input";

const EditarModal = ({ setOpenModal, openModal, inputs, item }) => {
  const [itemToEdit, setItemToEdit] = useState(item);
    // const valueOfInputs = Object.values(item);
    console.log(itemToEdit);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setItemToEdit((prev) => {
      return {
        ...prev,
        [name]: value === "on" ? checked : value,
      };
    });
  };

  const onCloseModal = () => setOpenModal(false);

  return (
    <div>
      {/* <button onClick={onOpenModal}>Open modal</button> */}
      <Modal open={openModal} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
        {inputs.map((input, index) => {
          return (
            <Input
              key={index}
              type={input.type}
              label={input.label}
              name={input.name}
              handleChange={handleChange}
            //   value={valueOfInputs[index]}
            />
          );
        })}
      </Modal>
    </div>
  );
};

export default EditarModal;
