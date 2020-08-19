import React from "react";
import "./imgComp.scss";
export default function ImgCom({ src1, src2, src3, src4, src5 }) {
  // export default function ImgCom(props) {
  return (
    <div className="imgContainer">
      <img src={src1} alt="slide-img" className="imgContainer__img" />
      <img src={src2} alt="slide-img" className="imgContainer__img" />
      <img src={src3} alt="slide-img" className="imgContainer__img" />
      <img src={src4} alt="slide-img" className="imgContainer__img" />
      <img src={src5} alt="slide-img" className="imgContainer__img" />
    </div>
    // <div className="tile">
    //   <div className="tile__media">
    //     <img
    //       className="tile__img"
    //       src={props.src}
    //       alt=""
    //     />
    //   </div>
    //   <div className="tile__details">
    //     <div className="tile__title">Top Gear</div>
    //   </div>
    // </div>
  );
}
