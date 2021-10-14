import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/card.module.css";

function Card({ id, name, img, genres }) {
  let genresName = [];

  genres &&
    genres.forEach((genre) => {
      genresName.push(genre.name);
    });

  return (
    <div className={styles.box}>
      <Link to={`videogames/${id}`} className="link">
        <img src={img} alt={name} />
        <div className={styles.body}>
          <p>{name}</p>
          <span>{genresName.join(", ")}</span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
