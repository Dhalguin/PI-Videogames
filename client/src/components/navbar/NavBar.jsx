import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../assets/res/logo.png";
import styles from "../../assets/styles/navbar.module.css";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions/gamesAction";

function NavBar() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.otro}>
        <Link to="/videogames" className="link">
          <div
            className="center"
            onClick={() => dispatch(getVideogames(1, 15))}
          >
            <img src={logo} alt="soy_henry" />
            <span className={styles.title}>SOY HENRY</span>
          </div>
        </Link>
      </div>
      <div className={styles.search}>
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
