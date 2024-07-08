export const getRandomColor = (colors) => {
  if (colors.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  colors.splice(randomIndex, 1);
  return color;
};