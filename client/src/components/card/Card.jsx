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
      <img src={img} alt={name} />
      <div className={styles.body}>
        <p>
          <Link to={`videogames/${id}`} className="link">
            {name}
          </Link>
        </p>
        <span>{genresName.join(", ")}</span>
      </div>
    </div>
  );
}

export default Card;
