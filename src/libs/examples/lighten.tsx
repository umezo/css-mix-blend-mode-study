import type { BlendModeExample } from "../../type";
import { eachColor } from "../eachColor";

export const Lighten: BlendModeExample = {
  logic: ({ base, target }) => {
    return eachColor(base, target, (v1, v2) => Math.max(v1, v2));
  },
  example: [
    [0.2, 0.3, 0.9],
    [0.4, 0.2, 0.4],
  ],
  view: {
    expression: ({ v1, v2 }) => (
      <>
        Math.max({v1}, {v2}) = {Math.max(v1, v2)}
      </>
    ),
  },
};
