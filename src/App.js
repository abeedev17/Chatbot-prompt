import React, { useState, useEffect, useRef, useCallback } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [characters, setCharacters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numbers) str += "0123456789";
    if (characters) str += "~`@#$%^&*_<>/?";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, characters, numbers, setPassword]);

  useEffect(() => {
    passGen();
  }, [length, characters, numbers, setPassword]);

  const copy = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password]);

  return (
    <div>
      <div>
        <input type="text" name="password" id="password" placeholder="Password" defaultValue={password} readOnly ref={passwordRef}/>
        <button onClick={copy}>Copy</button>
      </div>
      <div>
        <input type="range" name="length" id="length" min="8" max="100" value={length} onChange={(e) => setLength(e.target.value)}/>
        <span>Length: {length}</span>
        <input type="checkbox" name="" id="characterInput" defaultChecked={characters} onChange={() => {
          setCharacters((prev) => !prev)
        }}/>
        <label htmlFor="characterInput">Character: </label>
        <input type="checkbox" name="" id="numberInput" defaultChecked={numbers} onChange={() => {
          setNumbers((prev) => !prev)
        }} />
        <label htmlFor="numberInput">Number: </label>
      </div>
    </div>
  );
}

export default App;