import type { Color } from "../type";
import { useStyle } from "../hooks/useStyle";
import { RGB } from "./RGB";

export const ColorCard: React.FC<{
  color: Color;
  style?: React.HTMLAttributes<any>["style"];
  children?: React.ReactNode;
  colorSpace?: Color["type"];
}> = ({ color, style = {}, children, colorSpace }) => {
  const colorStyle = useStyle(color);
  return (
    <div className="color" style={{ ...style, ...colorStyle }}>
      {children === undefined ? (
        <RGB color={color} colorSpace={colorSpace} />
      ) : (
        children
      )}
    </div>
  );
};
