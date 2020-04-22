import React, { useState, useEffect } from "react";
//import routes from "../routes";
import moment from "moment";

export default function About() {
  const [dataAtual, setDataAtual] = useState(null);

  useEffect(() => {  //  Uma funçao useEffect, será disparada quando o componente terminar de carregar.
    const timer = setTimeout(() => {
      const date = moment(new Date());
      setDataAtual(date);
    }, 1000);
    return () => clearTimeout(timer);
  });

  const payload = {
    // EXemplo de objeto
    local: "Araranguá",
    data: "2020-03-22",
    usuario: "4303"
  };

  const dataDoObjeto = () => {
    return moment(payload.data).format("DD-MM-YYYY");
  };

  return (
    <div className="container">
      <h2>Sobre</h2>
      <p>Aqui será a página `Sobre`</p>
      {dataAtual && ( // Isso equivale a: se a variavel dataAtual nao for null, então renderize:
        <div>
          <h4>Agora são {dataAtual.format("HH:mm:ss")} em Araranguá</h4>
          <h4>Hoje é dia {dataAtual.format("DD-MM-YYYY")}</h4>
        </div>
      )}

      {/*<button onClick={() => routes.adicionarColeta(payload)}>
        Enviar coleta
  </button>*/}
    </div>
  );
}
