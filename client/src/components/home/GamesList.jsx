import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions/gamesAction.js";
import Card from "../card/Card.jsx";

function GamesList() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  console.log(videogames);
  useEffect(() => {
    dispatch(getVideogames(1, 20));
  }, []);

  return (
    <div>
      {videogames.length > 0 ? (
        <div>
          {videogames.map((videogame) => (
            <Card
              key={videogame.id}
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
  );
}

export default GamesList;
