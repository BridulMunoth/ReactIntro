import { useState } from "react";
// import './App.css'
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Dynamic Card Builder</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          AAD count {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          REDUCE count {count}
        </button>
      </div>
      <div className="container d-flex flex-column gap-3">
        <Card
          title="Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1"
          duration="31:20"
          views="727000"
          time="2 months ago"
          channel="CodeWithHarry"
        />
        <Card
          title="Sigma Web Development Totorial 2"
          duration="25:20"
          views="700000"
          time="2 months ago"
        />
        <Card
          title="Sigma Web Development Totorial 3"
          duration="31:20"
          views="59550"
          time="2 months ago"
        />
      </div>
    </>
  );
}

export default App;
