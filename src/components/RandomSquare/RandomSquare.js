const RandomSquare = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  console.log(width, height);
  return (
    <>
      <div
        style={{
          position: "absolute",
          border: "1px solid #888",
          width: 50,
          height: 50,
          bottom: -100,
          left: -25,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          border: "1px solid #888",
          width: 50,
          height: 50,
          bottom: -100,
          right: -25,
        }}
      ></div>
    </>
  );
};

export default RandomSquare;
