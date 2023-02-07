import "./App.css";
import Color from "./components/color/Color";
import Q2Color from "./components/q2-color/Q2-color";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <Color />
      <hr />
      <Q2Color />
      <hr />
      <Form />
    </div>
  );
}

export default App;
