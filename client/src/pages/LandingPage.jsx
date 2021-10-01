import React from "react";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();

  return (
    <div>
      <h1>PÁGINA DE INICIO</h1>
      <button onClick={() => history.push("/videogames")}>IR</button>
    </div>
  );
}

export default LandingPage;
