import React from "react";
import { Color } from "../type";
export const RGB: React.FC<{ color: Color }> = ({ color }) => {
  if (color.type === "hsl") {
    const { h, s, l } = color;
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
    const { r, g, b } = color;
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
