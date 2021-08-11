import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://skidkimira.ru/images/discount/15058c05-100c-40cd-bc58-35b337019c6c.jpg",
  "https://pbs.twimg.com/media/Ed7k41DX0AALYjH.jpg",
  "https://sun9-36.userapi.com/c836620/v836620196/695e/c4KPs4PEdc8.jpg",
];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div
            style={{
              background: `url(${slideImages[0]}) no-repeat center `,
              width: "100%",
              height: "70vh",
              backgroundSize: "contein",
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              background: `url(${slideImages[1]}) no-repeat center`,
              width: "100%",
              height: "70vh",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              background: `url(${slideImages[2]}) no-repeat center`,
              width: "100%",
              height: "70vh",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
};

export default SlideShow;
