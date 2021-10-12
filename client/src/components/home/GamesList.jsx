import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card.jsx";
import styles from "../../assets/styles/list.module.css";

function GamesList({ videogames }) {
  const state = useSelector((state) => state);
  const order = state.order;
  const genre = state.filterGenre;
  const existence = state.filterExistence;
  var videogamesByGenre = [];
  var videogamesByExistence = [];

  const filterByOrder = () => {
    if (order === "rating") {
      videogames = videogames.sort((a, b) => b.rating - a.rating);
    } else if (order === "asc") {
      videogames = videogames.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "desc") {
      videogames = videogames.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  const filterByGenre = () => {
    if (genre === "All") videogamesByGenre = [];

    if (genre !== "All") {
      for (let i = 0; i < videogames.length; i++) {
        if (videogames[i].genres) {
          for (let a = 0; a < videogames[i].genres.length; a++) {
            if (videogames[i].genres[a].name === genre) {
              videogamesByGenre.push(videogames[i]);
            }
          }
        }
      }
    }
  };

  const filterByExistence = () => {
    if (existence === "All") videogamesByExistence = [];

    if (existence === "append") {
      for (let i = 0; i < videogames.length; i++) {
        if (!Number(videogames[i].id)) {
          videogamesByExistence.push(videogames[i]);
        }
      }
    } else if (existence === "exists") {
      for (let i = 0; i < videogames.length; i++) {
        if (Number(videogames[i].id)) {
          videogamesByExistence.push(videogames[i]);
        }
      }
    }
    console.log(videogamesByExistence);
  };

  if (videogames) {
    filterByOrder();
    filterByGenre();
    filterByExistence();
  }

  const removeDuplicates = (array) => {
    var arr = array.concat();

    for (let i = 0; i < arr.length; i++) {
      for (let a = i + 1; a < arr.length; a++) {
        if (arr[i] === arr[a]) {
          arr.splice(a, 1);
        }
      }
    }
    return arr;
  };

  return (
    <div className={styles.container}>
      {videogames && (
        <div>
          {videogames.length > 0 ? (
            <div className={styles.list}>
              {genre === "All" && existence === "All"
                ? videogames.map((videogame) => (
                    <Card
                      key={videogame.id}
                      id={videogame.id}
                      name={videogame.name}
                      img={videogame.background_image}
                      genres={videogame.genres}
                    />
                  ))
                : genre !== "All" && existence === "All"
                ? videogamesByGenre.map((videogame) => (
                    <Card
                      key={videogame.id}
                      id={videogame.id}
                      name={videogame.name}
                      img={videogame.background_image}
                      genres={videogame.genres}
                    />
                  ))
                : genre === "All" && existence !== "All"
                ? videogamesByExistence.map((videogame) => (
                    <Card
                      key={videogame.id}
                      id={videogame.id}
                      name={videogame.name}
                      img={videogame.background_image}
                      genres={videogame.genres}
                    />
                  ))
                : removeDuplicates(
                    videogamesByGenre.concat(videogamesByExistence)
                  ).map((videogame) => (
                    <Card
                      key={videogame.id}
                      id={videogame.id}
                      name={videogame.name}
                      img={videogame.background_image}
                      genres={videogame.genres}
                    />
                  ))}
            </div>
          ) : (
            <div>There are no videogames</div>
          )}
        </div>
      )}
    </div>
  );
}

export default GamesList;
