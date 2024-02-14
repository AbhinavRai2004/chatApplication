import { useState } from "react";
import Chat from "./Chat";
import "./App.css";

const App = () => {
  const [isHide, setHide] = useState(false);

  function toggle() {
    setHide((isHide) => !isHide);
  }

  return (
    <>
    <h1>Chat App</h1>
    <div className="container1">
      {isHide && <Chat />}
      <button onClick={toggle}>
        {isHide ? "Close chatting" : "Start chatting"}
      </button>
    </div>
    </>
  );
};

export default App;
