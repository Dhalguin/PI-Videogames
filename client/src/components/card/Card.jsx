import React from "react";

function Card({ name, img, genres }) {
  let genresName = [];

  genres.forEach((genre) => {
    genresName.push(genre.name);
  });

  return (
    <div>
      <img src={img} alt={name} style={{ width: "300px" }} />
      <p>{name}</p>
      <span>{genresName.join(",")}</span>
    </div>
  );
}

export default Card;
