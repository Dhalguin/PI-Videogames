import React from "react";
import styles from "../../assets/styles/paginator.module.css";

function Pagination({
  current,
  next,
  previous,
  handlePrev,
  handleNext,
  firstPage,
  lastPage,
}) {
  return (
    <div className={styles.container}>
      {previous && <button onClick={() => firstPage()}>First</button>}
      {previous && <button onClick={() => handlePrev()}>{`<`}</button>}
      {current && <span>{current}</span>}
      {next && <button onClick={() => handleNext()}>{`>`}</button>}
      {next && <button onClick={() => lastPage()}>Last</button>}
    </div>
  );
}

export default Pagination;
