import React, { useState } from "react";
import useUserInfo from "./hooks/useUserInfo";
import Card from "./components/Card";

const App = () => {
  let [username, setUsername] = useState("git21221");
  let [name, setName] = useState("");
  const data = useUserInfo(username);
  const search = () => {
    setUsername(name);
  };

  return (
    <div>
      <h1>Github</h1>
      <Card
        username={data.name}
        followers={data.followers}
        photo={data.avatar_url}
        id={data.id}
      />
      <input
        type="text"
        value={name}
        className="text-black"
        onChange={(e) => setName(e.target.value)}
      />
      <button id="search" onClick={() => search()}>
        Search
      </button>
    </div>
  );
};

export default App;
