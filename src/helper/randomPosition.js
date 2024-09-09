export const randomPosition = (
  containerWidth,
  containerHeight,
  index,
  totalItems
) => {
  const radius = containerWidth / 3; // Радиус равен половине ширины контейнера
  const centerX = containerWidth / 3; // X-координата центра
  const centerY = containerHeight; // Y-координата центра (внизу контейнера)

  // Генерация случайного угла от 0 до π (нижняя полуокружность)
  const angle = Math.random() * Math.PI;

  // Вычисление координат на основе угла и радиуса
  const x = centerX + radius * Math.cos(angle);
  const y = centerY - radius * Math.sin(angle); // Вычитаем, чтобы разместить по нижней части

  return { top: y, left: x };
};
