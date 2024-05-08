import type { BlendModeExample } from "../../type";
import { eachColor } from "../eachColor";

export const Screen: BlendModeExample = {
  logic: ({ base, target }) => {
    return eachColor(base, target, (v1, v2) => 1 - (1 - v1) * (1 - v2));
  },
  example: [
    [1, 0, 1],
    [1, 0.5, 0],
  ],
  view: {
    expression: ({ v1, v2 }) => (
      <>
        1 - (1 - {v1}) x (1 - {v2}) = {1 - (1 - v1) * (1 - v2)}
      </>
    ),
  },
};
