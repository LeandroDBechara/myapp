import React from "react";
import { createContext, useState, useEffect } from "react";
import { lineas as data } from "../Jsons/Lineas.json";
import fs from "fs";

export const LineasContext = createContext();

export function LineasContextProvider(props) {
  const [lineas, setLineas] = useState([]);
  const [search, setSearch] = useState("");
  const [mapa, setMapa] = useState("");

  useEffect(() => {
    setLineas(data);
  }, []);

  function searcher(e) {
    {
      setSearch(e.target.value);
      if (e.target.value) {

      }
    }
  }

  function maper(e) {
    {
      setMapa(e.target.value);
      const map = document.getElementById("mapa1");
      map.style.display = "block";
    }
  }

  function crearLinea() {
    let linea = document.getElementById("nombreL").value;

    let mapa = document.getElementById("pdf").value;

    setLineas([
      ...lineas,
      {
        id: lineas.length,
        linea,
        mapa,
      },
    ]);
    const newJson = JSON.stringify(lineas);
    fs.writeFileSync("./Jsons/Lineas.json", newJson);
  }

  function eliminarLinea(e) {
    let id = e.target.value;
    console.log(id);
    setLineas(data.filter((linea) => linea.id !== id));
    
  }

  //metodo de filtrado

  const results = !search
    ? lineas
    : lineas.filter((dato) =>
        dato.linea.toLowerCase().includes(search.toLocaleLowerCase())
      );
  return (
    <LineasContext.Provider
      value={{
        searcher,
        maper,
        results,
        mapa,
        search,
        crearLinea,
        lineas,
        eliminarLinea,
      }}
    >
      {props.children}
    </LineasContext.Provider>
  );
}
