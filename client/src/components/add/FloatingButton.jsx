import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../assets/styles/floating.module.css";

function FloatingButton() {
  const history = useHistory();

  return (
    <div
      className={`${styles.box} center`}
      onClick={() => history.push("/videogames/create")}
    >
      <span>+</span>
    </div>
  );
}

export default FloatingButton;
