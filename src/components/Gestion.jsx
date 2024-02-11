import React, { useContext } from "react";
import { LineasContext } from "../context/LineasContext";
import { DocContext } from "../context/DocContext";

/*
//llama a una funcion de nodejs para manejar archivos
const fs = require('fs')

//transforma una varible en string
const newJson = JSON.stringify(variable)
//modifica el archivo json por el contenido de la variable (la variable tiene que ser string)
fs.writeFileSync('archivo.json', newJson)

*/

function Gestion() {
  const { lineas, crearLinea, eliminarLinea } = useContext(LineasContext);
  const { docs, crearDoc, eliminarDoc } = useContext(DocContext);

  function log() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    if (usuario === "admin" && contraseña === "admin") {
      document.querySelector(".gestion1").style.display = "flex";
      document.querySelector(".login").style.display = "none";
    }
  }
  return (
    <>
      <div className="general">
        <div className="login">
          <img src="src/assets/Logo.svg" alt="logo" />
          <p>Usuario</p>
          <input id="usuario" type="text" placeholder="Usuario" />
          <p>Contraceña</p>
          <input id="contraseña" type="password" placeholder="Contraseña" />
          <button onClick={log}>Iniciar sesion</button>
        </div>
        <div className="gestion1">
          <div className="gestion2">
            <div className="gestion">
              <h4>Documento</h4>
              <input id="nombreD" type="text" placeholder="Nombre" required />
              <div className="radio">
                <input
                  value="normativa"
                  type="radio"
                  id="normativa"
                  name="documento"
                />
                Normativa
                <input
                  value="resolucion"
                  type="radio"
                  id="resolucion"
                  name="documento"
                />
                Resolucion
              </div>
              <input id="pdf" type="url" placeholder="URL/PDF" required />
              <button onClick={crearDoc}>Añadir documento</button>
            </div>

            <table className="tabla2">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((doc) => (
                  <tr key={doc.id}>
                    <th>{doc.nombre}</th>
                    <th>
                      <button value={doc.id} onClick={eliminarDoc}>
                        X
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="gestion2">
            <div className="gestion">
              <h4>Linea</h4>
              <input id="nombreL" type="text" placeholder="Nombre" required />
              <input id="mapa" type="url" placeholder="Mapa" required />
              <button onClick={crearLinea}>Añadir linea</button>
            </div>

            <table className="tabla2">
              <thead>
                <tr>
                  <th>Linea</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {lineas.map((lin) => (
                  <tr key={lin.id}>
                    <th>{lin.linea}</th>
                    <th>
                      <button value={lin.id} onClick={eliminarLinea}>
                        X
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gestion;
