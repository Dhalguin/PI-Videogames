import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "../redux/actions/gamesAction.js";
import GamesList from "../components/home/GamesList";
import FloatingButton from "../components/add/FloatingButton";

function HomeGamesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <>
      <GamesList />
      <FloatingButton />
    </>
  );
}

export default HomeGamesPage;
