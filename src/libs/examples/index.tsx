import { ColorDodge } from "./color-dodge";
import { Darken } from "./darken";
import { Lighten } from "./lighten";
import { Multiply } from "./multiply";
import { Normal } from "./normal";
import { Screen } from "./screen";

/**
 * https://developer.mozilla.org/ja/docs/Web/CSS/mix-blend-mode
 * https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AC%E3%83%B3%E3%83%89%E3%83%A2%E3%83%BC%E3%83%89
 */
export const examples = {
  normal: Normal,
  multiply: Multiply,
  screen: Screen,
  darken: Darken,
  lighten: Lighten,
  "color-dodge": ColorDodge,
};
