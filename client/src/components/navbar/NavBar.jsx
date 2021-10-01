import React from "react";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div>
      <div>
        <span>LOGO</span>
        <span>TITLE</span>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
