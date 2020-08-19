import React from "react";
import "../pages/tvshow.scss";
import image from "../image/oceans-8.jpg";
import Info from "../components/Info";
import Slider from "../components/Slider";
import GenreMenu from "../components/GenreMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

class TVShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChooseGenre: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    const { isChooseGenre } = this.state;
    this.setState({
      isChooseGenre: !isChooseGenre,
    });
  }

  render() {
    return (
      <div className="tvshow">
        <div className="tvshow__title"> TV Shows </div>
        <div className="tvshow__genre" onClick={this.handleToggle}>
          Genre
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {this.state.isChooseGenre && (
          <div className="tvshow__genreMenu">
            <GenreMenu />
          </div>
        )}
        <Info />
        <img src={image} alt="logo2" className="tvshow__mainImage"></img>
        <Slider article="Netflix Origin" />
      </div>
    );
  }
}
export default TVShow;
