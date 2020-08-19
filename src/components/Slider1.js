import React from "react";
import "./slider.scss";
import phim1 from "../image/japanese-movie1.png";
import phim2 from "../image/japanese-movie2.jpg";
import phim3 from "../image/korean-movie.jpg";
import phim4 from "../image/korean-movie2.jpg";
import phim5 from "../image/korean-movie3.jpg";
import phim6 from "../image/korean-movie4.jpg";
import phim7 from "../image/Oceans-8-movie-wallpaper.jpg";
class Slider extends React.Component {
  render() {
    const right = "<";
    const left = ">";

    return (
      <div className="slider">
        <h2>
          <a href="#">Asian TV Shows</a>
        </h2>
        <div className="wrapper">
          <section id="section1">
            <a href="#section2"> {right} </a>
            <div className="item">
              <img src={phim1} alt="Phim1"></img>
            </div>
            <div className="item">
              <img src={phim2} alt="Phim2"></img>
            </div>
            <div className="item">
              <img src={phim1} alt="Phim3"></img>
            </div>
            <div className="item">
              <img src={phim2} alt="Phim1"></img>
            </div>
            <div className="item">
              <img src={phim1} alt="Phim1"></img>
            </div>
            <a href="#section3"> {left} </a>
          </section>
          <section id="section2">
            <a href="#section3"> {right} </a>
            <div className="item">
              <img src={phim1} alt="Phim1"></img>
            </div>
            <div className="item">
              <img src={phim2} alt="Phim2"></img>
            </div>
            <div className="item">
              <img src={phim3} alt="Phim3"></img>
            </div>
            <div className="item">
              <img src={phim4} alt="Phim1"></img>
            </div>
            <div className="item">
              <img src={phim5} alt="Phim1"></img>
            </div>
            <a href="#section1"> {left} </a>
          </section>
          <section id="section3">
            <a href="#section1"> {right} </a>
            <div className="item">
              <img src={phim1} alt="Phim1"></img>
            </div>
            <div className="item">
              <img src={phim2} alt="Phim2"></img>
            </div>
            <div className="item">
              <img src={phim3} alt="Phim3"></img>
            </div>
            <div className="item">
              <img src={phim4} alt="Phim1"></img>
            </div>
            <div className="item">
              <img src={phim5} alt="Phim1"></img>
            </div>
            <a href="#section2"> {left} </a>
          </section>
        </div>
      </div>
    );
  }
}
export default Slider;
