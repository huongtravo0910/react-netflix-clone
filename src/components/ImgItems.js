import React from "react";
import "./imgItem.scss";

export default function ImgItems(props) {
  // console.log('props.key' + props.keyValue)
  return (
    <div className="tile" style={{ pointerEvents: props.pointerEvents }}>
      <div className="tile__media">
        <img className="tile__img" src={props.src} alt="" />
      </div>
      <div className="tile__details">
        <div className="tile__title">Top Gear</div>
      </div>
    </div>
  );
}
