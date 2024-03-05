import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
  }

  const removeValue = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter = {count}</h1>
      <button onClick={addValue}> + </button>
      <button onClick={removeValue}> - </button>
    </div>
  );
}

export default App;