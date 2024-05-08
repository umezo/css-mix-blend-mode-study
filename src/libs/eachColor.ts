import type { Color } from "../type";

export const eachColor = (
  c1: Color,
  c2: Color,
  callback: (a: number, b: number) => number
): Color => {
  return {
    r: callback(c1.r, c2.r),
    g: callback(c1.g, c2.g),
    b: callback(c1.b, c2.b),
  };
};
