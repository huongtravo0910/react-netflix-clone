import React, { useState } from "react";
import "./slider.scss";
import ImgItems from "./ImgItems";
import DetailedPane from "../components/DetailPane/DatailPane";

export default function Slider(props) {
  // const [classNameDot0, setClassNameDot0] = useState(
  //   "dotContainer__dot dotContainer__dot--active"
  // );
  // const [classNameDot1, setClassNameDot1] = useState("dotContainer__dot");
  // const [classNameDot2, setClassNameDot2] = useState("dotContainer__dot");
  const [isDetailedPane, setIsDetailedPane] = useState(false);

  const [dotArr, setDotArr] = useState([
    <div className="dotContainer__dot dotContainer__dot--active"></div>,
    <div className="dotContainer__dot"></div>,
    <div className="dotContainer__dot"></div>,
  ]);
  const data = [
    [
      { id: "lastOne" },
      3,
      [
        {
          id: 13,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg",
        },
        {
          id: 14,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg",
        },
        {
          id: 15,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg",
        },
        {
          id: 16,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg",
        },
        {
          id: 17,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg",
        },
        {
          id: 18,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg",
        },
      ],
    ],
    [
      {},
      1,
      [
        {
          id: 1,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg",
        },
        {
          id: 2,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg",
        },
        {
          id: 3,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg",
        },
        {
          id: 4,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg",
        },
        {
          id: 5,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg",
        },
        {
          id: 6,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg",
        },
      ],
    ],
    [
      {},
      2,
      [
        {
          id: 7,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg",
        },
        {
          id: 8,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg",
        },
        {
          id: 9,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg",
        },
        {
          id: 10,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg",
        },
        {
          id: 11,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg",
        },
        {
          id: 12,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg",
        },
      ],
    ],
    [
      {},
      3,
      [
        {
          id: 13,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg",
        },
        {
          id: 14,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg",
        },
        {
          id: 15,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg",
        },
        {
          id: 16,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg",
        },
        {
          id: 17,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg",
        },
        {
          id: 18,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg",
        },
      ],
    ],
    [
      { id: "firstOne" },
      1,
      [
        {
          id: 1,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg",
        },
        {
          id: 2,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg",
        },
        {
          id: 3,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg",
        },
        {
          id: 4,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg",
        },
        {
          id: 5,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg",
        },
        {
          id: 6,
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg",
        },
      ],
    ],
  ];
  let isSliding = false;
  let counter = 0;
  const left = "<";
  const right = ">";
  let rowRef = React.createRef();

  const goLeft = () => {
    if (isSliding) return;
    isSliding = true;
    setTimeout(() => {
      const size = rowRef.current.clientWidth;
      rowRef.current.style.transition = "transform 0.7s ease-in-out";
      counter--;
      rowRef.current.style.transform = "translateX(" + -size * counter + "px)";
    }, 200);
    if (counter === 0 || counter === 3) {
      setDotArr([
        <div className="dotContainer__dot dotContainer__dot--active"></div>,
        <div className="dotContainer__dot"></div>,
        <div className="dotContainer__dot"></div>,
      ]);
    }
    if (counter === 1 || counter === 4) {
      setDotArr([
        <div className="dotContainer__dot"></div>,
        <div className="dotContainer__dot dotContainer__dot--active"></div>,
        <div className="dotContainer__dot"></div>,
      ]);
    }
    if (counter === 2) {
      setDotArr([
        <div className="dotContainer__dot"></div>,
        <div className="dotContainer__dot"></div>,
        <div className="dotContainer__dot dotContainer__dot--active"></div>,
      ]);
    }
  };
  const goRight = () => {
    if (isSliding) return;
    isSliding = true;
    setTimeout(() => {
      const size = rowRef.current.clientWidth;
      // console.log(rowRef.current.clientWidth);
      rowRef.current.style.transition = "transform 0.7s ease-in-out";
      counter++;
      rowRef.current.style.transform = "translateX(" + -size * counter + "px)";
    }, 200);
    // if (counter === 0 || counter === 3) {
    //   setDotArr([
    //     <div className="dotContainer__dot dotContainer__dot--active"></div>,
    //     <div className="dotContainer__dot"></div>,
    //     <div className="dotContainer__dot"></div>,
    //   ]);
    // }
    // if (counter === 1 || counter === 4) {
    //   setDotArr([
    //     <div className="dotContainer__dot"></div>,
    //     <div className="dotContainer__dot dotContainer__dot--active"></div>,
    //     <div className="dotContainer__dot"></div>,
    //   ]);
    // }
    // if (counter === 2) {
    //   setDotArr([
    //     <div className="dotContainer__dot"></div>,
    //     <div className="dotContainer__dot"></div>,
    //     <div className="dotContainer__dot dotContainer__dot--active"></div>,
    //   ]);
    // }
  };

  const handleTransitionEnd = () => {
    // console.log(counter);
    // console.log(data[counter][1]);
    // console.log("TransitionEnd");
    if (data[counter][0]["id"] === "lastOne") {
      const size = rowRef.current.clientWidth;
      rowRef.current.style.transition = "none";
      counter = data.length - 2;
      rowRef.current.style.transform = "translateX(" + -size * counter + "px)";
    }
    if (data[counter][0]["id"] === "firstOne") {
      const size = rowRef.current.clientWidth;
      rowRef.current.style.transition = "none";
      counter = data.length - counter;
      rowRef.current.style.transform = "translateX(" + -size * counter + "px)";
    }

    // setClassNameDot0("dotContainer__dot");
    // setClassNameDot1("dotContainer__dot");
    // setClassNameDot2("dotContainer__dot");
    // console.log(counter);
    // setTimeout(() => {
    //   if (data[counter][1] === 3) {
    //     setClassNameDot0("dotContainer__dot dotContainer__dot--active");
    //     // setClassNameDot1("dotContainer__dot");
    //     // setClassNameDot2("dotContainer__dot");
    //   } else if (data[counter][1] === 1) {
    //     setClassNameDot1("dotContainer__dot dotContainer__dot--active");
    //     // setClassNameDot0("dotContainer__dot");
    //     // setClassNameDot2("dotContainer__dot");
    //   } else if (data[counter][1] === 2) {
    //     setClassNameDot2("dotContainer__dot dotContainer__dot--active");
    //     // setClassNameDot0("dotContainer__dot");
    //     // setClassNameDot1("dotContainer__dot");
    //   }
    // }, 400);
    // setTimeout(() => {
    //   data[counter][1] === 3
    // // counter === 3 || counter ===0
    //     ? setClassNameDot0(" dotContainer__dot dotContainer__dot--active")
    //     : setClassNameDot0(" dotContainer__dot") ;
    //   data[counter][1] === 1
    //  //counter === 1 || counter === 4
    //     ? setClassNameDot1(" dotContainer__dot dotContainer__dot--active")
    //     : setClassNameDot1(" dotContainer__dot");
    //   data[counter][1] === 2
    //  //counter === 2
    //     ? setClassNameDot2(" dotContainer__dot dotContainer__dot--active")
    //     : setClassNameDot2(" dotContainer__dot");
    // }, 400);
    isSliding = false;
  };

  const [tile, setTile] = useState("tile");

  const handleClick = (a) => {
    setIsDetailedPane(true);
    setTile("tile1");
  };

  const items = data.map((item) =>
    item[2].map((image) => (
      <ImgItems
        key={item[0] + image["id"]}
        src={image["src"]}
        id={image["id"]}
       handleClick={handleClick}
        isDetailedPane={isDetailedPane}
        tile={tile}
      />
    ))
  );
        

  return (
    <div>
      <div className="contain">
        <div className="dotContainer">
          {dotArr[0]}
          {dotArr[1]}
          {dotArr[2]}
        </div>
        <button className="btn btn__left" onClick={goLeft}>
          {left}
        </button>

        <button className="btn btn__right" onClick={goRight}>
          {right}
        </button>
        <div className="article">
          <h1>{props.article}</h1>
        </div>

        <div className="row">
          <div
            className="row__inner"
            ref={rowRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {items}
          </div>
        </div>
      </div>
      {isDetailedPane && <DetailedPane />}
    </div>
  );
}
