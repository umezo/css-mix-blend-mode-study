import React from "react";
import { Color } from "../type";
export const RGB: React.FC<{ color: Color }> = ({ color: { r, g, b } }) => (
  <>
    R: {r}
    <br />
    G: {g}
    <br />
    B: {b}
  </>
);
