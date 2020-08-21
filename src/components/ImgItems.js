import React from "react";
import "./imgItem.scss";

export default function ImgItems(props) {
  // const { isDetailedPane } = props;
  // const [tile, setTile] = useState("tile");
  // if (isDetailedPane) {
  //   setTile("tile1");
  // }
  return (
    <>
      <div className={props.tile} onClick={() => props.handleClick(props.id)}>
        <div className="tile__media">
          <img className="tile__img" src={props.src} alt="" />
        </div>
        <div className="tile__details">
          <div className="tile__title">Top Gear</div>
        </div>
      </div>
    </>
  );
}
