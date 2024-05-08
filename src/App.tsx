import "./App.css";
import { ShowCase } from "./components/ShowCase";
import { Color, BlendMode } from "./type";

export default function App() {
  type SpreadColor = [Color["r"], Color["g"], Color["b"]];
  const examples: Partial<Record<BlendMode, [SpreadColor, SpreadColor]>> = {
    normal: [
      [1, 1, 0],
      [1, 0, 1],
    ],
    multiply: [
      [1, 0, 1],
      [1, 0.5, 0],
    ],
    screen: [
      [1, 0, 1],
      [1, 0.5, 0],
    ],
    overlay: [
      [0.7, 0.3, 0.7],
      [0, 0.7, 0],
    ],
    darken: [
      [0, 1, 1],
      [0.8, 0, 0.8],
    ],
    lighten: [
      [0.2, 0.3, 0.9],
      [0.4, 0.2, 0.4],
    ],
    "color-dodge": [
      [0.8, 0.9, 0.6],
      [0.8, 0.3, 0.2],
    ],

    "color-burn": [
      [1, 1, 0],
      [1, 0, 1],
    ],
    "hard-light": [
      [1, 1, 0],
      [1, 0, 1],
    ],
    "soft-light": [
      [1, 1, 0],
      [1, 0, 1],
    ],
    difference: [
      [1, 1, 0],
      [1, 0, 1],
    ],
    exclusion: [
      [1, 1, 0],
      [1, 0, 1],
    ],
    hue: [
      [1, 1, 0],
      [1, 0, 1],
    ],
    saturation: [
      [1, 1, 0],
      [1, 0, 1],
    ],
    color: [
      [1, 1, 0],
      [1, 0, 1],
    ],
    luminosity: [
      [1, 1, 0],
      [1, 0, 1],
    ],
  };
  const keys = Object.keys(examples) as (keyof typeof examples)[];
  return (
    <div className="App">
      <ul className="example-list">
        {keys.map((blendMode) => {
          const colors = examples[blendMode];

          if (colors === undefined) {
            return null;
          }

          const colorsProp = colors.map((c) => ({
            r: c[0],
            g: c[1],
            b: c[2],
          })) as [Color, Color];

          return (
            <li key={blendMode}>
              <div className="example">
                <h2>{blendMode}</h2>
                <ShowCase blendMode={blendMode} colors={colorsProp} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
