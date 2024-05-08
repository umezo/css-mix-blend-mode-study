import { BlendMode, ExpressionComponent } from "../type";

const views: Record<Exclude<BlendMode, "overlay">, ExpressionComponent> = {
  normal: ({ v2 }) => <>{v2}</>,
  multiply: ({ v1, v2 }) => (
    <>
      {v1} x {v2} = {v1 * v2}
    </>
  ),
  screen: ({ v1, v2 }) => (
    <>
      1 - (1 - {v1}) x (1 - {v2}) = {1 - (1 - v1) * (1 - v2)}
    </>
  ),
  darken: ({ v1, v2 }) => (
    <>
      Math.min({v1}, {v2}) = {Math.min(v1, v2)}
    </>
  ),
  lighten: ({ v1, v2 }) => (
    <>
      Math.max({v1}, {v2}) = {Math.max(v1, v2)}
    </>
  ),
  "color-dodge": ({ v1, v2 }) => (
    <>
      {v1} / (1 - {v2}) = {v1 / (1 - v2)}
    </>
  ),
  //
  "color-burn": ({ v1 }) => <>{v1}</>,
  "hard-light": ({ v1 }) => <>{v1}</>,
  "soft-light": ({ v1 }) => <>{v1}</>,
  difference: ({ v1 }) => <>{v1}</>,
  exclusion: ({ v1 }) => <>{v1}</>,
  hue: ({ v1 }) => <>{v1}</>,
  saturation: ({ v1 }) => <>{v1}</>,
  color: ({ v1 }) => <>{v1}</>,
} as const;

export const logicViews: Record<
  BlendMode,
  ExpressionComponent | ExpressionComponent[]
> = {
  ...views,
  overlay: [views.multiply, views.screen],
};
