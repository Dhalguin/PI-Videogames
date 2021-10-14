import React from "react";
import { useSelector } from "react-redux";
import {
  filterByOrder,
  filterByGenre,
  filterByExistence,
} from "../../utils/filters.js";
import Card from "../card/Card.jsx";
import styles from "../../assets/styles/list.module.css";

function GamesList({ videogames }) {
  const state = useSelector((state) => state);
  const order = state.order;
  const genre = state.filterGenre;
  const existence = state.filterExistence;
  var videogamesByGenre = [];
  var videogamesByExistence = [];

  if (videogames) {
    filterByOrder(order, videogames);
    filterByGenre(genre, videogames, videogamesByGenre);
    filterByExistence(existence, videogames, videogamesByExistence);
  }

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
                : null}
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
