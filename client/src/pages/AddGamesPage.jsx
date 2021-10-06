import React from "react";
import { useSelector } from "react-redux";
import AddGameForm from "../components/add/AddGameForm";
import styles from "../assets/styles/add_box.module.css";

function AddGamesPage() {
  const state = useSelector((state) => state.genres);
  const [genres, setGenres] = React.useState([]);
  const [formId, setFormId] = React.useState("");
  const [videogame, setVideogame] = React.useState({
    title: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
  });

  const addVideogame = (data) => {
    let videogame = {
      name: data.title,
      description: data.description,
      release: data.released,
      rating: data.rating,
      genres,
      platforms: data.platforms,
    };

    fetch(`http://localhost:3001/videogame`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(videogame),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // let form = document.getElementById("form").reset();
        console.log(formId);
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
      <h2>ADD NEW VIDEOGAME</h2>
      <AddGameForm
        styles={styles}
        videogame={videogame}
        state={state}
        setGenres={setGenres}
        setFormId={setFormId}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
}

export default AddGamesPage;
