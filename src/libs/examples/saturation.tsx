import type { BlendModeExample } from "../../type";
import { rgb2hsl } from "../hsl";

export const Saturation: BlendModeExample = {
  logic: ({ base, target }) => {
    const baseHSL = rgb2hsl(base);
    const targetHSL = rgb2hsl(target);
    return {
      ...baseHSL,
      s: targetHSL.s,
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
