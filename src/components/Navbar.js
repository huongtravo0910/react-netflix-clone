import React from 'react';
import "./Navbar.scss";
import logo from "../image/logo-remove.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faBell, faSquare, faCaretDown, faGifts } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component{
    render(){
        return(
            <div class="navbar">
                <img src={logo} alt="Logo"/>
                <ul>
                    <li>Home</li>
                    <li>TVShow</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My list</li>
                </ul>
                <div className="navbar__secondary">
                 
                <FontAwesomeIcon icon={faSearch} className="navbar__secondary__icon" size="lg" />
                <div className="navbar__secondary__kid">KIDS</div>
                <div className="navbar__secondary__number">7</div>
                <FontAwesomeIcon icon={faGift} className="navbar__secondary__icon" size="lg"/>
                <FontAwesomeIcon icon={faBell} className="navbar__secondary__icon" size="lg" />
                <div className="navbar__secondary__icon">
                <FontAwesomeIcon icon={faSquare} className="navbar__secondary__icon__square" size="2x"/>
                <FontAwesomeIcon icon={faCaretDown} className="navbar__secondary__icon__caret" />
                </div>
                </div>
            </div>
        )
    }
}

export default Navbar;