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

  if (Array.isArray(platformsArr)) {
    if (platformsArr) {
      platformsArr.forEach((element) => {
        platforms.push(element.platform.name);
      });
    }
  } else {
    platforms = platformsArr;
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
          <b>Genre:</b> {genres}
        </p>
        <p className="text-gray">
          <b>Platforms:</b> {platforms}
        </p>
      </div>
    </div>
  );
}

export default DetailsGame;
