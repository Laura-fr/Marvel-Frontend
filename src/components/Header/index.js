import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" src="/marvel-logo.png" />
      </Link>
      <Link to="/characters">
        <button>CHARACTERS</button>
      </Link>
      <Link to="/comics">
        <button>COMICS</button>
      </Link>
      <Link to="/favs">
        <button>MY FAVS</button>
      </Link>
      <button className="login">LOGIN</button>
    </div>
  );
};

export default Header;
