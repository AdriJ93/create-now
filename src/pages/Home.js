import React from "react";
import "../styles/Home.css";
import Title from "../assets/EditorDesktopMatt.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Title})` }}>
      <div className="container">
        <h1> Cutter oder Video Editor Freelancer gesucht?</h1>
        <p> Unkompliziert und schnell Videoschnitt Projekte umsetzen!</p>
        <Link to="/offers">
          <button className="button"> Unsere Angebote </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
