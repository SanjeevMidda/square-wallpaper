import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [rotation, setRotation] = useState(0);
  const [color, setColor] = useState("");

  let rotate = () => {
    setRotation(rotation + 90);
  };

  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  // let newColor = () => {
  //   setColor(`rgb(${randomColor}, ${randomColor}, ${randomColor})`);
  // };

  useEffect(() => {
    setColor(`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
  }, [rotation]);

  return (
    <div className="App">
      <div
        className="square"
        onClick={rotate}
        style={{ transform: `rotate(${rotation}deg)`, backgroundColor: color }}
      >
        <h4>G</h4>
      </div>
    </div>
  );
}

export default App;
