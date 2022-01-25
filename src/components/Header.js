import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/CN45.png";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="leftSide">
        <Link to="/">
          <img className="logo" src={Logo} />
        </Link>
      </div>
      <div className="rightSide">
        <Link className="linkItem" to="/offers">
          Angebote
        </Link>
        <Link className="linkItem" to="/about">
          Über uns
        </Link>
        <Link className="linkItem" to="/contact">
          Kontakt
        </Link>
      </div>
    </header>
  );
}

export default Header;
