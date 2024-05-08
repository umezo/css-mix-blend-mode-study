//https://github.com/JuhQ/rgb-to-hsl/blob/master/index.js
export function rgb2hsl(r: number, g: number, b: number) {
  let d, h, l, s;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  h = 0;
  s = 0;
  l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  h = h * 360;
  s = s * 100;
  l = l * 100;
  return [h, s, l];
}
