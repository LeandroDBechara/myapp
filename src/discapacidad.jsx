import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TopBar from "./components/TopBar";
import ButtonBar from "./components/ButtomBar";
import { MultasContextProvider } from "./context/MultasContext";
import "./Styles/discapacidad.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MultasContextProvider>
      <TopBar />
      <div className="requisitos">
        <h4>Para la solicitud de pase de discapacidad se debe presentar:</h4>
        <ul>
          <li>Certificado de deiscapacidad original</li>
          <li>Fotocopia del certificado de discapacidad a COLOR</li>
          <li>Fotocopia del dni del titular(actualizado)</li>
          <li>
            Foto carnet del titular impreso en papel fotografico (tamaño 4x4)
          </li>
        </ul>
        <p>
          Para la renovacion del pase se debe presentar el pase vencido ademas
          de la documentacion antes mencinada.
        </p>
        
        <p className="acla">
          En caso de denuncia por extravio o robo del pase de discapacidad se
          deve presentar, junto con la documentacion requeridad, constacia
          policial sea o no de la jurisdiccion donde se domicilia.
        </p>
        <h4>Para retirar el pase se solicitara:</h4>
        <ul>
          <li>DNI del titular</li>
          <li>Comprobante del pase en tramite</li>
        </ul>
        <p className="acla">
          En caso de no tener el comprabante debera aguardar al horario de
          cierre de la oficina.
        </p>
      </div>
      <div className="hya">
      <div>
        <div>
          <h4>Horarios de atencion</h4>
          <p>Para recepcion de documentacion:</p>
          <p>Lunes, miercoles y viernes</p>
          <p>8:30hs a 11:30hs</p>
        </div>
        <div>
          <p>Entrega de pases</p>
          <p>Martes y jueves</p>
          <p>8:30hs a 12:00hs</p>
          <p className="acla">*Atencion por orden de llegada</p>
        </div>
      </div>
      <div className="aclaracion">
        <h4>Aclaraciones</h4>
        <p>
          La fotocopia del pase de discapasidad otorgado noe es valido para su
          uso. el sello rojo que indica el permiso de acompañante si/no es
          definido por el certificado de discapasidad emitido por la junta de
          discapacidad el pase de discapasidad emitido por AETA no se puede
          renovar en la direccion general de transporte y a que no fue emitido
          por esta oficina.
        </p>
        <p>La renovacion del pase por denuncia de extravio o
          robo puede realizarce una unica vez.</p>
      </div>
      </div>
      <ButtonBar />
    </MultasContextProvider>
  </React.StrictMode>
);
