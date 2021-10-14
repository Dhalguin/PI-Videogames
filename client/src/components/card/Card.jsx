import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/card.module.css";

function Card({ data }) {
  let genresName = [];

  data.genres &&
    data.genres.forEach((genre) => {
      genresName.push(genre.name);
    });

  return (
    <div className={styles.box}>
      <Link to={`videogames/${data.id}`} className="link">
        <img src={data.background_image} alt={data.name} />
        <div className={styles.body}>
          <p>{data.name}</p>
          <span>{genresName.join(", ")}</span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
