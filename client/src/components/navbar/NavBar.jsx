import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../../assets/res/logo.png";
import styles from "../../assets/styles/navbar.module.css";

function NavBar() {
  const [order, setOrder] = React.useState("append");

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
        <select defaultValue={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="append">append</option>
          <option value="exists">exists</option>
          <option value="genres">genres</option>
          <option value="rating">rating</option>
          <option value="asc">alphabet asc</option>
          <option value="desc">Alphabet desc</option>
        </select>
      </div>
      <div className={styles.search}>
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
