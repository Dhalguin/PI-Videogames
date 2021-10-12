import React from "react";
import styles from "../../assets/styles/details_card.module.css";

function DetailsGame(props) {
  const { id, name, background_image, description } = props;
  const { genres, released, rating, platforms } = props;
  var platf = [];

  console.log(platforms);

  if (platforms) {
    if (Array.isArray(platforms)) {
      platf = platforms.map((platforms) => platforms.platform.name).join(" - ");
    } else {
      platf = platforms.split(",").join(" - ");
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h2 className={`${styles.title} text-gray`}>{name}</h2>
      </div>
      <div>
        <img src={background_image} alt={`#${name}_${id}`} />
      </div>
      <div>
        <p className={`${styles.description} text-gray`}>{description}</p>
        <p className="text-gray">
          <b>Released:</b> {released}
        </p>
        <p className="text-gray">
          <b>Rating:</b> {rating}
        </p>
        <p className="text-gray">
          <b>Genres:</b>{" "}
          {genres && genres.map((genre) => genre.name).join(" - ")}
        </p>
        <p className="text-gray">
          <b>Platforms:</b> {platf}
        </p>
      </div>
    </div>
  );
}

export default DetailsGame;
