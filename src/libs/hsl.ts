import type { Color } from "../type";
import space from "color-space";

type ColorHSL = Exclude<Color, { type: "rgb" } | { type: undefined }>;
type ColorRGB = Exclude<Color, ColorHSL>;

export function rgb2hsl(color: Color): ColorHSL {
  if (color.type === "hsl") {
    return color;
  }
  const { r, g, b } = color;
  const [h, s, l] = space.rgb.hsl([r * 255, g * 255, b * 255]);
  console.log(color, space.rgb.hsl([r * 255, g * 255, b * 255]));

  return {
    type: "hsl",

    // 0 - 360deg
    h,
    // 0 - 100%
    s,
    l,
  };
}

export function hsl2rgb(color: Color): ColorRGB {
  if (color.type !== "hsl") {
    return color;
  }
  const { h, s, l } = color;
  const [r, g, b] = space.hsl.rgb([h, s, l]);
  return { type: "rgb", r: r / 255, g: g / 255, b: b / 255 };
}
