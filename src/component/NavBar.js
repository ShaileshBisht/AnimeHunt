import React from "react";
import "./NavBar.css";
import { useHistory } from "react-router-dom";

function NavBar() {
  const history = useHistory();

  return (
    <div className="navBar">
      <div className="navBar__box container">
        <div className="navBar__left">
          <div className="navBar__logo">
            <p onClick={(e) => history.push("/")}>AniHunt</p>
          </div>
        </div>
        <div className="navBar__right">
          <div className="navBar__btn">
            <button onClick={(e) => history.push("/search")} className="btn">
              Search
            </button>
            <button className="btn">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
