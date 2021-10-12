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
  const results = useSelector((state) => state.videogames);
  const [current, setCurrent] = React.useState(1);

  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    dispatch(getVideogames(current, 15));
  }, [current]);

  const handleNext = () => setCurrent(results.nextPage);

  const handlePrev = () => setCurrent(results.previousPage);

  const firstPage = () => setCurrent(1);

  const lastPage = () => setCurrent(Math.ceil(results.total / 15));

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
          <GamesList videogames={results.videogames || results} />
          <Pagination
            current={results.currentPage}
            next={results.nextPage}
            previous={results.previousPage}
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
