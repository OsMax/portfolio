export const randomPosition = (containerWidth, containerHeight, totalItems) => {
  const radius = containerWidth / 3;
  const centerX = containerWidth / 2.5;
  const centerY = containerHeight - 130;
  const segmentAngle = Math.PI / totalItems; // Угол одного сегмента
  const positions = [];

  for (let i = 0; i < totalItems; i++) {
    // Генерация случайного угла внутри сегмента
    const angle = segmentAngle * i + Math.random() * segmentAngle;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    positions.push({ top: y, left: x });
  }

  return positions;
};
