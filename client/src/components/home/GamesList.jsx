import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions/gamesAction.js";
import Card from "../card/Card.jsx";
import styles from "../../assets/styles/list.module.css";

function GamesList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  var videogames = state.videogames;
  const order = state.order;
  const genre = state.filterGenre;
  var videogamesByGenre = [];

  useEffect(() => {
    dispatch(getVideogames(1, 20));
  }, []);

  const filterByOrder = () => {
    if (order === "exists") {
      videogames = videogames.sort((a, b) => {
        if (Number(b.id) && !Number(a.id)) return 1;
        if (!Number(b.id) && Number(a.id)) return -1;
        if ((Number(b.id) && Number(a.id)) || (!Number(b.id) && !Number(a.id)))
          return 0;
      });
    } else if (order === "append") {
      videogames = videogames.sort((a, b) => {
        if (Number(b.id) && !Number(a.id)) return -1;
        if (!Number(b.id) && Number(a.id)) return 1;
        if ((Number(b.id) && Number(a.id)) || (!Number(b.id) && !Number(a.id)))
          return 0;
      });
    } else if (order === "rating") {
      videogames = videogames.sort((a, b) => b.rating - a.rating);
    } else if (order === "asc") {
      videogames = videogames.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "desc") {
      videogames = videogames.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  const filterByGenre = () => {
    if (genre !== "All") {
      for (let i = 0; i < videogames.length; i++) {
        for (let a = 0; a < videogames[i].genres.length; a++) {
          if (videogames[i].genres[a].name === genre) {
            videogamesByGenre.push(videogames[i]);
          }
        }
      }
    }
  };

  filterByOrder();
  filterByGenre();

  return (
    <div className={styles.container}>
      {videogames && (
        <div>
          {videogames.length > 0 ? (
            <div className={styles.list}>
              {(genre === "All" ? videogames : videogamesByGenre).map(
                (videogame) => (
                  <Card
                    key={videogame.id}
                    id={videogame.id}
                    name={videogame.name}
                    img={videogame.background_image}
                    genres={videogame.genres}
                  />
                )
              )}
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
