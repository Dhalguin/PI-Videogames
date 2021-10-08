import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../assets/styles/lading.module.css";

function LandingPage() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <h1>Welcome to the Videogames List</h1>
      <button onClick={() => history.push("/videogames")}>START</button>
    </div>
  );
}

export default LandingPage;
