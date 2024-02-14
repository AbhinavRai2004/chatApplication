import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./Chat.css";

const socket = io("http://localhost:5000", { transports: ["websocket"] });

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    return () => {
      socket.off("message");
    };
  }, [messages]);

  const handleMessage = () => {
    if (input.trim() !== "") {
      socket.emit("message", input);
      setInput("");
    }
  };

  return (
    <div className="container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleMessage}>Send</button>
    </div>
  );
};

export default Chat;
