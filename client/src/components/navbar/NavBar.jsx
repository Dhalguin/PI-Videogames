import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../assets/res/logo.png";
import styles from "../../assets/styles/navbar.module.css";

function NavBar() {
  return (
    <div className={styles.container}>
      <Link to="/videogames">
        <div className="center">
          <img src={logo} alt="soy_henry" />
          <span className={styles.title}>SOY HENRY</span>
        </div>
      </Link>
      <div className={styles.search}>
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
