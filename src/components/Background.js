import React from "react";
import imageHills from "../assets/launch-countdown-timer-main/images/pattern-hills.svg";
import imageStars from "../assets/launch-countdown-timer-main/images/bg-stars.svg";

export default function Background() {
  return (
    <>
      <div
        className="z-3"
        style={{
          backgroundImage: `url(${imageStars})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          height: "100vh",
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${imageHills})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          height: "300px",
        }}
      ></div>
    </>
  );
}
