import React from "react";
import type { Color } from "../type";
const normalizeColor = (value: Color): [number, number, number] => {
  return [value.r * 255, value.g * 255, value.b * 255];
};
export const useStyle = (color: Color): React.HTMLAttributes<any>["style"] => {
  return React.useMemo(() => {
    const [r, g, b] = normalizeColor(color);
    return {
      background: `rgb(${r}, ${g}, ${b})`,
    };
  }, [color]);
};
