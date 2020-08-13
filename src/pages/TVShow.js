import React from "react";
import "../pages/tvshow.scss";
import image from "../image/oceans-8.jpg";
import Info from "../components/Info"

class TVShow extends React.Component{
    render() {
    return(
        <div className="tvshow" >
            TV show here   
            <img src={image} alt="logo2"></img>
            <Info/>
        </div>
    )
    }
}
export default TVShow;