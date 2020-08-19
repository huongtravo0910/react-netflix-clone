import React from "react";
import "./slider.scss";
import ImgComp from "./ImgComp";
import img1 from "../image/japanese-movie1.png";
import img2 from "../image/japanese-movie2.jpg";
import img3 from "../image/korean-movie.jpg";
import img4 from "../image/korean-movie2.jpg";
import img5 from "../image/korean-movie3.jpg";
import img6 from "../image/korean-movie4.jpg";
import img7 from "../image/Oceans-8-movie-wallpaper.jpg";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0, //flag
    };
  }

  // const data = [
  //   {
  //     id: 1,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg",
  //   },
  //   {
  //     id: 2,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg",
  //   },
  //   {
  //     id: 3,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg",
  //   },
  //   {
  //     id: 4,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg",
  //   },
  //   {
  //     id: 5,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg",
  //   },
  //   {
  //     id: 6,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg",
  //   },
  //   {
  //     id: 7,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg",
  //   },
  //   {
  //     id: 8,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg",
  //   },
  //   {
  //     id: 9,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg",
  //   },
  //   {
  //     id: 10,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg",
  //   },
  //   {
  //     id: 11,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg",
  //   },
  //   {
  //     id: 12,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg",
  //   },
  //   {
  //     id: 13,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg",
  //   },
  //   {
  //     id: 14,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg",
  //   },
  //   {
  //     id: 15,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg",
  //   },
  //   {
  //     id: 16,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg",
  //   },
  //   {
  //     id: 17,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg",
  //   },
  //   {
  //     id: 18,
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg",
  //   },
  //   // {
  //   //   id: 19,
  //   //   src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg",
  //   // },
  // ];
  

  goLeft = (e) => {
    e.preventDefault();
    if (this.state.x > 0) {
      this.setState({ x: this.state.x - 1 });
    } else this.setState({ x: 2 });
  };

  goRight = (e) => {
    e.preventDefault();
    if (this.state.x < 2) {
      this.setState({ x: this.state.x + 1 });
    } else this.setState({ x: 0 });
  };
  render() {
    const left = "<";
    let right = ">";
    let sliderArr = [
      <ImgComp src1="https://occ-0-993-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeEtDNFITxOzCyQ1Tj9Gym9oSDCUqfE2g2TYQdiIed0YE7usv9Mse-yXT79-37iLWMm5DbATDYD-T1iINVgzdDJfML6nPeQkYJQO2IL01367JKLjlNin21OVHpCF9B04aA.webp?r=346" src2={img2} src3={img3} src4={img4} src5={img5} />,
      <ImgComp src1={img6} src2={img2} src3={img3} src4={img4} src5={img5} />,
      <ImgComp src1={img1} src2={img7} src3={img3} src4={img3} src5={img5} />,
    ];
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <div className="wrapper">
          <button
            className="wrapper__btn wrapper__btn--goLeft"
            onClick={this.goLeft}
          >
            {left}
          </button>
          <button
            className="wrapper__btn wrapper__btn--goRight"
            onClick={this.goRight}
          >
            {right}
          </button>

          <div className="slider">
            {sliderArr.map((item, index) => {
              return (
                <div
                  className="slider__item"  //CSS transition o day thi duoc con o component ImgComp lai khong duoc ???
                  key={index}
                  style={{ transform: `translateX(-${this.state.x * 100}%)` }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
