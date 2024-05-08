import { BlendMode, ExpressionComponent } from "../type";

const views: Record<Exclude<BlendMode, "overlay">, ExpressionComponent> = {
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
} as const;

export const logicViews: Record<
  BlendMode,
  ExpressionComponent | ExpressionComponent[]
> = {
  ...views,
  overlay: [views.multiply, views.screen],
};
