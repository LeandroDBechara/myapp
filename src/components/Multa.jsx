import React, { useContext } from "react";
import { MultasContext } from "../context/MultasContext";

function Multa() {
  const { multas, consultar } = useContext(MultasContext);
  
  return (
    <div className="container">
      <div className="formulario">
        <h1>Ingresa tus datos personales</h1>
        <input
          className="ingre"
          id="dni"
          type="text"
          placeholder="DNI / CUIL"
        />
        <input
          className="ingre"
          id="dominio"
          type="text"
          placeholder="Dominio del vehiculo"
        />
        <button className="boton" onClick={consultar}>
          Consultar Infracciones
        </button>
      </div>
      <div className="tabla">
        <h1>Multas encontradas</h1>
        <table className="tabla2">
          <thead>
            <tr>
              <th>Exp.</th>
              <th>Titular</th>
              <th>Resolucion</th>
              <th>Dominio</th>
              <th>Tipo vehiculo</th>
            </tr>
          </thead>
          <tbody>
            {multas.map((multa) => (
              <tr>
                <th>{multa.exp}</th>
                <th>{multa.titular}</th>
                <th>{multa.resolucion}</th>
                <th>{multa.dominio}</th>
                <th>{multa.tipov}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Multa;
