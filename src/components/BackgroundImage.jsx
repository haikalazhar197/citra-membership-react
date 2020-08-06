import React from "react";

// import { Image } from "react-bootstrap";

const BackgroundImage = ({ imgSource = "", imgStyle = {} }) => {
  const backgroundStyle = {
    ...imgStyle,
    background: `url(${imgSource})`,
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "-1",
  };

  //   const maskStyle = {
  //     height: "100%",
  //     backgoundColor: "rgba(0, 0, 0, 0.5)",
  //   };

  return (
    <div style={backgroundStyle}>
      <div className="mask"></div>
    </div>
  );
};

export default BackgroundImage;
