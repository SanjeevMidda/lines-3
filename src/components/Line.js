import React, { useEffect, useState } from "react";

const Line = () => {
  let randomWidth = () => {
    return Math.floor(Math.random() * 1000);
  };

  let randomColorValue = () => {
    let colorOne = Math.floor(Math.random() * 255);
    let colorTwo = Math.floor(Math.random() * 255);
    let colorThree = Math.floor(Math.random() * 255);

    return {
      red: colorOne,
      green: colorTwo,
      blue: colorThree,
    };
  };

  const [counter, setCounter] = useState(0);
  const [width, setWidth] = useState(randomWidth());
  const [colors, setColors] = useState(randomColorValue());

  let lineStyles = {
    width: width,
    height: "2px",
    // background: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
    background: "white",
  };

  useEffect(() => {
    setInterval(() => {
      setWidth(randomWidth);
      setColors(randomColorValue());
    }, 1000);
  }, []);

  return <div style={lineStyles}></div>;
};

export default Line;
