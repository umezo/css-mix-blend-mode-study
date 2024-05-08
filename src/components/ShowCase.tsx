import React from "react";
import { useStyle } from "../hooks/useStyle";
import { logics } from "../libs/logics";
import type { BlendMode, Color, ExpressionComponent } from "../type";
import { ColorCard } from "./ColorCard";
import { logicViews } from "./expressions";
import { RGB } from "./RGB";

const ColorExample: React.FC<{
  c1: Color;
  c2: Color;
  blendMode: BlendMode;
}> = ({ c1, c2, blendMode }) => {
  const result = React.useMemo(() => {
    const logic = logics[blendMode];
    return logic({ base: c1, target: c2 });
  }, [blendMode, c1, c2]);
  const resultStyle = useStyle(result);
  return (
    <div className="example-show-case">
      <ColorCard color={c1} />
      <ColorCard color={c2} />
      <div className="color-result">
        <ColorCard color={c1}>
          <ColorCard color={c2} style={{ mixBlendMode: blendMode }}>
            {null}
          </ColorCard>
        </ColorCard>
      </div>
      <div>
        <RGB color={result} />
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
  expression: ExpressionComponent;
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
  colors: [Color, Color];
}> = (props) => {
  const { blendMode, colors } = props;

  const [baseColor, color] = colors;

  const expressions = React.useMemo(() => {
    const expression = logicViews[blendMode];
    if (expression === undefined) {
      return [];
    }

    if (Array.isArray(expression)) {
      return expression;
    } else {
      return [expression];
    }
  }, [blendMode]);

  return (
    <div>
      <div>
        <ColorExample c1={baseColor} c2={color} blendMode={blendMode} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <ColorExample c2={baseColor} c1={color} blendMode={blendMode} />
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
