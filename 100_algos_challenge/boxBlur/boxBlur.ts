// FIRST GO
function boxBlur(image: number[][]): number[][] {
  const [first, second, third] = image;
  const pixels = first.concat(second, third);
  const sum = pixels.reduce((acc, pixel) => acc + pixel);
  const floored_avg = Math.floor(sum / 9);
  return [[floored_avg]];
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
