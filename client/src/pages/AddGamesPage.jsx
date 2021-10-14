import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../redux/actions/gamesAction.js";
import { validate } from "../utils/validator.js";
import { postVidegame } from "../utils/postVideogame.js";
import AddGameForm from "../components/add/AddGameForm";
import Spinner from "../components/spinner/Spinner.jsx";
import styles from "../assets/styles/add_box.module.css";

function AddGamesPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const [genres, setGenres] = React.useState([]);
  const [errors, setErrors] = useState({});
  const [videogame, setVideogame] = React.useState({
    title: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    background_image: "",
  });

  const genreState = state.genres.genres;

  React.useEffect(() => {
    if (!genreState) dispatch(getGenres());
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrors(validate({ ...videogame, [e.target.name]: e.target.value }));

    if (
      videogame.title &&
      videogame.description &&
      videogame.released &&
      videogame.rating &&
      videogame.platforms
    ) {
      postVidegame(videogame, genres, history);
    }
  };

  const handleOnChange = (e) => {
    setVideogame({
      ...videogame,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`${styles.container} center`}>
      {genreState ? (
        <AddGameForm
          styles={styles}
          videogame={videogame}
          genreState={genreState}
          setGenres={setGenres}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          errors={errors}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default AddGamesPage;
