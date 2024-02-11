import React from "react";

function TopBar() {
  return (
    <nav>
      <div>
        <a href="index.html"><img className="logo" src="src/assets/Logo.svg" alt="Logo" /></a>
        
        <p className="dgt">Dirección General de Transporte de Tucumán</p>
        <div className="line"></div>
      </div>
      <div className="menu">
        <div className="dropdown">
          <button className="dropbtn">Nosotros</button>
          <div className="dropdown-content">
            <a className="adc" href="mision.html">Mision</a>
            <a className="adc" href="normativas.html">Normativas</a>
            <a className="adc"  href="resoluciones.html">Resoluciones</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Lineas</button>
          <div className="dropdown-content">
            <a className="adc"  href="recorridos.html">Recorridos</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Tramites</button>
          <div className="dropdown-content">
            <a className="adc"  href="multas.html">Multas</a>
            <a className="adc"  href="discapacidad.html">Discapacidad</a>
            <a className="adc"  href="zafra.html">Zafra</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
