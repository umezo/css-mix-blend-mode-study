import type { BlendModeExample } from "../../type";
import { rgb2hsl } from "../hsl";

export const Hue: BlendModeExample = {
  logic: ({ base, target }) => {
    const [, baseS, baseL] = rgb2hsl(base);
    const [targetH] = rgb2hsl(target);
    return {
      type: "hsl",
      h: targetH,
      s: baseS,
      l: baseL,
    };
  },
  example: [
    [1, 0, 1],
    [1, 0.5, 0],
  ],
  view: {
    expression: () => <></>,
  },
};
