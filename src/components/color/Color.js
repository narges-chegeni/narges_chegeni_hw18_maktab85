import { useState } from "react";

export default function Color() {
  const [colors, setColors] = useState([]);

  function addColorFunction() {
    let newColor = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    newColor = `(${newColor[0]},${newColor[1]},${newColor[2]})`;
    setColors([...colors, newColor]);
    console.log(colors);
  }

  return (
    <div>
      <button className="addColor" onClick={addColorFunction}>
        Add color
      </button>
      {colors.map((color) => {
        return (
          <div key={color}>
            <div
              className="bgColor"
              style={{
                backgroundColor: `rgb${color}`,
                width: "100px",
                height: "50px",
              }}
            ></div>
            <span>rgb{color}</span>
          </div>
        );
      })}
    </div>
  );
}
