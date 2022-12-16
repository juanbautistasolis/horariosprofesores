import "./App.css";
// import HorarioEspecial from './components/HorarioEspecial';
import "./App.css";
// import Vistaprincipal from "./components/Vistaprincipal";
import HorarioEspecial from "./components/HorarioEspecial";
import React from "react";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Secciones from "./pages/Secciones";
// import MainView from "./components/MainView";
import Usuarios from "./pages/Usuarios";
import Materias from "./pages/Materias";
import Eventos from "./pages/Eventos";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <Login />
            </div>
          }
        />
        {/* <Route exact path="/inicio" element={<Vistaprincipal />} /> */}
        <Route
          exact
          path="/inicio"
          element={
            <ProtectedRoute>
              {/* <Vistaprincipal /> */}
              {/* <MainView /> */}
              <Inicio />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/inicio/secciones"
          element={
            <ProtectedRoute>
              <Secciones />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/inicio/usuarios"
          element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/inicio/materias"
          element={
            <ProtectedRoute>
              <Materias />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/inicio/eventos"
          element={
            <ProtectedRoute>
              <Eventos />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/inicio/usuarios/horarioespecial"
          element={
            <ProtectedRoute>
              <HorarioEspecial />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/horarioespecial"
          element={
            <ProtectedRoute>
              <HorarioEspecial />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
