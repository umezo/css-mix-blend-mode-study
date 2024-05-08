import type { BlendModeExample } from "../../type";
import { eachColor } from "../eachColor";

export const ColorDodge: BlendModeExample = {
  logic: ({ base, target }) => {
    return eachColor(base, target, (v1, v2) => v1 / (1 - v2));
  },
  example: [
    [0.8, 0.9, 0.6],
    [0.8, 0.3, 0.2],
  ],
  view: {
    expression: ({ v1, v2 }) => (
      <>
        {v1} / (1 - {v2}) = {v1 / (1 - v2)}
      </>
    ),
  },
};
