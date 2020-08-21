import React from "react";
import ocean8 from "../image/Oceans-8-movie-wallpaper.jpg";
import "../pages/home.scss";
import Info from "../components/Info";
import Slider from "../components/Slider";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Info />
        <img src={ocean8} alt="Ocean8" className="home____mainImage"></img>
        <Slider article="Trending now" />
        <Slider article="Asian movies" />
        <div>Hello from Home</div>
      </div>
    );
  }
}
export default Home;
