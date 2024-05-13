import type { BlendModeExample } from "../../type";
import { eachColor } from "../eachColor";

function g(a: number): number {
  if (a <= 0.25) {
    return (16 * a - 12) * a + 4;
  } else {
    return Math.sqrt(a);
  }
}
export const SoftLight: BlendModeExample = {
  logic: ({ base, target }) => {
    return eachColor(base, target, (v1, v2) => {
      if (v2 <= 0.5) {
        return v1 - (1 - 2 * v2) * v1 * (1 - v1);
      } else {
        return v1 + (2 * v2 - 1) * (g(v1) - v1);
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
        IF v1 &gt; 0.5
        <br />
        Then 2 * v1 * v2
        <br />
        Else 1 - 2 * (1 - v1) * (1 - v2)
      </>
    ),
  },
};
