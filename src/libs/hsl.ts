import type { Color } from "../type";
import space from "color-space";

export function rgb2hsl(color: Color) {
  const { r, g, b } = color;
  const [h, s, l] = space.rgb.hsl([r * 255, g * 255, b * 255]);
  console.log(color, space.rgb.hsl([r * 255, g * 255, b * 255]));

  return [
    // 0 - 360deg
    h,
    // 0 - 100%
    s,
    l,
  ];
}

export function hsl2rgb(h: number, s: number, l: number): Color {
  const [r, g, b] = space.hsl.rgb([h, s, l]);
  return { r: r / 255, g: g / 255, b: b / 255 };
}
