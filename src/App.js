import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import "./components/Button/Button-style.css"

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <>
    <div className = "container_button">
      <Button onClick={randomNumber} className="buttonn">
        gerar
      </Button>
      <span>{number}</span>
    </div>
    </>
  );
}

export default App;
