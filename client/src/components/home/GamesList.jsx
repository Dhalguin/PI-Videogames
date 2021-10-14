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
              {genre === "All" && existence === "All" ? (
                videogames.map((videogame) => (
                  <Card key={videogame.id} data={videogame} />
                ))
              ) : genre !== "All" ? (
                videogamesByGenre.length > 0 ? (
                  videogamesByGenre.map((videogame) => (
                    <Card key={videogame.id} data={videogame} />
                  ))
                ) : (
                  <div className={`center ${styles.box}`}>
                    <span>THERE ARE NO VIDEOGAMES</span>
                  </div>
                )
              ) : existence !== "All" ? (
                videogamesByExistence.length > 0 ? (
                  videogamesByExistence.map((videogame) => (
                    <Card key={videogame.id} data={videogame} />
                  ))
                ) : (
                  <div className={`center ${styles.box}`}>
                    <span>THERE ARE NO VIDEOGAMES</span>
                  </div>
                )
              ) : (
                <div className={`center ${styles.box}`}>
                  <span>THERE ARE NO VIDEOGAMES</span>
                </div>
              )}
            </div>
          ) : (
            <div className={`center ${styles.box}`}>
              <span>THERE ARE NO VIDEOGAMES</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GamesList;
