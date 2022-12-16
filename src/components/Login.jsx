import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "../Style/Login.css";

const Loggin = () => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authentication = getAuth();
  let navigate = useNavigate();
  let nombre = "";
  let valor = "";

  const verifyUser = (email) => {
    for (const [key, value] of Object.entries(store.usuarios)) {
      if (value.correo === email) {
        valor = key
        nombre = value.nombre;
        return value.tipo_usuario;
      }
    }
    return "default";
  };

  useEffect(() => {
    nombre = sessionStorage.getItem("Username")
  }, [])
  


  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        let user = verifyUser(response.user.email);
        sessionStorage.setItem("Username", nombre);
        user === "Administrador" ||  user === "default"
          ? navigate("/inicio", { state: { type: user, name: nombre } })
          : navigate("/horarioespecial", {
              state: { type: user, name: nombre, profesor: true, id: valor},
            });
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        sessionStorage.setItem("User Logged", response.user.email);
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/user-not-found") {
          toast.error("Usuario desconocido");
        }
        if (error.code === "auth/invalid-email" || error.code === "auth/wrong-password") {
          toast.error("Usuario o contraseña incorrectos");
        }
        if (error.code === "auth/too-many-requests") {
          toast.error("Demasiados intentos, intente más tarde");
        }
      });
  };

  return (
    <div className="container-fluid loggin-wrapper vh-100 d-flex justify-content-center align-items-center">
      {/*verifyUser()*/}
      <ToastContainer />
      <div className="wraper">
        <div className="row g-0 h-100">
          <div className="col col-md-6 d-flex justify-content-center align-items-center">
            <img className="logoLoggin"
              src="https://firebasestorage.googleapis.com/v0/b/horaclass-ejbs.appspot.com/o/Escuela%20Juan%20Buaitsta.jpg?alt=media&token=1695e3a8-4118-4ff5-b238-0146a19a8e92"
              alt="logoHoraClass"
            />
          </div>
          <div className="col col-md-6 d-flex align-items-center justify-content-center">
            <Form
              title={"HoraClass"}
              setEmail={setEmail}
              setPassword={setPassword}
              handleLogin={(e) => handleLogin(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loggin;
