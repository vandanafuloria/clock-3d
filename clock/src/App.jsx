import { useState } from "react";
import Clock from "./Clock";
import "./App.css";

function App() {
  const [time, setTime] = useState("");

  setInterval(() => {
    setTime(getFullTime());
  }, 1);

  function getFullTime() {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const ms = Math.floor(time.getMilliseconds() / 10);

    return { hour, min, sec, ms };
  }

  return <Clock getFullTime={getFullTime} />;
}

export default App;
