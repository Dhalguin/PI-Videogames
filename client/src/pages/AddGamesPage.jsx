import React from "react";
import AddGameForm from "../components/add/AddGameForm";
import styles from "../assets/styles/add_box.module.css";

function AddGamesPage() {
  const [videogame, setVideogame] = React.useState({
    title: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(videogame);
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
