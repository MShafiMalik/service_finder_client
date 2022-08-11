import React from "react";
import { Circles } from "react-loader-spinner";
const SplashScreen = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          overflow: "show",
          margin: "auto",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "50px",
          height: "50px",
        }}
      >
        <Circles color="#00BFFF" height={80} width={80} />
      </div>
    </>
  );
};

export default SplashScreen;
