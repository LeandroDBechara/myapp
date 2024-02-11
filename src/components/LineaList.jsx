import { useContext } from "react";
import { LineasContext } from "../context/LineasContext";
import Linea from "./Linea";

function LineaList() {
  const { searcher, results, mapa, search } = useContext(LineasContext);

  return (
    <div className="buscador">
      <div className="busca">
        <img className="lupa" src="src/assets/lupa.svg" alt="" />
        <input
          className="busc"
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Buscar Línea"
        />
      </div>

      {results.map((linea) => (
        <Linea key={linea.id} linea={linea} />
      ))}
      <img id="mapa1" className="mapa" src={mapa} alt="mapa" />
    </div>
  );
}

export default LineaList;
