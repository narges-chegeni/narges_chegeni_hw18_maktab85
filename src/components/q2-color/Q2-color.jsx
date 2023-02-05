import { useState } from "react";

export default function Q2Color() {
  const [color, setColor] = useState("(200,200,100)");
  let sepColor = color;
  sepColor = sepColor.slice(1, -1);
  sepColor = sepColor.split(",");

  return (
    <div className="q2">
      red
      <button
        onClick={() => {
          if (+sepColor[0] < 250) {
            setColor(`(${+sepColor[0] + 5},${sepColor[1]},${sepColor[2]})`);
            console.log(color);
          }
        }}
      >
        increase red
      </button>
      <button
        onClick={() => {
          if (+sepColor[0] > 5) {
            setColor(`(${+sepColor[0] - 5},${sepColor[1]},${sepColor[2]})`);
            console.log(color);
          }
        }}
      >
        decrease red
      </button>
      green
      <button
        onClick={() => {
          if (+sepColor[1] < 250) {
            setColor(`(${sepColor[0]},${+sepColor[1] + 5},${sepColor[2]})`);
            console.log(color);
          }
        }}
      >
        increase green
      </button>
      <button
        onClick={() => {
          if (+sepColor[1] < 5) {
            setColor(`(${sepColor[0]},${+sepColor[1] - 5},${sepColor[2]})`);
            console.log(color);
          }
        }}
      >
        decrease green
      </button>
      blue
      <button
        onClick={() => {
          if (+sepColor[2] < 250) {
            setColor(`(${sepColor[0]},${sepColor[1]},${+sepColor[2] + 5})`);
            console.log(color);
          }
        }}
      >
        increase blue
      </button>
      <button
        onClick={() => {
          if (+sepColor[2] > 5) {
            setColor(`(${sepColor[0]},${sepColor[1]},${+sepColor[2] - 5})`);
            console.log(color);
          }
        }}
      >
        decrease blue
      </button>
      <div
        style={{
          backgroundColor: `rgb${color}`,
          width: "100px",
          height: "100px",
        }}
      ></div>
    </div>
  );
}
