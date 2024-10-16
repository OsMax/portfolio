const RandomSquare = () => {
  //   const width = window.innerWidth;
  const height = window.innerHeight;

  const totalItems = height / 300;
  const positions = [];

  for (let i = 0; i < totalItems; i++) {
    const size = Math.floor(Math.random() * (height / 20)) + 50;

    const x = Math.floor(Math.random() * size - size / 2 + 25);
    const y = Math.floor(Math.random() * (height - 100) + 50);
    positions.push({ top: y, left: -x, size });
  }

  return (
    <>
      {positions.map((item) => {
        return (
          <div
            key={`item ${item.top + item.left}`}
            style={{
              position: "absolute",
              border: "1px solid #888",
              width: item.size,
              height: item.size,
              top: item.top,
              left: item.left,
              zIndex: 1,
            }}
          ></div>
        );
      })}
    </>
  );
};

export default RandomSquare;
