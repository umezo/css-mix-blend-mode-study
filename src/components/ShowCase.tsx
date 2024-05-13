import React from "react";
import { useStyle } from "../hooks/useStyle";
import type { BlendMode, BlendModeExample, Color } from "../type";
import { ColorCard } from "./ColorCard";
import { RGB } from "./RGB";

const ColorExample: React.FC<{
  c1: Color;
  c2: Color;
  blendMode: BlendMode;
  logic: BlendModeExample["logic"];
}> = ({ c1, c2, blendMode, logic }) => {
  const result = React.useMemo(() => {
    return logic({ base: c1, target: c2 });
  }, [c1, c2, logic]);
  const resultColorType = result.type;
  const resultStyle = useStyle(result);
  return (
    <div className="example-show-case">
      <ColorCard color={c1} colorSpace={resultColorType} />
      <ColorCard color={c2} colorSpace={resultColorType} />
      <div className="color-result">
        <ColorCard color={c1}>
          <ColorCard color={c2} style={{ mixBlendMode: blendMode }}>
            {null}
          </ColorCard>
        </ColorCard>
      </div>
      <div>
        <RGB color={result} colorSpace={resultColorType} />
        <div
          style={{
            ...resultStyle,
            height: "20px",
          }}
        />
      </div>
    </div>
  );
};

const LogicExpression: React.FC<{
  c1: Color;
  c2: Color;
  expression: BlendModeExample["view"]["expression"];
}> = ({ c1, c2, expression: Expression }) => {
  const keys = ["r", "g", "b"] as const;
  return (
    <div>
      {keys.map((key) => (
        <div className="expression" key={key}>
          <div className="expression-label">{key.toUpperCase()}:</div>
          <div>
            <Expression v1={c1[key]} v2={c2[key]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const ShowCase: React.FC<{
  blendMode: BlendMode;
  example: BlendModeExample;
}> = (props) => {
  const { blendMode, example } = props;
  const { example: colors, logic, view } = example;
  const { expression } = view;

  const [baseColor, color] = React.useMemo(() => {
    return colors.map((c) => ({
      r: c[0],
      g: c[1],
      b: c[2],
    })) as [Color, Color];
  }, [colors]);

  const expressions = React.useMemo(() => {
    if (Array.isArray(expression)) {
      return expression;
    } else {
      return [expression];
    }
  }, [expression]);

  return (
    <div>
      <div>
        <ColorExample
          c1={baseColor}
          c2={color}
          blendMode={blendMode}
          logic={logic}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <ColorExample
          c2={baseColor}
          c1={color}
          blendMode={blendMode}
          logic={logic}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        {expressions.map((Expression, index) => {
          return (
            <div key={index}>
              {index > 0 ? (
                <div style={{ margin: "10px 0", fontSize: "12px" }}>OR</div>
              ) : null}
              <LogicExpression
                c1={baseColor}
                c2={color}
                expression={Expression}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
