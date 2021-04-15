import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__box container">
        <div className="navBar__left">
          <div className="navBar__logo">
            <p>animeKING</p>
          </div>
        </div>
        <div className="navBar__right">
          <div className="navBar__btn">
            <button className="btn">Search</button>
            <button className="btn">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
