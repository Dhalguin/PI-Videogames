import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { getVideogames } from "../../redux/actions/gamesAction.js";
import styles from "../../assets/styles/search_bar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const history = useHistory();
  const [title, setTitle] = React.useState("");
  const baseRoute = "/videogames";

  const handleSubmit = () => {
    if (location !== baseRoute) history.push(baseRoute);
    if (title) dispatch(getVideogames(1, 15, title));
    else dispatch(getVideogames(1, 20));
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the name of the movie or serie"
      />
      <button onClick={handleSubmit} className={styles.button}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
