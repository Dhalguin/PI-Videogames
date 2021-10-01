import React from "react";
import { Link } from "react-router-dom";

function Card({ id, name, img, genres }) {
  let genresName = [];

  genres &&
    genres.forEach((genre) => {
      genresName.push(genre.name);
    });

  return (
    <div>
      <img src={img} alt={name} style={{ width: "300px" }} />
      <p>
        <Link to={`videogames/${id}`}>{name}</Link>
      </p>
      <span>{genresName.join(",")}</span>
    </div>
  );
}

export default Card;
