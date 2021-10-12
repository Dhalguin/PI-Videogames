import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogameDetails } from "../redux/actions/gamesAction.js";
import DetailsGame from "../components/details/DetailsCard.jsx";
import Spinner from "../components/spinner/Spinner.jsx";

function DetailsGamesPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const details = useSelector((state) => state.details);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getVideogameDetails(params.id));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="align-center">
          <Spinner />
        </div>
      ) : (
        <DetailsGame
          key={details.id}
          id={details.id}
          name={details.name}
          background_image={details.background_image}
          description={details.description}
          genres={details.genres}
          released={details.released}
          rating={details.rating}
          platforms={details.platforms}
        />
      )}
    </>
  );
}

export default DetailsGamesPage;
