import React from "react";
import { createContext, useState, useEffect } from "react";
import { documentos } from "../Jsons/Documentos.json";
import fs from "fs"

export const DocContext = createContext();

export function DocContextProvider(props) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    setDocs(documentos);
  }, []);

  function crearDoc() {
    let nombre = document.getElementById("nombreD").value;
    let pdf = document.getElementById("pdf").value;
    let val = document.getElementsByName("documento");
    let tipo;
    for (const va of val) {
      if (va.checked) {
        tipo = va.value;
      }
    }
    setDocs([
      ...docs,
      {
        id: docs.length,
        nombre,
        pdf,
        tipo
      }
    ]);
    const newJson = JSON.stringify(docs);
    fs.writeFileSync("./Jsons/Documentos.json", newJson);
  }

  function mostrarDoc(id) {
    var doc = document.getElementById(id);
    if (doc.style.display === "block") {
      doc.style.display = "none";
    } else {
      doc.style.display = "block";
    }
  }
  function eliminarDoc(e){
    let id = e.target.value;
    console.log(id);
    setDocs(docs.filter(dato => dato.id !== id));
    const newJson = JSON.stringify(docs);
    fs.writeFileSync("./Jsons/Documento.json", newJson);
  }

  return (
    <DocContext.Provider
      value={{
        docs,
        crearDoc,
        mostrarDoc,
        eliminarDoc,
      }}
    >
      {props.children}
    </DocContext.Provider>
  );
}
