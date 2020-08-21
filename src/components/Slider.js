import React, { useState, useEffect } from "react";
import "./slider.scss";
import ImgItems from "./ImgItems";

// const data = [
//   [
//     { id: "lastOne" },
//     3,
//     [
//       {
//         id: 13,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg",
//       },
//       {
//         id: 14,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg",
//       },
//       {
//         id: 15,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg",
//       },
//       {
//         id: 16,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg",
//       },
//       {
//         id: 17,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg",
//       },
//       {
//         id: 18,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg",
//       },
//     ],
//   ],
//   [
//     {},
//     1,
//     [
//       {
//         id: 1,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg",
//       },
//       {
//         id: 2,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg",
//       },
//       {
//         id: 3,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg",
//       },
//       {
//         id: 4,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg",
//       },
//       {
//         id: 5,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg",
//       },
//       {
//         id: 6,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg",
//       },
//     ],
//   ],
//   [
//     {},
//     2,
//     [
//       {
//         id: 7,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg",
//       },
//       {
//         id: 8,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg",
//       },
//       {
//         id: 9,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg",
//       },
//       {
//         id: 10,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg",
//       },
//       {
//         id: 11,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg",
//       },
//       {
//         id: 12,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg",
//       },
//     ],
//   ],
//   [
//     {},
//     3,
//     [
//       {
//         id: 13,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg",
//       },
//       {
//         id: 14,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg",
//       },
//       {
//         id: 15,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg",
//       },
//       {
//         id: 16,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg",
//       },
//       {
//         id: 17,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg",
//       },
//       {
//         id: 18,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg",
//       },
//     ],
//   ],
//   [
//     { id: "firstOne" },
//     1,
//     [
//       {
//         id: 1,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg",
//       },
//       {
//         id: 2,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg",
//       },
//       {
//         id: 3,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg",
//       },
//       {
//         id: 4,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg",
//       },
//       {
//         id: 5,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg",
//       },
//       {
//         id: 6,
//         src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg",
//       },
//     ],
//   ],
// ];
export default function Slider(props) {
  const [classNameDot0, setClassNameDot0] = useState(
    "dotContainer__dot dotContainer__dot--active"
  );
  const [classNameDot1, setClassNameDot1] = useState("dotContainer__dot");
  const [classNameDot2, setClassNameDot2] = useState("dotContainer__dot");

  const [counter, setCounter] = useState(0);
  const [transition, setTransition] = useState("none");
  const [transform, setTransfrom] = useState("translateX(0px)");
  const [isSliding, setIsSliding] = useState(false);
  const [canShowLeftBtn, setCanShowLeftBtn] = useState(false);
  const [pointerEvents, setPointerEvents] = useState("auto");
  const [data, setData] = useState([
    [
      { groupId: "2" },
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
      { groupId: "2" },
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
      { groupId: "3" },
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
      { groupId: "firstOne" },
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
  ]);

  const left = "<";
  const right = ">";
  let rowRef = React.createRef();

  useEffect(
    function () {
      const size = rowRef.current.clientWidth;
      // if (canShowLeftBtn) {
      // setTransfrom("translateX(" + (-size * counter + 75) + "px)");
      // } else {
      setTransfrom("translateX(" + -size * counter + "px)");
      // }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [counter]
  );
  const haveLastInFirst = () => {
    if (data[0][0]["groupId"] !== "lastOne") {
      return false;
    }
    return true;
  };
  const addLastToFirst = () => {
    setData([
      [
        { groupId: "lastOne" },
        3,
        [
          {
            id: 13,
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg",
          },
          {
            id: 14,
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg",
          },
          {
            id: 15,
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg",
          },
          {
            id: 16,
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg",
          },
          {
            id: 17,
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg",
          },
          {
            id: 18,
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg",
          },
        ],
      ],
      ...data,
    ]);
  };
  const goLeft = () => {
    if (isSliding) return;
    setIsSliding(true);
    setPointerEvents("none");
    setTransition("transform 0.7s ease-in-out");
    setCounter(counter - 1);
  };
  const goRight = () => {
    if (isSliding) return;
    setIsSliding(true);
    setPointerEvents("none");
    setTransition("transform 2s ease-in-out");
    setCounter(counter + 1);
  };
  // const tryShowLeftBtn = () => {
  //   if (!canShowLeftBtn && haveLastInFirst()) {
  //     setCanShowLeftBtn(true);
  //     console.log("1" + 1);
  //   }
  // };
  const handleTransitionEnd = () => {
    console.log("isSliding" + isSliding);
    if (!isSliding) return;
    setIsSliding(false);
    setPointerEvents("auto");
    console.log(counter);
    // console.log(data[counter][1]);
    console.log("TransitionEnd");
    console.log('data[counter][0]["groupId"] ' + data[counter][0]["groupId"]);
    console.log("LastInFirst" + haveLastInFirst());
    if (!haveLastInFirst()) {
      setTransition("none");
      const size = rowRef.current.clientWidth;
      setTransfrom("translateX(" + -size * 2 + "px)");
      addLastToFirst();
      setCounter(2);
      setCanShowLeftBtn(true);
    }
    if (data[counter][0]["groupId"] === "lastOne") {
      setTransition("none");
      setCounter(data.length - 2);
    }
    if (data[counter][0]["groupId"] === "firstOne") {
      setTransition("none");
      setCounter(data.length - counter);
    }

    if (data[counter][1] === 1) {
      setClassNameDot0(" dotContainer__dot dotContainer__dot--active");
      setClassNameDot1(" dotContainer__dot");
      setClassNameDot2(" dotContainer__dot");
    } else if (data[counter][1] === 2) {
      setClassNameDot1(" dotContainer__dot dotContainer__dot--active");
      setClassNameDot0(" dotContainer__dot");
      setClassNameDot2(" dotContainer__dot");
    } else if (data[counter][1] === 3) {
      setClassNameDot2(" dotContainer__dot dotContainer__dot--active");
      setClassNameDot0(" dotContainer__dot");
      setClassNameDot1(" dotContainer__dot");
    }
  };

  const items = data.map((item) => {
    const groupId = item[0]["groupId"];

    return item[2].map((image) => (
      <ImgItems
        // key={item[0] + "" + image["id"]}
        key={groupId + "-" + image["id"]}
        // keyValue={groupId + "-" + image["id"]}
        pointerEvents={pointerEvents}
        src={image["src"]}
      />
    ));
  });

  return (
    <div className="contain">
      <div className="dotContainer">
        <div className={classNameDot0}></div>
        <div className={classNameDot1}></div>
        <div className={classNameDot2}></div>
      </div>
      {canShowLeftBtn && (
        <button className="btn btn__left" onClick={goLeft}>
          {left}
        </button>
      )}

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
          style={{
            transition,
            transform,
          }}
        >
          {items}
        </div>
      </div>
    </div>
  );
}
