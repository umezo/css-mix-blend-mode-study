import React from "react";
import type { Color } from "../type";
const normalizeColor = (value: Color): [number, number, number] => {
  if (value.type !== "hsl") {
    return [value.r * 255, value.g * 255, value.b * 255];
  } else {
    return [value.h, value.s, value.l];
  }
};
export const useStyle = (color: Color): React.HTMLAttributes<any>["style"] => {
  return React.useMemo(() => {
    if (color.type === "hsl") {
      return {
        background: `hsl(${color.h} ${color.s}% ${color.l}%)`,
      };
    }

    const [r, g, b] = normalizeColor(color);
    return {
      background: `rgb(${r}, ${g}, ${b})`,
    };
  }, [color]);
};
