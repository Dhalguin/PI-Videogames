import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeOrder, changeGenre } from "../../redux/actions/gamesAction.js";

function SelectFilters({ styles }) {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  return (
    <>
      <label>Order by</label>
      <select
        defaultValue={order}
        onChange={(e) => dispatch(changeOrder(e.target.value))}
      >
        <option value="append">append</option>
        <option value="exists">exists</option>
        <option value="rating">rating</option>
        <option value="asc">alphabet asc</option>
        <option value="desc">Alphabet desc</option>
      </select>
      <label>Géneros</label>
      <select
        name="genres"
        id="genres"
        onChange={(e) => dispatch(changeGenre(e.target.value))}
      >
        <option value="All">All</option>
        <option value="Indie">Indie</option>
        <option value="Shooter">Shooter</option>
        <option value="Platformer">Platformer</option>
        <option value="Family">Family</option>
        <option value="Adventure">Adventure</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Sports">Sports</option>
        <option value="RPG">RPG</option>
        <option value="Arcade">Arcade</option>
        <option value="Massively Multiplayer">Massively Multiplayer</option>
        <option value="Card">Card</option>
        <option value="Strategy">Strategy</option>
        <option value="Casual">Casual</option>
        <option value="Fighting">Fighting</option>
        <option value="Educational">Educational</option>
        <option value="Action">Action</option>
        <option value="Simulation">Simulation</option>
        <option value="Racing">Racing</option>
        <option value="Board Games">Board Games</option>
      </select>
    </>
  );
}

export default SelectFilters;
