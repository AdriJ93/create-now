import React from "react";
import "../styles/Offers.css";
import TitleWhite from "../assets/whiteBackground.jpg";

function Offers() {
  return (
    <div className="offers" style={{ backgroundImage: `url(${TitleWhite})` }}>
      <div className="cards">
        <div className="leftCard">
          <h1>Einsteiger-Paket</h1>
          <p>
            Sendefähiger Videobeitrag (max 3 Min. Länge). Ideal für: Instagram
            Reels, Tik Tok Clips oder als Unterstützung für größere Beiträge
          </p>
          <ul>
            <li>Material sichten</li>
            <li>Rough Cut</li>
            <li>Chronologische Anordnung</li>
            <li>Ton</li>
          </ul>
          <div className="cardBottomLeft">
            <h2>149,00 €</h2>
            <div className="buttonDiv">
              <button className="buttonOffers"> Jetzt buchen </button>
            </div>
          </div>
        </div>
        <div className="middle">
          <h1>Standard-Paket</h1>
          <p>
            Sendefähiger Videobeitrag
            <br />
            Ideal für: Youtube, Instagram, Commercial Ads oder TikTok
          </p>
          <ul>
            <li>Material sichten</li>
            <li>Rough Cut</li>
            <li>Chronologische Anordnung</li>
            <li>Übergänge</li>
            <li>Wunschmusik importieren</li>
            <li>Color Correction</li>
            <li>Effekte</li>
          </ul>
          <div className="cardBottomMiddle">
            <h2>299,00 €</h2>
            <div className="buttonDiv">
              <button className="buttonOffers"> Jetzt buchen </button>
            </div>
          </div>
        </div>
        <div className="rightCard">
          <h1>Premium-Paket</h1>
          <p>
            Videobeitrag z.B. für Hochzeitvideos, Fernsehbeiträge,
            Werbekampagnen und Folgeaufträge
          </p>
          <div className="cardBottomRight">
            <h2>Preis individell</h2>
            <div className="buttonDiv">
              <button className="buttonOffers"> Jetzt buchen </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
