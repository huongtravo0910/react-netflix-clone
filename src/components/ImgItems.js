import React from "react";
import "./imgItem.scss";

export default function ImgItems(props) {
  return (
    <div className="tile">
      <div className="tile__media">
        <img
          className="tile__img"
          src={props.src}
          alt=""
        />
      </div>
      <div className="tile__details">
        <div className="tile__title">Top Gear</div>
      </div>
    </div>
  );
}
