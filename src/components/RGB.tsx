import React from "react";
import { Color } from "../type";
import { hsl2rgb, rgb2hsl } from "../libs/hsl";
export const RGB: React.FC<{ color: Color; colorSpace?: Color["type"] }> = ({
  color,
  colorSpace,
}) => {
  const cs = colorSpace ?? color.type;
  if (cs === "hsl") {
    const { h, s, l } = color.type === "hsl" ? color : rgb2hsl(color);
    return (
      <>
        H: {h}deg
        <br />
        S: {s}%
        <br />
        L: {l}%
      </>
    );
  } else {
    const { r, g, b } = color.type === "hsl" ? hsl2rgb(color) : color;
    return (
      <>
        R: {r}
        <br />
        G: {g}
        <br />
        B: {b}
      </>
    );
  }
};
