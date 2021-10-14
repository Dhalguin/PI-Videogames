import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../redux/actions/gamesAction.js";
import AddGameForm from "../components/add/AddGameForm";
import Spinner from "../components/spinner/Spinner.jsx";
import styles from "../assets/styles/add_box.module.css";

function AddGamesPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const [genres, setGenres] = React.useState([]);
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

  const addVideogame = (data) => {
    let videogame = {
      name: data.title,
      description: data.description,
      released: data.released,
      rating: data.rating,
      genres,
      platforms: data.platforms,
      background_image: data.background_image,
    };

    fetch(`http://localhost:3001/videogames`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(videogame),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`The ${data.videogame.name} videogame added to DB successfully`);
        history.push("/videogames");
      })
      .catch((err) => console.log(err));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      videogame.title &&
      videogame.description &&
      videogame.released &&
      videogame.rating &&
      videogame.title &&
      videogame.platforms &&
      genres.length > 0
    ) {
      addVideogame(videogame);
    } else {
      alert("Write in all textfiled");
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
      {state.genres ? (
        <AddGameForm
          styles={styles}
          videogame={videogame}
          genreState={genreState}
          setGenres={setGenres}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default AddGamesPage;
