import type { BlendModeExample } from "../../type";
import { eachColor } from "../eachColor";

export const Overlay: BlendModeExample = {
  logic: ({ base, target }) => {
    return eachColor(base, target, (v1, v2) => {
      if (v1 < 0.5) {
        return 2 * v1 * v2;
      } else {
        return 1 - 2 * (1 - v1) * (1 - v2);
      }
    });
  },
  example: [
    [0.8, 0.9, 0.6],
    [0.8, 0.3, 0.2],
  ],
  view: {
    expression: () => (
      <>
        IF v1 &lt; 0.5
        <br />
        Then 2 * v1 * v2
        <br />
        Else 1 - 2 * (1 - v1) * (1 - v2)
      </>
    ),
  },
};
