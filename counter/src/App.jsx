import { useState } from "react";
import "./App.css";

function App() {
  //use of hooks
  let [counter, setCounter] = useState(25);

  //let counter = 25;

  const addValue = () => {
    // counter = counter + 1;
    if (counter < 30) setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1> Hello React!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
