import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("purple");
  return (
    <div>
      Hello
      <div style={{width: 100, height: 100, backgroundColor: color}}></div>
      <div>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>
  );
}

export default App;