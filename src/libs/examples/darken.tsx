import type { BlendModeExample } from "../../type";
import { eachColor } from "../eachColor";

export const Darken: BlendModeExample = {
  logic: ({ base, target }) => {
    return eachColor(base, target, (v1, v2) => Math.min(v1, v2));
  },
  example: [
    [0, 1, 1],
    [0.8, 0, 0.8],
  ],
  view: {
    expression: ({ v1, v2 }) => (
      <>
        Math.min({v1}, {v2}) = {Math.min(v1, v2)}
      </>
    ),
  },
};
