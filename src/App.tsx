import "./App.css";
import { ShowCase } from "./components/ShowCase";
import { examples } from "./libs/examples";

export default function App() {
  const keys = Object.keys(examples) as (keyof typeof examples)[];
  return (
    <div className="App">
      <ul className="example-list">
        {keys.map((blendMode) => {
          return (
            <li key={blendMode}>
              <div className="example">
                <h2>{blendMode}</h2>
                <ShowCase blendMode={blendMode} example={examples[blendMode]} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
