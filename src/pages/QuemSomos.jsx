import React, { useState } from "react";
import styled from "styled-components";

const SessaoGaleria = styled.div`
  padding: 1em;
  margin-top: 2em;
  width: 100%;
  background-color: grey;
  font-size: 22px;
  :hover {
    color: white;
  }
`;

export default function QuemSomos() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="container">
      <h2>Quem Somos</h2>
      <p>
      A Selectum é uma startup com foco na reciclagem e logística reversa de resíduos sólidos, tanto do comércio quanto dos condomínios. O foco na educação ambiental é um dos nossos pilares revendo os conceitos de somente produzir mas também reaproveitar, ajudamos dessa forma o meio ambiente e também o social com a relação direta com os coletores das cidades. {" "}
      </p>
      <button
        className="btn btn-success"
        onClick={() => setIsLogged(!isLogged)}
      >
        Loga{isLogged ? "do" : "r"}
      </button>
      <SessaoGaleria>Fotos</SessaoGaleria>
    </div>
  );
}
