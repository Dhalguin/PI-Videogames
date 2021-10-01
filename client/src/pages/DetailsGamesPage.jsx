import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogameDetails } from "../redux/actions/gamesAction.js";
import DetailsGame from "../components/details/DetailsCard.jsx";

function DetailsGamesPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getVideogameDetails(params.id));
  }, []);

  return (
    <>
      <DetailsGame
        key={details.id}
        id={details.id}
        name={details.name}
        background_image={details.background_image}
        description={details.description}
        genresArr={details.genres}
        released={details.released}
        rating={details.rating}
        platformsArr={details.platforms}
      />
    </>
  );
}

export default DetailsGamesPage;
