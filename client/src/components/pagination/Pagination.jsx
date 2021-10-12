import React from "react";
import styles from "../../assets/styles/paginator.module.css";

function Pagination({ current, next, previous, handlePrev, handleNext }) {
  return (
    <div className={styles.container}>
      {previous && <button onClick={() => handlePrev()}>{`<`}</button>}
      <span>{current}</span>
      {next && <button onClick={() => handleNext()}>{`>`}</button>}
    </div>
  );
}

export default Pagination;
