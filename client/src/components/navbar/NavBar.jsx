import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SelectFilters from "./SelectFilters.jsx";
import logo from "../../assets/res/logo.png";
import styles from "../../assets/styles/navbar.module.css";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.otro}>
        <Link to="/videogames" className="link">
          <div className="center">
            <img src={logo} alt="soy_henry" />
            <span className={styles.title}>SOY HENRY</span>
          </div>
        </Link>
      </div>

      <div className={styles.filters}>
        <label>ORDER BY</label>
        <SelectFilters />
      </div>
      <div className={styles.search}>
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
