import { useState } from "react";
import { Header } from "./components/Header";
import "./global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
