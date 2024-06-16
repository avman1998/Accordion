import { useState } from "react";
import Accordion from "./Accordion";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <Accordion />;
}

export default App;
