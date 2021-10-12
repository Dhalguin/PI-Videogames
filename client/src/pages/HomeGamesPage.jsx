import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames } from "../redux/actions/gamesAction.js";
import GamesList from "../components/home/GamesList";
import FloatingButton from "../components/add/FloatingButton";
import Pagination from "../components/pagination/Pagination.jsx";
import Spinner from "../components/spinner/Spinner.jsx";

function HomeGamesPage() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.videogames);
  const [current, setCurrent] = React.useState(1);

  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    dispatch(getVideogames(current, 20));
  }, [current]);

  const handleNext = () => {
    setCurrent(results.nextPage);
  };

  const handlePrev = () => {
    setCurrent(results.previousPage);
  };

  return (
    <>
      {isLoading ? (
        <div className="align-center">
          <Spinner />
        </div>
      ) : (
        <GamesList videogames={results.videogames || results} />
      )}
      <Pagination
        current={results.currentPage}
        next={results.nextPage}
        previous={results.previousPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <FloatingButton />
    </>
  );
}

export default HomeGamesPage;
