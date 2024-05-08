import React from "react";
import { DataType } from "csstype";

export type Color = {
  // between 0 ~ 1
  r: number;
  g: number;
  b: number;
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
