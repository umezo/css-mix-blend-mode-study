import { BlendMode, Color } from "../type";
import { rgb2hsl } from "./hsl";

type ColorLogic = (props: { base: Color; target: Color }) => Color;

type Logics = Record<BlendMode, ColorLogic>;

const each = (
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

export const logics: Logics = {
  multiply: ({ base, target }) => {
    return each(base, target, (v1, v2) => v1 * v2);
  },
  screen: ({ base, target }) => {
    return each(base, target, (v1, v2) => 1 - (1 - v1) * (1 - v2));
  },
  darken: ({ base, target }) => {
    return each(base, target, (v1, v2) => Math.min(v1, v2));
  },
  lighten: ({ base, target }) => {
    return each(base, target, (v1, v2) => Math.max(v1, v2));
  },
  overlay: ({ base, target }) => {
    return each(base, target, (v1, v2) =>
      v1 <= v2 ? v1 * v2 : 1 - (1 - v1) * (1 - v2)
    );
  },
  "color-dodge": ({ base, target }) => {
    return each(base, target, (v1, v2) => v1 / (1 - v2));
  },
};
