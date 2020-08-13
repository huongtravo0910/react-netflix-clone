import React from "react";
import "./slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <h2>
          <a href="#">Asian TV Shows</a>
        </h2>
        <div className="slider_container">
          <div className="slider_item1">
            
          </div>
          <div className="slider_item1"></div>
          <span>
            <FontAwesomeIcon icon={faCaretSquareRight}/>
          </span>

        </div>
      </div>
    );
  }
}
export default Slider;
