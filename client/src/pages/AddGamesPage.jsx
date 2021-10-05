import React from "react";
import AddGameForm from "../components/add/AddGameForm";
import styles from "../assets/styles/add_box.module.css";

function AddGamesPage() {
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
      platforms: data.platforms,
    };

    fetch(`http://localhost:3001/videogame`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(videogame),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
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
      videogame.platforms
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
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
}

export default AddGamesPage;
