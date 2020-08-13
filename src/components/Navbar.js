import React from "react";
import "./Navbar.scss";
import logo from "../image/logo-remove.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faGift,
  faBell,
  faSquare,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="Logo" />
        <ul>
          <Link to="/" className="navbar__link">
            <li>Home</li>
          </Link>
          <Link to="/tvshow" className="navbar__link">
          <li>TV Shows</li>
          </Link>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
        </ul>
        <div className="navbar__secondary">
          <FontAwesomeIcon icon={faSearch} className="navbar__icon" size="lg" />
          <div className="navbar__kid">KIDS</div>
          <div className="navbar__number">7</div>
          <FontAwesomeIcon icon={faGift} className="navbar__icon" size="lg" />
          <FontAwesomeIcon icon={faBell} className="navbar__icon" size="lg" />
          <div className="navbar__icon">
            <FontAwesomeIcon
              icon={faSquare}
              className="navbar__square"
              size="2x"
            />
            <FontAwesomeIcon icon={faCaretDown} className="navbar__caret" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
