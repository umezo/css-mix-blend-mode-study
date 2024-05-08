import { BlendMode, Color } from "../type";

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

/**
 * https://developer.mozilla.org/ja/docs/Web/CSS/mix-blend-mode
 * https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AC%E3%83%B3%E3%83%89%E3%83%A2%E3%83%BC%E3%83%89
 */
export const logics: Logics = {
  normal: ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
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
  //
  "color-burn": ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
  "hard-light": ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
  "soft-light": ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
  difference: ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
  exclusion: ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
  hue: ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
  saturation: ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
  color: ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
  luminosity: ({ base, target }) => {
    return each(base, target, (v1) => v1);
  },
};
