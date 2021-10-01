import React from "react";
import styles from "../../assets/styles/details_card.module.css";

function DetailsGame(props) {
  const { id, name, background_image, description } = props;
  const { genresArr, released, rating, platformsArr } = props;
  var genres = [];
  var platforms = [];

  if (genresArr) {
    genresArr.forEach((genre) => {
      genres.push(genre.name);
    });
  }

  if (platformsArr) {
    platformsArr.forEach((element) => {
      platforms.push(element.platform.name);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.title}>{name}</p>
        <div className="d-flex">
          <div>
            <img
              src={background_image}
              alt={`${name}-${id}`}
              style={{ height: "300px", width: "300px" }}
            />
            <p>
              <b>Released:</b> {released}
            </p>
            <p>
              <b>Rating:</b> {rating}
            </p>
          </div>
          <div className={styles.body}>
            {description}
            {/* <p>{genres.join(", ")}</p>
            <p>{platforms.join(", ")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsGame;
