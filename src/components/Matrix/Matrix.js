import React, { useRef, useEffect, useLayoutEffect, useState } from "react";

const Matrix = ({ containerRef }) => {
  const canvasRef = useRef(null);
  // const width = window.innerWidth + 20;
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth + 20);
  // let height = window.innerHeight;
  let yPositions = Array(2000)
    .join(0)
    .split("")
    .map(() => 0);

  useLayoutEffect(() => {
    const getSize = () => {
      if (containerRef.current) {
        setHeight(containerRef.current.offsetHeight);
        setWidth(containerRef.current.offsetWidth + 20);
      }
    };

    getSize();
    setTimeout(getSize, 300);

    const resizeObserver = new ResizeObserver(getSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [containerRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const matrix = canvas.getContext("2d");

    const draw = () => {
      matrix.fillStyle = "rgba(40, 44, 51, 0.1)";
      matrix.fillRect(0, 0, width, height);
      matrix.fillStyle = "#242";
      matrix.font = "20px Georgia";

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(1e2 + Math.random() * 33);
        const x = index * 10 + 10;
        matrix.fillText(text, x, y);

        if (y > height - 500 + Math.random() * 1e4) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 10;
        }
      });
    };

    const interval = setInterval(draw, 70);

    return () => clearInterval(interval);
  }, [width, height, yPositions]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        left: -10,
        zIndex: -1,
      }}
    >
      Sorry, your browser doesn't support the canvas element.
    </canvas>
  );
};
export default Matrix;
