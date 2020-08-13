import React from "react";
import "./info.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faInfo } from "@fortawesome/free-solid-svg-icons";

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <img
          src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXhi7sOd0I7ORDRaayyf5IfOCSxqOISsxVELeHXojBHaqA6kA_ZYDbTVhQL3ak2OUlrYJfH87Dbn_EaxCzOL9SVGtbwMYyCUQCOE.webp?r=534"
          alt="film"
        />
        <div className="info__intro">#3 in Vietnam today</div>
        <div className="info__wrapper">
          It's not about revenge. It's about 16.5 million dollars -- each. But
          robbing the city's most exclusive party has its thrills.
        </div>
        <div className="info__button">
          <button className="info__play">
            <FontAwesomeIcon icon={faCaretRight} size="2x" />
            <span>Play</span>
          </button>
          <button className="info__moreinfo">
            <FontAwesomeIcon icon={faInfo} size="lg" />
            <span>More info</span>
          </button>
        </div>
      </div>
    );
  }
}
export default Info;
