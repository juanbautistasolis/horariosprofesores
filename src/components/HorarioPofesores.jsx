import React, { useState } from "react";
import "../Style/horarioadministrador.css";

const HorarioPofesores = () => {
    const [leccion, setLeccion] = useState("");
    let idValue = "";
    let profesor = false;
    let tipoObservador = false;
    const handleClick = (event) => {
      idValue = event.currentTarget.id;
      console.log("Imprimo el valor segundo: ", idValue);
    };
  
    return (
      <div className="principalHorario">
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
          <div id="l1" className="secundaria" onClick={handleClick}></div>
          <div id="k1" className="secundaria" onClick={handleClick}></div>
          <div id="m1" className="secundaria" onClick={handleClick}></div>
          <div id="j1" className="secundaria" onClick={handleClick}></div>
          <div id="v1" className="secundaria" onClick={handleClick}></div>
        </div>
  
        <div className="filas">
          <div className="principal">7:40 - 8:20</div>
          <div id="l2" className="secundaria" onClick={handleClick}></div>
          <div id="k2" className="secundaria" onClick={handleClick}></div>
          <div id="m2" className="secundaria" onClick={handleClick}></div>
          <div id="j2" className="secundaria" onClick={handleClick}></div>
          <div id="v2" className="secundaria" onClick={handleClick}></div>
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
          <div id="l3" className="secundaria" onClick={handleClick}></div>
          <div id="k3" className="secundaria" onClick={handleClick}></div>
          <div id="m3" className="secundaria" onClick={handleClick}></div>
          <div id="j3" className="secundaria" onClick={handleClick}></div>
          <div id="v3" className="secundaria" onClick={handleClick}></div>
        </div>
  
        <div className="filas">
          <div className="principal">9:05 - 9:45</div>
          <div id="l4" className="secundaria" onClick={handleClick}></div>
          <div id="k4" className="secundaria" onClick={handleClick}></div>
          <div id="m4" className="secundaria" onClick={handleClick}></div>
          <div id="j4" className="secundaria" onClick={handleClick}></div>
          <div id="v4" className="secundaria" onClick={handleClick}></div>
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
          <div id="l5" className="secundaria" onClick={handleClick}></div>
          <div id="k5" className="secundaria" onClick={handleClick}></div>
          <div id="m5" className="secundaria" onClick={handleClick}></div>
          <div id="j5" className="secundaria" onClick={handleClick}></div>
          <div id="v5" className="secundaria" onClick={handleClick}></div>
        </div>
  
        <div className="filas">
          <div className="principal">10:45 - 11:25</div>
          <div id="l6" className="secundaria" onClick={handleClick}></div>
          <div id="k6" className="secundaria" onClick={handleClick}></div>
          <div id="m6" className="secundaria" onClick={handleClick}></div>
          <div id="j6" className="secundaria" onClick={handleClick}></div>
          <div id="v6" className="secundaria" onClick={handleClick}></div>
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
          <div id="l7" className="secundaria" onClick={handleClick}></div>
          <div id="k7" className="secundaria" onClick={handleClick}></div>
          <div id="m7" className="secundaria" onClick={handleClick}></div>
          <div id="j7" className="secundaria" onClick={handleClick}></div>
          <div id="v7" className="secundaria" onClick={handleClick}></div>
        </div>
  
        {profesor ? (
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
              <div id="l1" className="secundaria" onClick={handleClick}></div>
              <div id="k1" className="secundaria" onClick={handleClick}></div>
              <div id="m1" className="secundaria" onClick={handleClick}></div>
              <div id="j1" className="secundaria" onClick={handleClick}></div>
              <div id="v1" className="secundaria" onClick={handleClick}></div>
            </div>
  
            <div className="filas">
              <div className="principal">7:40 - 8:20</div>
              <div id="l2" className="secundaria" onClick={handleClick}></div>
              <div id="k2" className="secundaria" onClick={handleClick}></div>
              <div id="m2" className="secundaria" onClick={handleClick}></div>
              <div id="j2" className="secundaria" onClick={handleClick}></div>
              <div id="v2" className="secundaria" onClick={handleClick}></div>
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
              <div id="l3" className="secundaria" onClick={handleClick}></div>
              <div id="k3" className="secundaria" onClick={handleClick}></div>
              <div id="m3" className="secundaria" onClick={handleClick}></div>
              <div id="j3" className="secundaria" onClick={handleClick}></div>
              <div id="v3" className="secundaria" onClick={handleClick}></div>
            </div>
  
            <div className="filas">
              <div className="principal">9:05 - 9:45</div>
              <div id="l4" className="secundaria" onClick={handleClick}></div>
              <div id="k4" className="secundaria" onClick={handleClick}></div>
              <div id="m4" className="secundaria" onClick={handleClick}></div>
              <div id="j4" className="secundaria" onClick={handleClick}></div>
              <div id="v4" className="secundaria" onClick={handleClick}></div>
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
              <div id="l5" className="secundaria" onClick={handleClick}></div>
              <div id="k5" className="secundaria" onClick={handleClick}></div>
              <div id="m5" className="secundaria" onClick={handleClick}></div>
              <div id="j5" className="secundaria" onClick={handleClick}></div>
              <div id="v5" className="secundaria" onClick={handleClick}></div>
            </div>
  
            <div className="filas">
              <div className="principal">10:45 - 11:25</div>
              <div id="l6" className="secundaria" onClick={handleClick}></div>
              <div id="k6" className="secundaria" onClick={handleClick}></div>
              <div id="m6" className="secundaria" onClick={handleClick}></div>
              <div id="j6" className="secundaria" onClick={handleClick}></div>
              <div id="v6" className="secundaria" onClick={handleClick}></div>
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
              <div id="l7" className="secundaria" onClick={handleClick}></div>
              <div id="k7" className="secundaria" onClick={handleClick}></div>
              <div id="m7" className="secundaria" onClick={handleClick}></div>
              <div id="j7" className="secundaria" onClick={handleClick}></div>
              <div id="v7" className="secundaria" onClick={handleClick}></div>
            </div>
          </div>
        ) : null}
      </div>
    );
}

export default HorarioPofesores