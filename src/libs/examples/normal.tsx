import type { BlendModeExample } from "../../type";
import { eachColor } from "../eachColor";

export const Normal: BlendModeExample = {
  logic: ({ base, target }) => {
    return eachColor(base, target, (_, v2) => v2);
  },
  example: [
    [1, 1, 0],
    [1, 0, 1],
  ],
  view: {
    expression: ({ v2 }) => <>{v2}</>,
  },
};
