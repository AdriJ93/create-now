import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="row1">
        <InstagramIcon /> <FacebookIcon />
      </div>
      <div className="row2">
        <Link className="linkItem" to="/impressum">
          Impressum
        </Link>
        <Link className="linkItem" to="/about">
          Über uns
        </Link>
      </div>
      <div className="row3">&copy; 2022 CREATE NOW</div>
    </footer>
  );
}

export default Footer;
