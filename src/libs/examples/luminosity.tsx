import type { BlendModeExample } from "../../type";
import { rgb2hsl } from "../hsl";

export const Luminosity: BlendModeExample = {
  logic: ({ base, target }) => {
    const baseHSL = rgb2hsl(base);
    const targetHSL = rgb2hsl(target);
    return {
      ...baseHSL,
      l: targetHSL.l,
    };
  },
  example: [
    [0.5, 0, 1],
    [0.5, 0.5, 0.5],
  ],
  view: {
    expression: () => <></>,
  },
};
