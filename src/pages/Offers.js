import React from "react";
import "../styles/Offers.css";
import TitleWhite from "../assets/whiteBackground.jpg";

function Offers() {
  return (
    <div className="offers" style={{ backgroundImage: `url(${TitleWhite})` }}>
      <div className="cards">
        <div className="leftCard">
          <h1>Einsteiger-Paket</h1>
        </div>
        <div className="middle">
          <h1>Standard-Paket</h1>
        </div>
        <div className="rightCard">
          <h1>Premium-Paket</h1>
        </div>
      </div>
    </div>
  );
}

export default Offers;
