import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Preloader from "./components/Preloader";

function App({ name: Kevin }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Preloader />
      <div>
        <h1>Hello {name}</h1>
      </div>
    </>
  );
}

export default App;
