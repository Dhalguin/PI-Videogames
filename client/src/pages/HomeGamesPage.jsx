import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames } from "../redux/actions/gamesAction.js";
import GamesList from "../components/home/GamesList";
import FloatingButton from "../components/add/FloatingButton";
import Pagination from "../components/pagination/Pagination.jsx";
import SelectFilters from "../components/navbar/SelectFilters.jsx";
import Spinner from "../components/spinner/Spinner.jsx";

function HomeGamesPage() {
  const dispatch = useDispatch();
  const [current, setCurrent] = React.useState(1);
  const state = useSelector((state) => state);

  const videogames = state.videogames;
  const isLoading = state.isLoading;
  const genres = state.genres.genres;

  useEffect(() => {
    if (!genres) dispatch(getGenres());
  }, []);

  useEffect(() => {
    dispatch(getVideogames(current, 15));
  }, [current]);

  const handleNext = () => setCurrent(videogames.nextPage);
  const handlePrev = () => setCurrent(videogames.previousPage);
  const firstPage = () => setCurrent(1);
  const lastPage = () => setCurrent(Math.ceil(videogames.total / 15));

  return (
    <>
      <div>
        <SelectFilters />
      </div>
      {isLoading ? (
        <div className="align-center">
          <Spinner />
        </div>
      ) : (
        <>
          <GamesList videogames={videogames.videogames || videogames} />
          <Pagination
            current={videogames.currentPage}
            next={videogames.nextPage}
            previous={videogames.previousPage}
            handleNext={handleNext}
            handlePrev={handlePrev}
            firstPage={firstPage}
            lastPage={lastPage}
          />
        </>
      )}
      <FloatingButton />
    </>
  );
}

export default HomeGamesPage;
