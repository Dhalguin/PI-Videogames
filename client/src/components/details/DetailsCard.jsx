import React from "react";

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
    <div>
      <div>
        <img
          src={background_image}
          alt={`${name}-${id}`}
          style={{ width: "300px" }}
        />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{released}</p>
        <p>{rating}</p>
        <p>{description}</p>
        <p>{genres.join(", ")}</p>
        <p>{platforms.join(", ")}</p>
      </div>
    </div>
  );
}

export default DetailsGame;
