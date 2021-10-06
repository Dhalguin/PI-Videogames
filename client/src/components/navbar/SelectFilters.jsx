import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeOrder } from "../../redux/actions/gamesAction.js";

function SelectFilters({ styles }) {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  return (
    <>
      <select
        defaultValue={order}
        onChange={(e) => dispatch(changeOrder(e.target.value))}
      >
        <option value="append">append</option>
        <option value="exists">exists</option>
        <option value="genres">genres</option>
        <option value="rating">rating</option>
        <option value="asc">alphabet asc</option>
        <option value="desc">Alphabet desc</option>
      </select>
    </>
  );
}

export default SelectFilters;
