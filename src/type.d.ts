import React from "react";
import { DataType } from "csstype";

export type Color =
  | {
      type: undefined | "rgb";
      // between 0 ~ 1
      r: number;
      g: number;
      b: number;
    }
  | {
      type: "hsl";
      h: number; // 0-360 deg
      s: number; // 0-100 %
      l: number; // 0-100 %
    };

export type ExpressionComponent = React.FC<{ v1: number; v2: number }>;

export type BlendMode = DataType.BlendMode;

type ColorLogic = (props: { base: Color; target: Color }) => Color;
type SpreadColor = [Color["r"], Color["g"], Color["b"]];
export type BlendModeExample = {
  logic: ColorLogic;
  example: [SpreadColor, SpreadColor];
  view: {
    expression: ExpressionComponent;
  };
};
