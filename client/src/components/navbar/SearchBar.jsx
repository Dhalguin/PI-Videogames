import React from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions/gamesAction.js";

function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");

  const handleSubmit = () => {
    if (title) dispatch(getVideogames(1, 15, title));
    else alert("Write a validate title");
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
